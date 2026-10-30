# 01. Crystal Structure, Phase Diagrams and Heat Treatment

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: VHY

---

## Part A: Detailed Theory (read this first)

Material science explains why metals behave as they do by looking at how atoms are arranged and how that arrangement can be changed. The chain of ideas is: bonding decides the type of material; the arrangement of atoms in a crystal decides how it deforms; defects (especially dislocations) make real metals far weaker than ideal crystals and give us ways to strengthen them; phase diagrams tell us which structures are stable at which composition and temperature; and heat treatment uses temperature and cooling rate to steer a steel into a chosen structure. Every property in the next chapter (strength, hardness, toughness) is a result of the structures described here.

### A1. Atomic bonding and its effect on properties

| Bond | How it forms | Typical properties | Example |
|---|---|---|---|
| Ionic | electron transfer between atoms | hard, brittle, poor conductor in solid | NaCl |
| Covalent | shared electrons in directional bonds | very hard, high melting point, usually insulating | diamond, silicon |
| Metallic | shared cloud of free electrons | ductile, good electrical and thermal conductor, lustrous | Cu, Fe, Al |
| Secondary (van der Waals, hydrogen) | weak attraction between molecules | low melting, soft | polymers, ice |

Metals deform without fracture because the electron cloud lets atoms slide past each other without breaking directional bonds. Ceramics are brittle because ionic and covalent bonds are directional and break rather than slide.

### A2. Crystal structures

**Terms.** A crystal has atoms arranged in a regular repeating three-dimensional pattern. The unit cell is the smallest repeating unit. There are 7 crystal systems and 14 Bravais lattices.

| Property | SC | BCC | FCC | HCP |
|---|---|---|---|---|
| Atoms per unit cell | 1 | 2 | 4 | 6 |
| Coordination number | 6 | 8 | 12 | 12 |
| Atomic packing factor (APF) | 0.52 | 0.68 | 0.74 | 0.74 |
| Cell edge in terms of atomic radius | $a = 2r$ | $a = 4r/\sqrt{3}$ | $a = 2\sqrt{2}\,r$ | ideal $c/a = 1.633$ |
| Slip systems | - | 12 (not close-packed) | 12 | 3 (basal) |
| Examples | Po | $\alpha$-Fe, Cr, W, Mo, V | $\gamma$-Fe, Al, Cu, Ni, Au, Ag, Pb | Zn, Mg, Ti ($\alpha$), Cd, Co |
| Ductility | - | moderate | high | low |

**Counting atoms per cell.** Corner atoms are shared by 8 cells (1/8 each), face atoms by 2 (1/2 each), edge atoms by 4 and interior atoms are not shared. BCC: 8 corners (1) plus 1 centre (1) gives 2. FCC: 8 corners (1) plus 6 faces (3) gives 4.

**Atomic packing factor.**

$$APF = \frac{\text{volume of atoms in the cell}}{\text{volume of the cell}}$$

For FCC: $4\times\frac{4}{3}\pi r^3 / (2\sqrt{2}r)^3 = 0.74$. For BCC the body diagonal $\sqrt{3}a = 4r$ gives 0.68.

**Density.** $\rho = nA/(V_c N_A)$, with $n$ atoms per cell, atomic mass $A$, cell volume $V_c$ and Avogadro's number $N_A$.

**Allotropy of iron.** BCC $\alpha$-iron below $912^\circ$C, FCC $\gamma$-iron from $912^\circ$C to $1394^\circ$C, and BCC $\delta$-iron from $1394^\circ$C to melting at $1538^\circ$C. FCC is denser than BCC, so iron contracts slightly on heating through $912^\circ$C. FCC also dissolves much more carbon (it has larger interstitial holes), which is why austenite can hold up to 2.14 percent C.

**Miller indices.** Plane $(hkl)$: take the intercepts on the axes in units of the cell edge, take reciprocals and clear fractions. Direction $[uvw]$: the components of the vector. Families are written $\{hkl\}$ and $\langle uvw\rangle$. In cubic crystals $[hkl]$ is perpendicular to $(hkl)$. The interplanar spacing is $d_{hkl} = a/\sqrt{h^2 + k^2 + l^2}$.

**Why slip planes matter.** Slip occurs on the planes and in the directions of highest atomic density, because the distance between neighbouring planes is largest and the shear stress needed is smallest. FCC has many close-packed systems, hence high ductility; HCP has few, hence limited ductility at room temperature.

**Bragg's law of X-ray diffraction:** $n\lambda = 2d\sin\theta$. Used to identify crystal structure and measure lattice spacing.

**Amorphous, polycrystalline and single crystals.** Amorphous materials (glass) lack long-range order. Polycrystalline materials consist of many grains separated by grain boundaries. Single crystals are anisotropic (properties depend on direction).

### A3. Crystal imperfections

| Class | Defects |
|---|---|
| Point (0D) | vacancy, interstitial, substitutional impurity; Frenkel defect (vacancy plus interstitial pair) and Schottky defect (cation and anion vacancy pair) in ionic crystals |
| Line (1D) | dislocations: edge (extra half-plane, Burgers vector perpendicular to the line) and screw (Burgers vector parallel) |
| Surface (2D) | grain boundaries, twin boundaries, stacking faults, free surfaces |
| Volume (3D) | voids, cracks, precipitates, inclusions |

**Why dislocations matter.** The shear stress needed to slide a whole plane of atoms over another in a perfect crystal is hundreds of times higher than the observed yield stress. Real crystals deform at low stress because a dislocation moves one row of atoms at a time, like a ruck moving across a carpet. Plastic deformation is dislocation motion.

**Slip and Schmid's law.** The critical resolved shear stress is $\tau_{CRSS} = \sigma\cos\phi\cos\lambda$, where $\phi$ is the angle between the load axis and the plane normal and $\lambda$ the angle between the load axis and the slip direction.

### A4. Strengthening mechanisms

All methods strengthen a metal by making dislocation motion harder.

- **Strain (work) hardening:** deformation multiplies dislocations that tangle and block each other.
- **Grain size reduction (Hall-Petch):** grain boundaries block dislocations, so smaller grains mean higher strength: $\sigma_y = \sigma_0 + k\,d^{-1/2}$. Grain refinement is the only mechanism that raises both strength and toughness.
- **Solid solution strengthening:** solute atoms distort the lattice and impede dislocations.
- **Precipitation (age) hardening:** fine particles block dislocations.
- **Dispersion strengthening:** stable fine particles of a second phase.
- **Phase transformation:** for example martensite formation in steel.

**Recovery, recrystallisation and grain growth.** When a cold-worked metal is heated, recovery removes internal stress, recrystallisation (at about $0.4\,T_m$) creates new strain-free grains and restores ductility, and grain growth coarsens the grains.

**Diffusion.** Atomic transport through the solid. Fick's first law: $J = -D\,dC/dx$. Second law: $\partial C/\partial t = D\,\partial^2 C/\partial x^2$. The diffusivity rises exponentially with temperature, $D = D_0e^{-Q/RT}$. Interstitial diffusion (small atoms such as carbon) is much faster than vacancy diffusion of substitutional atoms. It underlies carburising, nitriding, doping and sintering.

### A5. Solidification and phase diagrams

**Solidification.** Nucleation (homogeneous in the pure melt, heterogeneous on impurities or mould walls) followed by growth, usually dendritic. Fast cooling gives many nuclei and a fine grain; slow cooling gives a coarse grain. Inoculants are added to refine the grain.

**Terms.** A **phase** is a physically distinct, homogeneous portion of a system. A **component** is a chemically distinct species.

**Gibbs phase rule.**

$$F = C - P + 2 \quad\text{(pressure variable)}, \qquad F = C - P + 1 \quad\text{(pressure constant)}$$

with $F$ degrees of freedom, $C$ components and $P$ phases. An invariant reaction at constant pressure in a binary system has $C = 2$, $P = 3$ and so $F = 0$.

**Lever rule.** For overall composition $C_0$ in a two-phase region with phase compositions $C_\alpha$ and $C_L$:

$$W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha}, \qquad W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha}$$

The fraction of a phase is the length of the tie-line segment on the opposite side of the alloy point, divided by the full tie-line length.

**Binary diagram types.** Isomorphous (complete solubility, Cu-Ni), eutectic (Pb-Sn), peritectic, eutectoid, peritectoid and monotectic.

**Invariant reactions.**

| Reaction | Transformation |
|---|---|
| Eutectic | $L \rightarrow \alpha + \beta$ |
| Eutectoid | $\gamma \rightarrow \alpha + \beta$ (solid to two solids) |
| Peritectic | $L + \alpha \rightarrow \beta$ |
| Peritectoid | $\alpha + \beta \rightarrow \gamma$ |
| Monotectic | $L_1 \rightarrow L_2 + \alpha$ |

### A6. The iron-carbon (Fe-Fe$_3$C) diagram

| Feature | Value |
|---|---|
| Melting point of pure iron | $1538^\circ$C |
| Peritectic | $1495^\circ$C, 0.18 percent C: $L + \delta \rightarrow \gamma$ |
| Eutectic | $1147^\circ$C, 4.3 percent C: $L \rightarrow \gamma + \text{Fe}_3\text{C}$ (ledeburite) |
| Eutectoid | $727^\circ$C, 0.77 percent C: $\gamma \rightarrow \alpha + \text{Fe}_3\text{C}$ (pearlite) |
| Maximum solubility of C in austenite | 2.14 percent at $1147^\circ$C |
| Maximum solubility of C in ferrite | 0.02 percent at $727^\circ$C |
| Carbon in cementite | 6.67 percent |
| Curie temperature | $768^\circ$C for ferrite ($A_2$); cementite $210^\circ$C |

**Phases and constituents.**

- **Ferrite ($\alpha$):** interstitial solid solution of carbon in BCC iron; soft, ductile and magnetic.
- **Austenite ($\gamma$):** interstitial solid solution of carbon in FCC iron; non-magnetic and ductile; stable only above $727^\circ$C in plain carbon steel.
- **Cementite (Fe$_3$C):** hard, brittle intermetallic compound.
- **Pearlite:** lamellar mixture of ferrite and cementite at 0.77 percent C; strong and tough. Finer lamellae mean greater hardness.
- **Ledeburite:** eutectic mixture of austenite and cementite at 4.3 percent C.
- **Bainite:** fine ferrite and cementite formed isothermally between the pearlite and martensite ranges.
- **Martensite:** supersaturated body-centred tetragonal solution of carbon in iron, formed by diffusionless transformation on rapid quenching; very hard and brittle.

**Classification by carbon.**

| Material | Carbon | Microstructure at room temperature |
|---|---|---|
| Wrought iron | up to about 0.08 percent | ferrite with slag fibres |
| Low carbon (mild) steel | 0.05 to 0.25 percent | ferrite and pearlite |
| Medium carbon steel | 0.25 to 0.6 percent | ferrite and pearlite |
| High carbon steel | 0.6 to 1.4 percent | pearlite and cementite |
| Hypoeutectoid steel | below 0.77 percent | proeutectoid ferrite and pearlite |
| Eutectoid steel | 0.77 percent | 100 percent pearlite |
| Hypereutectoid steel | 0.77 to 2.14 percent | proeutectoid cementite and pearlite |
| Cast iron | 2.14 to 6.67 percent | varies |
| Eutectic cast iron | 4.3 percent | ledeburite |

**Critical temperatures.** $A_1$ is the eutectoid line at $727^\circ$C. $A_3$ is the upper boundary of the ferrite plus austenite region for hypoeutectoid steel. $A_{cm}$ is the boundary for cementite precipitation in hypereutectoid steel. On heating the notation is $A_c$, on cooling $A_r$; the difference is thermal hysteresis.

**Lever rule on steel.** For 0.4 percent C steel just below $727^\circ$C, the proeutectoid ferrite fraction is $(0.77 - 0.4)/(0.77 - 0.02) = 49.3$ percent and pearlite is 50.7 percent. At room temperature the cementite fraction is $(0.4 - 0.02)/(6.67 - 0.02) = 5.7$ percent.

### A7. TTT and CCT diagrams

**TTT (isothermal transformation) diagram.** It shows how fast austenite transforms at a constant temperature below $A_1$. The curve is C-shaped, with a nose at about $550^\circ$C, where the transformation is fastest.

- Above the nose, pearlite forms; the higher the temperature, the coarser it is.
- Below the nose, down to the martensite start temperature, bainite forms.
- Below $M_s$ the austenite transforms athermally to martensite without diffusion; the amount depends only on the temperature reached, not on time, and finishes at $M_f$. If $M_f$ is below room temperature, some retained austenite remains.

**Critical cooling rate.** The minimum cooling rate that just misses the nose and so gives a fully martensitic structure.

**CCT diagram.** For continuous cooling; the curves are shifted to longer times and lower temperatures, and bainite does not form in plain carbon steels on continuous cooling.

**Martensite hardness** depends mainly on carbon content, because carbon trapped in the lattice distorts it.

**Isothermal treatments.** Austempering: quench to just above $M_s$ and hold to form bainite, giving toughness and little distortion. Martempering: quench to just above $M_s$, hold to equalise temperature, then cool through the martensite range slowly, which reduces distortion and cracking.

### A8. Heat treatment of steel

**Annealing.** Heat, hold and cool slowly in the furnace to soften the steel, relieve stress, refine grain and improve machinability.

- **Full annealing:** 30 to $50^\circ$C above $A_3$ (hypoeutectoid) or above $A_1$ (hypereutectoid), then furnace cool; gives coarse pearlite.
- **Process annealing:** 550 to $650^\circ$C, recrystallises cold-worked steel.
- **Stress-relief annealing:** below $A_1$.
- **Spheroidising:** prolonged heating just below $A_1$, so that cementite forms spheroids; improves machinability of high carbon steels.
- **Diffusion (homogenising) annealing:** high temperature to remove segregation.

**Normalising.** Heat 30 to $50^\circ$C above $A_3$ (or $A_{cm}$) and cool in air. The faster cooling gives finer pearlite, so normalised steel is stronger and harder than annealed steel, with refined grain and no network cementite.

**Hardening.** Heat above $A_3$ for hypoeutectoid steel or above $A_1$ for hypereutectoid steel (not above $A_{cm}$) and quench rapidly to form martensite. Quench severity: brine, then water, then oil, then air. Rapid cooling brings residual stress and the risk of distortion and quench cracks. Hypereutectoid steel is hardened from above $A_1$ so that undissolved cementite, which is hard, remains and no coarse austenite grains develop.

**Tempering.** Reheat quenched steel below $A_1$ (150 to $650^\circ$C) to reduce brittleness and residual stress. The martensite decomposes into tempered martensite (ferrite plus fine cementite). A higher tempering temperature gives lower hardness and higher toughness. Temper embrittlement occurs in the ranges of about 250 to $400^\circ$C and 450 to $600^\circ$C.

**Hardenability.** The ability to harden to depth, not the maximum hardness (which depends on carbon). Alloying elements other than cobalt (Mn, Cr, Mo, Ni) shift the TTT nose to the right, which increases hardenability. The Jominy end-quench test measures it: a standard bar of 25 mm diameter and 100 mm length is austenitised and water-quenched at one end, and hardness is measured along its length. A flatter hardness curve means higher hardenability. A thick section cools slower, so the hardened depth is less (mass effect).

**Surface hardening.**

| Method | Principle | Result |
|---|---|---|
| Carburising | carbon diffuses into low carbon steel (0.1 to 0.2 percent C) at 900 to $950^\circ$C; then quench and temper | hard case, tough core; gears, camshafts |
| Nitriding | nitrogen diffuses into alloy steel (Al, Cr, Mo) at 500 to $550^\circ$C in ammonia; no quench | very hard case, little distortion |
| Cyaniding / carbonitriding | carbon and nitrogen together | thin case |
| Flame hardening | oxy-acetylene flame heats the surface, then quench | medium and high carbon steels |
| Induction hardening | high-frequency induction heating, then quench | rapid local hardening, shafts and gears |

**Age (precipitation) hardening.** For Al-Cu alloys such as duralumin: solution treatment, quenching and then ageing (natural or artificial). Fine precipitates (GP zones) form and block dislocations; over-ageing coarsens them and strength falls. **Cryogenic treatment** converts retained austenite to martensite.

### A9. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Atoms per cell, coordination number, APF | Numerical | Very common | Very common |
| Crystal structure of common metals | Direct | Very common | Very common |
| Miller indices, Bragg's law | Numerical | Common | Common |
| Point, line, surface defects | Direct | Common | Common |
| Strengthening mechanisms, Hall-Petch | Conceptual | Common | Common |
| Phase rule, lever rule | Numerical | Common | Common |
| Invariant reactions | Direct | Very common | Very common |
| Fe-C diagram temperatures and compositions | Direct | Very common | Very common |
| Pearlite, ferrite, austenite, cementite, martensite | Direct | Very common | Very common |
| TTT diagram, martensite, bainite | Conceptual | Very common | Common |
| Annealing, normalising, hardening, tempering | Direct | Very common | Very common |
| Hardenability, Jominy test | Conceptual | Common | Common |
| Carburising, nitriding, induction hardening | Direct | Very common | Very common |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Atomic structure and bonding

- **Primary bonds:** **ionic** (electron transfer, e.g. NaCl; brittle, poor conductor), **covalent** (shared electrons; diamond; very hard), **metallic** (electron cloud; ductile, conductive). **Secondary bonds:** van der Waals, hydrogen bond (weak).
- Metals have high electrical and thermal conductivity, lustre and ductility owing to free electrons.

## 2. Crystal structures

- **Crystal:** an ordered, repeating three-dimensional arrangement of atoms. **Unit cell** is the smallest repeating unit. **Lattice parameters:** edge lengths and angles. There are **7 crystal systems** and **14 Bravais lattices**.

| Property | SC | BCC | FCC | HCP |
|---|---|---|---|---|
| Atoms per unit cell | $1$ | $2$ | $4$ | $6$ |
| Coordination number | $6$ | $8$ | $12$ | $12$ |
| Atomic packing factor (APF) | $0.52$ | $0.68$ | $0.74$ | $0.74$ |
| Relation of $a$ to atomic radius $r$ | $a = 2r$ | $a = \dfrac{4r}{\sqrt{3}}$ | $a = 2\sqrt{2}\,r$ | $c/a = 1.633$ (ideal) |
| Slip systems | - | $12$ (not close-packed) | $12$ | $3$ (basal) |
| Examples | Po | $\alpha$-Fe, Cr, W, Mo, V | $\gamma$-Fe, Al, Cu, Ni, Au, Ag, Pb | Zn, Mg, Ti ($\alpha$), Cd, Co |
| Ductility | - | Moderate | High | Low |

- **APF** $= \dfrac{\text{volume of atoms in the unit cell}}{\text{volume of the unit cell}}$.
- **Density** $\rho = \dfrac{n\,A}{V_c\,N_A}$, where $n$ is the number of atoms per cell, $A$ the atomic mass and $N_A$ Avogadro's number.
- **Allotropy (polymorphism):** iron is BCC ($\alpha$) below $912^\circ$C, FCC ($\gamma$) from $912^\circ$C to $1394^\circ$C, and BCC ($\delta$) from $1394^\circ$C to the melting point $1538^\circ$C.
- **Miller indices:** (hkl) denote planes (the reciprocals of the intercepts, cleared of fractions); [uvw] denote directions; $\{hkl\}$ and $\langle uvw\rangle$ denote families. In cubic crystals, the direction $[hkl]$ is perpendicular to the plane $(hkl)$. **Interplanar spacing** $d_{hkl} = \dfrac{a}{\sqrt{h^2 + k^2 + l^2}}$.
- **Linear and planar density.** Slip occurs on the planes and in the directions of the highest atomic density (close-packed).
- **Bragg's law (X-ray diffraction):** $n\lambda = 2\,d\,\sin\theta$.
- **Amorphous** materials (glass) have no long-range order; **polycrystalline** materials have many grains separated by grain boundaries. **Single crystals** are anisotropic.

## 3. Crystal imperfections

| Class | Defects |
|---|---|
| **Point (0D)** | **Vacancy**, **interstitial**, substitutional impurity; **Frenkel** (vacancy + interstitial pair) and **Schottky** (cation + anion vacancy pair) defects in ionic crystals |
| **Line (1D)** | **Dislocations**: edge (extra half-plane; Burgers vector perpendicular to the line) and screw (Burgers vector parallel) |
| **Surface/planar (2D)** | Grain boundaries, twin boundaries, stacking faults, free surfaces |
| **Volume (3D)** | Voids, cracks, precipitates, inclusions |

- **Slip** is the movement of dislocations under shear stress; the theoretical shear strength is far above the real value, because of dislocations. **Critical resolved shear stress** (Schmid's law): $\tau_{CRSS} = \sigma\cos\phi\cos\lambda$.
- **Strengthening mechanisms** (all impede dislocation motion): **strain hardening (work hardening)**, **grain size reduction** (Hall-Petch: $\sigma_y = \sigma_0 + k\,d^{-1/2}$), **solid solution strengthening**, **precipitation (age) hardening**, **dispersion strengthening**, and phase transformation (martensite).
- **Annealing stages after cold work:** recovery (stress relief), recrystallisation (new strain-free grains at about $0.4\,T_m$), grain growth.
- **Diffusion:** atomic transport. **Fick's first law:** $J = -D\dfrac{dC}{dx}$; **second law:** $\dfrac{\partial C}{\partial t} = D\dfrac{\partial^2 C}{\partial x^2}$. $D = D_0\,e^{-Q/RT}$ rises exponentially with temperature. Mechanisms: vacancy (substitutional) and interstitial (faster). Applications: carburising, nitriding, doping.

## 4. Solidification and phase diagrams

- **Solidification:** nucleation (homogeneous, heterogeneous) and growth. A fast cooling rate gives a fine grain; slow cooling gives coarse grains. **Inoculants** (grain refiners) promote nucleation. **Dendritic** growth is typical.
- **Phase:** a physically distinct, homogeneous portion of a system. **Component:** a chemically distinct species.
- **Gibbs phase rule:** 

$$F = C - P + 2\quad\text{(variable pressure)},\qquad F = C - P + 1\quad\text{(constant pressure)}$$

  where $F$ is the number of degrees of freedom, $C$ the number of components and $P$ the number of phases.
- **Lever rule:** for a point in a two-phase region, with overall composition $C_0$ and phase compositions $C_\alpha$ and $C_L$:

$$W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha},\qquad W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha}$$

- **Types of binary diagrams:** isomorphous (complete solubility: Cu-Ni), eutectic (Pb-Sn), peritectic, eutectoid, peritectoid, monotectic.
- **Invariant reactions** (zero degrees of freedom at constant pressure):

| Reaction | Transformation |
|---|---|
| **Eutectic** | $L \rightarrow \alpha + \beta$ |
| **Eutectoid** | $\gamma \rightarrow \alpha + \beta$ (solid to two solids) |
| **Peritectic** | $L + \alpha \rightarrow \beta$ |
| **Peritectoid** | $\alpha + \beta \rightarrow \gamma$ |
| **Monotectic** | $L_1 \rightarrow L_2 + \alpha$ |

## 5. Iron-carbon (Fe-Fe$_3$C) diagram

| Feature | Value |
|---|---|
| Melting point of pure iron | $1538^\circ$C |
| **Peritectic** | $1495^\circ$C, $0.18\%$ C: $L + \delta \rightarrow \gamma$ |
| **Eutectic** | $1147^\circ$C, $4.3\%$ C: $L \rightarrow \gamma + \text{Fe}_3\text{C}$ (**ledeburite**) |
| **Eutectoid** | $727^\circ$C, $0.77\%$ C: $\gamma \rightarrow \alpha + \text{Fe}_3\text{C}$ (**pearlite**) |
| Max solubility of C in $\gamma$ (austenite) | $2.14\%$ at $1147^\circ$C |
| Max solubility of C in $\alpha$ (ferrite) | $0.02\%$ at $727^\circ$C |
| Cementite (Fe$_3$C) carbon content | $6.67\%$ |
| Curie temperature (magnetic) | $768^\circ$C ($A_2$) for ferrite; cementite at $210^\circ$C |

- **Phases:**
  - **Ferrite ($\alpha$):** interstitial solid solution of C in BCC iron; soft, ductile, magnetic.
  - **Austenite ($\gamma$):** interstitial solid solution of C in FCC iron; non-magnetic, ductile, stable only above $727^\circ$C in plain carbon steels.
  - **Cementite (Fe$_3$C):** hard, brittle intermetallic compound (orthorhombic).
  - **Pearlite:** lamellar mixture of ferrite and cementite ($0.77\%$ C); tough and strong.
  - **Ledeburite:** eutectic mixture of austenite and cementite ($4.3\%$ C), at $1147^\circ$C.
  - **Bainite:** a finer ferrite-cementite aggregate formed by isothermal transformation (between pearlite and martensite).
  - **Martensite:** supersaturated BCT solid solution of carbon in iron formed by rapid quenching (diffusionless); very hard and brittle.
- **Classification by carbon content:**

| Material | Carbon | Microstructure at room temperature |
|---|---|---|
| Wrought iron | Up to $0.08\%$ (very low) | Ferrite with slag fibres |
| Low carbon (mild) steel | $0.05\%$ to $0.25\%$ | Ferrite + pearlite |
| Medium carbon steel | $0.25\%$ to $0.6\%$ | Ferrite + pearlite |
| High carbon steel | $0.6\%$ to $1.4\%$ (up to $2.14\%$) | Pearlite + cementite |
| **Hypoeutectoid steel** | $< 0.77\%$ | Proeutectoid ferrite + pearlite |
| **Eutectoid steel** | $0.77\%$ | $100\%$ pearlite |
| **Hypereutectoid steel** | $0.77\%$ to $2.14\%$ | Proeutectoid cementite + pearlite |
| Cast iron | $2.14\%$ to $6.67\%$ | Varies |
| Hypoeutectic cast iron | $2.14\%$ to $4.3\%$ | |
| Eutectic cast iron | $4.3\%$ | Ledeburite |
| Hypereutectic cast iron | $4.3\%$ to $6.67\%$ | |

- **Critical temperatures:** $A_1$ (the eutectoid line, $727^\circ$C), $A_3$ (the upper boundary for ferrite to austenite transformation in hypoeutectoid steel), $A_{cm}$ (the boundary for cementite precipitation in hypereutectoid steel); $A_c$ on heating and $A_r$ on cooling (thermal hysteresis).
- **Lever rule for steel:** at room temperature, a steel with $0.4\%$ C is made of ferrite ($0.02\%$ C) and cementite ($6.67\%$ C): the fraction of cementite $= \dfrac{0.4 - 0.02}{6.67 - 0.02} = 5.7\%$. The fraction of proeutectoid ferrite at just above $727^\circ$C for $0.4\%$ C: $\dfrac{0.77 - 0.4}{0.77 - 0.02} = 49.3\%$ and pearlite $= 50.7\%$.

## 6. TTT and CCT diagrams

- **TTT (Time-Temperature-Transformation) or IT (isothermal transformation) diagram:** describes the progress of the austenite transformation at constant temperatures. The curve has a "C" or "S" shape with a **nose** at about $550^\circ$C.
  - Above the nose: **pearlite** (coarse at high temperatures, fine below).
  - Below the nose, down to the martensite start: **bainite** (upper and lower).
  - **$M_s$ and $M_f$**: martensite start and finish temperatures. Martensite forms without diffusion, athermally, below $M_s$; the amount depends only on the temperature reached. Retained austenite remains if $M_f$ is below the quench temperature.
- **Critical cooling rate:** the minimum cooling rate that just avoids the nose and gives a fully martensitic structure.
- **CCT (Continuous Cooling Transformation) diagram:** for continuous cooling; the curves are shifted to the right and lower (longer times) compared to TTT; **bainite does not form in plain carbon steels under continuous cooling**.
- **Martensite** hardness depends on the carbon content only; the strength comes from the lattice distortion by trapped carbon.
- **Isothermal treatments:** **austempering** (quench to above $M_s$, hold to form bainite; gives toughness and low distortion), **martempering (marquenching)** (quench to just above $M_s$, hold to equalise the temperature, then cool; martensite forms with less distortion and fewer cracks).

## 7. Heat treatment of steel

- **Annealing:** heating to a suitable temperature, holding, and then slow cooling (in the furnace) to soften, relieve stress, refine grain, and improve machinability. 
  - **Full annealing:** $30^\circ$ to $50^\circ$C above $A_3$ (hypoeutectoid) or $A_1$ (hypereutectoid), then furnace cool; yields coarse pearlite.
  - **Process annealing (subcritical):** $550^\circ$ to $650^\circ$C, to relieve the cold-working effect (recrystallisation).
  - **Stress-relief annealing:** below $A_1$.
  - **Spheroidising:** prolonged heating just below $A_1$; cementite forms spheroids; improves the machinability of high carbon steels.
  - **Diffusion (homogenising) annealing:** high temperature to remove segregation.
- **Normalising:** heat $30^\circ$ to $50^\circ$C above $A_3$ (or $A_{cm}$), then **air cool**; gives a finer pearlite, more uniform and stronger than annealed steel; refines grain, removes network cementite.
- **Hardening (quenching):** heat above $A_3$ (hypoeutectoid) or $A_1$ (hypereutectoid; **not above $A_{cm}$**) and quench rapidly in water, oil or brine to form martensite. Quench severity: brine > water > oil > air. Rapid cooling creates **residual stresses**, risk of **distortion and quench cracks**.
- **Tempering:** reheating a quenched steel below $A_1$ ($150^\circ$ to $650^\circ$C) to reduce brittleness and residual stress while retaining adequate hardness: martensite decomposes into tempered martensite (ferrite + fine cementite). Higher tempering temperature gives lower hardness and higher toughness. **Temper embrittlement** occurs at about $250^\circ$ to $400^\circ$C (blue brittleness) and $450^\circ$ to $600^\circ$C.
- **Hardenability:** the ability of steel to be hardened to depth by quenching (not the maximum hardness; that depends on the carbon content). It is increased by alloying elements (except cobalt), which shift the TTT nose to the right: Mn, Cr, Mo, Ni. Measured by the **Jominy end-quench test**: a standard bar ($25$ mm diameter, $100$ mm long) austenitised and water-quenched at one end; hardness is measured along the length. A flatter curve means higher hardenability. **Critical diameter** $D_c$ and **ideal critical diameter** $D_I$.
- **Mass effect:** a thick section cools more slowly, so a smaller depth is hardened.
- **Surface hardening:**

| Method | Principle | Case |
|---|---|---|
| **Carburising** | C diffuses into low carbon steel ($0.1\%$ to $0.2\%$ C) at about $900^\circ$ to $950^\circ$C (pack, gas, liquid); then quench and temper | Hard case, tough core: gears, camshafts |
| **Nitriding** | Nitrogen diffuses into alloy steel (Al, Cr, Mo) at about $500^\circ$ to $550^\circ$C (ammonia); no quench | Very hard, less distortion |
| **Cyaniding / carbonitriding** | C and N together | Thin case |
| **Flame hardening** | Surface heated with oxy-acetylene flame, then quenched | Medium and high carbon steels |
| **Induction hardening** | High-frequency induction heating, then quench | Rapid, local, shafts and gears |

- **Age (precipitation) hardening** (Al-Cu, duralumin): **solution treatment**, **quenching**, then **ageing** (natural or artificial) to precipitate fine particles (GP zones) which block dislocations; **over-ageing** decreases strength.
- **Cryogenic treatment**: sub-zero cooling converts retained austenite to martensite.

## 8. Worked numericals

1. **FCC.** Copper, $r = 0.128$ nm: $a = 2\sqrt{2}\,r = 0.362$ nm. Density $= \dfrac{4\times63.5}{(0.362\times10^{-9})^3\times6.023\times10^{26}} = 8890$ kg/m$^3$.
2. **APF of BCC.** $\dfrac{2\times\frac43\pi r^3}{(4r/\sqrt3)^3} = 0.68$.
3. **Phase rule.** At a eutectic point of a binary system under constant pressure: $F = 2 - 3 + 1 = 0$.
4. **Lever rule.** Steel with $0.45\%$ C just below $727^\circ$C: pearlite fraction $= \dfrac{0.45 - 0.02}{0.77 - 0.02} = 57.3\%$.
5. **Miller indices.** A plane intercepts the axes at $a$, $2a$, $\infty$: reciprocals $1, \tfrac12, 0$, cleared of fractions: $(210)$.
6. **Carbon in cementite:** $\dfrac{12}{3\times55.85 + 12} = 6.67\%$.

## 9. Common mistakes

- Saying that tempering is done before quenching.
- Heating hypereutectoid steel above $A_{cm}$ for hardening; the correct temperature is above $A_1$ (so that undissolved cementite remains, giving a harder structure).
- Mixing hardness (maximum value, from carbon) and hardenability (depth, from alloying).
- Assuming that austenite is ferromagnetic; it is non-magnetic.
- Quoting the eutectoid point loosely. The exact values are $0.77\%$ C at $727^\circ$C; many textbooks round the carbon to $0.8\%$, so check which value an option uses.

## 10. Interconnections

- **Manufacturing:** casting, welding (HAZ) and forging rely on these phase transformations.
- **Machine design:** the choice of material and heat treatment for gears, shafts, springs.
- **Thermodynamics:** the phase rule and lever rule.

## 11. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | APF of FCC | $0.74$ | SSC JE 2017 | [ ] |
| 2 | Number of atoms per unit cell in BCC | $2$ | RRB JE 2015 | [ ] |
| 3 | Coordination number of FCC | $12$ | SSC JE 2018 | [ ] |
| 4 | Eutectoid composition in steel | $0.77\%$ C | RRB JE 2014 | [ ] |
| 5 | Eutectoid temperature | $727^\circ$C | SSC JE 2016 | [ ] |
| 6 | Pearlite is a mixture of | Ferrite and cementite | APPSC AEE 2012 | [ ] |
| 7 | Cementite has carbon | $6.67\%$ | SSC JE 2019 | [ ] |
| 8 | Martensite is | Supersaturated solid solution of C in $\alpha$-iron (BCT) | RRB JE 2019 | [ ] |
| 9 | Gibbs phase rule | $F = C - P + 2$ | SSC JE 2015 | [ ] |
| 10 | Normalising involves cooling | In air | RRB JE 2016 | [ ] |
| 11 | Annealing involves cooling | Slowly in the furnace | SSC JE 2020 | [ ] |
| 12 | Jominy test measures | Hardenability | RRB JE 2018 | [ ] |
| 13 | Nitriding gives case hardening by | Nitrogen diffusion at about $500^\circ$C, with no quench | SSC JE 2021 | [ ] |
| 14 | Austenite is stable in plain carbon steel | Above $727^\circ$C | APPSC AEE 2016 | [ ] |
| 15 | Edge dislocation Burgers vector | Perpendicular to the dislocation line | RRB JE 2017 | [ ] |
| 16 | Ledeburite is | Eutectic mixture of austenite and cementite | SSC JE 2022 | [ ] |
| 17 | Ferrite is | Interstitial solid solution of C in BCC iron | RRB JE 2013 | [ ] |

## 12. Revision checklist

- [ ] Crystal structures: APF, atoms per cell, coordination number
- [ ] Defects, slip, strengthening mechanisms
- [ ] Phase rule, lever rule
- [ ] Fe-Fe$_3$C: all reactions, phases and classes
- [ ] TTT/CCT: pearlite, bainite, martensite
- [ ] Heat treatments and surface hardening
