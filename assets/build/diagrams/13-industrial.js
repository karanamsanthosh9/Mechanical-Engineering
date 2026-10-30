'use strict';
// Batch 13: Industrial engineering
const F1 = '13-Industrial-Engineering/01-ppc-inventory-forecasting-layout.md';
const F2 = '13-Industrial-Engineering/02-work-study-network-quality-or.md';
const FOLDER = '13-industrial-engineering';
const seg = (f, a, b, n = 40) => { const r = []; for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; r.push([x, f(x)]); } return r; };
const sub = (L, x, y, s) => L.text(x, y, s, { anchor: 'middle', bold: true, c: 'blue' });

module.exports = [
   {
      folder: FOLDER, name: 'eoq-cost-curves', w: 900, h: 480, file: F1, section: 'A6.',
      title: 'Economic Order Quantity: Cost Curves and Inventory Cycle',
      caption: 'Ordering cost falls and holding cost rises with order size; total cost is minimum where they are equal',
      draw: (L) => {
         const P = L.plot(90, 330, 360, 240, 0, 1, 0, 1.1);
         let s = sub(L, 270, 58, 'Cost against Q') + P.axes('Order quantity Q', 'Annual cost');
         s += P.fn((x) => 0.16 / x * 0.5, 0.1, 1, { c: 'red', w: 2.5 }) + P.fn((x) => 0.95 * x * 0.5, 0.05, 1, { c: 'green', w: 2.5 }) + P.fn((x) => 0.16 / x * 0.5 + 0.95 * x * 0.5, 0.15, 1, { c: 'blue', w: 3.5 });
         const q = Math.sqrt(0.16 / 0.95);
         s += P.vline(q, 0, 0.16 / q * 0.5 + 0.95 * q * 0.5, { c: 'purple' }) + P.dot(q, 0.16 / q * 0.5 + 0.95 * q * 0.5, { c: 'purple' }) + P.text(q, 0, 'EOQ', { dx: 0, dy: 18, anchor: 'middle', bold: true, c: 'purple' });
         s += P.text(0.14, 0.62, 'Ordering cost (D/Q) C_{o}', { size: 11, c: 'red', bold: true, dx: 6 }) + P.text(0.62, 0.62, 'Holding (Q/2) C_{h}', { size: 11, c: 'green', bold: true, dy: -10 }) + P.text(0.68, 0.95, 'Total cost', { size: 12, c: 'blue', bold: true, dy: -30 });
         s += L.polyline([[530, 270], [530, 120], [600, 270], [600, 120], [670, 270], [670, 120], [740, 270]], { c: 'blue', w: 2.5 }) + L.line(520, 270, 750, 270, { c: 'ink', w: 2 }) + L.line(520, 120, 520, 270, { c: 'ink', w: 2 });
         s += L.text(635, 295, 'Time', { anchor: 'middle', size: 11 }) + L.text(520, 108, 'Q', { anchor: 'middle', size: 12, bold: true }) + L.text(560, 100, 'Sawtooth inventory', { size: 11, c: 'blue', bold: true }) + L.text(635, 195, 'Average Q/2', { size: 11, c: 'grey', anchor: 'middle' });
         s += L.note(40, 370, ['EOQ = \\sqrt(2 D C_{o} / C_{h});  minimum total cost = \\sqrt(2 D C_{o} C_{h});  number of orders = D / Q;  cycle time = Q / D', 'At EOQ: ordering cost = holding cost. Reorder level = demand during lead time + safety stock.', 'Price breaks: compare total cost at each break quantity'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'break-even-chart', w: 900, h: 480, file: F1, section: 'A8.',
      title: 'Break-Even Analysis',
      caption: 'Fixed cost, total cost and sales revenue lines; break-even point and margin of safety',
      draw: (L) => {
         const P = L.plot(100, 330, 480, 240, 0, 1, 0, 1.1);
         let s = P.axes('Output (units)', 'Cost / revenue');
         s += P.pts([[0, 0], [1, 1.0]], { c: 'green', w: 3 }) + P.pts([[0, 0.3], [1, 0.82]], { c: 'red', w: 3 }) + P.pts([[0, 0.3], [1, 0.3]], { c: 'grey', w: 2, dash: '5 3' });
         const bx = 0.3 / 0.48;
         s += P.areaPts([[bx, 0.3 + 0.52 * bx], [1, 0.82], [1, 1.0]], { f: 'lgreen' }) + P.areaPts([[0, 0.3], [bx, 0.3 + 0.52 * bx], [0, 0]], { f: 'lred' });
         s += P.dot(bx, bx, { c: 'purple' }) + P.text(bx, bx, 'BEP', { dx: 8, dy: -10, bold: true, c: 'purple', size: 13 }) + P.vline(bx, 0, bx, { c: 'purple' });
         s += P.text(0.9, 1.0, 'Sales revenue', { size: 12, c: 'green', bold: true, anchor: 'end', dy: -8 }) + P.text(0.9, 0.82, 'Total cost', { size: 12, c: 'red', bold: true, anchor: 'end', dy: 22 }) + P.text(0.02, 0.3, 'Fixed cost', { size: 11, c: 'grey', dy: -6 });
         s += P.text(0.78, 0.9, 'Profit', { size: 12, c: 'green', bold: true, dy: -4 }) + P.text(0.15, 0.1, 'Loss', { size: 12, c: 'red', bold: true });
         s += L.dim(P.X(1) + 6, P.Y(0.82), P.X(1) + 6, P.Y(1.0), '', {}) + L.text(P.X(1) + 12, P.Y(0.91) + 4, 'Margin', { size: 10.5, c: 'ink' });
         s += L.box(640, 90, 220, 150, 'BEP (units) = F / (s - v)\nBEP (value) = F / (1 - v/s)\nContribution = s - v\nP/V ratio = (s - v)/s\nMargin of safety = actual - BEP', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(40, 380, ['F = fixed cost, s = selling price per unit, v = variable cost per unit.', 'Angle of incidence: angle between revenue and total cost lines; large angle means high profit rate'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'cpm-pert-network', w: 900, h: 480, file: F2, section: 'A3.',
      title: 'CPM / PERT Network with Critical Path',
      caption: 'Activity-on-arrow network showing earliest and latest event times, critical path in red',
      draw: (L) => {
         const nodes = { 1: [90, 220], 2: [260, 120], 3: [260, 320], 4: [450, 220], 5: [640, 220], 6: [800, 220] };
         let s = '';
         const edge = (a, b, nm, t, crit, dy) => {
            const A = nodes[a], B = nodes[b];
            const c = crit ? 'red' : 'blue';
            const dx = B[0] - A[0], dyy = B[1] - A[1], len = Math.hypot(dx, dyy);
            const ux = dx / len, uy = dyy / len;
            s += L.arrow(A[0] + ux * 24, A[1] + uy * 24, B[0] - ux * 26, B[1] - uy * 26, { c, w: crit ? 3.5 : 2 });
            s += L.text((A[0] + B[0]) / 2, (A[1] + B[1]) / 2 + dy, nm + ' (' + t + ')', { anchor: 'middle', size: 12, bold: true, c });
         };
         edge(1, 2, 'A', 4, true, -14); edge(1, 3, 'B', 3, false, 28); edge(2, 4, 'C', 6, true, -14); edge(3, 4, 'D', 5, false, 28); edge(4, 5, 'E', 7, true, -14); edge(5, 6, 'F', 3, true, -14);
         Object.keys(nodes).forEach((k) => { s += L.circle(nodes[k][0], nodes[k][1], 22, { f: 'white', s: 'ink', w: 2 }) + L.text(nodes[k][0], nodes[k][1] + 5, k, { anchor: 'middle', bold: true, size: 14 }); });
         const et = { 1: [0, 0], 2: [4, 4], 3: [3, 5], 4: [10, 10], 5: [17, 17], 6: [20, 20] };
         Object.keys(nodes).forEach((k) => { s += L.text(nodes[k][0], nodes[k][1] + 42, 'E=' + et[k][0] + '  L=' + et[k][1], { anchor: 'middle', size: 10.5, c: 'grey' }); });
         s += L.text(450, 90, 'Critical path 1-2-4-5-6: duration 4 + 6 + 7 + 3 = 20', { anchor: 'middle', size: 13, bold: true, c: 'red' });
         s += L.note(40, 385, ['Total float = LFT - EST - duration; free float = EST(head) - EST(tail) - duration; critical activities have zero float', 'PERT: expected time t_{e} = (t_{o} + 4 t_{m} + t_{p})/6;  variance = ((t_{p} - t_{o})/6)^{2};  project variance = sum along the critical path', 'Probability of completion: Z = (T_{s} - T_{e}) / \\sigma_{project}'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'control-chart-sqc', w: 900, h: 480, file: F2, section: 'A4.',
      title: 'Statistical Process Control Charts',
      caption: 'X-bar control chart with centre line and 3-sigma limits; out-of-control signals',
      draw: (L) => {
         const P = L.plot(90, 310, 520, 220, 0, 1, 0, 1.1);
         let s = P.axes('Sample number', 'Sample mean');
         s += P.hline(0.55, 0, 1, { c: 'green', dash: null, w: 2 }) + P.hline(0.9, 0, 1, { c: 'red', dash: '6 4', w: 2 }) + P.hline(0.2, 0, 1, { c: 'red', dash: '6 4', w: 2 });
         const pts = [[0.04, 0.5], [0.1, 0.62], [0.16, 0.48], [0.22, 0.56], [0.28, 0.6], [0.34, 0.45], [0.4, 0.52], [0.46, 0.66], [0.52, 0.74], [0.58, 0.8], [0.64, 0.85], [0.7, 0.95], [0.76, 0.7], [0.82, 0.58], [0.88, 0.5], [0.94, 0.55]];
         s += P.pts(pts, { c: 'blue', w: 2 });
         pts.forEach((p) => { s += P.dot(p[0], p[1], { c: p[1] > 0.9 ? 'red' : 'blue' }); });
         s += P.text(1, 0.9, 'UCL', { dx: 8, dy: 4, bold: true, c: 'red' }) + P.text(1, 0.55, 'CL', { dx: 8, dy: 4, bold: true, c: 'green' }) + P.text(1, 0.2, 'LCL', { dx: 8, dy: 4, bold: true, c: 'red' });
         s += P.text(0.7, 0.95, 'out of control', { dx: -20, dy: -12, size: 11, c: 'red', bold: true }) + P.text(0.55, 0.8, 'run of rising points (trend)', { dy: 36, dx: -50, size: 11, c: 'orange', bold: true });
         s += L.box(660, 90, 200, 140, 'X-bar chart:\nUCL = X-bar + A_{2} R-bar\nLCL = X-bar - A_{2} R-bar\nR chart: D_{4} R-bar, D_{3} R-bar\np chart: p +- 3 sqrt(p(1-p)/n)', { f: 'lblue', s: 'blue', size: 11 });
         s += L.note(40, 365, ['Variables: X-bar and R (or s) charts; attributes: p, np (defectives) and c, u (defects). Natural variation is within 3 sigma limits', 'Process capability C_{p} = (USL - LSL)/(6 \\sigma);  C_{pk} = min(USL - \\mu, \\mu - LSL)/(3 \\sigma); C_{p} >= 1.33 considered capable', 'Acceptance sampling: OC curve, producer risk \\alpha (AQL) and consumer risk \\beta (LTPD)'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'linear-programming-feasible-region', w: 900, h: 480, file: F2, section: 'A7.',
      title: 'Linear Programming: Graphical Solution',
      caption: 'Feasible region bounded by constraints; optimum lies at a corner point',
      draw: (L) => {
         const P = L.plot(90, 330, 400, 250, 0, 1, 0, 1.1);
         let s = P.axes('x_{1}', 'x_{2}');
         const V = [[0, 0], [0.9, 0], [0.1555, 0.7445], [0, 0.8]];
         s += P.areaPts(V, { f: 'lblue' });
         s += P.pts([[0, 0.9], [0.9, 0]], { c: 'red', w: 2.5 }) + P.pts([[0, 0.8], [0.95, 0.8 - 0.357 * 0.95]], { c: 'green', w: 2.5 });
         s += P.pts(V.concat([V[0]]), { c: 'blue', w: 3.5 });
         V.forEach((p, i) => { s += P.dot(p[0], p[1], { c: i === 2 ? 'orange' : 'purple' }); });
         [0.55, 0.85].forEach((k) => { s += P.pts([[0, k], [k * 1.5, 0]], { c: 'grey', w: 1.5, dash: '4 3' }); });
         s += P.pts([[0, 0.7445 + 0.667 * 0.1555], [(0.7445 + 0.667 * 0.1555) * 1.5, 0]], { c: 'orange', w: 2, dash: '6 3' });
         s += P.text(0.1555, 0.7445, 'Optimum corner', { dx: 12, dy: -10, size: 11, c: 'orange', bold: true }) + P.text(0.3, 0.2, 'Feasible region', { size: 12, c: 'blue', bold: true }) + P.text(0.9, 0.02, 'x_{1} + x_{2} <= 0.9', { size: 10.5, c: 'red', anchor: 'end', dy: -8 });
         s += L.box(540, 90, 320, 140, 'Maximise Z = 2x_{1} + 3x_{2}  (c_{1}, c_{2})\nsubject to a_{i1}x_{1} + a_{i2}x_{2} <= b_{i}\nx_{1}, x_{2} >= 0\nOptimum at an extreme point', { f: 'lblue', s: 'blue', size: 12 });
         s += L.note(540, 245, ['Simplex: slack variables for <=, surplus + artificial for >=;', 'Big-M or two-phase method; optimal when all Z_{j} - C_{j} >= 0 (max)', 'Duality: primal max has a dual min with the same optimum', 'Unbounded: objective improves without limit;', 'infeasible: no common region'], { w: 320, size: 10.5 });
         s += L.note(40, 400, ['Transportation: find initial feasible by NWCR, LCM or VAM, optimise with MODI; Assignment: Hungarian method;', 'balanced problem needs sum supply = sum demand'], { w: 820, size: 10.5 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'work-study-and-learning-curve', w: 900, h: 480, file: F2, section: 'A2.',
      title: 'Work Measurement, Standard Time and Learning Curve',
      caption: 'Build-up of standard time from observed time, rating and allowances; learning curve for repetitive work',
      draw: (L) => {
         let s = L.box(40, 100, 140, 56, 'Observed time\n(stopwatch)', { f: 'lblue', s: 'blue', size: 12 }) + L.box(230, 100, 140, 56, 'Normal time =\nobs. x rating/100', { f: 'lgreen', s: 'green', size: 12 }) + L.box(420, 100, 150, 56, 'Standard time =\nnormal x (1 + allow.)', { f: 'lorange', s: 'orange', size: 12 });
         s += L.arrow(180, 128, 230, 128, { c: 'ink', w: 2 }) + L.arrow(370, 128, 420, 128, { c: 'ink', w: 2 });
         s += L.text(40, 190, 'Allowances: personal (5%), fatigue, delay; contingency (about 2%)', { size: 11.5 }) + L.text(40, 210, 'Rating factor: 100 for standard pace; Sample size N = (40 sqrt(N\' sum x^{2} - (sum x)^{2}) / sum x)^{2}', { size: 11, c: 'grey' });
         const P = L.plot(640, 290, 220, 150, 0, 1, 0, 1.1);
         s += sub(L, 750, 58, 'Learning curve') + P.axes('Cumulative units', 'Time / unit');
         s += P.fn((x) => 0.8 * Math.pow(Math.max(x, 0.05) * 10, -0.32), 0.05, 1, { c: 'blue', w: 3 });
         s += P.text(0.5, 0.45, 'T_{n} = T_{1} n^{b}', { size: 12, bold: true, c: 'blue', dx: 4, dy: -10 }) + P.text(0.4, 0.95, '80% curve: time/unit', { size: 10, c: 'grey' }) + P.text(0.4, 0.95, 'falls to 80% when', { size: 10, c: 'grey', dy: 13 }) + P.text(0.4, 0.95, 'output doubles', { size: 10, c: 'grey', dy: 26 });
         s += L.note(40, 250, ['Method study: record (outline, flow and string diagrams, SIMO chart), examine (5W1H), develop, install, maintain', 'Therbligs: 17 basic elements of motion; principles of motion economy; micromotion study by SIMO chart', 'Work sampling: random observations; accuracy depends on number of observations; PMTS: MTM, work factor'], { w: 560, size: 10.5 });
         s += L.note(40, 355, ['Learning curve: time per unit falls by a constant percentage each time cumulative output doubles; b = log(learning rate)/log 2', 'Productivity = output / input; Work content = basic work content + excess work due to design, process, management and the worker'], { w: 820, size: 11 });
         return s;
      }
   },
   {
      folder: FOLDER, name: 'queuing-and-plant-layout', w: 900, h: 480, file: F2, section: 'A9.',
      title: 'Queuing Model M/M/1 and Plant Layout Types',
      caption: 'Single-server queue with arrival and service rates; product, process and fixed-position layouts',
      draw: (L) => {
         let s = sub(L, 220, 58, 'M/M/1 queue');
         s += L.arrow(30, 140, 90, 140, { c: 'ink', w: 2 }) + L.text(30, 128, '\\lambda arrivals', { size: 11 });
         [100, 130, 160, 190].forEach((x) => { s += L.rect(x, 120, 22, 40, { f: 'lblue', s: 'blue', w: 1.5 }); });
         s += L.circle(260, 140, 28, { f: 'lgreen', s: 'green', w: 2 }) + L.text(260, 145, 'Server', { anchor: 'middle', size: 10.5, bold: true }) + L.arrow(290, 140, 340, 140, { c: 'ink', w: 2 }) + L.text(300, 128, '\\mu', { size: 12 });
         s += L.text(40, 200, 'Utilisation \\rho = \\lambda / \\mu < 1', { size: 12, bold: true }) + L.text(40, 222, 'L_{s} = \\rho / (1 - \\rho);  L_{q} = \\rho^{2} / (1 - \\rho)', { size: 12 }) + L.text(40, 244, 'W_{s} = 1 / (\\mu - \\lambda);  W_{q} = \\rho / (\\mu - \\lambda)', { size: 12 }) + L.text(40, 266, 'Little: L = \\lambda W', { size: 12, c: 'purple', bold: true });
         s += sub(L, 670, 58, 'Layouts');
         s += L.box(480, 100, 90, 34, 'M1', { f: 'lorange', size: 11 }) + L.arrow(570, 117, 600, 117, { c: 'ink', w: 2 }) + L.box(600, 100, 90, 34, 'M2', { f: 'lorange', size: 11 }) + L.arrow(690, 117, 720, 117, { c: 'ink', w: 2 }) + L.box(720, 100, 90, 34, 'M3', { f: 'lorange', size: 11 });
         s += L.text(480, 155, 'Product (line): high volume, one product', { size: 10.5 }) + L.text(480, 172, 'Process (functional): turning, milling, grinding departments; job shop', { size: 10.5 }) + L.text(480, 189, 'Fixed position: ship, aircraft, bridge; work stays, resources move', { size: 10.5 }) + L.text(480, 206, 'Group (cellular): similar parts in a cell; group technology', { size: 10.5 });
         s += L.note(40, 300, ['Queue: Poisson arrival, exponential service; M/M/1 steady state needs \\rho < 1', 'Layout selection: product layout lowest handling cost; process layout most flexible;', 'line balancing efficiency = sum task times / (stations x cycle time)', 'Plant location factors: raw material, labour, power, transport, market, climate; location break-even analysis'], { w: 820, size: 11 });
         return s;
      }
   }
];
