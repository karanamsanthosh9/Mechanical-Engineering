'use strict';
// Batch 09: Refrigeration and air conditioning
const F1 = '09-Refrigeration-and-Air-Conditioning/01-refrigeration.md';
const F2 = '09-Refrigeration-and-Air-Conditioning/02-psychrometry-air-conditioning.md';
const FOLDER = '09-refrigeration-ac';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });
const st = (P, x, y, n, dx, dy) => P.dot(x, y, { c: 'red' }) + P.text(x, y, n, { dx, dy, bold: true, size: 14 });

module.exports = [
   {
      folder: FOLDER, name: 'vcr-cycle-schematic-and-ph', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Vapour Compression Refrigeration: Schematic and p-h Diagram',
      caption: 'Compressor, condenser, expansion valve and evaporator, with the standard cycle on the p-h plane',
      draw: (L) => {
         let s = sub(L, 190, 58, 'System');
         s += L.box(140, 90, 100, 44, 'Condenser', { f: 'lred', s: 'red', size: 12 }) + L.box(140, 250, 100, 44, 'Evaporator', { f: 'lblue', s: 'blue', size: 12 });
         s += L.box(30, 160, 60, 70, 'Comp-\nressor', { f: 'lgreen', s: 'green', size: 11 }) + L.box(290, 170, 60, 50, 'Expansion\nvalve', { f: 'lorange', s: 'orange', size: 10 });
         s += L.line(60, 160, 60, 112, { c: 'red', w: 2.5 }) + L.arrow(60, 112, 140, 112, { c: 'red', w: 2.5 });
         s += L.line(240, 112, 320, 112, { c: 'red', w: 2.5 }) + L.arrow(320, 112, 320, 170, { c: 'red', w: 2.5 });
         s += L.line(320, 220, 320, 272, { c: 'blue', w: 2.5 }) + L.arrow(320, 272, 240, 272, { c: 'blue', w: 2.5 });
         s += L.line(140, 272, 60, 272, { c: 'blue', w: 2.5 }) + L.arrow(60, 272, 60, 230, { c: 'blue', w: 2.5 });
         s += L.text(90, 150, '2', { bold: true }) + L.text(320, 150, '3', { bold: true, dx: 10 }) + L.text(330, 255, '4', { bold: true }) + L.text(90, 262, '1', { bold: true });
         s += L.text(190, 80, 'Q_{H} rejected', { anchor: 'middle', size: 12, c: 'red', bold: true }) + L.text(190, 316, 'Q_{L} absorbed (refrigerating effect)', { anchor: 'middle', size: 12, c: 'blue', bold: true });
         const P = L.plot(520, 320, 330, 230, 0, 1, 0, 1.1);
         s += sub(L, 690, 58, 'p-h diagram') + P.axes('Enthalpy h', 'log p');
         s += P.pts(seg((h) => 0.2 + 0.8 * Math.sin((h / 0.45) * Math.PI / 2), 0, 0.45, 20), { c: 'grey', w: 2 }) + P.pts(seg((h) => 1.0 - 0.8 * Math.pow(Math.max(h - 0.45, 0) / 0.5, 0.9), 0.45, 0.95, 20), { c: 'grey', w: 2 });
         s += P.pts([[0.25, 0.28], [0.6, 0.28], [0.72, 0.85], [0.25, 0.85], [0.25, 0.28]], { c: 'blue', w: 3 });
         s += st(P, 0.6, 0.28, '1', 8, 14) + st(P, 0.72, 0.85, '2', 8, -6) + st(P, 0.25, 0.85, '3', -16, -6) + st(P, 0.25, 0.28, '4', -16, 14);
         s += P.text(0.45, 0.85, 'condensation', { dy: -10, anchor: 'middle', size: 11, c: 'red', bold: true }) + P.text(0.43, 0.28, 'evaporation', { dy: 20, anchor: 'middle', size: 11, c: 'blue', bold: true }) + P.text(0.25, 0.55, 'throttling\n(h const)', { dx: -76, size: 11, c: 'orange', bold: true }) + P.text(0.66, 0.55, 'compression', { dx: 6, size: 11, c: 'green', bold: true });
         s += L.note(40, 350, ['COP = refrigerating effect / compressor work = (h_{1} - h_{4}) / (h_{2} - h_{1});   1 ton of refrigeration = 3.517 kW = 211 kJ/min', 'Throttling is irreversible, so a flash vapour fraction appears at 4; the process 1-2 is isentropic in the ideal cycle', 'Subcooling raises refrigerating effect; superheating at the evaporator raises it but also work; higher condenser pressure lowers COP'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'vcr-operating-conditions', w: 900, h: 480, file: F1, section: 'A4.',
      title: 'Effect of Operating Conditions on the VCR Cycle',
      caption: 'Lower evaporator pressure, higher condenser pressure, subcooling and superheating on the p-h plane',
      draw: (L) => {
         const mk = (ox, ttl, extra) => {
            const P = L.plot(ox, 310, 240, 200, 0, 1, 0, 1.1);
            let s = sub(L, ox + 120, 80, ttl) + P.axes('h', 'log p');
            s += P.pts(seg((h) => 0.2 + 0.8 * Math.sin((h / 0.45) * Math.PI / 2), 0, 0.45, 20), { c: 'grey', w: 1.5 }) + P.pts(seg((h) => 1.0 - 0.8 * Math.pow(Math.max(h - 0.45, 0) / 0.5, 0.9), 0.45, 0.95, 20), { c: 'grey', w: 1.5 });
            s += P.pts([[0.25, 0.3], [0.6, 0.3], [0.7, 0.75], [0.25, 0.75], [0.25, 0.3]], { c: 'blue', w: 2.5 });
            return { P, s: s + extra(P) };
         };
         const a = mk(40, 'Lower evaporator p', (P) => P.pts([[0.25, 0.3], [0.25, 0.18], [0.63, 0.18], [0.78, 0.75]], { c: 'red', w: 2.5, dash: '5 3' }) + P.text(0.7, 0.5, 'more work,\nless effect', { size: 10.5, c: 'red', bold: true }));
         const b = mk(330, 'Higher condenser p', (P) => P.pts([[0.6, 0.3], [0.76, 0.95], [0.38, 0.95], [0.38, 0.3]], { c: 'red', w: 2.5, dash: '5 3' }) + P.text(0.1, 0.95, 'less effect,\nmore work', { size: 10.5, c: 'red', bold: true, dy: -34 }));
         const c = mk(620, 'Subcooling and superheat', (P) => P.pts([[0.25, 0.75], [0.15, 0.75], [0.15, 0.3], [0.25, 0.3]], { c: 'green', w: 2.5, dash: '5 3' }) + P.pts([[0.6, 0.3], [0.7, 0.3], [0.8, 0.75]], { c: 'orange', w: 2.5, dash: '5 3' }) + P.text(0.07, 0.52, 'subcool', { size: 10.5, c: 'green', bold: true, dy: 0 }));
         let s = a.s + b.s + c.s;
         s += L.note(40, 345, ['Lower evaporator temperature or higher condenser temperature: COP falls (smaller effect, more work)', 'Subcooling: no extra compressor work, effect rises, COP improves;  superheating: useful only if it cools the space', 'Refrigerant needs: high latent heat, low freezing point, positive evaporator pressure, low specific volume, low GWP and ODP'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'absorption-refrigeration-vars', w: 900, h: 480, file: F1, section: 'A8.',
      title: 'Vapour Absorption Refrigeration System (NH3-Water)',
      caption: 'Heat-operated cycle: generator, rectifier, condenser, evaporator, absorber, and solution pump',
      draw: (L) => {
         let s = '';
         s += L.box(60, 90, 110, 70, 'Generator\n(heat Q_{G})', { f: 'lorange', s: 'orange', size: 12 }) + L.box(210, 80, 90, 40, 'Rectifier', { f: 'lgrey', size: 11 }) + L.box(340, 80, 110, 50, 'Condenser', { f: 'lred', s: 'red', size: 12 });
         s += L.box(340, 230, 110, 50, 'Evaporator', { f: 'lblue', s: 'blue', size: 12 }) + L.box(60, 230, 110, 70, 'Absorber\n(heat out)', { f: 'lgreen', s: 'green', size: 12 }) + L.box(210, 180, 90, 40, 'Pump', { f: 'lpurple', s: 'purple', size: 11 });
         s += L.arrow(170, 110, 210, 100, { c: 'red', w: 2.5 }) + L.arrow(300, 100, 340, 105, { c: 'red', w: 2.5 }) + L.line(450, 105, 480, 105, { c: 'red', w: 2.5 }) + L.line(480, 105, 480, 180, { c: 'red', w: 2.5 }) + L.arrow(480, 180, 395, 180, { c: 'red', w: 2.5 });
         s += L.arrow(395, 180, 395, 230, { c: 'orange', w: 2.5 }) + L.text(405, 210, 'expansion valve', { size: 10, c: 'orange', bold: true });
         s += L.line(340, 255, 250, 255, { c: 'blue', w: 2.5 }) + L.arrow(250, 255, 170, 265, { c: 'blue', w: 2.5 });
         s += L.line(115, 230, 115, 200, { c: 'green', w: 2.5 }) + L.arrow(115, 200, 210, 200, { c: 'green', w: 2.5 }) + L.arrow(300, 200, 330, 200, { c: 'green', w: 0.1 });
         s += L.line(255, 180, 255, 140, { c: 'green', w: 2.5 }) + L.arrow(255, 140, 140, 140, { c: 'green', w: 0.1 });
         s += L.line(60, 150, 30, 150, { c: 'orange', w: 2.5 }) + L.line(30, 150, 30, 270, { c: 'orange', w: 2.5 }) + L.arrow(30, 270, 60, 270, { c: 'orange', w: 2.5 });
         s += L.text(110, 70, 'Heat source', { size: 12, c: 'orange', bold: true }) + L.text(395, 70, 'Q_{C}', { size: 12, c: 'red', bold: true, anchor: 'middle' }) + L.text(395, 305, 'Q_{E} (cooling)', { size: 12, c: 'blue', bold: true, anchor: 'middle' });
         s += L.text(630, 100, 'Weak solution returns through', { size: 11.5, c: 'ink' }) + L.text(630, 118, 'pressure-reducing valve to absorber', { size: 11.5, c: 'ink' });
         s += L.note(40, 330, ['Refrigerant NH3, absorbent water; (LiBr-water: refrigerant is water, evaporator above 0 C, used in air conditioning)', 'Compressor replaced by absorber + pump + generator; pump work is tiny, so the main input is heat at the generator', 'COP = Q_{E} / (Q_{G} + W_{pump}); typical 0.5-1.2 (much below vapour compression), but can use waste heat or solar energy', 'Electrolux (three-fluid) system: no pump; NH3 + H2 + water; used in domestic refrigerators'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'bell-coleman-air-cycle', w: 900, h: 480, file: F1, section: 'A7.',
      title: 'Air Refrigeration: Bell-Coleman (Reversed Brayton) Cycle',
      caption: 'Isentropic compression, constant pressure cooling, isentropic expansion and constant pressure heat absorption',
      draw: (L) => {
         const P1 = L.plot(70, 330, 330, 230, 0, 1, 0, 1.1);
         const G = 1.4;
         let s = sub(L, 235, 58, 'p-v diagram') + P1.axes('v', 'p');
         const v1 = 0.85, p1 = 0.2, p2 = 0.75;
         const v2 = v1 * Math.pow(p1 / p2, 1 / G), v3 = 0.55 * 0.6, v4 = v3 * Math.pow(p2 / p1, 1 / G);
         s += P1.pts(seg((v) => p1 * Math.pow(v1 / v, G), v1, v2, 20), { c: 'blue', w: 3 }) + P1.pts([[v2, p2], [v3, p2]], { c: 'red', w: 3 }) + P1.pts(seg((v) => p2 * Math.pow(v3 / v, G), v3, v4, 20), { c: 'blue', w: 3 }) + P1.pts([[v4, p1], [v1, p1]], { c: 'green', w: 3 });
         s += st(P1, v1, p1, '1', 8, 14) + st(P1, v2, p2, '2', -14, -4) + st(P1, v3, p2, '3', 6, -8) + st(P1, v4, p1, '4', 0, 18);
         const P2 = L.plot(500, 330, 330, 230, 0, 1, 0, 1.1);
         s += sub(L, 665, 58, 'T-s diagram') + P2.axes('s', 'T');
         const c = Math.log(0.9 / 0.55) / 0.4;
         s += P2.pts([[0.65, 0.6], [0.65, 0.9]], { c: 'blue', w: 3 }) + P2.pts(seg((x) => 0.9 * Math.exp((x - 0.65) * c), 0.65, 0.25, 20), { c: 'red', w: 3 }) + P2.pts([[0.25, 0.55], [0.25, 0.55 * 0.667]], { c: 'blue', w: 3 }) + P2.pts(seg((x) => 0.55 * 0.667 * Math.exp((x - 0.25) * c), 0.25, 0.65, 20), { c: 'green', w: 3 });
         s += st(P2, 0.65, 0.6, '1', 8, 14) + st(P2, 0.65, 0.9, '2', 8, -6) + st(P2, 0.25, 0.55, '3', -16, -6) + st(P2, 0.25, 0.55 * 0.667, '4', -16, 14);
         s += L.note(40, 365, ['COP = T_{1} / (T_{2} - T_{1}) = 1 / (r_{p}^{(\\gamma-1)/\\gamma} - 1);  always lower than the Carnot COP between the same extreme temperatures', 'Used in aircraft cooling (cabin air itself is the refrigerant); heat is absorbed and rejected at variable temperatures, not constant temperature', 'Reduced ambient (Joule) type: low COP, large volumes, but light, safe and no condensation problems'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'psychrometric-chart-processes', w: 900, h: 480, file: F2, section: 'A3.',
      title: 'Psychrometric Chart and Basic Processes',
      caption: 'Sensible heating and cooling, humidification, dehumidification, adiabatic saturation and mixing',
      draw: (L) => {
         const P = L.plot(90, 360, 560, 290, 0, 1, 0, 1.05);
         let s = P.axes('Dry-bulb temperature t_{db}', 'Specific humidity W');
         s += P.fn((x) => Math.pow(x, 2.4) * 0.95, 0.05, 1, { c: 'blue', w: 3 });
         s += P.text(0.55, 0.25, '100% RH (saturation)', { size: 12, c: 'blue', bold: true, dx: -50, dy: 20 });
         s += P.fn((x) => Math.pow(x, 2.4) * 0.5, 0.05, 1, { c: 'grey', w: 1.5, dash: '4 3' }) + P.text(0.82, 0.3, '50% RH', { size: 11, c: 'grey', dx: 10, dy: 40 });
         const S = [0.45, 0.2], H = [0.85, 0.2], C = [0.25, 0.2], Hm = [0.45, 0.4], Dh = [0.45, 0.04];
         s += P.dot(S[0], S[1], { c: 'red' }) + P.text(S[0], S[1], 'A', { dx: -14, dy: 16, bold: true });
         s += P.pts([S, H], { c: 'red', w: 3, arrow: true }) + P.text(0.65, 0.2, 'sensible heating', { size: 11, c: 'red', bold: true, dy: 18, anchor: 'middle' });
         s += P.pts([S, C], { c: 'blue', w: 3, arrow: true }) + P.text(0.3, 0.2, 'sensible cooling', { size: 11, c: 'blue', bold: true, dy: 18, anchor: 'middle', dx: -8 });
         s += P.pts([S, Hm], { c: 'green', w: 3, arrow: true }) + P.text(0.45, 0.4, 'humidification', { size: 11, c: 'green', bold: true, dx: 10, dy: -6 });
         s += P.pts([S, [0.38, 0.12]], { c: 'purple', w: 3, arrow: true }) + P.text(0.38, 0.12, 'cooling + dehumidification', { size: 11, c: 'purple', bold: true, dx: -150, dy: 20 });
         s += P.pts([S, [0.58, 0.32]], { c: 'orange', w: 2.5, arrow: true }) + P.text(0.58, 0.32, 'adiabatic saturation (WBT line)', { size: 11, c: 'orange', bold: true, dx: 6, dy: -12 });
         s += P.dot(0.7, 0.62, { c: 'ink' }) + P.text(0.7, 0.62, 'mixing: point lies on the straight line between the two streams, divided in the mass ratio', { size: 10.5, dx: -300, dy: -14, c: 'ink' });
         s += L.note(40, 400, ['Specific humidity W = 0.622 p_{v}/(p - p_{v});  relative humidity \\phi = p_{v}/p_{sat};  dew point = saturation temperature at p_{v}', 'Sensible heat factor SHF = sensible / (sensible + latent) = horizontal move / total move on the chart'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'cooling-coil-adp-bypass', w: 900, h: 480, file: F2, section: 'A5.',
      title: 'Cooling Coil: ADP, Bypass Factor and SHF Line',
      caption: 'Entering air moves along a straight line towards the apparatus dew point (ADP); the bypass factor sets how far it gets',
      draw: (L) => {
         const P = L.plot(90, 340, 440, 250, 0, 1, 0, 1.05);
         let s = P.axes('Dry-bulb temperature', 'Specific humidity W');
         s += P.fn((x) => Math.pow(x, 2.4) * 0.95, 0.05, 1, { c: 'blue', w: 3 });
         const E = [0.85, 0.46], A = [0.35, Math.pow(0.35, 2.4) * 0.95];
         const B = 0.3, X = [A[0] + B * (E[0] - A[0]), A[1] + B * (E[1] - A[1])];
         s += P.pts([E, A], { c: 'purple', w: 2.5 }) + P.dot(E[0], E[1], { c: 'red' }) + P.dot(A[0], A[1], { c: 'blue' }) + P.dot(X[0], X[1], { c: 'green' });
         s += P.text(E[0], E[1], 'Entering air', { dx: -90, dy: -10, size: 12, bold: true, c: 'red' }) + P.text(A[0], A[1], 'ADP (coil surface)', { dx: 6, dy: 24, size: 12, bold: true, c: 'blue' }) + P.text(X[0], X[1], 'Leaving air', { dx: -90, dy: -4, size: 12, bold: true, c: 'green' });
         s += P.pts([[E[0], E[1]], [E[0], X[1]], [X[0], X[1]]], { c: 'grey', w: 1.2, dash: '4 3' });
         s += P.text(E[0], (E[1] + X[1]) / 2, 'latent', { dx: 6, size: 11, c: 'grey' }) + P.text((E[0] + X[0]) / 2, X[1], 'sensible', { dy: 18, size: 11, c: 'grey', anchor: 'middle' });
         s += L.box(580, 90, 280, 120, 'Bypass factor\nBF = (t_{out} - t_{ADP}) / (t_{in} - t_{ADP})\nContact factor  1 - BF\nDeeper coil / lower velocity: smaller BF', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(580, 225, ['SHF = sensible / (sensible + latent)', 'The coil process line goes from entering', 'state through leaving state to ADP;', 'its slope is set by the SHF of the room'], { w: 280, size: 11 });
         s += L.note(40, 395, ['Room SHF line on the chart through the room state; ADP found where this line (extended) meets the saturation curve'], { w: 820, size: 11.5 });
         return s;
      }
   }
];
