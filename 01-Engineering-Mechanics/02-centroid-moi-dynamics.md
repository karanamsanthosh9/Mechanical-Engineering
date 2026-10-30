# 02. Centroid, Moment of Inertia and Dynamics

**Exam relevance:** APPSC AEE: P | SSC JE: C | RRB JE: S | Category: AEE+/ALL | Yield: HY

---

## Part A: Detailed Theory (read this first)

This part explains the ideas behind centroids, moment of inertia and dynamics from scratch. Part B (from section 1 onwards) is the compact reference with tables, numericals and PYQs.

### A1. Centroid and centre of gravity: what they really are

Every body is made of tiny pieces, each with a weight pulling down. The **centre of gravity (CG)** is the single point where the total weight can be assumed to act: if you support the body at that point, it balances. It is found by the **moment principle**: the moment of the total weight about any axis equals the sum of the moments of the pieces.

$$\bar{x} = \frac{\int x\,dW}{\int dW}$$

- For a body of uniform density in a uniform gravity field, weight is proportional to volume, so the CG depends only on shape. That shape-only point is the **centre of mass / centroid of volume**.
- For a flat plate (area), the **centroid** is $\bar{x} = \dfrac{\int x\,dA}{A}$. For a thin wire (line), replace area with length.
- A shape with an **axis of symmetry** has its centroid on that axis. With two axes of symmetry, the centroid is at their intersection.
- Centroid and CG differ only when gravity or density varies. For all exam problems they are the same point.

**Composite shapes (the method used in nearly every problem):**

1. Split the shape into simple parts (rectangle, triangle, circle, semicircle).
2. Choose reference axes (usually along the bottom and the left edge).
3. For each part write its area $A_i$ and its own centroid $(x_i, y_i)$ from the axes.
4. A **hole** is a part with **negative area**.
5. Apply $\bar{x} = \dfrac{\sum A_i x_i}{\sum A_i}$ and $\bar{y} = \dfrac{\sum A_i y_i}{\sum A_i}$.

**Why $h/3$ for a triangle?** A thin strip at height $y$ has width $b(1 - y/h)$. Integrating $y\,dA$ over the height gives $\bar{y} = h/3$ from the base. The triangle is lighter near the top, so the centroid is lower than the middle.

**Pappus-Guldinus theorems.** Revolve a plane curve or area about an axis in its plane that does not cut it.

- Surface area generated $= $ (length of the curve) $\times$ (distance travelled by its centroid) $= L \times 2\pi\bar{y}$.
- Volume generated $= $ (area) $\times$ (distance travelled by its centroid) $= A \times 2\pi\bar{y}$.

These give the centroid of a semicircle quickly. Revolving a semicircle of radius $r$ about its diameter gives a sphere, volume $\dfrac{4}{3}\pi r^3 = \dfrac{\pi r^2}{2} \times 2\pi\bar{y}$, so $\bar{y} = \dfrac{4r}{3\pi}$.

### A2. Moment of inertia of an area: the idea

When a beam bends or a shaft twists, material far from the central axis carries more stress, and the resistance depends on **how the area is distributed about the axis**, not just on its size. That distribution measure is the **second moment of area**, called moment of inertia (MOI) of area:

$$I_x = \int y^2\,dA, \qquad I_y = \int x^2\,dA$$

- It is always positive, units length$^4$.
- Area far from the axis counts with the **square** of its distance. That is why an I-section (flanges far from the neutral axis) is stiffer than a square bar of the same area.
- **Radius of gyration** $k = \sqrt{I/A}$ is the distance at which the whole area, if concentrated there, would give the same $I$. It reappears in the slenderness ratio of columns.

**Derivation of the rectangle result.** For a rectangle $b \times d$ about its centroidal axis (parallel to $b$): the strip at distance $y$ has area $b\,dy$, so

$$I = \int_{-d/2}^{d/2} y^2\, b\,dy = \frac{b d^3}{12}$$

Note the depth is cubed. Doubling the depth of a beam multiplies its stiffness by 8, doubling the width only by 2.

**Parallel-axis theorem.** If the centroidal MOI is $I_G$, the MOI about a parallel axis at distance $d$ is

$$I = I_G + A d^2$$

Always the **centroidal** value is the smallest. Use it to move from the centroid to another axis (for example, from the centroid of an I-section to find the contribution of a flange).

**Perpendicular-axis theorem.** For a plane lamina, the MOI about an axis perpendicular to its plane (the **polar MOI**) is the sum of the two in-plane MOIs: $J = I_x + I_y$. Valid only for flat, thin plates. For a circle, symmetry gives $I_x = I_y$, so $I_x = J/2 = \dfrac{\pi d^4}{64}$.

**Product of inertia** $I_{xy} = \int xy\,dA$ measures asymmetry; it may be positive, negative or zero. It is zero about any axis of symmetry. The axes about which $I_{xy} = 0$ are the **principal axes**; the two principal MOIs are the maximum and minimum values of $I$ at that point.

**Composite sections.** Compute $\bar{y}$ for the whole section first, then for each part find $I_G + A d^2$ where $d$ is the distance from the part's own centroid to the **whole section's** centroid. Add parts; subtract holes.

### A3. Mass moment of inertia

For rotating bodies, resistance to angular acceleration depends on how the **mass** is distributed about the axis:

$$I = \int r^2\,dm = m k^2$$

It plays the role mass plays in straight-line motion. Compare:

| Translation | Rotation |
|---|---|
| Mass $m$ | Mass MOI $I$ |
| Force $F = ma$ | Torque $T = I\alpha$ |
| $KE = \tfrac{1}{2}mv^2$ | $KE = \tfrac{1}{2}I\omega^2$ |
| Momentum $mv$ | Angular momentum $I\omega$ |

- A flywheel puts mass at the rim to raise $I$ for the same weight. A ring has $I = mr^2$, a disc only $\tfrac{1}{2}mr^2$.
- Parallel-axis theorem for mass: $I = I_G + m d^2$.
- Do not mix the area MOI ($\text{m}^4$, for bending and torsion) with mass MOI ($\text{kg}\cdot\text{m}^2$, for rotation dynamics).

### A4. Kinematics: describing motion

**Definitions.** Displacement is the change of position (vector); distance is the path length (scalar). Velocity $v = \dfrac{ds}{dt}$, acceleration $a = \dfrac{dv}{dt} = v\dfrac{dv}{ds}$. These two derivative forms give the constant-acceleration equations by integration:

$$v = u + at, \qquad s = ut + \tfrac{1}{2}at^2, \qquad v^2 = u^2 + 2as$$

- The slope of a velocity-time graph is acceleration; its area is displacement.
- **Free fall:** $a = g$ downward. Rising body: speed falls at $g$; at the top $v = 0$. Time up equals time down. Speed on return to the starting level equals the initial speed.

**Projectile motion.** Horizontal and vertical motions are independent. Horizontal: constant velocity $u\cos\alpha$. Vertical: acceleration $-g$ with initial velocity $u\sin\alpha$.

- Time of flight: the vertical position returns to zero, so $T = \dfrac{2u\sin\alpha}{g}$.
- Range $R = u\cos\alpha \times T = \dfrac{u^2\sin 2\alpha}{g}$. Maximum at $\alpha = 45^\circ$, and $\alpha$ and $90^\circ - \alpha$ give the same range.
- Maximum height from $v^2 = u^2 + 2as$ with $v = 0$ at the top: $H = \dfrac{u^2\sin^2\alpha}{2g}$.
- At the top, the velocity is purely horizontal ($u\cos\alpha$), acceleration is still $g$ downward.

**Circular motion.** A body moving on a circle of radius $r$ at speed $v$ changes direction continuously, so it accelerates even at constant speed.

- Angular velocity $\omega = v/r$ (rad/s); $\omega = 2\pi N/60$ for $N$ rpm.
- **Centripetal (normal) acceleration** $a_c = v^2/r = \omega^2 r$ toward the centre.
- **Tangential acceleration** $a_t = r\alpha$ along the path, present only when speed changes.
- Total acceleration $= \sqrt{a_c^2 + a_t^2}$.
- The "centrifugal force" is the inertial reaction felt in the rotating frame; in the ground frame the real force is centripetal, supplied by tension, friction, or normal force.

**Relative motion.** The velocity of A as seen from B is $v_{A/B} = v_A - v_B$ (vector subtraction). Used for rain-and-man, river-and-boat, and every velocity diagram in Theory of Machines.

**Plane motion of a rigid body.** Any plane motion is translation plus rotation. For two points A and B on the same body, $v_B = v_A + v_{B/A}$ where $v_{B/A} = \omega \times AB$ is perpendicular to AB. The **instantaneous centre** is the point that has zero velocity at that instant, so the body is momentarily rotating about it. It lies on the perpendicular to the velocity at each point (for a rolling wheel it is the contact point).

### A5. Kinetics: motion and its causes

**Newton's laws.**

1. A body stays at rest or in uniform motion unless a net force acts (inertia).
2. $F = ma$: net force equals rate of change of momentum.
3. Action and reaction are equal, opposite and act on different bodies.

**Approach to any dynamics problem:** draw the FBD of each body, choose the positive direction along the expected motion, write $\sum F = ma$ for each, add constraint relations (for pulleys, strings: same string length or same acceleration), solve.

- **Connected bodies (Atwood machine):** two masses $m_1 > m_2$ over a smooth pulley give $a = \dfrac{(m_1 - m_2)g}{m_1 + m_2}$ and tension $T = \dfrac{2m_1m_2 g}{m_1 + m_2}$.
- **Lift:** apparent weight $= m(g + a)$ when accelerating up, $m(g - a)$ when accelerating down; zero in free fall.
- **Body on an incline** with friction: $a = g(\sin\alpha - \mu\cos\alpha)$ when sliding down.

**D'Alembert's principle.** Add a fictitious inertia force $-ma$ opposite to the acceleration; the body is then in "dynamic equilibrium" and the statics methods apply. This is the basis of force analysis of engine mechanisms and balancing.

**Work, energy, power.**

- Work by a force $= F\cos\theta \times s$ (force component along displacement). Work by a variable force $= \int F\,ds$.
- **Work-energy theorem:** net work done $=$ change in kinetic energy. It avoids finding acceleration or time, so it is quicker when forces and distances are known.
- **Conservation of mechanical energy:** if only conservative forces (gravity, spring) do work, $KE + PE$ is constant.
- Spring energy $\tfrac{1}{2}kx^2$. Gravitational PE $mgh$.
- Power $P = F v$ (translation), $P = T\omega$ (rotation). $1\ \text{hp} = 746\ \text{W}$.
- Efficiency $= \dfrac{\text{output}}{\text{input}}$.

**Impulse and momentum.** Impulse $= \int F\,dt = $ change of momentum. In a collision, internal forces cancel in pairs, so **total linear momentum is conserved** in any collision where there is no external impulse.

- **Perfectly elastic impact** ($e = 1$): momentum and kinetic energy both conserved. Equal masses exchange velocities.
- **Perfectly plastic** ($e = 0$): bodies stick together; momentum conserved, maximum KE lost. Final velocity $= \dfrac{m_1u_1 + m_2u_2}{m_1 + m_2}$.
- **General ($0 < e < 1$):** momentum conserved, KE decreases. Restitution $e$ links relative speeds before and after.
- Oblique impact: along the common normal use momentum and $e$; along the common tangent the velocity of each body is unchanged (smooth surfaces).
- A ball falling from $h$ and rebounding to $h_1$: $e = \sqrt{h_1/h}$ (speed is proportional to the square root of height).

**Rotation and rolling.** For a rigid body rotating about a fixed axis $T = I\alpha$ and $KE = \tfrac{1}{2}I\omega^2$. For a body rolling without slipping the contact point is the instantaneous centre, so $v = r\omega$ and total KE $= \tfrac{1}{2}mv^2 + \tfrac{1}{2}I_G\omega^2$.

- On an incline: $a = \dfrac{g\sin\alpha}{1 + I_G/(mr^2)}$. Solid sphere $\dfrac{5}{7}g\sin\alpha$, solid cylinder $\dfrac{2}{3}g\sin\alpha$, hollow cylinder (ring) $\dfrac{1}{2}g\sin\alpha$. A body that is more concentrated near the axis (small $I$) rolls faster.
- Friction at the contact point is static and does no work for pure rolling, so energy is conserved.

**Angular momentum.** $H = I\omega$. If no external torque acts, $H$ is conserved: a skater pulling in her arms reduces $I$ and spins faster.

### A6. Simple harmonic motion (preview)

If the restoring force is proportional to displacement ($F = -kx$), the motion is SHM with $\omega_n = \sqrt{k/m}$ and period $T = 2\pi\sqrt{m/k}$. A simple pendulum has $T = 2\pi\sqrt{L/g}$. The full treatment is in the Vibrations chapter of Theory of Machines.

### A7. What examiners test from this chapter

- Centroid of composite sections and standard shapes; Pappus theorem (SSC JE, APPSC AEE).
- Parallel-axis theorem and MOI of standard sections; the same values are the base of bending and torsion (all exams).
- Projectile range and maximum height; relative velocity (all exams).
- Work-energy, impulse-momentum, coefficient of restitution, rolling on an incline (APPSC AEE focus).

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Centroid and centre of gravity

- **Centroid** is the geometric centre of an area; **centre of gravity (CG)** is the point where the weight acts. They coincide for homogeneous bodies in a uniform field.
- Composite areas:

$$\bar{x} = \frac{\sum A_i x_i}{\sum A_i}$$

- **Pappus-Guldinus:** (1) surface area of revolution $=$ length of generating curve $\times\ 2\pi\bar{y}$; (2) volume of revolution $=$ area $\times\ 2\pi\bar{y}$.

| Shape | Centroid location |
|---|---|
| Rectangle ($b \times h$) | $h/2$ from the base |
| Triangle (height $h$) | $h/3$ from the base |
| Semicircle (radius $r$) | $\dfrac{4r}{3\pi}$ from the diameter |
| Quarter circle | $\dfrac{4r}{3\pi}$ from each straight edge |
| Trapezium (top $a$, bottom $b$, height $h$) | $\dfrac{h(b+2a)}{3(a+b)}$ from the base $b$ |
| Solid right circular cone | $h/4$ from the base |
| Solid hemisphere | $3r/8$ from the flat face |
| Hollow hemisphere (shell) | $r/2$ from the flat face |
| Area under parabola $y = kx^2$ up to $x = a$ | $3a/4$ along $x$, $3h/10$ along $y$ |

## 2. Moment of inertia (area MOI)

- $I = \int y^2\,dA$. Units: mm$^4$, m$^4$. **Radius of gyration:** $k = \sqrt{I/A}$.
- **Parallel axis theorem:** $I = I_G + A d^2$.
- **Perpendicular axis theorem (plane laminae only):** $I_z = I_x + I_y$. Polar MOI $J = I_x + I_y$.

| Section | MOI |
|---|---|
| Rectangle ($b$ wide, $d$ deep), centroidal axis parallel to $b$ | $\dfrac{bd^3}{12}$ |
| Rectangle, about the base | $\dfrac{bd^3}{3}$ |
| Triangle, centroidal axis parallel to the base | $\dfrac{bh^3}{36}$ |
| Triangle, about the base | $\dfrac{bh^3}{12}$ |
| Solid circle, about a diameter | $\dfrac{\pi d^4}{64}$ (and $J = \dfrac{\pi d^4}{32}$) |
| Hollow circle | $\dfrac{\pi (D^4 - d^4)}{64}$ |
| Semicircle, about the diameter | $\dfrac{\pi d^4}{128}$ |
| Semicircle, centroidal axis parallel to the diameter | $\approx 0.11\,r^4$ |
| Quarter circle, about an edge | $\dfrac{\pi r^4}{16}$ |

- **Mass MOI:** $I = \int r^2\,dm$.

| Body | Mass MOI |
|---|---|
| Solid cylinder / disc about own axis | $\dfrac{mr^2}{2}$ |
| Solid sphere | $\dfrac{2mr^2}{5}$ |
| Thin ring | $mr^2$ |
| Thin rod about centre | $\dfrac{mL^2}{12}$ |
| Thin rod about end | $\dfrac{mL^2}{3}$ |
| Disc about a diameter | $\dfrac{mr^2}{4}$ |
| Thin hollow sphere | $\dfrac{2mr^2}{3}$ |

- **Product of inertia** $I_{xy}$ is zero about axes of symmetry. Principal axes:

$$\tan 2\theta = \frac{2I_{xy}}{I_y - I_x}$$

## 3. Kinematics

- **Constant acceleration:**

$$v = u + at, \qquad s = ut + \tfrac{1}{2}at^2, \qquad v^2 = u^2 + 2as, \qquad s_n = u + \frac{a(2n-1)}{2}$$

- **Projectile** (speed $u$, angle $\alpha$):

$$T = \frac{2u\sin\alpha}{g}, \qquad R = \frac{u^2\sin 2\alpha}{g}, \qquad H = \frac{u^2\sin^2\alpha}{2g}, \qquad R = \frac{4H}{\tan\alpha}$$

  Trajectory: $y = x\tan\alpha - \dfrac{g x^2}{2u^2\cos^2\alpha}$. Range is maximum at $45^\circ$; complementary angles give the same range.
- **Relative velocity:** $v_{A/B} = v_A - v_B$.
- **Circular motion:** $v = r\omega$, $a_c = \dfrac{v^2}{r} = r\omega^2$ (toward the centre), $a_t = r\alpha$.
- **Rotation with constant $\alpha$:** $\omega = \omega_0 + \alpha t$, $\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$.
- **Instantaneous centre:** a point of the rigid body with zero velocity at that instant; the velocity of any point $= \omega \times$ its distance from the IC.

## 4. Kinetics

- **Newton's 2nd law:** $F = ma$; rotational: $T = I\alpha$.
- **D'Alembert's principle:** $F - ma = 0$ (inertia force $-ma$ converts dynamics into statics).
- **Energy:** $KE = \tfrac{1}{2}mv^2$ (translation), $\tfrac{1}{2}I\omega^2$ (rotation); $PE = mgh$. **Power** $P = Fv = T\omega$.
- **Work-energy theorem:** net work $=$ change in kinetic energy.
- **Impulse-momentum:** $\int F\,dt = \Delta(mv)$. Momentum is conserved when there is no external force.
- **Impact:** coefficient of restitution

$$e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{\text{relative velocity of separation}}{\text{relative velocity of approach}}$$

  $e = 1$: perfectly elastic (KE conserved). $e = 0$: perfectly plastic (bodies move together). For a ball dropped from $h$ that rebounds to $h_1$: $e = \sqrt{h_1/h}$.
- **Rolling without slipping:** $v = r\omega$; $KE = \tfrac{1}{2}mv^2 + \tfrac{1}{2}I\omega^2$. Acceleration down an incline:

$$a = \frac{g\sin\alpha}{1 + k^2/r^2}$$

  For a solid cylinder $a = \tfrac{2}{3}g\sin\alpha$.
- **Two masses over a pulley** ($m_1 > m_2$):

$$a = \frac{(m_1 - m_2)g}{m_1 + m_2}, \qquad T = \frac{2m_1 m_2 g}{m_1 + m_2}$$

- **Banking of roads:** $\tan\theta = \dfrac{v^2}{rg}$ (no friction). On a flat curve a vehicle skids if $\mu < \dfrac{b}{2h}$ (otherwise it overturns), where $b$ is the track width and $h$ the CG height.
- **Simple harmonic motion:** $x = A\sin\omega t$, $T = \dfrac{2\pi}{\omega}$.

| System | Time period |
|---|---|
| Spring-mass | $2\pi\sqrt{m/k}$ |
| Simple pendulum | $2\pi\sqrt{L/g}$ |
| Compound pendulum | $2\pi\sqrt{\dfrac{k^2 + h^2}{gh}}$ |

- **Centrifugal force:** $m\omega^2 r$ (pseudo force in the rotating frame).

## 5. Worked numericals

1. **Projectile.** $u = 20$ m/s at $30^\circ$:

$$R = \frac{400\sin 60^\circ}{9.81} = 35.3\ \text{m}$$

2. **Rectangle about its base.** $b = 100$ mm, $d = 200$ mm:

$$I = \frac{100 \times 200^3}{3} = 2.67\times10^{8}\ \text{mm}^4$$

3. **Rolling cylinder** on a $30^\circ$ incline: $a = \tfrac{2}{3}(9.81)(0.5) = 3.27$ m/s$^2$.

## 6. Common mistakes

- Using $\dfrac{bd^3}{12}$ about the base (it is $\dfrac{bd^3}{3}$).
- Applying the perpendicular axis theorem to a 3D solid (valid only for laminae).
- Forgetting the $\tfrac{1}{2}$ in rotational KE.

## 7. Interconnections

- MOI feeds bending (SOM), torsion ($J$), flywheel and vibrations (TOM).
- Impact and energy methods appear again in strain energy under sudden load (SOM).

## 8. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Centroid of a triangle from the base | $h/3$ | SSC JE 2017 | [ ] |
| 2 | MOI of a rectangle about the centroidal axis | $\dfrac{bd^3}{12}$ | RRB JE 2015 | [ ] |
| 3 | Angle for maximum range of a projectile | $45^\circ$ | SSC JE 2018 | [ ] |
| 4 | Parallel axis theorem | $I = I_G + Ah^2$ | RRB JE 2014 | [ ] |
| 5 | MOI of a circle about a diameter | $\dfrac{\pi d^4}{64}$ | SSC JE 2016 | [ ] |
| 6 | Coefficient of restitution, perfectly elastic collision | 1 | RRB JE 2019 | [ ] |
| 7 | Centroid of a semicircle from the diameter | $\dfrac{4r}{3\pi}$ | SSC JE 2019 | [ ] |
| 8 | Time period of a simple pendulum | $2\pi\sqrt{L/g}$ | RRB JE 2015 | [ ] |
| 9 | Radius of gyration | $\sqrt{I/A}$ | APPSC AEE 2012 | [ ] |
| 10 | Centroid of a right circular cone from the base | $h/4$ | SSC JE 2020 | [ ] |

## 9. Revision checklist

- [ ] Centroid table by heart
- [ ] MOI table and both axis theorems
- [ ] Projectile, impact ($e$) and rolling formulas
- [ ] SHM time periods
