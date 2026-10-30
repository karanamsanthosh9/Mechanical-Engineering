'use strict';
// Shared helper: draws the loaded beam, SFD and BMD stacked vertically.
// o.loads(L, by, x1, x2) -> svg (beam, supports, loads, labels)
// o.Vpts / o.Mpts : [[xFraction, value], ...] (value in the units of vmax / mmax; sagging positive plotted upwards)
// o.vmax / o.mmax : value mapped to the full half-height
// o.ann : [[kind('V'|'M'), xFraction, value, text, dx, dy, anchor], ...]
// o.guides : x fractions drawn as light vertical guide lines
// o.formulas : up to 3 text lines under the BMD
module.exports = function sfdBmd(L, o) {
   const x1 = o.x1 || 150, x2 = o.x2 || 750, W = x2 - x1;
   const by = 150, sy = 380, sh = 70, my = 640, mh = 80;
   const X = (f) => x1 + f * W;
   const VY = (v) => sy - (v / o.vmax) * sh;
   const MY = (m) => my - (m / o.mmax) * mh;
   let s = '';
   (o.guides || [0, 1]).forEach((g) => { s += L.line(X(g), by + 44, X(g), my + 95, { c: 'border', w: 1, dash: '3 3' }); });
   s += o.loads(L, by, x1, x2);
   s += L.dim(x1, by + 74, x2, by + 74, o.dimLabel || 'L', {});

   s += L.text(40, sy - sh - 34, 'Shear Force Diagram (SFD)', { bold: true, size: 15, c: 'blue' });
   s += L.line(x1 - 20, sy, x2 + 20, sy, { c: 'grey', w: 1 });
   const vp = o.Vpts.map((p) => [X(p[0]), VY(p[1])]);
   s += L.poly([[X(o.Vpts[0][0]), sy]].concat(vp, [[X(o.Vpts[o.Vpts.length - 1][0]), sy]]), { f: 'lblue', s: null });
   s += L.polyline(vp, { c: 'blue', w: 2.2 });

   s += L.text(40, my - mh - 34, 'Bending Moment Diagram (BMD): sagging positive, plotted upwards', { bold: true, size: 15, c: 'blue' });
   s += L.line(x1 - 20, my, x2 + 20, my, { c: 'grey', w: 1 });
   const mp = o.Mpts.map((p) => [X(p[0]), MY(p[1])]);
   s += L.poly([[X(o.Mpts[0][0]), my]].concat(mp, [[X(o.Mpts[o.Mpts.length - 1][0]), my]]), { f: 'lred', s: null });
   s += L.polyline(mp, { c: 'red', w: 2.2 });

   (o.ann || []).forEach((a) => {
      const px = X(a[1]) + (a[4] || 0), py = (a[0] === 'V' ? VY(a[2]) : MY(a[2])) + (a[5] || 0);
      s += L.text(px, py, a[3], { size: 13, bold: true, anchor: a[6] || 'start', c: a[0] === 'V' ? 'blue' : 'red' });
   });
   (o.formulas || []).forEach((f, i) => { s += L.text(450, 790 + i * 22, f, { anchor: 'middle', size: 13 }); });
   return s;
};

// sample a function f(x) on [0,1] into points
module.exports.sample = (f, n) => {
   const out = [];
   const k = n || 40;
   for (let i = 0; i <= k; i++) out.push([i / k, f(i / k)]);
   return out;
};
