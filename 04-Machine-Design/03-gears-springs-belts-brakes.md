# 03. Gears, Springs, Belts and Brakes (Design)

**Exam relevance:** APPSC AEE: P | SSC JE: S | RRB JE: S | Category: AEE+ | Yield: MY

---

## Part A: Detailed Theory (read this first)

This part explains how gear teeth are loaded and sized, how springs are designed, and how belts, chains, clutches and brakes are designed from the loads they transmit. Part B (from section 1 onwards) is the compact reference.

### A1. Gear tooth loading: where the forces come from

Torque $T$ on a gear of pitch diameter $d$ is transmitted through contact at the pitch point. The force between mating teeth acts along the **line of action**, tilted at the pressure angle $\phi$ to the tangent. It resolves into:

- **Tangential (transmitted) component** $F_t = \dfrac{2T}{d}$: does the useful work; $P = F_t v$.
- **Radial (separating) component** $F_r = F_t\tan\phi$: pushes the gears apart, loads bearings.
- Resultant normal force $F_n = \dfrac{F_t}{\cos\phi}$.

For **helical gears** with helix angle $\psi$, there is also an **axial (thrust) component** $F_a = F_t\tan\psi$ and the radial component becomes $F_t\tan\phi_n/\cos\psi$ (for a normal pressure angle $\phi_n$). **Herringbone** gears have two opposite helices so the thrust cancels. **Bevel gears** also produce axial and radial components that depend on the pitch cone angle; **worm gears** have large axial thrust on the worm.

### A2. Why gear teeth fail and the two design checks

A gear tooth must resist two separate failure modes, so two checks are made.

1. **Beam strength (tooth breakage)**: the tooth bends like a cantilever under $F_t$. Failure by bending fatigue at the root.
2. **Wear strength (surface failure)**: contact stress between the tooth surfaces. Failure by pitting (small cavities from surface fatigue), scoring (adhesion under high load and poor lubrication), abrasive wear.

**Lewis beam strength.** Treat the tooth as a cantilever of uniform strength, loaded at the tip by $F_t$. At the critical section (thickness $t$, height $h$ of the load above it, face width $b$), the bending stress is

$$\sigma_b = \frac{6 F_t h}{b\,t^2} \;\Rightarrow\; F_t = \sigma_b\,b\,\frac{t^2}{6h}$$

Lewis wrote $\dfrac{t^2}{6h} = \pi m\,y$, where $y$ depends only on the tooth shape (number of teeth and pressure angle). So

$$F_t = \sigma_b\,b\,\pi m\,y = \sigma_b\,b\,m\,Y$$

where $b$ = face width, $m$ = module and $Y = \pi y$ is the **Lewis form factor**. Fewer teeth means a smaller $Y$ and a weaker tooth. For the same material the **pinion is weaker** than the gear, so the design is based on the pinion.

- The product $\sigma_b Y$ is the quantity to compare. If the materials of pinion and gear differ, design the one with the smaller $\sigma_b Y$.
- **Velocity factor** $C_v$ reduces the permissible stress to allow for impact at higher speeds: Barth's $C_v = \dfrac{3}{3+v}$ for ordinary cut gears and $\dfrac{6}{6+v}$ for accurately hobbed gears ($v$ in m/s).
- **Dynamic load** (Buckingham): errors in tooth profile and spacing cause shocks, so the load on the tooth is larger than $F_t$: $F_d = F_t + F_i$.
- **Face width** is usually $9.5m$ to $12.5m$. A wider tooth is stronger but sensitive to misalignment.

**Buckingham wear load.** The two teeth in contact are like two cylinders pressed together (Hertz line contact). The maximum allowable contact load is

$$F_w = d_p\,b\,Q\,K, \qquad Q = \frac{2 T_g}{T_g + T_p}$$

where the ratio factor $Q$ increases with the gear ratio and $K$ is the load-stress factor which depends on the surface endurance limit and the hardness. For a high gear ratio and hard teeth the wear load is high.

**Design rule.** The beam strength $F_s$ and wear load $F_w$ must both exceed the dynamic load $F_d$ (with a factor of safety). Usually the wear check governs for hardened gears of fine pitch, and the bending check for large module gears.

**Gear materials.** Cast iron (cheap, good damping, low strength), carbon and alloy steels (heat treated: through-hardened, case-hardened, nitrided), bronze (worm wheels), non-metallic (nylon, fibre: quiet, light duty).

**Other gear types.**

- **Helical gear**: normal module $m_n = m\cos\psi$; the tooth strength is calculated on an equivalent spur gear with formative number of teeth $T_e = T/\cos^3\psi$, which is larger, so helical gears are stronger and quieter.
- **Bevel gear**: pitch cone angle $\tan\gamma = T_p/T_g$ (for $90^\circ$ shaft angle). Formative number of teeth $T_e = T/\cos\gamma$.
- **Worm gear**: the worm is like a screw, the wheel like a nut. Velocity ratio $= \dfrac{T_{wheel}}{\text{number of starts}}$. Efficiency of the worm drive is $\eta = \dfrac{\tan\lambda\,(1 - \mu\tan\lambda)}{\tan\lambda + \mu}$ for a driving worm (with $\phi_n$ small), which increases with the lead angle; the drive is self-locking if $\tan\lambda \le \mu$. Worm gears give large reduction (up to 100:1) in a compact size and quiet operation, but efficiency is low and heat is a limiting factor.

### A3. Spring design

The analysis of a helical spring was done in Strength of Materials. Here are the design points.

- **Spring index** $C = D/d$: preferably $4$ to $12$. A low index means a stiff spring that is hard to coil and has high stress at the inner side of coils; a high index gives a flexible spring, prone to buckling and tangling.
- **Wahl's factor** $K_w$ corrects for direct shear and curvature (it is the stress concentration inside of the coil).
- **Spring terms:** *active coils* $n$ (those that deflect), *total coils* $n'$ (including inactive end coils; plain ends add 0, squared-and-ground ends add 2), *solid length* $= n' d$, *free length* $=$ solid length $+$ maximum deflection $+$ clearance between adjacent coils (about 15% of the deflection), *pitch* $= \dfrac{\text{free length}}{n}$.
- **Buckling**: a compression spring with free length greater than about $4D$ may buckle; use guides.
- **Spring materials:** hard-drawn wire (cheap, static), oil-tempered wire, music wire (best strength, small springs), chrome-vanadium (fatigue and heat), phosphor bronze and stainless (corrosion, electrical).
- **Fatigue loading:** valve springs, suspension springs see millions of cycles; design with Goodman line for shear stress using the corrected endurance limit; shot peening raises fatigue life.
- **Other springs:** torsion spring (wound helix loaded by a moment, wire stressed in bending), flat spiral (clock), conical, Belleville (disc) washer (high load in small space), leaf spring (multi-leaf, with a master leaf, extra full-length leaves and graduated leaves, nip to equalise stresses).
- **Stiffness and energy:** $k = \dfrac{G d^4}{8 D^3 n}$, energy $\tfrac{1}{2}W\delta = \tfrac{1}{2}k\delta^2$.
- **Surge** in springs: resonance of the spring coils at high-frequency loading (valve springs) - avoid by making the natural frequency of the spring much greater than the forcing frequency, or use dual springs.

### A4. Belt, rope and chain drive design

**Flat belt design steps:** (1) compute the design power with a service factor; (2) choose pulley diameters and centre distance; (3) find the arc of contact on the small pulley and the tension ratio; (4) take the allowable stress of the belt and a centrifugal tension correction, so the maximum tension $T_{max} = \sigma \times$ cross-section; (5) from $P = (T_1 - T_2)v$ find the belt width.

- Belt materials: leather (best, traditional), fabric (cotton, canvas), rubber-covered fabric, balata, and modern synthetic (nylon core with elastomer).
- Pulleys are made of cast iron, steel or aluminium; a slightly **crowned** (convex) face keeps the belt centred.

**V-belt.** The belt wedges in a groove of angle $2\beta$ (about $30^\circ$ to $40^\circ$); the normal reaction is increased by $1/\sin\beta$ and so the effective friction. Standard sections A, B, C, D, E (small to large; Z for the smallest). The belts come in a **matched set** so that all share the load. They are endless, so a drive can only be changed by moving the centre distance.

**Chain drive.** A chain is a positive drive: no slip, accurate velocity ratio, high efficiency (about 98%), able to carry large loads at low speed, works on short centre distances and in oil and dirt, but is noisier than belts and needs lubrication.

- **Roller chain** pitch $p$; sprocket with $T$ teeth has pitch circle diameter $d = \dfrac{p}{\sin(180^\circ/T)}$. Chain speed $v = \dfrac{p T N}{60}$.
- The chain wraps on the sprocket as a polygon, so the chain speed fluctuates slightly (**chordal action**, polygon effect); fewer teeth gives a bigger variation, so use at least about $17$ teeth on the small sprocket for smooth operation.
- **Silent (inverted-tooth) chain** is quieter at high speed.
- Velocity ratio $= T_2/T_1$. Number of links should be even to avoid an offset link.

**Rope drive.** Several grooved ropes on large pulleys for transmitting power over long distances (cotton, manila, wire rope).

### A5. Clutch and brake design

**Clutch design.** The principle is covered in Theory of Machines. In design, use **uniform wear** for the torque: $T = \mu\,W\,n\,R_{mean}$, $W = 2\pi\,p_{max}\,r_i\,(r_o - r_i)$ where the maximum pressure occurs at the inner radius, with $p\,r = $ constant. The ratio $r_i/r_o$ that maximises the torque for a given pressure and outer radius is $\dfrac{1}{\sqrt{3}} \approx 0.577$; in practice about $0.6$ to $0.7$ is used. Lining materials need a stable friction coefficient (asbestos-free organic, sintered metal, cork).

**Brake design.** The brake must absorb all the energy of the moving system in the required time.

- Energy to be absorbed: kinetic $\tfrac{1}{2}mv^2$ plus potential $mgh$ (for a load lowering) plus rotational $\tfrac{1}{2}I\omega^2$.
- Brake torque $T = \mu\,R_N\,r$ where $R_N$ is the shoe normal force. A single block brake loads the shaft sideways. For a **pivoted** (long) shoe, use the equivalent friction coefficient $\mu' = \dfrac{4\mu\sin\theta}{2\theta + \sin 2\theta}$.
- **Heat dissipation** is the limiting factor. Temperature rise of the drum is estimated from the energy absorbed divided by the mass times specific heat; the $p v$ product (pressure times rubbing speed) is limited for the lining material (high $p v$ causes **fade**).
- **Self-energising** and **self-locking**: if the moment of the friction force about the shoe pivot helps the applied force, the brake is self-energising (leading shoe of a drum brake). If the friction moment is larger than the moment of the normal force, the brake locks itself and cannot be released without reversing the force.
- **Types:** shoe (block), band, internal-expanding, disc (caliper), cone, and electromagnetic or hydraulic. Automobiles use hydraulic actuation with discs at the front and drums at the rear.

### A6. Exam relevance

- Gear tooth force components; Lewis equation and form factor; pinion is weaker (all exams).
- Failure modes of gears (pitting, scoring); helical and worm gear features (SSC JE, APPSC AEE).
- Spring index, Wahl factor, solid and free length, series and parallel (all exams).
- Belt and chain: chordal action, V-belt advantages, velocity ratio (SSC JE, RRB JE).
- Self-energising brake, uniform wear in clutches (APPSC AEE).

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Spur gear design

- **Gear tooth forces** (pitch circle diameter $d$, torque $T$):

$$F_t = \frac{2T}{d}, \qquad F_r = F_t\tan\phi, \qquad F_n = \frac{F_t}{\cos\phi}$$

- **Lewis bending equation:** the tooth is a cantilever of uniform strength.

$$F_t = \sigma_b\,b\,m\,Y$$

  where $b$ is the face width, $m$ the module, $Y$ the Lewis form factor ($Y = \pi y$ with $y$ the older tooth form factor depending on the number of teeth and pressure angle).
- **Velocity factor (Barth)** for ordinary cut gears: $C_v = \dfrac{3}{3+v}$; for precision gears $C_v = \dfrac{6}{6+v}$. The permissible stress is multiplied by $C_v$.
- **Wear (Buckingham) equation:** the contact stress between two teeth follows the Hertz line contact theory.

$$F_w = d_p\,b\,Q\,K$$

  with ratio factor $Q = \dfrac{2\,T_g}{T_g + T_p}$ for external gears, and load-stress factor $K$.
- **Dynamic load** (Buckingham): $F_d = F_t + F_i$ where $F_i$ is the incremental dynamic load due to errors.
- **Design rule:** the beam strength $F_s$ must exceed the dynamic load, and the wear load must exceed it too. Typical face width $b = 9.5\,m$ to $12.5\,m$ (about $10\,m$).
- **Helical gears:** normal module $m_n = m\cos\psi$; equivalent number of teeth (Tredgold) $T_e = \dfrac{T}{\cos^3\psi}$; axial thrust $F_a = F_t\tan\psi$. Helical gears run smoother than spur gears but cause axial thrust. Herringbone gears cancel the thrust.
- **Bevel gears:** pitch cone angle $\tan\gamma = \dfrac{T_p}{T_g}$ for a $90^\circ$ shaft angle; formative number of teeth $T_e = \dfrac{T}{\cos\gamma}$.
- **Worm gears:** lead angle $\lambda$; efficiency

$$\eta = \frac{\tan\lambda\,(1 - \mu\tan\lambda)}{\tan\lambda + \mu}\ \text{(approximate, for a worm driving)}$$

  The worm is self-locking when $\mu \ge \tan\lambda$. Worm wheel is usually phosphor bronze; worm is hardened steel. Heat dissipation limits the rating.
- **Gear materials:** cast iron, steel (carbon and alloy, heat treated), phosphor bronze, nylon, fibre. **Failure modes:** tooth breakage (bending), pitting (surface fatigue), scoring, abrasive wear.

## 2. Springs (design)

- **Helical compression springs:** see Strength of Materials for the stress and deflection formulas.

$$\tau = K_w\,\frac{8WD}{\pi d^3}, \qquad \delta = \frac{8WD^3 n}{G d^4}$$

- **Spring index** $C = \dfrac{D}{d}$ is generally $4$ to $12$. A small index makes coiling difficult; a large index gives a spring prone to buckling and tangling.
- **Solid length** $= n'\,d$ (with $n'$ total coils). **Free length** $=$ solid length $+$ maximum deflection $+$ clearance between coils. **Pitch** $p = \dfrac{\text{free length}}{n}$.
- **Buckling** of a compression spring can occur if the free length is more than about $4\,D$.
- **Torsion springs, flat spiral springs, Belleville washers** are used in different applications.
- **Leaf springs:** see Strength of Materials; the extra full-length leaves and graduated leaves are used to reduce stress.
- **Spring materials:** hard-drawn wire, oil-tempered wire, music (piano) wire, chrome-vanadium steel, phosphor bronze.
- **Fatigue loading of springs:** the Wahl factor is used for fatigue. Shot peening improves life.

## 3. Belt, rope and chain drive (design)

- **Flat belt design:** belt width from power, speed, allowable tension per unit width and the arc of contact. See Theory of Machines for tension ratios.
- **V-belt designation:** type A, B, C, D, E by cross-section. The groove angle $2\beta$ is $30^\circ$ to $40^\circ$. The V-belt transmits more power for the same tension and requires a smaller arc of contact.
- **Chain drive:** roller chain pitch $p$, number of teeth on the sprocket $T$; chain speed

$$v = \frac{\pi d N}{60} \approx \frac{p\,T\,N}{60}$$

  The sprocket pitch circle diameter $d = \dfrac{p}{\sin(180^\circ/T)}$. Minimum teeth on the driving sprocket: about $17$ to $19$ to reduce the polygon effect.

## 4. Clutches and brakes (design)

- **Plate clutch design** is covered in Theory of Machines; the design uses uniform wear with $p_{max}\,r_{min} = $ constant.
- **Block brake:** the shoe's normal force $R_N$, friction force $F = \mu R_N$ and the actuating lever moment.

$$T_{brake} = \mu\,R_N\,r$$

- **Heat generated in braking** $= $ the kinetic energy absorbed. The brake lining pressure $p$ and surface velocity $v$ determine the $p\,v$ limit.
- **Self-energising brakes:** friction assists the application (leading shoe in a drum brake).

## 5. Worked numericals

1. **Spur gear.** Module $m = 4$ mm, face width $b = 40$ mm, $\sigma_b = 100$ MPa, $Y = 0.1$: $F_t = 100\times40\times4\times0.1 = 1600$ N.
2. **Gear forces.** $T = 200$ N-m, $d = 200$ mm, $\phi = 20^\circ$: $F_t = \dfrac{2\times200}{0.2} = 2000$ N and $F_r = 2000\tan20^\circ = 728$ N.
3. **Chain.** $p = 12.7$ mm, $T = 19$, $N = 600$ rpm: $v = \dfrac{12.7\times19\times600}{60\times1000} = 2.41$ m/s.

## 6. Common mistakes

- Taking the Lewis form factor $y$ and $Y = \pi y$ interchangeably.
- Using the full tooth number instead of the virtual number $T_e$ in helical and bevel gears.
- Forgetting the dynamic load factor and checking only the beam strength.

## 7. Interconnections

- Gear design connects with TOM (tooth profile, interference), SOM (bending, contact stress) and Manufacturing (gear cutting, hobbing).

## 8. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Lewis equation | $F_t = \sigma_b\,b\,m\,Y$ | APPSC AEE 2012 | [ ] |
| 2 | Radial force on a spur gear tooth | $F_t\tan\phi$ | SSC JE 2018 | [ ] |
| 3 | Virtual number of teeth of a helical gear | $\dfrac{T}{\cos^3\psi}$ | APPSC AEE 2012 | [ ] |
| 4 | Barth velocity factor for ordinary gears | $\dfrac{3}{3+v}$ | APPSC AEE 2012 | [ ] |
| 5 | Spring index | $\dfrac{D}{d}$ | SSC JE 2017 | [ ] |
| 6 | Worm gear is self-locking when | $\mu \ge \tan\lambda$ | RRB JE 2015 | [ ] |
| 7 | Gear failure due to surface fatigue | Pitting | SSC JE 2019 | [ ] |
| 8 | Gear material for a worm wheel | Phosphor bronze | RRB JE 2014 | [ ] |
| 9 | Axial thrust on a helical gear | $F_t\tan\psi$ | SSC JE 2016 | [ ] |
| 10 | V-belt groove angle (typical) | $30^\circ$ to $40^\circ$ | RRB JE 2019 | [ ] |

## 9. Revision checklist

- [ ] Gear force components and Lewis equation
- [ ] Helical and bevel virtual teeth
- [ ] Spring terms: index, solid length, free length
- [ ] Chain speed and sprocket geometry
