'use strict';
// Batch 02b: Strength of Materials - stress, bending, torsion, columns, vessels
const F1 = '02-Strength-of-Materials/01-stress-strain-elastic-constants.md';
const F3 = '02-Strength-of-Materials/03-bending-shear-deflection.md';
const F4 = '02-Strength-of-Materials/04-torsion-springs-strain-energy.md';
const F5 = '02-Strength-of-Materials/05-columns-pressure-vessels-failure-theories.md';
const FOLDER = '02-strength-of-materials';

module.exports = [
   {
      folder: FOLDER, name: 'stress-strain-ductile-vs-brittle', w: 900, h: 520, file: F1, section: 'A4.',
      title: 'Stress-Strain Curves: Ductile, Brittle and Offset Yield',
      caption: 'Mild steel shows a distinct yield point; aluminium has no yield point so the 0.2 percent offset method is used; cast iron is brittle',
      draw: (L) => {
         const P = L.plot(100, 400, 640, 300, 0, 10, 0, 10);
         let s = P.axes('Strain', 'Stress');
         s += P.pts([[0, 0], [1.2, 4.8], [1.4, 5.2], [1.7, 4.5], [2.4, 4.6], [3.2, 4.8], [6, 7.6], [7.4, 8.1], [8.8, 6.6]], { c: 'blue', w: 3 });
         s += P.text(8.8, 6.6, 'Mild steel (ductile)', { dx: -150, dy: -36, c: 'blue', bold: true, size: 13 });
         s += P.pts([[0, 0], [1.1, 4], [2, 6], [3.5, 7.4], [6, 8.4], [8, 8.2]], { c: 'green', w: 2.5 });
         s += P.text(6, 8.4, 'Aluminium (no yield point)', { dx: -30, dy: -12, c: 'green', bold: true, size: 13 });
         s += P.pts([[0, 0], [0.8, 2.6], [1.1, 3.1]], { c: 'red', w: 2.5 }) + P.dot(1.1, 3.1, { c: 'red' });
         s += P.text(1.1, 3.1, 'Cast iron (brittle)', { dx: 12, dy: 18, c: 'red', bold: true, size: 13 });
         s += P.vline(2, 0, 4.6, {}) + L.text(P.X(2) - 6, P.Y(0) + 18, '0.002', { size: 11, c: 'grey', anchor: 'middle' });
         s += P.pts([[0.2, 0], [3.35, 6.3]], { c: 'grey', w: 1.5, dash: '5 4' });
         s += P.text(3.4, 6.3, '0.2% offset line', { dx: 8, dy: 14, c: 'grey', size: 12 });
         s += L.note(100, 440, ['Offset method: draw a line parallel to the elastic part from 0.002 strain; its intersection gives the proof (yield) stress', 'Ductile: large plastic strain before failure, necking.  Brittle: fracture with almost no plastic strain.'], { w: 700, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'mohr-circle-biaxial', w: 900, h: 520, file: F1, section: 'A9.',
      title: "Mohr's Circle for a Plane Stress State",
      caption: "Mohr's circle: centre at (sigma_x + sigma_y)/2, radius = maximum shear stress; principal stresses are the intercepts on the sigma axis",
      draw: (L) => {
         const c = [330, 270], r = 150;
         let s = L.arrow(80, c[1], 640, c[1], { c: 'grey' }) + L.arrow(180, 450, 180, 60, { c: 'grey' });
         s += L.text(640, c[1] + 22, '\\sigma', { anchor: 'end', italic: true, size: 15 }) + L.text(190, 70, '\\tau', { italic: true, size: 15 });
         s += L.circle(c[0], c[1], r, { f: 'lblue', s: 'blue', w: 2.5 });
         const sx = c[0] + 105, sy_ = c[1] + 107;
         const A = [c[0] + 105, c[1] - 107], B = [c[0] - 105, c[1] + 107];
         s += L.line(A[0], A[1], B[0], B[1], { c: 'ink', w: 2 });
         s += L.dot(A[0], A[1], 5, 'red') + L.dot(B[0], B[1], 5, 'red') + L.dot(c[0], c[1], 4, 'ink');
         s += L.text(A[0] + 10, A[1] - 4, 'A (\\sigma_{x} , \\tau_{xy})', { size: 13, bold: true, c: 'red' });
         s += L.text(B[0] - 10, B[1] + 20, 'B (\\sigma_{y} , -\\tau_{xy})', { size: 13, bold: true, c: 'red', anchor: 'end' });
         s += L.dot(c[0] + r, c[1], 5, 'green') + L.dot(c[0] - r, c[1], 5, 'green');
         s += L.text(c[0] + r + 8, c[1] + 20, '\\sigma_{1}', { c: 'green', bold: true, size: 15 }) + L.text(c[0] - r - 8, c[1] + 20, '\\sigma_{2}', { c: 'green', bold: true, size: 15, anchor: 'end' });
         s += L.text(c[0] + 8, c[1] + 18, 'C', { size: 13, bold: true });
         s += L.dot(c[0], c[1] - r, 5, 'orange') + L.text(c[0] + 10, c[1] - r - 6, '\\tau_{max} = radius', { c: 'orange', bold: true, size: 13 });
         s += L.angle(c[0], c[1], 55, 0, 46, '2\\theta', {});
         s += L.note(560, 90, ['Centre C = (\\sigma_{x} + \\sigma_{y}) / 2', 'Radius R = \\sqrt[(\\sigma_{x} - \\sigma_{y})^{2} / 4 + \\tau_{xy}^{2}]', '\\sigma_{1,2} = C \\pm R', '\\tau_{max} = R = (\\sigma_{1} - \\sigma_{2}) / 2', 'tan 2\\theta = 2\\tau_{xy} / (\\sigma_{x} - \\sigma_{y})', 'Angles on circle = 2 x element angles'], { w: 320, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'bending-stress-distribution', w: 900, h: 480, file: F3, section: 'A2.',
      title: 'Bending Stress Distribution and Neutral Axis',
      caption: 'Bending stress varies linearly from zero at the neutral axis to maximum at the extreme fibres, tension on one side and compression on the other',
      draw: (L) => {
         let s = L.text(200, 70, 'Beam element in bending', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.path('M80,150 Q200,110 320,150 L320,250 Q200,210 80,250 Z', { f: 'lblue', c: 'blue', w: 2 });
         s += L.path('M80,200 Q200,160 320,200', { c: 'red', w: 2, dash: '6 4' }) + L.text(330, 196, 'Neutral axis', { c: 'red', size: 12 });
         s += L.moment(60, 200, 24, true, { c: 'ink' }) + L.moment(340, 200, 24, false, { c: 'ink' });
         s += L.text(200, 300, 'Top fibres: compression (sagging)', { anchor: 'middle', size: 12 });
         s += L.text(200, 320, 'Bottom fibres: tension', { anchor: 'middle', size: 12 });
         s += L.text(200, 350, 'Strain \\epsilon = y / R   (plane sections remain plane)', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(440, 60, 440, 440, { c: 'border', w: 1 });
         s += L.text(660, 70, 'Stress across the depth', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(540, 120, 70, 200, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.line(520, 220, 760, 220, { c: 'red', dash: '6 4' }) + L.text(765, 224, 'NA', { c: 'red', bold: true });
         s += L.poly([[700, 220], [700, 120], [770, 120]], { f: 'lred', s: 'red', w: 1.5 });
         s += L.poly([[700, 220], [700, 320], [630, 320]], { f: 'lblue', s: 'blue', w: 1.5 });
         s += L.text(735, 108, '\\sigma_{max} (compression)', { size: 12, c: 'red', anchor: 'middle' }) + L.text(572, 342, '\\sigma_{max} (tension)', { size: 12, c: 'blue' });
         s += L.dim(525, 120, 525, 320, 'h', {}) + L.dim(540, 360, 610, 360, 'b', {});
         s += L.dim(620, 220, 620, 120, 'y', {});
         s += L.note(470, 385, ['Flexure formula: M / I = \\sigma / y = E / R', '\\sigma = M y / I ;  \\sigma_{max} = M / Z ,  Z = I / y_{max}'], { w: 410, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'beam-shear-stress-distribution', w: 900, h: 460, file: F3, section: 'A3.',
      title: 'Shear Stress Distribution across Beam Sections',
      caption: 'Rectangle: parabolic shear stress, maximum 1.5 times the average at the neutral axis; I-section: most shear is carried by the web',
      draw: (L) => {
         let s = L.text(230, 70, 'Rectangular section', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(130, 110, 80, 200, { f: 'lgrey', s: 'ink', w: 2 }) + L.line(110, 210, 330, 210, { c: 'red', dash: '6 4' });
         s += L.path('M210,110 L210,110 Q310,210 210,310', { c: 'blue', w: 2.5 });
         s += L.poly([[210, 110], [210, 310], [250, 310], [300, 210], [250, 110]].slice(0, 0).concat([[210, 110]]), { s: null });
         const pts = []; for (let i = 0; i <= 40; i++) { const y = -100 + i * 5; pts.push([210 + 100 * (1 - (y / 100) * (y / 100)), 210 + y]); }
         s += L.poly([[210, 110]].concat(pts, [[210, 310]]), { f: 'lblue', s: 'blue', w: 2 });
         s += L.text(330, 215, '\\tau_{max} = 1.5 \\tau_{avg}', { size: 12, c: 'blue', bold: true });
         s += L.text(230, 345, '\\tau = (V / 2I)( h^{2}/4 - y^{2} )', { anchor: 'middle', size: 12 }) + L.text(230, 366, '\\tau_{avg} = V / (b h) ;  zero at top and bottom', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(450, 60, 450, 420, { c: 'border', w: 1 });
         s += L.text(670, 70, 'I-section', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(580, 110, 120, 20, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(630, 130, 20, 160, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(580, 290, 120, 20, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.poly([[640, 130], [640, 290], [668, 290], [684, 210], [668, 130]], { f: 'lblue', s: 'blue', w: 2 });
         s += L.poly([[700, 130], [690, 130], [690, 134], [700, 134]], { s: null });
         s += L.text(720, 215, 'web: about 90% of V', { size: 12, c: 'blue', bold: true });
         s += L.text(670, 345, 'Shear stress jumps at the flange-web junction', { anchor: 'middle', size: 12 }) + L.text(670, 366, 'Flanges resist bending, web resists shear', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.note(40, 395, ['General: \\tau = V A\\bar{y} / (I b) ;  circular section: \\tau_{max} = (4/3) \\tau_{avg} ;  triangle: 1.5 \\tau_{avg} at mid-height'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'beam-deflection-standard-cases', w: 900, h: 560, file: F3, section: 'A4.',
      title: 'Standard Deflection Results',
      caption: 'Maximum deflection and slope for the four standard cases: cantilever with end load, cantilever with UDL, simply supported with central load, simply supported with UDL',
      draw: (L) => {
         const row = (y, title, drawFn, d, th) => {
            let t = L.text(40, y - 28, title, { bold: true, size: 14, c: 'blue' });
            t += drawFn(y);
            t += L.text(560, y + 2, d, { size: 14 }) + L.text(560, y + 26, th, { size: 13, c: 'grey' });
            return t;
         };
         let s = '';
         const cant = (y, load) => L.fixedWall(100, y - 30, 60, 'left') + L.path(`M100,${y} Q250,${y} 400,${y + 38}`, { c: 'blue', w: 4 }) + L.line(100, y, 400, y, { c: 'grey', dash: '4 3', w: 1 }) + load(y);
         const ss = (y, load) => L.pin(150, y + 2) + L.roller(450, y + 2) + L.path(`M150,${y} Q300,${y + 50} 450,${y}`, { c: 'blue', w: 4 }) + L.line(150, y, 450, y, { c: 'grey', dash: '4 3', w: 1 }) + load(y);
         s += row(110, 'Cantilever, end load W', (y) => cant(y, (yy) => L.pload(400, yy + 38, 'W', { len: 38 })), '\\delta_{max} = W L^{3} / (3 E I)', '\\theta_{max} = W L^{2} / (2 E I)');
         s += row(235, 'Cantilever, UDL w over L', (y) => cant(y, (yy) => L.udl(110, 400, yy + 6, 10, { h: 22 })), '\\delta_{max} = w L^{4} / (8 E I)', '\\theta_{max} = w L^{3} / (6 E I)');
         s += row(375, 'Simply supported, central load W', (y) => ss(y, (yy) => L.pload(300, yy + 50, 'W', { len: 38 })), '\\delta_{max} = W L^{3} / (48 E I)', '\\theta_{max} = W L^{2} / (16 E I) at the supports');
         s += row(505, 'Simply supported, UDL w over L', (y) => ss(y, (yy) => L.udl(150, 450, yy + 4, 10, { h: 22 })), '\\delta_{max} = 5 w L^{4} / (384 E I)', '\\theta_{max} = w L^{3} / (24 E I) at the supports');
         return s;
      }
   },
   {
      folder: FOLDER, name: 'torsion-shear-stress-distribution', w: 900, h: 460, file: F4, section: 'A2.',
      title: 'Torsion of Circular Shafts: Shear Stress Distribution',
      caption: 'Shear stress in torsion varies linearly with radius: zero at the centre, maximum at the outer surface; hollow shafts have a smaller stress gradient',
      draw: (L) => {
         let s = L.text(230, 70, 'Solid shaft', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.circle(230, 210, 100, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.dot(230, 210, 4, 'ink');
         s += L.arrow(230, 210, 330, 210, { c: 'grey' }) + L.text(280, 200, 'R', { size: 13, c: 'grey' });
         s += L.poly([[230, 210], [330, 210], [330, 130]], { f: 'lred', s: 'red', w: 1.5 }) + L.text(335, 125, '\\tau_{max}', { c: 'red', bold: true, size: 14 });
         s += L.moment(230, 210, 120, true, { c: 'blue' });
         s += L.text(230, 345, '\\tau = T r / J', { anchor: 'middle', bold: true, size: 15 }) + L.text(230, 368, 'J = \\pi d^{4} / 32 (solid)', { anchor: 'middle', size: 12 });
         s += L.line(450, 60, 450, 430, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Hollow shaft', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.circle(670, 210, 100, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.circle(670, 210, 55, { f: 'white', s: 'ink', w: 2 });
         s += L.poly([[725, 210], [770, 210], [770, 130], [725, 160]], { f: 'lred', s: 'red', w: 1.5 }) + L.text(775, 125, '\\tau_{max}', { c: 'red', bold: true, size: 14 });
         s += L.text(670, 345, 'J = \\pi (D^{4} - d^{4}) / 32', { anchor: 'middle', bold: true, size: 14 }) + L.text(670, 368, 'Core is lightly stressed: hollow shaft is efficient', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.note(40, 395, ['Torsion equation: T / J = \\tau / r = G \\theta / L ;  power P = 2 \\pi N T / 60 ;  strength Z_{p} = J / R'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'column-end-conditions', w: 900, h: 480, file: F5, section: 'A1.',
      title: 'Euler Buckling: End Conditions and Effective Length',
      caption: 'Effective length factors: both ends hinged 1.0, one fixed and one free 2.0, both ends fixed 0.5, one fixed and one hinged 0.707',
      draw: (L) => {
         const col = (x, title, le, shape, ends) => {
            let t = L.text(x, 70, title, { anchor: 'middle', bold: true, size: 12, c: 'blue' });
            t += shape(x);
            t += L.text(x, 380, le, { anchor: 'middle', size: 13, bold: true });
            t += L.text(x, 402, ends, { anchor: 'middle', size: 11, c: 'grey' });
            return t;
         };
         let s = '';
         s += col(120, 'Both ends hinged', 'L_{e} = L', (x) => L.path(`M${x},120 Q${x + 36},210 ${x},300`, { c: 'blue', w: 3.5 }) + L.pin(x, 300) + L.circle(x, 120, 5, { f: 'white' }) + L.arrow(x, 80, x, 112, { c: 'red', w: 2.5 }), 'P_{cr} = \\pi^{2} E I / L^{2}');
         s += col(310, 'One end fixed, one free', 'L_{e} = 2 L', (x) => L.path(`M${x},300 L${x},300 Q${x},200 ${x + 55},120`, { c: 'blue', w: 3.5 }) + L.hatch(x - 24, 302, 48, 1) + L.arrow(x + 55, 80, x + 55, 112, { c: 'red', w: 2.5 }), 'P_{cr} = \\pi^{2} E I / 4L^{2}');
         s += col(500, 'Both ends fixed', 'L_{e} = L / 2', (x) => L.path(`M${x},300 C${x},230 ${x + 40},230 ${x + 40},210 C${x + 40},190 ${x},190 ${x},120`, { c: 'blue', w: 3.5 }).replace('', '') + L.hatch(x - 24, 302, 48, 1) + L.line(x - 24, 120, x + 24, 120, { w: 3 }) + L.arrow(x, 80, x, 116, { c: 'red', w: 2.5 }), 'P_{cr} = 4 \\pi^{2} E I / L^{2}');
         s += col(720, 'One fixed, one hinged', 'L_{e} = L / \\sqrt2 = 0.707 L', (x) => L.path(`M${x},300 C${x},230 ${x + 45},210 ${x + 15},120`, { c: 'blue', w: 3.5 }) + L.hatch(x - 24, 302, 48, 1) + L.circle(x + 15, 120, 5, { f: 'white' }) + L.arrow(x + 15, 80, x + 15, 112, { c: 'red', w: 2.5 }), 'P_{cr} = 2 \\pi^{2} E I / L^{2}');
         s += L.note(40, 425, ['Euler: P_{cr} = \\pi^{2} E I / L_{e}^{2} ;  slenderness ratio \\lambda = L_{e} / k', 'Valid for long columns (\\lambda above about 80-100); Rankine formula for intermediate columns'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'thin-cylinder-stresses', w: 900, h: 440, file: F5, section: 'A2.',
      title: 'Thin Cylindrical Shell: Hoop and Longitudinal Stress',
      caption: 'Hoop stress pd/2t is twice the longitudinal stress pd/4t; a thin sphere has stress pd/4t in all directions',
      draw: (L) => {
         let s = L.text(230, 70, 'Thin cylinder under internal pressure p', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.ellipse(120, 200, 40, 90, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.line(120, 110, 340, 110, { w: 2.5 }) + L.line(120, 290, 340, 290, { w: 2.5 }) + L.ellipse(340, 200, 40, 90, { s: 'ink', w: 2.5 });
         s += L.arrow(230, 200, 230, 126, { c: 'red', w: 2 }) + L.arrow(230, 200, 230, 274, { c: 'red', w: 2 }) + L.text(244, 204, 'p', { c: 'red', bold: true });
         s += L.arrow(230, 305, 230, 340, { c: 'blue', w: 2.5, arrow: false }) + L.text(230, 332, '\\sigma_{h} = p d / 2t  (hoop)', { anchor: 'middle', size: 13, c: 'blue', bold: true });
         s += L.arrow(390, 200, 440, 200, { c: 'green', w: 3 }) + L.text(445, 204, '\\sigma_{l} = p d / 4t', { c: 'green', bold: true, size: 13 });
         s += L.line(520, 60, 520, 400, { c: 'border', w: 1 });
         s += L.text(700, 70, 'Thin sphere', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.circle(700, 200, 90, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.text(700, 205, 'p', { anchor: 'middle', c: 'red', bold: true });
         s += L.text(700, 330, '\\sigma = p d / 4t  (all directions)', { anchor: 'middle', size: 13, bold: true });
         s += L.note(40, 365, ['Volumetric strain of a cylinder: \\epsilon_{v} = p d / (4 t E) x (5 - 4\\nu) ;  efficiency of joint \\eta reduces the effective area', 'Hoop stress is the larger, so longitudinal joints (and their rivets) must be stronger than circumferential joints'], { w: 820, size: 12 });
         return s;
      }
   }
];
