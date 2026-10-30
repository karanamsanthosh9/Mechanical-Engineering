'use strict';
// Usage: RESVG_PATH=<path to @resvg/resvg-js> node build.js [batchName ...] [--insert]
// Each batch file in ./diagrams/ exports an array of diagram specs:
//   { folder, name, w, h, title, caption, file, section, draw(L) -> svg body string }
//   file    = chapter path relative to the repo root, e.g. '02-Strength-of-Materials/02-sfd-bmd.md'
//   section = heading prefix inside Part A where the image is appended, e.g. 'A5.'
const fs = require('fs');
const path = require('path');
const L = require('./lib');
const { Resvg } = require(process.env.RESVG_PATH || '@resvg/resvg-js');

const ROOT = path.join(__dirname, '..', '..');
const ASSETS = path.join(__dirname, '..');
const args = process.argv.slice(2);
const doInsert = args.includes('--insert');
const wanted = args.filter((a) => !a.startsWith('--'));

const dir = path.join(__dirname, 'diagrams');
const batches = fs.readdirSync(dir).filter((f) => f.endsWith('.js') && !f.startsWith('_')).sort();
let count = 0;
const specs = [];
for (const b of batches) {
   const key = b.replace(/\.js$/, '');
   if (wanted.length && !wanted.some((w) => key.includes(w))) continue;
   const list = require(path.join(dir, b));
   for (const d of list) specs.push(Object.assign({ batch: key }, d));
}

// ---- automatic layout check: text outside canvas and text/text overlaps (approximate widths) ----
function textBoxes(svg) {
   const out = [];
   const re = /<text ([^>]*)>([\s\S]*?)<\/text>/g;
   let m;
   while ((m = re.exec(svg))) {
      const a = m[1];
      if (a.includes('transform=')) continue;
      const g = (k) => { const r = new RegExp(' ' + k + '="([^"]*)"').exec(' ' + a); return r ? r[1] : null; };
      const x = +g('x'), y = +g('y'), size = +g('font-size'), anchor = g('text-anchor') || 'start';
      const bold = a.includes('font-weight="bold"');
      const parts = m[2].split(/<tspan x="[^"]*" dy="[^"]*">/);
      const dys = [...m[2].matchAll(/<tspan x="[^"]*" dy="([^"]*)">/g)].map((d) => +d[1]);
      const lines = parts.length > 1 ? parts.slice(1) : [m[2]];
      let yy = y;
      lines.forEach((ln, i) => {
         if (parts.length > 1) yy += dys[i];
         const plain = ln.replace(/<[^>]+>/g, '').replace(/&[#\w]+;/g, 'x');
         const w = plain.length * size * (bold ? 0.58 : 0.52);
         const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
         out.push({ t: plain, x0, x1: x0 + w, y0: yy - size * 0.78, y1: yy + size * 0.22 });
      });
   }
   return out;
}
let layoutIssues = 0;
function checkLayout(id, svg, w, h) {
   const b = textBoxes(svg);
   const issues = [];
   b.forEach((t) => { if (t.x0 < 2 || t.x1 > w - 2 || t.y0 < 0 || t.y1 > h) issues.push('outside: ' + t.t); });
   for (let i = 0; i < b.length; i++) {
      for (let j = i + 1; j < b.length; j++) {
         const p = b[i], q = b[j];
         if (p.x0 + 2 < q.x1 && q.x0 + 2 < p.x1 && p.y0 + 2 < q.y1 && q.y0 + 2 < p.y1) issues.push('overlap: [' + p.t + '] / [' + q.t + ']');
      }
   }
   if (issues.length) console.log('LAYOUT ' + id + ': ' + issues.join(' | '));
   layoutIssues += issues.length;
}

const seen = new Set();
for (const d of specs) {
   const id = d.folder + '/' + d.name;
   if (seen.has(id)) throw new Error('duplicate diagram id ' + id);
   seen.add(id);
   const out = path.join(ASSETS, d.folder);
   fs.mkdirSync(out, { recursive: true });
   const svg = L.fig(d.w, d.h, d.title, d.draw(L));
   checkLayout(id, svg, d.w, d.h);
   fs.writeFileSync(path.join(out, d.name + '.svg'), svg, 'utf8');
   const png = new Resvg(svg, { fitTo: { mode: 'zoom', value: 2 }, font: { loadSystemFonts: true, defaultFontFamily: 'Arial' } }).render().asPng();
   fs.writeFileSync(path.join(out, d.name + '.png'), png);
   count++;
}
console.log('rendered', count, 'diagrams; layout issues:', layoutIssues);

// ---- assets/INDEX.md: list of every diagram with a suggested place in the notes (only for a full build) ----
if (!wanted.length) {
   const rows = ['# Diagram index', '', 'Every diagram is available as PNG (for Notion and GitHub) and SVG (editable).',
      'Paths are relative to the repository root. Suggested placement is the Part A section where the figure fits best.', '',
      '| Image | Title | Suggested chapter file | Section |', '|---|---|---|---|'];
   for (const d of specs) {
      const img = 'assets/' + d.folder + '/' + d.name + '.png';
      rows.push('| [`' + d.name + '.png`](' + d.folder + '/' + d.name + '.png) | ' + d.title.replace(/\|/g, '/') + ' | ' +
         (d.file ? '`' + d.file + '`' : '-') + ' | ' + (d.section ? d.section.replace('.', '') : '-') + ' |');
      void img;
   }
   rows.push('', 'Markdown to paste into a chapter: `![caption](../assets/<folder>/<name>.png)`', '');
   fs.writeFileSync(path.join(ASSETS, 'INDEX.md'), rows.join('\n'), 'utf8');
   console.log('wrote assets/INDEX.md with', specs.length, 'rows');
}

if (doInsert) {
   let inserted = 0, skipped = 0;
   for (const d of specs) {
      if (!d.file) continue;
      const fp = path.join(ROOT, d.file);
      let txt = fs.readFileSync(fp, 'utf8');
      const rel = '../assets/' + d.folder + '/' + d.name + '.png';
      if (txt.includes('(' + rel + ')')) { skipped++; continue; }
      const lines = txt.split('\n');
      const startIdx = lines.findIndex((l) => l.startsWith('### ' + d.section));
      if (startIdx < 0) throw new Error('section ' + d.section + ' not found in ' + d.file);
      let end = startIdx + 1;
      while (end < lines.length && !/^(### |## |---\s*$)/.test(lines[end])) end++;
      // end = index of next heading/rule. Insert before trailing blank lines of the section.
      let ins = end;
      while (ins > startIdx + 1 && lines[ins - 1].trim() === '') ins--;
      const alt = d.caption.replace(/[\[\]]/g, '');
      const block = ['', '![' + alt + '](' + rel + ')', '', '*Figure: ' + d.caption + '*'];
      lines.splice(ins, 0, ...block);
      fs.writeFileSync(fp, lines.join('\n'), 'utf8');
      inserted++;
   }
   console.log('inserted', inserted, 'skipped', skipped);
}
