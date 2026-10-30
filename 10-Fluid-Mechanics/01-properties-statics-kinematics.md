# 01. Fluid Properties, Fluid Statics and Kinematics

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: VHY

---

## Part A: Detailed Theory (read this first)

Fluid mechanics describes how liquids and gases behave at rest (statics), in motion without regard to forces (kinematics), and under forces (dynamics, next chapter). This first chapter builds the vocabulary and the two most useful tools: the hydrostatic pressure law and the continuity equation.

### A1. What a fluid is

- A **solid** resists a shear force by deforming a fixed amount; a **fluid** deforms continuously for as long as any shear force acts, however small. This one property is the definition. Consequently a fluid at rest can sustain **no shear stress**, only normal pressure.
- **Liquids** have a definite volume, are almost incompressible and form a free surface. **Gases** expand to fill any container and are highly compressible. Both are treated as fluids; vapours are gases near their condensation point.
- **Continuum hypothesis.** A fluid is made of molecules, but we treat it as continuous so that density, velocity and pressure are smooth functions of position. This holds when the mean free path is far smaller than the smallest dimension of the flow (Knudsen number $\ll 1$). It fails for very rarefied gases at high altitude.
- **Ideal fluid** is an idealisation: no viscosity and incompressible. **Real fluids** have viscosity, which gives shear stresses, boundary layers and energy loss.

### A2. Fluid properties: meaning and behaviour

- **Density, specific weight, specific gravity.** $\rho$ is mass per unit volume; $w = \rho g$ is weight per unit volume; specific gravity is the ratio to the density of water (a pure number). Water: $1000$ kg/m$^3$; mercury: $13{,}600$; air: $1.2$. Density of a liquid changes only slightly with temperature and pressure; that of a gas changes a lot (ideal gas $\rho = p/RT$).
- **Viscosity: the origin.** Consider a fluid between a fixed plate and a plate moving at $U$. The fluid sticks to each surface (**no-slip condition**), so a velocity gradient $du/dy$ develops. Fast layers drag slow layers, producing a shear stress. Newton's law of viscosity states that the stress is proportional to the velocity gradient:
$$\tau = \mu\frac{du}{dy}$$
  The constant $\mu$ is the **dynamic viscosity**. $\nu = \mu/\rho$ is the **kinematic viscosity** (momentum diffusivity). Viscosity is the property that makes fluid resist flow; it is the reason for pressure drop in pipes and drag on bodies.
- **Temperature effect.** In **liquids**, viscosity arises from intermolecular cohesion, which weakens when heated, so $\mu$ **falls** with temperature (oil gets thinner when hot). In **gases**, viscosity arises from momentum exchange by molecular motion, which increases with temperature, so $\mu$ **rises**. Pressure has little effect except at extremes.
- **Newtonian and non-Newtonian fluids.** Newtonian fluids have a constant $\mu$ (water, air, thin oils). In non-Newtonian fluids, $\mu$ varies with the shear rate: *pseudoplastic* (shear thinning; paint, blood), *dilatant* (shear thickening; wet sand, cornflour paste), *Bingham plastic* (flows only above a yield stress; toothpaste, mud), *thixotropic* (viscosity decreases with time under shear; some paints), *rheopectic* (increases with time).
- **Surface tension.** At a liquid surface, molecules are pulled inward by their neighbours, and the surface behaves like a stretched membrane with tension $\sigma$ (N/m). It makes droplets spherical. Pressure excess inside a droplet of diameter $d$: $\Delta p = 4\sigma/d$; in a soap bubble with two surfaces: $8\sigma/d$; in a cylindrical jet: $2\sigma/d$.
- **Capillarity.** When a thin tube dips in a liquid, the adhesion to the wall competes with cohesion in the liquid. If adhesion wins (water-glass, contact angle below $90^\circ$), the liquid rises; if cohesion wins (mercury-glass, angle above $90^\circ$), it is depressed. Height $h = \dfrac{4\sigma\cos\theta}{\rho g d}$, inversely proportional to the diameter.
- **Compressibility.** The bulk modulus $K = -V\,dp/dV$ measures resistance to volume change. It is large for liquids ($2.2$ GPa for water) and small for gases (for isothermal gas $K = p$, for isentropic $K = \gamma p$). Wave speed $c = \sqrt{K/\rho}$; in an ideal gas, $c = \sqrt{\gamma RT}$. Flow may be treated as incompressible when the Mach number is below about $0.3$.
- **Vapour pressure and cavitation.** A liquid boils when its pressure falls to its vapour pressure (which rises with temperature). In a flowing liquid, if the local pressure drops (at a high-velocity throat, pump inlet, propeller tip) to the vapour pressure, bubbles form and are carried into higher-pressure regions, where they collapse violently, causing noise, vibration and pitting of the surface (**cavitation**).

### A3. Pressure and fluid statics

- **Pascal's law.** In a fluid at rest, pressure at a point is the same in every direction. (Proof: take a small wedge element; with no shear stress, force balance in each direction shows $p_x = p_y = p_n$.) Also, a pressure applied to a confined fluid is transmitted undiminished. This is the working principle of the hydraulic press, jack and brake: a small force on a small piston gives a large force on a large piston, in the ratio of areas.
- **Hydrostatic equation.** Consider a vertical column of fluid; the weight of the column is balanced by the pressure difference between top and bottom, so $dp/dz = -\rho g$. For constant density $p = p_0 + \rho g h$. **Pressure increases linearly with depth, and depends only on depth, density and $g$, not on the shape of the container** (hydrostatic paradox). Surfaces of equal pressure (isobars) are horizontal.
- **Pressure measures.** Absolute pressure is measured from zero (vacuum). Gauge pressure is relative to the atmosphere. Atmospheric pressure is about $101.3$ kPa, equal to $10.33$ m of water or $760$ mm of mercury.
- **Manometers.** A manometer applies the hydrostatic equation to a liquid column: moving down in a fluid increases pressure by $\rho g h$; moving up decreases it. Procedure: start at a known pressure, add terms going down, subtract going up, and equate at the end. A high-density liquid (mercury) is used for large pressures; a light liquid or an inclined tube is used for small ones. A **differential manometer** gives the pressure difference between two points. Mechanical gauges (Bourdon) are used for higher pressures.

### A4. Hydrostatic force on a submerged plane surface

- Pressure acts normally on a submerged surface and grows with depth, so it is not uniform. The total force is the integral of pressure over the area. For a plane surface, integration shows that
$$F = \rho g\bar h A$$
  where $\bar h$ is the depth of the centroid. This is the pressure at the centroid times the area. It holds for any shape and any inclination.
- **Centre of pressure.** The resultant force acts through the point where the moment of the distributed force equals the moment of the resultant. Since pressure is larger at greater depth, the line of action is **below** the centroid:
$$h_{cp} = \bar h + \frac{I_G\sin^2\theta}{A\bar h}$$
  The correction term is always positive, so the centre of pressure is below the centroid (except for a horizontal surface, where pressure is uniform and the two coincide). As the surface goes deeper, the centre of pressure approaches the centroid.
- **Standard results:** a vertical rectangular gate with its top edge at the free surface has the centre of pressure at two-thirds of its depth from the surface. A vertical rectangle of width $b$ and depth $d$: $F = \tfrac{1}{2}\rho g b d^2$.
- **Curved surfaces.** Resolve into horizontal and vertical components. The horizontal component $F_H$ equals the force on the vertical projection of the surface (and acts through its centre of pressure). The vertical component $F_V$ equals the weight of the liquid vertically above the surface up to the free surface (real, or imaginary if the liquid is below the surface), acting through the centroid of that volume. The resultant is $\sqrt{F_H^2 + F_V^2}$, inclined at $\tan^{-1}(F_V/F_H)$. This applies to dams, tainter gates and tanks.

### A5. Buoyancy and stability

- **Archimedes' principle.** A body immersed in a fluid experiences an upward force equal to the weight of the fluid displaced, acting at the **centre of buoyancy $B$**, the centroid of the displaced volume. Origin: the pressure on the underside of the body exceeds that on the top, because the pressure increases with depth.
- **Floating.** A body floats if its average density is less than the fluid's. A fraction $\rho_{body}/\rho_{fluid}$ of its volume is submerged. A ship floats because its hollow shape displaces a large volume.
- **Stability of a submerged body.** Stable if the centre of gravity $G$ is **below** the centre of buoyancy $B$, because a tilt produces a restoring couple. Neutral if they coincide. Unstable if $G$ is above $B$. A submarine ballasts to keep $G$ low.
- **Stability of a floating body.** When a ship tilts, the shape of the displaced volume changes and $B$ shifts toward the lower side. The vertical line through the new $B$ cuts the original centreline at the **metacentre $M$**. If $M$ is above $G$, the weight and buoyancy form a restoring couple (stable); if below, an overturning couple (unstable).
$$BM = \frac{I}{V_{sub}},\qquad GM = BM - BG$$
  The **metacentric height $GM$** is the measure of stability. A large $GM$ gives a stiff ship (short roll period, uncomfortable); a small positive $GM$ gives a tender ship (long period). $I$ is the second moment of the waterline area about the axis of tilt (the smallest value governs, usually about the longitudinal axis for rolling). Roll period $T = 2\pi\sqrt{k^2/(gGM)}$.
- **Experimental determination:** the metacentric height is found by shifting a known weight across the deck and measuring the angle of heel, $GM = \dfrac{w x}{W\tan\theta}$.

### A6. Fluids in relative equilibrium

- When a container accelerates or rotates uniformly, the fluid moves as a rigid body. There is no relative motion and no shear, so the hydrostatic approach applies with an effective gravity (gravity plus inertial acceleration).
- **Linear acceleration.** The free surface tilts to be perpendicular to the effective gravity: $\tan\theta = \dfrac{a_x}{g + a_z}$. Pressure still increases in the direction of effective gravity.
- **Rotation about a vertical axis** at angular speed $\omega$: the free surface is a paraboloid, $z = \omega^2r^2/(2g)$ above the lowest point. The rise at the wall equals $\omega^2R^2/(2g)$, and the volume of a paraboloid is half that of the circumscribing cylinder. The pressure at a radius $r$ and depth $z$ below the surface still follows $p = \rho g z$ measured from the paraboloid surface. Applications: centrifugal casting, centrifuges.

### A7. Kinematics: describing the motion

- **Two descriptions.** The *Lagrangian* approach follows individual particles (as in particle mechanics). The *Eulerian* approach watches fixed points in space and records velocity there as a function of position and time; it is the standard in fluid mechanics.
- **Classification of flows:**
  - *Steady*: nothing changes with time at a point. *Unsteady*: it does.
  - *Uniform*: velocity is the same at every point at an instant. *Non-uniform*: it varies with position.
  - *Laminar*: orderly layered flow; *turbulent*: chaotic with mixing.
  - *Rotational*: particles spin about their own axes; *irrotational*: they do not.
  - *Compressible* and *incompressible*; one-, two-, or three-dimensional.
  - A flow can be steady and non-uniform (water in a tapering pipe at constant flow rate), or uniform and unsteady (water in a uniform pipe with a changing flow rate).
- **Streamline, pathline, streakline.** A **streamline** is a curve tangent to the velocity vector at every point at one instant; no flow crosses it. A **pathline** is the track of one particle over time. A **streakline** is the line formed by all the particles that have passed a given point (smoke from a chimney). In steady flow all three are identical.
- **Acceleration.** A fluid particle's acceleration has two parts: *local* $\partial V/\partial t$ (the flow changes at a point with time; zero for steady flow) and *convective* $V\,\partial V/\partial x$ (the particle moves to a place where the velocity differs; zero for uniform flow). Particle acceleration in a steady non-uniform flow is purely convective.
- **Continuity equation: mass conservation.** For a stream tube in steady flow, mass entering equals mass leaving: $\rho_1A_1V_1 = \rho_2A_2V_2$. For incompressible flow $A_1V_1 = A_2V_2$: the velocity increases when the area decreases. Differential form: $\partial u/\partial x + \partial v/\partial y + \partial w/\partial z = 0$. Any physically possible incompressible flow must satisfy it.
- **Rotation, vorticity, circulation.** Rotation (angular velocity of a fluid element) $\omega_z = \tfrac{1}{2}(\partial v/\partial x - \partial u/\partial y)$; vorticity is twice this. A flow with zero rotation everywhere is irrotational, and viscous effects are assumed small. Circulation $\Gamma = \oint V\cdot ds$.
- **Stream function and velocity potential (2-D).**
  - The *stream function* $\psi$ is defined by $u = \partial\psi/\partial y$, $v = -\partial\psi/\partial x$. It automatically satisfies continuity; lines of constant $\psi$ are streamlines; the difference of $\psi$ between two streamlines is the volume flow rate per unit depth between them. It exists for any 2-D incompressible flow, rotational or not.
  - The *velocity potential* $\phi$ is defined by $u = \partial\phi/\partial x$, $v = \partial\phi/\partial y$ (some books use a negative sign). It exists only for irrotational flow, and satisfies Laplace's equation $\nabla^2\phi = 0$. For irrotational incompressible flow, $\psi$ also satisfies Laplace's equation.
  - Lines of constant $\phi$ (equipotentials) and of constant $\psi$ (streamlines) intersect at right angles, forming a **flow net**.
- **Elementary flows:** uniform stream, source and sink (radial flow), free vortex (circulating, irrotational, $V_\theta \propto 1/r$), forced vortex (rigid-body rotation, rotational, $V_\theta = \omega r$), and the doublet. Superposing them gives flow around bodies (uniform stream plus doublet gives flow past a cylinder).

### A8. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Viscosity: law, units, effect of temperature, non-Newtonian classes | Direct | Very common | Very common |
| Surface tension, capillarity, droplet pressure | Numerical | Common | Common |
| Pressure measurement, manometer | Numerical | Very common | Very common |
| Force and centre of pressure on submerged surfaces | Numerical | Very common | Common |
| Buoyancy, metacentric height, stability conditions | Conceptual | Very common | Very common |
| Continuity, streamlines, stream function, irrotational flow | Conceptual | Common | Common |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Fluid and its properties

- A **fluid** continuously deforms under a shear stress, however small. Liquids are nearly incompressible and have a free surface; gases are compressible and fill their container.
- **Continuum hypothesis:** fluid is treated as continuous matter, valid when the mean free path is much smaller than the characteristic length (Knudsen number $\ll 1$).

| Property | Definition | SI unit |
|---|---|---|
| Density $\rho$ | Mass per unit volume | kg/m$^3$ |
| Specific weight $w$ | $\rho g$ | N/m$^3$ |
| Specific gravity $S$ | $\dfrac{\rho}{\rho_{water}}$ (water at $4^\circ$C, $1000$ kg/m$^3$) | dimensionless |
| Specific volume | $\dfrac{1}{\rho}$ | m$^3$/kg |
| Dynamic viscosity $\mu$ | Ratio of shear stress to velocity gradient | Pa s (N s/m$^2$) |
| Kinematic viscosity $\nu$ | $\dfrac{\mu}{\rho}$ | m$^2$/s |
| Surface tension $\sigma$ | Force per unit length at the free surface | N/m |
| Bulk modulus $K$ | $-\dfrac{dp}{dV/V}$ | Pa |
| Vapour pressure | Pressure at which a liquid boils at a given temperature | Pa |

- Units: $1$ poise $= 0.1$ Pa s; $1$ stokes $= 10^{-4}$ m$^2$/s.

### Newton's law of viscosity

$$\tau = \mu\,\frac{du}{dy}$$

- **Newtonian fluids:** linear relation (water, air, oil). **Non-Newtonian:** pseudoplastic (shear thinning, paint), dilatant (shear thickening, quicksand), Bingham plastic (toothpaste, needs a yield stress), thixotropic. **Ideal fluid:** zero viscosity and incompressible.
- **Effect of temperature:** the viscosity of **liquids decreases** with temperature (cohesion falls); that of **gases increases** (molecular momentum exchange rises).
- **Torque on a rotating shaft in a journal bearing (small clearance $t$):** $T = \tau\,A\,\dfrac{D}{2}$ with $\tau = \mu\dfrac{\pi D N}{60\,t}$.

### Surface tension, capillarity, compressibility

- **Pressure inside a droplet:** $\Delta p = \dfrac{4\sigma}{d}$; **soap bubble** (two surfaces): $\Delta p = \dfrac{8\sigma}{d}$; **liquid jet:** $\Delta p = \dfrac{2\sigma}{d}$.
- **Capillary rise** in a tube of diameter $d$: 

$$h = \frac{4\,\sigma\cos\theta}{\rho\,g\,d}$$

  - Water in glass ($\theta \approx 0^\circ$) rises; mercury in glass ($\theta \approx 130^\circ$) is depressed.
- **Compressibility** $\beta = \dfrac{1}{K}$. Speed of sound $c = \sqrt{\dfrac{K}{\rho}}$; for an ideal gas, $c = \sqrt{\gamma R T}$.
- **Cavitation:** when local pressure falls to the vapour pressure, vapour bubbles form and later collapse, causing noise, vibration and pitting.

## 2. Fluid statics

- **Pascal's law:** pressure at a point in a static fluid is the same in all directions. This is the basis of the hydraulic press and jack.
- **Hydrostatic law:** pressure varies only with depth:

$$\frac{dp}{dz} = -\rho g,\qquad p = p_0 + \rho g h$$

- **Absolute pressure** $=$ gauge pressure $+$ atmospheric pressure. **Vacuum pressure** $=$ atmospheric $-$ absolute. Standard atmosphere: $101.325$ kPa $= 760$ mm Hg $= 10.33$ m of water.
- **Manometers:** piezometer (simple, for liquids and moderate pressures), U-tube, differential (for pressure difference), inverted U-tube, micro-manometer, inclined tube (higher sensitivity). **Mechanical gauges:** Bourdon gauge, diaphragm gauge, dead-weight tester.
- **Differential U-tube manometer:** $p_A - p_B = g\,h\,(\rho_m - \rho_f)$ for the same fluid on both sides; take care with the elevations of the arms.

### Hydrostatic force on submerged surfaces

For a plane surface of area $A$ with centroid at a vertical depth $\bar{h}$:

$$F = \rho\,g\,\bar{h}\,A$$

The centre of pressure lies **below** the centroid at depth

$$h_{cp} = \bar{h} + \frac{I_G\sin^2\theta}{A\,\bar{h}}$$

where $I_G$ is the second moment of area about the horizontal axis through the centroid, and $\theta$ is the inclination of the plane with the free surface (for a vertical plane, $\sin\theta = 1$).

| Shape (vertical) | $I_G$ |
|---|---|
| Rectangle, width $b$, depth $d$ | $\dfrac{b\,d^3}{12}$ |
| Triangle, base $b$, height $h$ | $\dfrac{b\,h^3}{36}$ |
| Circle, diameter $d$ | $\dfrac{\pi d^4}{64}$ |

- For a vertical rectangular gate, with the top edge at the free surface and depth $d$, $F = \dfrac12\rho g b d^2$ acting at $\dfrac{2}{3}d$ from the surface.
- **Curved surface:** the horizontal component equals the force on the vertical projection; the vertical component equals the weight of the liquid above the surface (real or imaginary). The resultant is $\sqrt{F_H^2 + F_V^2}$.

### Buoyancy and stability

- **Archimedes' principle:** the buoyant force equals the weight of the displaced fluid, acting at the **centre of buoyancy $B$** (centroid of displaced volume). 
- A body floats if its weight equals the buoyant force; it floats with $\dfrac{V_{sub}}{V} = \dfrac{\rho_{body}}{\rho_{fluid}}$.
- **Metacentre $M$:** the intersection of the line of action of buoyancy (after a small tilt) with the original vertical axis.

$$BM = \frac{I}{V_{sub}},\qquad GM = BM - BG$$

where $I$ is the second moment of the waterline area about the longitudinal axis of tilt, and $G$ is the centre of gravity.

  - **Stable equilibrium:** $M$ above $G$ ($GM > 0$). **Unstable:** $M$ below $G$. **Neutral:** $M$ coincides with $G$.
  - A submerged body is stable if $G$ lies **below** $B$; neutral if they coincide.
- **Time period of rolling** of a ship: $T = 2\pi\sqrt{\dfrac{k^2}{g\,GM}}$.

### Fluids in relative equilibrium

- **Linear acceleration:** the free surface is inclined at $\tan\theta = \dfrac{a_x}{g + a_z}$.
- **Rotation about a vertical axis at $\omega$:** the free surface is a paraboloid, with height $z = \dfrac{\omega^2 r^2}{2g}$ above the vertex. Pressure varies as $p = p_0 + \rho g\left(\dfrac{\omega^2r^2}{2g} - z\right)$.

## 3. Fluid kinematics

- **Lagrangian** description follows a particle; **Eulerian** description observes a fixed point in space.
- **Types of flow:**

| Pair | Meaning |
|---|---|
| Steady / unsteady | Properties at a point do not change / do change with time |
| Uniform / non-uniform | Velocity does not change / changes with position |
| Laminar / turbulent | Smooth layered flow / chaotic mixing |
| Rotational / irrotational | Fluid particles rotate / do not rotate about their own axes |
| Compressible / incompressible | Density varies / does not vary |
| 1D, 2D, 3D | By the number of space coordinates needed |

- **Streamline:** a curve whose tangent is the velocity vector at every point. **Pathline:** the actual path of a particle. **Streakline:** the locus of particles that passed a given point. For steady flow, all three coincide. **Stream tube:** a bundle of streamlines.
- **Acceleration of a fluid particle:** $\vec{a} = \dfrac{\partial\vec{V}}{\partial t} + (\vec{V}\cdot\nabla)\vec{V}$: the first term is **local** acceleration (zero in steady flow); the second is **convective** acceleration (zero in uniform flow).
- **Continuity equation** (conservation of mass):

$$\rho_1A_1V_1 = \rho_2A_2V_2,\qquad A_1V_1 = A_2V_2\ \text{(incompressible)}$$

In differential form for incompressible 3D flow: $\dfrac{\partial u}{\partial x} + \dfrac{\partial v}{\partial y} + \dfrac{\partial w}{\partial z} = 0$.

- **Rotation** $\omega_z = \dfrac12\left(\dfrac{\partial v}{\partial x} - \dfrac{\partial u}{\partial y}\right)$; **vorticity** $= 2\omega_z$. Flow is irrotational when the rotation is zero everywhere.
- **Stream function $\psi$:** defined for 2D incompressible flow with $u = \dfrac{\partial\psi}{\partial y}$, $v = -\dfrac{\partial\psi}{\partial x}$; it satisfies continuity automatically; lines of constant $\psi$ are streamlines; the difference in $\psi$ between two streamlines equals the flow rate between them.
- **Velocity potential $\phi$:** exists only for irrotational flow, $u = -\dfrac{\partial\phi}{\partial x}$ (sign convention varies), and it satisfies the Laplace equation $\nabla^2\phi = 0$. Equipotential lines are orthogonal to streamlines (the basis of a flow net).
- **Circulation** $\Gamma = \oint \vec{V}\cdot d\vec{s}$.
- **Simple flows:** uniform flow, source/sink, free vortex ($V_\theta \propto \dfrac1r$, irrotational), forced vortex ($V_\theta = \omega r$, rotational), doublet.

## 4. Worked numericals

1. **Hydrostatic pressure.** Depth $10$ m in water: $p = 1000\times 9.81\times 10 = 98.1$ kPa gauge.
2. **Force on a gate.** Vertical rectangular gate $2$ m wide, $3$ m deep, top at the free surface: $F = \tfrac12(1000)(9.81)(2)(9) = 88.3$ kN, at $2$ m from the surface.
3. **Metacentric height.** A rectangular barge $10\times 4$ m (waterplane), draught $1$ m, $BG = 0.5$ m: $I = \dfrac{10\times 4^3}{12} = 53.3$, $V = 40$, $BM = 1.33$, $GM = 0.83$ m $>0$, so stable.
4. **Capillary rise.** Water ($\sigma = 0.0736$ N/m) in a $2$ mm tube: $h = \dfrac{4(0.0736)}{1000\times 9.81\times 0.002} = 15$ mm.
5. **Viscous force.** Plate area $0.5$ m$^2$ moving at $0.5$ m/s on oil film $2$ mm thick, $\mu = 0.1$ Pa s: $F = 0.1\times\dfrac{0.5}{0.002}\times0.5 = 12.5$ N.

## 5. Common mistakes

- Treating gauge pressure as absolute pressure.
- Forgetting that the centre of pressure is always below the centroid for a plane surface (except horizontal surfaces).
- Using $\rho$ in g/cm$^3$ without converting to SI.
- Confusing a streamline with a pathline in unsteady flow.
- Saying that the viscosity of a gas decreases with temperature.

## 6. Interconnections

- **Fluid dynamics:** the Bernoulli equation uses the continuity equation.
- **Engineering mechanics:** centroid and second moment of area are used for the hydrostatic force.
- **Hydraulic machines:** Pascal's law is the basis of hydraulic jacks and presses.

## 7. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Viscosity of liquids with temperature | Decreases as temperature rises | SSC JE 2017 | [ ] |
| 2 | Viscosity of gases with temperature | Increases as temperature rises | RRB JE 2015 | [ ] |
| 3 | Kinematic viscosity | $\dfrac{\mu}{\rho}$ | SSC JE 2018 | [ ] |
| 4 | Pressure inside a soap bubble | $\dfrac{8\sigma}{d}$ | RRB JE 2014 | [ ] |
| 5 | Pascal's law is used in | Hydraulic press | SSC JE 2016 | [ ] |
| 6 | Centre of pressure of a submerged plane | Below the centroid | APPSC AEE 2012 | [ ] |
| 7 | Stability of a floating body requires | Metacentre above the centre of gravity | SSC JE 2019 | [ ] |
| 8 | Newtonian fluid | Shear stress is proportional to velocity gradient | RRB JE 2019 | [ ] |
| 9 | Equation of continuity is based on | Conservation of mass | SSC JE 2015 | [ ] |
| 10 | Force on a vertical rectangular gate (top at surface) acts at | Two-thirds of the depth from the free surface | RRB JE 2016 | [ ] |
| 11 | Irrotational flow means | Fluid particles do not rotate about their own axes | SSC JE 2020 | [ ] |
| 12 | Capillary rise is inversely proportional to | Tube diameter | RRB JE 2018 | [ ] |
| 13 | Specific gravity of mercury | About $13.6$ | SSC JE 2021 | [ ] |
| 14 | Free surface in a rotating container | Paraboloid | APPSC AEE 2016 | [ ] |
| 15 | Ideal fluid | Non-viscous and incompressible | RRB JE 2017 | [ ] |

## 8. Revision checklist

- [ ] Properties, units and viscosity temperature effects
- [ ] Hydrostatic force and centre of pressure; buoyancy and metacentre
- [ ] Types of flow, streamline, stream and potential functions
- [ ] Continuity equation
