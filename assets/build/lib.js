'use strict';
// Shared SVG drawing helpers for the Mechanical Engineering diagrams.
// All functions return SVG strings. Coordinates are screen pixels (y grows downwards).

const COL = {
   ink: '#1f2328', blue: '#3b82d4', red: '#c0392b', grey: '#57606a', green: '#2e8b57', orange: '#d98a1f', purple: '#7c5cd8',
   lblue: '#dbeafe', lred: '#fde2e0', lgreen: '#dcf3e4', lgrey: '#f7f8fa', border: '#e5e7eb', lorange: '#fdecc8', lpurple: '#e9e3fa',
   white: '#ffffff', mid: '#c9ced6'
};
const MARK_KEYS = ['ink', 'blue', 'red', 'grey', 'green', 'orange', 'purple'];
const FONT = 'Arial, Helvetica, sans-serif';

const GREEK = {
   alpha: '&#945;', beta: '&#946;', gamma: '&#947;', delta: '&#948;', epsilon: '&#949;', zeta: '&#950;', eta: '&#951;', theta: '&#952;',
   lambda: '&#955;', mu: '&#956;', nu: '&#957;', pi: '&#960;', rho: '&#961;', sigma: '&#963;', tau: '&#964;', phi: '&#966;',
   psi: '&#968;', omega: '&#969;', Delta: '&#916;', Sigma: '&#931;', Omega: '&#937;', Phi: '&#934;', Theta: '&#920;',
   deg: '&#176;', times: '&#215;', pm: '&#177;', le: '&#8804;', ge: '&#8805;', approx: '&#8776;', infty: '&#8734;',
   sqrt: '&#8730;', cdot: '&#183;', rightarrow: '&#8594;', propto: '&#8733;', partial: '&#8706;', degC: '&#176;C'
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Rich text: \greek, _{sub}, ^{sup}
function rich(s) {
   let t = esc(s);
   t = t.replace(/\\([A-Za-z]+)/g, (m, n) => (GREEK[n] ? GREEK[n] : m));
   t = t.replace(/_\{([^}]*)\}/g, '<tspan baseline-shift="sub" font-size="72%">$1</tspan>');
   t = t.replace(/\^\{([^}]*)\}/g, '<tspan baseline-shift="super" font-size="72%">$1</tspan>');
   return t;
}

const colr = (k) => COL[k] || k || COL.ink;
const mkey = (k) => (MARK_KEYS.includes(k) ? k : 'ink');

function defs() {
   let d = '<defs>';
   MARK_KEYS.forEach((k) => {
      d += `<marker id="ae-${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">` +
         `<path d="M0,0 L10,5 L0,10 z" fill="${COL[k]}"/></marker>`;
      d += `<marker id="as-${k}" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">` +
         `<path d="M10,0 L0,5 L10,10 z" fill="${COL[k]}"/></marker>`;
   });
   return d + '</defs>';
}

function fig(w, h, title, body) {
   return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="${FONT}">` +
      defs() + `<rect width="${w}" height="${h}" fill="#ffffff"/>` +
      text(w / 2, 30, title, { size: 19, bold: true, anchor: 'middle' }) + body + '</svg>';
}

function text(x, y, s, o = {}) {
   const rot = o.rot ? ` transform="rotate(${o.rot} ${x} ${y})"` : '';
   const lines = String(s).split('\n');
   const size = o.size || 13;
   const lh = o.lh || size * 1.25;
   let inner;
   if (lines.length === 1) {
      inner = rich(lines[0]);
   } else {
      inner = lines.map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lh}">${rich(l)}</tspan>`).join('');
   }
   return `<text x="${x}" y="${y}" font-size="${size}" fill="${colr(o.c)}" text-anchor="${o.anchor || 'start'}"` +
      `${o.bold ? ' font-weight="bold"' : ''}${o.italic ? ' font-style="italic"' : ''}${rot}>${inner}</text>`;
}

// Text with a white background pad, useful on top of lines.
function label(x, y, s, o = {}) {
   const size = o.size || 13;
   const w = String(s).replace(/\\[A-Za-z]+/g, 'x').replace(/[_^]\{[^}]*\}/g, 'x').length * size * 0.55 + 8;
   const anchor = o.anchor || 'middle';
   const rx = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x - 4;
   return `<rect x="${rx}" y="${y - size}" width="${w}" height="${size + 5}" fill="#ffffff" opacity="0.9"/>` + text(x, y, s, o);
}

function line(x1, y1, x2, y2, o = {}) {
   const c = o.c || 'ink';
   return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colr(c)}" stroke-width="${o.w || 1.5}"` +
      `${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` +
      `${o.arrow ? ` marker-end="url(#ae-${mkey(c)})"` : ''}${o.arrow0 ? ` marker-start="url(#as-${mkey(c)})"` : ''}/>`;
}
const arrow = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, Object.assign({ arrow: true }, o));
const darrow = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, Object.assign({ arrow: true, arrow0: true }, o));

// Dimension line between two points with end ticks and a label placed at the middle.
function dim(x1, y1, x2, y2, lab, o = {}) {
   const off = o.off === undefined ? 0 : o.off;
   const dx = x2 - x1, dy = y2 - y1;
   const len = Math.hypot(dx, dy) || 1;
   const nx = -dy / len, ny = dx / len; // unit normal
   const ax = x1 + nx * off, ay = y1 + ny * off, bx = x2 + nx * off, by = y2 + ny * off;
   let s = '';
   if (off !== 0) {
      s += line(x1, y1, ax + nx * 4, ay + ny * 4, { c: 'grey', w: 0.8 }) + line(x2, y2, bx + nx * 4, by + ny * 4, { c: 'grey', w: 0.8 });
   }
   s += darrow(ax, ay, bx, by, { c: o.c || 'ink', w: 1.2 });
   if (lab) s += label((ax + bx) / 2 + nx * (o.lo || 0), (ay + by) / 2 + ny * (o.lo || 0) + 4, lab, { size: o.size || 13, c: o.c || 'ink', anchor: 'middle' });
   return s;
}

function rect(x, y, w, h, o = {}) {
   return `<rect x="${x}" y="${y}" width="${w}" height="${h}"${o.r ? ` rx="${o.r}"` : ''} fill="${o.f ? colr(o.f) : 'none'}"` +
      ` stroke="${o.s === null ? 'none' : colr(o.s || 'ink')}" stroke-width="${o.w || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
}
function circle(cx, cy, r, o = {}) {
   return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.f ? colr(o.f) : 'none'}" stroke="${o.s === null ? 'none' : colr(o.s || 'ink')}"` +
      ` stroke-width="${o.w || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
}
function ellipse(cx, cy, rx, ry, o = {}) {
   return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${o.f ? colr(o.f) : 'none'}" stroke="${o.s === null ? 'none' : colr(o.s || 'ink')}"` +
      ` stroke-width="${o.w || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
}
const ptsStr = (pts) => pts.map((p) => `${+p[0].toFixed(2)},${+p[1].toFixed(2)}`).join(' ');
function poly(pts, o = {}) {
   return `<polygon points="${ptsStr(pts)}" fill="${o.f ? colr(o.f) : 'none'}" stroke="${o.s === null ? 'none' : colr(o.s || 'ink')}"` +
      ` stroke-width="${o.w || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} stroke-linejoin="round"/>`;
}
function polyline(pts, o = {}) {
   const c = o.c || 'ink';
   return `<polyline points="${ptsStr(pts)}" fill="none" stroke="${colr(c)}" stroke-width="${o.w || 2}"` +
      `${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ` marker-end="url(#ae-${mkey(c)})"` : ''} stroke-linejoin="round"/>`;
}
function path(d, o = {}) {
   const c = o.c || 'ink';
   return `<path d="${d}" fill="${o.f ? colr(o.f) : 'none'}" stroke="${o.s === null ? 'none' : colr(c)}" stroke-width="${o.w || 2}"` +
      `${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ` marker-end="url(#ae-${mkey(c)})"` : ''} stroke-linejoin="round"/>`;
}
const dot = (x, y, r = 4, c = 'red') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${colr(c)}"/>`;

// polar point (math convention: angle in degrees, counter-clockwise, y flipped for screen)
const pol = (cx, cy, r, deg) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];

function arcD(cx, cy, r, a1, a2) {
   const p1 = pol(cx, cy, r, a1), p2 = pol(cx, cy, r, a2);
   const sweepAngle = (((a2 - a1) % 360) + 360) % 360;
   return `M${p1[0].toFixed(2)},${p1[1].toFixed(2)} A${r},${r} 0 ${sweepAngle > 180 ? 1 : 0} 0 ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
}
const arc = (cx, cy, r, a1, a2, o = {}) => path(arcD(cx, cy, r, a1, a2), Object.assign({ w: 1.5 }, o));
// Angle marker between two directions with a label placed outside the arc
function angle(cx, cy, r, a1, a2, lab, o = {}) {
   const mid = (a1 + a2) / 2;
   const p = pol(cx, cy, r + (o.lr || 14), mid);
   return arc(cx, cy, r, a1, a2, { c: o.c || 'ink', w: 1.2 }) + (lab ? text(p[0], p[1] + 4, lab, { anchor: 'middle', size: o.size || 13, c: o.c || 'ink' }) : '');
}
// Moment (couple) symbol: 270 degree arc with arrow head. ccw=true for counter-clockwise (visual).
function moment(cx, cy, r, ccw, o = {}) {
   const a = pol(cx, cy, r, ccw ? 60 : 330), b = pol(cx, cy, r, ccw ? 330 : 60);
   const d = `M${a[0].toFixed(2)},${a[1].toFixed(2)} A${r},${r} 0 1 ${ccw ? 0 : 1} ${b[0].toFixed(2)},${b[1].toFixed(2)}`;
   return path(d, { c: o.c || 'red', w: 2, arrow: true });
}

// Plot helper: maps data coordinates into a pixel rectangle with origin at bottom-left.
function plot(ox, oy, w, h, xmin, xmax, ymin, ymax) {
   const X = (x) => ox + ((x - xmin) / (xmax - xmin)) * w;
   const Y = (y) => oy - ((y - ymin) / (ymax - ymin)) * h;
   const P = {
      X, Y, ox, oy, w, h,
      axes(xl, yl, o = {}) {
         let s = arrow(ox, oy, ox + w + 14, oy, { w: 2 }) + arrow(ox, oy, ox, oy - h - 14, { w: 2 });
         if (xl) s += text(ox + w + 12, oy + 24, xl, { anchor: 'end', size: o.size || 14, italic: true });
         if (yl) s += text(ox - 10, oy - h - 22, yl, { anchor: 'start', size: o.size || 14, italic: true });
         return s;
      },
      fn(f, a, b, o = {}) {
         const n = o.n || 120;
         const pts = [];
         for (let i = 0; i <= n; i++) {
            const x = a + ((b - a) * i) / n;
            const y = f(x);
            if (Number.isFinite(y)) pts.push([X(x), Y(y)]);
         }
         return polyline(pts, { c: o.c || 'blue', w: o.w || 2.5, dash: o.dash, arrow: o.arrow });
      },
      pts(arr, o = {}) {
         return polyline(arr.map((p) => [X(p[0]), Y(p[1])]), { c: o.c || 'blue', w: o.w || 2.5, dash: o.dash, arrow: o.arrow });
      },
      area(f, a, b, o = {}) {
         const n = o.n || 100;
         const pts = [[X(a), Y(o.base === undefined ? ymin : o.base)]];
         for (let i = 0; i <= n; i++) {
            const x = a + ((b - a) * i) / n;
            pts.push([X(x), Y(f(x))]);
         }
         pts.push([X(b), Y(o.base === undefined ? ymin : o.base)]);
         return poly(pts, { f: o.f || 'lblue', s: null });
      },
      areaPts(arr, o = {}) {
         return poly(arr.map((p) => [X(p[0]), Y(p[1])]), { f: o.f || 'lblue', s: o.s === undefined ? null : o.s });
      },
      vline(x, y1, y2, o = {}) { return line(X(x), Y(y1), X(x), Y(y2), { c: o.c || 'grey', w: o.w || 1, dash: o.dash === undefined ? '4 3' : o.dash }); },
      hline(y, x1, x2, o = {}) { return line(X(x1), Y(y), X(x2), Y(y), { c: o.c || 'grey', w: o.w || 1, dash: o.dash === undefined ? '4 3' : o.dash }); },
      dot(x, y, o = {}) { return dot(X(x), Y(y), o.r || 4.5, o.c || 'red'); },
      text(x, y, s, o = {}) { return text(X(x) + (o.dx || 0), Y(y) + (o.dy || 0), s, o); },
      label(x, y, s, o = {}) { return label(X(x) + (o.dx || 0), Y(y) + (o.dy || 0), s, o); }
   };
   return P;
}

// ---------- supports, loads, ground ----------
function hatch(x, y, w, dir, o = {}) {
   // hatch lines under a horizontal ground line from x to x+w at y (dir=+1 below, -1 above)
   let s = line(x, y, x + w, y, { w: 2.5 });
   const step = o.step || 9;
   for (let i = 0; i <= w; i += step) s += line(x + i, y, x + i - 7, y + dir * 9, { w: 1 });
   return s;
}
function vhatch(x, y, h, dir, o = {}) {
   // vertical wall at x from y to y+h with hatch to the side (dir=-1 left, +1 right)
   let s = line(x, y, x, y + h, { w: 3 });
   const step = o.step || 9;
   for (let i = 0; i <= h; i += step) s += line(x, y + i, x + dir * 9, y + i + 8, { w: 1 });
   return s;
}
const pin = (x, y) =>
   `<path d="M${x},${y} l-13,22 h26 z" fill="${COL.mid}" stroke="${COL.ink}" stroke-width="1.5"/>` + hatch(x - 24, y + 22, 48, 1);
const roller = (x, y) =>
   `<path d="M${x},${y} l-13,18 h26 z" fill="${COL.mid}" stroke="${COL.ink}" stroke-width="1.5"/>` +
   circle(x - 7, y + 23, 4.5, { f: 'white' }) + circle(x + 7, y + 23, 4.5, { f: 'white' }) + hatch(x - 24, y + 28, 48, 1);
const fixedWall = (x, y, h, side) => vhatch(x, y, h, side === 'left' ? -1 : 1);
const beamLine = (x1, x2, y, w = 6) => line(x1, y, x2, y, { w });
const pload = (x, y, lab, o = {}) => {
   const len = o.len || 44;
   return arrow(x, y - len, x, y - 3, { c: o.c || 'red', w: 2 }) + (lab ? text(x, y - len - 6, lab, { anchor: 'middle', c: o.c || 'red', bold: true }) : '');
};
function udl(x1, x2, y, n = 9, o = {}) {
   const hgt = o.h || 30;
   let s = line(x1, y - hgt - 4, x2, y - hgt - 4, { c: 'red' });
   for (let i = 0; i < n; i++) {
      const x = x1 + ((x2 - x1) * i) / (n - 1);
      s += arrow(x, y - hgt - 4, x, y - 3, { c: 'red' });
   }
   return s;
}
function uvl(x1, x2, y, n = 8, o = {}) {
   // triangular load, zero at x1, max at x2
   const hgt = o.h || 40;
   let s = line(x1, y - 3, x2, y - hgt - 4, { c: 'red' });
   for (let i = 1; i < n; i++) {
      const x = x1 + ((x2 - x1) * i) / (n - 1);
      const top = y - 3 - ((hgt + 1) * i) / (n - 1);
      s += arrow(x, top, x, y - 3, { c: 'red' });
   }
   return s;
}

// Generic labelled box (multi-line label split with \n)
function box(x, y, w, h, lab, o = {}) {
   const size = o.size || 13;
   const lines = String(lab).split('\n');
   const lh = size * 1.25;
   const ty = y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.35;
   return rect(x, y, w, h, { f: o.f || 'lgrey', s: o.s || 'grey', r: o.r === undefined ? 5 : o.r, w: o.w || 1.5 }) +
      text(x + w / 2, ty, lab, { anchor: 'middle', size, c: o.c || 'ink', bold: o.bold, lh });
}

const legend = (x, y, items, o = {}) => {
   let s = '';
   items.forEach((it, i) => {
      s += text(x, y + i * (o.step || 20), it, { size: o.size || 13 });
   });
   return s;
};

function note(x, y, lines, o = {}) {
   const size = o.size || 13;
   const lh = size * 1.55;
   const w = o.w || 360;
   const h = lines.length * lh + 14;
   let s = rect(x, y, w, h, { f: 'lgrey', s: 'border', w: 1 });
   lines.forEach((l, i) => { s += text(x + 12, y + 20 + i * lh, l, { size }); });
   return s;
}

module.exports = {
   COL, rich, esc, fig, text, label, line, arrow, darrow, dim, rect, circle, ellipse, poly, polyline, path, dot, pol, arcD, arc, angle,
   moment, plot, hatch, vhatch, pin, roller, fixedWall, beamLine, pload, udl, uvl, box, legend, note
};
