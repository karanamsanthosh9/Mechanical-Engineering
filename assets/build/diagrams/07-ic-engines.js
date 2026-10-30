'use strict';
// Batch 07: Internal combustion engines
const F = '07-IC-Engines/01-ic-engines.md';
const FOLDER = '07-ic-engines';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

// Cylinder, piston and valves drawn at (cx, top) with piston position pos (0 = TDC, 1 = BDC)
const cyl = (L, cx, top, pos, inOpen, exOpen, title, col) => {
   const w = 90, hgt = 150;
   const py = top + 22 + pos * 80;
   let s = L.line(cx - w / 2, top, cx - w / 2, top + hgt, { w: 3 }) + L.line(cx + w / 2, top, cx + w / 2, top + hgt, { w: 3 });
   s += L.line(cx - w / 2, top, cx + w / 2, top, { w: 3 });
   s += L.rect(cx - w / 2 + 3, py, w - 6, 18, { f: 'lgrey', s: 'ink', w: 2 });
   s += L.line(cx, py + 18, cx, top + hgt + 16, { c: 'grey', w: 3 }) + L.circle(cx, top + hgt + 26, 9, { s: 'grey', w: 2 });
   s += L.line(cx - 22, top - 18, cx - 22, top + (inOpen ? 16 : 0), { c: 'blue', w: 3 }) + L.line(cx + 22, top - 18, cx + 22, top + (exOpen ? 16 : 0), { c: 'red', w: 3 });
   if (inOpen) s += L.line(cx - 32, top + 16, cx - 12, top + 16, { c: 'blue', w: 4 });
   if (exOpen) s += L.line(cx + 12, top + 16, cx + 32, top + 16, { c: 'red', w: 4 });
   s += L.text(cx - 22, top - 24, 'IV', { anchor: 'middle', size: 11, c: 'blue', bold: true }) + L.text(cx + 22, top - 24, 'EV', { anchor: 'middle', size: 11, c: 'red', bold: true });
   s += L.text(cx, top + hgt + 58, title, { anchor: 'middle', bold: true, size: 13, c: col });
   return s;
};

module.exports = [
   {
      folder: FOLDER, name: 'four-stroke-cycle', w: 900, h: 480, file: F, section: 'A3.',
      title: 'Four-Stroke Engine: The Four Strokes',
      caption: 'Intake, compression, power and exhaust strokes with valve states (IV = inlet valve, EV = exhaust valve)',
      draw: (L) => {
         let s = '';
         s += cyl(L, 120, 100, 1, true, false, 'Suction', 'blue') + L.arrow(120, 140, 120, 185, { c: 'blue', w: 2.5 });
         s += cyl(L, 345, 100, 0.0, false, false, 'Compression', 'orange') + L.arrow(370, 235, 370, 185, { c: 'orange', w: 2.5 });
         s += cyl(L, 570, 100, 1, false, false, 'Power (expansion)', 'red') + L.text(570, 140, '* spark', { anchor: 'middle', size: 11, c: 'red', bold: true }) + L.arrow(570, 152, 570, 185, { c: 'red', w: 2.5 });
         s += cyl(L, 785, 100, 0.0, false, true, 'Exhaust', 'green') + L.arrow(810, 235, 810, 185, { c: 'green', w: 2.5 });
         s += L.text(120, 326, 'piston moves down', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(345, 326, 'piston moves up', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(570, 326, 'piston moves down', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(785, 326, 'piston moves up', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.note(40, 360, ['One cycle = 4 strokes = 2 crankshaft revolutions (720 deg); one power stroke per 2 revolutions', 'Valve events: IV open in suction, both closed in compression and power, EV open in exhaust (in practice they overlap near TDC)', 'Cam shaft runs at half the crank speed; one valve opening per two crank revolutions'], { w: 820, size: 12 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'two-stroke-engine', w: 900, h: 480, file: F, section: 'A4.',
      title: 'Two-Stroke Engine: Crankcase-Scavenged Port Type',
      caption: 'Piston uncovers inlet, transfer and exhaust ports; the crankcase serves as the scavenging pump',
      draw: (L) => {
         let s = '';
         s += L.rect(120, 90, 100, 200, { f: 'lgrey', s: 'ink', w: 3 }) + L.rect(120, 290, 100, 70, { f: 'lblue', s: 'blue', w: 2 });
         s += L.rect(124, 150, 92, 22, { f: 'lorange', s: 'ink', w: 2 });
         s += L.line(170, 172, 170, 300, { c: 'grey', w: 3 }) + L.circle(170, 310, 12, { s: 'grey', w: 2 });
         s += L.arrow(40, 270, 120, 270, { c: 'blue', w: 2.5 }) + L.text(40, 258, 'inlet port', { size: 12, c: 'blue', bold: true });
         s += L.arrow(220, 240, 220, 200, { c: 'purple', w: 2 }) + L.text(230, 230, 'transfer port', { size: 12, c: 'purple', bold: true });
         s += L.arrow(220, 130, 290, 130, { c: 'red', w: 2.5 }) + L.text(230, 120, 'exhaust port', { size: 12, c: 'red', bold: true });
         s += L.text(170, 380, 'Crankcase (pre-compression)', { anchor: 'middle', size: 12, c: 'blue' });
         s += sub(L, 170, 70, 'Piston near TDC');
         s += L.rect(420, 90, 100, 200, { f: 'lgrey', s: 'ink', w: 3 }) + L.rect(420, 290, 100, 70, { f: 'lblue', s: 'blue', w: 2 });
         s += L.rect(424, 230, 92, 22, { f: 'lorange', s: 'ink', w: 2 });
         s += L.line(470, 252, 470, 300, { c: 'grey', w: 3 }) + L.circle(470, 310, 12, { s: 'grey', w: 2 });
         s += L.arrow(520, 130, 590, 130, { c: 'red', w: 2.5 }) + L.arrow(520, 240, 520, 180, { c: 'purple', w: 2 });
         s += L.arrow(430, 210, 430, 160, { c: 'green', w: 2 });
         s += sub(L, 470, 70, 'Piston at BDC');
         s += L.note(620, 90, ['Strokes per cycle: 2 (1 revolution)', 'Power stroke every revolution', 'Scavenging: fresh charge pushes out', 'burnt gas (loop, cross or uniflow)', 'Fuel loss through exhaust port in', 'petrol two-strokes'], { w: 260, size: 11.5 });
         s += L.note(40, 400, ['Versus 4-stroke of same size: about 1.6-1.8 times the power (not 2 times, scavenging loss), simpler, more fuel and emissions', 'Mixed (petrol-oil) lubrication in small SI two-strokes; diesel two-strokes use a blower and exhaust valves (uniflow)'], { w: 820, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'valve-timing-diagram', w: 900, h: 480, file: F, section: 'A3.',
      title: 'Valve Timing Diagram (Four-Stroke SI Engine)',
      caption: 'Typical valve events: valves open before dead centre and close after it; both are open during overlap near TDC',
      draw: (L) => {
         const cx = 330, cy = 265;
         let s = L.circle(cx, cy, 150, { s: 'border', w: 1 });
         s += L.line(cx - 190, cy, cx + 190, cy, { c: 'grey', w: 1, dash: '4 3' }) + L.line(cx, cy - 165, cx, cy + 165, { c: 'grey', w: 1, dash: '4 3' });
         s += L.text(cx, cy - 172, 'TDC', { anchor: 'middle', bold: true }) + L.text(cx, cy + 190, 'BDC', { anchor: 'middle', bold: true });
         s += L.arc(cx, cy, 128, 80, 310, { c: 'blue', w: 7 }) + L.arc(cx, cy, 108, 225, 465, { c: 'red', w: 7 }) + L.arc(cx, cy, 150, 80, 105, { c: 'purple', w: 5 });
         const lead = (r, ang, tx, ty, txt, col, anc) => {
            const p = L.pol(cx, cy, r, ang);
            return L.line(p[0], p[1], tx, ty, { c: col, w: 1 }) + L.text(tx + (anc === 'end' ? -4 : 4), ty + 4, txt, { size: 11, c: col, bold: true, anchor: anc });
         };
         s += lead(128, 80, cx + 90, cy - 185, 'IVO: 10 deg before TDC', 'blue', 'start');
         s += lead(108, 105, cx - 60, cy - 185, 'EVC: 15 deg after TDC', 'red', 'end');
         s += lead(128, 310, cx + 190, cy + 125, 'IVC: 40 deg after BDC', 'blue', 'start');
         s += lead(108, 225, cx - 150, cy + 150, 'EVO: 45 deg before BDC', 'red', 'end');
         s += L.text(cx, cy - 40, 'Valve overlap (purple)', { anchor: 'middle', size: 11, c: 'purple', bold: true }) + L.text(cx, cy - 24, 'about 25 deg near TDC', { anchor: 'middle', size: 11, c: 'purple' });
         s += L.text(cx, cy + 30, 'Crank angle rotation', { anchor: 'middle', size: 11, c: 'grey' }) + L.text(cx, cy + 46, 'counter-clockwise here', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.legend(620, 110, ['Blue arc: inlet valve open', 'Red arc: exhaust valve open'], { size: 12 });
         s += L.note(600, 200, ['Reasons for early opening and late closing:', 'Inlet: IVO before TDC lets valve open', 'fully when suction begins; IVC after', 'BDC uses ram effect of inflow', 'Exhaust: EVO before BDC lets pressure', 'fall so less back work', 'Overlap: scavenging and cooling'], { w: 280, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'actual-pv-and-indicator-diagram', w: 900, h: 480, file: F, section: 'A6.',
      title: 'Actual P-V Diagrams: Four-Stroke and Two-Stroke Engines',
      caption: 'Pumping loop and indicated work of a four-stroke engine; indicator diagram for a two-stroke engine',
      draw: (L) => {
         const P1 = L.plot(70, 340, 330, 240, 0, 1, 0, 1.1);
         let s = sub(L, 235, 58, 'Four-stroke (log p-V idea)') + P1.axes('V', 'p');
         const cu = [[1, 0.18]].concat(seg((v) => Math.min(0.18 * Math.pow(1 / v, 1.32), 0.9), 1, 0.12, 30).map((p) => [p[0], p[1]]));
         s += P1.pts(cu, { c: 'blue', w: 3 });
         s += P1.pts([[0.12, 0.9], [0.12, 1.02], [0.2, 1.05], [0.3, 0.85]], { c: 'red', w: 3 }) + P1.pts(seg((v) => 0.72 * Math.pow(0.3 / v, 1.3), 0.3, 1, 30).map((p) => [p[0], p[1]]).concat([[1, 0.26]]), { c: 'red', w: 3 });
         s += P1.pts([[1, 0.26], [1, 0.12], [0.12, 0.12]], { c: 'green', w: 2 }) + P1.pts([[0.12, 0.1], [1, 0.1]], { c: 'purple', w: 2 });
         s += P1.hline(0.14, 0, 1, { c: 'grey' }) + P1.text(1, 0.14, 'p_{atm}', { dx: 4, size: 11, c: 'grey' });
         s += P1.text(0.6, 0.55, 'Power loop\n(positive work)', { size: 12, c: 'red', bold: true }) + P1.text(0.05, 0.05, 'Pumping loop\n(negative work)', { size: 11, c: 'purple', bold: true, dy: 24 });
         const P2 = L.plot(500, 340, 330, 240, 0, 1, 0, 1.1);
         s += sub(L, 665, 58, 'Two-stroke indicator diagram') + P2.axes('V', 'p');
         s += P2.pts([[0.5, 0.15], [0.12, 0.8], [0.12, 1.0], [0.3, 0.7], [0.75, 0.3], [0.9, 0.18]], { c: 'red', w: 3 }) + P2.pts([[0.9, 0.18], [1, 0.14], [0.5, 0.15]], { c: 'green', w: 2 });
         s += P2.text(0.9, 0.18, 'exhaust\nport opens', { size: 11, c: 'grey', dx: -30, dy: -34 }) + P2.text(0.5, 0.15, 'ports closed', { size: 11, c: 'grey', dx: -12, dy: 24, anchor: 'middle' });
         s += L.note(70, 385, ['Indicated work = area of the power loop minus the pumping loop (for naturally aspirated engines the loop is small and negative)', 'IMEP = net indicator area / stroke length x spring constant;  IP = IMEP x L x A x N x n / 60 (N = power strokes per min)'], { w: 760, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'engine-performance-curves', w: 900, h: 480, file: F, section: 'A6.',
      title: 'Engine Performance Characteristics',
      caption: 'Brake power, torque, and specific fuel consumption against speed (full-throttle SI engine)',
      draw: (L) => {
         const P = L.plot(100, 380, 560, 280, 0, 1, 0, 1.15);
         let s = P.axes('Engine speed N', '');
         s += P.fn((x) => 1.5 * x - 0.65 * x * x * x - 0.05, 0.1, 1, { c: 'blue', w: 3 });
         s += P.fn((x) => 0.95 + 0.25 * x - 0.55 * x * x, 0.1, 1, { c: 'green', w: 3 });
         s += P.fn((x) => 0.55 + 1.3 * Math.pow(x - 0.52, 2), 0.1, 1, { c: 'red', w: 3 });
         s += P.vline(0.52, 0, 0.55, { c: 'red' }) + P.dot(0.52, 0.55, { c: 'red' }) + P.text(0.52, 0.55, 'minimum bsfc', { dx: 10, dy: 20, size: 12, c: 'red', bold: true });
         s += P.text(0.82, 0.85, 'Brake power', { size: 12, c: 'blue', bold: true, dy: -6 }) + P.text(0.1, 1.12, 'Torque', { size: 12, c: 'green', bold: true, dy: -8 }) + P.text(0.1, 0.9, 'bsfc', { size: 12, c: 'red', bold: true, dx: 4 });
         s += P.vline(0.4, 0, 1.1, { c: 'green' }) + P.text(0.4, 1.0, 'max torque', { dx: 6, dy: -20, size: 11, c: 'green' });
         s += P.vline(0.75, 0, 1.0, { c: 'blue' }) + P.text(0.75, 1.0, 'max power', { dx: 6, dy: -8, size: 11, c: 'blue' });
         s += L.note(100, 420, ['Torque peaks at moderate speed (best volumetric efficiency); power peaks at higher speed; bsfc is lowest in between', 'bp = 2 \\pi N T / 60;  \\eta_{mech} = bp / ip;  bsfc = fuel flow / bp;  \\eta_{bt} = bp / (m_{f} x CV)'], { w: 700, size: 11.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'si-vs-ci-comparison', w: 900, h: 480, file: F, section: 'A5.',
      title: 'SI versus CI Engine: Key Differences',
      caption: 'Comparison of working cycle, fuel, compression ratio, and combustion control',
      draw: (L) => {
         let s = L.rect(50, 70, 380, 330, { f: 'lblue', s: 'blue', w: 1.5, r: 6 }) + L.rect(470, 70, 380, 330, { f: 'lorange', s: 'orange', w: 1.5, r: 6 });
         s += L.text(240, 98, 'SI engine (petrol)', { anchor: 'middle', bold: true, size: 15, c: 'blue' }) + L.text(660, 98, 'CI engine (diesel)', { anchor: 'middle', bold: true, size: 15, c: 'orange' });
         const rows = [['Cycle', 'Otto (constant volume)', 'Diesel / Dual'], ['Charge in suction', 'Air + fuel (carburetor / MPFI)', 'Air only'], ['Ignition', 'Spark plug', 'Compression (auto-ignition)'], ['Compression ratio', '6 to 10', '14 to 22'], ['Fuel property', 'High octane number', 'High cetane number'], ['Load control', 'Quantity governing (throttle)', 'Quality governing (fuel amount)'], ['Abnormal combustion', 'Knock (end gas auto-ignites)', 'Diesel knock (long delay period)'], ['Thermal efficiency', 'Lower (lower r)', 'Higher (higher r)'], ['Weight / cost', 'Lighter, cheaper', 'Heavier, costlier']];
         rows.forEach((r, i) => {
            const y = 126 + i * 30;
            s += L.text(240, y, r[1], { anchor: 'middle', size: 12 }) + L.text(660, y, r[2], { anchor: 'middle', size: 12 });
            s += L.text(60, y + 14, r[0], { size: 10, c: 'grey' });
         });
         s += L.note(50, 415, ['Same compression ratio: Otto is more efficient than Diesel; in practice diesel wins because its r is much higher'], { w: 800, size: 12 });
         return s;
      }
   }
];
