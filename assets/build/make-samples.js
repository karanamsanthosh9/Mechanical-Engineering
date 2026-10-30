// Generates sample diagrams as SVG + PNG. Run: node make-samples.js (needs @resvg/resvg-js)
const fs = require('fs');
const path = require('path');
const { Resvg } = require(process.env.RESVG_PATH || '@resvg/resvg-js');

const OUT = path.join(__dirname, '..', 'samples');
fs.mkdirSync(OUT, { recursive: true });

const FONT = 'Arial, Helvetica, sans-serif';
const INK = '#1f2328';
const BLUE = '#3b82d4';
const RED = '#c0392b';
const GREY = '#57606a';

// Markers use orient="auto" (resvg does not honour auto-start-reverse).
const open = (w, h) =>
   `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="${FONT}">` +
   `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">` +
   `<path d="M0,0 L10,5 L0,10 z" fill="${INK}"/></marker>` +
   `<marker id="ahr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">` +
   `<path d="M0,0 L10,5 L0,10 z" fill="${RED}"/></marker></defs>` +
   `<rect width="${w}" height="${h}" fill="#ffffff"/>`;
const close = '</svg>';

const text = (x, y, s, o = {}) =>
   `<text x="${x}" y="${y}" font-size="${o.size || 14}" fill="${o.fill || INK}" text-anchor="${o.anchor || 'start'}"` +
   `${o.bold ? ' font-weight="bold"' : ''}${o.italic ? ' font-style="italic"' : ''}>${s}</text>`;
const line = (x1, y1, x2, y2, o = {}) =>
   `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.stroke || INK}" stroke-width="${o.w || 1.5}"` +
   `${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ' marker-end="url(#ah)"' : ''}/>`;

// ---- support symbols (beam axis at y) ----
const pin = (x, y) =>
   `<path d="M${x},${y} l-14,24 h28 z" fill="#e5e7eb" stroke="${INK}" stroke-width="1.5"/>` +
   line(x - 22, y + 24, x + 22, y + 24);
const roller = (x, y) =>
   `<path d="M${x},${y} l-14,20 h28 z" fill="#e5e7eb" stroke="${INK}" stroke-width="1.5"/>` +
   `<circle cx="${x - 7}" cy="${y + 25}" r="5" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` +
   `<circle cx="${x + 7}" cy="${y + 25}" r="5" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` +
   line(x - 22, y + 30, x + 22, y + 30);
const wall = (x, y, side) => {
   const dir = side === 'left' ? -1 : 1;
   let s = line(x, y - 28, x, y + 28, { w: 3 });
   for (let i = -28; i < 28; i += 8) {
      s += line(x, y + i + 8, x + dir * 10, y + i, { w: 1 });
   }
   return s;
};
const beam = (x1, x2, y) => line(x1, y, x2, y, { w: 6 });
const udl = (x1, x2, y, n = 9) => {
   let s = line(x1, y - 34, x2, y - 34, { stroke: RED, w: 1.5 });
   for (let i = 0; i < n; i++) {
      const x = x1 + ((x2 - x1) * i) / (n - 1);
      s += `<line x1="${x}" y1="${y - 34}" x2="${x}" y2="${y - 8}" stroke="${RED}" stroke-width="1.5" marker-end="url(#ahr)"/>`;
   }
   return s;
};
const pload = (x, y, label) =>
   `<line x1="${x}" y1="${y - 48}" x2="${x}" y2="${y - 4}" stroke="${RED}" stroke-width="2" marker-end="url(#ahr)"/>` +
   text(x, y - 54, label, { anchor: 'middle', fill: RED, bold: true });

// =============== Sample 1: types of beams ===============
function beamTypes() {
   const W = 900, H = 1010;
   let s = open(W, H);
   s += text(W / 2, 32, 'Types of Beams (by support condition)', { anchor: 'middle', size: 20, bold: true });
   const rows = [
      { name: '1. Simply supported beam', note: 'Pin at one end, roller at the other. Statically determinate (3 reactions: R_A, H_A, R_B).' },
      { name: '2. Cantilever beam', note: 'Fixed at one end, free at the other. Statically determinate (V, H, M at the wall).' },
      { name: '3. Overhanging beam', note: 'Simply supported with one or both ends projecting beyond a support. Determinate.' },
      { name: '4. Fixed (built-in) beam', note: 'Both ends fixed. Indeterminate to the 3rd degree (2nd degree for vertical loads only).' },
      { name: '5. Propped cantilever', note: 'Fixed at one end, roller/prop at the other. Statically indeterminate to the 1st degree.' },
      { name: '6. Continuous beam', note: 'More than two supports. Indeterminate; solved by Clapeyron three-moment equation.' }
   ];
   const top = 70, step = 150;
   rows.forEach((r, i) => {
      const y0 = top + i * step;
      s += text(40, y0, r.name, { bold: true, size: 15, fill: BLUE });
      s += text(40, y0 + 18, r.note, { size: 12, fill: GREY });
      const by = y0 + 100;
      if (i === 0) {
         s += beam(300, 700, by) + pin(300, by + 3) + roller(700, by + 3);
         s += pload(500, by, 'W');
      } else if (i === 1) {
         s += wall(300, by, 'left') + beam(300, 700, by) + pload(700, by, 'W');
         s += text(700, by + 28, 'free end', { size: 12, fill: GREY, anchor: 'middle' });
      } else if (i === 2) {
         s += beam(260, 720, by) + pin(360, by + 3) + roller(600, by + 3);
         s += pload(720, by, 'W') + pload(260, by, 'W');
         s += text(300, by + 24, 'overhang', { size: 12, fill: GREY, anchor: 'middle' });
         s += text(690, by + 24, 'overhang', { size: 12, fill: GREY, anchor: 'middle' });
      } else if (i === 3) {
         s += wall(300, by, 'left') + beam(300, 700, by) + wall(700, by, 'right');
         s += pload(500, by, 'W');
      } else if (i === 4) {
         s += wall(300, by, 'left') + beam(300, 700, by) + roller(700, by + 3);
         s += udl(312, 688, by);
      } else {
         s += beam(240, 760, by) + pin(240, by + 3) + roller(400, by + 3) + roller(560, by + 3) + roller(760, by + 3);
         s += udl(240, 760, by, 13);
      }
      if (i < rows.length - 1) s += line(40, y0 + 138, W - 40, y0 + 138, { stroke: '#e5e7eb', w: 1 });
   });
   s += text(W / 2, H - 14, 'Red arrows = applied loads. W = point load, UDL = uniformly distributed load.', { anchor: 'middle', size: 12, fill: GREY });
   return s + close;
}

// =============== Sample 2: SFD and BMD, SSB with UDL ===============
function ssbUdl() {
   const W = 900, H = 860;
   let s = open(W, H);
   const x1 = 150, x2 = 750, mid = (x1 + x2) / 2;
   s += text(W / 2, 32, 'Simply Supported Beam with UDL: SFD and BMD', { anchor: 'middle', size: 20, bold: true });

   // beam diagram
   const by = 130;
   s += udl(x1, x2, by, 13) + beam(x1, x2, by) + pin(x1, by + 3) + roller(x2, by + 3);
   s += text(mid, by - 46, 'w per unit length', { anchor: 'middle', fill: RED, size: 13 });
   // dimension line with arrow heads at both ends (two half-lines from the centre)
   s += line(mid, by + 70, x1, by + 70, { arrow: true }) + line(mid, by + 70, x2, by + 70, { arrow: true });
   s += `<rect x="${mid - 12}" y="${by + 58}" width="24" height="20" fill="#ffffff"/>`;
   s += text(mid, by + 74, 'L', { anchor: 'middle', size: 14, italic: true });
   s += line(x1, by + 46, x1, by + 78, { stroke: GREY, w: 1 }) + line(x2, by + 46, x2, by + 78, { stroke: GREY, w: 1 });
   s += text(x1 - 20, by + 8, 'A', { anchor: 'end', bold: true }) + text(x2 + 20, by + 8, 'B', { bold: true });
   s += text(x1, by + 106, 'R_A = wL/2', { anchor: 'middle', size: 13, fill: BLUE, bold: true });
   s += text(x2, by + 106, 'R_B = wL/2', { anchor: 'middle', size: 13, fill: BLUE, bold: true });

   // SFD
   const sy = 400, sh = 70;
   s += text(40, sy - sh - 40, 'Shear Force Diagram (SFD)', { bold: true, size: 15, fill: BLUE });
   s += line(x1 - 20, sy, x2 + 20, sy, { stroke: GREY, w: 1 });
   s += `<path d="M${x1},${sy} L${x1},${sy - sh} L${x2},${sy + sh} L${x2},${sy} Z" fill="#dbeafe" stroke="${BLUE}" stroke-width="2"/>`;
   s += text(x1 + 8, sy - sh - 8, '+ wL/2', { size: 13, bold: true });
   s += text(x2 - 8, sy + sh + 18, '- wL/2', { size: 13, bold: true, anchor: 'end' });
   s += text(mid + 8, sy - 8, 'V = 0 at x = L/2', { size: 12, fill: GREY });
   s += text(x1 - 28, sy + 4, '0', { anchor: 'end', size: 12, fill: GREY });
   s += text(mid, sy + sh + 56, 'V(x) = wL/2 - wx   (straight line, slope = -w)', { anchor: 'middle', size: 13 });

   // BMD
   const my = 770, mh = 80;
   s += text(40, my - mh - 62, 'Bending Moment Diagram (BMD): sagging positive, plotted upwards', { bold: true, size: 15, fill: BLUE });
   s += line(x1 - 20, my, x2 + 20, my, { stroke: GREY, w: 1 });
   s += `<path d="M${x1},${my} Q${mid},${my - 2 * mh} ${x2},${my} Z" fill="#fde2e0" stroke="${RED}" stroke-width="2"/>`;
   s += line(mid, my, mid, my - mh, { stroke: INK, w: 1, dash: '4 3' });
   s += text(mid, my - mh - 10, 'M_max = wL^2/8  at x = L/2', { anchor: 'middle', size: 13, bold: true });
   s += text(x1 - 28, my + 4, '0', { anchor: 'end', size: 12, fill: GREY });
   s += text(x2 + 28, my + 4, '0', { size: 12, fill: GREY });
   s += text(mid, my + 34, 'M(x) = wLx/2 - wx^2/2   (parabola; M_max where V = 0; dM/dx = V)', { anchor: 'middle', size: 13 });
   s += text(mid, my + 56, 'Point of contraflexure: none (M is never negative)', { anchor: 'middle', size: 12, fill: GREY });
   return s + close;
}

// =============== Sample 3: stress-strain curve, mild steel ===============
function stressStrain() {
   const W = 900, H = 790;
   let s = open(W, H);
   s += text(W / 2, 32, 'Stress-Strain Curve of Mild Steel (ductile material)', { anchor: 'middle', size: 20, bold: true });
   const ox = 110, oy = 520, ex = 820, ey = 80;
   s += line(ox, oy, ex, oy, { arrow: true, w: 2 }) + line(ox, oy, ox, ey, { arrow: true, w: 2 });
   s += text(ex, oy + 28, 'Strain (e)', { anchor: 'end', size: 14, italic: true });
   s += text(ox + 14, ey - 4, 'Stress (sigma)', { anchor: 'start', size: 14, italic: true });
   s += text(ox - 8, oy + 16, 'O', { anchor: 'end', bold: true });

   const P = { x: 190, y: 330 };
   const E = { x: 200, y: 322 };
   const U1 = { x: 235, y: 262 };
   const L1 = { x: 250, y: 295 };
   const L2 = { x: 330, y: 292 };
   const UL = { x: 560, y: 150 };
   const F = { x: 700, y: 235 };
   const C = { x: 700, y: 120 };

   const curve =
      `M${ox},${oy} L${P.x},${P.y} L${E.x},${E.y} L${U1.x},${U1.y} L${L1.x},${L1.y} ` +
      `L${L1.x + 20},${L1.y - 5} L${L1.x + 40},${L1.y + 3} L${L2.x},${L2.y} ` +
      `C400,230 480,150 ${UL.x},${UL.y} C620,150 670,190 ${F.x},${F.y}`;
   s += `<path d="${curve}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
   s += `<path d="M${UL.x},${UL.y} C620,140 670,125 ${C.x},${C.y}" fill="none" stroke="${GREY}" stroke-width="1.5" stroke-dasharray="6 4"/>`;
   s += text(C.x + 8, C.y + 4, 'true stress', { size: 12, fill: GREY });

   const dot = (p, lab, dx, dy, anchor = 'start') =>
      `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${RED}"/>` + text(p.x + dx, p.y + dy, lab, { bold: true, size: 14, anchor });
   s += dot(P, 'A', -12, 4, 'end');
   s += dot(U1, 'B', -10, -6, 'end');
   s += dot(L1, 'C', 8, 18);
   s += dot(UL, 'D', 0, -14, 'middle');
   s += dot(F, 'E', 10, 14);
   s += line(UL.x, UL.y, UL.x, oy, { stroke: GREY, w: 1, dash: '4 3' }) + line(ox, UL.y, UL.x, UL.y, { stroke: GREY, w: 1, dash: '4 3' });
   s += line(F.x, F.y, F.x, oy, { stroke: GREY, w: 1, dash: '4 3' });
   s += text(ox + 8, UL.y - 6, 'UTS', { size: 12, fill: GREY });

   // zone labels sit just above the axis; elastic bracket sits below it
   s += text(L1.x + 20, oy - 10, 'Yielding', { size: 12, fill: GREY, anchor: 'middle' });
   s += text(430, oy - 10, 'Strain hardening', { size: 12, fill: GREY, anchor: 'middle' });
   s += text(630, oy - 10, 'Necking', { size: 12, fill: GREY, anchor: 'middle' });
   s += line(L2.x + 5, oy - 24, L2.x + 5, oy, { stroke: '#e5e7eb', w: 1 });
   s += line(ox, oy + 12, P.x, oy + 12, { stroke: BLUE, w: 3 });
   s += text(ox, oy + 30, 'Elastic', { size: 12, fill: BLUE });

   // legend below the plot
   const legend = [
      "A  Proportional limit (Hooke's law ends; stress is proportional to strain)",
      'B  Upper yield point (sudden drop begins)',
      'C  Lower yield point (stress stays about constant while strain rises)',
      'D  Ultimate tensile strength, UTS (maximum nominal stress)',
      'E  Fracture / breaking point (nominal stress falls because of necking)'
   ];
   const bx = 110, by = 612;
   s += `<rect x="${bx}" y="${by - 20}" width="640" height="116" fill="#f7f8fa" stroke="#e5e7eb"/>`;
   legend.forEach((t, i) => { s += text(bx + 14, by + i * 21, t, { size: 13 }); });

   s += text(W / 2, H - 16, "Slope of OA = Young's modulus E. Elastic limit is very close to A. Brittle materials show no yield point.", { anchor: 'middle', size: 12, fill: GREY });
   return s + close;
}

const files = { 'beam-types': beamTypes(), 'ssb-udl-sfd-bmd': ssbUdl(), 'stress-strain-mild-steel': stressStrain() };
for (const [name, svg] of Object.entries(files)) {
   fs.writeFileSync(path.join(OUT, name + '.svg'), svg, 'utf8');
   const png = new Resvg(svg, { fitTo: { mode: 'zoom', value: 2 }, font: { loadSystemFonts: true, defaultFontFamily: 'Arial' } }).render().asPng();
   fs.writeFileSync(path.join(OUT, name + '.png'), png);
   console.log('wrote', name);
}
