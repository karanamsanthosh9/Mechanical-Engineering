'use strict';
// Batch 03: Theory of Machines
const F1 = '03-Theory-of-Machines/01-mechanisms-gears-cams.md';
const F2 = '03-Theory-of-Machines/02-balancing-and-vibrations.md';
const F3 = '03-Theory-of-Machines/03-governors-flywheel-brakes-belts-gyro.md';
const FOLDER = '03-theory-of-machines';

module.exports = [
   {
      folder: FOLDER, name: 'four-bar-chain-and-slider-crank', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Four-Bar Chain and Single Slider-Crank Chain',
      caption: 'Four-bar chain with fixed link, crank, coupler and rocker; slider-crank chain with crank, connecting rod and slider',
      draw: (L) => {
         let s = L.text(220, 70, 'Four-bar chain', { anchor: 'middle', bold: true, c: 'blue' });
         const A = [100, 300], B = [160, 170], C = [300, 200], D = [340, 300];
         s += L.line(A[0], A[1], B[0], B[1], { c: 'red', w: 5 }) + L.line(B[0], B[1], C[0], C[1], { c: 'green', w: 5 }) + L.line(C[0], C[1], D[0], D[1], { c: 'orange', w: 5 });
         s += L.line(A[0], A[1], D[0], D[1], { c: 'ink', w: 4, dash: '10 4' });
         s += L.pin(A[0], A[1] + 4) + L.pin(D[0], D[1] + 4);
         [A, B, C, D].forEach((p) => { s += L.circle(p[0], p[1], 6, { f: 'white', s: 'ink', w: 2 }); });
         s += L.text(A[0] - 14, A[1] + 4, 'A', { anchor: 'end', bold: true }) + L.text(B[0] - 12, B[1] - 6, 'B', { anchor: 'end', bold: true }) + L.text(C[0] + 10, C[1] - 8, 'C', { bold: true }) + L.text(D[0] + 14, D[1] + 4, 'D', { bold: true });
         s += L.text(112, 245, 'Crank', { c: 'red', size: 12, anchor: 'end' }) + L.text(230, 168, 'Coupler', { c: 'green', size: 12, anchor: 'middle' }) + L.text(338, 250, 'Rocker', { c: 'orange', size: 12 }) + L.text(220, 340, 'Fixed link (frame)', { size: 12, anchor: 'middle' });
         s += L.note(40, 372, ['Grashof: s + l \\le p + q', 'Crank-rocker if the shortest link is the crank;', 'double-crank if it is the fixed link;', 'double-rocker if it is the coupler'], { w: 360, size: 12 });
         s += L.line(450, 60, 450, 440, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Single slider-crank chain', { anchor: 'middle', bold: true, c: 'blue' });
         const O = [520, 280], P = [580, 215], Q = [780, 280];
         s += L.line(O[0], O[1], P[0], P[1], { c: 'red', w: 5 }) + L.line(P[0], P[1], Q[0], Q[1], { c: 'green', w: 5 });
         s += L.rect(Q[0] - 24, Q[1] - 16, 48, 32, { f: 'lorange', s: 'orange', w: 2 });
         s += L.line(600, 300, 840, 300, { w: 3 }) + L.hatch(600, 300, 240, 1);
         s += L.pin(O[0], O[1] + 4);
         [O, P, Q].forEach((p) => { s += L.circle(p[0], p[1], 6, { f: 'white', s: 'ink', w: 2 }); });
         s += L.text(O[0] - 12, O[1] + 4, 'O', { anchor: 'end', bold: true }) + L.text(P[0] - 8, P[1] - 10, 'P', { bold: true }) + L.text(Q[0] + 30, Q[1] - 20, 'Slider', { c: 'orange', size: 12 });
         s += L.text(533, 235, 'Crank r', { c: 'red', size: 12, anchor: 'end' }) + L.text(690, 232, 'Connecting rod l', { c: 'green', size: 12, anchor: 'middle' });
         s += L.moment(O[0], O[1], 40, true, { c: 'blue' });
         s += L.note(470, 340, ['Rotary motion \\leftrightarrow reciprocating motion', 'Used in IC engines and reciprocating compressors', 'Inversions: Whitworth quick return, crank and', 'slotted lever, Oldham coupling (double slider)'], { w: 400, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'gear-terminology', w: 900, h: 520, file: F1, section: 'A5.',
      title: 'Spur Gear Terminology',
      caption: 'Pitch circle, base circle, addendum, dedendum, circular pitch and pressure angle of a spur gear tooth',
      draw: (L) => {
         const c = [300, 290];
         let s = L.circle(c[0], c[1], 200, { s: 'grey', dash: '6 4', w: 1.5 }) + L.circle(c[0], c[1], 170, { s: 'blue', w: 2.5 }) + L.circle(c[0], c[1], 140, { s: 'grey', dash: '3 3', w: 1.5 }) + L.circle(c[0], c[1], 160, { s: 'red', dash: '8 3', w: 1.5 });
         s += L.dot(c[0], c[1], 4, 'ink');
         s += L.text(c[0] + 150, c[1] - 175, 'Addendum circle', { size: 12, c: 'grey' });
         s += L.text(c[0] + 175, c[1] + 8, 'Pitch', { size: 12, c: 'blue', bold: true, anchor: 'end' });
         s += L.text(c[0] + 120, c[1] + 28, 'Base circle', { size: 12, c: 'red', anchor: 'end' });
         s += L.text(c[0] + 146, c[1] + 48, 'Root circle', { size: 12, c: 'grey', anchor: 'end' });
         s += L.line(c[0], c[1], c[0] + 200, c[1], { c: 'grey', w: 1 });
         s += L.text(560, 100, 'Addendum a = 1 m', { size: 13, c: 'ink' }) + L.text(560, 122, 'Dedendum = 1.25 m', { size: 13 }) + L.text(560, 144, 'Circular pitch p_{c} = \\pi m', { size: 13 });
         s += L.text(560, 166, 'Module m = d / T', { size: 13, bold: true }) + L.text(560, 188, 'Pressure angle \\phi = 20\\deg', { size: 13 });
         s += L.note(540, 262, ['Velocity ratio = N_{1}/N_{2} = T_{2}/T_{1} = d_{2}/d_{1}', 'Centre distance = m (T_{1} + T_{2}) / 2', 'Base circle radius = R cos \\phi', 'Law of gearing: common normal must pass through the', 'pitch point, giving constant velocity ratio (involute)'], { w: 340, size: 12 });
         s += L.text(560, 400, 'Minimum teeth to avoid interference', { size: 13, bold: true, c: 'blue' }) + L.text(560, 422, 'T_{min} = 2 / sin^{2}\\phi = 18 for 20\\deg full depth', { size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'cam-follower-displacement', w: 900, h: 500, file: F1, section: 'A6.',
      title: 'Cam and Follower: Displacement Diagrams',
      caption: 'Follower displacement against cam angle for uniform velocity, SHM and uniform acceleration motion with rise, dwell, return and dwell',
      draw: (L) => {
         const P = L.plot(100, 320, 640, 200, 0, 360, 0, 1.15);
         let s = P.axes('Cam angle', 'Follower displacement s');
         const rise = (t, f) => (t < 0 ? 0 : f(Math.min(t, 1)));
         const prof = (f) => (th) => (th <= 90 ? f(th / 90) : th <= 150 ? 1 : th <= 240 ? 1 - f((th - 150) / 90) : 0);
         const uv = (u) => u, shm = (u) => (1 - Math.cos(Math.PI * u)) / 2, ua = (u) => (u < 0.5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u));
         s += P.fn(prof(uv), 0, 360, { c: 'red', w: 2.5, n: 360 }) + P.fn(prof(shm), 0, 360, { c: 'blue', w: 3, n: 360 }) + P.fn(prof(ua), 0, 360, { c: 'green', w: 2.5, n: 360, dash: '6 4' });
         s += L.text(P.X(0), P.Y(0) + 20, '0 and 360 deg', { anchor: 'start', size: 12, c: 'grey' }) + L.text(P.X(90), P.Y(0) + 20, 'rise ends', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.text(P.X(150), P.Y(0) + 20, 'return begins', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(P.X(240), P.Y(0) + 20, 'return ends', { anchor: 'middle', size: 11, c: 'grey' });
         
         s += L.text(P.X(120), P.Y(1) - 10, 'Dwell', { anchor: 'middle', size: 12, c: 'grey' }) + L.text(P.X(300), P.Y(0) - 10, 'Dwell', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(100, 395, 'Uniform velocity (red): abrupt velocity change at the ends, infinite acceleration', { size: 12, c: 'red' });
         s += L.text(100, 417, 'SHM (blue): smooth, finite acceleration but jerk at the ends of dwell', { size: 12, c: 'blue' });
         s += L.text(100, 439, 'Uniform acceleration and retardation (green): lowest peak acceleration for a given rise', { size: 12, c: 'green' });
         s += L.text(100, 470, 'Pressure angle should stay below about 30\\deg ; prime circle = smallest circle tangent to the pitch curve', { size: 11, c: 'grey' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'epicyclic-gear-train', w: 900, h: 460, file: F1, section: 'A5.',
      title: 'Simple Epicyclic (Planetary) Gear Train',
      caption: 'Sun, planet and annulus gears with the arm carrying the planet: velocity ratio found by the tabular method',
      draw: (L) => {
         const c = [260, 250];
         let s = L.circle(c[0], c[1], 160, { f: 'lgrey', s: 'ink', w: 3 }) + L.text(c[0], c[1] - 172, 'Annulus (internal gear)', { size: 12, anchor: 'middle' });
         s += L.circle(c[0], c[1], 55, { f: 'lblue', s: 'blue', w: 2.5 }) + L.text(c[0], c[1] + 4, 'Sun', { anchor: 'middle', size: 13, bold: true, c: 'blue' });
         s += L.circle(c[0] + 105, c[1], 50, { f: 'lorange', s: 'orange', w: 2.5 }) + L.text(c[0] + 105, c[1] + 4, 'Planet', { anchor: 'middle', size: 12, bold: true, c: 'orange' });
         s += L.line(c[0], c[1], c[0] + 105, c[1], { c: 'red', w: 4 }) + L.dot(c[0], c[1], 6, 'red') + L.dot(c[0] + 105, c[1], 5, 'red');
         s += L.text(c[0] + 52, c[1] - 12, 'Arm', { anchor: 'middle', c: 'red', bold: true, size: 12 });
         s += L.text(540, 90, 'Tabular method (arm fixed, then arm rotates)', { bold: true, size: 14, c: 'blue' });
         const rows = [['Step', 'Arm', 'Sun', 'Planet'], ['1. Arm fixed, sun +1', '0', '+1', '- T_{S}/T_{P}'], ['2. Multiply by x', '0', '+x', '- x T_{S}/T_{P}'], ['3. Add y to all', '+y', 'x + y', 'y - xT_{S}/T_{P}']];
         rows.forEach((r, i) => { r.forEach((cell, j) => { s += L.text(540 + [0, 150, 205, 265][j], 125 + i * 28, cell, { size: 12, bold: i === 0 }); }); });
         s += L.line(535, 133, 800, 133, { c: 'grey', w: 1 });
         s += L.note(520, 260, ['Annulus: T_{A} = T_{S} + 2 T_{P}', 'Fixed annulus: arm = N_{S} \\times T_{S} / (T_{S} + T_{A})', 'Hence gear ratio sun:arm = 1 + T_{A}/T_{S}', 'Planet turns about its own axis and also orbits'], { w: 340, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'governor-porter-hartnell', w: 900, h: 520, file: F3, section: 'A2.',
      title: 'Centrifugal Governors: Porter and Hartnell',
      caption: 'Porter governor with a central load and Hartnell spring-loaded governor; sleeve lift changes with speed and operates the throttle',
      draw: (L) => {
         let s = L.text(230, 70, 'Porter governor', { anchor: 'middle', bold: true, c: 'blue' });
         const ax = 230;
         s += L.line(ax, 90, ax, 400, { c: 'grey', dash: '8 4', w: 1.5 });
         s += L.line(ax, 110, ax - 90, 220, { w: 3 }) + L.line(ax, 110, ax + 90, 220, { w: 3 }) + L.line(ax - 90, 220, ax, 290, { w: 2.5 }) + L.line(ax + 90, 220, ax, 290, { w: 2.5 });
         s += L.circle(ax - 90, 220, 14, { f: 'lred', s: 'red', w: 2.5 }) + L.circle(ax + 90, 220, 14, { f: 'lred', s: 'red', w: 2.5 });
         s += L.rect(ax - 20, 280, 40, 40, { f: 'lgreen', s: 'green', w: 2.5 }) + L.text(ax, 304, 'M', { anchor: 'middle', bold: true, c: 'green' });
         s += L.text(ax - 108, 224, 'm', { anchor: 'end', bold: true, c: 'red' }) + L.dot(ax, 110, 5, 'ink');
         s += L.arrow(ax + 90, 220, ax + 160, 220, { c: 'blue' }) + L.text(ax + 162, 224, 'F_{c}', { c: 'blue', bold: true });
         s += L.dim(ax, 380, ax + 90, 380, 'r', {});
         s += L.text(ax, 430, 'Equal arms and links: N^{2} = (m + M)/m x 895 / h', { anchor: 'middle', size: 12 });
         s += L.text(ax, 452, 'h = height of governor in metres, N in rpm', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.line(450, 60, 450, 480, { c: 'border', w: 1 });
         s += L.text(670, 70, 'Hartnell governor', { anchor: 'middle', bold: true, c: 'blue' });
         const bx = 600;
         s += L.line(bx, 100, bx, 400, { c: 'grey', dash: '8 4', w: 1.5 });
         s += L.line(bx - 70, 150, bx - 70, 250, { w: 3 }) + L.line(bx - 70, 250, bx - 20, 250, { w: 3 }) + L.circle(bx - 70, 150, 16, { f: 'lred', s: 'red', w: 2.5 }) + L.text(bx - 92, 154, 'm', { anchor: 'end', bold: true, c: 'red' });
         s += L.line(bx + 70, 150, bx + 70, 250, { w: 3 }) + L.line(bx + 70, 250, bx + 20, 250, { w: 3 }) + L.circle(bx + 70, 150, 16, { f: 'lred', s: 'red', w: 2.5 });
         s += L.rect(bx - 20, 300, 40, 34, { f: 'lgreen', s: 'green', w: 2.5 }) + L.text(bx, 322, 'Sleeve', { anchor: 'middle', size: 11, bold: true, c: 'green' });
         s += L.path(`M${bx},300 q15,-8 0,-16 q-15,-8 0,-16 q15,-8 0,-16 q-15,-8 0,-16`, { c: 'orange', w: 2.5 }) + L.text(bx + 24, 270, 'Spring', { size: 12, c: 'orange' });
         s += L.text(bx - 70, 290, 'Bell crank lever', { size: 11, c: 'grey', anchor: 'middle' });
         s += L.note(470, 380, ['Spring force controls the sleeve, so it can govern', 'a wide speed range and works at higher speeds', 'Sensitiveness = (N_{2} - N_{1}) / N_{mean}', 'Isochronous governor: range of speed = 0'], { w: 400, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'flywheel-turning-moment', w: 900, h: 470, file: F3, section: 'A4.',
      title: 'Turning Moment Diagram and Flywheel Energy',
      caption: 'Turning moment varies during the cycle; the area above the mean torque line is the excess energy, which fixes the flywheel size',
      draw: (L) => {
         const P = L.plot(100, 330, 640, 200, 0, 4 * Math.PI, -0.4, 1.6);
         let s = P.axes('Crank angle', 'Turning moment T');
         const T = (t) => 0.6 + 0.9 * Math.sin(t) * Math.sin(t / 2 + 0.3) + 0.3 * Math.sin(2 * t);
         s += P.area((t) => Math.max(T(t), 0.6), 0, 4 * Math.PI, { f: 'lred', base: 0.6, n: 200 });
         s += P.area((t) => Math.min(T(t), 0.6), 0, 4 * Math.PI, { f: 'lblue', base: 0.6, n: 200 });
         s += P.fn(T, 0, 4 * Math.PI, { c: 'ink', w: 2.5, n: 240 });
         s += P.hline(0.6, 0, 4 * Math.PI, { c: 'red', w: 2, dash: '8 4' });
         s += L.text(P.X(4 * Math.PI) + 10, P.Y(0.6) + 4, 'T_{mean}', { c: 'red', bold: true, size: 13 });
         s += L.text(P.X(1.4), P.Y(1.35) - 4, 'Excess (+) : speed rises', { size: 12, c: 'red' });
         s += L.text(P.X(6.5), P.Y(-0.25), 'Deficit (-) : speed falls', { size: 12, c: 'blue' });
         s += L.note(100, 390, ['Maximum fluctuation of energy \\Delta E = largest area between the curve and the mean line', 'Coefficient of fluctuation of speed C_{s} = (\\omega_{1} - \\omega_{2}) / \\omega_{mean}', '\\Delta E = I \\omega^{2} C_{s}   gives flywheel moment of inertia I'], { w: 700, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'vibration-response-and-transmissibility', w: 900, h: 500, file: F2, section: 'A7.',
      title: 'Forced Vibration: Magnification and Transmissibility',
      caption: 'Amplitude magnification peaks near frequency ratio 1 and falls with damping; transmissibility is below 1 only when frequency ratio exceeds root 2',
      draw: (L) => {
         const P = L.plot(100, 360, 640, 260, 0, 3, 0, 5);
         let s = P.axes('Frequency ratio r = \\omega / \\omega_{n}', 'Magnification / Transmissibility');
         const zs = [[0.1, 'blue'], [0.25, 'green'], [0.5, 'orange'], [1.0, 'red']];
         const M = (z) => (r) => 1 / Math.sqrt((1 - r * r) * (1 - r * r) + (2 * z * r) * (2 * z * r));
         const Tr = (z) => (r) => Math.sqrt(1 + (2 * z * r) * (2 * z * r)) / Math.sqrt((1 - r * r) * (1 - r * r) + (2 * z * r) * (2 * z * r));
         zs.forEach((z) => { s += P.fn((r) => Math.min(M(z[0])(r), 5), 0, 3, { c: z[1], w: 2.5, n: 300 }); });
         s += P.fn((r) => Math.min(Tr(0.25)(r), 5), 0, 3, { c: 'purple', w: 2.5, n: 300, dash: '7 4' });
         s += P.vline(1, 0, 5, {}) + P.vline(Math.SQRT2, 0, 5, {}) + P.hline(1, 0, 3, {});
         s += L.text(P.X(1), P.Y(0) + 20, '1', { anchor: 'middle', size: 12, c: 'grey' }) + L.text(P.X(Math.SQRT2), P.Y(0) + 20, '\\sqrt2', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(P.X(0.1) - 10, P.Y(1) - 6, '1', { size: 12, c: 'grey', anchor: 'end' });
         s += L.text(120, 402, 'Solid: magnification factor for \\zeta = 0.1, 0.25, 0.5, 1.0 (peak falls as damping rises)', { size: 12 });
         s += L.text(120, 424, 'Dashed purple: transmissibility for \\zeta = 0.25. All transmissibility curves pass through (\\sqrt2, 1)', { size: 12, c: 'purple' });
         s += L.text(120, 446, 'Isolation requires r > \\sqrt2; more damping helps near resonance but hurts at high r', { size: 12, c: 'grey' });
         s += L.text(120, 468, 'Resonance: \\omega = \\omega_{n} , amplitude limited only by damping', { size: 12, c: 'grey' });
         return s;
      }
   }
];
