'use strict';
// Batch 04: Machine Design
const F1 = '04-Machine-Design/01-fatigue-fasteners-joints.md';
const F2 = '04-Machine-Design/02-shafts-bearings-lubrication.md';
const F3 = '04-Machine-Design/03-gears-springs-belts-brakes.md';
const FOLDER = '04-machine-design';

module.exports = [
   {
      folder: FOLDER, name: 'sn-curve-endurance-limit', w: 900, h: 480, file: F1, section: 'A2.',
      title: 'S-N Curve and Endurance Limit',
      caption: 'Fatigue strength against number of cycles: steel shows an endurance limit near 10^6 cycles, non-ferrous metals do not',
      draw: (L) => {
         const P = L.plot(100, 340, 640, 240, 3, 8, 0, 1.2);
         let s = P.axes('log N (cycles)', 'Stress amplitude');
         s += P.pts([[3, 0.9], [4, 0.78], [5, 0.62], [6, 0.5], [7, 0.5], [8, 0.5]], { c: 'blue', w: 3 });
         s += P.pts([[3, 0.9], [4, 0.76], [5, 0.58], [6, 0.42], [7, 0.33], [8, 0.27]], { c: 'green', w: 2.5, dash: '7 4' });
         s += P.hline(0.5, 3, 8, { c: 'red', dash: '6 4' }) + L.text(P.X(8) + 8, P.Y(0.5) + 4, '\\sigma_{e}', { c: 'red', bold: true, size: 14 });
         s += P.vline(6, 0, 0.5, {}) + L.text(P.X(6), P.Y(0) + 20, '10^{6}', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(P.X(7.2), P.Y(0.56), 'Steel: endurance limit', { c: 'blue', bold: true, size: 12, anchor: 'middle' });
         s += L.text(P.X(7), P.Y(0.22), 'Non-ferrous: no endurance limit', { c: 'green', bold: true, size: 12, anchor: 'middle' });
         s += L.text(P.X(3.2), P.Y(1.02), 'Low-cycle', { size: 12, c: 'grey' }) + L.text(P.X(4.6), P.Y(0.38), 'High-cycle (finite life)', { size: 12, c: 'grey' }) + L.text(P.X(6.6), P.Y(0.1), 'Infinite life', { size: 12, c: 'grey' });
         s += L.note(100, 395, ["Endurance limit of steel: \\sigma_{e}' about 0.5 \\sigma_{u}, then corrected: \\sigma_{e} = k_{a} k_{b} k_{c} k_{d} k_{e} \\sigma_{e}'", 'k_{a} surface, k_{b} size, k_{c} reliability, k_{d} temperature, k_{e} stress concentration (1/K_{f})'], { w: 700, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'goodman-diagram', w: 900, h: 500, file: F1, section: 'A2.',
      title: 'Goodman and Soderberg Diagram',
      caption: 'Safe region on the mean stress - amplitude plane bounded by the Goodman line, Soderberg line and yield line',
      draw: (L) => {
         const P = L.plot(120, 380, 560, 280, 0, 1.2, 0, 1.05);
         let s = P.axes('Mean stress \\sigma_{m}', 'Stress amplitude \\sigma_{a}');
         s += P.pts([[0, 0.5], [1, 0]], { c: 'blue', w: 3 }) + P.pts([[0, 0.5], [0.75, 0]], { c: 'green', w: 2.5 }) + P.pts([[0, 0.75], [0.75, 0]], { c: 'red', w: 2, dash: '6 4' });
         s += P.areaPts([[0, 0], [0, 0.5], [0.75, 0], [0, 0]], { f: 'lgreen' });
         s += P.pts([[0, 0.5], [1, 0]], { c: 'blue', w: 3 });
         s += L.text(P.X(0) - 8, P.Y(0.5) + 4, '\\sigma_{e}', { anchor: 'end', bold: true, c: 'blue', size: 14 });
         s += L.text(P.X(1) + 4, P.Y(0) - 8, '\\sigma_{u}', { bold: true, c: 'blue', size: 14 }) + L.text(P.X(0.75), P.Y(0) - 8, '\\sigma_{y}', { anchor: 'middle', bold: true, c: 'green', size: 14 });
         s += L.text(P.X(0.9), P.Y(0.2), 'Goodman line', { c: 'blue', bold: true, size: 12 }) + L.text(P.X(0.57), P.Y(0.17), 'Soderberg', { c: 'green', bold: true, size: 12 });
         s += P.dot(0.3, 0.2, { c: 'orange' }) + L.text(P.X(0.3) + 8, P.Y(0.2) - 6, 'safe point', { size: 12, c: 'orange' });
         s += L.text(P.X(0.14), P.Y(0.18), 'Safe region', { size: 12, c: 'green', bold: true });
         s += L.note(120, 425, ['Goodman: \\sigma_{a}/\\sigma_{e} + \\sigma_{m}/\\sigma_{u} = 1/FS   (preferred for brittle materials and general use)', 'Soderberg: \\sigma_{a}/\\sigma_{e} + \\sigma_{m}/\\sigma_{y} = 1/FS   (most conservative)', 'Gerber parabola: \\sigma_{a}/\\sigma_{e} + (\\sigma_{m}/\\sigma_{u})^{2} = 1   (fits ductile test data best)'], { w: 700, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'bolt-stress-and-thread', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Threaded Fastener: Thread Terms and Bolt Failure',
      caption: 'Thread nomenclature and stress area; bolt loaded in tension, shear and combined with preload',
      draw: (L) => {
         let s = L.text(230, 70, 'Thread terminology', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.polyline([[70, 220], [100, 150], [130, 220], [160, 150], [190, 220], [220, 150], [250, 220], [280, 150], [310, 220], [340, 150], [370, 220]], { c: 'ink', w: 2.5 });
         s += L.line(50, 150, 400, 150, { c: 'grey', dash: '4 3' }) + L.line(50, 220, 400, 220, { c: 'grey', dash: '4 3' });
         s += L.dim(400, 150, 400, 220, '', {}) + L.text(412, 190, 'depth', { size: 12 });
         s += L.dim(100, 255, 160, 255, 'Pitch p', {});
         s += L.text(130, 135, 'Crest', { anchor: 'middle', size: 12, c: 'grey' }) + L.text(160, 242, 'Root', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(230, 305, 'Lead = pitch x number of starts', { anchor: 'middle', size: 12 }) + L.text(230, 327, 'Metric thread angle 60\\deg ; self-locking if friction angle > helix angle', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(450, 60, 450, 440, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Bolt loading', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(630, 110, 80, 60, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(645, 170, 50, 130, { f: 'lblue', s: 'blue', w: 2 }) + L.rect(630, 300, 80, 28, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.arrow(670, 100, 670, 60, { c: 'red', w: 3 }) + L.arrow(670, 340, 670, 380, { c: 'red', w: 3 });
         s += L.text(684, 98, 'P', { c: 'red', bold: true, size: 15 });
         s += L.text(730, 240, 'Tension: \\sigma = P / A_{s}', { size: 12, c: 'blue', bold: true });
         s += L.text(730, 262, 'A_{s} = tensile stress area', { size: 12, c: 'grey' });
         s += L.text(730, 284, 'about \\pi/4 (d - 0.9382 p)^{2}', { size: 11, c: 'grey' });
         s += L.note(470, 395, ['Shear: \\tau = P / (\\pi d^{2}/4) ;  bearing: \\sigma_{b} = P / (d t)', 'Preload: initial tightening tension;', 'external load shares between bolt and joint'], { w: 410, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'riveted-joint-failures', w: 900, h: 520, file: F1, section: 'A5.',
      title: 'Riveted Lap Joint and Modes of Failure',
      caption: 'Tearing of plate, shearing of rivet, crushing of rivet and plate, and edge failure in a riveted joint',
      draw: (L) => {
         let s = L.text(230, 70, 'Single-riveted lap joint', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(60, 120, 250, 36, { f: 'lblue', s: 'blue', w: 2 }) + L.rect(150, 156, 250, 36, { f: 'lorange', s: 'orange', w: 2 });
         s += L.rect(215, 110, 20, 94, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(205, 104, 40, 10, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.arrow(20, 138, 60, 138, { c: 'red', w: 3 }) + L.arrow(440, 174, 400, 174, { c: 'red', w: 3 }) + L.text(8, 130, 'P', { c: 'red', bold: true }) + L.text(445, 170, 'P', { c: 'red', bold: true });
         s += L.dim(225, 230, 145, 230, '', {}) + L.text(185, 250, 'margin m = 1.5 d', { size: 12, anchor: 'middle', c: 'grey' });
         s += L.text(230, 290, 'Pitch p : distance between rivet centres', { anchor: 'middle', size: 12 }) + L.text(230, 312, 'Rivet diameter d from Unwin: d = 6 \\sqrt t', { anchor: 'middle', size: 12 });
         s += L.line(470, 60, 470, 450, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Failure modes and strengths', { anchor: 'middle', bold: true, c: 'blue' });
         const rows = [['1. Tearing of plate', 'P_{t} = (p - d) t \\sigma_{t}'], ['2. Shearing of rivet', 'P_{s} = n (\\pi d^{2}/4) \\tau   (double shear: 2x)'], ['3. Crushing of rivet', 'P_{c} = n d t \\sigma_{c}'], ['4. Tearing at edge', 'prevented by margin m = 1.5 d']];
         rows.forEach((r, i) => { s += L.text(500, 120 + i * 62, r[0], { size: 13, bold: true }) + L.text(500, 142 + i * 62, r[1], { size: 12, c: 'ink' }); });
         s += L.text(500, 380, 'Efficiency \\eta = least of P_{t}, P_{s}, P_{c} / (p t \\sigma_{t})', { size: 12, bold: true, c: 'blue' });
         s += L.text(500, 402, 'Lap: single shear. Butt with cover plates: double shear', { size: 12, c: 'grey' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'welded-joints-types', w: 900, h: 460, file: F1, section: 'A4.',
      title: 'Welded Joints: Butt and Fillet Weld',
      caption: 'Butt weld throat equals plate thickness; fillet weld throat is 0.707 times the leg size',
      draw: (L) => {
         let s = L.text(230, 70, 'Butt weld (V-groove)', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.poly([[60, 150], [215, 150], [230, 170], [245, 150], [400, 150], [400, 190], [245, 190], [230, 190], [215, 190], [60, 190]], { f: 'lblue', s: 'blue', w: 2 });
         s += L.arrow(20, 170, 58, 170, { c: 'red', w: 3 }) + L.arrow(440, 170, 402, 170, { c: 'red', w: 3 });
         s += L.dim(420, 150, 420, 190, 't', {});
         s += L.text(230, 245, '\\sigma = P / (l t)', { anchor: 'middle', size: 14, bold: true }) + L.text(230, 268, 'Throat = plate thickness t', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(450, 60, 450, 440, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Fillet weld', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(520, 130, 260, 24, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(600, 154, 24, 110, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.poly([[600, 154], [600, 184], [570, 154]], { f: 'lred', s: 'red', w: 1.5 }) + L.poly([[624, 154], [624, 184], [654, 154]], { f: 'lred', s: 'red', w: 1.5 });
         s += L.text(550, 190, 's', { size: 13, bold: true, c: 'red' }) + L.text(643, 190, 's', { size: 13, bold: true, c: 'red' });
         s += L.text(670, 300, 'Throat t = s cos 45\\deg = 0.707 s', { anchor: 'middle', size: 13, bold: true }) + L.text(670, 324, 'Shear: \\tau = P / (0.707 s l)  per weld', { anchor: 'middle', size: 12 });
         s += L.note(470, 360, ['Transverse fillet: P = 0.707 s l \\sigma_{t} ;  parallel: P = 0.707 s l \\tau', 'Combined (transverse + parallel): P = 0.707 s l (\\sigma_{t} + \\tau) approx.'], { w: 410, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'rolling-bearing-life', w: 900, h: 460, file: F2, section: 'A4.',
      title: 'Rolling Contact Bearings: Types and Life',
      caption: 'Deep groove ball, cylindrical roller and tapered roller bearings with the basic life relationship L10 = (C/P)^k',
      draw: (L) => {
         const cross = (x, y, kind) => {
            let t = L.circle(x, y, 60, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.circle(x, y, 30, { f: 'white', s: 'ink', w: 2 });
            for (let i = 0; i < 8; i++) { const p = L.pol(x, y, 45, i * 45); t += kind === 'ball' ? L.circle(p[0], p[1], 8, { f: 'lblue', s: 'blue', w: 1.5 }) : L.rect(p[0] - 6, p[1] - 9, 12, 18, { f: 'lorange', s: 'orange', w: 1.5 }); }
            return t;
         };
         let s = L.text(130, 70, 'Ball bearing', { anchor: 'middle', bold: true, c: 'blue' }) + cross(130, 170, 'ball');
         s += L.text(130, 260, 'Radial + moderate thrust', { anchor: 'middle', size: 12 });
         s += L.text(330, 70, 'Roller bearing', { anchor: 'middle', bold: true, c: 'blue' }) + cross(330, 170, 'roller');
         s += L.text(330, 260, 'Heavy radial loads', { anchor: 'middle', size: 12 });
         s += L.text(530, 70, 'Tapered roller', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.poly([[470, 120], [590, 140], [590, 200], [470, 220]], { f: 'lgrey', s: 'ink', w: 2 }) + L.poly([[490, 150], [570, 160], [570, 180], [490, 190]], { f: 'lorange', s: 'orange', w: 2 });
         s += L.text(530, 260, 'Combined radial + axial', { anchor: 'middle', size: 12 });
         s += L.note(40, 300, ['Basic life L_{10} = (C / P)^{k} million revolutions  (k = 3 balls, 10/3 rollers)', 'C = dynamic load capacity (1 million rev with 90 percent reliability); P = equivalent dynamic load = X V F_{r} + Y F_{a}', 'Life in hours: L_{h} = 10^{6} L_{10} / (60 N) ;  doubling the load cuts the life to one eighth for ball bearings'], { w: 820, size: 12 });
         s += L.text(40, 400, 'Static capacity C_{0}: load for permanent deformation 0.0001 of the rolling element diameter', { size: 12, c: 'grey' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'stribeck-curve-lubrication', w: 900, h: 460, file: F2, section: 'A3.',
      title: 'Stribeck Curve: Regimes of Lubrication',
      caption: 'Coefficient of friction against the bearing characteristic number ZN/p showing boundary, mixed and hydrodynamic lubrication',
      draw: (L) => {
         const P = L.plot(100, 340, 640, 240, 0, 10, 0, 1.2);
         let s = P.axes('Bearing characteristic  Z N / p', 'Coefficient of friction');
         const f = (x) => (x < 2 ? 1 - 0.6 * x / 2 * 0.8 : x < 3.5 ? 0.52 - 0.2 * (x - 2) / 1.5 : 0.32 - 0.2 * Math.exp(-0.0) * 0 );
         const pts = [[0.1, 1.0], [1, 0.8], [2, 0.5], [3, 0.2], [3.6, 0.08], [4.2, 0.05], [5.5, 0.1], [7, 0.16], [9, 0.22], [10, 0.25]];
         s += P.pts(pts, { c: 'blue', w: 3.5 });
         s += P.vline(2, 0, 0.5, {}) + P.vline(3.6, 0, 0.08, {});
         s += L.text(P.X(0.9), P.Y(1.1), 'Boundary', { anchor: 'middle', size: 13, bold: true, c: 'red' }) + L.text(P.X(2.8), P.Y(0.75), 'Mixed', { anchor: 'middle', size: 13, bold: true, c: 'orange' }) + L.text(P.X(7.2), P.Y(0.45), 'Hydrodynamic (fluid film)', { anchor: 'middle', size: 13, bold: true, c: 'green' });
         s += P.dot(3.6, 0.08, { c: 'red' }) + L.text(P.X(3.6) + 8, P.Y(0.08) - 12, 'minimum friction', { size: 12 }) + L.text(P.X(3.6), P.Y(0) + 20, 'K', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.note(100, 380, ['Operate to the right of the minimum (stable film); left of it friction rises and the film collapses', 'Sommerfeld number S = (Z N / p)(r / c)^{2} ;  ZN/p less than K gives unstable lubrication'], { w: 700, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'gear-tooth-forces', w: 900, h: 460, file: F3, section: 'A1.',
      title: 'Spur Gear Tooth Forces',
      caption: 'Tangential force Ft transmits power; radial force Fr = Ft tan(phi) loads the shaft and bearings; total normal force Fn = Ft / cos(phi)',
      draw: (L) => {
         const c = [230, 250];
         let s = L.circle(c[0], c[1], 130, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.dot(c[0], c[1], 4, 'ink') + L.circle(c[0], c[1], 110, { s: 'grey', dash: '5 4' });
         const pc = [c[0] + 130 * Math.cos(-0.1), c[1] + 130 * Math.sin(-0.1)];
         const P = [c[0] + 130, c[1]];
         s += L.dot(P[0], P[1], 5, 'red') + L.text(P[0] + 10, P[1] + 20, 'Pitch point', { size: 12 });
         s += L.arrow(P[0], P[1], P[0], P[1] - 110, { c: 'blue', w: 3 }) + L.text(P[0] + 10, P[1] - 100, 'F_{t}', { c: 'blue', bold: true, size: 15 });
         s += L.arrow(P[0], P[1], P[0] - 80, P[1], { c: 'green', w: 3 }) + L.text(P[0] - 40, P[1] + 22, 'F_{r}', { c: 'green', bold: true, size: 15, anchor: 'middle' });
         s += L.arrow(P[0], P[1], P[0] - 80, P[1] - 110, { c: 'red', w: 3 }) + L.text(P[0] - 100, P[1] - 120, 'F_{n}', { c: 'red', bold: true, size: 15 });
         s += L.angle(P[0], P[1], 45, 90, 126, '\\phi', {});
         s += L.note(470, 100, ['F_{t} = 2T / d = P / v   (tangential, useful force)', 'F_{r} = F_{t} tan \\phi   (separating force)', 'F_{n} = F_{t} / cos \\phi   (normal to tooth)', 'Lewis beam strength: S_{b} = \\sigma_{b} b m Y', 'Wear (Buckingham): S_{w} = d_{p} b Q K', 'Dynamic load by Buckingham or Barth velocity factor', 'Design checks: tooth bending and surface wear (pitting)'], { w: 400, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'belt-drive-tensions', w: 900, h: 460, file: F3, section: 'A4.',
      title: 'Open Belt Drive: Tight and Slack Sides',
      caption: 'Open flat belt drive with tight side tension T1 and slack side tension T2; ratio T1/T2 = e^(mu theta)',
      draw: (L) => {
         const c1 = [200, 230], c2 = [560, 230], r1 = 100, r2 = 60;
         let s = L.circle(c1[0], c1[1], r1, { f: 'lgrey', s: 'ink', w: 2.5 }) + L.circle(c2[0], c2[1], r2, { f: 'lgrey', s: 'ink', w: 2.5 });
         s += L.line(c1[0], c1[1] - r1, c2[0], c2[1] - r2, { c: 'red', w: 3 }) + L.line(c1[0], c1[1] + r1, c2[0], c2[1] + r2, { c: 'blue', w: 3 });
         s += L.dot(c1[0], c1[1], 4, 'ink') + L.dot(c2[0], c2[1], 4, 'ink');
         s += L.text(380, 140, 'Tight side T_{1} (driven upward)', { anchor: 'middle', c: 'red', bold: true, size: 13 }) + L.text(380, 340, 'Slack side T_{2}', { anchor: 'middle', c: 'blue', bold: true, size: 13 });
         s += L.moment(c1[0], c1[1], 40, false, { c: 'ink' }) + L.text(c1[0], c1[1] + 78, 'Driver', { anchor: 'middle', size: 12 }) + L.text(c2[0], c2[1] + 4, 'Driven', { anchor: 'middle', size: 12 });
         s += L.note(40, 385, ['Power P = (T_{1} - T_{2}) v ;  v = \\pi d N / 60 ;  T_{1}/T_{2} = e^{\\mu\\theta} (flat belt),  e^{\\mu\\theta/\\sin\\beta} (V-belt)', 'Centrifugal tension T_{c} = m v^{2}; maximum power transmitted when T_{1} = 3 T_{c} (v = sqrt(T/3m))', 'Length of open belt  L = \\pi (r_{1} + r_{2}) + 2 C + (r_{1} - r_{2})^{2} / C'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'spring-and-clutch-basics', w: 900, h: 480, file: F3, section: 'A3.',
      title: 'Helical Spring and Single Plate Clutch',
      caption: 'Helical compression spring with Wahl correction, and a single plate clutch with uniform wear and uniform pressure torque equations',
      draw: (L) => {
         let s = L.text(230, 70, 'Helical compression spring', { anchor: 'middle', bold: true, c: 'blue' });
         for (let i = 0; i < 7; i++) { s += L.path(`M170,${130 + i * 28} q60,-18 120,0`, { c: 'ink', w: 3 }); }
         s += L.arrow(230, 90, 230, 120, { c: 'red', w: 3 }) + L.text(246, 108, 'W', { c: 'red', bold: true }) + L.line(150, 330, 310, 330, { w: 3 }) + L.hatch(150, 330, 160, 1);
         s += L.dim(330, 130, 330, 326, 'free length', { size: 11 });
         s += L.text(230, 375, 'Spring index C = D / d (6 to 12 typical)', { anchor: 'middle', size: 12 }) + L.text(230, 397, '\\tau = K_{w} 8 W D / (\\pi d^{3}) ,  K_{w} = (4C-1)/(4C-4) + 0.615/C', { anchor: 'middle', size: 12 });
         s += L.text(230, 419, 'Deflection \\delta = 8 W D^{3} n / (G d^{4}) ;  stiffness k = G d^{4} / (8 D^{3} n)', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(470, 60, 470, 450, { c: 'border', w: 1 });
         s += L.text(680, 70, 'Single plate clutch', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(560, 120, 24, 150, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(600, 135, 14, 120, { f: 'lorange', s: 'orange', w: 2 }) + L.rect(630, 120, 24, 150, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.arrow(760, 195, 660, 195, { c: 'red', w: 3 }) + L.text(765, 199, 'W', { c: 'red', bold: true });
         s += L.line(500, 195, 850, 195, { c: 'grey', dash: '8 4', w: 1 });
         s += L.text(680, 300, 'Uniform pressure:  T = (2/3) \\mu W (R^{3} - r^{3}) / (R^{2} - r^{2}) n', { anchor: 'middle', size: 11 });
         s += L.text(680, 322, 'Uniform wear:  T = \\mu W (R + r) n / 4', { anchor: 'middle', size: 12, bold: true });
         s += L.text(680, 344, 'n = number of friction surfaces (2 for a single plate)', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(680, 380, 'Uniform wear is the realistic assumption', { anchor: 'middle', size: 12 }) + L.text(680, 402, 'for design; it gives the lower torque.', { anchor: 'middle', size: 12 });
         return s;
      }
   }
];
