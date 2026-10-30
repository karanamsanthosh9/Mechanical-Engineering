'use strict';
// Batch 11: Fluid machinery (hydraulic turbines and pumps)
const F1 = '11-Fluid-Machinery/01-hydraulic-turbines.md';
const F2 = '11-Fluid-Machinery/02-pumps-hydraulic-devices.md';
const FOLDER = '11-fluid-machinery';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'pelton-wheel', w: 900, h: 480, file: F1, section: 'A4.',
      title: 'Pelton Wheel (Impulse Turbine)',
      caption: 'Nozzle with spear, jet striking split buckets on the wheel; velocity triangle at the bucket',
      draw: (L) => {
         let s = L.circle(250, 230, 110, { f: 'lgrey', s: 'ink', w: 3 });
         for (let i = 0; i < 12; i++) {
            const a = (i * 30) * Math.PI / 180, x = 250 + 110 * Math.cos(a), y = 230 + 110 * Math.sin(a);
            s += L.circle(x, y, 13, { f: 'lblue', s: 'blue', w: 1.5 });
         }
         s += L.circle(250, 230, 12, { f: 'ink', s: null });
         s += L.poly([[10, 320], [90, 320], [150, 340], [90, 360], [10, 360]], { f: 'lorange', s: 'orange', w: 2 }) + L.poly([[90, 328], [200, 340], [90, 352]], { f: 'lgrey', s: 'ink', w: 1.5 });
         s += L.arrow(150, 340, 237, 340, { c: 'blue', w: 4 }) + L.text(60, 312, 'Nozzle + spear (flow control)', { size: 11, c: 'orange', bold: true });
         s += L.text(180, 322, 'Jet', { size: 12, c: 'blue', bold: true });
         s += L.text(250, 375, 'Wheel (pitch circle diameter D)', { anchor: 'middle', size: 12 });
         s += L.box(520, 90, 330, 100, 'Jet velocity  V_{1} = C_{v} \\sqrt(2 g H)\nBucket speed  U = \\pi D N / 60\nBest U = 0.43-0.48 of V_{1}', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(520, 205, ['Work done per kg = U (V_{w1} + V_{w2})', 'Max hydraulic efficiency at U = V_{1}/2:', '\\eta_{h} = (1 + k cos\\phi) / 2   (k = V_{r2}/V_{r1})', 'Bucket angle 165 deg (\\phi = 15 deg)', 'No draft tube: wheel runs in air'], { w: 330, size: 11 });
         s += L.note(40, 405, ['Pelton: high head (above about 250 m), low discharge, partial admission. Specific speed 8-30 (single jet). Several jets raise specific speed', 'Governing: spear valve (flow) and deflector (jet bypass to avoid water hammer); casing prevents splashing'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'francis-kaplan-turbines', w: 900, h: 480, file: F1, section: 'A5.',
      title: 'Francis and Kaplan Turbines',
      caption: 'Radial inflow reaction turbine with draft tube, and axial-flow Kaplan runner with adjustable blades',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Francis (mixed flow)');
         s += L.path('M 60 150 Q 60 90 150 90 L 330 90 Q 410 90 410 160', { c: 'ink', w: 3 });
         s += L.circle(230, 190, 70, { f: 'lgrey', s: 'ink', w: 2 }) + L.circle(230, 190, 38, { f: 'white', s: 'ink', w: 2 });
         for (let i = 0; i < 12; i++) { const a = i * 30 * Math.PI / 180; s += L.line(230 + 40 * Math.cos(a), 190 + 40 * Math.sin(a), 230 + 66 * Math.cos(a + 0.4), 190 + 66 * Math.sin(a + 0.4), { c: 'blue', w: 2 }); }
         s += L.text(230, 195, 'Runner', { anchor: 'middle', size: 11, c: 'blue', bold: true }) + L.arrow(40, 150, 80, 150, { c: 'blue', w: 3 }) + L.text(14, 140, 'Water from penstock', { size: 10, c: 'grey' });
         s += L.polyline([[200, 260], [195, 320], [150, 360]], { c: 'ink', w: 3 }) + L.polyline([[260, 260], [265, 320], [310, 360]], { c: 'ink', w: 3 }) + L.text(230, 345, 'Draft tube', { anchor: 'middle', size: 12, c: 'purple', bold: true });
         s += L.text(230, 395, 'Guide vanes control the flow; spiral casing', { anchor: 'middle', size: 11, c: 'grey' });
         s += sub(L, 670, 58, 'Kaplan (axial flow)');
         s += L.rect(580, 120, 180, 40, { s: 'ink', w: 2 }) + L.rect(670, 120, 15, 50, { f: 'lgrey', s: 'ink' });
         s += L.poly([[640, 165], [665, 190], [665, 240], [640, 215]], { f: 'lblue', s: 'blue' }) + L.poly([[690, 165], [715, 190], [715, 240], [690, 215]], { f: 'lblue', s: 'blue' });
         s += L.arrow(680, 90, 680, 150, { c: 'blue', w: 3 }) + L.arrow(680, 270, 680, 320, { c: 'blue', w: 3 }) + L.text(700, 310, 'to draft tube', { size: 11, c: 'purple' });
         s += L.text(680, 255, 'Adjustable runner blades', { anchor: 'middle', size: 11, c: 'blue', bold: true }) + L.text(790, 120, 'Hub', { size: 11, c: 'grey' });
         s += L.note(520, 300, ['Francis: medium head (40-400 m), N_{s} 60-300', 'Kaplan: low head (< 60 m), large Q, N_{s} 300-1000;', 'double regulation (guide vanes + blades)', 'Draft tube regains kinetic head and allows', 'setting the runner above tailrace level'], { w: 340, size: 11 });
         s += L.note(40, 415, ['Specific speed N_{s} = N \\sqrt(P) / H^{5/4};  unit speed N_{u} = N / \\sqrt(H)', 'Unit power P_{u} = P / H^{3/2};  unit discharge Q_{u} = Q / \\sqrt(H)'], { w: 460, size: 10.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'turbine-selection-and-efficiency', w: 900, h: 480, file: F1, section: 'A10.',
      title: 'Hydraulic Turbine Selection and Part-Load Efficiency',
      caption: 'Head and specific speed ranges of Pelton, Francis and Kaplan; efficiency against load',
      draw: (L) => {
         const P1 = L.plot(80, 330, 340, 230, 0, 1, 0, 1.1);
         let s = sub(L, 250, 58, 'Head ranges (schematic)') + P1.axes('Specific speed N_{s}', 'Head H');
         s += P1.areaPts([[0.02, 1.0], [0.3, 1.0], [0.3, 0.55], [0.02, 0.55]], { f: 'lblue', s: 'blue' }) + P1.areaPts([[0.3, 0.7], [0.65, 0.7], [0.65, 0.2], [0.3, 0.2]], { f: 'lgreen', s: 'green' }) + P1.areaPts([[0.65, 0.35], [1, 0.35], [1, 0.02], [0.65, 0.02]], { f: 'lorange', s: 'orange' });
         s += P1.text(0.04, 0.8, 'Pelton', { size: 13, bold: true, c: 'blue', dx: 20 }) + P1.text(0.35, 0.45, 'Francis', { size: 13, bold: true, c: 'green', dx: 20 }) + P1.text(0.68, 0.2, 'Kaplan', { size: 13, bold: true, c: 'orange', dx: 4 });
         const P2 = L.plot(500, 330, 340, 230, 0, 1, 0, 1.1);
         s += sub(L, 670, 58, 'Efficiency against % load') + P2.axes('Load', '\\eta');
         s += P2.pts(seg((x) => 0.97 * (1 - 2.4 * Math.pow(x - 0.75, 2)), 0.1, 1, 30), { c: 'orange', w: 3 }) + P2.pts(seg((x) => 0.95 - 1.9 * Math.pow(x - 0.82, 2) * 1.1, 0.15, 1, 30), { c: 'blue', w: 3 }) + P2.pts(seg((x) => 0.9 - 3.4 * Math.pow(x - 0.9, 2), 0.35, 1, 30), { c: 'green', w: 3 });
         s += P2.text(0.12, 0.72, 'Kaplan: flat', { size: 11, c: 'orange', bold: true }) + P2.text(0.45, 0.35, 'Pelton', { size: 11, c: 'blue', bold: true }) + P2.text(0.6, 0.15, 'Francis: falls fast at part load', { size: 11, c: 'green', bold: true, dx: -40 });
         s += L.note(40, 365, ['Pelton: 250-1800 m, N_{s} 8-30 | Francis: 40-400 m, N_{s} 60-300 | Kaplan: 2-60 m, N_{s} 300-1000 (Propeller: fixed blades)', 'Kaplan keeps high efficiency from 40% to 100% load because both blades and guide vanes adjust'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'centrifugal-pump-layout-heads', w: 900, h: 480, file: F2, section: 'A3.',
      title: 'Centrifugal Pump: Layout and Heads',
      caption: 'Suction pipe with foot valve and strainer, impeller in volute casing, delivery pipe, static and manometric heads',
      draw: (L) => {
         let s = L.rect(40, 330, 140, 50, { f: 'lblue', s: 'blue' }) + L.text(110, 360, 'Sump', { anchor: 'middle', size: 12, c: 'blue', bold: true });
         s += L.line(80, 340, 80, 220, { c: 'ink', w: 5 }) + L.polyline([[80, 220], [80, 200], [260, 200]], { c: 'ink', w: 5 });
         s += L.rect(70, 335, 20, 20, { f: 'lgrey', s: 'ink' }) + L.text(100, 350, 'Foot valve + strainer', { size: 11, c: 'grey' });
         s += L.circle(300, 200, 50, { f: 'lgrey', s: 'ink', w: 3 }) + L.circle(300, 200, 30, { f: 'lblue', s: 'blue', w: 2 }) + L.text(300, 205, 'Impeller', { anchor: 'middle', size: 11, c: 'blue', bold: true });
         s += L.polyline([[335, 160], [335, 90], [560, 90]], { c: 'ink', w: 5 }) + L.rect(560, 80, 50, 20, { f: 'lblue', s: 'blue' });
         s += L.text(430, 82, 'Delivery pipe (delivery valve)', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.line(40, 332, 180, 332, { c: 'blue', w: 2 }) + L.line(560, 80, 640, 80, { c: 'blue', w: 2 });
         s += L.dim(630, 90, 630, 332, 'H_{s}+H_{d}', {}) + L.dim(190, 200, 190, 330, 'H_{s}', {}) + L.dim(605, 90, 605, 200, 'H_{d}', {});
         s += L.box(660, 120, 190, 150, 'Manometric head\nH_{m} = H_{s} + H_{d} + h_{fs} + h_{fd}\n+ V_{d}^{2}/2g\n\nStatic head = H_{s} + H_{d}', { f: 'lblue', s: 'blue', size: 11 });
         s += L.note(40, 405, ['Power input = \\rho g Q H_{m} / \\eta_{o};  overall efficiency = manometric x mechanical x volumetric (\\eta_{o} = \\eta_{m} \\eta_{mech} \\eta_{v})', 'Prime the pump before starting (casing must be full); start with delivery valve closed to reduce starting torque'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'pump-characteristic-curves-npsh', w: 900, h: 480, file: F2, section: 'A6.',
      title: 'Pump Characteristics, System Curve and NPSH',
      caption: 'Head-discharge, power and efficiency curves; operating point at the intersection with the system curve',
      draw: (L) => {
         const P = L.plot(80, 320, 360, 230, 0, 1, 0, 1.1);
         let s = sub(L, 260, 58, 'Operating point') + P.axes('Discharge Q', 'Head H');
         s += P.fn((x) => 1.0 - 0.55 * x * x - 0.1 * x, 0, 1, { c: 'blue', w: 3 }) + P.fn((x) => 0.25 + 0.75 * x * x, 0, 1, { c: 'red', w: 3 }) + P.fn((x) => 1.5 * x * (1 - 0.55 * x), 0, 1, { c: 'green', w: 2.5, dash: '5 3' });
         s += P.dot(0.62, 0.25 + 0.75 * 0.62 * 0.62, { c: 'purple' }) + P.text(0.62, 0.25 + 0.75 * 0.62 * 0.62, 'Operating point', { dx: 8, dy: -10, size: 11, c: 'purple', bold: true });
         s += P.text(0.05, 0.92, 'H-Q (pump)', { size: 11, c: 'blue', bold: true }) + P.text(0.05, 0.3, 'System curve: H_{static} + K Q^{2}', { size: 11, c: 'red', bold: true, dy: 14 }) + P.text(0.55, 0.88, '\\eta', { size: 14, c: 'green', bold: true });
         s += L.box(500, 90, 350, 100, 'NPSH available = (p_{atm} - p_{vap})/\\rho g - H_{s} - h_{fs}\nNPSH required (from manufacturer)\nNo cavitation if NPSH_{a} > NPSH_{r}', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(500, 205, ['Affinity laws (same pump, different N):', 'Q proportional to N;  H to N^{2};  P to N^{3}', 'Specific speed N_{s} = N \\sqrt(Q) / H^{3/4}', '(low: radial flow; high: axial flow)', 'Series: heads add; parallel: discharges add'], { w: 350, size: 11 });
         s += L.note(40, 360, ['Cavitation signs: noise, vibration, drop in head and efficiency, pitting of impeller', 'Prevent by lower suction lift, larger suction pipe, lower speed', 'Euler head for a pump: H = (U_{2}V_{w2} - U_{1}V_{w1})/g; backward-curved vanes are standard (stable curve, higher efficiency)'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'reciprocating-pump-and-air-vessel', w: 900, h: 480, file: F2, section: 'A8.',
      title: 'Reciprocating Pump: Indicator Diagram and Air Vessel',
      caption: 'Single-acting pump with suction and delivery valves; piston movement gives sinusoidal discharge',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Single-acting pump');
         s += L.rect(120, 150, 200, 70, { f: 'lblue', s: 'ink', w: 3 }) + L.rect(180, 155, 14, 60, { f: 'lgrey', s: 'ink', w: 2 }) + L.line(110, 185, 180, 185, { c: 'grey', w: 4 });
         s += L.circle(80, 185, 20, { s: 'grey', w: 2 }) + L.line(80, 185, 100, 170, { c: 'grey', w: 2 });
         s += L.line(220, 150, 220, 100, { c: 'ink', w: 4 }) + L.line(220, 220, 220, 300, { c: 'ink', w: 4 });
         s += L.poly([[205, 130], [235, 130], [220, 150]], { f: 'lred', s: 'red' }) + L.poly([[205, 250], [235, 250], [220, 230]], { f: 'lgreen', s: 'green' });
         s += L.text(245, 125, 'Delivery valve', { size: 11, c: 'red', bold: true }) + L.text(245, 250, 'Suction valve', { size: 11, c: 'green', bold: true });
         s += L.arrow(220, 300, 220, 270, { c: 'blue', w: 2 }) + L.arrow(220, 100, 220, 70, { c: 'blue', w: 2 });
         s += L.text(330, 185, 'Cylinder', { size: 12, c: 'ink', anchor: 'start' });
         const P = L.plot(520, 330, 330, 220, 0, 1, 0, 1.1);
         s += sub(L, 690, 58, 'Discharge against crank angle') + P.axes('Crank angle 0 to 360 deg', 'Q');
         s += P.fn((x) => Math.max(0, Math.sin(x * 2 * Math.PI)) * 0.9, 0, 1, { c: 'blue', w: 3 }) + P.hline(0.9 / Math.PI, 0, 1, { c: 'red' }) + P.text(0.5, 0.9 / Math.PI, 'mean discharge', { size: 11, c: 'red', dx: 4, dy: 30 }) + P.text(0.25, 0.9, 'delivery stroke', { size: 11, c: 'blue', bold: true, anchor: 'middle', dy: -8 }) + P.text(0.75, 0.05, 'suction stroke', { size: 11, c: 'blue', bold: true, anchor: 'middle', dy: -8 });
         s += L.note(40, 355, ['Q = A L N / 60 (single acting); 2 A L N / 60 (double acting); slip = (Q_{th} - Q_{act}) / Q_{th}; negative slip if delivery valve leaks or opens late', 'Air vessels smooth the flow (suction and delivery side): reduce acceleration head and save power, avoid separation', 'Work saved by air vessel: single acting 84.8%; double acting 39.2% (delivery side)'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'pump-types-comparison', w: 900, h: 480, file: F2, section: 'A1.',
      title: 'Pump Classification and Typical Applications',
      caption: 'Positive displacement versus dynamic pumps, and where each is used',
      draw: (L) => {
         let s = L.box(330, 80, 240, 44, 'Pumps', { f: 'lblue', s: 'blue', size: 15, bold: true });
         s += L.line(450, 124, 450, 150, { c: 'ink' }) + L.line(220, 150, 680, 150, { c: 'ink' }) + L.line(220, 150, 220, 175, { c: 'ink' }) + L.line(680, 150, 680, 175, { c: 'ink' });
         s += L.box(100, 175, 240, 44, 'Dynamic (rotodynamic)', { f: 'lgreen', s: 'green', size: 13 }) + L.box(560, 175, 240, 44, 'Positive displacement', { f: 'lorange', s: 'orange', size: 13 });
         s += L.line(220, 219, 220, 240, { c: 'ink' }) + L.line(150, 240, 290, 240, { c: 'ink' }) + L.line(150, 240, 150, 260, { c: 'ink' }) + L.line(290, 240, 290, 260, { c: 'ink' });
         s += L.box(80, 260, 140, 44, 'Centrifugal\n(radial)', { f: 'lgreen', size: 11 }) + L.box(230, 260, 140, 44, 'Axial / mixed\nflow', { f: 'lgreen', size: 11 });
         s += L.line(680, 219, 680, 240, { c: 'ink' }) + L.line(610, 240, 750, 240, { c: 'ink' }) + L.line(610, 240, 610, 260, { c: 'ink' }) + L.line(750, 240, 750, 260, { c: 'ink' });
         s += L.box(540, 260, 140, 44, 'Reciprocating\n(piston, plunger)', { f: 'lorange', size: 11 }) + L.box(690, 260, 140, 44, 'Rotary (gear,\nvane, screw)', { f: 'lorange', size: 11 });
         s += L.note(40, 330, ['Dynamic: continuous flow, smooth, high discharge at moderate head; delivers less as head rises; needs priming; handles clean liquids', 'Positive displacement: fixed volume per stroke, almost independent of head; self-priming; high head, low discharge', 'A relief valve is essential on the delivery side of a positive displacement pump', 'Other hydraulic devices: hydraulic ram (uses water hammer), hydraulic press, accumulator, intensifier, coupling and torque converter, jet pump'], { w: 820, size: 11 });
         return s;
      }
   }
];
