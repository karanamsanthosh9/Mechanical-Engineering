# 03. Bending, Shear Stress in Beams and Deflection

**Exam relevance:** APPSC AEE: C/P | SSC JE: C | RRB JE: C/S | Category: ALL (deflection: AEE+) | Yield: VHY (bending), HY (deflection)

---

## Part A: Detailed Theory (read this first)

This part explains how a beam carries load: the bending stress, the shear stress, and the deflection. Part B (from section 1 onwards) is the compact reference.

### A1. How a beam bends: the physical picture

Take a rubber eraser and bend it between your fingers. The top surface shortens (compression) and the bottom surface stretches (tension) in a sagging beam. Somewhere between is a layer whose length does not change. That layer is the **neutral surface**; its intersection with a cross-section is the **neutral axis (NA)**.

**Assumptions of simple (pure) bending theory:**

1. The beam is initially straight, with a constant cross-section, and made of a homogeneous, isotropic material.
2. Hooke's law holds; $E$ is the same in tension and compression.
3. The loads act in a plane of symmetry (no twisting).
4. **Plane sections remain plane** after bending (the central assumption), so strain varies linearly with distance from the NA.
5. The radius of curvature is large compared with the depth.
6. Each layer is free to expand or contract (no lateral constraint between layers).

**Pure bending** means constant bending moment and zero shear force. Real beams have shear too, but the bending formula is still used with good accuracy for long beams.

### A2. Derivation of the flexure formula

Consider a layer at distance $y$ from the NA of a beam bent to radius $R$. Its original length is the same as the NA length $= R\theta$. After bending its length is $(R + y)\theta$. Strain:

$$e = \frac{(R + y)\theta - R\theta}{R\theta} = \frac{y}{R}$$

Strain varies linearly with $y$. By Hooke's law, stress $\sigma = E\,\dfrac{y}{R}$. Stress is also linear, zero at the NA and maximum at the extreme fibre.

Equilibrium requirements:

1. Net axial force on the section is zero: $\int \sigma\,dA = \dfrac{E}{R}\int y\,dA = 0$. This says $\int y\,dA = 0$, so the **NA passes through the centroid** of the section.
2. The moment of the stresses equals the bending moment: $M = \int \sigma y\,dA = \dfrac{E}{R}\int y^2\,dA = \dfrac{EI}{R}$.

Combining:

$$\boxed{\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}}$$

**Reading the equation.** Stress at any layer: $\sigma = \dfrac{M y}{I}$. Maximum stress at the extreme fibre: $\sigma_{max} = \dfrac{M}{Z}$ with **section modulus** $Z = \dfrac{I}{y_{max}}$. A larger $Z$ means a stronger beam in bending. The product $EI$ is the **flexural rigidity**.

| Section | $Z$ |
|---|---|
| Rectangle $b \times d$ | $\dfrac{bd^2}{6}$ |
| Circle, diameter $d$ | $\dfrac{\pi d^3}{32}$ |
| Hollow circle | $\dfrac{\pi (D^4 - d^4)}{32 D}$ |

**Design insight.** To make a beam strong at low weight, put the material far from the NA (I-section, hollow box). A rectangular beam placed on its narrow edge is far weaker than on its wide edge: $Z \propto d^2$.

**Unsymmetrical sections** (T, channel): the NA is nearer one face, so the maximum tensile and compressive stresses differ. For a brittle material like cast iron (weak in tension), place the section so the larger flange is on the tension side.

**Composite (flitched) beams.** Two materials bonded together bend together with the same curvature. Convert one into an equivalent section of the other using the **modular ratio** $m = E_1/E_2$ (stiffer material becomes wider). Then find $I$ of the equivalent section, and stresses: $\sigma_1 = \dfrac{M y}{I_{eq}}$ for the base material and $m$ times that for the other. Reinforced concrete beams use the same idea.

### A3. Shear stress in beams: where it comes from

When the bending moment varies along the beam, the longitudinal fibres on either side of a horizontal cut have different bending stress. The difference must be resisted by shear along the cut. So shear stress exists on **horizontal** planes as well as vertical planes (complementary shear). The result:

$$\tau = \frac{V\,A\bar{y}}{I\,b}$$

where $V$ is the shear force at the section, $A\bar{y}$ is the first moment about the NA of the area **above** the level where you want $\tau$, $I$ is the MOI of the whole section, and $b$ is the width at that level.

**Observations:**

- $\tau = 0$ at the extreme top and bottom fibres (no area above).
- $\tau$ is maximum at the NA for most sections (maximum $A\bar{y}$).
- For a **rectangle** $\tau$ varies parabolically, $\tau_{max} = 1.5\,\tau_{avg}$ where $\tau_{avg} = V/A$.
- For a **solid circle** $\tau_{max} = \dfrac{4}{3}\tau_{avg}$.
- For an **I-section**, the web carries most of the shear (about $90\%$ to $95\%$) and flanges carry most of the bending. The shear stress jumps at the web-flange junction because the width $b$ changes suddenly.
- **Shear centre:** the point on the cross-section through which the load must act so the beam bends without twisting. For symmetrical sections it is the centroid. For a channel it lies outside the web.

### A4. Slope and deflection: why they matter

A beam may not fail by stress but still be unusable if it sags too much (floors crack, machine shafts misalign, gears mesh badly). Design codes limit deflection to a fraction of span, such as $L/325$ or $L/360$.

**Differential equation of the elastic curve.** From the flexure formula, curvature $\dfrac{1}{R} = \dfrac{M}{EI}$. In calculus, curvature is $\dfrac{d^2y}{dx^2}$ for small slopes, so

$$EI\,\frac{d^2 y}{dx^2} = M(x)$$

Integrating once gives slope $\theta = \dfrac{dy}{dx}$, twice gives deflection $y$. Related quantities:

$$EI\frac{dy}{dx} = \int M\,dx + C_1, \qquad EI\,y = \iint M\,dx\,dx + C_1 x + C_2, \qquad \text{load } w = EI\frac{d^4 y}{dx^4}$$

Constants of integration come from **boundary conditions**: at a fixed end, slope and deflection are zero; at a simple support, deflection is zero.

**Methods of finding deflection:**

1. **Double integration** - the basic method. Good for simple loading.
2. **Macaulay's method** - one expression for the BM valid over the whole beam, using bracket terms $\langle x - a\rangle$ that switch on only after the load position. Efficient for point loads and partial UDLs. The constants are found only once for the entire beam.
3. **Moment-area method** - geometric. **First theorem:** change of slope between two points = area of the $M/EI$ diagram between them. **Second theorem:** deflection of one point from the tangent at another = moment of the $M/EI$ area about the first point. Good for cantilevers and stepped beams.
4. **Conjugate beam method** - treat the $M/EI$ diagram as a load on a "conjugate" beam; shear in the conjugate beam is slope, moment is deflection. Fixed end becomes free end and vice versa.
5. **Strain energy (Castigliano's theorem)** - see the next chapter.
6. **Superposition** - add deflections from separate loads. Valid because the equations are linear.

**Why do standard results look the way they do?** For a cantilever with end load, $M = -W(L - x)$. Integrating twice gives $y_{max} = \dfrac{WL^3}{3EI}$. Deflection grows as $L^3$ for point loads and $L^4$ for distributed loads, so shortening or stiffening a beam is very effective.

### A5. Fixed and propped beams

A fixed beam has more reactions than equations. Compatibility: slope at each fixed end is zero. The result is that:

- Fixed-fixed beam with a central load $W$: end moments $\dfrac{WL}{8}$ (hogging), mid-span $\dfrac{WL}{8}$ (sagging). Deflection is one-quarter of the simply supported value.
- Fixed-fixed with UDL: end moments $\dfrac{wL^2}{12}$, mid-span $\dfrac{wL^2}{24}$.
- Fixed beams are stiffer and stronger than simply supported beams but sensitive to support settlement.

**Propped cantilever** with UDL: the prop reaction is $\dfrac{3wL}{8}$, fixed-end moment $\dfrac{wL^2}{8}$.

### A6. Strength vs stiffness in beam design

| Quantity | Governed by |
|---|---|
| Bending stress | $M/Z$ |
| Shear stress | $V A\bar{y}/(Ib)$ |
| Deflection | $EI$ and $L$ |

For long, slender beams deflection often governs; for short, deep beams shear may govern.

### A7. Exam relevance

- Flexure formula, section modulus of rectangle, circle (all three exams).
- Ratio $\tau_{max}/\tau_{avg}$ for rectangle and circle (very frequent).
- Standard deflection formulas: $\dfrac{WL^3}{3EI}$, $\dfrac{wL^4}{8EI}$, $\dfrac{WL^3}{48EI}$, $\dfrac{5wL^4}{384EI}$ (all exams).
- Macaulay, moment-area, conjugate beam concepts (APPSC AEE).

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Simple (flexural) bending

- **Assumptions:** homogeneous, isotropic material obeying Hooke's law; same $E$ in tension and compression; plane sections remain plane; radius of curvature much larger than beam depth; initially straight beam; loading in a plane of symmetry; pure bending.
- **Neutral axis (NA):** the layer with zero bending stress. It passes through the centroid of the section.

### Flexure formula

$$\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}$$

$$\sigma = \frac{My}{I}, \qquad Z = \frac{I}{y_{max}}, \qquad \sigma_{max} = \frac{M}{Z}$$

| Section | Section modulus $Z$ |
|---|---|
| Rectangle $b \times d$ | $\dfrac{bd^2}{6}$ |
| Solid circle | $\dfrac{\pi d^3}{32}$ |
| Hollow circle | $\dfrac{\pi (D^4 - d^4)}{32 D}$ |
| Square $a \times a$ (sides parallel to axes) | $\dfrac{a^3}{6}$ |
| Square with diagonal vertical | $\dfrac{a^3}{6\sqrt{2}}$ (less than side-parallel) |
| Triangle (base $b$, height $h$) | $\dfrac{bh^2}{24}$ (base side), $\dfrac{bh^2}{12}$ (apex side) |

- **Beam of uniform strength:** section varies so that $\sigma$ is constant.
- **Flitched (composite) beams:** equivalent section method with modular ratio $m = \dfrac{E_1}{E_2}$; $M = M_1 + M_2$; strains match at the interface, so $\dfrac{\sigma_1}{E_1} = \dfrac{\sigma_2}{E_2}$.
- **Strongest rectangular beam from a circular log of diameter $D$:** $b = \dfrac{D}{\sqrt{3}}$, $d = \sqrt{\dfrac{2}{3}}\,D$, so $\dfrac{d}{b} = \sqrt{2}$. **Stiffest beam:** $b = \dfrac{D}{2}$, $d = \dfrac{\sqrt{3}}{2}D$.
- For equal area, section modulus ranks: I-section $>$ rectangle $>$ circle.

## 2. Shear stress in beams

$$\tau = \frac{V\,A\bar{y}}{I\,b}$$

where $A\bar{y}$ is the first moment of the area above the layer about the NA and $b$ is the width at that layer.

| Section | $\tau_{max}$ (at NA) | Ratio $\tau_{max}/\tau_{avg}$ |
|---|---|---|
| Rectangle | $1.5\,\tau_{avg}$ | $\dfrac{3}{2}$ |
| Solid circle | $\dfrac{4}{3}\tau_{avg}$ | $\dfrac{4}{3}$ |
| Thin hollow circle | $2\,\tau_{avg}$ | $2$ |
| Triangle (max at mid-height) | $1.5\,\tau_{avg}$ | $\dfrac{3}{2}$ |
| Diamond (square, diagonal vertical) | $\dfrac{9}{8}\tau_{avg}$ | $\dfrac{9}{8}$ |

Here $\tau_{avg} = \dfrac{V}{A}$.

- Shear stress distribution in a rectangle is **parabolic**: zero at top and bottom, maximum at the NA.
- In an I-section the flanges carry most of the bending moment and the web carries about 90 to 95% of the shear force.
- **Shear centre:** the point through which the load must act to bend the beam without twisting (for a channel it lies outside the web).

## 3. Deflection of beams

### Governing equations

$$EI\frac{d^2y}{dx^2} = M(x)$$

$$EI\frac{dy}{dx} = \int M\,dx + C_1 \ \text{(slope)}, \qquad EI\,y = \iint M\,dx\,dx + C_1 x + C_2 \ \text{(deflection)}$$

### Methods

| Method | Best for |
|---|---|
| Double integration | Simple loading, one equation |
| Macaulay's method | Several point loads or UDL segments (single equation with bracket terms) |
| Moment-area (Mohr) | Slope and deflection at particular points, cantilevers |
| Conjugate beam | Complex support conditions |
| Castigliano's theorem | Energy method: $\delta = \dfrac{\partial U}{\partial P}$, $\theta = \dfrac{\partial U}{\partial M}$ |
| Superposition | Combined loads |

### Standard results (memorise)

| Beam and load | Maximum slope | Maximum deflection |
|---|---|---|
| Cantilever, point load $W$ at the free end | $\dfrac{WL^2}{2EI}$ | $\dfrac{WL^3}{3EI}$ |
| Cantilever, UDL $w$ | $\dfrac{wL^3}{6EI}$ | $\dfrac{wL^4}{8EI}$ |
| Cantilever, couple $M$ at the free end | $\dfrac{ML}{EI}$ | $\dfrac{ML^2}{2EI}$ |
| Cantilever, UVL (zero at free end) | $\dfrac{wL^3}{24EI}$ | $\dfrac{wL^4}{30EI}$ |
| SS beam, central point load $W$ | $\dfrac{WL^2}{16EI}$ | $\dfrac{WL^3}{48EI}$ |
| SS beam, UDL $w$ | $\dfrac{wL^3}{24EI}$ | $\dfrac{5wL^4}{384EI}$ |
| Fixed beam, central point load | $0$ at the ends | $\dfrac{WL^3}{192EI}$ |
| Fixed beam, UDL | $0$ at the ends | $\dfrac{wL^4}{384EI}$ |

- **Stiffness of a cantilever:** $k = \dfrac{3EI}{L^3}$.
- If $L$ doubles, the end-loaded cantilever deflection becomes $8$ times. If depth doubles, deflection falls to $\dfrac{1}{8}$ (since $I \propto d^3$). If width doubles, deflection halves.
- **Strain energy in bending:** $U = \displaystyle\int \frac{M^2}{2EI}\,dx$.
- **Mohr's first theorem:** change in slope between two points $=$ area of the $\dfrac{M}{EI}$ diagram between them. **Second theorem:** deflection of B relative to the tangent at A $=$ moment of the $\dfrac{M}{EI}$ area about B.

## 4. Worked numericals

1. **Rectangular beam** $100 \times 200$ mm, $M = 20$ kN-m:

$$Z = \frac{100 \times 200^2}{6} = 6.67\times10^{5}\ \text{mm}^3, \qquad \sigma = \frac{20\times10^{6}}{6.67\times10^{5}} = 30\ \text{MPa}$$

2. **Shear.** $V = 60$ kN on a $100\times200$ rectangle: $\tau_{avg} = \dfrac{60000}{20000} = 3$ MPa, so $\tau_{max} = 4.5$ MPa.
3. **Cantilever.** $W = 2$ kN, $L = 2$ m, $E = 200$ GPa, $I = 8\times10^{6}$ mm$^4$:

$$\delta = \frac{WL^3}{3EI} = \frac{2000 \times 2000^3}{3 \times 200000 \times 8\times10^{6}} = 3.33\ \text{mm}$$

## 5. Common mistakes

- Measuring $y$ from the bottom instead of from the NA.
- Using total beam depth for $Z$ of a hollow section.
- Mixing mm and m (keep N and mm, or kN and m).

## 6. Interconnections

- BM from chapter 02; MOI from Engineering Mechanics; column buckling uses $EI$; shaft and spring design in Machine Design.

## 7. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Bending equation | $\dfrac{M}{I} = \dfrac{\sigma}{y} = \dfrac{E}{R}$ | SSC JE 2017 | [ ] |
| 2 | Section modulus of a rectangle | $\dfrac{bd^2}{6}$ | RRB JE 2015 | [ ] |
| 3 | Section modulus of a solid circle | $\dfrac{\pi d^3}{32}$ | SSC JE 2018 | [ ] |
| 4 | $\tau_{max}/\tau_{avg}$ for a rectangle | $1.5$ | RRB JE 2014 | [ ] |
| 5 | $\tau_{max}/\tau_{avg}$ for a circular section | $\dfrac{4}{3}$ | SSC JE 2016 | [ ] |
| 6 | Deflection of a cantilever with end point load | $\dfrac{WL^3}{3EI}$ | SSC JE 2019 | [ ] |
| 7 | Deflection of a SS beam with UDL | $\dfrac{5wL^4}{384EI}$ | RRB JE 2019 | [ ] |
| 8 | Deflection of a SS beam with central load | $\dfrac{WL^3}{48EI}$ | SSC JE 2017 | [ ] |
| 9 | Neutral axis passes through | The centroid of the section | RRB JE 2015 | [ ] |
| 10 | Maximum deflection of a fixed beam with central load | $\dfrac{WL^3}{192EI}$ | APPSC AEE 2012 | [ ] |
| 11 | Shear stress distribution in a rectangular beam | Parabolic | SSC JE 2020 | [ ] |
| 12 | A beam of uniform strength has | Constant bending stress | RRB JE 2014 | [ ] |

## 8. Revision checklist

- [ ] Flexure formula and assumptions
- [ ] $Z$ table and shear ratios
- [ ] All eight deflection results
- [ ] Macaulay, moment-area and Castigliano overview
