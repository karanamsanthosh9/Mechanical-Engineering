'use strict';
// Batch 01: Engineering Mechanics diagrams
const F1 = '01-Engineering-Mechanics/01-statics-friction-trusses.md';
const F2 = '01-Engineering-Mechanics/02-centroid-moi-dynamics.md';
const FOLDER = '01-engineering-mechanics';

// Partial moment arc drawn over the top of a point: clockwise (cw) or counter-clockwise (ccw).
const mom = (L, cx, cy, r, ccw, c) => {
   const a = L.pol(cx, cy, r, ccw ? 30 : 150), b = L.pol(cx, cy, r, ccw ? 150 : 30);
   return L.path(`M${a[0].toFixed(1)},${a[1].toFixed(1)} A${r},${r} 0 0 ${ccw ? 0 : 1} ${b[0].toFixed(1)},${b[1].toFixed(1)}`, { c: c || 'blue', w: 2.2, arrow: true });
};

module.exports = [
   {
      folder: FOLDER, name: 'force-components', w: 760, h: 440, file: F1, section: 'A2.',
      title: 'Resolution of a Force into Rectangular Components',
      caption: 'A force F at angle theta to the x-axis has components Fx = F cos(theta) and Fy = F sin(theta)',
      draw: (L) => {
         const o = [140, 370], F = L.pol(o[0], o[1], 300, 35);
         let s = L.arrow(o[0] - 40, o[1], o[0] + 480, o[1], { c: 'grey' }) + L.arrow(o[0], o[1] + 30, o[0], o[1] - 300, { c: 'grey' });
         s += L.text(o[0] + 480, o[1] + 22, 'x', { anchor: 'end', italic: true }) + L.text(o[0] + 10, o[1] - 292, 'y', { italic: true });
         s += L.line(F[0], F[1], F[0], o[1], { c: 'grey', dash: '5 4' }) + L.line(F[0], F[1], o[0], F[1], { c: 'grey', dash: '5 4' });
         s += L.arrow(o[0], o[1], F[0], F[1], { c: 'red', w: 3 });
         s += L.arrow(o[0], o[1] + 14, F[0], o[1] + 14, { c: 'blue', w: 2.5 }) + L.arrow(o[0] - 14, o[1], o[0] - 14, F[1], { c: 'blue', w: 2.5 });
         s += L.text((o[0] + F[0]) / 2, o[1] + 38, 'F_{x} = F cos \\theta', { anchor: 'middle', c: 'blue', bold: true });
         s += L.text(o[0] - 24, (o[1] + F[1]) / 2, 'F_{y} = F sin \\theta', { anchor: 'end', c: 'blue', bold: true });
         s += L.text(F[0] + 12, F[1] - 6, 'F', { c: 'red', bold: true, size: 16 });
         s += L.angle(o[0], o[1], 70, 0, 35, '\\theta');
         s += L.note(480, 80, ['Components: F_{x}=F cos \\theta; F_{y}=F sin \\theta', 'Resultant: R_{x}=\\Sigma F_{x}; R_{y}=\\Sigma F_{y}', 'Magnitude: R=\\sqrt(R_{x}^{2}+R_{y}^{2})', 'Direction: tan \\alpha=R_{y}/R_{x}'], { w: 270, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'moment-and-couple', w: 800, h: 420, file: F1, section: 'A3.',
      title: 'Moment of a Force and a Couple',
      caption: 'Moment = force x perpendicular distance; a couple is two equal and opposite parallel forces and has the same moment about every point',
      draw: (L) => {
         let s = L.text(200, 70, '(a) Moment of a force F about point O', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.arrow(290, 120, 290, 285, { c: 'red', w: 3 }) + L.text(306, 140, 'F', { c: 'red', bold: true, size: 16 });
         s += L.line(290, 285, 290, 330, { c: 'grey', dash: '4 3' });
         s += L.dot(120, 300, 6, 'ink') + L.text(100, 318, 'O', { bold: true, size: 15, anchor: 'end' });
         s += mom(L, 120, 300, 30, false, 'blue');
         s += L.dim(120, 300, 290, 300, 'd', {});
         s += L.text(205, 345, 'd = perpendicular distance from O\nto the line of action of F', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(205, 395, 'M = F x d  (clockwise here)', { anchor: 'middle', bold: true });
         s += L.line(400, 60, 400, 400, { c: 'border', w: 1 });
         s += L.text(600, 70, '(b) Couple', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(500, 233, 200, 8, { f: 'lgrey', s: 'ink' });
         s += L.arrow(540, 120, 540, 230, { c: 'red', w: 3 }) + L.arrow(660, 350, 660, 245, { c: 'red', w: 3 });
         s += L.text(556, 140, 'F', { c: 'red', bold: true, size: 16 }) + L.text(676, 340, 'F', { c: 'red', bold: true, size: 16 });
         s += L.dim(540, 100, 660, 100, 'a', {});
         s += mom(L, 600, 190, 28, true, 'blue') + L.text(600, 232 - 14, '', {}) + L.text(640, 196, 'M', { c: 'blue', bold: true, size: 15 });
         s += L.text(600, 395, 'M = F x a ; net force = 0 ; a free vector', { anchor: 'middle', bold: true });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'support-reactions', w: 860, h: 400, file: F1, section: 'A5.',
      title: 'Types of Supports and Their Reactions',
      caption: 'Roller gives 1 reaction, hinge gives 2, fixed support gives 2 forces and a moment',
      draw: (L) => {
         let s = '';
         s += L.text(150, 70, 'Roller support', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.beamLine(60, 240, 190, 6) + L.roller(150, 193);
         s += L.arrow(205, 290, 205, 197, { c: 'red', w: 2.5 }) + L.text(218, 270, 'R', { c: 'red', bold: true });
         s += L.text(150, 335, '1 reaction: R perpendicular\nto the surface', { anchor: 'middle', size: 12 });
         s += L.line(290, 60, 290, 370, { c: 'border', w: 1 });
         s += L.text(430, 70, 'Hinge (pin) support', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.beamLine(340, 520, 190, 6) + L.pin(430, 193);
         s += L.arrow(485, 290, 485, 197, { c: 'red', w: 2.5 }) + L.text(498, 270, 'V', { c: 'red', bold: true });
         s += L.arrow(505, 165, 436, 165, { c: 'red', w: 2.5 }) + L.text(512, 170, 'H', { c: 'red', bold: true });
         s += L.line(430, 165, 430, 188, { c: 'grey', dash: '3 3' });
         s += L.text(430, 335, '2 reactions: H and V\n(direction of resultant unknown)', { anchor: 'middle', size: 12 });
         s += L.line(570, 60, 570, 370, { c: 'border', w: 1 });
         s += L.text(710, 70, 'Fixed support', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.fixedWall(640, 130, 120, 'left') + L.beamLine(640, 800, 190, 6);
         s += L.arrow(740, 290, 740, 197, { c: 'red', w: 2.5 }) + L.text(753, 270, 'V', { c: 'red', bold: true });
         s += L.arrow(780, 225, 646, 225, { c: 'red', w: 2.5 }) + L.text(788, 230, 'H', { c: 'red', bold: true });
         s += mom(L, 690, 150, 24, true, 'blue') + L.text(724, 148, 'M', { c: 'blue', bold: true });
         s += L.text(710, 335, '3 reactions: H, V and\nfixing moment M', { anchor: 'middle', size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'friction-on-incline', w: 900, h: 440, file: F1, section: 'A6.',
      title: 'Block on a Rough Inclined Plane',
      caption: 'Forces on a block about to slide down a rough incline: N = W cos(theta), F = W sin(theta); tan(phi) = mu',
      draw: (L) => {
         const th = 30, c = Math.cos(th * Math.PI / 180), sn = Math.sin(th * Math.PI / 180);
         const A = [110, 380], B = [570, 380], C = [570, 380 - 460 * Math.tan(th * Math.PI / 180)];
         const u = [c, -sn], n = [-sn, -c];
         const P = [A[0] + 250 * u[0], A[1] + 250 * u[1]];
         const add = (p, v, k) => [p[0] + v[0] * k, p[1] + v[1] * k];
         const c1 = add(add(P, u, -38), n, 0), c2 = add(add(P, u, 38), n, 0), c3 = add(c2, n, 46), c4 = add(c1, n, 46);
         const G = add(P, n, 23);
         let s = L.poly([A, B, C], { f: 'lgrey', s: 'ink', w: 2 });
         s += L.poly([c1, c2, c3, c4], { f: 'lblue', s: 'blue', w: 2 });
         // forces from G
         s += L.arrow(G[0], G[1], G[0], G[1] + 105, { c: 'red', w: 2.5 }) + L.text(G[0] + 10, G[1] + 118, 'W', { c: 'red', bold: true, size: 15 });
         const Nt = add(G, n, 100);
         s += L.arrow(G[0], G[1], Nt[0], Nt[1], { c: 'green', w: 2.5 }) + L.text(Nt[0] - 10, Nt[1] - 8, 'N', { c: 'green', bold: true, size: 15, anchor: 'end' });
         const Ft = add(G, u, 95);
         s += L.arrow(G[0], G[1], Ft[0], Ft[1], { c: 'orange', w: 2.5 }) + L.text(Ft[0] - 5, Ft[1] - 30, 'F (friction)', { c: 'orange', bold: true, size: 14, anchor: 'middle' });
         const Ws = add(G, u, -70);
         s += L.arrow(G[0], G[1], Ws[0], Ws[1], { c: 'blue', w: 1.8, dash: '5 3' }) + L.text(Ws[0] - 6, Ws[1] + 18, 'W sin \\theta', { c: 'blue', size: 13, anchor: 'end' });
         const Wc = add(G, n, -90);
         s += L.arrow(G[0], G[1], Wc[0], Wc[1], { c: 'blue', w: 1.8, dash: '5 3' }) + L.text(Wc[0] + 8, Wc[1] + 16, 'W cos \\theta', { c: 'blue', size: 13 });
         s += L.angle(A[0], A[1], 70, 0, th, '\\theta', {});
         s += L.text(A[0] + 215, A[1] + 28, 'Rough plane (coefficient of friction \\mu)', { c: 'grey', size: 12, anchor: 'middle' });
         s += L.note(600, 110, ['Equilibrium on the incline:', 'N = W cos \\theta', 'F = W sin \\theta', 'Limiting friction: F = \\mu N', 'so tan \\theta = \\mu', 'tan \\phi = \\mu', '(\\phi = angle of friction)', 'Angle of repose = \\phi'], { w: 280, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'simple-truss', w: 820, h: 500, file: F1, section: 'A7.',
      title: 'Simple Pin-Jointed Truss: Method of Joints',
      caption: 'A triangular truss with a central load: top members are in compression, the bottom tie is in tension; m = 2j - 3 holds for a perfect frame',
      draw: (L) => {
         const A = [140, 330], B = [440, 330], C = [290, 180];
         let s = L.line(A[0], A[1], C[0], C[1], { c: 'red', w: 5 }) + L.line(B[0], B[1], C[0], C[1], { c: 'red', w: 5 }) + L.line(A[0], A[1], B[0], B[1], { c: 'blue', w: 5 });
         s += L.pin(A[0], A[1] + 2) + L.roller(B[0], B[1] + 2);
         [A, B, C].forEach((p) => { s += L.circle(p[0], p[1], 7, { f: 'white', s: 'ink', w: 2 }); });
         s += L.arrow(C[0], 90, C[0], C[1] - 9, { c: 'red', w: 3 }) + L.text(C[0] + 12, 105, 'W', { c: 'red', bold: true, size: 16 });
         s += L.text(A[0] - 14, A[1] - 8, 'A', { anchor: 'end', bold: true }) + L.text(B[0] + 14, B[1] - 8, 'B', { bold: true }) + L.text(C[0] + 14, C[1] + 4, 'C', { bold: true });
         s += L.arrow(A[0], A[1] + 115, A[0], A[1] + 46, { c: 'green', w: 2.5 }) + L.text(A[0] + 10, A[1] + 105, 'W/2', { c: 'green', bold: true });
         s += L.arrow(B[0], B[1] + 115, B[0], B[1] + 46, { c: 'green', w: 2.5 }) + L.text(B[0] + 10, B[1] + 105, 'W/2', { c: 'green', bold: true });
         s += L.angle(A[0], A[1], 55, 0, 45, '45\\deg', {});
         s += L.text(215, 238, 'AC: compression', { c: 'red', size: 12, anchor: 'end' }) + L.text(368, 238, 'BC: compression', { c: 'red', size: 12 });
         s += L.text(290, 316, 'AB: tension (tie)', { c: 'blue', size: 12, anchor: 'middle' });
         s += L.note(520, 110, ['Reactions: R_{A} = R_{B} = W/2', 'Joint C (vertical):', '2 F_{AC} sin 45\\deg = W', 'F_{AC} = F_{BC} = 0.707 W (C)', 'Joint A (horizontal):', 'F_{AB} = F_{AC} cos 45\\deg = 0.5 W (T)', 'Perfect frame: m = 2j - 3', '3 = 2(3) - 3'], { w: 280, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'centroid-standard-shapes', w: 900, h: 470, file: F2, section: 'A1.',
      title: 'Centroids of Standard Shapes',
      caption: 'Centroid positions measured from the base: rectangle h/2, triangle h/3, semicircle 4R/(3 pi), quarter circle 4R/(3 pi) from each edge',
      draw: (L) => {
         let s = '';
         // rectangle
         s += L.text(130, 70, 'Rectangle', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(60, 110, 140, 100, { f: 'lblue', s: 'blue', w: 2 }) + L.dot(130, 160, 5, 'red');
         s += L.line(60, 160, 200, 160, { c: 'grey', dash: '4 3' }) + L.line(130, 110, 130, 210, { c: 'grey', dash: '4 3' });
         s += L.dim(225, 210, 225, 160, 'h/2', {}) + L.text(130, 240, 'x = b/2 , y = h/2', { anchor: 'middle', size: 12 });
         s += L.dim(60, 260, 200, 260, 'b', {});
         // triangle
         s += L.text(330, 70, 'Triangle', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.poly([[250, 210], [410, 210], [310, 110]], { f: 'lblue', s: 'blue', w: 2 }) + L.dot(323, 177, 5, 'red');
         s += L.line(250, 177, 410, 177, { c: 'grey', dash: '4 3' });
         s += L.dim(432, 210, 432, 177, 'h/3', {}) + L.text(330, 240, 'y = h/3 from the base', { anchor: 'middle', size: 12 });
         s += L.text(330, 262, 'Area = b h / 2', { anchor: 'middle', size: 12 });
         // semicircle
         s += L.text(580, 70, 'Semicircle', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.path('M500,210 A80,80 0 0 1 660,210 Z', { f: 'lblue', c: 'blue', w: 2 }) + L.dot(580, 210 - 4 * 80 / (3 * Math.PI), 5, 'red');
         s += L.line(500, 210, 660, 210, { c: 'ink', w: 2 });
         s += L.dim(620, 210, 620, 210 - 4 * 80 / (3 * Math.PI), '', {});
         s += L.text(612, 196, '4R/3\\pi', { size: 12, anchor: 'end' }) + L.text(580, 240, 'y = 4R / (3\\pi) = 0.424 R', { anchor: 'middle', size: 12 });
         s += L.text(580, 262, 'from the diameter', { anchor: 'middle', size: 12, c: 'grey' });
         // quarter circle
         s += L.text(790, 70, 'Quarter circle', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.path('M730,210 L730,130 A80,80 0 0 1 810,210 Z', { f: 'lblue', c: 'blue', w: 2 });
         const q = 4 * 80 / (3 * Math.PI);
         s += L.dot(730 + q, 210 - q, 5, 'red');
         s += L.text(790, 240, 'x = y = 4R / (3\\pi)', { anchor: 'middle', size: 12 });
         s += L.text(790, 262, 'from each straight edge', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.note(40, 330, ['Composite body: x_{bar} = \\Sigma(A x) / \\Sigma A   and   y_{bar} = \\Sigma(A y) / \\Sigma A', 'Hole or cut-out: treat its area as negative.  Axis of symmetry always contains the centroid.', "Pappus-Guldinus: surface area = path length of centroid x generating length; volume = path length x area"], { w: 820, size: 13 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'parallel-axis-moi', w: 860, h: 440, file: F2, section: 'A2.',
      title: 'Moment of Inertia: Parallel Axis Theorem and Standard Values',
      caption: 'I about any axis = I about the parallel centroidal axis + A d^2; standard values for a rectangle, triangle and circle',
      draw: (L) => {
         let s = L.text(200, 70, 'Parallel axis theorem', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(120, 110, 160, 90, { f: 'lblue', s: 'blue', w: 2 });
         s += L.line(90, 155, 310, 155, { c: 'red', dash: '8 4', w: 1.5 }) + L.text(310, 148, 'G', { c: 'red', bold: true, anchor: 'end' });
         s += L.dot(200, 155, 4, 'red');
         s += L.line(90, 290, 310, 290, { c: 'ink', w: 2 }) + L.hatch(90, 290, 220, 1);
         s += L.dim(330, 155, 330, 290, 'd', {});
         s += L.text(120, 148, 'I_{G}', { c: 'red', size: 13 }) + L.text(100, 312, 'I_{AB}', { size: 13 });
         s += L.text(200, 345, 'I_{AB} = I_{G} + A d^{2}', { anchor: 'middle', bold: true, size: 15 });
         s += L.text(200, 372, 'Perpendicular axis (laminas): I_{z} = I_{x} + I_{y}', { anchor: 'middle', size: 12 });
         s += L.line(400, 60, 400, 410, { c: 'border', w: 1 });
         s += L.text(640, 70, 'Standard values (about centroidal axes)', { anchor: 'middle', bold: true, c: 'blue' });
         s += L.rect(470, 100, 90, 60, { f: 'lblue', s: 'blue', w: 2 }) + L.text(580, 135, 'Rectangle  I_{xx} = b h^{3} / 12', { size: 13 });
         s += L.poly([[470, 250], [560, 250], [515, 190]], { f: 'lblue', s: 'blue', w: 2 }) + L.text(580, 235, 'Triangle  I_{xx} = b h^{3} / 36', { size: 13 });
         s += L.text(580, 255, '(about base: b h^{3} / 12)', { size: 12, c: 'grey' });
         s += L.circle(515, 330, 34, { f: 'lblue', s: 'blue', w: 2 }) + L.text(580, 322, 'Circle  I_{xx} = \\pi d^{4} / 64', { size: 13 });
         s += L.text(580, 345, 'Polar  J = \\pi d^{4} / 32', { size: 13 });
         s += L.text(580, 385, 'Hollow circle: subtract inner value', { size: 12, c: 'grey' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'projectile-motion', w: 860, h: 520, file: F2, section: 'A4.',
      title: 'Projectile Motion',
      caption: 'Parabolic path with time of flight 2u sin(a)/g, maximum height u^2 sin^2(a)/(2g) and range u^2 sin(2a)/g',
      draw: (L) => {
         const o = [90, 360], R = 560, H = 160;
         let s = L.arrow(o[0] - 30, o[1], o[0] + R + 70, o[1], { c: 'grey' }) + L.arrow(o[0], o[1] + 20, o[0], o[1] - 230, { c: 'grey' });
         const pts = [];
         for (let i = 0; i <= 60; i++) { const t = i / 60; pts.push([o[0] + R * t, o[1] - 4 * H * t * (1 - t)]); }
         s += L.polyline(pts, { c: 'blue', w: 3 });
         s += L.arrow(o[0], o[1], o[0] + 80 * Math.cos(0.852), o[1] - 80 * Math.sin(0.852), { c: 'red', w: 2.5 }) + L.text(o[0] + 56, o[1] - 70, 'u', { c: 'red', bold: true, size: 15, anchor: 'end' });
         s += L.angle(o[0], o[1], 45, 0, 49, '\\alpha', {});
         s += L.dot(o[0] + R / 2, o[1] - H, 5, 'red') + L.line(o[0] + R / 2, o[1], o[0] + R / 2, o[1] - H, { c: 'grey', dash: '5 4' });
         s += L.dim(o[0] + R / 2 + 30, o[1], o[0] + R / 2 + 30, o[1] - H, 'H', {});
         s += L.dim(o[0], o[1] + 36, o[0] + R, o[1] + 36, 'Range R', {});
         s += L.arrow(o[0] + R / 2 - 40, o[1] - H - 4, o[0] + R / 2 + 40, o[1] - H - 4, { c: 'green' }) + L.text(o[0] + R / 2, o[1] - H - 16, 'v = u cos \\alpha (only horizontal)', { anchor: 'middle', c: 'green', size: 12 });
         s += L.text(o[0] + 10, o[1] + 80, 'Time of flight  T = 2u sin\\alpha / g', { size: 13 });
         s += L.text(o[0] + 330, o[1] + 80, 'Max height  H = u^{2} sin^{2}\\alpha / 2g', { size: 13 });
         s += L.text(o[0] + 10, o[1] + 102, 'Range  R = u^{2} sin 2\\alpha / g  (maximum at \\alpha = 45\\deg)', { size: 13 });
         s += L.text(o[0] + 330, o[1] + 102, 'Complementary angles give the same range', { size: 13, c: 'grey' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'shm-displacement', w: 860, h: 440, file: F2, section: 'A6.',
      title: 'Simple Harmonic Motion: Displacement, Velocity and Acceleration',
      caption: 'x = A sin(w t); velocity leads displacement by 90 degrees and acceleration is opposite in phase to displacement',
      draw: (L) => {
         const P = L.plot(90, 230, 640, 150, 0, 2 * Math.PI, -1.2, 1.2);
         let s = P.axes('t', '');
         s += L.line(P.X(0), P.Y(0), P.X(2 * Math.PI), P.Y(0), { c: 'grey', w: 1 });
         s += P.fn((t) => Math.sin(t), 0, 2 * Math.PI, { c: 'blue', w: 3 }) + P.fn((t) => Math.cos(t), 0, 2 * Math.PI, { c: 'green', w: 2.5 }) + P.fn((t) => -Math.sin(t), 0, 2 * Math.PI, { c: 'red', w: 2.5, dash: '6 4' });
         s += L.text(90, 285, 'x = A sin \\omega t  (blue)', { c: 'blue', bold: true, size: 13 });
         s += L.text(330, 285, 'v = A\\omega cos \\omega t  (green)', { c: 'green', bold: true, size: 13 });
         s += L.text(590, 285, 'a = -A\\omega^{2} sin \\omega t  (red, dashed)', { c: 'red', bold: true, size: 13 });
         s += L.text(P.X(Math.PI), P.Y(0) + 16, '\\pi', { anchor: 'middle', size: 12, c: 'grey' }) + L.text(P.X(2 * Math.PI), P.Y(0) + 16, '2\\pi', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.note(90, 340, ['Time period T = 2\\pi / \\omega = 2\\pi \\sqrt(m / k) ,  frequency f = 1/T', 'a = -\\omega^{2} x  : acceleration is proportional to displacement and directed towards the mean position', 'Maximum velocity = A\\omega at mean position ;  maximum acceleration = A\\omega^{2} at extremes'], { w: 700, size: 12 });
         return s;
      }
   }
];
