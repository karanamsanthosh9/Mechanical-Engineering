# 02. Work Study, Network Analysis, Quality Control and Operations Research

**Exam relevance:** APPSC AEE: C | SSC JE: B | RRB JE: B | Category: ALL | Yield: HY

---

## Part A: Detailed Theory (read this first)

This chapter collects the analytical tools of industrial engineering. Work study finds the best method of doing a job and the time it should take. Network analysis (CPM and PERT) plans and controls projects made of many dependent activities. Quality control keeps a process stable and its output within specification, using statistics. Operations research (OR) supplies mathematical models for allocating limited resources: linear programming, transportation, assignment, queues and games. The common thread is that each tool turns a vague managerial question into a quantity that can be calculated.

### A1. Work study: method study

**Work study** has two parts. **Method study** finds the best way of doing the work; **work measurement** finds how long the best method should take. Together they raise productivity without more capital.

**Steps of method study (SREDIM).** Select the job, Record the present method, Examine it critically, Develop the best method, Install it, Maintain it.

**Recording tools.**

- **Outline process chart:** only operations and inspections.
- **Flow process chart:** also transport, delay and storage; product type, material type or man type.
- **Two-handed process chart** and **SIMO chart** (simultaneous motion cycle chart): motion of both hands, used with micro-motion study and therbligs.
- **Man-machine chart:** idle time of operator and machine.
- **Flow diagram and string diagram:** path of movement on a floor plan; the string diagram shows the extent of back-and-forth movement.
- **Memo-motion and micro-motion study:** filming or time-lapse for detailed analysis.

**ASME symbols.** Circle for operation, arrow for transport, square for inspection, D for delay and inverted triangle for storage.

**Therbligs.** Gilbreth's 17 basic elements of motion, such as reach, grasp, move, position and release.

**Principles of motion economy.** Use both hands together and symmetrically, keep movements short and smooth, keep tools and materials in a fixed, easily reached place, and use the lowest body class that can do the work.

### A2. Work measurement and time study

**Stopwatch time study.** Observe a representative worker at work, time each element and correct for the worker's pace and for allowances.

$$\text{Normal time} = \text{Observed time}\times\frac{\text{Rating}}{100}$$

$$\text{Standard time} = \text{Normal time}\times(1 + \text{Allowances})$$

If the allowance is expressed as a fraction of the total time instead, then Standard time $= \text{Normal time}/(1 - \text{allowance fraction})$.

**Allowances** cover personal needs, fatigue, unavoidable delays and special conditions. **Rating** compares the observed pace with the standard pace (Westinghouse system, synthetic rating, speed rating). A standard performance is 100 percent, or 60 on the 0-to-100 scale.

**Number of observations.** For 95 percent confidence and 5 percent accuracy, $N = \left(\dfrac{40\sqrt{n\sum x^2 - (\sum x)^2}}{\sum x}\right)^2$ where $n$ is the number of trial readings.

**Other work-measurement techniques.**

- **Work sampling (activity sampling):** random observations of the fraction of time spent on activities; the number of observations is $n = 4p(1-p)/L^2$ for 95 percent confidence, with $L$ the absolute accuracy.
- **Predetermined motion time systems (PMTS):** MTM, Work Factor and MOST give standard times for basic motions.
- **Synthesis, analytical estimating and standard data.**

**Related topics.** Job evaluation (ranking, grading, point rating, factor comparison), merit rating and wage incentive plans (Halsey, Rowan, Taylor's differential piece rate, Emerson, Gantt).

### A3. Network analysis: CPM and PERT

**Network.** A project is drawn as a diagram of activities and events. In AOA (activity on arrow) the activity is an arrow; in AON (activity on node) it is a node. Dummy activities have zero duration and show precedence only.

- **CPM (critical path method):** deterministic times, with a cost-time trade-off (crashing).
- **PERT:** probabilistic times with three estimates, assuming a beta distribution.

**Three-time estimates.** Optimistic $t_o$, most likely $t_m$ and pessimistic $t_p$:

$$t_e = \frac{t_o + 4t_m + t_p}{6}, \qquad \sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$$

**Forward pass.** Earliest start (ES) and earliest finish $EF = ES + t$. At a merge, ES is the largest EF of the preceding activities.

**Backward pass.** Latest finish (LF) and latest start $LS = LF - t$. At a split, LF is the smallest LS of the following activities.

**Float (slack).**

- **Total float** $= LS - ES = LF - EF$: the delay of an activity that does not delay the project.
- **Free float** $= ES_{next} - EF_{this}$: the delay that does not delay the earliest start of the next activity.
- **Independent float** $= ES_{next} - LF_{prev} - t$: the delay available even if predecessors finish late and successors start early.
- **Event slack** $= T_L - T_E$.

**Critical path.** The longest path through the network, made of activities with zero total float. It sets the project duration, and any delay on it delays the project. There may be more than one.

**Probability of completion.** For a target date $T$, $Z = (T - T_E)/\sigma_{path}$ with $\sigma_{path}^2$ the sum of the variances of the critical-path activities. Read the probability from the standard normal table.

**Crashing.** Shortening an activity by spending more. The cost slope is

$$\text{cost slope} = \frac{\text{crash cost} - \text{normal cost}}{\text{normal time} - \text{crash time}}$$

Crash the critical activity with the lowest cost slope first, and re-check whether the critical path has changed.

### A4. Statistical quality control: control charts

**Quality** means fitness for use (Juran) or conformance to requirements (Crosby). Quality control detects defects; quality assurance prevents them; TQM involves the whole company. ISO 9000 is the quality management standard; Taguchi methods use a loss function and robust design.

**Variation.** Chance (random) causes are inherent in the process and small; the process is "in control". Assignable (special) causes are specific and larger, and must be found and removed.

**Control chart.** A time plot of a sample statistic with a centre line and upper and lower control limits, normally at $\pm 3\sigma$, which contain 99.73 percent of points for a normal distribution. A point outside the limits, or a non-random pattern, signals an assignable cause.

| Chart | Plots | Type |
|---|---|---|
| $\bar{X}$ | sample mean | variables |
| $R$ | sample range | variables |
| $S$ | sample standard deviation | variables |
| p | fraction defective | attributes |
| np | number of defectives | attributes |
| c | defects per unit, constant size | attributes |
| u | defects per unit, variable size | attributes |

**Limits for $\bar{X}$ and $R$ charts:**

$$UCL_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R}, \qquad LCL_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}$$

$$UCL_R = D_4\bar{R}, \qquad LCL_R = D_3\bar{R}$$

**Attribute chart limits.** p chart: $\bar{p}\pm 3\sqrt{\bar{p}(1-\bar{p})/n}$. c chart: $\bar{c}\pm 3\sqrt{\bar{c}}$, based on the Poisson distribution. np chart: $n\bar{p}\pm 3\sqrt{n\bar{p}(1-\bar{p})}$.

**Process capability.** Control limits describe what the process does; specification limits describe what is wanted.

$$C_p = \frac{USL - LSL}{6\sigma}, \qquad C_{pk} = \min\left(\frac{USL - \mu}{3\sigma},\ \frac{\mu - LSL}{3\sigma}\right)$$

$C_p$ ignores centring, $C_{pk}$ includes it. A capable process has $C_p \ge 1.33$.

**Seven QC tools.** Pareto chart (vital few), cause-and-effect (Ishikawa or fishbone) diagram, histogram, scatter diagram, check sheet, control chart and flowchart.

### A5. Acceptance sampling

Instead of inspecting every item, a sample of size $n$ is drawn from a lot of size $N$ and the lot is accepted if the number of defectives is at most the acceptance number $c$. Plans may be single, double or multiple.

- **AQL:** acceptable quality level, a good lot quality that should usually be accepted.
- **LTPD:** lot tolerance percent defective, a bad lot quality that should usually be rejected.
- **Producer's risk $\alpha$:** probability of rejecting a good lot at AQL (typically 5 percent). This is a Type I error.
- **Consumer's risk $\beta$:** probability of accepting a bad lot at LTPD (typically 10 percent). This is a Type II error.
- **OC curve:** probability of acceptance against lot fraction defective. An ideal curve is a step; a larger sample makes the curve steeper.
- **AOQ and AOQL:** average outgoing quality under rectifying inspection; AOQL is its maximum.

### A6. Reliability and maintenance

**Reliability.** The probability that an item performs its function for a stated time. For a constant failure rate $\lambda$, $R(t) = e^{-\lambda t}$ and $MTBF = 1/\lambda$.

**Bathtub curve.** Three regions: infant mortality (decreasing failure rate), useful life (constant rate, random failures) and wear-out (increasing rate).

**System reliability.**

- **Series:** $R_s = R_1R_2\cdots R_n$. It is lower than the weakest component.
- **Parallel:** $R_p = 1 - (1 - R_1)(1 - R_2)\cdots(1 - R_n)$. Redundancy raises reliability.

**Maintenance.** Breakdown, preventive, predictive (condition monitoring), corrective, TPM (total productive maintenance) and RCM (reliability-centred maintenance). Availability $= MTBF/(MTBF + MTTR)$. Overall equipment effectiveness: $OEE = \text{availability}\times\text{performance}\times\text{quality}$.

### A7. Linear programming

An LP maximises or minimises a linear objective function subject to linear constraints and non-negativity of the variables.

- **Graphical method (two variables):** draw the constraints; the feasible region is convex; the optimum lies at a corner (extreme) point.
- **Simplex method:** starts at a basic feasible solution and moves to an adjacent corner that improves the objective. Slack variables convert $\le$ constraints, surplus and artificial variables handle $\ge$ and $=$ (Big-M or two-phase methods). For maximisation the solution is optimal when all $C_j - Z_j \le 0$.
- **Special cases:** infeasible (empty region), unbounded (objective improves indefinitely), alternate optima (objective parallel to a binding constraint), degeneracy (a basic variable is zero) and redundant constraints.
- **Duality:** every LP has a dual with the same optimal objective value. The **shadow price** is the value of one more unit of a resource.

### A8. Transportation and assignment

**Transportation problem.** Ship from $m$ sources to $n$ destinations at least cost. It is balanced when total supply equals total demand (otherwise add a dummy source or destination). A basic feasible solution has $m + n - 1$ allocations.

- **Initial solution:** North-West Corner (ignores cost), Least Cost, and Vogel's Approximation Method (VAM, penalty-based, usually closest to optimum).
- **Optimality test:** MODI (u-v) or stepping stone. The solution is optimal when all opportunity costs are non-negative.
- **Degeneracy:** fewer than $m + n - 1$ allocations; add an infinitesimal epsilon.

**Assignment problem.** Assign $n$ jobs to $n$ workers at minimum total cost (a transportation problem with unit supply and demand). **Hungarian method:** subtract row minima, subtract column minima, cover all zeros with the minimum number of lines; if the number of lines is $n$ an optimal assignment exists, otherwise revise the matrix. For maximisation, subtract every element from the largest element first.

### A9. Queuing, games and decisions

**M/M/1 queue.** Poisson arrivals at rate $\lambda$, exponential service at rate $\mu$, one server and utilisation $\rho = \lambda/\mu < 1$.

$$L_s = \frac{\lambda}{\mu - \lambda}, \quad L_q = \frac{\lambda^2}{\mu(\mu - \lambda)}, \quad W_s = \frac{1}{\mu - \lambda}, \quad W_q = \frac{\lambda}{\mu(\mu - \lambda)}$$

**Little's law:** $L = \lambda W$.

**Game theory.** In a two-person zero-sum game, a saddle point exists when maximin equals minimax, giving a pure strategy. Otherwise players use mixed strategies. Dominance reduces the payoff matrix.

**Decision theory.** Maximin (pessimistic), maximax (optimistic), Hurwicz (weighted), Laplace (equal probability), minimax regret (Savage) and expected value. **Other OR tools:** simulation (Monte Carlo), dynamic programming and replacement analysis.

### A10. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Method study steps and chart symbols | Direct | Very common | Very common |
| Standard time, rating, allowances | Numerical | Very common | Common |
| Work sampling, PMTS | Direct | Common | Common |
| CPM vs PERT, critical path, float | Numerical | Very common | Very common |
| Expected time and variance in PERT | Numerical | Common | Common |
| Control charts and when to use each | Direct | Very common | Very common |
| Process capability $C_p$, $C_{pk}$ | Numerical | Common | Occasional |
| Producer's and consumer's risk, OC curve | Conceptual | Common | Occasional |
| Reliability of series and parallel systems | Numerical | Common | Common |
| LP: graphical method, simplex, duality | Conceptual | Common | Common |
| Transportation: NWCR, VAM, MODI | Direct | Common | Common |
| Assignment, Hungarian method | Direct | Very common | Common |
| M/M/1 queue formulas | Numerical | Common | Occasional |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## SECTION I: WORK STUDY

## 1. Method study and time study

- **Work study** = **method study** (finding the best way) + **work measurement** (time required for it). Goal: higher productivity.
- **Method study steps (SREDIM):** Select, Record, Examine, Develop, Install, Maintain (Define is sometimes added).
- **Recording tools:** **outline process chart** (operation and inspection symbols), **flow process chart** (also transport, delay, storage), **two-handed process chart**, **man-machine chart**, **flow diagram and string diagram**, **SIMO chart** (simultaneous motion cycle), **memo-motion** and **micro-motion** study.
- **ASME symbols:** circle = operation, arrow = transport, square = inspection, D = delay, inverted triangle = storage.
- **Therbligs** (Gilbreth): 17 basic elements of motion (reach, grasp, move, position, release...).
- **Principles of motion economy:** use both hands, symmetrical motions, minimum body movement, easy-to-reach tools and materials.
- **Time study (stopwatch):**

$$\text{Normal time} = \text{Observed time} \times \frac{\text{Rating}}{100}$$

$$\text{Standard time} = \text{Normal time} \times (1 + \text{Allowances})$$

  - **Allowances:** personal needs, fatigue, delay (unavoidable), special (as a fraction of the normal time). Standard time $= \dfrac{\text{Normal time}}{1 - \text{allowance fraction on the total time}}$ when the allowance is expressed as a percentage of the total time.
  - **Rating** compares the worker's pace to the standard pace (Westinghouse, synthetic, speed rating). Standard performance is $100\%$ (or $60$ on the 0-100 scale).
  - **Number of observations:** $N = \left(\dfrac{40\sqrt{n\sum x^2 - (\sum x)^2}}{\sum x}\right)^2$ for $95\%$ confidence with $\pm5\%$ accuracy.
- **Other work measurement:** **work sampling** (activity sampling, random observations; $n = \dfrac{4\,p\,(1-p)}{L^2}$ for $95\%$ confidence), **PMTS** (predetermined motion time systems: MTM, Work Factor, MOST), **synthesis**, **analytical estimating**, **standard data**.
- **Job evaluation** (ranking, grading, point rating, factor comparison), **merit rating**, **wage incentive plans** (Halsey, Rowan, Taylor's differential piece rate, Emerson, Gantt).

## SECTION II: NETWORK ANALYSIS (CPM / PERT)

## 2. CPM and PERT

- A **project network** shows activities and events; **AOA** (activity on arrow) and **AON** (activity on node).
- **CPM** (Critical Path Method): deterministic time; cost-time trade-off (crashing). **PERT:** probabilistic time estimates.
- **Three-time estimates:** optimistic $t_o$, most likely $t_m$, pessimistic $t_p$ (beta distribution):

$$t_e = \frac{t_o + 4\,t_m + t_p}{6},\qquad \sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$$

- **Forward pass:** earliest start (ES) and earliest finish (EF) $= ES + t$. **Backward pass:** latest finish (LF) and latest start (LS) $= LF - t$.
- **Slack (float):**
  - **Total float** $= LS - ES = LF - EF$.
  - **Free float** $= ES_{\text{next}} - EF_{\text{this}}$ (delay possible without delaying the next activity's earliest start).
  - **Independent float** $= ES_{\text{next}} - LF_{\text{prev}} - t$.
  - Event slack $= T_L - T_E$.
- **Critical path:** the longest path; activities with zero total float; it determines the project duration. There can be more than one critical path. Any delay on it delays the project.
- **Probability of completion by date $T$:** $Z = \dfrac{T - T_E}{\sigma_{path}}$ where $\sigma_{path}^2 = \sum\sigma^2$ of the critical activities; read the probability from normal tables.
- **Crashing:** reducing activity duration at extra cost. **Crash cost slope** $= \dfrac{\text{crash cost} - \text{normal cost}}{\text{normal time} - \text{crash time}}$. Crash the critical activity with the lowest cost slope first.
- **Dummy activity:** zero duration, shows precedence only.

## SECTION III: QUALITY CONTROL

## 3. SQC and control charts

- **Quality:** fitness for use (Juran); conformance to requirements (Crosby). **Quality control** (detect defects), **quality assurance** (prevent them), **TQM** (company-wide), **ISO 9000** (QMS standard), **Taguchi** (loss function, robust design), **Six Sigma**.
- **Causes of variation:** **chance (random)** causes (inherent, natural; the process is "in control") and **assignable** causes (special; identified and eliminated).
- **Control chart:** a time plot of a quality statistic with a centre line (CL), upper control limit (UCL), and lower control limit (LCL), usually at $\pm3\sigma$ from the mean ($99.73\%$ of points within the limits for a normal distribution).

| Chart | Plots | Type |
|---|---|---|
| $\bar{X}$ chart | Sample mean | Variables |
| $R$ chart | Sample range | Variables |
| $S$ chart | Sample standard deviation | Variables |
| **p chart** | Fraction defective | Attributes |
| **np chart** | Number of defectives | Attributes |
| **c chart** | Number of defects per unit (constant sample size) | Attributes |
| **u chart** | Defects per unit (variable sample size) | Attributes |

- **$\bar{X}$ and $R$ chart limits:**

$$UCL_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R},\qquad LCL_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}$$

$$UCL_R = D_4\bar{R},\qquad LCL_R = D_3\bar{R}$$

- **p chart:** $\bar{p} \pm 3\sqrt{\dfrac{\bar{p}(1-\bar{p})}{n}}$. **c chart:** $\bar{c} \pm 3\sqrt{\bar{c}}$ (Poisson distribution). **np chart:** $n\bar{p} \pm 3\sqrt{n\bar{p}(1-\bar{p})}$.
- **Process capability:** $C_p = \dfrac{USL - LSL}{6\sigma}$; $C_{pk} = \min\left(\dfrac{USL - \mu}{3\sigma},\ \dfrac{\mu - LSL}{3\sigma}\right)$. A capable process has $C_p \ge 1.33$.
- **Pareto chart** (vital few), **cause-and-effect (Ishikawa/fishbone) diagram**, histogram, scatter diagram, check sheet, flowchart: the seven QC tools.

## 4. Acceptance sampling

- **Single, double and multiple sampling plans.** Parameters: lot size $N$, sample size $n$, acceptance number $c$.
- **AQL** (acceptable quality level), **LTPD** (lot tolerance percent defective), **producer's risk $\alpha$** (probability of rejecting a good lot at the AQL; typically $5\%$), **consumer's risk $\beta$** (probability of accepting a bad lot at the LTPD; typically $10\%$).
- **OC curve** (operating characteristic): the probability of acceptance versus the lot fraction defective. An ideal OC curve is a step function; a larger sample makes it steeper.
- **AOQ** (average outgoing quality) with rectifying inspection; **AOQL** is its maximum.
- **Type I error:** rejecting a good lot (producer's risk); **Type II error:** accepting a bad lot (consumer's risk).

## 5. Reliability and maintenance

- **Reliability** $R(t) = e^{-\lambda t}$ for a constant failure rate $\lambda$ (exponential); MTBF $= \dfrac{1}{\lambda}$. **Bathtub curve:** infant mortality, useful life (constant failure rate), wear-out.
- **Series system:** $R_s = R_1R_2\cdots R_n$ (lower than the weakest component). **Parallel system:** $R_p = 1 - (1-R_1)(1-R_2)\cdots(1-R_n)$.
- **Maintenance types:** breakdown, preventive, predictive (condition monitoring), corrective, **TPM** (total productive maintenance), **RCM**. **OEE** $=$ availability $\times$ performance $\times$ quality. **Availability** $= \dfrac{MTBF}{MTBF + MTTR}$.

## SECTION IV: OPERATIONS RESEARCH

## 6. Linear programming

- Maximise or minimise a linear **objective function** subject to linear **constraints** and non-negativity.
- **Graphical method** (two variables): the optimum is at a **corner (extreme) point** of the feasible region. **Simplex method:** moves from one basic feasible solution to an adjacent one; slack variables for $\le$, surplus and artificial variables for $\ge$ and $=$ (Big-M, two-phase). Optimal when all $C_j - Z_j \le 0$ (maximisation).
- **Special cases:** infeasible (no feasible region), unbounded (objective can improve indefinitely), alternate optima (objective parallel to a constraint), degeneracy (a basic variable is zero; may cycle), redundant constraints.
- **Duality:** every LP (primal) has a dual; the objective values are equal at optimality; **shadow price** is the value of a unit of the resource.

## 7. Transportation and assignment

- **Transportation problem:** shipping from $m$ sources to $n$ destinations at minimum cost. Balanced if total supply = total demand (else add a dummy). A basic feasible solution has $m + n - 1$ allocations.
  - **Initial solution:** North-West Corner (simple, not cost-aware), **Least Cost** method, **Vogel's Approximation Method (VAM)** (best initial solution, penalty-based).
  - **Optimality test:** **MODI (u-v method)** or the stepping-stone method; optimal when all opportunity costs (reduced costs) are non-negative.
  - **Degeneracy** when allocations < $m + n - 1$: add an epsilon.
- **Assignment problem:** $n$ jobs to $n$ workers to minimise the cost (a special transportation case; each row and column has one assignment). **Hungarian method:** row reduction, column reduction, cover zeros with a minimum number of lines (if the number of lines = $n$, optimal), otherwise revise. Maximisation is converted by subtracting from the largest element. **Travelling salesman problem** is related.

## 8. Queuing, game theory, others

- **Queuing (M/M/1):** arrival rate $\lambda$, service rate $\mu$, utilisation $\rho = \dfrac{\lambda}{\mu} < 1$.

$$L_s = \frac{\lambda}{\mu - \lambda},\quad L_q = \frac{\lambda^2}{\mu(\mu - \lambda)},\quad W_s = \frac{1}{\mu - \lambda},\quad W_q = \frac{\lambda}{\mu(\mu - \lambda)}$$

  - **Little's law:** $L = \lambda W$. **Poisson** arrivals and **exponential** service times in M/M/1.
- **Game theory:** two-person zero-sum game; **saddle point** when the maximin equals the minimax (pure strategy); otherwise mixed strategies. **Dominance** reduces the matrix.
- **Decision theory:** maximin, maximax, Hurwicz, Laplace, minimax regret (Savage), expected value.
- **Simulation (Monte Carlo)**, **dynamic programming**, **replacement analysis**.

## 9. Worked numericals

1. **PERT.** $t_o = 2$, $t_m = 5$, $t_p = 14$: $t_e = \dfrac{2 + 20 + 14}{6} = 6$; $\sigma = \dfrac{12}{6} = 2$.
2. **Standard time.** Observed $2$ min, rating $110\%$, allowances $15\%$ of the normal time: normal $= 2.2$; standard $= 2.2\times1.15 = 2.53$ min.
3. **Control chart.** $\bar{\bar{X}} = 50$, $\bar{R} = 4$, $A_2 = 0.577$ ($n=5$): $UCL = 50 + 2.31 = 52.31$, $LCL = 47.69$.
4. **p chart.** $\bar{p} = 0.04$, $n = 100$: $3\sqrt{\dfrac{0.04\times0.96}{100}} = 0.0588$; UCL $= 0.0988$, LCL $= 0$ (negative values are set to zero).
5. **M/M/1.** $\lambda = 8$/h, $\mu = 10$/h: $\rho = 0.8$, $L_s = 4$, $W_s = 0.5$ h.
6. **Float.** An activity with $ES = 4$, $EF = 9$, $LS = 6$, $LF = 11$: total float $= 2$.
7. **Reliability.** Two components in series, $R = 0.9$ each: $0.81$. In parallel: $1 - 0.01 = 0.99$.

## 10. Common mistakes

- Taking the allowance on the observed time rather than the normal time.
- Confusing PERT's $\sigma$ (it is $\dfrac{t_p - t_o}{6}$) with the variance.
- Crashing a non-critical activity; it cannot shorten the project.
- Forgetting that a transportation basic solution needs exactly $m + n - 1$ allocations.
- Believing that np charts and p charts plot the same quantity; p is the fraction, np the count.
- Using the Hungarian method with an unbalanced matrix without adding a dummy row or column.

## 11. Interconnections

- **Industrial engineering:** inventory and PPC feed from the forecasting.
- **Quality:** ties to manufacturing tolerances and process capability.
- **Mathematics and statistics:** normal distribution, Poisson distribution.

## 12. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | PERT expected time | $\dfrac{t_o + 4t_m + t_p}{6}$ | SSC JE 2017 | [ ] |
| 2 | Critical path is | The longest path, with zero float | RRB JE 2015 | [ ] |
| 3 | Total float formula | $LS - ES$ or $LF - EF$ | SSC JE 2018 | [ ] |
| 4 | Standard time | Normal time plus allowances | RRB JE 2014 | [ ] |
| 5 | Chart for number of defects per unit | c chart | SSC JE 2016 | [ ] |
| 6 | Control limits are usually set at | $\pm3\sigma$ | APPSC AEE 2012 | [ ] |
| 7 | A p chart is based on | Binomial distribution (fraction defective) | SSC JE 2019 | [ ] |
| 8 | Assignment problem solved by | Hungarian method | RRB JE 2019 | [ ] |
| 9 | Initial solution by Vogel's method is | Usually closest to the optimum | SSC JE 2015 | [ ] |
| 10 | Number of allocations in a basic feasible transportation solution | $m + n - 1$ | RRB JE 2016 | [ ] |
| 11 | Producer's risk | Probability of rejecting a good lot | SSC JE 2020 | [ ] |
| 12 | Optimal solution of an LP lies at | A corner point of the feasible region | RRB JE 2018 | [ ] |
| 13 | M/M/1 average number in the system | $\dfrac{\lambda}{\mu - \lambda}$ | SSC JE 2021 | [ ] |
| 14 | Therblig | Basic element of motion | APPSC AEE 2016 | [ ] |
| 15 | Bathtub curve has failure rate constant in | Useful life | RRB JE 2017 | [ ] |
| 16 | Reliability of a series system | Product of component reliabilities | SSC JE 2022 | [ ] |

## 13. Revision checklist

- [ ] Method and time study, standard time
- [ ] CPM/PERT calculations, floats and crashing
- [ ] Control charts and formulas; process capability
- [ ] Sampling terms (AQL, producer's and consumer's risks)
- [ ] LP basics, transportation (NWC, LCM, VAM, MODI), assignment
- [ ] Queuing formulas and reliability
