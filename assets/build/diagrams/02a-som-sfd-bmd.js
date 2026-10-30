'use strict';
// Batch 02a: Strength of Materials - SFD / BMD standard cases
const sfd = require('./_sfdbmd');
const FILE = '02-Strength-of-Materials/02-sfd-bmd.md';
const FOLDER = '02-strength-of-materials';
const R = (L, by, x, sup) => (sup === 'pin' ? L.pin(x, by + 3) : L.roller(x, by + 3));
const rl = (L, x, by, t) => L.text(x, by + 108, t, { anchor: 'middle', size: 13, bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'sfd-bmd-ssb-central-load', w: 900, h: 840, file: FILE, section: 'A5.',
      title: 'SFD and BMD: Simply Supported Beam with Central Point Load',
      caption: 'Simply supported beam with a central point load W: shear is +W/2 then -W/2, maximum moment WL/4 at the centre',
      draw: (L) => sfd(L, {
         vmax: 0.5, mmax: 0.25, guides: [0, 0.5, 1],
         loads: (L2, by, x1, x2) => L2.beamLine(x1, x2, by) + R(L2, by, x1, 'pin') + R(L2, by, x2, 'roller') + L2.pload((x1 + x2) / 2, by, 'W') +
            rl(L2, x1, by, 'R_{A} = W/2') + rl(L2, x2, by, 'R_{B} = W/2'),
         Vpts: [[0, 0.5], [0.5, 0.5], [0.5, -0.5], [1, -0.5]],
         Mpts: [[0, 0], [0.5, 0.25], [1, 0]],
         ann: [['V', 0.02, 0.5, '+ W/2', 0, -8], ['V', 0.98, -0.5, '- W/2', 0, 20, 'end'], ['M', 0.5, 0.25, 'M_{max} = WL/4', 0, -12, 'middle']],
         formulas: ['SFD: two rectangles with a jump of W at the load; BMD: triangle (straight lines, slope = V)', 'M_{max} occurs where the shear force changes sign (V = 0 crossing)']
      })
   },
   {
      folder: FOLDER, name: 'sfd-bmd-ssb-udl', w: 900, h: 840, file: FILE, section: 'A5.',
      title: 'SFD and BMD: Simply Supported Beam with UDL',
      caption: 'Simply supported beam with a UDL w per unit length: linear shear from +wL/2 to -wL/2, parabolic moment with maximum wL^2/8 at the centre',
      draw: (L) => sfd(L, {
         vmax: 0.5, mmax: 0.125, guides: [0, 0.5, 1],
         loads: (L2, by, x1, x2) => L2.udl(x1, x2, by, 13) + L2.beamLine(x1, x2, by) + R(L2, by, x1, 'pin') + R(L2, by, x2, 'roller') +
            L2.text((x1 + x2) / 2, by - 44, 'w per unit length', { anchor: 'middle', c: 'red', size: 13 }) + rl(L2, x1, by, 'R_{A} = wL/2') + rl(L2, x2, by, 'R_{B} = wL/2'),
         Vpts: [[0, 0.5], [1, -0.5]],
         Mpts: sfd.sample((f) => 0.5 * f * (1 - f)),
         ann: [['V', 0.02, 0.5, '+ wL/2', 0, -8], ['V', 0.98, -0.5, '- wL/2', 0, 20, 'end'], ['M', 0.5, 0.125, 'M_{max} = wL^{2}/8', 0, -12, 'middle']],
         formulas: ['V = wL/2 - wx (straight line, slope = -w)   ;   M = wLx/2 - wx^{2}/2 (parabola)', 'Point of contraflexure: none. M_{max} where V = 0, i.e. at x = L/2', 'Positive sagging moment is plotted above zero; negative (hogging) moment is below.']
      })
   },
   {
      folder: FOLDER, name: 'sfd-bmd-cantilever-point-load', w: 900, h: 840, file: FILE, section: 'A5.',
      title: 'SFD and BMD: Cantilever with Point Load at the Free End',
      caption: 'Cantilever with end load W: constant shear +W, linear hogging moment from -WL at the fixed end to zero at the free end',
      draw: (L) => sfd(L, {
         vmax: 1, mmax: 1, guides: [0, 1],
         loads: (L2, by, x1, x2) => L2.fixedWall(x1, by - 30, 70, 'left') + L2.beamLine(x1, x2, by) + L2.pload(x2, by, 'W') +
            L2.text(x2, by + 28, 'free end', { anchor: 'middle', size: 12, c: 'grey' }),
         Vpts: [[0, 1], [1, 1]],
         Mpts: [[0, -1], [1, 0]],
         ann: [['V', 0.5, 1, '+ W (constant)', 0, -8, 'middle'], ['M', 0.02, -1, 'M = - WL (fixed end)', 0, 20], ['M', 0.98, 0, '0', 0, -8, 'end']],
         formulas: ['Hogging (negative) moment throughout: M = - W (L - x)', 'Fixed end reactions: V = W upwards and M = WL anticlockwise']
      })
   },
   {
      folder: FOLDER, name: 'sfd-bmd-cantilever-udl', w: 900, h: 840, file: FILE, section: 'A5.',
      title: 'SFD and BMD: Cantilever with UDL over the Full Span',
      caption: 'Cantilever with UDL: shear varies linearly from +wL at the fixed end to zero, hogging moment is parabolic with -wL^2/2 at the fixed end',
      draw: (L) => sfd(L, {
         vmax: 1, mmax: 0.5, guides: [0, 1],
         loads: (L2, by, x1, x2) => L2.fixedWall(x1, by - 30, 70, 'left') + L2.udl(x1 + 6, x2, by, 12) + L2.beamLine(x1, x2, by) +
            L2.text((x1 + x2) / 2, by - 44, 'w per unit length', { anchor: 'middle', c: 'red', size: 13 }),
         Vpts: [[0, 1], [1, 0]],
         Mpts: sfd.sample((f) => -0.5 * (1 - f) * (1 - f)),
         ann: [['V', 0.02, 1, '+ wL (fixed end)', 0, -8], ['M', 0.02, -0.5, 'M = - wL^{2}/2 (fixed end)', 0, 20]],
         formulas: ['V = w (L - x) (linear)   ;   M = - w (L - x)^{2} / 2 (parabola)', 'Both diagrams are zero at the free end']
      })
   },
   {
      folder: FOLDER, name: 'sfd-bmd-overhang-end-loads', w: 900, h: 840, file: FILE, section: 'A5.',
      title: 'SFD and BMD: Overhanging Beam with Equal End Loads (Pure Bending)',
      caption: 'Beam with equal loads W on both overhangs a: shear is zero between the supports and the moment is constant at -Wa (pure bending)',
      draw: (L) => sfd(L, {
         vmax: 1, mmax: 1, guides: [0, 0.2, 0.8, 1], dimLabel: 'overall length',
         loads: (L2, by, x1, x2) => {
            const xa = x1 + 0.2 * (x2 - x1), xb = x1 + 0.8 * (x2 - x1);
            return L2.beamLine(x1, x2, by) + R(L2, by, xa, 'pin') + R(L2, by, xb, 'roller') + L2.pload(x1, by, 'W') + L2.pload(x2, by, 'W') +
               rl(L2, xa, by, 'R = W') + rl(L2, xb, by, 'R = W') + L2.text((x1 + xa) / 2, by + 60, 'a', { anchor: 'middle', size: 13, c: 'grey' }) +
               L2.text((xb + x2) / 2, by + 60, 'a', { anchor: 'middle', size: 13, c: 'grey' });
         },
         Vpts: [[0, 0], [0, -1], [0.2, -1], [0.2, 0], [0.8, 0], [0.8, 1], [1, 1], [1, 0]],
         Mpts: [[0, 0], [0.2, -1], [0.8, -1], [1, 0]],
         ann: [['V', 0.1, -1, '- W', 0, 20, 'middle'], ['V', 0.9, 1, '+ W', 0, -8, 'middle'], ['V', 0.5, 0, 'V = 0 (no shear)', 0, -10, 'middle'], ['M', 0.5, -1, 'M = - W a (constant)', 0, 22, 'middle']],
         formulas: ['Between the supports the beam is in pure bending: V = 0 and M is constant', 'Points of contraflexure are not present here because M never changes sign']
      })
   }
];
