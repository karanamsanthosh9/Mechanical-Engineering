# 01. Production Planning, Inventory, Forecasting and Plant Layout

**Exam relevance:** APPSC AEE: C | SSC JE: B | RRB JE: B | Category: ALL | Yield: HY

---

## Part A: Detailed Theory (read this first)

Industrial engineering asks one question: how do we get the required output with the least waste of people, material, machines, time and money? This chapter covers the planning side of that question. Production planning and control decides what to make and when. Forecasting estimates how much will be needed. Inventory control decides how much to hold and when to reorder. Break-even analysis tells whether the volume is worth producing. Plant location and layout decide where and how the work physically flows. Each topic is a trade-off between two opposing costs, and the formulas are simply the point where the opposing costs balance.

### A1. Production systems and productivity

| System | Volume and variety | Equipment and layout |
|---|---|---|
| Job (jobbing) | one-off, very high variety | general-purpose machines, process layout, skilled labour |
| Batch | moderate volume, moderate variety | general machines, process or cell layout |
| Mass (flow) | high volume, low variety | special-purpose machines, product (line) layout |
| Continuous process | very high volume, fixed product | refineries, chemicals, power; fully automated |
| Project | single large undertaking | construction, shipbuilding; fixed position |

**Productivity** is output divided by input. Partial productivity uses one input (output per labour hour), multifactor productivity uses several, and total productivity uses all inputs. Productivity rises when output increases for the same input or the same output is made with less input.

### A2. Production planning and control (PPC)

PPC ensures that the right material, in the right quantity, reaches the right machine at the right time.

- **Planning:** deciding what, how much and by when.
- **Routing:** fixing the path (sequence of operations and machines) that work will follow.
- **Scheduling:** fixing the start and finish time of each operation.
- **Loading:** assigning work to machines or work centres.
- **Dispatching:** issuing orders and releasing materials to start the work.
- **Follow-up (expediting):** monitoring progress and correcting delays.
- **Inspection** and corrective action.

**Gantt chart.** A bar chart of planned versus actual progress against time; simple to read but does not show dependencies.

**Sequencing.** The order in which jobs go through a machine.

- **FCFS:** first come, first served; simple and fair.
- **SPT (shortest processing time):** minimises mean flow time and mean waiting time.
- **EDD (earliest due date):** minimises the maximum lateness.
- **Critical ratio:** time remaining to due date divided by work remaining; below 1 means the job is behind schedule.
- **Johnson's rule** gives the optimal sequence for $n$ jobs on two machines in the same order: pick the smallest processing time among all jobs; if it is on machine 1, schedule that job as early as possible; if it is on machine 2, schedule it as late as possible; remove the job and repeat.

**Planning hierarchy.** Aggregate planning (monthly or quarterly families), the master production schedule (MPS, specific end items), then material requirement planning (MRP). MRP takes as inputs the MPS, the bill of materials (BOM) and the inventory status, and produces planned order releases for components. MRP II extends this to capacity, finance and shop floor; ERP integrates the whole enterprise.

### A3. Lean, JIT and quality philosophies

- **Just-in-Time (JIT):** a pull system in which production is triggered by actual demand, so inventory is minimal. **Kanban** cards signal when to produce or move more material.
- **Lean manufacturing:** removes waste (*muda*). The seven wastes are overproduction, waiting, transport, over-processing, inventory, motion and defects.
- **5S:** Sort, Set in order, Shine, Standardise, Sustain.
- **Kaizen:** continuous incremental improvement.
- **Poka-yoke:** error-proofing devices that prevent defects.
- **Six Sigma:** 3.4 defects per million opportunities, improved through DMAIC (Define, Measure, Analyse, Improve, Control).

### A4. Forecasting

Forecasting estimates future demand from past data and judgement.

- **Qualitative methods:** Delphi method (anonymous expert rounds), market research, expert opinion.
- **Quantitative methods:** time series (past values only) and causal methods (regression against other variables).

**Time series components.** Trend (long-term direction), seasonal (regular calendar pattern), cyclic (longer irregular waves) and random (irregular).

**Moving average.** The mean of the last $n$ periods:

$$F_{t+1} = \frac{1}{n}\sum_{i=0}^{n-1} D_{t-i}$$

A larger $n$ smooths more but lags behind changes. A weighted moving average uses weights that sum to 1.

**Simple exponential smoothing:**

$$F_{t+1} = \alpha D_t + (1 - \alpha)F_t, \qquad 0 \le \alpha \le 1$$

The new forecast is the old forecast corrected by a fraction $\alpha$ of the last error. A large $\alpha$ puts more weight on recent data: the forecast is more responsive but less smooth. A small $\alpha$ gives a smooth but sluggish forecast. Typical values are 0.1 to 0.3.

**Forecast error measures.**

- Mean absolute deviation: $MAD = \sum|A_t - F_t|/n$.
- Mean squared error (MSE), mean absolute percentage error (MAPE) and bias (mean error).
- Tracking signal: $\sum(A_t - F_t)/MAD$; values within about $\pm 4$ indicate an unbiased forecast.

**Linear regression trend** $y = a + bx$ with

$$b = \frac{n\sum xy - \sum x\sum y}{n\sum x^2 - \left(\sum x\right)^2}, \qquad a = \bar{y} - b\bar{x}$$

### A5. Inventory control: the logic

**Why hold inventory.** To decouple stages of production, to cover demand and lead-time variability, to buy in economical lots and to buffer against shortages.

**Costs.**

- **Ordering (setup) cost $C_o$:** per order, independent of order size.
- **Holding (carrying) cost $C_h$:** per unit per year, covers storage, insurance, obsolescence and capital.
- **Shortage cost $C_s$:** lost sales or penalty.
- **Purchase cost $P$:** price paid per unit.

Ordering large lots means few orders but high average stock. Ordering small lots means low stock but many orders. Total cost has a minimum in between.

### A6. Economic order quantity (EOQ)

**Assumptions.** Constant known demand, instantaneous replenishment, fixed lead time, no shortages and constant unit price.

With annual demand $D$ and order size $Q$, the average stock is $Q/2$:

$$TC = \frac{D}{Q}C_o + \frac{Q}{2}C_h + DP$$

Setting $dTC/dQ = 0$ gives

$$Q^* = \sqrt{\frac{2DC_o}{C_h}}$$

At the optimum the annual ordering cost equals the annual holding cost, and the minimum variable cost is $\sqrt{2DC_oC_h}$.

- Number of orders per year: $D/Q^*$. Cycle time: $Q^*/D$.
- Reorder point: $ROP = d\times L$ (daily demand times lead time) plus safety stock.
- The cost curve is flat near $Q^*$, so small errors in $Q$ change cost very little.
- The purchase cost $DP$ does not change $Q^*$ when the price is constant.

**EPQ (economic production quantity).** When the item is produced gradually at rate $p$ greater than the demand rate $d$, the stock builds up slower than the lot size, so the maximum inventory is $Q(1 - d/p)$:

$$Q^* = \sqrt{\frac{2DC_o}{C_h\left(1 - \dfrac{d}{p}\right)}}$$

As $p \to \infty$, EPQ becomes EOQ.

**EOQ with planned shortages (backorders):**

$$Q^* = \sqrt{\frac{2DC_o}{C_h}\cdot\frac{C_h + C_s}{C_s}}$$

**Quantity discount.** Compute the EOQ for each price break. Reject infeasible ones and compare the total costs, including the purchase cost, at the feasible EOQ and at each break point.

**Safety stock.** A buffer for variability in demand and lead time, $SS = z\sigma_{LT}$, where $z$ comes from the required service level.

### A7. Inventory classification and systems

- **ABC analysis (Pareto):** by annual consumption value. A items are about 10 to 20 percent of the items but 70 to 80 percent of the value and need tight control. C items are about 50 percent of the items but about 5 percent of the value and need loose control. B items are in between.
- **VED:** vital, essential, desirable (by criticality). **FSN:** fast, slow, non-moving (by consumption rate). **HML:** high, medium, low (by unit price). **SDE:** scarce, difficult, easy (by availability).
- **Q-system (fixed order quantity, continuous review):** reorder a fixed quantity when stock hits the reorder level.
- **P-system (periodic review):** review at fixed intervals and order up to a maximum level.
- **Two-bin system** and **min-max system** are simple versions of these.

### A8. Break-even analysis

Costs are split into fixed costs $F$ (independent of volume) and variable costs $v$ per unit; the selling price is $p$.

$$BEP_{units} = \frac{F}{p - v}, \qquad BEP_{value} = \frac{F}{1 - v/p} = \frac{F}{\text{P/V ratio}}$$

- **Contribution** per unit $= p - v$.
- **P/V ratio** $= (p - v)/p$, the share of each sales rupee that contributes to fixed cost and profit.
- **Margin of safety** $=$ actual sales $-$ break-even sales.
- **Profit** $= (p - v)x - F$ for volume $x$.

**Assumptions.** Costs and revenue are linear in volume, price is constant, a single product (or constant mix) is made and production equals sales.

### A9. Plant location and layout

**Location factors.** Raw material, market, labour, power, transport, water, climate, government policy and taxes. Quantitative tools: factor rating, centre of gravity (centroid) method, break-even analysis and the transportation model.

**Layout types.**

| Layout | Arrangement | Suited to |
|---|---|---|
| Process (functional) | similar machines grouped together | job shops; flexible, but long material handling paths |
| Product (line) | machines in order of operations | mass production; low handling, high capital |
| Fixed position | the product stays; workers and equipment move | ships, aircraft, bridges |
| Group technology (cellular) | cells for part families | medium volume, medium variety |
| Combination | hybrid of the above | many real plants |

**Material handling principles.** Minimise distance, use gravity, move unit loads and mechanise where economical. Equipment: conveyors, cranes, forklifts and AGVs.

**Assembly line balancing.**

- Cycle time: $C = \text{available time}/\text{required output}$.
- Minimum number of workstations: $N_{min} = \lceil \sum t_i / C \rceil$.
- Line efficiency: $\sum t_i/(N C)\times 100$ percent.
- Balance delay $= 100$ percent minus efficiency.

Heuristics: largest candidate rule, ranked positional weight (Helgeson-Birnie) and Kilbridge-Wester. Systematic layout planning (SLP) uses the relationship chart (REL) and from-to chart.

### A10. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Types of production systems | Direct | Common | Common |
| PPC functions: routing, scheduling, dispatching | Direct | Very common | Very common |
| Johnson's rule, SPT, EDD | Conceptual | Common | Occasional |
| JIT, Kanban, lean, 5S, Six Sigma | Direct | Very common | Very common |
| Moving average and exponential smoothing | Numerical | Very common | Common |
| EOQ and total cost at EOQ | Numerical | Very common | Very common |
| EPQ and shortage model | Numerical | Common | Occasional |
| ABC, VED, FSN classification | Direct | Very common | Very common |
| Break-even point and P/V ratio | Numerical | Very common | Very common |
| Layouts and where each is used | Direct | Very common | Very common |
| Line balancing efficiency | Numerical | Common | Common |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Foundations

- **Industrial engineering (IE):** design, improvement and installation of integrated systems of people, materials, information, equipment and energy.
- **Production systems:** **job** (one-off, flexible, general-purpose machines), **batch** (moderate volume), **mass/flow** (high volume, special-purpose machines, line layout), **continuous process** (refineries, chemicals), **project** (construction).
- **Productivity** $= \dfrac{\text{output}}{\text{input}}$. Partial, multifactor and total productivity measures exist.

## 2. Production Planning and Control (PPC)

- **Functions:** planning, **routing** (path of work), **scheduling** (time of each operation), **dispatching** (issuing orders), **follow-up** (expediting), and **inspection**. 
- **Loading** assigns work to machines.
- **Gantt chart:** bar chart of the schedule versus time (Henry Gantt). **Johnson's rule** gives the optimal sequence for $n$ jobs on two machines: select the shortest processing time among all; if it is on machine 1, schedule that job first; if on machine 2, schedule it last; repeat.
- **Sequencing rules:** FCFS, SPT (shortest processing time minimises the mean flow time), EDD (earliest due date minimises maximum lateness), critical ratio.
- **Aggregate planning**, **Master Production Schedule (MPS)**, **Material Requirement Planning (MRP)**: inputs are the MPS, the bill of materials (BOM) and the inventory records. **MRP II**, **ERP**.
- **Just-in-Time (JIT)** and **Kanban:** pull system, minimal inventory, elimination of waste (*muda*). **Lean** manufacturing: seven wastes (overproduction, waiting, transport, over-processing, inventory, motion, defects). **5S:** Sort, Set in order, Shine, Standardise, Sustain. **Kaizen:** continuous improvement. **Poka-yoke:** error-proofing. **Six Sigma:** $3.4$ defects per million opportunities; DMAIC.

## 3. Forecasting

- **Qualitative:** Delphi method, market research, expert opinion. **Quantitative:** time series and causal (regression).
- **Moving average (n periods):** $F_{t+1} = \dfrac{1}{n}\sum_{i=0}^{n-1}D_{t-i}$.
- **Weighted moving average:** weights sum to $1$.
- **Simple exponential smoothing:**

$$F_{t+1} = \alpha\,D_t + (1-\alpha)\,F_t,\qquad 0 \le \alpha \le 1$$

  - A larger $\alpha$ gives more weight to recent data (more responsive but less smooth). Smaller $\alpha$ gives a smoother forecast. $\alpha$ is typically $0.1$ to $0.3$.
- **Forecast errors:** **MAD** (mean absolute deviation) $= \dfrac{\sum\lvert A_t - F_t\rvert}{n}$, **MSE**, **MAPE**; **bias** = mean error; **tracking signal** $= \dfrac{\sum (A_t - F_t)}{MAD}$ (acceptable within $\pm 4$ or so).
- **Linear regression (trend):** $y = a + b x$ with $b = \dfrac{n\sum xy - \sum x\sum y}{n\sum x^2 - (\sum x)^2}$.
- **Time series components:** trend, seasonal, cyclic, random (irregular).

## 4. Inventory control

- **Types:** raw material, work-in-process, finished goods, MRO items. **Costs:** ordering (setup) cost $C_o$, holding (carrying) cost $C_h$ per unit per year (storage, insurance, capital), shortage (stockout) cost, purchase cost.
- **Economic Order Quantity (EOQ)** (Wilson/Harris model; instantaneous replenishment, constant demand, no shortages):

$$Q^* = \sqrt{\frac{2\,D\,C_o}{C_h}}$$

  where $D$ is the annual demand.
  - **Total annual cost** $TC = \dfrac{D}{Q}C_o + \dfrac{Q}{2}C_h + D\,P$ (at $Q^*$ the ordering cost equals the holding cost, so the cost minimum is $\sqrt{2DC_oC_h} + DP$). 
  - **Number of orders per year** $= \dfrac{D}{Q^*}$. **Cycle time** $= \dfrac{Q^*}{D}$.
  - **Reorder point** $ROP = d \times L$ (daily demand $d$ times the lead time $L$) $+$ safety stock.
  - The total cost curve is flat near the EOQ; it is insensitive to small errors in $Q$.
- **Economic Production Quantity (EPQ)** (production rate $p$ greater than the demand rate $d$):

$$Q^* = \sqrt{\frac{2\,D\,C_o}{C_h\left(1 - \dfrac{d}{p}\right)}}$$

- **EOQ with planned shortages (backordering):** $Q^* = \sqrt{\dfrac{2DC_o}{C_h}\cdot\dfrac{C_h + C_s}{C_s}}$.
- **Quantity discount model:** compute EOQ at each price; take the feasible EOQ and compare total costs.
- **ABC analysis (Pareto):** A items (about $10\%$ to $20\%$ of items, $70\%$ to $80\%$ of the value) are tightly controlled; B items moderately; C items (about $50\%$ of items, $5\%$ of the value) loosely. **VED** (vital, essential, desirable); **FSN** (fast, slow, non-moving); **HML** (high, medium, low cost); **SDE**.
- **Systems:** **Q-system (fixed order quantity, continuous review)**, **P-system (periodic review, fixed interval)**, **two-bin system**, **Min-Max**.
- **Safety stock** buffers variability in demand and lead time: $SS = z\,\sigma_{LT}$.

## 5. Break-even analysis

- **Fixed costs** $F$ (do not vary with output), **variable costs** $v$ per unit, selling price $p$ per unit.

$$\text{BEP (units)} = \frac{F}{p - v},\qquad \text{BEP (sales value)} = \frac{F}{1 - \dfrac{v}{p}}$$

  - **Contribution** per unit $= p - v$. **P/V ratio** $= \dfrac{p - v}{p}$. **Margin of safety** $= \text{actual sales} - \text{BEP sales}$.
  - **Profit** $= (p - v)\,x - F$.
- **Assumptions:** linear costs and revenue, constant price, single product (or fixed mix), and production equals sales.

## 6. Plant location and layout

- **Location factors:** raw material, market, labour, power, transport, water, climate, government policy. Quantitative methods: **factor rating**, **centre of gravity (centroid) method**, **break-even analysis**, **transportation model**.
- **Layout types:**

| Layout | Arrangement | Suited to |
|---|---|---|
| **Process (functional)** | Similar machines grouped | Job shops, low volume, high variety; flexible but long handling paths |
| **Product (line)** | Machines in the order of operations | Mass production; low handling, high capital |
| **Fixed position** | The product stays; resources move | Ships, aircraft, bridges |
| **Group technology (cellular)** | Machine cells for part families | Medium volume, medium variety |
| **Combination** | Hybrid | Many plants |

- **Material handling principles:** minimise distance, use gravity, unit load, mechanise. **Equipment:** conveyors, cranes, forklifts, AGVs.
- **Line balancing (assembly line):** **cycle time** $C = \dfrac{\text{available time}}{\text{required output}}$; **minimum number of workstations** $= \left\lceil\dfrac{\sum t_i}{C}\right\rceil$; **line efficiency** $= \dfrac{\sum t_i}{N\,C}\times100\%$; **balance delay** $= 100\% - $ line efficiency. Methods: largest candidate rule, ranked positional weight (Helgeson-Birnie), Kilbridge-Wester.
- **Systematic Layout Planning (SLP):** relationship chart (REL), from-to chart.

## 7. Worked numericals

1. **EOQ.** $D = 2400$ units/year, $C_o = \text{Rs } 100$, $C_h = \text{Rs } 6$/unit/year: $Q^* = \sqrt{\dfrac{2\times2400\times100}{6}} = 283$ units. Orders per year $= 8.5$.
2. **Exponential smoothing.** $F_t = 100$, $D_t = 120$, $\alpha = 0.2$: $F_{t+1} = 0.2\times120 + 0.8\times100 = 104$.
3. **Break-even.** $F = 60000$, $p = 50$, $v = 30$: BEP $= \dfrac{60000}{20} = 3000$ units; sales value $= 150000$.
4. **Line balancing.** Total task time $= 18$ min, cycle time $= 4$ min: minimum stations $= \lceil 4.5\rceil = 5$; efficiency $= \dfrac{18}{5\times4} = 90\%$.
5. **EPQ.** $D = 12000$ per year over $250$ working days gives $d = 48$/day. With $C_o = 200$, $C_h = 2$ and $p = 120$/day, $1 - \dfrac{d}{p} = 0.6$, so $Q^* = \sqrt{\dfrac{2\times12000\times200}{2\times0.6}} = 2000$ units.

## 8. Common mistakes

- Using a different time unit for $D$ and $C_h$ in the EOQ formula (both must refer to a year).
- Including the purchase cost in the optimisation of EOQ (it does not affect the EOQ without discounts).
- Confusing the P/V ratio with the profit margin.
- In exponential smoothing, believing that a high $\alpha$ gives a smoother forecast; it does the opposite.
- Forgetting that the break-even point in value is $\dfrac{F}{\text{P/V ratio}}$.

## 9. Interconnections

- **Manufacturing:** line balancing, layout, tooling economics.
- **Operations research:** transportation, LP and CPM/PERT (next chapter).
- **Economics:** costs and depreciation.

## 10. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | EOQ formula | $\sqrt{\dfrac{2DC_o}{C_h}}$ | SSC JE 2017 | [ ] |
| 2 | At the EOQ | Ordering cost equals holding cost | RRB JE 2015 | [ ] |
| 3 | Break-even point formula | Fixed cost / (selling price $-$ variable cost per unit) | SSC JE 2018 | [ ] |
| 4 | Exponential smoothing with a large $\alpha$ | Responds quickly to recent changes | RRB JE 2014 | [ ] |
| 5 | ABC analysis is based on | Value of items (Pareto) | SSC JE 2016 | [ ] |
| 6 | JIT is a | Pull system minimising inventory | APPSC AEE 2012 | [ ] |
| 7 | Layout for mass production | Product (line) layout | SSC JE 2019 | [ ] |
| 8 | Layout for a ship building yard | Fixed position layout | RRB JE 2019 | [ ] |
| 9 | Routing is | Determining the path of the work through the plant | SSC JE 2015 | [ ] |
| 10 | Gantt chart shows | Schedule against time | RRB JE 2016 | [ ] |
| 11 | Johnson's rule is for | Sequencing jobs on two machines | SSC JE 2020 | [ ] |
| 12 | Delphi method is | A qualitative forecasting technique | RRB JE 2018 | [ ] |
| 13 | Six Sigma defect rate | $3.4$ per million opportunities | SSC JE 2021 | [ ] |
| 14 | Kanban means | Card signal in a pull system | APPSC AEE 2016 | [ ] |
| 15 | Safety stock is held to | Protect against demand and lead time variability | RRB JE 2017 | [ ] |

## 11. Revision checklist

- [ ] PPC functions and sequencing rules
- [ ] Forecasting formulas and errors
- [ ] EOQ, EPQ, ABC analysis
- [ ] Break-even formulas
- [ ] Layout types and line balancing
- [ ] JIT, Kanban, Lean, 5S, Six Sigma
