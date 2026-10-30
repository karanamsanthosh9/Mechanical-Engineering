# 05. Columns, Pressure Vessels and Failure Theories

**Exam relevance:** APPSC AEE: P | SSC JE: C | RRB JE: S | Category: AEE+/ALL | Yield: HY

---

## Part A: Detailed Theory (read this first)

This part explains buckling, pressure vessels and failure theories from first principles. Part B (from section 1 onwards) is the compact reference.

### A1. Columns: failure by instability

A **column** (or strut) is a long, slender member loaded in axial compression. A short stubby block fails by crushing when the stress reaches the yield or crushing strength. A **long** column fails much earlier, by **buckling**: it suddenly bows sideways. Buckling is a failure of **stability**, not of material strength.

**Stable, neutral, unstable equilibrium.** Push a straight column slightly sideways. At low load it springs back (stable). At a particular load it stays where it is pushed (neutral). Beyond it, the deflection grows without limit (unstable). The load at the neutral point is the **critical (buckling) load** $P_{cr}$.

**Euler's theory** (for ideal long columns).

Assumptions:

1. The column is perfectly straight and homogeneous, and the load is exactly axial.
2. The material is linearly elastic; stress stays below the proportional limit at buckling.
3. The column is long, so shortening by axial compression is negligible and the failure is by bending only.
4. The section is uniform; self-weight is ignored.

**Derivation (pinned-pinned).** At a slightly bent position with deflection $y$, the bending moment at a section is $M = -P y$. The elastic curve gives $EI\dfrac{d^2y}{dx^2} = -Py$, which is the equation of harmonic motion with solution $y = A\sin\left(x\sqrt{P/EI}\right)$. The boundary conditions $y = 0$ at $x = 0$ and $x = L$ force $\sin\left(L\sqrt{P/EI}\right) = 0$, so $L\sqrt{P/EI} = n\pi$. The smallest nontrivial value, $n = 1$, gives

$$P_{cr} = \frac{\pi^2 EI}{L^2}$$

**Effective length.** Other end conditions give the same formula with $L$ replaced by an effective length $L_e$ (the length of an equivalent pinned-pinned column):

| End conditions | $L_e$ | Relative strength |
|---|---|---|
| Both ends hinged | $L$ | 1 |
| One end fixed, other free | $2L$ | $\tfrac{1}{4}$ |
| Both ends fixed | $\tfrac{L}{2}$ | 4 |
| One fixed, one hinged | $\tfrac{L}{\sqrt{2}}$ | 2 |

$$P_{cr} = \frac{\pi^2 EI}{L_e^2}$$

**Key points.**

- $P_{cr}$ depends on $E$ and $I$, not on the strength of the material. A high-strength steel column buckles at the same load as mild steel of the same $E$ and size.
- The column buckles about the axis with the **smallest $I$** (least radius of gyration).
- Using $I = A k^2$: critical stress

$$\sigma_{cr} = \frac{\pi^2 E}{(L_e/k)^2} = \frac{\pi^2 E}{\lambda^2}$$

where $\lambda = L_e/k$ is the **slenderness ratio**. Smaller $\lambda$ means a stronger column.

- Euler's formula applies only when $\sigma_{cr}$ is below the proportional limit, that is $\lambda > \lambda_{limit} = \pi\sqrt{E/\sigma_p}$. For mild steel with $E = 200$ GPa and $\sigma_p = 250$ MPa, $\lambda \gtrsim 89$ to $100$. For short columns Euler gives absurdly large stresses (greater than yield), so another formula is needed.

**Rankine-Gordon formula (empirical, all lengths).** It combines crushing and buckling, bridging short and long columns:

$$\frac{1}{P_R} = \frac{1}{P_c} + \frac{1}{P_E} \;\Rightarrow\; P_R = \frac{\sigma_c A}{1 + a\left(\dfrac{L_e}{k}\right)^2}, \qquad a = \frac{\sigma_c}{\pi^2 E}$$

For very long columns $P_R \to P_E$; for very short ones $P_R \to \sigma_c A$.

**Other column formulas.** **Johnson's parabolic formula** and the **straight-line formula** cover the intermediate range. **Secant formula** handles eccentric loading, giving the maximum stress with an eccentricity $e$. **Eccentric load** on a short column: stress $= \dfrac{P}{A} \pm \dfrac{Pey}{I}$, and for no tension the load must act within the **middle third** (rectangle) or **middle quarter** (circle) of the section (the core or kern).

**Design response.** To raise $P_{cr}$: use a hollow or box section (larger $I$ for the same area), reduce length, fix the ends, add intermediate braces.

### A2. Thin cylinders and spheres

A **thin** cylinder has wall thickness $t < d/20$ (about), so stress is taken as uniform across the thickness. It resists internal pressure $p$ with two stresses:

- **Hoop (circumferential) stress** $\sigma_c$: tries to split the cylinder along a line. Cut a unit length: the bursting force $p d$ is resisted by two walls: $2 \sigma_c t = p d$,

$$\sigma_c = \frac{p d}{2 t}$$

- **Longitudinal (axial) stress** $\sigma_l$: tries to tear it circumferentially. Pressure on the end cap $p \pi d^2/4$ is resisted by the ring area $\pi d t$,

$$\sigma_l = \frac{p d}{4 t} = \tfrac{1}{2}\sigma_c$$

**Consequences.**

- The hoop stress is twice the longitudinal stress, so a pressurised pipe splits along its length first, and longitudinal joints must be twice as strong as circumferential joints.
- Radial stress is $-p$ at the inner surface and zero outside; compared with hoop stress it is negligible, so ignored.
- **Joint efficiency** $\eta$: with riveted or welded seams, replace $t$ by $\eta t$ in the formulas.
- **Strains and volume change.** $e_c = \dfrac{pd}{4tE}(2 - \nu)$, $e_l = \dfrac{pd}{4tE}(1 - 2\nu)$, volumetric strain $e_v = 2e_c + e_l = \dfrac{pd}{4tE}(5 - 4\nu)$.
- Change in internal volume of the vessel is used to find the quantity of extra fluid that can be pumped in.

**Thin sphere.** By symmetry the stress is the same in all directions: $\sigma = \dfrac{pd}{4t}$ (half the hoop stress of a cylinder of the same diameter and thickness). Volumetric strain $e_v = \dfrac{3pd}{4tE}(1 - \nu)$. This is why spheres are the most efficient pressure vessel shape.

### A3. Thick cylinders: Lame's theory

When the wall is thick, stress varies across the thickness (higher at the inner surface) and the radial stress cannot be ignored. Lame solved the equilibrium of a ring element, giving at radius $r$

$$\sigma_r = A - \frac{B}{r^2}, \qquad \sigma_\theta = A + \frac{B}{r^2}$$

(tension taken as positive, so a compressive pressure appears as a negative radial stress). The constants $A$ and $B$ follow from the boundary conditions: radial stress equals $-p_i$ at the inner radius $r_i$ and $-p_o$ at the outer radius $r_o$. Important results for internal pressure only:

$$\sigma_\theta(r) = \frac{p_i r_i^2}{r_o^2 - r_i^2}\left(1 + \frac{r_o^2}{r^2}\right), \qquad \sigma_{\theta,max} = p_i\frac{r_o^2 + r_i^2}{r_o^2 - r_i^2} \;\text{(at inner surface)}$$

- Hoop stress is always maximum at the inner surface and decreases outward. The outer surface carries $\dfrac{2 p_i r_i^2}{r_o^2 - r_i^2}$.
- The maximum hoop stress is always greater than $p_i$, so thickening the wall can never bring the stress below the pressure. If the allowable stress is $\sigma_t$, the pressure must satisfy $p < \sigma_t$, otherwise no thickness is enough.
- Setting $\sigma_{\theta,max} = \sigma_t$ gives the required outer radius (**Lame's equation**, used for brittle materials): $r_o = r_i\sqrt{\dfrac{\sigma_t + p}{\sigma_t - p}}$.
- **Barlow, Clavarino and Birnie** give different thickness formulas for ductile materials depending on the theory and whether ends are closed.
- **Compound cylinders and shrink fitting:** an outer cylinder is shrunk on an inner one, so the inner is initially in compression and the outer in tension. When pressure is applied the stress distribution becomes more uniform and the pressure capacity rises. **Autofrettage** (permanently stretching the bore by overpressure) does the same.

### A4. Rotating rings and discs

When a ring rotates at angular speed $\omega$ every element experiences centrifugal force. For a thin rotating ring of mean radius $r$ and density $\rho$:

$$\sigma_\theta = \rho \omega^2 r^2 = \rho v^2 \quad (v = \omega r)$$

The hoop stress depends only on **peripheral speed** and density, not on the ring size. This is the reason for the limit on rim speed of flywheels, grinding wheels and turbine discs. For a solid disc, the maximum stress at the centre is $\dfrac{(3 + \nu)}{8}\rho\omega^2 R^2$.

### A5. Theories of failure: how to judge a combined stress state

A tension test tells us the yield stress $\sigma_y$ for **uniaxial** stress. But machine parts experience biaxial or triaxial states. A **failure theory** converts the complex state into an equivalent one-dimensional check against $\sigma_y$.

Let $\sigma_1 \ge \sigma_2 \ge \sigma_3$ be the principal stresses.

| Theory | Failure when | For plane stress ($\sigma_3 = 0$) | Suits |
|---|---|---|---|
| **Maximum principal stress (Rankine)** | $\sigma_1 = \sigma_y$ | $\sigma_1 \le \sigma_y / FOS$ | Brittle |
| **Maximum shear stress (Tresca / Guest)** | $\tau_{max} = \dfrac{\sigma_1 - \sigma_3}{2} = \dfrac{\sigma_y}{2}$ | $\sigma_1 - \sigma_3 \le \sigma_y$ | Ductile (conservative) |
| **Maximum principal strain (St. Venant)** | $e_1 = e_y$ | $\sigma_1 - \nu(\sigma_2 + \sigma_3) = \sigma_y$ | Rarely used |
| **Maximum strain energy (Haigh)** | Total strain energy per volume $= \dfrac{\sigma_y^2}{2E}$ | $\sigma_1^2 + \sigma_2^2 - 2\nu\sigma_1\sigma_2 = \sigma_y^2$ | Rarely |
| **Maximum distortion energy (von Mises / Hencky)** | Distortion energy $= $ that at yield in tension | $\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2 = \sigma_y^2$ | Ductile (most accurate) |

**Why the shear-based theories suit ductile metals.** Ductile yielding is slip along planes, driven by shear. Hydrostatic pressure (equal in all directions) does not cause yielding in metals, which is why von Mises uses only the **distortion** part of the energy.

**Comparing them for pure shear $\tau$.** Tresca: yield at $\tau = 0.5\sigma_y$. Von Mises: $\tau = 0.577\sigma_y$. Experiments for ductile metals agree closely with von Mises. Tresca is more conservative; it predicts failure earlier.

**Using the theories for shafts.** With bending $M$ and torque $T$ on a solid shaft: Tresca gives $\sigma_y/FOS \ge \dfrac{32}{\pi d^3}\sqrt{M^2 + T^2}$; von Mises: $\dfrac{32}{\pi d^3}\sqrt{M^2 + 0.75T^2}$.

### A6. Exam relevance map

| Idea | Typical question |
|---|---|
| Euler's load and effective length | Ratio of buckling loads for different end conditions |
| Slenderness ratio, Rankine | Applicability of Euler; which column is weaker |
| Thin cylinder | $\sigma_c = pd/2t$, $\sigma_l = pd/4t$; sphere vs cylinder |
| Thick cylinder | Where is the maximum hoop stress |
| Theories of failure | Which theory suits ductile / brittle; von Mises and Tresca formulas |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Columns and struts

- **Column:** compression member (vertical). **Strut:** compression member in any orientation.
- **Slenderness ratio:** $\lambda = \dfrac{L_e}{k}$, with $k = \sqrt{\dfrac{I_{min}}{A}}$. Short columns crush; long columns buckle.

### Euler's formula

$$P_{cr} = \frac{\pi^2 EI}{L_e^2}, \qquad \sigma_{cr} = \frac{\pi^2 E}{\lambda^2}$$

| End condition | Effective length $L_e$ |
|---|---|
| Both ends hinged | $L$ |
| One end fixed, other free | $2L$ |
| Both ends fixed | $\dfrac{L}{2}$ |
| One end fixed, other hinged | $\dfrac{L}{\sqrt{2}} = 0.707L$ |

- Relative to the hinged-hinged load $\dfrac{\pi^2 EI}{L^2}$: fixed-free $= \dfrac{1}{4}$, hinged-hinged $= 1$, fixed-hinged $= 2$, fixed-fixed $= 4$. Ratio fixed-free : hinged-hinged : fixed-hinged : fixed-fixed $= 1 : 4 : 8 : 16$.
- **Assumptions:** initially straight column, axial load, homogeneous elastic material, failure by buckling only, frictionless pin ends, weight neglected.
- **Limit of Euler's formula:** valid if $\lambda > \lambda_c = \pi\sqrt{\dfrac{E}{\sigma_y}}$ (about $100$ for mild steel). Below this, use empirical formulas.
- **Rankine-Gordon formula** (valid for all slenderness ratios):

$$\frac{1}{P_R} = \frac{1}{P_{crush}} + \frac{1}{P_E}, \qquad P_R = \frac{\sigma_c A}{1 + a\lambda^2}, \qquad a = \frac{\sigma_c}{\pi^2 E}$$

  Rankine's constant: $\dfrac{1}{7500}$ for mild steel and $\dfrac{1}{1600}$ for cast iron.
- **Johnson parabolic** and **Secant** formulae cover intermediate and eccentric loads.
- **Eccentric loading:** $\sigma = \dfrac{P}{A} \pm \dfrac{Pey}{I}$. **Middle-third rule** for a rectangle: no tension if $e \le \dfrac{b}{6}$. For a circular section the core is a circle of diameter $\dfrac{d}{4}$, so $e \le \dfrac{d}{8}$.
- A column buckles about the axis of minimum $I$.

## 2. Thin cylinders and spheres

For internal pressure $p$, diameter $d$, thickness $t$ (thin if $t < \dfrac{d}{20}$):

$$\sigma_c = \frac{pd}{2t} \ \text{(hoop)}, \qquad \sigma_l = \frac{pd}{4t} \ \text{(longitudinal)}, \qquad \tau_{max} = \frac{pd}{8t}$$

$$\text{Sphere: } \sigma = \frac{pd}{4t} \ \text{(both directions)}$$

$$\text{Volumetric strain: cylinder } \frac{pd}{4tE}(5 - 4\nu), \qquad \text{sphere } \frac{3pd}{4tE}(1-\nu)$$

- Hoop stress is twice the longitudinal stress, so the longitudinal seam must be stronger. With joint efficiency $\eta$ the stresses are divided by $\eta$.
- Cylinder with hemispherical ends: equal strain at the junction requires the sphere to be thinner than the cylinder.

## 3. Thick cylinders (Lame's theory)

$$\sigma_r = A - \frac{B}{r^2}, \qquad \sigma_c = A + \frac{B}{r^2}$$

- Longitudinal stress is uniform for closed ends.
- Maximum hoop stress at the inner surface:

$$\sigma_{c,max} = p\,\frac{R_o^2 + R_i^2}{R_o^2 - R_i^2}$$

  The radial stress at the inner surface equals $-p$.
- Hoop stress always exceeds radial stress. Beyond a limit, increasing wall thickness gives diminishing returns.
- **Compounding (shrink fitting)** and **autofrettage** reduce the maximum hoop stress.
- Clavarino's and Birnie's equations are used for design with closed and open ends respectively.

## 4. Rotating rings and discs

- Thin ring hoop stress: $\sigma = \rho v^2 = \rho\omega^2 r^2$.
- In a rotating solid disc, stresses decrease from the centre outward; the maximum is at the centre.

## 5. Theories of failure

| Theory | Criterion | Suitable for |
|---|---|---|
| Maximum principal stress (Rankine) | $\sigma_1 = \sigma_y / \text{FOS}$ | Brittle materials |
| Maximum shear stress (Tresca / Guest) | $\sigma_1 - \sigma_3 = \sigma_y$ | Ductile (conservative) |
| Maximum principal strain (St. Venant) | $\varepsilon_1 = \varepsilon_y$ | Rarely used |
| Total strain energy (Haigh) | $U = U_y$ | Rarely used |
| Distortion energy (von Mises / Hencky) | $\sqrt{\dfrac{(\sigma_1-\sigma_2)^2 + (\sigma_2-\sigma_3)^2 + (\sigma_3-\sigma_1)^2}{2}} = \sigma_y$ | Ductile (best match) |

- Yield in pure shear: Tresca $\tau_y = 0.5\,\sigma_y$; von Mises $\tau_y = 0.577\,\sigma_y$.
- On the principal stress plane the Tresca hexagon lies inside the von Mises ellipse, so Tresca is more conservative.
- Hydrostatic stress does not cause yielding in ductile materials.

## 6. Worked numericals

1. **Euler.** $E = 200$ GPa, $I = 10^6$ mm$^4$, $L = 2$ m, hinged ends:

$$P_{cr} = \frac{\pi^2 \times 2\times10^{5} \times 10^{6}}{2000^2} = 493.5\ \text{kN}$$

2. **Thin cylinder.** $p = 2$ MPa, $d = 1000$ mm, $t = 10$ mm: $\sigma_c = \dfrac{2\times1000}{2\times10} = 100$ MPa and $\sigma_l = 50$ MPa.
3. **Slenderness.** $k = 20$ mm, $L = 2$ m, fixed-free: $L_e = 4$ m, so $\lambda = \dfrac{4000}{20} = 200$.

## 7. Common mistakes

- Using $I$ about the wrong axis for buckling (use $I_{min}$).
- Forgetting the effective length $2L$ for a fixed-free column.
- Using thin-wall formulas when $t > \dfrac{d}{20}$.

## 8. Interconnections

- Pressure vessels: boilers, IC engine cylinders, hydraulic cylinders.
- Failure theories: Machine Design (shafts and bolts under combined loads).

## 9. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Euler buckling load for hinged ends | $\dfrac{\pi^2 EI}{L^2}$ | SSC JE 2017 | [ ] |
| 2 | Effective length, one end fixed and one free | $2L$ | RRB JE 2015 | [ ] |
| 3 | Effective length, both ends fixed | $\dfrac{L}{2}$ | SSC JE 2018 | [ ] |
| 4 | Hoop stress in a thin cylinder | $\dfrac{pd}{2t}$ | RRB JE 2014 | [ ] |
| 5 | Longitudinal stress in a thin cylinder | $\dfrac{pd}{4t}$ | SSC JE 2016 | [ ] |
| 6 | Stress in a thin spherical shell | $\dfrac{pd}{4t}$ | SSC JE 2019 | [ ] |
| 7 | Theory suited to ductile materials | Maximum shear stress or distortion energy | RRB JE 2019 | [ ] |
| 8 | Theory suited to brittle materials | Maximum principal stress (Rankine) | RRB JE 2015 | [ ] |
| 9 | Slenderness ratio | $\dfrac{L_e}{k}$ | SSC JE 2020 | [ ] |
| 10 | Middle-third rule for a rectangle: eccentricity limit | $\dfrac{b}{6}$ | APPSC AEE 2012 | [ ] |

## 10. Revision checklist

- [ ] End-condition table with Euler loads
- [ ] Thin cylinder and sphere formulas
- [ ] Lame's equations
- [ ] Five failure theories and their material suitability
