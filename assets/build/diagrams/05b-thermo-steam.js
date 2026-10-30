'use strict';
// Batch 05b: Thermodynamics - Rankine variants, steam property diagrams, SFEE devices
const F1 = '05-Thermodynamics/01-basic-concepts-zeroth-first-law.md';
const F3 = '05-Thermodynamics/03-pure-substances-steam-properties.md';
const F4 = '05-Thermodynamics/04-gas-and-vapour-power-cycles.md';
const FOLDER = '05-thermodynamics';

// T-s saturation dome (schematic): critical point at (0.5, 1.0), triple-point end at T = 0.15
const sf = (T) => 0.04 + 0.46 * Math.pow((T - 0.15) / 0.85, 1 / 0.75); // saturated liquid s at T
const TL = (s) => 0.15 + 0.85 * Math.pow(Math.max(s - 0.04, 0) / 0.46, 0.75);
const TG = (s) => 1.0 - 0.85 * Math.pow(Math.max(s - 0.5, 0) / 0.46, 0.8);
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const tseg = (T1, T2, n = 24) => { const r = []; for (let i = 0; i <= n; i++) { const T = T1 + ((T2 - T1) * i) / n; r.push([sf(T), T]); } return r; };
const dome = (P) => P.pts(seg(TL, 0.04, 0.5), { c: 'grey', w: 2 }) + P.pts(seg(TG, 0.5, 0.96), { c: 'grey', w: 2 }) +
   P.dot(0.5, 1.0, { c: 'orange' });
const st = (P, x, y, n, dx, dy) => P.dot(x, y, { c: 'red' }) + P.text(x, y, n, { dx, dy, bold: true, size: 14 });
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

// p-v / T-v dome (schematic): critical point at (0.3, 1.0)
const vf = (p) => 0.12 + 0.18 * p * p;
const vg = (p) => 0.3 + 0.62 * Math.pow(1 - p, 1.8);
const pseg = (f, p1, p2, n = 30) => { const r = []; for (let i = 0; i <= n; i++) { const p = p1 + ((p2 - p1) * i) / n; r.push([f(p), p]); } return r; };

module.exports = [
   {
      folder: FOLDER, name: 'rankine-cycle-layout-ts', w: 900, h: 480, file: F4, section: 'A9.',
      title: 'Simple Rankine Cycle: Plant Layout and T-s Diagram',
      caption: 'Boiler with superheater, turbine, condenser and feed pump, with the corresponding T-s diagram',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Plant layout');
         s += L.box(150, 80, 140, 60, 'Boiler +\nsuperheater', { f: 'lorange', s: 'orange' });
         s += L.box(340, 140, 110, 60, 'Turbine', { f: 'lblue', s: 'blue' });
         s += L.box(150, 280, 140, 60, 'Condenser', { f: 'lgreen', s: 'green' });
         s += L.box(30, 180, 80, 50, 'Pump', { f: 'lpurple', s: 'purple' });
         s += L.line(290, 110, 395, 110, { c: 'red', w: 2.5 }) + L.arrow(395, 110, 395, 140, { c: 'red', w: 2.5 });
         s += L.arrow(395, 200, 395, 310, { c: 'blue', w: 2.5 }) + L.arrow(395, 310, 290, 310, { c: 'blue', w: 2.5 });
         s += L.line(150, 310, 70, 310, { c: 'green', w: 2.5 }) + L.arrow(70, 310, 70, 230, { c: 'green', w: 2.5 });
         s += L.line(70, 180, 70, 110, { c: 'green', w: 2.5 }) + L.arrow(70, 110, 150, 110, { c: 'green', w: 2.5 });
         s += L.arrow(450, 170, 490, 170, { c: 'ink', w: 2 }) + L.text(458, 160, 'W_{t}', { bold: true, size: 13 });
         s += L.text(220, 72, 'Q_{in}', { c: 'red', bold: true, anchor: 'middle' }) + L.text(220, 370, 'Q_{out}', { c: 'green', bold: true, anchor: 'middle' });
         s += L.text(410, 100, '3', { bold: true }) + L.text(405, 260, '4', { bold: true }) + L.text(96, 330, '1', { bold: true }) + L.text(96, 140, '2', { bold: true });
         const P = L.plot(560, 360, 300, 260, 0, 1, 0, 1.1);
         s += sub(L, 710, 58, 'T-s diagram') + P.axes('s', 'T') + dome(P);
         const cy = [[0.04, 0.15], [0.04, 0.18]].concat(tseg(0.18, 0.7, 20), [[0.625, 0.7], [0.78, 0.95], [0.78, 0.15]]);
         s += P.areaPts(cy, { f: 'lblue' }) + P.pts(cy, { c: 'blue', w: 3 }) + P.pts(seg(TL, 0.04, 0.5), { c: 'grey', w: 2 }) + P.pts(seg(TG, 0.5, 0.96), { c: 'grey', w: 2 });
         s += st(P, 0.04, 0.15, '1', 8, 16) + st(P, 0.04, 0.18, '2', 8, -8) + st(P, 0.78, 0.95, '3', 8, -6) + st(P, 0.78, 0.15, '4', 8, 16);
         s += P.text(0.5, 1.0, 'critical point', { dx: -8, dy: -10, anchor: 'end', size: 11, c: 'orange', bold: true });
         s += L.note(40, 395, ['1-2 pump (small work); 2-3 heat added at constant p; 3-4 isentropic expansion in turbine; 4-1 condensation at constant p and T', 'Efficiency: \\eta = (W_{t} - W_{p}) / q_{in} = ((h_{3} - h_{4}) - (h_{2} - h_{1})) / (h_{3} - h_{2});  Carnot is the upper limit'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'rankine-reheat-regeneration-ts', w: 900, h: 480, file: F4, section: 'A9.',
      title: 'Rankine Reheat and Regenerative Cycles on the T-s Plane',
      caption: 'Reheating raises exhaust dryness; feed heating by bled steam raises the mean heat-addition temperature',
      draw: (L) => {
         const P1 = L.plot(70, 360, 330, 260, 0, 1, 0, 1.1);
         let s = sub(L, 235, 58, 'Reheat cycle') + P1.axes('s', 'T') + dome(P1);
         const cy = [[0.04, 0.15], [0.04, 0.18]].concat(tseg(0.18, 0.7, 20), [[0.625, 0.7], [0.72, 0.95], [0.72, 0.7], [0.84, 0.82], [0.9, 0.95], [0.9, 0.15]]);
         s += P1.areaPts(cy, { f: 'lblue' }) + P1.pts(cy, { c: 'blue', w: 3 }) + P1.pts(seg(TL, 0.04, 0.5), { c: 'grey', w: 2 }) + P1.pts(seg(TG, 0.5, 0.96), { c: 'grey', w: 2 });
         s += st(P1, 0.72, 0.95, 'HP in', -50, -2) + st(P1, 0.72, 0.7, 'HP out', 8, 18) + st(P1, 0.9, 0.95, 'LP in', 8, -6) + st(P1, 0.9, 0.15, 'exhaust', -20, 18);
         s += P1.text(0.45, 0.35, 'Reheat: exhaust\nstays drier', { c: 'green', bold: true, size: 12 });
         const P2 = L.plot(500, 360, 330, 260, 0, 1, 0, 1.1);
         s += sub(L, 665, 58, 'Regenerative cycle (ideal)') + P2.axes('s', 'T') + dome(P2);
         const ds = 0.72 - sf(0.7);
         const exp = tseg(0.7, 0.15, 20).map((p) => [p[0] + ds, p[1]]);
         const rg = [[0.04, 0.15]].concat(tseg(0.15, 0.7, 20), [[0.625, 0.7], [0.72, 0.95], [0.72, 0.7]], exp);
         s += P2.areaPts(rg, { f: 'lblue' }) + P2.pts(rg, { c: 'blue', w: 3 }) + P2.pts(seg(TL, 0.04, 0.5), { c: 'grey', w: 2 }) + P2.pts(seg(TG, 0.5, 0.96), { c: 'grey', w: 2 });
         s += st(P2, 0.72, 0.95, '3', 8, -6) + st(P2, sf(0.15) + ds, 0.15, '4', 8, 16) + st(P2, 0.04, 0.15, '1', 8, 16);
         s += P2.text(0.55, 0.45, 'expansion curve\nparallel to feed\nheating curve', { c: 'green', bold: true, size: 11.5 });
         s += L.note(70, 395, ['Reheat: \\eta changes little, but moisture at turbine exit falls (blade erosion limit: dryness above about 0.88)', 'Regeneration: bled steam heats feed water, so heat is added at a higher average T and \\eta rises', 'Closed (surface) heater: drains cascade; open (direct-contact) heater: needs an extra pump, exit is saturated liquid'], { w: 760, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'steam-property-diagrams', w: 900, h: 480, file: F3, section: 'A3.',
      title: 'Property Diagrams of Water: p-v and T-v',
      caption: 'Saturation dome, critical point and constant property lines for a pure substance',
      draw: (L) => {
         const mk = (ox, yl) => {
            const P = L.plot(ox, 360, 320, 260, 0, 1, 0, 1.1);
            const dm = pseg(vf, 0.04, 1).concat(pseg(vg, 1, 0.04).reverse().reverse());
            let s = P.axes('v', yl);
            s += P.areaPts(pseg(vf, 0.04, 1).concat(pseg(vg, 1, 0.04)), { f: 'lblue' });
            s += P.pts(pseg(vf, 0.04, 1), { c: 'blue', w: 2.5 }) + P.pts(pseg(vg, 1, 0.04), { c: 'blue', w: 2.5 });
            s += P.dot(0.3, 1.0, { c: 'red' }) + P.text(0.3, 1.0, 'critical point', { dx: 8, dy: -8, size: 12, c: 'red', bold: true });
            return { P, s, dm };
         };
         const a = mk(70, 'p');
         let s = sub(L, 230, 58, 'p-v diagram') + a.s;
         const p0 = 0.4, v0 = vg(p0);
         s += a.P.pts([[0.14, 0.75], [vf(p0), p0], [v0, p0]], { c: 'red', w: 2 }) + a.P.pts(seg((v) => (p0 * v0) / v, v0, 0.95, 20).map((q) => [q[0], q[1]]), { c: 'red', w: 2 });
         s += a.P.text(0.2, 0.95, 'saturated\nliquid', { size: 12, c: 'grey', anchor: 'end' }) + a.P.text(0.78, 0.6, 'saturated vapour', { size: 12, c: 'grey' }) + a.P.text(0.33, 0.2, 'wet region', { size: 12, c: 'blue', bold: true });
         s += a.P.text(0.8, 0.274, 'T = const', { size: 12, c: 'red', dy: -10 });
         const b = mk(500, 'T');
         s += sub(L, 660, 58, 'T-v diagram') + b.s;
         s += b.P.pts([[0.115, 0.15], [vf(0.4), 0.4], [vg(0.4), 0.4], [0.75, 0.55], [0.95, 0.7]], { c: 'red', w: 2 });
         s += b.P.text(0.8, 0.5, 'p = const', { size: 12, c: 'red' }) + b.P.text(0.33, 0.2, 'wet region', { size: 12, c: 'blue', bold: true });
         s += L.note(70, 400, ['Left of the dome: compressed liquid; inside: wet mixture (T and p dependent); right: superheated vapour', 'Critical point for water: 374.15 C, 221.2 bar, v = 0.00317 m^3/kg; above it there is no distinct liquid-vapour change', 'Triple point of water: 0.01 C and 0.00611 bar (solid, liquid and vapour in equilibrium)'], { w: 760, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'mollier-hs-diagram', w: 900, h: 480, file: F3, section: 'A3.',
      title: 'Mollier (h-s) Diagram',
      caption: 'Enthalpy-entropy chart with constant pressure lines, dryness fraction lines and isentropic expansion',
      draw: (L) => {
         const P = L.plot(100, 380, 560, 300, 0, 1, 0, 1.05);
         let s = P.axes('Entropy s', 'Enthalpy h');
         const liq = (x) => 0.08 + 0.52 * Math.pow((x - 0.05) / 0.35, 1.2);
         const vapPts = [[0.4, 0.6], [0.5, 0.66], [0.65, 0.6], [0.82, 0.5], [0.97, 0.4]];
         const vapH = (x) => { for (let i = 0; i < vapPts.length - 1; i++) { const a = vapPts[i], b = vapPts[i + 1]; if (x <= b[0]) return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]); } return 0.4; };
         s += P.pts(seg(liq, 0.05, 0.4, 30), { c: 'blue', w: 2.5 }) + P.pts(vapPts, { c: 'blue', w: 2.5 }) + P.dot(0.4, 0.6, { c: 'orange' });
         const iso = (sA, sB, sEnd) => {
            const hA = liq(sA), hB = vapH(sB), m = (hB - hA) / (sB - sA);
            const h = (x) => (x <= sB ? hA + m * (x - sA) : hB + m * (x - sB) + 0.6 * (x - sB) * (x - sB));
            return { sA, sB, hA, hB, m, h, sEnd };
         };
         const hi = iso(0.38, 0.5, 0.83), md = iso(0.3, 0.65, 1.0), lo = iso(0.2, 0.82, 1.0);
         [hi, md, lo].forEach((o) => { s += P.pts([[o.sA, o.hA], [o.sB, o.hB]].concat(seg(o.h, o.sB, o.sEnd, 20).slice(1)), { c: 'red', w: 1.5, dash: '6 4' }); });
         [0.9, 0.7].forEach((x) => {
            const pt = (o) => [o.sA + x * (o.sB - o.sA), o.hA + o.m * x * (o.sB - o.sA)];
            s += P.pts([pt(hi), pt(md), pt(lo)], { c: 'green', w: 1.2 });
         });
         const q9 = [hi.sA + 0.9 * (hi.sB - hi.sA), hi.hA + hi.m * 0.9 * (hi.sB - hi.sA)], q7 = [hi.sA + 0.7 * (hi.sB - hi.sA), hi.hA + hi.m * 0.7 * (hi.sB - hi.sA)];
         s += P.text(q9[0], q9[1], 'x = 0.9', { size: 11, c: 'green', dx: 8, dy: -6 }) + P.text(q7[0], q7[1], 'x = 0.7', { size: 11, c: 'green', dx: 8, dy: 14 });
         s += P.text(0.83, hi.h(0.83), 'high p', { size: 12, c: 'red', dx: 6, dy: -4 }) + P.text(1.0, md.h(1.0), 'medium p', { size: 12, c: 'red', anchor: 'end', dy: -8 }) + P.text(1.0, lo.h(1.0), 'low p', { size: 12, c: 'red', anchor: 'end', dy: -8 });
         s += P.text(0.4, 0.6, 'critical point', { size: 11, c: 'orange', bold: true, anchor: 'end', dx: -8, dy: -8 });
         s += P.text(0.22, 0.3, 'saturated liquid', { size: 11, c: 'blue', bold: true, anchor: 'end', dx: -6, dy: -6 });
         s += P.text(0.97, 0.4, 'saturated vapour', { size: 11, c: 'blue', bold: true, anchor: 'end', dy: 34 });
         s += P.text(0.5, 0.3, 'wet region', { size: 12, c: 'blue', bold: true });
         const y1 = hi.h(0.7), y2 = lo.h(0.7);
         s += P.pts([[0.7, y1], [0.7, y2]], { c: 'green', w: 3, arrow: true });
         s += P.dot(0.7, y1, { c: 'red' }) + P.dot(0.7, y2, { c: 'red' });
         s += P.text(0.7, y1, '1 (inlet)', { dx: -62, dy: -10, bold: true, size: 12 }) + P.text(0.7, y2, '2 (exit)', { dx: 10, dy: 4, bold: true, size: 12 });
         s += P.text(0.7, 0.72, '\\Delta h_{s}', { dx: 10, size: 13, c: 'green', bold: true });
         s += L.note(100, 420, ['Vertical line = isentropic process; length gives the isentropic enthalpy drop \\Delta h_{s} for turbines and nozzles', 'Throttling is a horizontal line (h constant); dryness fraction lines run inside the wet region only'], { w: 700, size: 11.5 });
         return s;
      }
   },
{
      folder: FOLDER, name: 'steady-flow-devices', w: 900, h: 480, file: F1, section: 'A12.',
      title: 'Steady-Flow Devices and their Energy Equations',
      caption: 'SFEE simplified for nozzle, turbine, compressor, throttle and heat exchanger',
      draw: (L) => {
         let s = '';
         const dev = (x, y, nm, f, eq1, eq2, col) => {
            s += L.box(x, y, 250, 70, nm, { f: f, s: col, bold: true });
            s += L.arrow(x - 40, y + 35, x, y + 35, { c: 'ink', w: 2 }) + L.arrow(x + 250, y + 35, x + 290, y + 35, { c: 'ink', w: 2 });
            s += L.text(x + 125, y + 92, eq1, { anchor: 'middle', size: 12, c: col, bold: true }) + L.text(x + 125, y + 110, eq2, { anchor: 'middle', size: 11, c: 'grey' });
         };
         dev(60, 60, 'Nozzle / Diffuser', 'lblue', 'V_{2} = \\sqrt(2 (h_{1} - h_{2}) + V_{1}^{2})', 'q = 0, w = 0; nozzle: pressure falls, velocity rises', 'blue');
         dev(60, 210, 'Turbine', 'lgreen', 'w = h_{1} - h_{2}  (adiabatic)', 'work output, h falls; K.E. change neglected', 'green');
         dev(60, 360, 'Compressor / Pump', 'lorange', 'w = h_{2} - h_{1}  (work input)', 'pump: w = v \\Delta p for incompressible liquid', 'orange');
         dev(520, 60, 'Throttle valve', 'lpurple', 'h_{1} = h_{2}', 'isenthalpic; q = 0, w = 0; pressure drops, entropy rises', 'purple');
         dev(520, 210, 'Heat exchanger', 'lred', 'm_{h}(h_{h1} - h_{h2}) = m_{c}(h_{c2} - h_{c1})', 'no work; each stream has its own inlet and outlet', 'red');
         s += L.note(520, 360, ['General SFEE per kg:', 'q + h_{1} + V_{1}^{2}/2 + g z_{1} = w + h_{2} + V_{2}^{2}/2 + g z_{2}', 'Flow work p v is included in h = u + p v'], { w: 340, size: 11.5 });
         return s;
      }
   }
];