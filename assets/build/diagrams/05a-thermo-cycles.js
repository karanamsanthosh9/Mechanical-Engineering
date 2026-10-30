'use strict';
// Batch 05a: Thermodynamics - air-standard cycles (P-v and T-s)
const F4 = '05-Thermodynamics/04-gas-and-vapour-power-cycles.md';
const F2 = '05-Thermodynamics/02-second-law-entropy-availability.md';
const FOLDER = '05-thermodynamics';
const G = 1.4;
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const vseg = (x, y1, y2) => [[x, y1], [x, y2]];
const hseg = (x1, x2, y) => [[x1, y], [x2, y]];
const adi = (v0, p0) => (v) => p0 * Math.pow(v0 / v, G);
const iso = (v0, p0) => (v) => (p0 * v0) / v;
const cyc = (P, parts) => {
   let all = [];
   parts.forEach((p) => { all = all.concat(p.pts); });
   let s = P.areaPts(all, { f: 'lblue' });
   parts.forEach((p) => { s += P.pts(p.pts, { c: p.c, w: 3 }); });
   return s;
};
const st = (P, x, y, n, dx, dy) => P.dot(x, y, { c: 'red' }) + P.text(x, y, n, { dx, dy, bold: true, size: 14 });
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'otto-cycle-pv-ts', w: 900, h: 480, file: F4, section: 'A3.',
      title: 'Otto Cycle: P-v and T-s Diagrams',
      caption: 'Constant-volume heat addition and rejection joined by two isentropic processes',
      draw: (L) => {
         const P1 = L.plot(70, 370, 320, 270, 0, 1.1, 0, 5);
         const p2 = adi(1, 0.2)(0.2), p4 = adi(0.2, 4.5)(1);
         let s = sub(L, 230, 58, 'P-v diagram') + P1.axes('v', 'p');
         s += cyc(P1, [{ pts: seg(adi(1, 0.2), 1, 0.2), c: 'blue' }, { pts: vseg(0.2, p2, 4.5), c: 'red' }, { pts: seg(adi(0.2, 4.5), 0.2, 1), c: 'blue' }, { pts: vseg(1, p4, 0.2), c: 'green' }]);
         s += st(P1, 1, 0.2, '1', 8, 16) + st(P1, 0.2, p2, '2', -16, 4) + st(P1, 0.2, 4.5, '3', -16, 4) + st(P1, 1, p4, '4', 10, -8);
         s += P1.text(0.3, 3.2, 'Q_{in}', { c: 'red', bold: true }) + P1.text(1, 0.33, 'Q_{out}', { dx: 10, dy: 4, c: 'green', bold: true });
         const P2 = L.plot(500, 370, 320, 270, 0, 1, 0, 1.1);
         s += sub(L, 660, 58, 'T-s diagram') + P2.axes('s', 'T');
         s += cyc(P2, [{ pts: vseg(0.2, 0.2, 0.45), c: 'blue' }, { pts: seg((x) => 0.45 * Math.exp((x - 0.2) * 1.452), 0.2, 0.75), c: 'red' }, { pts: vseg(0.75, 1.0, 0.44), c: 'blue' }, { pts: seg((x) => 0.2 * Math.exp((x - 0.2) * 1.433), 0.75, 0.2), c: 'green' }]);
         s += st(P2, 0.2, 0.2, '1', -16, 4) + st(P2, 0.2, 0.45, '2', -16, 4) + st(P2, 0.75, 1.0, '3', 8, -6) + st(P2, 0.75, 0.44, '4', 10, 4);
         s += L.note(70, 408, ['1-2 isentropic compression; 2-3 heat added at constant v; 3-4 isentropic expansion; 4-1 heat rejected at constant v', 'Efficiency: \\eta = 1 - 1/r^{\\gamma-1}, with compression ratio r = v_{1}/v_{2}; depends only on r and \\gamma'], { w: 760, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'diesel-dual-cycles-pv', w: 900, h: 480, file: F4, section: 'A4.',
      title: 'Diesel and Dual Cycles on the P-v Plane',
      caption: 'Diesel adds heat at constant pressure; the dual cycle adds part at constant volume and part at constant pressure',
      draw: (L) => {
         const P1 = L.plot(70, 370, 320, 270, 0, 1.1, 0, 4);
         const p2 = adi(1, 0.15)(0.125), p4 = adi(0.3, p2)(1);
         let s = sub(L, 230, 58, 'Diesel cycle') + P1.axes('v', 'p');
         s += cyc(P1, [{ pts: seg(adi(1, 0.15), 1, 0.125), c: 'blue' }, { pts: hseg(0.125, 0.3, p2), c: 'red' }, { pts: seg(adi(0.3, p2), 0.3, 1), c: 'blue' }, { pts: vseg(1, p4, 0.15), c: 'green' }]);
         s += st(P1, 1, 0.15, '1', 8, 16) + st(P1, 0.125, p2, '2', -16, 4) + st(P1, 0.3, p2, '3', 6, -8) + st(P1, 1, p4, '4', 10, -8);
         const P2 = L.plot(500, 370, 320, 270, 0, 1.1, 0, 4);
         const q4 = adi(0.25, 3.6)(1);
         s += sub(L, 660, 58, 'Dual cycle') + P2.axes('v', 'p');
         s += cyc(P2, [{ pts: seg(adi(1, 0.15), 1, 0.125), c: 'blue' }, { pts: vseg(0.125, p2, 3.6), c: 'red' }, { pts: hseg(0.125, 0.25, 3.6), c: 'red' }, { pts: seg(adi(0.25, 3.6), 0.25, 1), c: 'blue' }, { pts: vseg(1, q4, 0.15), c: 'green' }]);
         s += st(P2, 1, 0.15, '1', 8, 16) + st(P2, 0.125, p2, '2', -16, 4) + st(P2, 0.125, 3.6, '3', -16, 4) + st(P2, 0.25, 3.6, '4', 6, -8) + st(P2, 1, q4, '5', 10, -8);
         s += L.note(70, 408, ['Diesel: \\eta = 1 - (1/r^{\\gamma-1}) (\\rho^{\\gamma} - 1)/(\\gamma (\\rho - 1)),  cut-off ratio \\rho = v_{3}/v_{2}', 'Dual: \\alpha = p_{3}/p_{2} (pressure ratio) and \\rho = v_{4}/v_{3}; for the same r, \\eta: Otto > Dual > Diesel'], { w: 760, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'brayton-cycle-pv-ts', w: 900, h: 480, file: F4, section: 'A7.',
      title: 'Brayton (Joule) Cycle: P-v and T-s Diagrams',
      caption: 'Ideal gas turbine cycle with two isentropic and two constant-pressure processes',
      draw: (L) => {
         const P1 = L.plot(70, 370, 320, 270, 0, 2.6, 0, 1.4);
         const v2 = Math.pow(0.2 / 1.2, 1 / G), v4 = 0.65 * Math.pow(6, 1 / G);
         let s = sub(L, 230, 58, 'P-v diagram') + P1.axes('v', 'p');
         s += cyc(P1, [{ pts: seg(adi(1, 0.2), 1, v2), c: 'blue' }, { pts: hseg(v2, 0.65, 1.2), c: 'red' }, { pts: seg(adi(0.65, 1.2), 0.65, v4), c: 'blue' }, { pts: hseg(v4, 1, 0.2), c: 'green' }]);
         s += st(P1, 1, 0.2, '1', 4, 18) + st(P1, v2, 1.2, '2', -14, 4) + st(P1, 0.65, 1.2, '3', 4, -8) + st(P1, v4, 0.2, '4', 8, 18);
         s += P1.text(1.1, 1.0, 'p_{2} = p_{3}', { c: 'red', bold: true, size: 12 }) + P1.text(1.45, 0.07, 'p_{1} = p_{4}', { c: 'green', bold: true, size: 12 });
         const P2 = L.plot(500, 370, 320, 270, 0, 1, 0, 1.1);
         s += sub(L, 660, 58, 'T-s diagram') + P2.axes('s', 'T');
         s += cyc(P2, [{ pts: vseg(0.2, 0.25, 0.55), c: 'blue' }, { pts: seg((x) => 0.55 * Math.exp((x - 0.2) * 0.996), 0.2, 0.8), c: 'red' }, { pts: vseg(0.8, 1.0, 0.45), c: 'blue' }, { pts: seg((x) => 0.25 * Math.exp((x - 0.2) * 0.98), 0.8, 0.2), c: 'green' }]);
         s += st(P2, 0.2, 0.25, '1', -16, 4) + st(P2, 0.2, 0.55, '2', -16, 4) + st(P2, 0.8, 1.0, '3', 8, -6) + st(P2, 0.8, 0.45, '4', 10, 4);
         s += L.note(70, 408, ['1-2 compressor; 2-3 combustor (p constant); 3-4 turbine; 4-1 heat rejection (p constant)', 'Efficiency: \\eta = 1 - 1/r_{p}^{(\\gamma-1)/\\gamma}; net work is maximum when T_{2}/T_{1} = \\sqrt(T_{3}/T_{1})'], { w: 760, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'carnot-cycle-pv-ts', w: 900, h: 480, file: F2, section: 'A4.',
      title: 'Carnot Cycle: P-v and T-s Diagrams',
      caption: 'Two isothermal and two adiabatic reversible processes; the T-s diagram is a rectangle',
      draw: (L) => {
         const P1 = L.plot(70, 370, 320, 270, 0, 1.5, 0, 3.4);
         const p3 = adi(0.6, 1.5)(1.3), p4 = p3 * 2;
         let s = sub(L, 230, 58, 'P-v diagram') + P1.axes('v', 'p');
         s += cyc(P1, [{ pts: seg(iso(0.3, 3), 0.3, 0.6), c: 'red' }, { pts: seg(adi(0.6, 1.5), 0.6, 1.3), c: 'blue' }, { pts: seg(iso(1.3, p3), 1.3, 0.65), c: 'green' }, { pts: seg(adi(0.3, 3), 0.65, 0.3), c: 'blue' }]);
         s += st(P1, 0.3, 3, '1', -14, 4) + st(P1, 0.6, 1.5, '2', 8, -6) + st(P1, 1.3, p3, '3', 8, -4) + st(P1, 0.65, p4, '4', -14, 14);
         s += P1.text(0.45, 2.45, 'T_{H}', { c: 'red', bold: true }) + P1.text(1.0, 0.5, 'T_{L}', { c: 'green', bold: true });
         const P2 = L.plot(500, 370, 320, 270, 0, 1, 0, 1.2);
         s += sub(L, 660, 58, 'T-s diagram') + P2.axes('s', 'T');
         s += cyc(P2, [{ pts: hseg(0.25, 0.75, 1.0), c: 'red' }, { pts: vseg(0.75, 1.0, 0.4), c: 'blue' }, { pts: hseg(0.75, 0.25, 0.4), c: 'green' }, { pts: vseg(0.25, 0.4, 1.0), c: 'blue' }]);
         s += st(P2, 0.25, 1.0, '1', -16, 4) + st(P2, 0.75, 1.0, '2', 8, -6) + st(P2, 0.75, 0.4, '3', 8, 14) + st(P2, 0.25, 0.4, '4', -16, 14);
         s += P2.text(0.5, 1.0, 'T_{H}, Q_{in}', { dy: -10, anchor: 'middle', c: 'red', bold: true }) + P2.text(0.5, 0.4, 'T_{L}, Q_{out}', { dy: 20, anchor: 'middle', c: 'green', bold: true });
         s += L.note(70, 408, ['1-2 isothermal expansion; 2-3 adiabatic expansion; 3-4 isothermal compression; 4-1 adiabatic compression', 'Efficiency: \\eta = 1 - T_{L}/T_{H}; the maximum possible between two reservoirs; COP = T_{L}/(T_{H} - T_{L}) for a refrigerator'], { w: 760, size: 12 });
         return s;
      }
   }
];
