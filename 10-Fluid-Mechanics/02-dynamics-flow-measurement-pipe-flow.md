# 02. Fluid Dynamics, Flow Measurement and Pipe Flow

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: VHY

---

## Part A: Detailed Theory (read this first)

This chapter moves fluids from rest to motion. The central idea is that a moving fluid obeys the same conservation laws as any other body: mass, momentum and energy. Bernoulli's equation is energy conservation along a streamline; the momentum equation gives forces on bends, jets and vanes; flow meters convert a pressure difference into a flow rate; pipe flow adds friction, which turns mechanical energy into heat; open channel flow replaces pressure with a free surface; and the boundary layer explains drag. Every formula here is an application of these three conservation laws plus one empirical input: friction.

### A1. Euler's equation and Bernoulli's equation

**Physical picture.** Take a small fluid element moving along a streamline. Its acceleration along the streamline is produced by the net pressure force and the component of gravity. Newton's second law for the element gives Euler's equation:

$$\frac{dp}{\rho} + V\,dV + g\,dz = 0$$

Integrating for constant density gives Bernoulli's equation:

$$\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}$$

Each term has the dimension of length (head): pressure head, velocity (kinetic) head and elevation (datum) head. Multiplying by $\rho g$ gives pressure units; multiplying by $g$ gives energy per unit mass.

**Assumptions (examiners ask for these directly).**

- Flow is steady, so velocity at a point does not change with time.
- Flow is incompressible, so $\rho$ is constant.
- Flow is inviscid (frictionless), so no energy is dissipated.
- The equation applies along a single streamline. For irrotational flow it holds between any two points.
- No shaft work or heat transfer between the two points.

**Real-flow corrections.** With friction, head is lost: $H_1 = H_2 + h_L$. With a pump between the sections, add $H_p$ on the inlet side; with a turbine, subtract $H_t$ on the outlet side. For non-uniform velocity over a section, a kinetic energy correction factor $\alpha$ is used: $\alpha = 2$ for fully developed laminar flow in a circular pipe, and about 1.0 to 1.1 for turbulent flow.

**Hydraulic grade line (HGL) and total energy line (TEL).**

- TEL height $= p/\rho g + V^2/2g + z$. For an ideal fluid it is horizontal; with friction it slopes down in the flow direction.
- HGL height $= p/\rho g + z$. It always lies below the TEL by $V^2/2g$.
- Where the pipe goes above the HGL, the gauge pressure is negative (suction), which is the condition for cavitation or air release in a siphon.

**Three lines to remember.** Bernoulli is energy conservation; a pump raises the TEL; friction lowers it.

### A2. Momentum equation and force on bends

**Why it is needed.** Bernoulli tells you pressures and speeds but not the force the fluid exerts on a solid. Force requires momentum. For a control volume with steady flow, Newton's second law becomes:

$$\sum F = \dot{m}\,(V_{out} - V_{in})$$

It is a vector equation, so apply it separately in the x and y directions. The force $\sum F$ includes pressure forces on the inlet and outlet faces and the force $R$ exerted by the solid on the fluid. The force on the solid is $-R$.

**Pipe bend.** For a bend turning the flow through an angle $\theta$ with equal area:

$$F_x = p_1 A_1 - p_2 A_2 \cos\theta - \dot{m}(V_2\cos\theta - V_1)$$

$$F_y = -p_2 A_2 \sin\theta - \dot{m} V_2 \sin\theta$$

The force on the bend is the reaction of these components. Bends and reducers need anchor blocks because this force can be very large at high pressure.

**Common error.** Forgetting the pressure-area terms. For a free jet, pressure is atmospheric on both faces, so gauge pressure terms vanish and only the momentum change remains.

### A3. Impact of a jet on plates and vanes

**Physical picture.** A jet of water leaving a nozzle has momentum flux $\rho a V^2$. When it strikes a surface, that momentum is deflected or destroyed, and the change appears as force on the surface.

| Case | Force on the plate |
|---|---|
| Fixed vertical plate | $F = \rho a V^2$ |
| Moving vertical plate (single plate, velocity $u$) | $F = \rho a (V-u)^2$ |
| Series of plates or a wheel | $F = \rho a V (V-u)$ |
| Fixed inclined plate (angle $\theta$ to jet), normal force | $F_n = \rho a V^2 \sin\theta$ |
| Fixed curved symmetrical vane, hemispherical | $F = 2\rho a V^2$ |

**Why the series-of-plates formula differs.** A single moving plate recedes from the nozzle, so the jet length between nozzle and plate keeps growing; mass hitting the plate per second is only $\rho a (V-u)$. For a wheel with many plates, a new plate always intercepts the jet, so the entire jet mass flow $\rho a V$ is used. This is the key conceptual difference, and it is a frequent MCQ.

**Maximum efficiency for a moving flat plate.** Work done per second is $F\cdot u$. Maximizing $\rho a V (V-u) u$ for a series of plates gives $u = V/2$ and efficiency 50 percent. For a series of hemispherical vanes, the optimum is also $u = V/2$ with efficiency 100 percent in the ideal case. These results lead directly to the Pelton wheel in Fluid Machinery.

**Efficiency expression.** For a series of flat plates, $\eta = 2u(V-u)/V^2$, which peaks at 50 percent at $u = V/2$.

### A4. Flow measurement: how a pressure difference gives a flow rate

**Common principle.** Every obstruction meter makes the fluid speed up. By Bernoulli, speed increase means pressure decrease. Measuring the pressure drop gives the speed, and speed times area gives the discharge.

**Venturimeter.** Between inlet section 1 and throat section 2, with the same elevation:

$$p_1 - p_2 = \tfrac{1}{2}\rho (V_2^2 - V_1^2)$$

Using continuity $A_1 V_1 = A_2 V_2$:

$$Q_{th} = \frac{A_1 A_2}{\sqrt{A_1^2 - A_2^2}}\sqrt{2gh}$$

where $h$ is the pressure head difference. Actual flow $Q = C_d Q_{th}$ with $C_d$ about 0.95 to 0.99.

**Differential manometer.** If the meter is fitted with a U-tube containing a heavier fluid of specific gravity $S_m$ and flowing fluid of specific gravity $S$:

$$h = x\left(\frac{S_m}{S} - 1\right)$$

Orientation of the meter (horizontal, vertical, inclined) does not change $h$ when it is the piezometric head difference that is read by the manometer. This point is a popular conceptual MCQ.

**Why the venturi has a long diverging cone.** The diffuser recovers pressure gradually with an angle of 5 to 7 degrees, so separation is avoided and the permanent loss is only a few percent. An orifice meter has no recovery section, so its permanent loss is higher, but it is cheap and compact.

**Orifice meter.** Same formula as the venturimeter, with a lower $C_d$ (about 0.6 to 0.65) because the jet contracts to a vena contracta downstream of the plate.

**Pitot tube.** It measures stagnation pressure. At the stagnation point the velocity is zero, so $p_0 = p + \tfrac{1}{2}\rho V^2$. A Pitot-static tube therefore gives:

$$V = C_v\sqrt{2gh}$$

where $h$ is the head of the flowing fluid. For a gas flowing, convert the manometer head using the fluid densities.

**Rotameter.** A variable-area meter. A float rises in a tapered tube until upward drag and buoyancy balance its weight. The pressure drop is constant and the area changes, so the scale is nearly linear.

**Orifices and mouthpieces: coefficients.**

- $C_c = a_c/a$: contraction coefficient, about 0.62 for a sharp-edged orifice.
- $C_v = V_{actual}/V_{th}$: velocity coefficient, about 0.97 to 0.99.
- $C_d = C_c C_v$: discharge coefficient, about 0.61 to 0.62.
- Time to empty a tank of area $A$ from $H_1$ to $H_2$: $t = \dfrac{2A}{C_d a\sqrt{2g}}\left(\sqrt{H_1} - \sqrt{H_2}\right)$.

**Notches and weirs.**

- Rectangular: $Q = \tfrac{2}{3} C_d L \sqrt{2g}\,H^{3/2}$.
- Triangular (V-notch): $Q = \tfrac{8}{15} C_d \tan(\theta/2)\sqrt{2g}\,H^{5/2}$.
- A V-notch is preferred for small discharges because the head changes more for a given change in discharge, which improves accuracy.
- Velocity of approach correction replaces $H$ by $H + h_a$ with $h_a = V_a^2/2g$.
- End contractions reduce the effective length: $L_{eff} = L - 0.1 n H$.

### A5. Viscous flow in pipes: laminar and turbulent

**Reynolds number.** The ratio of inertial to viscous forces:

$$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$$

For pipe flow: laminar for $Re < 2000$, transitional from 2000 to 4000, turbulent above 4000. For flow over a flat plate, the critical value is about $5\times 10^5$.

**Laminar flow in a circular pipe (Hagen-Poiseuille).**

- Velocity profile is a paraboloid: $u = u_{max}\left(1 - r^2/R^2\right)$.
- $V_{avg} = u_{max}/2$.
- Shear stress varies linearly from zero at the centreline to maximum at the wall.
- Pressure drop:

$$\Delta p = \frac{32\mu L V}{D^2}$$

- Head loss: $h_f = \dfrac{32\mu L V}{\rho g D^2}$.
- Friction factor: $f = 64/Re$.
- Wall shear stress: $\tau_0 = \dfrac{\Delta p\,D}{4L}$.

**Turbulent flow.** Eddies mix momentum across the pipe. The velocity profile is flatter, with $V_{avg} \approx 0.8 u_{max}$. A thin viscous sublayer remains at the wall. Friction factor depends on $Re$ and on relative roughness $\epsilon/D$.

**Darcy-Weisbach equation.** The general head-loss formula for any pipe flow:

$$h_f = \frac{f L V^2}{2 g D}$$

Fanning friction factor is one-quarter of the Darcy factor. For smooth turbulent pipes, Blasius gives $f = 0.316\,Re^{-0.25}$ for $4000 < Re < 10^5$. The Moody chart plots $f$ against $Re$ for different $\epsilon/D$; at high $Re$ the curves become horizontal, which is the fully rough region where $f$ depends only on roughness.

**Hydraulic diameter.** For non-circular ducts, $D_h = 4A/P$ (area over wetted perimeter), used in place of $D$.

**Minor losses.** Losses at fittings are written as $K V^2/2g$.

| Fitting | Loss |
|---|---|
| Sudden enlargement | $(V_1 - V_2)^2/2g$ |
| Sudden contraction | $0.5 V_2^2/2g$ (approximately) |
| Pipe entrance (sharp) | $0.5 V^2/2g$ |
| Pipe exit | $V^2/2g$ |
| Gradual enlargement | $K (V_1-V_2)^2/2g$ |

Sudden enlargement derivation: apply momentum between the section just after the enlargement and a section where the flow is uniform; then apply energy. The Borda-Carnot result follows.

**Equivalent pipe (Dupuit).** A compound pipe is replaced by a single pipe with the same total head loss and discharge. For pipes in series, $L/D^5$ terms add. For parallel pipes, the head loss is the same across each and discharges add.

**Power transmission through a pipe.** For a given supply head $H$, the power at the nozzle outlet is maximum when friction head loss $h_f = H/3$. The maximum efficiency is then 66.7 percent. The reasoning: increasing flow increases kinetic energy delivered but also friction losses; the product of the two peaks at one third.

**Water hammer.** Sudden valve closure stops the water column, and its momentum converts into a pressure wave travelling at the speed of sound in the pipe:

$$\Delta p = \rho c V$$

For gradual closure (closure time greater than $2L/c$), the pressure rise is lower. Surge tanks, relief valves and slow-closing valves are the cures.

**Siphon.** Flow through a pipe above the supply level is possible because atmospheric pressure pushes the water to the summit. The summit pressure must remain above the vapour pressure; typically a maximum height of about 7.6 m of water at sea level.

### A6. Open channel flow

**Physical picture.** In an open channel the driving force is gravity along the bed slope, not a pressure gradient, and the pressure at the surface is atmospheric. Steady uniform flow occurs when the gravity component along the slope balances the wall friction.

**Chezy and Manning.**

$$V = C\sqrt{mS}, \qquad V = \frac{1}{n} m^{2/3} S^{1/2}$$

where $m = A/P$ is the hydraulic mean depth (hydraulic radius), $S$ is the bed slope and $n$ is Manning's roughness. Discharge $Q = AV$.

**Best hydraulic section.** For a given area, the section with the least wetted perimeter carries the most flow.

- Rectangular: $b = 2y$, and $m = y/2$.
- Trapezoidal: half of a regular hexagon, side slope 60 degrees, and $m = y/2$.
- Circular: maximum discharge at $0.95D$ depth; maximum velocity at $0.81D$.

**Specific energy.** $E = y + V^2/2g$ measured from the channel bed. For a given discharge there are two depths (subcritical, supercritical) with the same specific energy, and one critical depth where $E$ is minimum.

For a rectangular channel:

$$y_c = \left(\frac{q^2}{g}\right)^{1/3}, \qquad E_{min} = \tfrac{3}{2} y_c$$

where $q = Q/b$.

**Froude number.** $Fr = V/\sqrt{gy}$ for a rectangular channel (the ratio of flow velocity to the speed of a shallow-water wave).

- $Fr < 1$: subcritical, tranquil, wave can travel upstream.
- $Fr = 1$: critical.
- $Fr > 1$: supercritical, rapid, wave cannot travel upstream.

**Hydraulic jump.** A sudden change from supercritical to subcritical flow, with considerable energy loss as turbulence. For a rectangular channel:

$$\frac{y_2}{y_1} = \tfrac{1}{2}\left(\sqrt{1 + 8Fr_1^2} - 1\right)$$

Energy loss $= \dfrac{(y_2 - y_1)^3}{4 y_1 y_2}$. Jumps are used downstream of spillways to dissipate energy. Momentum is conserved across the jump, not energy.

### A7. Boundary layer and drag

**Concept.** When a real fluid flows over a surface, the fluid layer at the wall sticks (no-slip condition), and a thin region near the wall carries all the velocity variation. This region is the boundary layer. Outside it, the flow is effectively inviscid and Bernoulli applies.

**Growth.** The layer starts laminar, then transitions to turbulent at $Re_x \approx 5\times 10^5$. Laminar (Blasius) results:

$$\delta = \frac{5.0\,x}{\sqrt{Re_x}}, \qquad C_f = \frac{1.328}{\sqrt{Re_L}}$$

Turbulent boundary layers are thicker and grow faster, but carry more momentum near the wall, so they resist separation better. This is why golf balls have dimples.

**Thicknesses.**

- Displacement thickness $\delta^*$: how far the external streamlines are pushed outward by the layer.
- Momentum thickness $\theta$: momentum loss in the layer.
- Shape factor $H = \delta^*/\theta$. Laminar flat plate: 2.59. Turbulent: about 1.3 to 1.4. A rising $H$ warns of separation.

**Separation.** In an adverse pressure gradient, the fluid near the wall loses momentum, stops and reverses. At the separation point $\left.\dfrac{\partial u}{\partial y}\right|_{y=0} = 0$. Downstream is a wake with low pressure, producing form (pressure) drag.

**Drag.**

$$F_D = C_D\,\tfrac{1}{2}\rho V^2 A$$

Total drag is friction drag plus pressure drag. Streamlined bodies have mostly friction drag; bluff bodies have mostly pressure drag. Stokes' law for a small sphere in creeping flow ($Re < 1$): $F_D = 3\pi\mu D V$, so $C_D = 24/Re$. Terminal velocity is reached when weight equals buoyancy plus drag:

$$V_t = \frac{g D^2 (\rho_s - \rho_f)}{18\mu}$$

**Lift.** $F_L = C_L\,\tfrac{1}{2}\rho V^2 A$. A rotating cylinder in a stream experiences lift from circulation (Magnus effect), explaining the curve of a spinning ball. The Kutta-Joukowski theorem gives lift per unit span $= \rho V \Gamma$.

### A8. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Bernoulli assumptions and HGL/TEL | Direct | Very common | Common |
| Venturimeter discharge and manometer head | Numerical | Very common | Common |
| Jet on plates (moving, series) | Numerical | Common | Common |
| Orifice coefficients and time to empty | Numerical | Common | Occasional |
| Notch and weir discharge | Direct | Common | Common |
| Laminar vs turbulent, Reynolds number | Direct | Very common | Very common |
| Darcy-Weisbach, friction factor, Hagen-Poiseuille | Numerical | Very common | Common |
| Power transmission, $h_f = H/3$ | Direct | Common | Occasional |
| Water hammer, siphon | Conceptual | Occasional | Occasional |
| Open channel, Manning, Froude, hydraulic jump | Numerical | Common | Occasional |
| Boundary layer, separation, drag | Conceptual | Common | Common |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Euler's equation and Bernoulli's equation

- **Euler's equation** (along a streamline, inviscid flow):

$$\frac{dp}{\rho} + V\,dV + g\,dz = 0$$

- **Bernoulli's equation** (steady, incompressible, inviscid, along a streamline):

$$\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}$$

| Term | Name |
|---|---|
| $\dfrac{p}{\rho g}$ | Pressure head |
| $\dfrac{V^2}{2g}$ | Velocity (kinetic) head |
| $z$ | Datum (potential) head |

- **Assumptions:** steady, incompressible, frictionless (inviscid), flow along a streamline, only gravity and pressure forces act, no energy added or removed.
- **With losses and machines:** $H_1 + H_{pump} = H_2 + h_L + H_{turbine}$.
- **Kinetic energy correction factor** $\alpha$: $1$ for uniform flow; $2$ for laminar flow in a pipe. **Momentum correction factor** $\beta$: $\dfrac43$ for laminar pipe flow.
- **Hydraulic grade line (HGL):** $\dfrac{p}{\rho g} + z$. **Total energy line (TEL):** $\dfrac{p}{\rho g} + \dfrac{V^2}{2g} + z$. TEL lies above HGL by the velocity head and falls in the flow direction for real fluids.
- **Momentum equation:** force on a control volume $F = \dot{m}\,(V_2 - V_1)$. **Applications:** force on a pipe bend, force on a nozzle, force of a jet on a plate.

## 2. Jet force

- Force by a jet of area $a$ and velocity $V$:
  - on a **fixed vertical plate**: $F = \rho a V^2$;
  - on a **moving plate** (velocity $u$ in the direction of the jet): $F = \rho a (V-u)^2$;
  - on a **series of moving plates** (such as a wheel): $F = \rho a V (V-u)$;
  - on a **fixed curved vane** (symmetrical, turning the jet by $180^\circ$): $F = 2\rho a V^2$.

## 3. Flow measurement

| Device | Principle / formula | Notes |
|---|---|---|
| **Venturimeter** | $Q = C_d\,\dfrac{A_1A_2}{\sqrt{A_1^2 - A_2^2}}\sqrt{2gh}$ | $h$ is the pressure head difference; $C_d \approx 0.95$ to $0.99$; gradual contraction, low loss; the diffuser recovers pressure |
| **Orifice meter** | Same form, $C_d \approx 0.6$ to $0.65$ | Cheap, compact, high head loss |
| **Flow nozzle** | Between the two | Moderate loss |
| **Pitot tube** | $V = \sqrt{2g h}$ (with $C_v$), measures stagnation pressure | Used for point velocity; in compressible flow, with Mach number correction |
| **Rotameter** | Variable-area, constant pressure drop | Vertical, tapered tube with float |
| **Notches and weirs** | Open channel | Below |
| **Electromagnetic, ultrasonic, turbine meters** | Modern | |

- With a differential manometer containing a liquid of specific gravity $S_m$ and flowing fluid specific gravity $S$:

$$h = x\left(\frac{S_m}{S} - 1\right)$$

- Venturimeter in inclined position gives the same discharge (the manometer reading accounts for the datum).

### Orifices, mouthpieces and jets

- **Torricelli's theorem:** theoretical velocity $V = \sqrt{2gH}$.
- **Coefficients:**

$$C_c = \frac{a_c}{a_0},\quad C_v = \frac{V_{actual}}{V_{theoretical}},\quad C_d = C_c\,C_v$$

For a sharp-edged orifice: $C_c \approx 0.62$, $C_v \approx 0.97$ to $0.98$, $C_d \approx 0.60$ to $0.62$. **Vena contracta** is the section of minimum jet area at about $\dfrac{d}{2}$ downstream of the orifice.

- **Discharge** $Q = C_d\,a\sqrt{2gH}$. For a **large rectangular orifice:** $Q = \dfrac23 C_d\,b\sqrt{2g}\,(H_2^{3/2} - H_1^{3/2})$.
- **Time to empty a tank** (area $A$, from $H_1$ to $H_2$): $t = \dfrac{2A}{C_d\,a\sqrt{2g}}\left(\sqrt{H_1} - \sqrt{H_2}\right)$.
- **Jet trajectory:** $y = \dfrac{g x^2}{2V^2}$; the horizontal range for a jet from a height $h_0$ above the ground: $x = 2\sqrt{H\,y}$ ($H$ is head, $y$ the vertical fall).
- **External cylindrical mouthpiece:** running full, $C_d = 0.855$. **Internal (Borda) mouthpiece:** running free, $C_c = C_d = 0.5$; running full, $C_d = 0.707$.

### Notches and weirs

- **Rectangular notch/weir:** $Q = \dfrac23 C_d\,L\sqrt{2g}\,H^{3/2}$. **With end contractions (Francis):** $L_{eff} = L - 0.1\,n\,H$. **Velocity of approach** adds a head $h_a = \dfrac{V_a^2}{2g}$.
- **Triangular (V) notch:** $Q = \dfrac{8}{15} C_d\sqrt{2g}\,\tan\dfrac\theta2\,H^{5/2}$; best for small discharges as the head measured is large relative to the flow.
- **Trapezoidal (Cipolletti) weir:** side slopes $1$ horizontal to $4$ vertical, which compensates for the end contractions.
- **Broad-crested weir:** $Q = 1.705\,C_d\,L\,H^{3/2}$; **ogee** and **sharp-crested** types also exist.

## 4. Viscous flow and pipe flow

- **Reynolds number:** $\text{Re} = \dfrac{\rho V D}{\mu} = \dfrac{VD}{\nu}$: the ratio of inertia to viscous forces.
  - **Pipe flow:** laminar for $\text{Re} < 2000$, transitional from $2000$ to $4000$, turbulent for $\text{Re} > 4000$.
  - **Flat plate boundary layer:** the transition at $\text{Re}_x \approx 5\times10^5$.
- **Entrance length:** laminar $\approx 0.05\,\text{Re}\,D$; turbulent $\approx 10D$ to $60D$.

### Laminar flow in a circular pipe (Hagen-Poiseuille)

- **Velocity profile** is parabolic:

$$u(r) = u_{max}\left(1 - \frac{r^2}{R^2}\right),\qquad u_{max} = 2\,V_{avg}$$

- **Pressure drop:**

$$\Delta p = \frac{32\,\mu\,V L}{D^2},\qquad Q = \frac{\pi\,\Delta p\,D^4}{128\,\mu\,L}$$

- **Darcy friction factor** for laminar flow: $f = \dfrac{64}{\text{Re}}$. **Wall shear stress** $\tau_0 = \dfrac{\Delta p\,D}{4L}$.
- **Laminar flow between parallel plates:** $u_{max} = \dfrac32 V_{avg}$; $Q$ per unit width $= \dfrac{h^3\,\Delta p}{12\mu L}$.
- **Couette flow** (between a fixed and a moving plate): linear velocity profile.

### Head loss

- **Darcy-Weisbach equation (major loss):**

$$h_f = \frac{f\,L\,V^2}{2\,g\,D}$$

  - Fanning friction factor $f' = \dfrac{f}{4}$, giving $h_f = \dfrac{4f'LV^2}{2gD}$.
  - **Turbulent flow:** $f$ depends on Re and relative roughness $\dfrac{\varepsilon}{D}$ (Moody chart). For smooth pipes, Blasius gives $f = \dfrac{0.316}{\text{Re}^{0.25}}$ for $4000 < \text{Re} < 10^5$. For fully rough flow, $f$ depends only on $\dfrac{\varepsilon}{D}$ (von Karman). Colebrook equation covers the transition zone.
- **Hydraulic diameter** for non-circular conduits: $D_h = \dfrac{4A}{P}$ (wetted perimeter $P$). **Hydraulic radius** $R_h = \dfrac{A}{P}$.
- **Minor losses:** $h_m = K\dfrac{V^2}{2g}$.

| Fitting | Loss |
|---|---|
| Sudden enlargement | $\dfrac{(V_1 - V_2)^2}{2g}$ (Borda-Carnot) |
| Sudden contraction | $0.5\dfrac{V_2^2}{2g}$ (approx.), $\dfrac{V_2^2}{2g}\left(\dfrac{1}{C_c} - 1\right)^2$ |
| Pipe entrance (sharp) | $0.5\dfrac{V^2}{2g}$ |
| Pipe exit | $1.0\dfrac{V^2}{2g}$ |
| Gradual enlargement | $K\dfrac{(V_1 - V_2)^2}{2g}$ |
| Bends, valves | $K\dfrac{V^2}{2g}$ with $K$ from tables |

- **Equivalent length** $L_e$ gives the same head loss as the fitting: $L_e = \dfrac{K\,D}{f}$.
- **Pipes in series:** same discharge, additive losses. **Pipes in parallel:** same head loss, additive discharges. **Equivalent pipe (Dupuit):** $\dfrac{L}{D^5} = \sum\dfrac{L_i}{D_i^5}$.
- **Power transmission through pipes:** efficiency $\eta = \dfrac{H - h_f}{H}$. Maximum power is delivered when $h_f = \dfrac{H}{3}$, and the corresponding maximum efficiency is $66.7\%$.
- **Water hammer:** pressure surge from sudden valve closure. Pressure rise $\Delta p = \rho\,c\,\Delta V$, with wave speed $c = \sqrt{\dfrac{K}{\rho}}$ (modified for pipe elasticity). Rapid closure is when $t < \dfrac{2L}{c}$. Relief is by surge tanks and relief valves.
- **Siphon:** highest point must stay above vapour pressure (about $7.6$ m of water maximum practical suction head).

## 5. Open channel flow

- **Chezy's formula:** $V = C\sqrt{R_h\,S}$. **Manning's formula:** $V = \dfrac{1}{n}R_h^{2/3}S^{1/2}$, with $C = \dfrac{R_h^{1/6}}{n}$.
- **Most economical (best hydraulic) section:** for a given area and slope, a section giving the maximum discharge (minimum wetted perimeter).
  - **Rectangular:** $b = 2y$, so $R_h = \dfrac{y}{2}$.
  - **Trapezoidal:** half of a regular hexagon; $R_h = \dfrac{y}{2}$, and the sloping sides are tangent to the semicircle of radius $y$.
  - **Triangular:** side slopes at $45^\circ$ to the vertical.
  - **Circular:** maximum discharge at depth $0.95D$; maximum velocity at $0.81D$.
- **Specific energy** $E = y + \dfrac{V^2}{2g}$. **Critical depth** $y_c$ gives minimum specific energy for a given discharge; for a rectangular channel, $y_c = \left(\dfrac{q^2}{g}\right)^{1/3}$ ($q$ is discharge per unit width) and $E_{min} = \dfrac32 y_c$.
- **Froude number** $\text{Fr} = \dfrac{V}{\sqrt{g\,y}}$: subcritical (tranquil) for $\text{Fr} < 1$, critical for $\text{Fr} = 1$, supercritical (rapid) for $\text{Fr} > 1$.
- **Hydraulic jump:** transition from supercritical to subcritical flow with energy loss. Conjugate depths: 

$$\frac{y_2}{y_1} = \frac12\left(\sqrt{1 + 8\,\text{Fr}_1^2} - 1\right),\qquad \text{energy loss} = \frac{(y_2 - y_1)^3}{4\,y_1\,y_2}$$

## 6. Boundary layer theory

- **Boundary layer:** a thin region near a solid surface where viscous effects are significant; outside it the flow is nearly inviscid. **Thickness $\delta$** is the distance at which $u = 0.99\,U_\infty$.
- **Displacement thickness** $\delta^*$: distance by which the external streamlines are displaced. **Momentum thickness** $\theta$: loss of momentum.
- **Laminar boundary layer on a flat plate (Blasius):** $\delta = \dfrac{5\,x}{\sqrt{\text{Re}_x}}$; local skin friction coefficient $C_f = \dfrac{0.664}{\sqrt{\text{Re}_x}}$; average over length $L$: $C_D = \dfrac{1.328}{\sqrt{\text{Re}_L}}$.
- **Turbulent boundary layer:** thicker, $\delta \propto x^{4/5}$, with higher wall shear stress.
- **Separation:** occurs when the pressure gradient is adverse ($\dfrac{dp}{dx} > 0$) and the fluid near the wall has insufficient momentum; at the point of separation, $\left.\dfrac{\partial u}{\partial y}\right|_{wall} = 0$. A turbulent layer resists separation better than a laminar one (golf-ball dimples).
- **Drag:** total drag $=$ **friction (skin) drag** $+$ **pressure (form) drag**.

$$F_D = C_D\,\tfrac12\rho\,V^2\,A$$

  - **Streamlining** reduces the form drag. A sphere's drag coefficient falls suddenly at $\text{Re} \approx 3\times10^5$ (drag crisis). **Stokes' law** for small spheres ($\text{Re} < 1$): $F_D = 3\pi\mu\,d\,V$; **terminal velocity** $V_t = \dfrac{d^2(\rho_s - \rho)g}{18\mu}$.
  - **Lift** $F_L = C_L\,\tfrac12\rho V^2 A$. **Magnus effect:** lift on a rotating cylinder or sphere.

## 7. Worked numericals

1. **Bernoulli.** Horizontal pipe, $d_1 = 300$ mm, $d_2 = 150$ mm, $V_1 = 2$ m/s, $p_1 = 200$ kPa: $V_2 = 2\times 4 = 8$ m/s. $p_2 = p_1 + \tfrac12\rho\,(V_1^2 - V_2^2) = 200000 + 500(4 - 64) = 170$ kPa.
2. **Venturimeter.** $d_1 = 0.2$ m, $d_2 = 0.1$ m, $h = 0.5$ m, $C_d = 0.98$: $A_1 = 0.0314$, $A_2 = 0.00785$; $\dfrac{A_1A_2}{\sqrt{A_1^2 - A_2^2}} = 0.00812$; $Q = 0.98\times 0.00812\times\sqrt{2(9.81)(0.5)} = 0.0249$ m$^3$/s.
3. **Darcy.** $L = 500$ m, $D = 0.1$ m, $V = 2$ m/s, $f = 0.02$: $h_f = \dfrac{0.02\times 500\times 4}{2\times 9.81\times 0.1} = 20.4$ m.
4. **Laminar flow.** $\text{Re} = 1000$: $f = 0.064$.
5. **V-notch.** $\theta = 90^\circ$, $C_d = 0.6$, $H = 0.2$ m: $Q = \dfrac{8}{15}(0.6)(4.43)(1)(0.2)^{2.5} = 0.0253$ m$^3$/s.
6. **Hydraulic jump.** $\text{Fr}_1 = 3$: $\dfrac{y_2}{y_1} = \dfrac12(\sqrt{73} - 1) = 3.77$.

## 8. Common mistakes

- Applying Bernoulli across a pump, turbine, or a region with large losses without adding the corresponding terms.
- Using $\text{Re}$ based on the radius instead of the diameter.
- Using the Darcy friction factor $f$ in the Fanning equation and vice versa (a factor of $4$).
- Taking $u_{max} = 2V_{avg}$ for turbulent flow (valid only for laminar flow in a circular pipe; for turbulent flow $V_{avg} \approx 0.8\,u_{max}$).
- Reading the venturimeter equation with a manometer deflection instead of the head of the flowing fluid.

## 9. Interconnections

- **Thermodynamics:** the steady-flow energy equation reduces to Bernoulli for incompressible, frictionless flow.
- **Fluid machinery:** the momentum equation gives the Euler equation of turbomachines.
- **Heat transfer:** the boundary layer concept links to the convection coefficients.

## 10. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Bernoulli's equation is based on | Conservation of energy | SSC JE 2017 | [ ] |
| 2 | Reynolds number for laminar pipe flow | Below $2000$ | RRB JE 2015 | [ ] |
| 3 | Friction factor for laminar flow | $\dfrac{64}{\text{Re}}$ | SSC JE 2018 | [ ] |
| 4 | Ratio of maximum to average velocity, laminar pipe flow | $2$ | RRB JE 2014 | [ ] |
| 5 | Venturimeter measures | Discharge through a pipe | SSC JE 2016 | [ ] |
| 6 | Pitot tube measures | Velocity at a point | APPSC AEE 2012 | [ ] |
| 7 | Coefficient of discharge $C_d$ equals | $C_c\times C_v$ | SSC JE 2019 | [ ] |
| 8 | Maximum power transmission through a pipe occurs when head loss is | One third of the supply head | RRB JE 2019 | [ ] |
| 9 | Hydraulic mean depth of a circular pipe flowing full | $\dfrac{D}{4}$ | SSC JE 2015 | [ ] |
| 10 | Best rectangular channel section | Width equal to twice the depth | RRB JE 2016 | [ ] |
| 11 | Froude number for critical flow | $1$ | SSC JE 2020 | [ ] |
| 12 | Water hammer is caused by | Sudden closure of a valve | RRB JE 2018 | [ ] |
| 13 | Boundary layer separation occurs due to | Adverse pressure gradient | SSC JE 2021 | [ ] |
| 14 | Darcy-Weisbach formula | $h_f = \dfrac{fLV^2}{2gD}$ | APPSC AEE 2016 | [ ] |
| 15 | Triangular notch is suited to | Measuring small discharges | RRB JE 2017 | [ ] |
| 16 | Hydraulic jump | Transition from supercritical to subcritical flow | SSC JE 2022 | [ ] |
| 17 | Pressure rise from a jet on a normal fixed plate | Force $= \rho a V^2$ | RRB JE 2013 | [ ] |

## 11. Revision checklist

- [ ] Bernoulli assumptions and the energy lines
- [ ] Venturimeter, orifice, pitot, notch formulas
- [ ] Hagen-Poiseuille, Darcy-Weisbach, minor losses
- [ ] Open-channel best sections, Froude number, hydraulic jump
- [ ] Boundary layer thicknesses, separation and drag
