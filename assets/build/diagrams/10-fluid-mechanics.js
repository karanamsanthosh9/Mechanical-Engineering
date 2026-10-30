'use strict';
// Batch 10: Fluid mechanics
const F1 = '10-Fluid-Mechanics/01-properties-statics-kinematics.md';
const F2 = '10-Fluid-Mechanics/02-dynamics-flow-measurement-pipe-flow.md';
const F3 = '10-Fluid-Mechanics/03-dimensional-analysis-compressible-flow.md';
const FOLDER = '10-fluid-mechanics';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'manometers', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Manometers: Piezometer, U-tube and Differential',
      caption: 'Pressure measured from the height of a liquid column; differential manometer between two pipes',
      draw: (L) => {
         let s = sub(L, 150, 58, 'Simple U-tube');
         s += L.rect(60, 250, 180, 20, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.text(150, 244, 'Pipe, pressure p_{A}', { anchor: 'middle', size: 12, c: 'blue', bold: true });
         s += L.polyline([[100, 270], [100, 330], [200, 330], [200, 170]], { c: 'ink', w: 3 });
         s += L.rect(101, 290, 98, 40, { f: 'lred', s: null });
         s += L.polyline([[100, 270], [100, 330], [200, 330], [200, 180]], { c: 'ink', w: 3 });
         s += L.line(200, 230, 215, 230, { c: 'ink', w: 1 }) + L.line(100, 290, 80, 290, { c: 'grey', dash: '4 3' }) + L.line(200, 230, 225, 230, { c: 'grey', dash: '4 3' });
         s += L.dim(225, 230, 225, 290, 'h', {}) + L.text(235, 215, 'Mercury (S_{m})', { size: 11, c: 'red', bold: true });
         s += L.text(150, 360, 'p_{A} = \\rho_{m} g h - \\rho g h_{1}', { anchor: 'middle', size: 12 });
         s += sub(L, 560, 58, 'Differential manometer');
         s += L.rect(430, 150, 90, 18, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(650, 150, 90, 18, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.text(475, 142, 'A', { anchor: 'middle', bold: true }) + L.text(695, 142, 'B', { anchor: 'middle', bold: true });
         s += L.polyline([[475, 168], [475, 310], [695, 310], [695, 168]], { c: 'ink', w: 3 });
         s += L.rect(477, 250, 216, 58, { f: 'lred', s: null }) + L.polyline([[475, 168], [475, 310], [695, 310], [695, 168]], { c: 'ink', w: 3 });
         s += L.line(475, 250, 462, 250, { c: 'grey', dash: '4 3' }) + L.line(695, 230, 710, 230, { c: 'grey', dash: '4 3' });
         s += L.text(585, 285, 'Heavy liquid (S_{m})', { anchor: 'middle', size: 11, c: 'red', bold: true });
         s += L.text(585, 360, 'p_{A} - p_{B} = (\\rho_{m} - \\rho) g h   (same fluid in both limbs)', { anchor: 'middle', size: 12 });
         s += L.note(40, 385, ['Gauge pressure = absolute - atmospheric; vacuum = atmospheric - absolute', 'Pressure at equal levels in a continuous fluid at rest is equal; p = p_{0} + \\rho g h'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'hydrostatic-force-centre-of-pressure', w: 900, h: 480, file: F1, section: 'A4.',
      title: 'Hydrostatic Force on a Plane Surface',
      caption: 'Total force acts at the centre of pressure, which lies below the centroid',
      draw: (L) => {
         let s = L.rect(60, 100, 160, 260, { f: 'lblue', s: null });
         s += L.line(60, 100, 220, 100, { c: 'blue', w: 2 }) + L.text(65, 94, 'Free surface', { size: 11, c: 'blue', bold: true });
         s += L.line(220, 100, 360, 330, { c: 'ink', w: 6 });
         s += L.dot(280, 200, 4, 'green') + L.dot(302, 238, 4, 'red');
         s += L.text(292, 195, 'G (centroid)', { size: 12, c: 'green', bold: true, dx: -85 }) + L.text(312, 244, 'C.P.', { size: 12, c: 'red', bold: true });
         s += L.dim(250, 100, 250, 200, '', {}) + L.text(256, 150, 'h_{c}', { size: 12, c: 'ink' });
         s += L.arrow(302, 238, 255, 262, { c: 'red', w: 3 }) + L.text(215, 285, 'F', { bold: true, size: 14, c: 'red' });
         s += L.text(430, 130, 'Total force:  F = \\rho g A h_{c}', { size: 13, bold: true }) + L.text(430, 160, 'Centre of pressure (measured along the plate):', { size: 12 });
         s += L.text(430, 190, 'h* = h_{c} + I_{G} sin^{2}\\theta / (A h_{c})', { size: 13, bold: true, c: 'red' });
         s += L.text(430, 225, 'h_{c} = depth of the centroid below the free surface', { size: 12, c: 'grey' }) + L.text(430, 245, 'I_{G} = second moment of area about the centroidal axis', { size: 12, c: 'grey' });
         s += L.note(430, 275, ['Rectangle (width b, depth d, vertical, top at surface):', 'F = \\rho g b d^{2} / 2;  acts at 2d/3 from the top', 'Rectangle I_{G} = b d^{3}/12;  triangle I_{G} = b d^{3}/36', 'Centre of pressure is always below G (equal only if horizontal)'], { w: 400, size: 11 });
         s += L.note(40, 395, ['Pressure diagram is triangular for a vertical plane; the resultant passes through its centroid', 'Curved surface: horizontal force = force on the vertical projection; vertical force = weight of liquid above'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'buoyancy-and-metacentre', w: 900, h: 480, file: F1, section: 'A5.',
      title: 'Buoyancy, Stability and Metacentric Height',
      caption: 'Centre of buoyancy shifts when a floating body tilts; the metacentre M must stay above G',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Tilted floating body');
         s += L.rect(40, 230, 380, 120, { f: 'lblue', s: null }) + L.line(40, 230, 420, 230, { c: 'blue', w: 2 });
         s += L.poly([[150, 180], [310, 150], [340, 270], [180, 300]], { f: 'lgrey', s: 'ink', w: 3 });
         s += L.dot(245, 225, 5, 'green') + L.dot(262, 262, 5, 'red') + L.dot(238, 90, 5, 'purple');
         s += L.text(255, 220, 'G', { bold: true, size: 14, c: 'green' }) + L.text(275, 268, 'B_{1}', { bold: true, size: 13, c: 'red' }) + L.text(250, 86, 'M', { bold: true, size: 14, c: 'purple' });
         s += L.line(245, 225, 238, 90, { c: 'purple', w: 1.5, dash: '5 3' });
         s += L.arrow(262, 262, 262, 215, { c: 'red', w: 3 }) + L.text(215, 200, 'W', { bold: true, c: 'ink' }) + L.arrow(245, 225, 245, 270, { c: 'ink', w: 2 });
         s += L.text(380, 130, 'GM', { size: 12, c: 'purple', bold: true });
         s += L.box(500, 90, 350, 80, 'Archimedes principle\nF_{B} = weight of liquid displaced = \\rho g V_{disp}', { f: 'lblue', s: 'blue', size: 13 });
         s += L.note(500, 190, ['Metacentric height GM = BM - BG', 'BM = I / V (I = second moment of waterline area)', 'M above G: stable; M below G: unstable;', 'M at G: neutral equilibrium', 'Rolling period T = 2\\pi k / \\sqrt(g GM)'], { w: 350, size: 11.5 });
         s += L.note(40, 375, ['Submerged body: stable if G is below B (centre of buoyancy); a floating body is stable if M lies above G', 'Righting couple = W x GM x sin\\theta; floating means weight = buoyant force, with the same line of action when upright'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'bernoulli-hgl-egl', w: 900, h: 480, file: F2, section: 'A1.',
      title: 'Bernoulli Equation, Hydraulic and Energy Grade Lines',
      caption: 'Energy line, hydraulic grade line and pipe centre line for flow through a contraction with friction',
      draw: (L) => {
         let s = L.line(40, 330, 860, 330, { c: 'grey', dash: '4 3' }) + L.text(860, 346, 'Datum', { anchor: 'end', size: 11, c: 'grey' });
         s += L.polyline([[60, 270], [330, 270], [400, 295], [800, 295]], { c: 'ink', w: 4 }) + L.polyline([[60, 255], [330, 255], [400, 285], [800, 285]], { c: 'ink', w: 4 }) + L.line(60, 255, 60, 270, { c: 'ink', w: 3 });
         s += L.polyline([[60, 120], [330, 133], [400, 142], [800, 165]], { c: 'red', w: 3 }) + L.polyline([[60, 182], [330, 205], [400, 234], [800, 220]], { c: 'blue', w: 3, dash: '7 4' });
         s += L.text(420, 108, 'EGL (solid): p/(\\rho g) + V^{2}/2g + z', { size: 12, c: 'red', bold: true }) + L.text(520, 258, 'HGL (dashed): p/(\\rho g) + z', { size: 12, c: 'blue', bold: true, anchor: 'start' });
         s += L.dim(360, 130, 360, 190, '', {}) + L.text(368, 168, 'V^{2}/2g', { size: 12 }) + L.dim(60, 270, 60, 330, 'z', { lo: -18 });
         s += L.text(60, 100, 'EGL falls with head loss; EGL - HGL = velocity head', { size: 12, c: 'grey' });
         s += L.note(40, 360, ['Bernoulli: p/(\\rho g) + V^{2}/2g + z = constant along a streamline (steady, incompressible, inviscid, no work or heat transfer)', 'EGL falls through head loss; HGL lies V^{2}/2g below the EGL', 'HGL rises where velocity falls (e.g. in a diverging section)', 'A pipe above the HGL has sub-atmospheric pressure: siphon summit and cavitation risk'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'venturi-orifice-pitot', w: 900, h: 480, file: F2, section: 'A4.',
      title: 'Flow Measurement: Venturimeter, Orifice Meter and Pitot Tube',
      caption: 'Pressure difference across a restriction gives the flow rate; stagnation pressure gives point velocity',
      draw: (L) => {
         let s = sub(L, 210, 58, 'Venturimeter');
         s += L.polyline([[40, 130], [140, 130], [210, 170], [260, 170], [350, 130], [400, 130]], { c: 'ink', w: 3 }) + L.polyline([[40, 250], [140, 250], [210, 210], [260, 210], [350, 250], [400, 250]], { c: 'ink', w: 3 });
         s += L.line(100, 130, 100, 80, { c: 'ink', w: 2 }) + L.line(235, 170, 235, 110, { c: 'ink', w: 2 }) + L.line(100, 90, 108, 90, { c: 'grey' }) + L.line(235, 120, 243, 120, { c: 'grey' });
         s += L.dim(75, 90, 75, 120, '', {}) + L.text(30, 108, '\\Delta h', { size: 12, bold: true });
         s += L.text(100, 72, '1', { anchor: 'middle', bold: true }) + L.text(235, 102, '2 (throat)', { anchor: 'middle', bold: true, size: 12 }) + L.arrow(15, 190, 45, 190, { c: 'blue', w: 2.5 });
         s += L.text(210, 280, 'Q = C_{d} a_{1} a_{2} \\sqrt(2 g h) / \\sqrt(a_{1}^{2} - a_{2}^{2})', { anchor: 'middle', size: 12 }) + L.text(210, 300, 'C_{d} about 0.95-0.99; pressure recovery in diffuser', { anchor: 'middle', size: 11, c: 'grey' });
         s += sub(L, 650, 58, 'Orifice meter') + sub(L, 650, 330, 'Pitot tube');
         s += L.polyline([[470, 130], [830, 130]], { c: 'ink', w: 3 }) + L.polyline([[470, 250], [830, 250]], { c: 'ink', w: 3 });
         s += L.rect(640, 130, 10, 50, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(640, 200, 10, 50, { f: 'lgrey', s: 'ink', w: 2 });
         s += L.text(650, 280, 'Q = C_{d} a_{0}\\sqrt(2gh)/ \\sqrt(1 - (a_{0}/A)^{2})', { anchor: 'middle', size: 11 }) + L.text(650, 298, 'C_{d} about 0.6-0.65 (vena contracta, large loss)', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.text(650, 355, 'V = C_{v}\\sqrt(2 g h);  stagnation head - static head = V^{2}/2g', { anchor: 'middle', size: 11.5 });
         s += L.arrow(470, 190, 510, 190, { c: 'blue', w: 2.5 });
         s += L.note(40, 385, ['Venturi: lowest head loss, costly. Orifice: cheapest, highest loss. Rotameter: variable area, constant pressure drop', 'Pitot-static: velocity at a point (traverse for average)'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'laminar-turbulent-profiles', w: 900, h: 480, file: F2, section: 'A5.',
      title: 'Pipe Flow: Laminar and Turbulent Velocity Profiles',
      caption: 'Parabolic profile in laminar flow; flatter profile in turbulent flow; friction factor against Reynolds number',
      draw: (L) => {
         let s = sub(L, 170, 58, 'Velocity profiles');
         s += L.line(40, 120, 300, 120, { w: 4 }) + L.line(40, 260, 300, 260, { w: 4 }) + L.line(40, 190, 300, 190, { c: 'grey', dash: '4 3', w: 1 });
         s += L.polyline(seg((y) => 100 + 120 * (1 - Math.pow((y - 190) / 70, 2)), 120, 260, 20).map((p) => [p[1], p[0]]), { c: 'blue', w: 3 });
         s += L.polyline(seg((y) => 100 + 135 * (1 - Math.pow(Math.abs((y - 190) / 70), 8)), 122, 258, 30).map((p) => [p[1] + 0, p[0]]), { c: 'red', w: 3, dash: '6 3' });
         s += L.text(60, 300, 'Laminar: V_{max} = 2 V_{avg}', { size: 12, c: 'blue', bold: true }) + L.text(60, 318, 'Turbulent: V_{max} about 1.2 V_{avg}', { size: 12, c: 'red', bold: true });
         const P = L.plot(480, 290, 340, 200, 0, 1, 0, 1.1);
         s += sub(L, 650, 58, 'Friction factor f against Re') + P.axes('Reynolds number Re (log)', 'f');
         s += P.pts(seg((x) => 0.9 - 0.9 * x, 0.02, 0.4, 10), { c: 'blue', w: 3 });
         s += P.pts([[0.4, 0.55], [0.44, 0.7], [0.5, 0.45], [0.6, 0.35], [0.8, 0.3], [1, 0.28]], { c: 'red', w: 3 }) + P.pts([[0.5, 0.45], [0.7, 0.27], [1, 0.22]], { c: 'orange', w: 2, dash: '4 3' });
         s += P.text(0.08, 0.7, 'f = 64/Re', { size: 12, c: 'blue', bold: true }) + P.text(0.44, 0.88, 'critical zone', { size: 11, c: 'grey', anchor: 'middle', dy: -4 }) + P.text(0.7, 0.4, 'smooth pipes', { size: 11, c: 'red', bold: true, dy: -6 }) + P.text(0.82, 0.2, 'rough: f constant', { size: 11, c: 'orange', bold: true, dy: 6 });
         s += L.note(40, 345, ['Hagen-Poiseuille (laminar): \\Delta p = 32 \\mu L V / D^{2};  Darcy: h_{f} = f L V^{2} / (2 g D);  laminar f = 64/Re (Re < 2000)', 'Blasius smooth turbulent: f = 0.316 Re^{-1/4} (4000 < Re < 10^{5});  fully rough: f depends only on relative roughness \\epsilon / D', 'Minor losses: sudden expansion h = (V_{1} - V_{2})^{2}/2g;  exit loss V^{2}/2g;  entrance 0.5 V^{2}/2g'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'open-channel-and-hydraulic-jump', w: 900, h: 480, file: F2, section: 'A6.',
      title: 'Open Channel Flow: Sections, Specific Energy and Hydraulic Jump',
      caption: 'Common channel sections, specific energy curve with critical depth, and hydraulic jump',
      draw: (L) => {
         let s = sub(L, 120, 58, 'Channel sections');
         s += L.polyline([[40, 100], [40, 180], [120, 180], [120, 100]], { c: 'ink', w: 3 }) + L.rect(41, 130, 78, 50, { f: 'lblue', s: null }) + L.polyline([[40, 100], [40, 180], [120, 180], [120, 100]], { c: 'ink', w: 3 });
         s += L.text(80, 205, 'Rectangle', { anchor: 'middle', size: 11 });
         s += L.polyline([[150, 100], [190, 180], [230, 180], [270, 100]], { c: 'ink', w: 3 }) + L.text(210, 205, 'Trapezoid', { anchor: 'middle', size: 11 });
         s += L.text(80, 235, 'R = A / P (hydraulic radius)', { size: 12 }) + L.text(40, 255, 'Chezy: V = C \\sqrt(R S);  Manning: V = (1/n) R^{2/3} S^{1/2}', { size: 11.5 });
         s += L.text(40, 275, 'Best section: minimum wetted perimeter for a given area (rectangle: b = 2y)', { size: 11, c: 'grey' });
         const P = L.plot(430, 300, 180, 200, 0, 1, 0, 1.1);
         s += sub(L, 520, 58, 'Specific energy') + P.axes('E', 'y');
         s += P.fn((x) => x, 0.25, 1, { c: 'grey', w: 1.5, dash: '4 3' }) + P.pts(seg((y) => 0.08 / (y * y) * 0.5 + y, 0.2, 1, 40).map((p) => [p[0] / 1.4, p[1]]), { c: 'blue', w: 3 });
         s += L.text(P.X(0.62), P.Y(0.35), 'critical depth y_{c}', { size: 11, c: 'purple', bold: true, anchor: 'start', dx: 4 });
         s += L.text(P.X(0.9), P.Y(0.95), 'subcritical', { size: 11, c: 'green', bold: true, anchor: 'end' }) + L.text(P.X(0.95), P.Y(0.2), 'supercritical', { size: 11, c: 'red', bold: true, anchor: 'end' });
         s += sub(L, 770, 58, 'Hydraulic jump');
         s += L.polyline([[650, 270], [740, 265], [770, 210], [800, 200], [880, 200]], { c: 'blue', w: 3 }) + L.line(650, 290, 880, 290, { w: 4 });
         s += L.text(670, 245, 'y_{1}', { size: 12 }) + L.text(850, 190, 'y_{2}', { size: 12 }) + L.text(700, 320, 'Fr_{1} > 1', { size: 12, c: 'red', bold: true }) + L.text(820, 320, 'Fr_{2} < 1', { size: 12, c: 'green', bold: true });
         s += L.note(40, 350, ['Froude number Fr = V / \\sqrt(g y_{h}): Fr < 1 subcritical, = 1 critical, > 1 supercritical; critical depth y_{c} = (q^{2}/g)^{1/3} (rectangle)', 'Jump: y_{2}/y_{1} = (\\sqrt(1 + 8 Fr_{1}^{2}) - 1)/2;  energy loss = (y_{2} - y_{1})^{3}/(4 y_{1} y_{2});  occurs from supercritical to subcritical'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'boundary-layer-separation-drag', w: 900, h: 480, file: F2, section: 'A7.',
      title: 'Boundary Layer, Separation and Drag',
      caption: 'Growth of the boundary layer on a flat plate, and separation on a curved body causing pressure drag',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Flat plate');
         s += L.line(40, 230, 420, 230, { w: 4 }) + L.polyline(seg((x) => 230 - 4 * Math.sqrt(x - 40) * 1.1, 40, 250, 20), { c: 'blue', w: 2.5 }) + L.polyline(seg((x) => 230 - 30 - 0.08 * (x - 250) - (x - 250) * 0.0, 250, 280, 4), { c: 'orange', w: 2.5 });
         s += L.polyline(seg((x) => 230 - 3.2 * Math.sqrt(250 - 40) * 1.1 - 0.25 * (x - 250), 250, 420, 10), { c: 'red', w: 2.5 });
         s += L.line(250, 235, 250, 215, { c: 'grey', dash: '3 3' }) + L.text(150, 200, 'Laminar', { size: 12, c: 'blue', bold: true, anchor: 'middle' }) + L.text(335, 170, 'Turbulent', { size: 12, c: 'red', bold: true, anchor: 'middle' }) + L.text(250, 258, 'Transition', { size: 11, c: 'grey', anchor: 'middle' });
         s += L.text(220, 285, '\\delta/x = 4.64 Re_{x}^{-1/2} (laminar);  0.37 Re_{x}^{-1/5} (turbulent)', { size: 11, anchor: 'middle' });
         s += sub(L, 670, 58, 'Separation on a cylinder');
         s += L.circle(640, 200, 45, { f: 'lgrey', s: 'ink', w: 3 });
         s += L.arrow(530, 140, 600, 160, { c: 'blue', w: 2 }) + L.arrow(530, 200, 595, 200, { c: 'blue', w: 2 }) + L.arrow(530, 260, 600, 240, { c: 'blue', w: 2 });
         s += L.path('M 665 160 Q 740 140 780 150', { c: 'blue', w: 2 }) + L.path('M 665 240 Q 740 260 780 250', { c: 'blue', w: 2 });
         s += L.polyline([[690, 180], [730, 170], [700, 200], [740, 220], [700, 215]], { c: 'red', w: 2 }) + L.text(745, 205, 'Wake', { size: 12, c: 'red', bold: true }) + L.text(670, 138, 'separation', { size: 11, c: 'purple', bold: true, anchor: 'middle' });
         s += L.note(40, 315, ['Separation occurs when the pressure gradient is adverse (dp/dx > 0) and the near-wall fluid loses momentum; wall shear then drops to zero', 'Drag = friction drag + pressure (form) drag;  F_{D} = C_{D} (1/2) \\rho V^{2} A;  streamlining reduces the wake, so pressure drag', 'Turbulent boundary layer resists separation better (golf-ball dimples, vortex generators); Stokes law (Re < 1): C_{D} = 24/Re', 'Lift: F_{L} = C_{L} (1/2) \\rho V^{2} A; stall when the angle of attack is too high and the layer separates'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'compressible-flow-nozzle-regimes', w: 900, h: 480, file: F3, section: 'A7.',
      title: 'Compressible Flow: Area-Velocity Relation and Shocks',
      caption: 'Effect of area change on velocity for subsonic and supersonic flow; flow properties across a normal shock',
      draw: (L) => {
         const P = L.plot(100, 300, 320, 180, 0, 1, 0, 1.1);
         let s = sub(L, 260, 58, 'Choked nozzle: M and p along the axis') + P.axes('Distance along nozzle', 'M, p/p_{0}');
         s += P.pts([[0, 0.1], [0.3, 0.4], [0.5, 1.0], [1, 1.9]].map((p) => [p[0], p[1] / 1.9 * 1.05]), { c: 'blue', w: 3 });
         s += P.pts([[0, 1.0], [0.3, 0.9], [0.5, 0.53], [1, 0.12]], { c: 'red', w: 3 });
         s += P.vline(0.5, 0, 1.0, { c: 'purple' }) + P.text(0.5, 1.0, 'throat M = 1', { dx: 6, dy: -4, size: 11, c: 'purple', bold: true });
         s += P.text(0.06, 0.15, 'M', { size: 12, c: 'blue', bold: true, dy: 20 }) + P.text(0.75, 0.55, 'p/p_{0}', { size: 12, c: 'red', bold: true, dy: 20 });
         s += L.box(520, 90, 330, 100, 'Area-velocity:  dA/A = (M^{2} - 1) dV/V\nM < 1: area falls, V rises (nozzle)\nM > 1: area rises, V rises (nozzle)', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(520, 205, ['Normal shock: M_{1} > 1 to M_{2} < 1', 'p, T, \\rho rise; stagnation pressure falls;', 'entropy increases; stagnation T constant', 'M_{2}^{2} = (M_{1}^{2} + 2/(\\gamma-1)) /', '(2\\gamma M_{1}^{2}/(\\gamma-1) - 1)'], { w: 330, size: 11 });
         s += L.note(40, 345, ['Isentropic relations: T_{0}/T = 1 + (\\gamma-1)M^{2}/2;  p_{0}/p = (T_{0}/T)^{\\gamma/(\\gamma-1)};  Mach number M = V / c, c = \\sqrt(\\gamma R T)', 'Mach regimes: subsonic < 0.8, transonic 0.8-1.2, supersonic 1.2-5, hypersonic > 5;  Mach angle \\mu = sin^{-1}(1/M)', 'Fanno flow: adiabatic with friction, moves to M = 1;  Rayleigh flow: frictionless with heat addition, moves to M = 1 (choking)'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'dimensional-analysis-numbers', w: 900, h: 480, file: F3, section: 'A3.',
      title: 'Dimensionless Numbers and Their Force Ratios',
      caption: 'Reynolds, Froude, Euler, Weber, Mach and their significance in model testing',
      draw: (L) => {
         const rows = [['Reynolds Re', '\\rho V L / \\mu', 'inertia / viscous', 'pipe flow, ship, aircraft models'], ['Froude Fr', 'V / \\sqrt(g L)', 'inertia / gravity', 'free surface, ships, spillways'], ['Euler Eu', 'p / (\\rho V^{2})', 'pressure / inertia', 'cavitation, pumps'], ['Weber We', '\\rho V^{2} L / \\sigma', 'inertia / surface tension', 'droplets, capillary waves'], ['Mach M', 'V / c', 'inertia / elastic', 'compressible flow'], ['Prandtl Pr', '\\mu c_{p} / k', 'momentum / thermal diffusivity', 'convection']];
         let s = L.rect(40, 80, 820, 34, { f: 'lblue', s: 'border' });
         ['Number', 'Formula', 'Force ratio', 'Used for'].forEach((h, i) => { s += L.text([60, 250, 420, 640][i], 103, h, { bold: true, size: 13 }); });
         rows.forEach((r, i) => {
            const y = 114 + i * 38;
            s += L.rect(40, y, 820, 38, { f: i % 2 ? 'lgrey' : 'white', s: 'border' });
            [60, 250, 420, 640].forEach((x, k) => { s += L.text(x, y + 24, r[k], { size: 12, bold: k === 0 }); });
         });
         s += L.note(40, 360, ['Buckingham pi: number of dimensionless groups = n - m (n variables, m fundamental dimensions)', 'Geometric similarity, kinematic similarity (same flow pattern) and dynamic similarity (same force ratios) are all needed', 'Model law: ships use Froude; pipes and aircraft (incompressible) use Reynolds; scale ratios from the governing number'], { w: 820, size: 11.5 });
         return s;
      }
   }
];
