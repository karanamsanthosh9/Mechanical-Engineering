'use strict';
// Batch 06: Heat transfer
const F1 = '06-Heat-Transfer/01-conduction.md';
const F2 = '06-Heat-Transfer/02-convection-radiation-heat-exchangers.md';
const FOLDER = '06-heat-transfer';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'composite-wall-resistance', w: 900, h: 480, file: F1, section: 'A4.',
      title: 'Composite Wall and Thermal Resistance Network',
      caption: 'Heat flow through layers in series; the temperature drop across a layer is proportional to its resistance',
      draw: (L) => {
         let s = '';
         s += L.rect(150, 90, 70, 150, { f: 'lred', s: 'ink', w: 2 }) + L.rect(220, 90, 90, 150, { f: 'lorange', s: 'ink', w: 2 }) + L.rect(310, 90, 60, 150, { f: 'lblue', s: 'ink', w: 2 });
         s += L.text(185, 165, 'A\nk_{1}', { anchor: 'middle', size: 12, bold: true }) + L.text(265, 165, 'B\nk_{2}', { anchor: 'middle', size: 12, bold: true }) + L.text(340, 165, 'C\nk_{3}', { anchor: 'middle', size: 12, bold: true });
         s += L.arrow(70, 165, 148, 165, { c: 'red', w: 3 }) + L.arrow(372, 165, 450, 165, { c: 'blue', w: 3 });
         s += L.text(110, 150, 'Q', { c: 'red', bold: true, anchor: 'middle' }) + L.text(150, 80, 'T_{1}', { anchor: 'middle', bold: true, c: 'red' }) + L.text(220, 80, 'T_{2}', { anchor: 'middle', bold: true }) + L.text(310, 80, 'T_{3}', { anchor: 'middle', bold: true }) + L.text(370, 80, 'T_{4}', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.polyline([[150, 110], [220, 140], [310, 180], [370, 195]], { c: 'ink', w: 2.5, dash: '6 3' });
         s += L.dim(150, 262, 220, 262, 'L_{1}', {}) + L.dim(220, 262, 310, 262, 'L_{2}', {}) + L.dim(310, 262, 370, 262, 'L_{3}', {});
         s += L.text(260, 62, 'Temperature profile (steeper in poorer conductors)', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.box(520, 90, 80, 40, 'R_{1}', { f: 'lred', s: 'red' }) + L.box(630, 90, 80, 40, 'R_{2}', { f: 'lorange', s: 'orange' }) + L.box(740, 90, 80, 40, 'R_{3}', { f: 'lblue', s: 'blue' });
         s += L.line(480, 110, 520, 110, { c: 'ink', w: 2 }) + L.line(600, 110, 630, 110, { c: 'ink', w: 2 }) + L.line(710, 110, 740, 110, { c: 'ink', w: 2 }) + L.line(820, 110, 850, 110, { c: 'ink', w: 2 });
         s += L.text(480, 98, 'T_{1}', { anchor: 'middle', size: 12 }) + L.text(850, 98, 'T_{4}', { anchor: 'middle', size: 12 });
         s += L.text(560, 158, 'L_{1}/(k_{1}A)', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(670, 158, 'L_{2}/(k_{2}A)', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(780, 158, 'L_{3}/(k_{3}A)', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.note(40, 300, ['Series: Q = (T_{1} - T_{4}) / (R_{1} + R_{2} + R_{3}),   R = L / (k A)  (plane wall)', 'Same Q passes through every layer; temperature drop in a layer = Q x R of that layer', 'Contact resistance adds in series where layers meet; with convection on both faces add 1/(h_{i}A) and 1/(h_{o}A)', 'Overall coefficient: 1/U = 1/h_{i} + \\Sigma(L/k) + 1/h_{o}'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'cylinder-critical-radius', w: 900, h: 480, file: F1, section: 'A5.',
      title: 'Radial Conduction and Critical Radius of Insulation',
      caption: 'Heat loss from an insulated pipe first rises, then falls as insulation radius passes r_c = k/h',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Hollow cylinder');
         s += L.circle(220, 190, 100, { f: 'lblue', s: 'ink', w: 2 }) + L.circle(220, 190, 50, { f: 'white', s: 'ink', w: 2 });
         s += L.arrow(220, 190, 270, 190, { c: 'red', w: 2 }) + L.arrow(220, 190, 305, 120, { c: 'green', w: 2 });
         s += L.text(250, 207, 'r_{1}', { c: 'red', size: 12, bold: true }) + L.text(290, 152, 'r_{2}', { c: 'green', size: 12, bold: true });
         s += L.text(220, 195, 'T_{i}', { anchor: 'middle', size: 12, bold: true, c: 'red' }) + L.text(220, 322, 'Q = 2\\pi k L (T_{1} - T_{2}) / ln(r_{2}/r_{1})', { anchor: 'middle', size: 12 }) + L.text(220, 342, 'R = ln(r_{2}/r_{1}) / (2\\pi k L)', { anchor: 'middle', size: 12, c: 'grey' });
         const P = L.plot(520, 340, 330, 240, 0, 1, 0, 1.1);
         s += sub(L, 690, 58, 'Heat loss against outer radius') + P.axes('Outer radius r_{o}', 'Q');
         s += P.fn((x) => 0.55 + 0.33 * Math.sin(((x - 0.1) / 0.3) * Math.PI / 2), 0.1, 0.4, { c: 'blue', w: 3 });
         s += P.pts([[0.4, 0.88], [0.55, 0.78], [0.75, 0.66], [0.95, 0.56]], { c: 'blue', w: 3 });
         s += P.vline(0.4, 0, 0.88, { c: 'red' }) + P.dot(0.4, 0.88, { c: 'red' }) + P.text(0.4, 0.88, 'r_{c} = k / h', { dx: 8, dy: -10, bold: true, c: 'red', size: 12 });
         s += P.text(0.1, 0.5, 'r_{1} < r_{c}: Q rises', { size: 11, c: 'green', bold: true, dy: 10 }) + P.text(0.6, 0.4, 'r_{1} > r_{c}: Q falls', { size: 11, c: 'orange', bold: true });
         s += L.note(40, 385, ['Pipe: insulation is useful only if r_{1} > r_{c} = k_{ins}/h_{o}; for a small wire (r_{1} < r_{c}) insulation increases the heat loss up to r_{c}', 'Sphere: r_{c} = 2 k / h;  maximum heat loss at r_{c}; use with thin electric wires and small tubes'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'fin-temperature-profile', w: 900, h: 480, file: F1, section: 'A7.',
      title: 'Extended Surface (Fin): Temperature Distribution',
      caption: 'Temperature falls along the fin from the base; efficiency and effectiveness depend on the tip condition',
      draw: (L) => {
         const P = L.plot(450, 330, 380, 220, 0, 1, 0, 1.1);
         let s = L.rect(70, 190, 50, 130, { f: 'lred', s: 'ink', w: 2 }) + L.rect(120, 220, 250, 30, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.text(95, 260, 'Base', { anchor: 'middle', size: 12, bold: true, c: 'red' }) + L.text(95, 275, 'T_{b}', { anchor: 'middle', size: 12, c: 'red' });
         s += L.dim(120, 295, 370, 295, 'L', {});
         s += L.dim(385, 220, 385, 250, 't', {});
         s += L.arrow(250, 160, 250, 215, { c: 'blue', w: 2 }) + L.arrow(300, 160, 300, 215, { c: 'blue', w: 2 }) + L.arrow(200, 160, 200, 215, { c: 'blue', w: 2 });
         s += L.text(250, 148, 'convection to fluid at T_{\\infty}, h', { anchor: 'middle', size: 12, c: 'blue', bold: true });
         s += L.text(245, 88, 'Fin of length L and uniform thickness', { anchor: 'middle', size: 12, c: 'grey' });
         s += P.axes('x / L', '(T - T_{\\infty}) / (T_{b} - T_{\\infty})');
         s += P.fn((x) => Math.cosh(2.2 * (1 - x)) / Math.cosh(2.2), 0, 1, { c: 'blue', w: 3 });
         s += P.fn((x) => Math.exp(-2.2 * x), 0, 1, { c: 'green', w: 2.5, dash: '6 4' });
         s += P.fn((x) => 1 - 0.55 * x, 0, 1, { c: 'orange', w: 2, dash: '2 3' });
         s += P.text(0.55, 0.38, 'insulated tip', { c: 'blue', bold: true, size: 12, dy: 6, dx: 6 }) + P.text(0.55, 0.12, 'infinite fin', { c: 'green', bold: true, size: 12, dx: 40, dy: -2 }) + P.text(0.1, 0.9, 'poor fin: nearly uniform', { c: 'orange', size: 11, dx: 0, dy: -18 });
         s += L.note(40, 355, ['Insulated tip: Q = \\sqrt(h P k A) (T_{b} - T_{\\infty}) tanh(mL),   m = \\sqrt(h P / (k A))', 'Fin efficiency = actual Q / Q if the whole fin were at T_{b};  effectiveness = Q with fin / Q without fin (should be > 2 to be worthwhile)', 'Good fins: high k, thin, long enough; fins help when h is small (gas side); use on the side with the larger resistance'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'transient-lumped-biot', w: 900, h: 480, file: F1, section: 'A8.',
      title: 'Transient Conduction: Lumped Capacitance',
      caption: 'Exponential cooling of a body with small Biot number; time constant and temperature response',
      draw: (L) => {
         const P = L.plot(100, 340, 420, 240, 0, 1, 0, 1.1);
         let s = P.axes('Time t', '(T - T_{\\infty}) / (T_{i} - T_{\\infty})');
         s += P.fn((x) => Math.exp(-3 * x), 0, 1, { c: 'blue', w: 3 });
         s += P.fn((x) => Math.exp(-1.5 * x), 0, 1, { c: 'green', w: 2.5, dash: '6 4' });
         s += P.hline(0.368, 0, 0.333, { c: 'red' }) + P.vline(0.333, 0, 0.368, { c: 'red' }) + P.dot(0.333, 0.368, { c: 'red' });
         s += P.text(0.333, 0, 't = \\tau', { dx: 0, dy: 18, anchor: 'middle', size: 12, c: 'red', bold: true }) + P.text(0, 0.368, '0.368', { dx: -4, dy: 4, anchor: 'end', size: 12, c: 'red', bold: true });
         s += P.text(0.45, 0.2, 'smaller \\tau (small mass / large h)', { size: 11, c: 'blue', bold: true, dx: 40 }) + P.text(0.55, 0.55, 'larger \\tau', { size: 11, c: 'green', bold: true });
         s += L.box(580, 90, 270, 90, 'Biot number\nBi = h L_{c} / k_{solid}\nL_{c} = V / A_{s}', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(580, 210, ['Bi < 0.1: lumped system OK', '(temperature uniform in the body)', 'Response: (T - T_{\\infty}) / (T_{i} - T_{\\infty})', '= exp(-t / \\tau)', 'Time constant \\tau = \\rho V c / (h A_{s})', 'Fourier number Fo = \\alpha t / L_{c}^{2}'], { w: 270, size: 11.5 });
         s += L.note(40, 385, ['After one time constant the body has covered 63.2% of the temperature change; after 4\\tau about 98%', 'Bi large: internal resistance dominates, use Heisler charts; Bi small: surface convection dominates'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'boundary-layers-and-nusselt', w: 900, h: 480, file: F2, section: 'A2.',
      title: 'Hydrodynamic and Thermal Boundary Layers',
      caption: 'Velocity and thermal boundary layers on a flat plate; ratio of thicknesses depends on Prandtl number',
      draw: (L) => {
         let s = L.line(80, 280, 520, 280, { w: 4 });
         s += L.polyline(seg((x) => 280 - 12 * Math.sqrt(x - 80), 80, 520, 20), { c: 'blue', w: 2.5 }) + L.polyline(seg((x) => 280 - 7 * Math.sqrt(x - 80), 80, 520, 20), { c: 'red', w: 2.5, dash: '6 3' });
         [0, 1, 2, 3].forEach((i) => { s += L.arrow(30, 140 + i * 35, 80, 140 + i * 35, { c: 'grey', w: 1.5 }); });
         s += L.text(20, 128, 'U_{\\infty}, T_{\\infty}', { size: 12, bold: true, c: 'grey' });
         s += L.text(480, 190, '\\delta (velocity)', { size: 12, c: 'blue', bold: true, anchor: 'end' }) + L.text(480, 235, '\\delta_{t} (thermal)', { size: 12, c: 'red', bold: true, anchor: 'end' });
         s += L.text(300, 305, 'Laminar (x < x_{cr})', { anchor: 'middle', size: 12, c: 'green', bold: true }) + L.text(300, 322, 'Re_{x,cr} about 5 x 10^{5}', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.box(570, 90, 280, 70, 'Pr = \\nu / \\alpha = \\mu c_{p} / k\nPr > 1: \\delta > \\delta_{t}  (water, oils)', { f: 'lblue', s: 'blue', size: 12 });
         s += L.box(570, 175, 280, 70, 'Nusselt Nu = h L / k_{fluid}\nratio of convection to conduction', { f: 'lorange', s: 'orange', size: 12 });
         s += L.box(570, 260, 280, 70, 'Reynolds Re = \\rho V L / \\mu\nGrashof Gr = g \\beta \\Delta T L^{3} / \\nu^{2}', { f: 'lgreen', s: 'green', size: 12 });
         s += L.note(40, 355, ['Laminar flat plate: \\delta / x = 5 / \\sqrt(Re_{x});  Nu_{x} = 0.332 Re_{x}^{1/2} Pr^{1/3};  average Nu_{L} = 2 x local value at L', 'Pr small (liquid metals): \\delta_{t} > \\delta;  Pr = 1 gas: layers equal;  Dittus-Boelter (turbulent in tube): Nu = 0.023 Re^{0.8} Pr^{n}', 'n = 0.4 for heating of fluid, n = 0.3 for cooling'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'lmtd-parallel-counter-flow', w: 900, h: 480, file: F2, section: 'A9.',
      title: 'Heat Exchanger: Parallel Flow versus Counter Flow',
      caption: 'Temperature variation along the exchanger and the log-mean temperature difference',
      draw: (L) => {
         const P1 = L.plot(70, 330, 330, 220, 0, 1, 0, 1.1);
         let s = sub(L, 235, 58, 'Parallel flow') + P1.axes('Length', 'T');
         s += P1.fn((x) => 0.95 - 0.38 * (1 - Math.exp(-2.2 * x)), 0, 1, { c: 'red', w: 3 }) + P1.fn((x) => 0.2 + 0.28 * (1 - Math.exp(-2.2 * x)), 0, 1, { c: 'blue', w: 3 });
         s += P1.text(0.1, 0.95, 'hot', { c: 'red', bold: true, dx: 8, dy: -8 }) + P1.text(0.1, 0.2, 'cold', { c: 'blue', bold: true, dx: 8, dy: 18 });
         s += P1.vline(0, 0.2, 0.95, { c: 'grey' }) + P1.text(0, 0.6, '\\Delta T_{1}', { dx: 6, size: 12 }) + P1.vline(1, 0.5, 0.58, { c: 'grey' }) + P1.text(1, 0.62, '\\Delta T_{2}', { dx: -20, dy: -10, size: 12 });
         const P2 = L.plot(500, 330, 330, 220, 0, 1, 0, 1.1);
         s += sub(L, 665, 58, 'Counter flow') + P2.axes('Length', 'T');
         s += P2.fn((x) => 0.95 - 0.45 * x - 0.05 * x * x, 0, 1, { c: 'red', w: 3 }) + P2.fn((x) => 0.75 - 0.5 * x * 0.95 - 0.05 * x, 0, 1, { c: 'blue', w: 3 });
         s += P2.text(0.1, 0.9, 'hot', { c: 'red', bold: true, dx: 8, dy: -8 }) + P2.text(0.1, 0.62, 'cold (exit)', { c: 'blue', bold: true, dx: 8, dy: 20 });
         s += L.note(40, 360, ['LMTD = (\\Delta T_{1} - \\Delta T_{2}) / ln(\\Delta T_{1}/\\Delta T_{2});  Q = U A LMTD   (for counter flow with equal \\Delta T use LMTD = \\Delta T)', 'Counter flow gives the larger LMTD for the same terminal temperatures, so needs less area; cold exit can exceed hot exit only in counter flow', 'Effectiveness = actual Q / maximum possible Q = Q / (C_{min}(T_{h,i} - T_{c,i})); NTU = U A / C_{min}'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'radiation-network-and-laws', w: 900, h: 480, file: F2, section: 'A8.',
      title: 'Thermal Radiation: Laws and Surface Network',
      caption: 'Blackbody spectrum, Wien displacement and radiation network for exchange between two grey surfaces',
      draw: (L) => {
         const P = L.plot(80, 320, 340, 220, 0, 1, 0, 1.1);
         let s = sub(L, 250, 58, 'Planck distribution') + P.axes('Wavelength \\lambda', 'E_{b\\lambda}');
         s += P.fn((x) => 4 * Math.pow(x, 3) * 0.9 / (Math.exp(3.6 * x) - 1 + 0.0001) * 2.2, 0.02, 1, { c: 'red', w: 3 });
         s += P.fn((x) => 5.2 * Math.pow(x, 3) * 1.2 / (Math.exp(6.4 * x) - 1 + 0.0001) * 1.0, 0.02, 1, { c: 'blue', w: 3 });
         s += P.text(0.62, 0.45, 'T_{1}', { c: 'red', bold: true, size: 13, dx: 0 }) + P.text(0.3, 0.7, 'T_{2} > T_{1}', { c: 'blue', bold: true, size: 13 });
         s += P.text(0.5, 0.05, '\\lambda_{max} T = 2898 \\mu m.K', { size: 12, dy: 22, anchor: 'middle', c: 'grey', bold: true });
         s += L.line(520, 160, 560, 160, { c: 'ink', w: 2 }) + L.box(560, 140, 60, 40, 'R_{1}', { f: 'lred', s: 'red', size: 12 }) + L.line(620, 160, 650, 160, { c: 'ink', w: 2 }) + L.box(650, 140, 60, 40, 'R_{12}', { f: 'lgreen', s: 'green', size: 12 }) + L.line(710, 160, 740, 160, { c: 'ink', w: 2 }) + L.box(740, 140, 60, 40, 'R_{2}', { f: 'lblue', s: 'blue', size: 12 });
         s += L.text(520, 148, 'E_{b1}', { size: 12, c: 'red', bold: true, anchor: 'middle' }) + L.text(800, 148, 'E_{b2}', { size: 12, c: 'blue', bold: true, anchor: 'start' });
         s += L.text(590, 200, '(1-\\epsilon_{1})/(\\epsilon_{1}A_{1})', { size: 10, anchor: 'middle', c: 'grey' }) + L.text(680, 200, '1/(A_{1}F_{12})', { size: 10, anchor: 'middle', c: 'grey' }) + L.text(770, 200, '(1-\\epsilon_{2})/(\\epsilon_{2}A_{2})', { size: 10, anchor: 'middle', c: 'grey' });
         s += L.note(500, 230, ['Stefan-Boltzmann: E_{b} = \\sigma T^{4},   \\sigma = 5.67 x 10^{-8} W/m^{2}K^{4}', 'Grey body: E = \\epsilon \\sigma T^{4};  Kirchhoff: \\alpha = \\epsilon (grey, equilibrium)', 'Two large parallel plates:', 'Q = \\sigma A (T_{1}^{4} - T_{2}^{4}) / (1/\\epsilon_{1} + 1/\\epsilon_{2} - 1)'], { w: 380, size: 11 });
         s += L.note(40, 385, ['Wien: peak shifts to shorter wavelength as T rises;  radiation shield between plates reduces Q by factor 1/(n+1) for n identical shields'], { w: 820, size: 11.5 });
         return s;
      }
   }
];
