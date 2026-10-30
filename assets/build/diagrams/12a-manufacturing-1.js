'use strict';
// Batch 12a: Manufacturing - casting, welding, forming
const F1 = '12-Manufacturing-Processes/01-casting.md';
const F2 = '12-Manufacturing-Processes/02-welding.md';
const F3 = '12-Manufacturing-Processes/03-metal-forming.md';
const FOLDER = '12-manufacturing';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'sand-mould-parts-gating', w: 900, h: 480, file: F1, section: 'A6.',
      title: 'Sand Mould: Parts of the Gating and Riser System',
      caption: 'Pouring basin, sprue, runner, gate, riser and cavity in a two-part (cope and drag) mould',
      draw: (L) => {
         let s = L.rect(100, 120, 500, 100, { f: 'lorange', s: 'ink', w: 2 }) + L.rect(100, 220, 500, 100, { f: 'lorange', s: 'ink', w: 2 });
         s += L.text(60, 175, 'Cope', { size: 12, bold: true, anchor: 'middle' }) + L.text(60, 275, 'Drag', { size: 12, bold: true, anchor: 'middle' });
         s += L.line(100, 220, 600, 220, { c: 'grey', dash: '5 3', w: 1.5 }) + L.text(612, 224, 'Parting line', { size: 11, c: 'grey' });
         s += L.poly([[150, 90], [230, 90], [215, 120], [165, 120]], { f: 'lblue', s: 'blue', w: 2 }) + L.text(190, 82, 'Pouring basin', { anchor: 'middle', size: 11, c: 'blue', bold: true });
         s += L.poly([[180, 120], [200, 120], [196, 260], [184, 260]], { f: 'lblue', s: 'blue', w: 1.5 }) + L.text(236, 170, 'Sprue', { size: 11, c: 'blue', bold: true });
         s += L.rect(184, 260, 160, 14, { f: 'lblue', s: 'blue', w: 1.5 }) + L.text(250, 296, 'Runner', { size: 11, c: 'blue', bold: true, anchor: 'middle' });
         s += L.rect(344, 255, 40, 24, { f: 'lblue', s: 'blue', w: 1.5 }) + L.text(364, 300, 'Gate', { size: 11, c: 'blue', bold: true, anchor: 'middle' });
         s += L.rect(384, 230, 130, 70, { f: 'lred', s: 'red', w: 2 }) + L.text(449, 270, 'Casting cavity', { size: 12, anchor: 'middle', bold: true, c: 'red' });
         s += L.poly([[470, 230], [510, 230], [506, 140], [474, 140]], { f: 'lgreen', s: 'green', w: 2 }) + L.text(490, 130, 'Riser', { size: 12, anchor: 'middle', bold: true, c: 'green' });
         s += L.rect(300, 232, 60, 12, { f: 'lgrey', s: 'ink', w: 1 });
         s += L.arrow(190, 70, 190, 100, { c: 'blue', w: 2.5 }) + L.text(300, 345, 'Molten metal flows: basin > sprue > runner > gate > cavity > riser', { size: 12, c: 'grey' });
         s += L.note(40, 365, ['Sprue is tapered (narrower at bottom) to avoid aspiration', 'Gating ratio sprue : runner : gate = 1 : 2 : 2 or 1 : 3 : 3 (unpressurised); 3 : 2 : 1 (pressurised)', 'Riser feeds shrinkage: solidifies last; Chvorinov t = B (V/A)^{2}; riser volume/surface-area ratio must exceed that of the casting', 'Chills (metal inserts) promote directional solidification toward the riser'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'casting-pattern-allowances', w: 900, h: 480, file: F1, section: 'A3.',
      title: 'Pattern Allowances and Core Prints',
      caption: 'Shrinkage, machining, draft, shake and distortion allowances applied to a pattern',
      draw: (L) => {
         let s = L.poly([[80, 240], [80, 140], [170, 140], [170, 100], [290, 100], [290, 240]], { f: 'lblue', s: 'blue', w: 2 });
         s += L.poly([[60, 255], [60, 125], [150, 125], [150, 85], [310, 85], [310, 255]], { s: 'orange', w: 1.5, dash: '6 3' });
         s += L.text(185, 190, 'Casting', { size: 13, anchor: 'middle', bold: true, c: 'blue' }) + L.text(185, 275, 'Pattern (dashed) larger by allowances', { size: 12, anchor: 'middle', c: 'orange', bold: true });
                  s += L.poly([[430, 240], [430, 120], [560, 120], [560, 240]], { f: 'lgrey', s: 'ink', w: 2 }) + L.poly([[420, 240], [440, 120], [550, 120], [570, 240]], { s: 'red', w: 1.5, dash: '5 3' });
         s += L.text(495, 185, 'Draft', { size: 12, anchor: 'middle', bold: true, c: 'red' }) + L.text(495, 275, 'taper helps pattern withdrawal (0.5-2 deg)', { size: 11, anchor: 'middle', c: 'grey' });
         s += L.rect(660, 140, 120, 80, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(780, 165, 40, 30, { f: 'lorange', s: 'orange', w: 2 }) + L.rect(620, 165, 40, 30, { f: 'lorange', s: 'orange', w: 2 });
         s += L.text(720, 185, 'Pattern', { size: 12, anchor: 'middle', bold: true }) + L.text(800, 210, 'Core print', { size: 11, anchor: 'middle', c: 'orange', bold: true }) + L.text(720, 262, 'Core prints support the core', { size: 11, anchor: 'middle', c: 'grey' });
         s += L.note(40, 300, ['Shrinkage allowance: pattern larger by a contraction fraction (cast iron 1%, steel 2%, aluminium 1.3%) - use a shrink rule', 'Machining allowance: extra stock for finishing; Draft allowance: taper on vertical faces; Shake (rapping) allowance: pattern made smaller', 'Distortion allowance: for U or V shaped castings that warp on cooling', 'Pattern materials: wood (few castings), metal (production), wax (investment), plastics', 'Pattern colour code: red = machined surfaces, black = unmachined, yellow = core prints'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'welding-joints-and-arc', w: 900, h: 480, file: F2, section: 'A3.',
      title: 'Arc Welding: Circuit, Zones and Basic Joint Types',
      caption: 'SMAW arrangement with weld pool and heat affected zone; five basic joint configurations',
      draw: (L) => {
         let s = sub(L, 220, 58, 'Shielded metal arc welding');
         s += L.rect(60, 250, 300, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.poly([[150, 250], [270, 250], [250, 270], [170, 270]], { f: 'lred', s: 'red', w: 1.5 });
         s += L.line(210, 100, 210, 220, { c: 'grey', w: 6 }) + L.rect(205, 120, 10, 100, { f: 'lorange', s: 'orange', w: 1 });
         s += L.polyline([[196, 240], [210, 225], [224, 240]], { c: 'red', w: 3 }) + L.text(250, 232, 'Arc', { size: 11, c: 'red', bold: true });
         s += L.text(210, 95, 'Electrode (flux coated)', { anchor: 'middle', size: 11, bold: true }) + L.text(210, 310, 'Weld metal + HAZ + base metal', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.line(60, 290, 40, 330, { c: 'blue', w: 2 }) + L.line(210, 100, 110, 80, { c: 'blue', w: 2 }) + L.box(20, 330, 120, 36, 'Power source', { f: 'lblue', s: 'blue', size: 11 });
         s += L.text(240, 160, 'Gas shield and slag\nprotect the pool', { size: 11, c: 'green', bold: true });
         s += sub(L, 670, 58, 'Joint types');
         const js = ['Butt', 'Lap', 'Corner', 'T-joint', 'Edge'];
         js.forEach((n, i) => {
            const x = 500 + (i % 3) * 120, y = 100 + Math.floor(i / 3) * 120;
            s += L.text(x + 40, y + 70, n, { anchor: 'middle', size: 12, bold: true });
            if (n === 'Butt') s += L.rect(x, y + 10, 36, 20, { f: 'lgrey', s: 'ink' }) + L.rect(x + 40, y + 10, 36, 20, { f: 'lgrey', s: 'ink' });
            if (n === 'Lap') s += L.rect(x, y + 10, 50, 14, { f: 'lgrey', s: 'ink' }) + L.rect(x + 30, y + 24, 50, 14, { f: 'lgrey', s: 'ink' });
            if (n === 'Corner') s += L.rect(x, y + 10, 60, 14, { f: 'lgrey', s: 'ink' }) + L.rect(x, y + 24, 14, 36, { f: 'lgrey', s: 'ink' });
            if (n === 'T-joint') s += L.rect(x, y + 30, 70, 14, { f: 'lgrey', s: 'ink' }) + L.rect(x + 28, y, 14, 30, { f: 'lgrey', s: 'ink' });
            if (n === 'Edge') s += L.rect(x, y + 10, 60, 10, { f: 'lgrey', s: 'ink' }) + L.rect(x, y + 20, 60, 10, { f: 'lgrey', s: 'ink' });
         });
         s += L.note(40, 375, ['Heat input H = (V I / v) x efficiency;  straight polarity (electrode negative): more heat at workpiece', 'Reverse polarity (electrode positive): more heat at the electrode, better surface cleaning', 'Zones: fusion zone, heat affected zone (microstructure change), base metal; Preheat and post-heat reduce cracking in steels'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'gas-welding-flame-types', w: 900, h: 480, file: F2, section: 'A2.',
      title: 'Oxy-Acetylene Flames: Neutral, Carburising and Oxidising',
      caption: 'Flame zones and the ratio of oxygen to acetylene for each flame type',
      draw: (L) => {
         const flame = (x, ttl, inner, ratio, col, desc) => {
            let s = L.text(x + 80, 90, ttl, { anchor: 'middle', bold: true, size: 14, c: col });
            s += L.rect(x, 140, 50, 30, { f: 'lgrey', s: 'ink', w: 2 });
            s += L.poly([[x + 50, 145], [x + 170, 155], [x + 170, 165], [x + 50, 165]], { f: 'lblue', s: 'blue', w: 1.5 }) + L.poly([[x + 50, 148], [x + 200, 154], [x + 200, 166], [x + 50, 162]], { f: 'lorange', s: 'orange', w: 1 });
            s += L.poly([[x + 50, 152], [x + inner, 156], [x + inner, 162], [x + 50, 160]], { f: 'lblue', s: 'blue', w: 1.5 });
            s += L.text(x + 80, 215, ratio, { anchor: 'middle', size: 12, bold: true }) + L.text(x + 80, 235, desc, { anchor: 'middle', size: 11, c: 'grey' });
            return s;
         };
         let s = flame(30, 'Neutral', 130, 'O2 : C2H2 = 1 : 1', 'blue', 'Used for steel, cast iron, copper');
         s += flame(320, 'Carburising (reducing)', 160, 'O2 : C2H2 < 1', 'orange', 'Excess acetylene: Monel, nickel, hard facing');
         s += flame(610, 'Oxidising', 100, 'O2 : C2H2 > 1.15', 'red', 'Excess oxygen: brass, bronze (hot, short flame)');
         s += L.note(40, 280, ['Neutral flame: inner cone (about 3200 C) is bright blue with a sharp outline; outer envelope light blue', 'Carburising flame: acetylene feather extends beyond the inner cone; adds carbon; oxidising flame: short, hissing, pointed inner cone', 'Leftward (forward) welding: thin sheets up to 5 mm; Rightward (backward): thicker plate, uses less filler'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'rolling-forging-extrusion-drawing', w: 900, h: 480, file: F3, section: 'A3.',
      title: 'Bulk Forming: Rolling, Forging, Extrusion and Drawing',
      caption: 'Schematic of the four main bulk deformation processes',
      draw: (L) => {
         let s = sub(L, 120, 58, 'Rolling');
         s += L.circle(120, 130, 38, { f: 'lgrey', s: 'ink', w: 2 }) + L.circle(120, 218, 38, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(30, 164, 90, 20, { f: 'lblue', s: 'blue' }) + L.rect(120, 168, 100, 12, { f: 'lblue', s: 'blue' });
         s += L.text(120, 275, 'h_{0} to h_{f};  draft = h_{0} - h_{f}', { anchor: 'middle', size: 11 }) + L.text(120, 292, 'Max draft = \\mu^{2} R', { anchor: 'middle', size: 11, c: 'grey' });
         s += sub(L, 340, 58, 'Forging');
         s += L.rect(290, 100, 100, 30, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(290, 200, 100, 30, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(300, 140, 80, 50, { f: 'lblue', s: 'blue' }) + L.arrow(340, 80, 340, 98, { c: 'red', w: 3 });
         s += L.text(340, 255, 'Upsetting: reduces height,', { anchor: 'middle', size: 11 }) + L.text(340, 272, 'increases cross-section', { anchor: 'middle', size: 11 }) + L.text(340, 292, 'Open die / closed die / press', { anchor: 'middle', size: 11, c: 'grey' });
         s += sub(L, 560, 58, 'Extrusion');
         s += L.poly([[480, 120], [570, 120], [570, 220], [480, 220]], { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(485, 140, 55, 60, { f: 'lblue', s: 'blue' }) + L.rect(440, 150, 45, 40, { f: 'lred', s: 'red' }) + L.poly([[570, 150], [640, 160], [640, 180], [570, 190]], { f: 'lblue', s: 'blue' });
         s += L.text(560, 255, 'Direct (forward): billet moves with ram,', { anchor: 'middle', size: 11 }) + L.text(560, 272, 'Indirect: die moves; less friction', { anchor: 'middle', size: 11 }) + L.text(560, 292, 'Extrusion ratio R = A_{0}/A_{f}', { anchor: 'middle', size: 11, c: 'grey' });
         s += sub(L, 790, 58, 'Wire drawing');
         s += L.poly([[750, 140], [810, 160], [810, 180], [750, 200]], { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(700, 150, 55, 40, { f: 'lblue', s: 'blue' }) + L.rect(810, 163, 60, 14, { f: 'lblue', s: 'blue' }) + L.arrow(810, 170, 880, 170, { c: 'red', w: 3 });
         s += L.text(790, 255, 'Reduction = (A_{0} - A_{f})/A_{0}', { anchor: 'middle', size: 11 }) + L.text(790, 272, 'Drawing stress < yield of product', { anchor: 'middle', size: 11, c: 'grey' });
         s += L.note(40, 320, ['Hot working: above recrystallisation temperature (0.5-0.7 T_{m}); no strain hardening, closes porosity', 'Cold working: better finish and accuracy, but strain hardening', 'Rolling defects: edge cracks, alligatoring, wavy edges; Forging defects: flash, cold shut, scale pits | Extrusion: centre-burst (chevron) crack', 'True strain \\epsilon = ln(l/l_{0}) = ln(A_{0}/A);  work of deformation per unit volume = \\sigma_{avg} \\epsilon'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'sheet-metal-blanking-drawing', w: 900, h: 480, file: F3, section: 'A8.',
      title: 'Sheet Metal: Blanking, Bending and Deep Drawing',
      caption: 'Punch and die clearance, springback in bending, and cup drawing with blank holder',
      draw: (L) => {
         let s = sub(L, 150, 58, 'Blanking / piercing');
         s += L.rect(120, 100, 40, 80, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(60, 190, 70, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(150, 190, 70, 40, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(60, 180, 160, 10, { f: 'lblue', s: 'blue', w: 2 });
         s += L.text(150, 255, 'Clearance c each side', { anchor: 'middle', size: 11, c: 'red', bold: true }) + L.text(150, 275, 'F = \\tau_{s} \\pi d t (blank of diameter d)', { anchor: 'middle', size: 11 });
         s += L.text(150, 295, 'Blanking: die size = blank, punch smaller', { anchor: 'middle', size: 10.5, c: 'grey' }) + L.text(150, 310, 'Piercing: punch size = hole, die larger', { anchor: 'middle', size: 10.5, c: 'grey' });
         s += sub(L, 450, 58, 'Bending and springback');
         s += L.polyline([[360, 200], [420, 200], [450, 160], [480, 200], [540, 200]], { c: 'blue', w: 4 }) + L.polyline([[360, 200], [425, 190], [450, 150], [475, 190], [540, 200]], { c: 'red', w: 2, dash: '5 3' });
         s += L.text(450, 135, 'Springback', { anchor: 'middle', size: 11, c: 'red', bold: true }) + L.text(450, 260, 'Neutral axis shifts; bend allowance = \\theta (R + k t)', { anchor: 'middle', size: 11 }) + L.text(450, 280, 'k = 0.33-0.5; compensate by over-bending', { anchor: 'middle', size: 10.5, c: 'grey' });
         s += sub(L, 750, 58, 'Deep drawing');
         s += L.rect(710, 100, 30, 70, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(670, 180, 40, 20, { f: 'lgrey', s: 'ink', w: 2 }) + L.rect(740, 180, 40, 20, { f: 'lgrey', s: 'ink', w: 2 }) + L.polyline([[670, 180], [710, 180], [710, 250], [740, 250], [740, 180], [780, 180]], { c: 'blue', w: 3 });
         s += L.text(750, 285, 'Draw ratio = D/d; limiting draw ratio about 1.8-2.2', { anchor: 'middle', size: 10.5 }) + L.text(750, 303, 'Blank holder prevents wrinkling', { anchor: 'middle', size: 10.5, c: 'grey' });
         s += L.note(40, 335, ['Punch force = shear strength x perimeter x thickness; reduced by shear on punch or die (shear angle); work = 0.4-0.6 F t', 'Clearance (5-10% of sheet thickness each side); too small gives secondary shear; too large gives burrs and poor edge', 'Deep-drawing defects: wrinkling (flange), tearing (cup wall), earing (anisotropy); Lubrication is critical; redrawing needs annealing'], { w: 820, size: 11 });
         return s;
      }
   }
];
