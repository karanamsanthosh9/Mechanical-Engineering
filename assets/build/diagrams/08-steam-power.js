'use strict';
// Batch 08: Boilers, nozzles, turbines, condensers, compressors, gas turbines, power plants
const F1 = '08-Steam-Turbines-Compressors-PowerPlants/01-boilers-nozzles-turbines-condensers.md';
const F2 = '08-Steam-Turbines-Compressors-PowerPlants/02-compressors-gas-turbines-power-plants.md';
const FOLDER = '08-steam-compressors-power';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'boiler-types-fire-water-tube', w: 900, h: 480, file: F1, section: 'A1.',
      title: 'Boiler Types: Fire-Tube and Water-Tube',
      caption: 'Hot gases inside tubes (fire-tube) versus water inside tubes (water-tube)',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Fire-tube boiler');
         s += L.rect(60, 100, 340, 150, { f: 'lblue', s: 'ink', w: 3, r: 40 });
         [130, 175, 220].forEach((y) => { s += L.rect(90, y - 10, 280, 20, { f: 'lorange', s: 'orange', w: 1.5 }); s += L.arrow(95, y, 365, y, { c: 'red', w: 2 }); });
         s += L.text(230, 120, 'Water', { anchor: 'middle', size: 12, c: 'blue', bold: true }) + L.text(230, 270, 'Hot gas through tubes, water around them', { anchor: 'middle', size: 12, c: 'grey' });
         s += L.text(60, 295, 'Examples: Cochran, Lancashire, Locomotive', { size: 12 }) + L.text(60, 315, 'Low pressure (up to about 20 bar), small capacity', { size: 12, c: 'grey' });
         s += sub(L, 670, 58, 'Water-tube boiler');
         s += L.circle(670, 100, 28, { f: 'lblue', s: 'blue', w: 2 }) + L.circle(740, 250, 22, { f: 'lblue', s: 'blue', w: 2 });
         [620, 650, 680, 710].forEach((x, i) => { s += L.line(x, 128 - i * 0, x + 30, 230, { c: 'blue', w: 3 }); });
         s += L.rect(580, 130, 190, 100, { s: 'orange', w: 1.5, dash: '5 3' }) + L.arrow(570, 230, 570, 150, { c: 'red', w: 3 });
         s += L.text(670, 104, 'Steam drum', { anchor: 'middle', size: 11, c: 'blue', bold: true }) + L.text(740, 254, 'Mud drum', { anchor: 'middle', size: 11, c: 'blue', bold: true }) + L.text(540, 190, 'Flue\ngas', { anchor: 'end', size: 12, c: 'red', bold: true });
         s += L.text(580, 295, 'Examples: Babcock-Wilcox, Stirling', { size: 12 }) + L.text(580, 315, 'High pressure and capacity, faster steaming', { size: 12, c: 'grey' });
         s += L.note(40, 350, ['Boiler mountings (safety): safety valve, water-level gauge, pressure gauge, stop valve, fusible plug, blow-off cock', 'Accessories (efficiency): economiser, air preheater, superheater, feed pump, injector'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'convergent-divergent-nozzle', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Convergent-Divergent Nozzle: Pressure and Velocity',
      caption: 'Flow becomes sonic at the throat; supersonic flow in the divergent part; critical pressure ratio',
      draw: (L) => {
         let s = L.polyline([[70, 150], [200, 150], [330, 190], [560, 120]], { c: 'ink', w: 3 }) + L.polyline([[70, 290], [200, 290], [330, 250], [560, 320]], { c: 'ink', w: 3 });
         s += L.polyline([[200, 150], [330, 190]], { c: 'ink', w: 3 });
         s += L.arrow(30, 220, 90, 220, { c: 'blue', w: 3 }) + L.arrow(570, 220, 630, 220, { c: 'red', w: 3 });
         s += L.line(330, 140, 330, 300, { c: 'grey', dash: '4 3' });
         s += L.text(330, 130, 'Throat: M = 1', { anchor: 'middle', size: 12, c: 'purple', bold: true }) + L.text(150, 135, 'Convergent (M < 1)', { anchor: 'middle', size: 12, c: 'blue', bold: true }) + L.text(450, 110, 'Divergent (M > 1)', { anchor: 'middle', size: 12, c: 'red', bold: true });
         s += L.text(70, 170, 'p_{1}', { size: 12, bold: true }) + L.text(570, 190, 'p_{2}', { size: 12, bold: true });
         s += L.note(40, 345, ['Critical pressure ratio p*/p_{1} = (2/(n+1))^{n/(n-1)}: 0.528 air (n = 1.4), 0.546 superheated steam (1.3), 0.577 wet steam (1.135)'], { w: 820, size: 11.5 });
         s += L.note(40, 385, ['Convergent nozzle: p_{2} >= p* (exit never above M = 1); if back pressure < p*, flow chokes and exit pressure stays at p*', 'Convergent-divergent: expand fully when back pressure is design value; over-expansion or under-expansion gives shocks outside the exit'], { w: 820, size: 11.5 });
         s += L.text(700, 120, 'Mass flow is maximum', { size: 12, c: 'purple', bold: true }) + L.text(700, 138, 'at the throat (choked)', { size: 12, c: 'purple' });
         s += L.text(670, 220, 'p falls,', { size: 12, c: 'ink' }) + L.text(670, 238, 'V rises', { size: 12, c: 'ink' });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'impulse-reaction-velocity-triangles', w: 900, h: 480, file: F1, section: 'A5.',
      title: 'Velocity Triangles: Impulse and Reaction Turbines',
      caption: 'Inlet and outlet velocity triangles for a moving blade; work done equals blade speed times change in whirl velocity',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Inlet triangle (impulse stage)');
         s += L.arrow(90, 220, 330, 100, { c: 'blue', w: 3 }) + L.arrow(90, 220, 250, 220, { c: 'ink', w: 3 }) + L.arrow(250, 220, 330, 100, { c: 'green', w: 3 });
         s += L.text(215, 150, 'V_{1}', { c: 'blue', bold: true, size: 14 }) + L.text(170, 242, 'U (blade speed)', { anchor: 'middle', size: 12, bold: true }) + L.text(310, 170, 'V_{r1}', { c: 'green', bold: true, size: 14 });
         s += L.angle(90, 220, 40, 0, 27, '\\alpha_{1}', {}) + L.angle(250, 220, 28, 0, 56, '', {}) + L.text(278, 214, '\\beta_{1}', { size: 12 }) + L.dim(90, 270, 330, 270, 'V_{w1} (whirl)', {});
         s += sub(L, 670, 58, 'Outlet triangle');
         s += L.arrow(560, 100, 760, 220, { c: 'green', w: 3 });
         s += L.arrow(840, 220, 760, 220, { c: 'ink', w: 3 }) + L.arrow(840, 220, 560, 100, { c: 'red', w: 3 });
         s += L.text(740, 140, 'V_{r2}', { c: 'green', bold: true, size: 14 }) + L.text(670, 160, 'V_{2}', { c: 'red', bold: true, size: 14, dx: 0 }) + L.text(800, 242, 'U', { bold: true, size: 13 });
         s += L.note(40, 300, ['Work per kg of steam:  W = U (V_{w1} + V_{w2}) ;  V_{w2} is positive if it points opposite to U', 'Axial thrust = m (V_{f1} - V_{f2});  tangential force = m (V_{w1} + V_{w2})', 'Blade efficiency = 2 U (V_{w1} + V_{w2}) / V_{1}^{2}'], { w: 820, size: 12 });
         s += L.note(40, 380, ['Impulse (symmetrical blades, \\beta_{1} = \\beta_{2}, no friction): max blade efficiency at U/V_{1} = cos\\alpha_{1} / 2,  \\eta = cos^{2}\\alpha_{1}', 'Parsons reaction (50% reaction): max at U/V_{1} = cos\\alpha_{1}, \\eta = 2cos^{2}\\alpha_{1} / (1 + cos^{2}\\alpha_{1})'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'steam-turbine-compounding', w: 900, h: 480, file: F1, section: 'A6.',
      title: 'Compounding of Impulse Turbines',
      caption: 'Pressure and velocity variation through pressure-compounded, velocity-compounded and pressure-velocity compounded stages',
      draw: (L) => {
         const col = (ox, ttl, pp, vv) => {
            const P = L.plot(ox, 330, 240, 170, 0, 1, 0, 1.1);
            let s = sub(L, ox + 120, 80, ttl) + P.axes('Stages', '');
            s += P.pts(pp, { c: 'red', w: 3 }) + P.pts(vv, { c: 'blue', w: 3 });
            return s;
         };
         let s = col(60, 'Pressure compounding', [[0, 1], [0.25, 0.7], [0.5, 0.45], [0.75, 0.22], [1, 0.05]], [[0, 0.1], [0.12, 0.8], [0.25, 0.1], [0.37, 0.8], [0.5, 0.1], [0.62, 0.8], [0.75, 0.1], [0.87, 0.8], [1, 0.1]]);
         s += col(340, 'Velocity compounding', [[0, 1], [0.22, 0.05], [1, 0.05]], [[0, 0.1], [0.25, 1.0], [0.5, 0.55], [0.75, 0.55 * 0.9], [1, 0.1]]);
         s += col(620, 'Pressure-velocity', [[0, 1], [0.15, 0.55], [0.5, 0.55], [0.65, 0.2], [1, 0.2]], [[0, 0.1], [0.12, 0.8], [0.3, 0.4], [0.5, 0.2], [0.55, 0.7], [0.75, 0.3], [1, 0.1]]);
         s += L.legend(60, 118, ['Red: pressure', 'Blue: steam velocity'], { size: 12 });
         s += L.note(40, 370, ['Pressure compounding (Rateau): several nozzle-blade stages; velocity drop and speed small in each stage (lower rpm, longer machine)', 'Velocity compounding (Curtis): one nozzle, rows of moving blades with fixed guide blades between; blades see high speed, so efficiency lower', 'Reason for compounding: a single stage gives rotor speed too high (about 30,000 rpm for full expansion)'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'condenser-and-draught', w: 900, h: 480, file: F1, section: 'A9.',
      title: 'Condensers and Draught',
      caption: 'Surface condenser layout with air extraction, and natural draught chimney terms',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Surface condenser');
         s += L.rect(80, 100, 300, 160, { f: 'lgrey', s: 'ink', w: 3, r: 18 });
         [135, 165, 195, 225].forEach((y) => { s += L.line(95, y, 365, y, { c: 'blue', w: 4 }); });
         s += L.arrow(230, 60, 230, 100, { c: 'red', w: 3 }) + L.text(250, 78, 'Exhaust steam from turbine', { size: 12, c: 'red', bold: true });
         s += L.arrow(40, 150, 95, 150, { c: 'blue', w: 2.5 }) + L.text(40, 140, 'Cooling water in', { size: 11, c: 'blue' }) + L.arrow(365, 210, 420, 210, { c: 'blue', w: 2.5 }) + L.text(380, 232, 'Cooling water out', { size: 11, c: 'blue' });
         s += L.arrow(150, 260, 150, 300, { c: 'green', w: 3 }) + L.text(160, 296, 'Condensate to feed pump', { size: 12, c: 'green', bold: true }) + L.arrow(330, 260, 330, 300, { c: 'grey', w: 2 }) + L.text(340, 296, 'Air extraction', { size: 12, c: 'grey' });
         s += sub(L, 690, 58, 'Chimney draught');
         s += L.polyline([[650, 330], [660, 120], [720, 120], [730, 330]], { c: 'ink', w: 3 });
         s += L.arrow(690, 330, 690, 130, { c: 'red', w: 3 }) + L.text(745, 200, 'Hot flue gas rises', { size: 12, c: 'red', bold: true });
         s += L.dim(760, 120, 760, 330, 'H', {});
         s += L.text(690, 350, 'Draught = H (\\rho_{a} - \\rho_{g}) g', { anchor: 'middle', size: 11.5, c: 'grey' });
         s += L.note(40, 370, ['Jet condenser: steam mixes with cooling water; Surface condenser: steam condenses on tubes, condensate reused (preferred for boilers)', 'Condenser pressure = p_{steam} + p_{air} (Dalton); vacuum efficiency = actual vacuum / ideal vacuum', 'Condenser efficiency = cooling water temperature rise / (saturation temperature - inlet temperature)', 'Natural draught: no fan; Forced / induced draught: fans give controlled draught; balanced draught uses both'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'reciprocating-compressor-pv', w: 900, h: 480, file: F2, section: 'A3.',
      title: 'Reciprocating Compressor: P-V Diagram with Clearance',
      caption: 'Effect of clearance volume on the indicator diagram and the swept versus induced volume',
      draw: (L) => {
         const P = L.plot(100, 330, 400, 240, 0, 1, 0, 1.1);
         let s = P.axes('Volume V', 'Pressure p');
         const p1 = 0.15, pd = 0.6, V1 = 1.0, V3 = 0.12;
         const V2 = V1 * Math.pow(p1 / pd, 1 / 1.3), V4 = V3 * Math.pow(pd / p1, 1 / 1.3);
         const cmp = (v) => p1 * Math.pow(V1 / v, 1.3), rex = (v) => pd * Math.pow(V3 / v, 1.3);
         const loop = seg(cmp, V1, V2, 30).concat([[V3, pd]], seg(rex, V3, V4, 30).slice(1), [[V4, p1]]);
         s += P.areaPts(loop, { f: 'lblue' });
         s += P.pts(seg(cmp, V1, V2, 30), { c: 'blue', w: 3 }) + P.pts([[V2, pd], [V3, pd]], { c: 'red', w: 3 }) + P.pts(seg(rex, V3, V4, 30), { c: 'orange', w: 3 }) + P.pts([[V4, p1], [V1, p1]], { c: 'green', w: 3 });
         s += P.vline(V3, 0, pd, { c: 'grey' }) + P.text(V3, 0, 'V_{c}', { dx: -4, dy: 18, anchor: 'middle', size: 11, c: 'grey' }) + P.text(1, 0, 'V_{1}', { dx: -14, dy: 36, anchor: 'middle', size: 11, c: 'grey' });
         s += P.hline(pd, 0, V3, { c: 'grey' }) + P.text(0, pd, 'p_{2}', { dx: -24, dy: 4, size: 12, c: 'grey' }) + P.hline(p1, 0, V4, { c: 'grey' }) + P.text(0, p1, 'p_{1}', { dx: -24, dy: 4, size: 12, c: 'grey' });
         s += L.text(P.X(V1) + 8, P.Y(p1) + 4, '1', { bold: true }) + L.text(P.X(V2) + 8, P.Y(pd) - 6, '2', { bold: true }) + L.text(P.X(V3) - 14, P.Y(pd) - 6, '3', { bold: true }) + L.text(P.X(V4) - 4, P.Y(p1) + 18, '4', { bold: true });
         s += L.dim(P.X(V4), P.Y(0) + 8, P.X(V1), P.Y(0) + 8, '', {}) + L.text(P.X((V4 + V1) / 2), P.Y(0) + 26, 'Induced volume', { anchor: 'middle', size: 11, c: 'purple' });
         s += P.text(0.33, 0.7, '1-2 compression, 2-3 delivery', { size: 10.5, c: 'ink', dx: 40 }) + P.text(0.33, 0.78, '3-4 re-expansion, 4-1 suction', { size: 10.5, c: 'ink', dx: 40 });
         s += L.box(560, 90, 300, 130, 'Swept volume V_{s} = V_{1} - V_{3}\nClearance volume V_{c} = V_{3}\nClearance ratio c = V_{c}/V_{s}\nVolumetric efficiency\n\\eta_{v} = 1 + c - c (p_{2}/p_{1})^{1/n}', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(560, 240, ['Higher delivery pressure: re-expansion', 'takes more of the stroke, so \\eta_{v}', 'falls; at a limit pressure, no free air', 'is delivered. Remedy: multi-stage.'], { w: 300, size: 11 });
         s += L.note(40, 390, ['Work per cycle (polytropic, per kg) W = n/(n-1) p_{1}V_{1}[(p_{2}/p_{1})^{(n-1)/n} - 1];  clearance volume does not change work per kg of delivered air'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'multistage-intercooling-pv', w: 900, h: 480, file: F2, section: 'A4.',
      title: 'Two-Stage Compression with Intercooling',
      caption: 'Work saved with perfect intercooling; optimum intermediate pressure p_i = sqrt(p1 p3)',
      draw: (L) => {
         const P = L.plot(100, 330, 400, 240, 0, 1, 0, 1.1);
         let s = P.axes('Volume V', 'Pressure p');
         const p1 = 0.12, p2 = 0.38, p3 = 1.0;
         const poly = (pa, pb, va, n) => (v) => pa * Math.pow(va / v, n);
         const v1 = 1.0, v2 = v1 * Math.pow(p1 / p2, 1 / 1.3), v2i = v1 * p1 / p2, v3 = v2i * Math.pow(p2 / p3, 1 / 1.3);
         s += P.pts(seg(poly(p1, p2, v1, 1.3), v1, v2, 25), { c: 'blue', w: 3 }) + P.pts(seg((v) => p2 * v2i / v, v2, v2i, 10), { c: 'purple', w: 2.5, dash: '5 3' }) + P.pts(seg(poly(p2, p3, v2i, 1.3), v2i, v3, 25), { c: 'blue', w: 3 });
         s += P.pts(seg((v) => p1 * v1 / v, v1, v3, 30), { c: 'green', w: 2.5, dash: '5 3' }) + P.pts(seg(poly(p1, p3, v1, 1.3), v1, v3 * 0.86, 30), { c: 'red', w: 2.5, dash: '2 3' });
         s += P.hline(p2, 0, v2i, { c: 'grey' }) + P.text(0, p2, 'p_{i}', { dx: -22, dy: 4, size: 12, c: 'grey' }) + P.hline(p3, 0, v3, { c: 'grey' }) + P.text(0, p3, 'p_{3}', { dx: -22, dy: 4, size: 12, c: 'grey' }) + P.text(0, p1, 'p_{1}', { dx: -22, dy: 4, size: 12, c: 'grey' });
         s += P.text(0.62, 0.62, 'Isothermal', { size: 11, c: 'green', bold: true }) + P.text(0.65, 0.3, 'Single stage\npolytropic', { size: 11, c: 'red', bold: true }) + P.text(0.3, 0.58, 'LP + HP\nwith intercooler', { size: 11, c: 'blue', bold: true });
         s += L.box(560, 90, 300, 120, 'Intermediate pressure\np_{i} = \\sqrt(p_{1} p_{3})  (min. work)\nStage ratio r = (p_{N+1}/p_{1})^{1/N}\nW = N n/(n-1) p_{1}V_{1} (r^{(n-1)/n} - 1)', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(560, 225, ['Benefits of multi-staging:', 'lower work, lower delivery temperature,', 'better \\eta_{v}, smaller cylinder stress', '(lighter mechanical design)'], { w: 300, size: 11 });
         s += L.note(40, 385, ['Perfect intercooling: air returns to initial temperature before the HP stage (T_{2} = T_{1}); work equal in each stage at optimum p_{i}', 'Isothermal efficiency = isothermal work / actual work  (compressor with water cooling jacket and intercooler)'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'gas-turbine-and-jet-layouts', w: 900, h: 480, file: F2, section: 'A6.',
      title: 'Gas Turbine Plant and Turbojet Layout',
      caption: 'Open-cycle gas turbine components and turbojet engine sections with station numbering',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Open-cycle gas turbine');
         s += L.box(60, 120, 90, 60, 'Compressor', { f: 'lblue', s: 'blue' }) + L.box(190, 90, 100, 40, 'Combustor', { f: 'lorange', s: 'orange' }) + L.box(330, 120, 90, 60, 'Turbine', { f: 'lgreen', s: 'green' });
         s += L.arrow(20, 150, 60, 150, { c: 'ink', w: 2 }) + L.text(8, 140, 'Air', { size: 11 }) + L.line(150, 135, 190, 110, { c: 'ink', w: 2 }) + L.arrow(290, 110, 330, 135, { c: 'red', w: 2 }) + L.arrow(420, 150, 470, 150, { c: 'ink', w: 2 }) + L.text(430, 140, 'Exhaust', { size: 11 });
         s += L.arrow(240, 60, 240, 90, { c: 'red', w: 2 }) + L.text(248, 74, 'Fuel', { size: 11, c: 'red', bold: true });
         s += L.line(150, 165, 330, 165, { c: 'purple', w: 3 }) + L.text(240, 185, 'common shaft (compressor takes about 50-60% of turbine work)', { anchor: 'middle', size: 11, c: 'purple' });
         s += L.text(230, 220, 'Net output = turbine work - compressor work', { anchor: 'middle', size: 12, c: 'grey' });
         s += sub(L, 670, 58, 'Turbojet');
         s += L.box(520, 100, 70, 50, 'Diffuser\n(intake)', { f: 'lgrey', size: 10 }) + L.box(595, 100, 80, 50, 'Compressor', { f: 'lblue', s: 'blue', size: 11 }) + L.box(680, 100, 70, 50, 'Burner', { f: 'lorange', s: 'orange', size: 11 }) + L.box(755, 100, 60, 50, 'Turbine', { f: 'lgreen', s: 'green', size: 10 }) + L.box(820, 100, 60, 50, 'Nozzle', { f: 'lred', s: 'red', size: 10 });
         s += L.arrow(490, 125, 520, 125, { c: 'ink', w: 2 }) + L.arrow(880, 125, 895, 125, { c: 'red', w: 2 });
         s += L.text(570, 180, 'Thrust F = m[(1+f) V_{j} - V_{a}] + (p_{j} - p_{a}) A_{j}', { size: 11.5, anchor: 'middle', c: 'ink' }) + L.text(700, 200, 'Propulsive efficiency \\eta_{p} = 2 / (1 + V_{j}/V_{a})', { size: 11.5, anchor: 'middle', c: 'ink' });
         s += L.note(40, 260, ['Improvements to a gas turbine cycle: regeneration (heat exchanger using exhaust), intercooling, reheating', 'Closed cycle: working fluid recirculates, external heating, clean air, e.g. helium; open cycle: simple, light, common for jets', 'Turboprop: propeller via reduction gear; Turbofan: bypass air, lower noise and fuel use', 'Ramjet: no moving parts, needs forward speed; Rocket: carries its own oxidiser'], { w: 820, size: 11.5 });
         s += L.note(40, 380, ['Specific impulse = thrust / (weight flow of propellant); ramjet works above about Mach 1; scramjet above about Mach 5'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'thermal-power-plant-layout', w: 900, h: 480, file: F2, section: 'A8.',
      title: 'Thermal Power Plant: Four Circuits',
      caption: 'Coal and ash, air and flue gas, feed water and steam, and cooling water circuits of a steam station',
      draw: (L) => {
         let s = '';
         s += L.box(40, 100, 90, 50, 'Coal\nhandling', { f: 'lgrey', size: 11 }) + L.box(160, 100, 100, 50, 'Boiler\n(furnace)', { f: 'lorange', s: 'orange', size: 11 }) + L.box(290, 100, 90, 50, 'Super-\nheater', { f: 'lred', s: 'red', size: 11 }) + L.box(410, 100, 90, 50, 'Turbine', { f: 'lblue', s: 'blue', size: 11 }) + L.box(530, 100, 90, 50, 'Generator', { f: 'lpurple', s: 'purple', size: 11 });
         s += L.arrow(130, 125, 160, 125, { c: 'ink', w: 2 }) + L.arrow(260, 125, 290, 125, { c: 'red', w: 2 }) + L.arrow(380, 125, 410, 125, { c: 'red', w: 2 }) + L.arrow(500, 125, 530, 125, { c: 'ink', w: 2 });
         s += L.arrow(620, 125, 680, 125, { c: 'purple', w: 3 }) + L.text(640, 112, 'Power', { size: 11, c: 'purple', bold: true });
         s += L.box(410, 220, 90, 50, 'Condenser', { f: 'lgreen', s: 'green', size: 11 }) + L.box(290, 220, 90, 50, 'Feed pump +\nheaters', { f: 'lgreen', s: 'green', size: 11 }) + L.box(160, 220, 100, 50, 'Economiser', { f: 'lorange', s: 'orange', size: 11 });
         s += L.arrow(455, 150, 455, 220, { c: 'blue', w: 2 }) + L.arrow(410, 245, 380, 245, { c: 'green', w: 2 }) + L.arrow(290, 245, 260, 245, { c: 'green', w: 2 }) + L.arrow(210, 220, 210, 150, { c: 'green', w: 2 });
         s += L.box(540, 220, 100, 50, 'Cooling tower\n+ CW pump', { f: 'lblue', s: 'blue', size: 11 }) + L.arrow(540, 245, 500, 245, { c: 'blue', w: 2 }) + L.arrow(500, 255, 540, 255, { c: 'blue', w: 2 });
         s += L.box(160, 330, 100, 40, 'Air preheater', { f: 'lorange', s: 'orange', size: 11 }) + L.box(300, 330, 90, 40, 'ESP', { f: 'lgrey', size: 11 }) + L.box(420, 330, 100, 40, 'Chimney', { f: 'lgrey', size: 11 });
         s += L.arrow(210, 270, 210, 330, { c: 'red', w: 2 }) + L.arrow(260, 350, 300, 350, { c: 'red', w: 2 }) + L.arrow(390, 350, 420, 350, { c: 'red', w: 2 });
         s += L.text(100, 390, 'Flue gas path: furnace > superheater > economiser > air preheater > ESP > ID fan > chimney', { size: 11, c: 'red' });
         s += L.note(40, 410, ['Four circuits: coal and ash; air and flue gas; feed water and steam; cooling water. Overall efficiency = boiler x turbine x generator x auxiliaries', 'Load factor = average load / peak load; utilisation factor = max demand / capacity', 'Diversity factor = sum of individual maxima / system maximum demand'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'hydro-and-nuclear-layouts', w: 900, h: 480, file: F2, section: 'A9.',
      title: 'Hydroelectric and Nuclear (PWR) Plant Layouts',
      caption: 'Head, penstock and turbine in a hydro scheme; two-loop pressurised water reactor',
      draw: (L) => {
         let s = sub(L, 230, 58, 'Hydroelectric plant');
         s += L.polyline([[40, 120], [160, 120], [160, 90], [40, 90]], { c: 'blue', w: 2 }) + L.rect(40, 90, 120, 30, { f: 'lblue', s: null });
         s += L.line(160, 120, 330, 280, { c: 'ink', w: 5 }) + L.text(250, 180, 'Penstock', { size: 12, bold: true, rot: 45 });
         s += L.box(330, 270, 90, 50, 'Turbine +\ngenerator', { f: 'lgreen', s: 'green', size: 11 }) + L.arrow(420, 300, 470, 300, { c: 'blue', w: 3 }) + L.text(420, 340, 'Tail race', { size: 11, c: 'blue' });
         s += L.dim(70, 120, 70, 300, 'Head H', {}) + L.text(40, 80, 'Reservoir', { size: 12, c: 'blue', bold: true });
         s += L.text(40, 230, 'P = \\rho g Q H \\eta', { size: 12, c: 'ink' });
         s += sub(L, 690, 58, 'Pressurised water reactor');
         s += L.box(560, 100, 100, 80, 'Reactor core\n(UO2, moderator\n= coolant)', { f: 'lorange', s: 'orange', size: 10 }) + L.box(710, 100, 100, 80, 'Steam\ngenerator', { f: 'lblue', s: 'blue', size: 11 });
         s += L.line(660, 120, 710, 120, { c: 'red', w: 2.5 }) + L.line(710, 160, 660, 160, { c: 'blue', w: 2.5 }) + L.text(685, 112, 'hot', { size: 10, c: 'red', anchor: 'middle' }) + L.text(685, 176, 'cold', { size: 10, c: 'blue', anchor: 'middle' });
         s += L.arrow(810, 120, 850, 120, { c: 'red', w: 2 }) + L.text(850, 108, 'steam out', { size: 10, c: 'red', anchor: 'end' });
         s += L.text(610, 215, 'Primary loop: high pressure, no boiling', { size: 11, c: 'grey' });
         s += L.note(40, 345, ['Hydro: high head - Pelton; medium - Francis; low head, large flow - Kaplan. Needs a surge tank to absorb water hammer', 'PWR: moderator and coolant is light water; control rods absorb neutrons; BWR boils water in the core; CANDU: heavy water, natural uranium', 'Fission: U-235 absorbs a thermal neutron, releases about 200 MeV and 2-3 neutrons; chain reaction when k = 1; fuel enrichment 3-5% for PWR'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'load-curve-and-load-duration', w: 900, h: 480, file: F2, section: 'A12.',
      title: 'Load Curve, Load Duration Curve and Plant Factors',
      caption: 'Daily chronological load and the same data re-arranged in descending order',
      draw: (L) => {
         const mk = (ox, ttl, pts, xl) => {
            const P = L.plot(ox, 330, 340, 200, 0, 1, 0, 1.1);
            let s = sub(L, ox + 170, 80, ttl) + P.axes(xl, 'Load');
            return { P, s };
         };
         const a = mk(70, 'Daily load curve', 0, 'Time of day (0 to 24 h)');
         let s = a.s;
         const lc = [[0, 0.35], [0.1, 0.3], [0.2, 0.32], [0.3, 0.6], [0.4, 0.7], [0.5, 0.65], [0.6, 0.6], [0.7, 0.75], [0.8, 0.95], [0.9, 0.7], [1, 0.4]];
         s += a.P.areaPts([[0, 0]].concat(lc, [[1, 0]]), { f: 'lblue' }) + a.P.pts(lc, { c: 'blue', w: 3 });
         s += a.P.hline(0.95, 0, 1, { c: 'red' }) + a.P.text(0.02, 0.95, 'Peak load', { size: 11, c: 'red', dy: -4, dx: 4 }) + a.P.hline(0.58, 0, 1, { c: 'green' }) + a.P.text(0.02, 0.58, 'Average load', { size: 11, c: 'green', dy: -4, dx: 4 });
         const b = mk(490, 'Load duration curve', 0, 'Hours (0 to 24 h, descending load)');
         s += b.s;
         const ld = [[0, 0.95], [0.1, 0.75], [0.25, 0.7], [0.4, 0.65], [0.55, 0.6], [0.7, 0.4], [0.85, 0.32], [1, 0.3]];
         s += b.P.areaPts([[0, 0]].concat(ld, [[1, 0]]), { f: 'lgreen' }) + b.P.pts(ld, { c: 'green', w: 3 });
         s += b.P.text(0.02, 0.2, 'Area = energy generated', { size: 11, c: 'green', bold: true, dx: 80 }) + b.P.text(0.7, 0.2, 'Base load', { size: 11, c: 'blue', bold: true });
         s += L.note(40, 365, ['Load factor = average load / peak load;  Capacity factor = actual output / (rated capacity x time)', 'Demand factor = max demand / connected load;  Diversity factor = sum of individual maxima / simultaneous maximum', 'Plant use factor = output / (capacity x hours of operation);  Reserve = installed capacity - peak'], { w: 820, size: 11 });
         return s;
      }
   }
];
