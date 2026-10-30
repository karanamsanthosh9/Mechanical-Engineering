'use strict';
// Batch 12b: Manufacturing - machining, machine tools, metrology, CNC
const F4 = '12-Manufacturing-Processes/04-machining-machine-tools.md';
const F5 = '12-Manufacturing-Processes/05-metrology-cnc-unconventional-pm.md';
const FOLDER = '12-manufacturing';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'single-point-tool-geometry', w: 900, h: 480, file: F4, section: 'A2.',
      title: 'Single-Point Cutting Tool Geometry',
      caption: 'Rake angles, clearance angles and cutting edge angles of a turning tool in the ASA system',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Side view (orthogonal section)');
         s += L.poly([[100, 230], [330, 230], [330, 150], [180, 150], [150, 190]], { f: 'lgrey', s: 'ink', w: 3 });
         s += L.line(100, 230, 150, 190, { c: 'ink', w: 3 }) + L.line(150, 190, 180, 150, { c: 'ink', w: 3 });
         s += L.line(150, 190, 220, 120, { c: 'grey', dash: '4 3' }) + L.line(150, 190, 150, 120, { c: 'grey', dash: '4 3' }) + L.line(150, 190, 100, 190, { c: 'grey', dash: '4 3' }) + L.line(150, 190, 150, 270, { c: 'grey', dash: '4 3' });
         s += L.angle(150, 190, 38, 90, 120, '', { c: 'red' }) + L.text(100, 150, 'Back rake \\alpha_{b}', { size: 11, c: 'red', bold: true });
         s += L.angle(150, 190, 38, 220, 270, '', { c: 'blue' }) + L.text(76, 275, 'Clearance \\alpha', { size: 11, c: 'blue', bold: true });
         s += L.text(300, 130, 'Rake face (chip flows)', { size: 11, c: 'grey', anchor: 'end' }) + L.text(60, 215, 'Flank', { size: 11, c: 'grey' });
         s += L.text(220, 255, 'Tool shank', { size: 11, anchor: 'middle' });
         s += sub(L, 670, 58, 'Plan view');
         s += L.poly([[540, 240], [800, 240], [800, 160], [640, 160], [610, 200]], { f: 'lgrey', s: 'ink', w: 3 });
         s += L.line(540, 240, 610, 200, { c: 'ink', w: 3 }) + L.line(610, 200, 640, 160, { c: 'ink', w: 3 });
         s += L.text(530, 260, 'End cutting edge angle (ECEA)', { size: 11, c: 'orange', bold: true }) + L.text(690, 140, 'Side cutting edge angle (SCEA)', { size: 11, c: 'green', bold: true });
         s += L.text(540, 285, 'Larger nose radius: better finish, more chatter', { size: 11, c: 'grey' });
         s += L.note(40, 320, ['Tool signature (ASA): back rake - side rake - end relief - side relief - ECEA - SCEA - nose radius, e.g. 8-14-6-6-6-15-0.8 mm', 'Rake angle: positive reduces cutting force but weakens the edge; negative for brittle tools such as carbide and ceramics, giving strength', 'Clearance angle prevents rubbing of the flank on the work; too large weakens the tool'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'merchant-circle-chip-formation', w: 900, h: 480, file: F4, section: 'A4.',
      title: 'Orthogonal Cutting: Shear Plane and Merchant Force Circle',
      caption: 'Shear angle, rake angle and the force components in orthogonal cutting',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Chip formation');
         s += L.poly([[50, 260], [420, 260], [420, 200], [50, 200]], { f: 'lorange', s: 'ink', w: 2 }) + L.poly([[200, 200], [260, 200], [300, 140], [240, 140]], { f: 'lgrey', s: 'ink', w: 2 });
         s += L.line(200, 200, 270, 150, { c: 'red', w: 2.5, dash: '5 3' }) + L.poly([[200, 200], [160, 160], [175, 140], [210, 175]], { f: 'lblue', s: 'blue', w: 1.5 });
         s += L.arrow(430, 230, 360, 230, { c: 'ink', w: 2 }) + L.text(380, 248, 'V (cutting speed)', { size: 11 });
         s += L.angle(200, 200, 30, 0, 36, '\\phi', { c: 'red', lr: 14 }) + L.text(268, 148, 'Shear plane', { size: 11, c: 'red', bold: true });
         s += L.text(100, 135, 'Chip thickness t_{c} > t', { size: 11 }) + L.text(100, 280, 'Uncut thickness t', { size: 11 });
         s += L.text(230, 300, 'Chip thickness ratio r = t / t_{c} = sin\\phi / cos(\\phi - \\alpha)', { anchor: 'middle', size: 11.5 });
         s += L.text(230, 320, 'tan\\phi = r cos\\alpha / (1 - r sin\\alpha)', { anchor: 'middle', size: 11.5, c: 'grey' });
         s += sub(L, 670, 58, 'Force circle');
         s += L.circle(700, 210, 90, { s: 'grey', w: 1.5 });
         s += L.arrow(610, 280, 700, 210, { c: 'ink', w: 3 }) + L.arrow(610, 280, 790, 280, { c: 'blue', w: 2 }) + L.arrow(610, 280, 610, 140, { c: 'green', w: 2 });
         s += L.text(790, 300, 'F_{c} (cutting force)', { size: 11, c: 'blue', bold: true, anchor: 'end' }) + L.text(575, 150, 'F_{t}', { size: 11, c: 'green', bold: true }) + L.text(715, 215, 'R', { size: 13, bold: true });
         s += L.note(40, 345, ['Resultant R = \\sqrt(F_{c}^{2} + F_{t}^{2});  F_{s} = F_{c} cos\\phi - F_{t} sin\\phi;  friction angle \\beta, \\mu = tan\\beta = (F_{t} + F_{c} tan\\alpha)/(F_{c} - F_{t} tan\\alpha)', 'Merchant: \\phi = 45 deg + \\alpha/2 - \\beta/2;  Lee and Shaffer: \\phi = 45 deg + \\alpha - \\beta', 'Power = F_{c} V;  Specific cutting energy = F_{c}/(b t);  most energy (about 70%) is shear, rest friction on the rake face'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'chip-types-tool-life', w: 900, h: 480, file: F4, section: 'A5.',
      title: 'Chip Types and Tool Life',
      caption: 'Continuous, built-up edge and discontinuous chips; flank wear against time; Taylor tool life curve',
      draw: (L) => {
         let s = sub(L, 150, 58, 'Chip types');
         s += L.polyline([[40, 120], [80, 108], [120, 128], [160, 112], [200, 132], [240, 118]], { c: 'blue', w: 4 }) + L.text(40, 160, 'Continuous: ductile metals, high speed, sharp tool', { size: 10.5 });
         s += L.polyline([[40, 200], [70, 190], [90, 210], [110, 192], [130, 212], [160, 198]], { c: 'orange', w: 4 }) + L.poly([[30, 190], [50, 180], [50, 205]], { f: 'lred', s: 'red' }) + L.text(40, 238, 'With built-up edge: low speed, poor finish', { size: 10.5 });
         [60, 100, 140, 180, 220].forEach((x) => { s += L.poly([[x, 285], [x + 24, 280], [x + 28, 297], [x + 4, 302]], { f: 'lred', s: 'red', w: 1.5 }); });
         s += L.text(40, 322, 'Discontinuous: brittle metals, low speed, large feed', { size: 10.5 });
         const P1 = L.plot(420, 250, 190, 150, 0, 1, 0, 1.1);
         s += sub(L, 515, 58, 'Flank wear against time') + P1.axes('Time', 'VB');
         s += P1.pts([[0, 0.1], [0.08, 0.28], [0.15, 0.32], [0.7, 0.62], [0.85, 0.75], [0.95, 1.05]], { c: 'blue', w: 3 }) + P1.hline(0.7, 0, 1, { c: 'red' });
         s += P1.text(0.04, 0.4, 'I', { size: 12, bold: true, c: 'grey' }) + P1.text(0.4, 0.4, 'II (steady)', { size: 11, bold: true, c: 'grey', anchor: 'middle' }) + P1.text(0.9, 0.85, 'III', { size: 12, bold: true, c: 'grey' }) + P1.text(0.02, 0.7, 'VB limit', { size: 10, c: 'red', dy: -4 });
         const P2 = L.plot(690, 250, 160, 150, 0, 1, 0, 1.1);
         s += sub(L, 770, 58, 'Taylor: V T^{n} = C') + P2.axes('log T', 'log V');
         s += P2.pts([[0.05, 0.95], [0.95, 0.15]], { c: 'blue', w: 3 }) + P2.text(0.5, 0.55, 'slope = -n', { size: 11, c: 'blue', bold: true, dx: 10, dy: -10 });
         s += L.note(40, 335, ['Taylor: V T^{n} = C; n: HSS 0.08-0.2, carbide 0.2-0.5, ceramic 0.5-0.7; extended: V T^{n} f^{a} d^{b} = C', 'Cutting speed has the largest effect on tool life, then feed, then depth of cut; tool life ends at VB = 0.3 mm (uniform) or 0.6 mm (non-uniform)', 'Minimum cost tool life: T = (1/n - 1)(t_{ch} + C_{t}/C_{m}) t_{ch} = tool change time, C_{t} tool cost per edge, C_{m} machine rate'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'lathe-milling-operations', w: 900, h: 480, file: F4, section: 'A8.',
      title: 'Lathe, Drilling and Milling Operations',
      caption: 'Main lathe parts and operations; up (conventional) versus down (climb) milling',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Lathe layout');
         s += L.rect(40, 180, 380, 30, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(40, 120, 70, 60, { f: 'lblue', s: 'blue', w: 2 }) + L.rect(360, 140, 60, 40, { f: 'lgreen', s: 'green', w: 2 }) + L.rect(150, 110, 130, 70, { f: 'lorange', s: 'orange', w: 1.5 });
         s += L.text(75, 155, 'Head-\nstock', { anchor: 'middle', size: 10.5, bold: true }) + L.text(390, 165, 'Tail-\nstock', { anchor: 'middle', size: 10.5, bold: true }) + L.text(215, 150, 'Workpiece', { anchor: 'middle', size: 11, bold: true });
         s += L.rect(190, 90, 60, 20, { f: 'lred', s: 'red', w: 1.5 }) + L.text(220, 80, 'Tool post + cross slide + carriage', { anchor: 'middle', size: 10.5, c: 'red' }) + L.text(230, 232, 'Bed (guideways), lead screw, feed rod', { anchor: 'middle', size: 10.5, c: 'grey' });
         s += L.text(40, 262, 'Operations: facing, turning, taper turning, threading, knurling, boring, parting', { size: 10.5 }) + L.text(40, 280, 'Taper by tailstock offset / compound slide / taper attachment', { size: 10.5, c: 'grey' });
         s += sub(L, 690, 58, 'Milling: up and down');
         s += L.circle(620, 160, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(550, 205, 140, 25, { f: 'lorange', s: 'orange', w: 2 });
         s += L.text(620, 165, 'Cutter', { anchor: 'middle', size: 10, c: 'ink' }) + L.arrow(550, 245, 600, 245, { c: 'blue', w: 2 }) + L.text(550, 262, 'Feed (up milling)', { size: 10.5, c: 'blue', bold: true });
         s += L.circle(790, 160, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(720, 205, 140, 25, { f: 'lorange', s: 'orange', w: 2 }) + L.arrow(850, 245, 800, 245, { c: 'green', w: 2 }) + L.text(720, 262, 'Feed (down milling)', { size: 10.5, c: 'green', bold: true });
         s += L.note(40, 300, ['Up milling: cutter rotation opposes feed; chip thin to thick; tends to lift the work, better for hard skins and backlash', 'Down milling: rotation along the feed; chip thick to thin, better finish, longer tool life, needs a backlash eliminator', 'Cutting speed V = \\pi D N / 1000 (m/min);  Turning: MRR = V f d (mm^3/min);  Drilling time = L/(f N)', 'Milling machine indexing: simple N_{index} = 40 / z turns of crank; angular: 40 x \\theta / 360 = \\theta/9 turns'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'limits-fits-tolerance', w: 900, h: 480, file: F5, section: 'A3.',
      title: 'Limits, Fits and Tolerances (Hole-Basis System)',
      caption: 'Basic size, deviations, tolerance zones, clearance, transition and interference fits',
      draw: (L) => {
         let s = L.line(40, 220, 440, 220, { c: 'ink', w: 2 }) + L.text(445, 224, 'Basic size (zero line)', { size: 11 });
         s += L.rect(80, 220, 60, 50, { f: 'lblue', s: 'blue', w: 2 }) + L.text(110, 295, 'Hole (H)', { size: 12, bold: true, anchor: 'middle', c: 'blue' });
         s += L.rect(190, 160, 60, 45, { f: 'lgreen', s: 'green', w: 2 }) + L.text(220, 140, 'Shaft: clearance', { size: 11, bold: true, anchor: 'middle', c: 'green' });
         s += L.rect(290, 195, 60, 55, { f: 'lorange', s: 'orange', w: 2 }) + L.text(320, 280, 'Shaft: transition', { size: 11, bold: true, anchor: 'middle', c: 'orange' });
         s += L.rect(390, 245, 60, 45, { f: 'lred', s: 'red', w: 2 }) + L.text(420, 315, 'Shaft: interference', { size: 11, bold: true, anchor: 'middle', c: 'red' });
         s += L.dim(60, 220, 60, 270, '', {}) + L.text(30, 250, 'Tol.', { size: 10.5 });
         s += L.box(540, 90, 320, 120, 'Hole-basis: lower deviation of hole = 0 (H)\nClearance: shaft always smaller than hole\nInterference: shaft always larger\nTransition: may be either', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(540, 225, ['Tolerance = upper limit - lower limit', 'Allowance = min. hole - max. shaft (tightest fit)', 'IT grades: IT01 - IT16; small number, finer fit', 'Examples: H7/g6 sliding, H7/k6 transition,', 'H7/p6 or s6 interference (press fit)'], { w: 320, size: 11 });
         s += L.note(40, 335, ['Max. clearance = max. hole - min. shaft;  min. clearance = min. hole - max. shaft;  Max. interference = max. shaft - min. hole', 'Unilateral tolerance: variation on one side of basic size; bilateral: on both sides; hole-basis preferred (reamers and drills fixed size)'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'cnc-axes-and-edm', w: 900, h: 480, file: F5, section: 'A4.',
      title: 'CNC Axes, Coordinate Systems and EDM Principle',
      caption: 'Right-hand Cartesian axes for a milling centre; absolute and incremental programming; spark erosion',
      draw: (L) => {
         let s = sub(L, 190, 58, 'CNC milling axes');
         s += L.arrow(190, 220, 190, 110, { c: 'blue', w: 3 }) + L.arrow(190, 220, 310, 220, { c: 'red', w: 3 }) + L.arrow(190, 220, 130, 270, { c: 'green', w: 3 });
         s += L.text(190, 100, 'Z (spindle axis)', { anchor: 'middle', size: 12, c: 'blue', bold: true }) + L.text(315, 224, 'X', { size: 13, c: 'red', bold: true }) + L.text(118, 285, 'Y', { size: 13, c: 'green', bold: true });
         s += L.text(40, 320, 'A, B, C: rotation about X, Y, Z (right-hand rule)', { size: 11 }) + L.text(40, 338, 'G90 absolute, G91 incremental; G00 rapid, G01 linear feed', { size: 11, c: 'grey' }) + L.text(40, 356, 'G02/G03 circular CW/CCW; M03 spindle on; M05 stop; M30 end', { size: 11, c: 'grey' });
         s += sub(L, 650, 58, 'Electrical discharge machining');
         s += L.rect(560, 90, 60, 30, { f: 'lgrey', s: 'ink' }) + L.poly([[570, 120], [610, 120], [610, 160], [570, 160]], { f: 'lorange', s: 'orange', w: 2 }) + L.rect(530, 190, 250, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(600, 180, 80, 12, { f: 'lblue', s: null });
         s += L.polyline([[600, 160], [595, 172], [605, 176], [598, 186]], { c: 'red', w: 2 }) + L.text(640, 175, 'spark gap about 0.01-0.5 mm', { size: 10, c: 'red', bold: true });
         s += L.text(590, 82, 'Tool (electrode)', { size: 11, anchor: 'middle', bold: true }) + L.text(540, 250, 'Workpiece in dielectric (kerosene / deionised water)', { size: 11, c: 'blue' }) + L.text(540, 268, 'Material removed by melting and vaporisation', { size: 11, c: 'grey' });
         s += L.note(40, 385, ['Unconventional: USM (abrasive slurry, brittle), AJM, ECM (anodic dissolution, no tool wear), EDM, LBM, EBM (vacuum), PAM', 'MRR: ECM = A I / (Z F \\rho);  EDM electrode wear is low with graphite/copper; Powder metallurgy: blend, compact, sinter, size'], { w: 820, size: 10.5 });
         return s;
      }
   }
];
