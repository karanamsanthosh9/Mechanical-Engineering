# 01. Stress, Strain and Elastic Constants

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: VHY

---

## Part A: Detailed Theory (read this first)

This part builds the ideas of stress, strain and elastic behaviour from zero. Part B (from section 1 onwards) is the compact reference with formulas, numericals and PYQs.

### A1. Why Strength of Materials exists

Statics assumes bodies are rigid. Real bodies deform under load, and may break. Strength of materials answers three design questions for a member (bar, beam, shaft, column):

1. **Strength:** will it break or yield? (compare stress with allowable stress)
2. **Stiffness:** will it deform too much? (compare deflection or twist with the limit)
3. **Stability:** will it buckle? (columns)

A good design satisfies all three at minimum weight and cost.

### A2. Load, stress and strain from first principles

**Types of loads.** Axial (tensile or compressive, along the axis), shear (transverse, tends to slide layers), bending (tends to curve the member), torsion (twisting), and combined loads. By nature: **static** (slow, steady), **sudden** (applied at full value at once), **impact** (a moving mass strikes), **fatigue** (repeated or reversing).

**Stress.** Cut an imaginary section through a loaded member. The internal forces on the cut must balance the external load. Stress is that internal force intensity:

$$\sigma = \frac{P}{A} \;\;(\text{normal, perpendicular to the section}), \qquad \tau = \frac{V}{A} \;\;(\text{shear, parallel to the section})$$

- Tension and compression give normal stress. Positive for tension.
- The area is the **original** cross-section in engineering stress.
- Normal stress may not be uniform if the section changes abruptly (stress concentration at holes, notches, fillets). The concentration factor is $K_t = \dfrac{\sigma_{max}}{\sigma_{nominal}}$.

**Strain.** A bar of original length $L$ stretches by $\delta L$:

$$e = \frac{\delta L}{L} \;\;(\text{no unit, or mm/mm})$$

- **Shear strain** $\gamma$ is the angle (radian) by which a right angle distorts.
- **Volumetric strain** $e_v = \delta V/V$. For a bar in simple tension it is $e_v = e(1 - 2\nu)$, where $e$ is the axial strain.
- **Lateral strain** accompanies axial strain: pulling a bar makes it thinner. **Poisson's ratio** $\nu = \dfrac{\text{lateral strain}}{\text{axial strain}}$ (magnitudes). It is between $0$ and $0.5$ for ordinary materials.

### A3. Hooke's law and what "elastic" means

If a load is removed and the body returns completely to its original shape, the behaviour is **elastic**. If a permanent set remains, the body has gone **plastic**. For most engineering metals, in the elastic range stress is proportional to strain:

$$\sigma = E e, \qquad \tau = G\gamma$$

$E$ (Young's modulus) measures stiffness along the axis; $G$ (modulus of rigidity) measures stiffness against shear. A high $E$ means the material needs a large stress for a small strain; it says nothing about strength. Steel and a weak steel have the same $E$ but different yield.

Hooke's law assumes: the material is **homogeneous** (same everywhere), **isotropic** (same in all directions), continuous, and the loads are within the proportional limit. **St. Venant's principle:** stress distribution a short distance from the point of load application is independent of how the load is applied, so we can use $P/A$ away from the ends.

### A4. Reading the stress-strain curve of mild steel

Pull a standard specimen in a testing machine. Plot stress (load over original area) against strain.

1. **OA, proportional limit:** straight line, Hooke's law holds. The slope is $E$.
2. **Elastic limit:** the largest stress after which the specimen still returns to zero strain on unloading. Very close to the proportional limit.
3. **Upper yield point, then lower yield point:** the stress suddenly falls and the material elongates at nearly constant stress. This is yielding; slip planes move through the crystals (Luders bands). The lower yield point is used as the yield strength.
4. **Strain hardening:** stress must be raised to keep deforming because dislocations pile up and block each other.
5. **Ultimate tensile strength (UTS):** the maximum engineering stress.
6. **Necking:** the cross-section shrinks locally. The load falls, so engineering stress falls, but true stress keeps rising because the true area is smaller.
7. **Fracture:** the cup-and-cone shape in ductile steel (shear lips at the edge, flat in the centre).

**Why a brittle material is different.** Cast iron, glass and concrete break with almost no plastic strain. No yield point, no necking. They are strong in compression and weak in tension.

**Offset (proof) stress.** When there is no clear yield point (aluminium, high-strength steel), the yield strength is taken where a line parallel to the elastic slope, drawn from $0.2\%$ strain, meets the curve.

**Ductility vs brittleness.** Ductility is measured by percentage elongation and percentage reduction of area. A material with more than about $5\%$ elongation is ductile.

**Toughness, resilience, proof resilience.** Area under the curve represents energy per unit volume.

- **Resilience:** energy stored in the elastic range. **Proof resilience:** at the elastic limit. **Modulus of resilience** is per unit volume.
- **Toughness:** the area up to fracture. A tough material absorbs much energy before breaking (mild steel is tough; glass is not).

**Working stress and factor of safety.** Actual loads, material properties and analysis are uncertain, so we design for a stress below the failure stress: $\sigma_{working} = \sigma_{yield\ (ductile)} / FOS$ or $\sigma_{ultimate\ (brittle)} / FOS$.

### A5. Axial deformation, step by step

For a bar of constant section under axial load $P$: stress $P/A$, strain $\sigma/E$, elongation

$$\delta L = eL = \frac{PL}{AE}$$

The quantity $AE$ is the **axial rigidity**. Interpretation: $\dfrac{AE}{L}$ is the stiffness of the bar as a spring.

- **Bar of several sections:** add the deformation of each part. Draw the axial force diagram first, because the force can differ in each part.
- **Taper:** stress varies along the length, so integrate. Circular taper: $\delta L = \dfrac{4PL}{\pi E d_1 d_2}$.
- **Own weight:** the stress at the top is $\rho g L$ and zero at the bottom. Average load is half, so $\delta L = \dfrac{WL}{2AE}$.
- **Principle of superposition:** when a member has several loads, the effect of the loads acting together equals the sum of their separate effects (valid in the linear range).

**Bars in series and parallel.**

- **Series:** the same force in each bar; total elongation is the sum.
- **Parallel (composite) bars:** the bars are rigidly joined, so they have the **same strain** (equal elongation); the load is shared in proportion to $AE$: $P_1 = P\dfrac{A_1E_1}{A_1E_1 + A_2E_2}$.

**Statically indeterminate problems.** Statics alone cannot find the forces, so write a second equation from geometry: total elongation equals a given value (for example, zero between two rigid walls). Method: (1) equilibrium equation, (2) compatibility equation, (3) force-deformation relation $\delta = PL/AE$, (4) solve.

### A6. Thermal stress

If a bar is free to expand, a temperature rise $\Delta T$ causes strain $\alpha\Delta T$ and **no stress**. If the expansion is prevented, a stress appears even without any load:

$$\sigma = E\alpha\Delta T \;\;(\text{compressive on heating})$$

The stress is independent of length and cross-section. If the supports yield by $\delta$, the thermal strain left to be resisted is $\alpha\Delta T - \delta/L$. For a composite bar, the metal with the larger $\alpha$ is in compression when heated (it wants to expand more than its partner allows).

### A7. Sudden and impact loads

- **Gradual load $P$:** work done $= \tfrac{1}{2}P\delta$, stress $= P/A$.
- **Sudden load** (applied full at once, not dropped): work $= P\delta$, so energy balance gives stress $= 2P/A$. A suddenly applied load produces **double** the stress.
- **Impact** (a weight $W$ dropped from height $h$): equate loss of potential energy to strain energy:

$$W(h + \delta) = \tfrac{1}{2}\sigma A \delta \;\Rightarrow\; \sigma = \frac{W}{A}\left[1 + \sqrt{1 + \frac{2hAE}{WL}}\right]$$

For $h = 0$ it reduces to $2W/A$ (the sudden-load result). For large $h$, $\sigma \approx \sqrt{2WhE/(AL)}$.

### A8. Elastic constants and why four are related

Isotropic materials have four elastic constants: $E$, $G$, $K$ (bulk modulus) and $\nu$. Only **two are independent**; the others follow.

- **Bulk modulus** $K = \dfrac{p}{\delta V/V}$: resistance to uniform volume change. Large for liquids and solids.
- Relations:

$$E = 2G(1 + \nu) = 3K(1 - 2\nu), \qquad E = \frac{9KG}{3K + G}$$

- Because $K > 0$ and $G > 0$, Poisson's ratio is bounded: $-1 < \nu < 0.5$. At $\nu = 0.5$ the material is incompressible ($K \to \infty$), as for rubber.
- Typical values: steel $E = 200$ GPa, $G = 80$ GPa, $\nu = 0.3$.

**Derivation of $E = 2G(1+\nu)$ (logic).** In pure shear, the state of stress is equivalent to tension $\tau$ on one diagonal and compression $\tau$ on the perpendicular. The strain along the tension diagonal is $\dfrac{\tau}{E}(1 + \nu)$, and this equals half the shear strain $\gamma/2 = \tau/(2G)$. So $\dfrac{\tau(1+\nu)}{E} = \dfrac{\tau}{2G}$, giving $E = 2G(1+\nu)$.

### A9. Complex stress: from a point of view

At a point in a loaded body the stress on a plane depends on the plane's orientation. A **plane** inclined at angle $\theta$ to a reference cross-section carries both normal and shear stress.

- For a bar in uniaxial tension $\sigma$: on a plane at angle $\theta$ from the cross-section, $\sigma_n = \sigma\cos^2\theta$ and $\tau = \tfrac{1}{2}\sigma\sin 2\theta$. Maximum shear $\sigma/2$ occurs at $45^\circ$. This is why ductile metals yield by slip on $45^\circ$ planes.
- **Principal planes** have zero shear stress, and the normal stresses on them are the **principal stresses** (maximum and minimum normal stresses).
- General plane stress with $\sigma_x$, $\sigma_y$, $\tau_{xy}$:

$$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}, \qquad \tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$

- **Mohr's circle** is a graph of these equations. Centre at $\left(\dfrac{\sigma_x + \sigma_y}{2}, 0\right)$, radius equal to $\tau_{max}$. Points on the circle represent stresses on planes; angles on the circle are **twice** the physical angles. Principal stresses are where the circle cuts the $\sigma$ axis.
- **Why double angle?** The stress expressions contain $\cos 2\theta$ and $\sin 2\theta$.

### A10. Exam relevance map

| Idea | Typical question style |
|---|---|
| Stress-strain curve | Identify the point; toughness vs resilience; which material has the highest $E$ |
| $\delta L = PL/AE$ | Direct numerical; series and parallel bars; taper |
| Thermal stress | $E\alpha\Delta T$ with gaps; composite bars |
| Sudden / impact load | Factor 2 for sudden load; impact stress |
| Elastic constants | $E$, $G$, $K$, $\nu$ relations; $\nu = 0.5$; $\nu$ range |
| Mohr's circle | Principal stress, maximum shear stress |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Foundations

- **Stress** is the internal resisting force per unit area. Normal stress $\sigma = \dfrac{P}{A}$; shear stress $\tau = \dfrac{V}{A}$. Unit: Pa $= $ N/m$^2$ (1 MPa $=$ 1 N/mm$^2$).
- **Strain** is deformation per unit original dimension (dimensionless). Linear strain $e = \dfrac{\delta L}{L}$; shear strain is the angular distortion (radians); volumetric strain $e_v = \dfrac{\delta V}{V}$.
- **Hooke's law:** within the proportional limit, stress is proportional to strain:

$$\sigma = E\,e$$

- **Assumptions:** homogeneous, isotropic, continuous material; linear elastic; small deformations; St. Venant's principle (local effects of load application vanish far from the ends).
- **True stress** $= \dfrac{P}{A_{inst}}$; **true strain** $= \ln\dfrac{L}{L_0} = \ln(1 + e_{eng})$. Engineering stress uses the original area.

## 2. Stress-strain curve (mild steel)

Points in order: proportional limit, elastic limit, upper yield point, lower yield point, strain hardening, ultimate tensile strength (UTS), necking, fracture.

| Property | Meaning |
|---|---|
| Toughness | Area under the whole curve (energy to fracture) |
| Resilience | Strain energy stored up to the elastic limit; proof resilience per unit volume $= \dfrac{\sigma^2}{2E}$ |
| Ductility | Percentage elongation, percentage reduction in area |
| Brittle | Little plastic deformation, no clear yield (cast iron, glass) |
| 0.2% proof stress | Used where there is no clear yield point (aluminium, HSLA steel) |
| Bauschinger effect | Reduced yield stress on reversal of loading |

- Ductile materials fail in shear (cup-and-cone); brittle materials fail by normal stress (flat fracture).
- Typical values: $E_{steel} \approx 200$ GPa; $E_{Al} \approx 70$ GPa; $E_{Cu} \approx 110$ to $120$ GPa; $E_{CI} \approx 100$ GPa. Poisson's ratio: steel $\approx 0.3$, cork $\approx 0$, rubber $\approx 0.5$.
- **Factor of safety** $= \dfrac{\text{ultimate (or yield) stress}}{\text{working stress}}$. **Margin of safety** $= \text{FOS} - 1$.

## 3. Axial loading

- Elongation:

$$\delta L = \frac{PL}{AE}$$

- Bar of varying section: $\delta L = \sum \dfrac{P_i L_i}{A_i E_i}$.
- Uniformly tapering circular bar (end diameters $d_1$, $d_2$): $\delta L = \dfrac{4PL}{\pi E d_1 d_2}$.
- Tapering rectangular bar (thickness $t$, widths $b_1$, $b_2$): $\delta L = \dfrac{PL}{Et(b_1 - b_2)}\ln\dfrac{b_1}{b_2}$.
- Bar under its own weight: $\delta L = \dfrac{WL}{2AE} = \dfrac{\rho g L^2}{2E}$.
- **Compound bars (parallel):** equal strain, $P_1 + P_2 = P$, and $\dfrac{\sigma_1}{E_1} = \dfrac{\sigma_2}{E_2}$.
- **Strain energy:**

$$U = \frac{\sigma^2}{2E}V = \frac{P^2 L}{2AE}$$

- Gradual load: $U = \tfrac{1}{2}P\delta$. Sudden load: stress $= 2\dfrac{P}{A}$ (twice the static stress). Impact from height $h$:

$$\sigma = \sigma_{st}\left[1 + \sqrt{1 + \frac{2h}{\delta_{st}}}\right]$$

## 4. Elastic constants

| Constant | Definition |
|---|---|
| $E$ (Young's modulus) | $\dfrac{\sigma}{e}$ |
| $G$ (shear or rigidity modulus) | $\dfrac{\tau}{\text{shear strain}}$ |
| $K$ (bulk modulus) | $\dfrac{p}{\delta V / V}$ |
| $\nu$ (Poisson's ratio) | $\dfrac{\text{lateral strain}}{\text{longitudinal strain}}$ (magnitude) |

### Relations (very high yield)

$$E = 2G(1+\nu), \qquad E = 3K(1-2\nu)$$

$$E = \frac{9KG}{3K+G}, \qquad \nu = \frac{3K-2G}{2(3K+G)}$$

- For isotropic materials only two constants are independent. $-1 < \nu < 0.5$; at $\nu = 0.5$, $K \to \infty$ (incompressible).
- Volumetric strain: $e_v = e_x + e_y + e_z$. Uniaxial stress: $e_v = e(1 - 2\nu)$.
- Biaxial stress: $e_x = \dfrac{\sigma_x - \nu\sigma_y}{E}$.
- Cylinder: $e_v = 2e_c + e_l$; sphere: $e_v = 3e$.

## 5. Thermal stress

- Free expansion: $\delta L = \alpha L\,\Delta T$.
- Fully restrained bar:

$$\sigma = E\alpha\,\Delta T \quad \text{(compressive on heating)}$$

- Partially yielding supports: restrained part is $(\alpha L\,\Delta T - \delta)$.
- **Composite bars, thermal:** net force zero ($P_1 + P_2 = 0$) plus strain compatibility.
- Typical $\alpha$: steel $12\times10^{-6}$ /K; aluminium $23\times10^{-6}$ /K; copper $17\times10^{-6}$ /K.

## 6. Principal stresses and Mohr's circle

For a plane stress state $(\sigma_x, \sigma_y, \tau_{xy})$ on a plane at angle $\theta$:

$$\sigma_n = \frac{\sigma_x+\sigma_y}{2} + \frac{\sigma_x-\sigma_y}{2}\cos 2\theta + \tau_{xy}\sin 2\theta$$

$$\tau = -\frac{\sigma_x-\sigma_y}{2}\sin 2\theta + \tau_{xy}\cos 2\theta$$

Principal stresses, maximum shear and principal plane angle:

$$\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2}$$

$$\tau_{max} = \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2} = \frac{\sigma_1 - \sigma_2}{2}, \qquad \tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$$

- Principal planes are $90^\circ$ apart and carry zero shear stress. Planes of maximum shear are $45^\circ$ from the principal planes. $\sigma_x + \sigma_y = \sigma_1 + \sigma_2$ (invariant).
- **Mohr's circle:** centre $\left(\dfrac{\sigma_x+\sigma_y}{2},\,0\right)$, radius $= \tau_{max}$. Angles on the circle are twice the real plane angle ($2\theta$). Pure shear: $\sigma_1 = +\tau$, $\sigma_2 = -\tau$. Hydrostatic state: the circle is a point.
- Under a direct stress $\sigma$ on one plane only, $\tau_{max} = \dfrac{\sigma}{2}$ at $45^\circ$.
- A $45^\circ$ strain-gauge rosette $(\varepsilon_a, \varepsilon_b, \varepsilon_c)$ gives principal strains through Mohr's circle for strain.

## 7. Worked numericals

1. **Steel rod.** $P = 50$ kN, $A = 400$ mm$^2$, $L = 2$ m, $E = 200$ GPa:

$$\delta L = \frac{50000 \times 2000}{400 \times 200000} = 1.25\ \text{mm}$$

2. **Thermal.** Restrained steel rod, $\Delta T = 50$ K:

$$\sigma = 200000 \times 12\times10^{-6} \times 50 = 120\ \text{MPa}$$

3. **Elastic constants.** $E = 200$ GPa, $\nu = 0.3$: $G = \dfrac{200}{2.6} = 76.9$ GPa and $K = \dfrac{200}{3(0.4)} = 166.7$ GPa.
4. **Principal stresses.** $\sigma_x = 80$, $\sigma_y = 20$, $\tau_{xy} = 40$ MPa: centre $= 50$, radius $= \sqrt{30^2 + 40^2} = 50$. So $\sigma_1 = 100$ MPa, $\sigma_2 = 0$, $\tau_{max} = 50$ MPa.

## 8. Common mistakes

- Using engineering and true stress interchangeably in the plastic range.
- Forgetting that sudden loading gives twice the stress, not twice the load.
- Writing $E = 3K(1-\nu)$ (wrong); the correct form is $E = 3K(1-2\nu)$.
- Writing the Mohr angle as $\theta$ instead of $2\theta$.

## 9. Interconnections

- Elastic constants link to torsion ($G$), bending ($E$) and pressure vessels ($\nu$).
- Strain energy leads to Castigliano's theorem (deflections) and the distortion energy failure theory.
- Thermal stress applies to boiler tubes, rails and composite bars.

## 10. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Relation between $E$, $G$ and $\nu$ | $E = 2G(1+\nu)$ | SSC JE 2017 | [ ] |
| 2 | Poisson's ratio of steel (approx.) | 0.25 to 0.33 | RRB JE 2014 | [ ] |
| 3 | Area under the stress-strain curve up to fracture indicates | Toughness | SSC JE 2018 | [ ] |
| 4 | Stress from sudden loading compared with gradual loading | Twice | SSC JE 2016 | [ ] |
| 5 | Elongation of a bar under self weight | $\dfrac{WL}{2AE}$ | RRB JE 2015 | [ ] |
| 6 | Poisson's ratio of an incompressible material | 0.5 | SSC JE 2019 | [ ] |
| 7 | Young's modulus of steel | About 200 GPa | RRB JE 2019 | [ ] |
| 8 | Resilience is | Strain energy stored within the elastic limit | RRB JE 2015 | [ ] |
| 9 | Thermal stress in a fully restrained bar | $E\alpha\,\Delta T$ | APPSC AEE 2012 | [ ] |
| 10 | Maximum shear stress under pure tension $\sigma$ | $\dfrac{\sigma}{2}$ | SSC JE 2020 | [ ] |
| 11 | Bulk modulus in terms of $E$ and $\nu$ | $\dfrac{E}{3(1-2\nu)}$ | SSC JE 2018 | [ ] |
| 12 | Mohr's circle for a hydrostatic state is | A point | APPSC AEE 2012 | [ ] |

## 11. Revision checklist

- [ ] Stress-strain curve with all points
- [ ] $E$, $G$, $K$, $\nu$ relations (all four)
- [ ] Thermal stress and composite bars
- [ ] Mohr's circle: centre, radius, $2\theta$
- [ ] Sudden and impact load stress ratios
