# 01. Internal Combustion Engines

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: VHY

---

## Part A: Detailed Theory (read this first)

An internal combustion (IC) engine is a heat engine in which the fuel burns inside the cylinder, so the products of combustion themselves push the piston. This chapter links thermodynamic cycles (Otto, Diesel) to real hardware: what physically happens in each stroke, how power and efficiency are measured, what goes wrong (knock) and how engines are cooled, lubricated and cleaned up.

### A1. Why IC engines and how they convert energy

- **Chemical energy to heat to work.** The fuel's chemical energy is released as heat by burning, which raises the pressure of the gas in the cylinder. The gas pushes the piston, and the connecting rod and crank convert the linear motion to rotation.
- **Advantage over external combustion.** No boiler or heat exchanger is needed, so the engine is compact and light, and the working fluid reaches temperatures well above metal limits because the cylinder walls are cooled and the high temperature lasts only a fraction of the cycle. This gives a high power-to-weight ratio, which is why IC engines dominate transport.
- **Basic components.** Cylinder block, cylinder head, piston with rings, gudgeon pin, connecting rod, crankshaft, flywheel (smooths torque fluctuations), camshaft, valves (inlet and exhaust), spark plug or injector, manifolds, sump.
- **Piston rings** seal the combustion gases (compression rings) and scrape the oil (oil control ring). **Flywheel** stores energy during the power stroke and returns it during the other strokes.

### A2. Terminology and geometry

- **TDC and BDC** are the extreme positions of the piston. **Stroke** $L$ is the distance between them; **bore** $D$ is the cylinder diameter. The ratio $L/D$ separates **under-square** ($L > D$, torque and economy) from **over-square** ($L < D$, high-speed engines with large valves and lower piston speed).
- **Swept (displacement) volume** $V_s = \dfrac{\pi}{4}D^2L$. **Clearance volume** $V_c$ is the volume above the piston at TDC. **Compression ratio** $r = \dfrac{V_s + V_c}{V_c}$. This is a volume ratio, not a pressure ratio.
- **Mean piston speed** $\bar S_p = 2LN/60$ limits the engine speed because inertia loads and friction grow with it. Typical limits are $15$ to $20$ m/s.

### A3. The four-stroke cycle: what actually happens

1. **Suction.** The piston moves from TDC to BDC, the inlet valve is open and the cylinder fills. In SI engines a fuel-air mixture is drawn in; in CI engines, air alone. The inlet valve is opened a little before TDC and closed after BDC, to exploit the inertia of the flowing gas and fill the cylinder better.
2. **Compression.** Both valves are closed. The charge is compressed and heated. In an SI engine a spark ignites it just before TDC (spark advance). In a CI engine, fuel is injected near the end and it self-ignites in the hot air.
3. **Power (expansion).** The high-pressure gas pushes the piston from TDC to BDC. This is the only stroke that produces work. The exhaust valve opens before BDC to let the pressure drop (blowdown).
4. **Exhaust.** The piston pushes burnt gas out. The exhaust valve closes after TDC.

- There is one power stroke per **two revolutions**; each stroke takes $180^\circ$ of crank rotation, so a full cycle takes $720^\circ$. The camshaft turns at half crank speed.
- **Valve timing and overlap.** In real engines, the valves open early and close late, so the crank angle for each event overlaps. The brief period when both valves are open near TDC is **valve overlap**. It helps scavenge the clearance space.
- **Multi-cylinder engines** are used for smoother torque, balance and more power. **Firing order** is selected to distribute power strokes evenly and to minimise crankshaft vibrations and uneven load on the main bearings. In a 4-cylinder in-line engine, the common order is $1\text{-}3\text{-}4\text{-}2$.

### A4. Two-stroke engine: principle

- All four events happen in **two strokes** (one revolution). While the piston goes up it compresses the charge in the cylinder and simultaneously draws fresh charge into the crankcase through a reed valve. On the downward power stroke, the piston uncovers the exhaust port first, which lets the burnt gas escape, and then the transfer port, through which the charge pressurised in the crankcase enters the cylinder and pushes out the remaining exhaust (**scavenging**).
- **Problem: short-circuiting.** Some fresh charge leaves with the exhaust, wasting fuel and raising hydrocarbon emissions. This is the main reason two-stroke SI engines were phased out of cars. Fuel injection into the cylinder after the exhaust port closes fixes it in modern designs.
- **Scavenging types:** cross-flow (deflector on piston), loop (Schnurle; jets directed to loop in the cylinder; no deflector needed), uniflow (inlet ports at one end, exhaust valve at the other; best scavenging; used in large marine diesels).
- **Efficiencies.** Scavenging efficiency measures how much of the cylinder content after scavenging is fresh charge; **trapping efficiency** measures what fraction of the supplied charge stays. **Scavenge ratio** is delivered charge divided by swept (reference) volume.
- **Power.** In theory twice that of a four-stroke engine of the same size; in practice $1.6$ to $1.8$ times because of imperfect scavenging, and the loss of stroke length to port opening.

### A5. SI versus CI: why the two types behave differently

- **Mixture preparation.** In SI engines the fuel is mixed with the air before compression (carburettor or injection into the manifold), so compression is limited by knock. In CI engines, the fuel enters at the end of compression, so no knock limit exists in the compression stroke and a high compression ratio is possible.
- **Load control (governing).** An SI engine keeps the fuel-air ratio nearly constant and reduces power by **throttling** the mixture (quantity governing), which adds pumping loss at part load and lowers efficiency. A CI engine always takes in the full air quantity and changes the amount of fuel injected (**quality governing**), so part-load efficiency stays high. This is another reason diesel engines are more economical.
- **Thermal efficiency.** Higher compression ratio and lean operation give CI engines greater efficiency ($30$ to $40\%$ brake thermal) than SI ($25$ to $30\%$).
- **Emission character.** SI engines near stoichiometry emit CO, HC and NOx and are cleaned by a three-way catalyst. CI engines run lean so CO and HC are low, but NOx and particulates are high and need different after-treatment.

### A6. Performance parameters: how to think about them

- **Indicated power** is the power developed in the cylinder, found from the indicator diagram: $IP = p_{im}LAnK$, where $n$ is the number of power strokes per second per cylinder.
- **Brake power** is the power at the output shaft, measured by a dynamometer: $BP = \dfrac{2\pi NT}{60}$. The difference is **friction power** (piston rings, bearings, valve gear, pumping, auxiliaries).
- **Mean effective pressure** is the fictitious constant pressure that, acting through the stroke, gives the same work as the real cycle. It lets engines of different sizes be compared: larger mep means more torque per litre. $T = \text{mep}\times V_s/(4\pi)$ for a four-stroke engine.
- **Efficiencies:**
  - Mechanical $\eta_m = BP/IP$; typical $80$ to $90\%$ at full load and falls with load because friction power stays nearly the same.
  - Indicated thermal $\eta_{ith} = IP/(\dot m_f\,CV)$ and brake thermal $\eta_{bth} = BP/(\dot m_f\,CV)$, with $\eta_{bth} = \eta_{ith}\times\eta_m$.
  - Relative (efficiency ratio) compares indicated thermal efficiency with the air-standard efficiency; $0.5$ to $0.7$ in practice.
  - **Volumetric efficiency** measures how well the engine breathes. It falls with speed (less time and flow losses), throttling, hot intake air (lower density), small valves and exhaust back-pressure. **Supercharging** can raise it above $100\%$ when referred to ambient conditions.
- **Specific fuel consumption** (kg/kWh) is the practical measure of fuel economy and is inversely related to brake thermal efficiency.
- **Air-fuel ratio.** Stoichiometric for petrol is about $14.7:1$. The **equivalence ratio** $\phi$ is greater than $1$ for rich mixtures, less than $1$ for lean ones.
- **Heat balance.** Fuel energy goes into brake work, coolant, exhaust and radiation. A heat balance sheet identifies where the opportunity for improvement lies (exhaust waste heat recovery, turbocharging).

### A7. Testing: how the measurements are made

- **Dynamometers** absorb engine power: rope brake and prony brake (mechanical friction), hydraulic (water brake), eddy-current (electromagnetic, easy to control), and transmission or swinging-field types (which measure the torque transmitted).
- **Indicated power** needs an **indicator** that records cylinder pressure against volume or crank angle.
- **Friction power** is found by four methods:
  - **Willans line.** Plot fuel consumption against brake power at constant speed and extrapolate backward to zero fuel; the negative intercept is the friction power. Works for CI engines, where the line is nearly straight; not for SI because throttling makes the line curved.
  - **Morse test** for multi-cylinder engines. At constant speed, the output is measured with all cylinders working, then with each cylinder cut out in turn. The drop in BP gives each cylinder's IP. Total IP is the sum of these.
  - **Motoring test.** The engine is driven by an electric motor with the fuel turned off; the motor power equals the friction power (though the temperature is different).
  - **Retardation test.** The engine is allowed to coast down after cutting off fuel, and the deceleration gives the friction torque.

### A8. Fuel supply in SI engines

- **Carburettor.** Based on Bernoulli's principle: the venturi throat accelerates the air, lowering the pressure below that in the float chamber, so fuel flows out of the jet and atomises. A simple carburettor becomes richer as air flow rises, because air is compressible, so the air flow increases less than the fuel flow. Correction devices: compensating jet, emulsion tube, back suction control, auxiliary air valve.
- **Special demands.** Cold starting and idling need a rich mixture ($\approx 10:1$); cruising a lean one for economy; full power a rich one ($\approx 12$ to $13:1$) for maximum power. The **accelerating pump** supplies extra fuel when the throttle opens suddenly; the **economiser** enriches at full load.
- **Fuel injection (MPFI, GDI).** Electronic control meters the fuel using sensors (air flow, oxygen sensor, temperature, throttle position). The oxygen (lambda) sensor allows closed-loop control to hold the mixture at stoichiometry, which the three-way catalyst needs.

### A9. Fuel injection in CI engines

- Requirements: **metering** (correct quantity), **timing**, **atomisation** (fine droplets for fast evaporation), **penetration** (reach all the air) and **distribution**, with a sharp start and end of injection (no dribbling).
- **Pump-line-nozzle** systems use a jerk pump (plunger driven by a cam) to produce high pressure; the plunger helix controls the quantity. **Common rail** keeps constant high pressure (up to $2000$ bar) in a rail, and electronic injectors determine timing, quantity and multiple injections per cycle, giving low noise and emission.
- **Injector nozzles:** pintle, single-hole, multi-hole, pintaux. A needle valve lifts when fuel pressure exceeds a spring force, called the nozzle opening pressure.
- **Governor** controls the fuel quantity to hold the speed under changing load.

### A10. Ignition systems and spark timing

- **Battery ignition.** The primary circuit of an induction coil (battery, contact breaker or transistor) is suddenly interrupted; the collapsing magnetic field induces about $10$ to $25$ kV in the secondary, delivered to the plug by the distributor. The capacitor across the breaker reduces arcing and speeds up the collapse of flux.
- **Magneto** generates its own current; used in two-wheelers and small engines. **CDI** discharges a capacitor through the coil; fast and reliable.
- **Spark advance.** Combustion takes finite time ($\approx$ constant in milliseconds, nearly independent of speed), so at higher speed the spark must occur earlier in crank-angle terms. Best timing is the **minimum advance for best torque (MBT)**; too early causes knock and negative work; too late wastes energy.

### A11. Combustion in SI engines and knock

- **Normal combustion.** After the spark, there is a delay (ignition lag), then a flame front spreads out from the plug through the charge by turbulent flame propagation, and the unburnt gas ahead is compressed and heated by the burnt gas. Combustion should end soon after TDC for the best work.
- **Knock (detonation).** The end gas, heated and compressed by the advancing flame, may reach its auto-ignition conditions before the flame arrives. It then burns almost instantaneously, producing shock waves in the cylinder; the ringing sound is knock. It damages piston crowns, rings and head gaskets and reduces efficiency by increasing heat loss.
- **Factors that favour knock:** high compression ratio, high intake temperature or pressure, advanced spark, long flame travel (large bore), high coolant temperature, low engine speed (more time for end-gas reactions), and a fuel with low octane number. The remedy is the reverse of each.
- **Octane number.** Measures the antiknock quality. Iso-octane is defined as $100$ (resists knock) and n-heptane as $0$. The knock rating of a fuel equals that of the blend. **Higher octane means fuel resists knock better**, allowing a higher compression ratio.
- **Pre-ignition** (ignition before the spark by a hot spot) differs from knock; it can cause knock but is a separate phenomenon.

### A12. Combustion in CI engines and diesel knock

- **Four stages:** (1) **ignition delay** (physical delay of atomisation and heating, then chemical delay); (2) **rapid or premixed combustion**, when the fuel accumulated during the delay burns at once; (3) **controlled or diffusion combustion**, limited by the injection and mixing rate; (4) **after-burning**.
- **Diesel knock** is caused by a long ignition delay: a large amount of fuel accumulates, then burns suddenly, giving a high rate of pressure rise. It is the **opposite cause** of SI knock (which occurs at the end of combustion, while diesel knock occurs at the start). Therefore, factors that lower SI knock (such as low compression ratio, low temperature) increase diesel knock. To reduce diesel knock: use a high cetane number fuel, high compression ratio, high intake air temperature and pressure, and a small initial injection quantity.
- **Cetane number.** The measure of ignition quality: the percentage of cetane in a mixture with alpha-methyl-naphthalene (or HMN) that matches the fuel's ignition delay. A higher number means a shorter delay.
- **Combustion chambers:** Direct injection (DI) chambers have the best efficiency and fuel economy but need high injection pressure and give higher noise. Indirect injection (IDI) types (swirl, pre-chamber) mix air and fuel better at lower pressure and run quietly but lose more heat and need a glow plug for cold start.

### A13. Supercharging, cooling, lubrication

- **Supercharging** increases the density of the incoming air so more fuel can be burnt in the same volume. A **turbocharger** extracts energy from the exhaust gas that would otherwise be wasted; a **supercharger** takes power from the crankshaft. An **intercooler** cools the compressed air, increasing density further and reducing knock tendency. A supercharged SI engine must be run at a lower compression ratio or with a richer mixture to avoid knock; CI engines respond better.
- **Cooling.** About one third of fuel energy goes to coolant. Metal temperatures must be limited to protect lubricating oil (it breaks down above about $150^\circ$C) and materials. Water cooling uses a pump, radiator, thermostat (opens at about $80$ to $90^\circ$C) and fan. Air-cooled engines use fins, and have a lower weight and no leakage risk but give less uniform cooling.
- **Lubrication.** Functions: reduce friction, carry away heat, seal the piston rings, clean (carry away particles) and protect from corrosion. Systems: petroil (mixed with fuel in two-stroke), splash, pressure feed, wet sump, dry sump. **Viscosity index** shows how slowly viscosity changes with temperature.

### A14. Emissions and fuels

- **Pollutants:** CO (incomplete combustion from a rich mixture), unburnt HC (wall quenching, misfire), NOx (high temperature plus oxygen; peaks slightly lean), particulates and smoke (rich diffusion zones in diesel), and SO$_2$ (fuel sulphur). CO$_2$ is a greenhouse gas that cannot be removed by catalysts, only reduced by higher efficiency or a low-carbon fuel.
- **Controls:** three-way catalytic converter (needs stoichiometric mixture and lead-free fuel), EGR (lowers combustion temperature to cut NOx), diesel particulate filter, SCR with urea, PCV for crankcase vapours, evaporative control.
- **Alternative fuels:** CNG (high octane, low emissions), LPG, alcohols (high octane, high latent heat), biodiesel, hydrogen (wide flammability, fast flame, no carbon) and electric drives.

### A15. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Four-stroke and two-stroke working, valve timing, firing order | Direct | Very common | Very common |
| IP, BP, FP, mep, efficiency numericals | Numerical | Very common | Common |
| Knock in SI and CI, octane and cetane numbers | Conceptual | Very common | Very common |
| Willans line, Morse test | Conceptual | Common | Common |
| Carburettor, injection, ignition, cooling | Direct | Common | Common |
| Emissions and catalytic converter | Direct | Common | Occasional |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 1. Foundations

- **IC engine:** heat engine in which fuel is burnt inside the working cylinder and the combustion products themselves are the working fluid. **EC engine:** combustion outside (steam engine, Stirling).
- **Classification:**

| Basis | Types |
|---|---|
| Ignition | Spark Ignition (SI, petrol), Compression Ignition (CI, diesel) |
| Cycle of operation | Four-stroke, two-stroke |
| Thermodynamic cycle | Otto, Diesel, Dual |
| Cooling | Air-cooled, water-cooled |
| Cylinder arrangement | Inline, V, radial, opposed |
| Valve location | L-head, I-head (overhead valve), F-head, T-head |
| Fuel | Petrol, diesel, gas (CNG, LPG), dual-fuel |

- **Terminology:**
  - **TDC / BDC:** top and bottom dead centres, the extreme positions of the piston.
  - **Stroke $L$:** distance between TDC and BDC. **Bore $D$:** cylinder diameter.
  - **Swept volume:** $V_s = \dfrac{\pi}{4}D^2 L$. **Clearance volume:** $V_c$, volume above the piston at TDC.
  - **Compression ratio:** $r = \dfrac{V_s + V_c}{V_c}$. SI: $6$ to $10$; CI: $14$ to $22$.
  - **Mean piston speed:** $\bar{S}_p = 2LN/60$ (m/s) with $N$ in rpm and $L$ in m.

## 2. Four-stroke engine

| Stroke | Piston | Inlet valve | Exhaust valve | Event |
|---|---|---|---|---|
| Suction | TDC to BDC | Open | Closed | Charge (air-fuel mixture in SI, air alone in CI) drawn in |
| Compression | BDC to TDC | Closed | Closed | Charge compressed; ignition near the end |
| Power (expansion) | TDC to BDC | Closed | Closed | Burnt gases expand and do work |
| Exhaust | BDC to TDC | Closed | Open | Burnt gases pushed out |

- One power stroke every **two crankshaft revolutions** ($720^\circ$). The camshaft runs at **half** the crankshaft speed.
- **Valve timing (typical):** inlet opens $10^\circ$ to $30^\circ$ before TDC and closes $30^\circ$ to $60^\circ$ after BDC; exhaust opens $30^\circ$ to $60^\circ$ before BDC and closes $10^\circ$ to $30^\circ$ after TDC. Both valves are open together near TDC: **valve overlap** (helps scavenging).
- **Firing order** (four-cylinder inline): $1\text{-}3\text{-}4\text{-}2$ or $1\text{-}2\text{-}4\text{-}3$. Six-cylinder inline: $1\text{-}5\text{-}3\text{-}6\text{-}2\text{-}4$.

## 3. Two-stroke engine

- One power stroke every **one revolution** ($360^\circ$). No valves in the simple type; **ports** are uncovered by the piston. Crankcase compression is used in small petrol engines.
- **Scavenging:** replacing burnt gases by fresh charge. Types: **cross-flow**, **loop** (Schnurle), **uniflow** (best, used in large diesels with exhaust valves).
- **Scavenging efficiency** $= \dfrac{\text{mass of fresh charge retained}}{\text{mass of gas in cylinder after scavenging}}$.
- **Trapping efficiency** $= \dfrac{\text{fresh charge retained}}{\text{fresh charge delivered}}$.
- Theoretical power of a two-stroke is double that of a four-stroke of the same size, but actual power is only about $1.6$ to $1.8$ times because of poor scavenging and short-circuiting of fresh charge.

| Feature | Four-stroke | Two-stroke |
|---|---|---|
| Power strokes per revolution | $0.5$ | $1$ |
| Valve mechanism | Poppet valves | Ports (usually) |
| Thermal efficiency | Higher | Lower |
| Fuel loss | Negligible | Fresh charge may escape with exhaust |
| Weight / size for same power | More | Less |
| Lubrication | Separate system | Petrol-oil mix in small engines |
| Use | Cars, trucks | Scooters (older), marine and large diesels |

## 4. SI engine vs CI engine

| Feature | SI engine | CI engine |
|---|---|---|
| Cycle | Otto | Diesel / Dual |
| Fuel | Petrol (volatile, high self-ignition temperature) | Diesel (low self-ignition temperature) |
| Charge in suction | Air + fuel (carburettor or MPFI) | Air only |
| Ignition | Spark plug | Self-ignition by compression heat |
| Compression ratio | $6$ to $10$ | $14$ to $22$ |
| Thermal efficiency | Lower | Higher |
| Speed | High | Lower |
| Governing | Quantity governing (throttle) | Quality governing (fuel quantity varies) |
| Weight | Lighter | Heavier |
| Abnormal combustion | Knock (detonation) | Diesel knock |
| Emissions | More CO, HC | More NOx, particulates, smoke |

## 5. Engine performance parameters

Let $n$ be the number of power strokes per second per cylinder: $n = \dfrac{N}{60}$ (two-stroke) or $\dfrac{N}{120}$ (four-stroke), $K$ = number of cylinders, $A = \dfrac{\pi}{4}D^2$.

$$IP = \frac{p_{im}\,L\,A\,n\,K}{1000}\ \text{kW}$$

$$BP = \frac{2\pi N T}{60 \times 1000}\ \text{kW}$$

$$FP = IP - BP$$

- $p_{im}$ is the **indicated mean effective pressure** from the indicator diagram: $p_{im} = \dfrac{\text{area of diagram}}{\text{length of diagram}} \times \text{spring constant}$. $T$ is brake torque in N m.
- **Brake mean effective pressure:** $p_{bm} = \dfrac{BP \times 1000}{L\,A\,n\,K}$.
- **Mechanical efficiency:** $\eta_m = \dfrac{BP}{IP} = \dfrac{p_{bm}}{p_{im}}$.
- **Indicated thermal efficiency:** $\eta_{ith} = \dfrac{IP}{\dot{m}_f\,CV}$.
- **Brake thermal efficiency:** $\eta_{bth} = \dfrac{BP}{\dot{m}_f\,CV} = \eta_{ith}\,\eta_m$.
- **Brake specific fuel consumption:** $\text{BSFC} = \dfrac{\dot{m}_f\ (\text{kg/h})}{BP\ (\text{kW})}$ kg/kWh, so that $\eta_{bth} = \dfrac{3600}{\text{BSFC}\times CV}$ (with $CV$ in kJ/kg).
- **Volumetric efficiency:** $\eta_v = \dfrac{\text{actual volume of air inducted, measured at intake conditions}}{\text{swept volume}}$. For a four-stroke with $N$ in rpm: $\eta_v = \dfrac{\dot{m}_a}{\rho_a\,V_s\,K\,N/120}$. Typical: $75\%$ to $90\%$. It falls with speed, throttling, high intake temperature and valve restrictions.
- **Relative (efficiency ratio):** $\eta_{rel} = \dfrac{\eta_{ith}}{\eta_{air\text{-}standard}}$.
- **Specific output:** $\dfrac{BP}{\text{swept volume or piston area}}$.
- **Air-fuel ratio** $= \dfrac{\dot{m}_a}{\dot{m}_f}$. **Equivalence ratio** $\phi = \dfrac{(F/A)_{actual}}{(F/A)_{stoich}}$.

## 6. Measurement of power and losses

- **Brake power:** rope brake, prony brake, hydraulic or eddy-current dynamometer, transmission dynamometer.
- **Indicated power:** engine indicator (mechanical, pressure-time electronic).
- **Frictional power methods:**
  - **Willans line:** plot fuel consumption versus $BP$ at constant speed; it is nearly linear for CI engines. Extrapolate back to zero fuel consumption; the negative intercept on the $BP$ axis equals $FP$. It is not reliable for SI engines (the line is curved).
  - **Morse test** (multi-cylinder SI engines): run at constant speed, cut out one cylinder at a time (for example by shorting the spark), and restore speed with the dynamometer. Then:

$$IP_{total} = K\,BP_{all} - \sum_{i=1}^{K} BP_{(\text{without cylinder } i)}$$

  - **Motoring test** and **retardation test** are other methods.

## 7. Carburettor (SI)

- A carburettor atomises fuel and mixes it with air in the required ratio. Basic parts: **float chamber**, **main jet**, **venturi (choke tube)**, **throttle valve**, **choke valve**.
- Fuel is drawn from the jet because the pressure at the venturi throat is lower than atmospheric (Bernoulli).
- A simple carburettor gives a progressively richer mixture as the throttle opens. Compensating devices fix this: **compensating jet**, **emulsion tube**, **auxiliary air valve**. **Idling system** gives a rich mixture at idle; **accelerating pump** gives extra fuel for sudden opening; **economiser** gives a rich mixture at full load; **choke** gives a rich mixture for cold start.
- Required mixtures: **idling and cold start** $\approx 10$ to $12:1$ (rich); **cruise** about $15$ to $17:1$ (lean, for economy); **full power** about $12$ to $13:1$ (rich); **stoichiometric petrol** about $14.7:1$.
- **MPFI** (multi-point fuel injection) and **GDI** (gasoline direct injection) have largely replaced carburettors; they give better distribution, control and emissions.

## 8. Fuel injection (CI)

- Components: fuel tank, feed pump, filter, **injection pump** (jerk-type), high-pressure line, **injector**.
- **Injection systems:** air injection (obsolete); solid injection: **common rail** (high pressure stored in a rail), **individual pump**, **distributor**, **unit injector**.
- **Injector nozzles:** pintle, single-hole, multi-hole, pintaux. Injection pressure may be $200$ to $2000$ bar.
- **Requirements:** atomisation, penetration and distribution of fuel, correct timing, metering, and no dribbling.

## 9. Ignition systems (SI)

- **Battery (coil) ignition:** battery, ignition coil (step-up transformer), contact breaker, capacitor, distributor, spark plug. **Magneto ignition:** a magneto generates the current; used in two-wheelers. **Electronic (CDI) ignition:** capacitor discharge, no contact breaker.
- A spark needs about $10$ to $25$ kV across the plug gap. **Spark advance** is needed at high speed because combustion takes a fixed time.

## 10. Combustion in SI engines

- **Three stages:** (1) ignition lag (delay), (2) flame propagation, (3) after-burning.
- **Flame speed** is increased by turbulence, higher compression ratio, higher temperature, and slightly rich mixture. Maximum power occurs at about $\phi = 1.1$ ($10\%$ rich); maximum thermal efficiency near $\phi = 0.9$ (slightly lean).
- **Knocking (detonation):** auto-ignition of the **end gas** (the last part of the charge) before the flame front reaches it. It gives a sharp pressure rise and pressure waves, a metallic pinging sound, overheating and damage to the piston.
- **Factors that increase knock (SI):** higher compression ratio, higher intake temperature and pressure, advanced spark, long flame travel (large bore), higher coolant temperature, low engine speed, and low-octane fuel. Remedies are the opposite of these. The spark plug is located near the exhaust valve (hottest part) so that the end gas is the coolest part.
- **Octane number:** the percentage by volume of **iso-octane** in a blend of iso-octane (octane number $100$) and **n-heptane** (octane number $0$) that matches the knock behaviour of the fuel. It measures the **antiknock quality** of petrol. **TEL** (tetra-ethyl lead) was used to raise it but is banned; **MTBE**, ethanol and aromatics are used instead.
- **Surface ignition / pre-ignition:** ignition of charge by a hot spot before the spark. **Run-on** or **dieseling** is continued firing after the ignition is switched off.

## 11. Combustion in CI engines

- **Four stages:** (1) **ignition delay** (the injected fuel mixes and heats up, but no pressure rise yet), (2) **rapid (uncontrolled) combustion** of the fuel accumulated during the delay, with a rapid pressure rise, (3) **controlled combustion** (rate limited by injection), (4) **after-burning**.
- **Diesel knock:** a long ignition delay accumulates fuel, and its sudden burning gives a violent pressure rise. It is caused by **delay**, while SI knock is caused by **end-gas auto-ignition**. Therefore, the factors that cure SI knock (low temperature, low compression ratio) worsen diesel knock, and the opposite holds. Diesel knock is reduced by high compression ratio, high intake temperature and pressure, high cetane number, and a short delay.
- **Cetane number:** the percentage by volume of **cetane** (n-hexadecane, cetane number $100$) in a blend with **$\alpha$-methyl-naphthalene** (cetane number $0$; modern practice uses **heptamethylnonane**, HMN, as the low reference) that matches the ignition quality of the fuel. A higher cetane number means a **shorter ignition delay**. Typical diesel: $40$ to $55$. **Ignition improvers:** amyl nitrate, ethyl nitrate.
- **Combustion chambers:**
  - **Direct injection (open chamber):** fuel injected directly into the cylinder head cavity; best efficiency, higher noise, needs high injection pressure.
  - **Indirect injection:** **swirl chamber**, **pre-combustion chamber**, **air cell**, **energy cell**. These provide better mixing at lower pressure but have higher heat loss and lower efficiency; they give easier starting only with glow plugs.
- **Turbulence, swirl and squish** are charge motions that improve mixing and flame speed.

## 12. Supercharging and turbocharging

- **Supercharging** raises the inlet air pressure above atmospheric so that more charge fills the cylinder, increasing power for the same engine size.
- **Turbocharger:** a turbine driven by exhaust gases drives a compressor; no engine power is consumed. **Supercharger:** driven mechanically from the crankshaft. **Intercooler** cools the compressed air to raise its density.
- Limits: **knock** in SI engines (so the boost is limited), mechanical and thermal loads. CI engines are more suited to supercharging because there is no knock problem from the charge.

## 13. Cooling and lubrication

- **Cooling:** about $30\%$ of fuel energy goes to coolant. **Air cooling** uses fins (motorcycles); **water cooling** uses a radiator, pump, thermostat and fan. **Thermostat** keeps the engine at the correct operating temperature (around $80$ to $90^\circ$C). Overcooling raises friction and fuel consumption; overheating causes pre-ignition and seizure.
- **Lubrication functions:** reduces friction and wear, cools, seals the piston rings, cleans, and prevents corrosion.
- **Systems:** **petroil** (two-stroke), **splash**, **pressure (forced)**, **wet sump**, **dry sump** (oil stored in a separate tank, used in racing and aero engines).
- **Viscosity index** shows how little the viscosity changes with temperature (higher is better). **SAE number** classifies viscosity.

## 14. Emissions and control

| Pollutant | Source / cause | Control |
|---|---|---|
| CO | Incomplete combustion, rich mixture | Lean mixture, catalytic converter |
| HC (unburnt) | Quenching at walls, misfire, rich mixture | Catalytic converter, PCV system |
| NOx | High temperature and excess oxygen, peak near $\phi \approx 0.9$ | Exhaust gas recirculation (EGR), SCR with urea |
| Particulates / smoke | CI engines: locally rich zones | Diesel particulate filter (DPF), better injection |

- **Three-way catalytic converter** (platinum, palladium, rhodium) removes CO, HC and NOx together; it works only near the stoichiometric ratio and with **unleaded petrol** (lead poisons the catalyst).
- **EGR** reduces peak temperature and so NOx. **Positive Crankcase Ventilation (PCV)** controls crankcase blow-by. **Evaporative emission control** deals with fuel tank vapour.
- India follows **Bharat Stage (BS)** norms, modelled on Euro norms; BS-VI has been in force since April 2020.

## 15. Fuels

| Fuel | Notes |
|---|---|
| Petrol | CV about $44$ MJ/kg; octane number matters |
| Diesel | CV about $42$ to $43$ MJ/kg; cetane number matters |
| CNG | Mainly methane; high octane (about $120$); low emissions |
| LPG | Propane and butane; high octane |
| Alcohols | Ethanol, methanol: high octane, lower CV, high latent heat |
| Biodiesel | Esters of vegetable oil; carbon neutral, higher cetane |
| Hydrogen | High flame speed, very wide flammability limits; no carbon emissions |

## 16. Engine heat balance

Typical distribution of fuel energy: brake power about $25\%$ to $35\%$, coolant about $25\%$ to $30\%$, exhaust gas about $30\%$ to $35\%$, radiation and unaccounted losses the remainder.

## 17. Other engines

- **Wankel (rotary) engine:** a triangular rotor in an epitrochoid housing; three power strokes per rotor revolution; smooth, compact, but sealing and fuel consumption are issues.
- **Dual-fuel / gas engines**, **stratified charge engines** (rich mixture near the plug, lean elsewhere), **HCCI** (homogeneous charge compression ignition) are modern developments.

## 18. Worked numericals

1. **Indicated power.** Single-cylinder four-stroke: $D = 100$ mm, $L = 120$ mm, $N = 1500$ rpm, $p_{im} = 8$ bar.

$$A = \frac{\pi}{4}(0.1)^2 = 7.854\times10^{-3}\ \text{m}^2,\qquad n = \frac{1500}{120} = 12.5\ \text{s}^{-1}$$

$$IP = \frac{8\times10^5 \times 0.12 \times 7.854\times10^{-3} \times 12.5}{1000} = 9.42\ \text{kW}$$

2. **Mechanical efficiency.** If $BP = 7.5$ kW, $\eta_m = \dfrac{7.5}{9.42} = 79.6\%$.
3. **Brake thermal efficiency.** $\text{BSFC} = 0.3$ kg/kWh, $CV = 42000$ kJ/kg:

$$\eta_{bth} = \frac{3600}{0.3 \times 42000} = 28.6\%$$

4. **Morse test.** Four cylinders; $BP_{all} = 20$ kW. Readings with each cylinder cut: $14, 13.5, 14.5, 14$ kW (sum $= 56$).

$$IP = 4\times 20 - 56 = 24\ \text{kW},\qquad \eta_m = \frac{20}{24} = 83.3\%$$

5. **Brake power from torque.** $T = 100$ N m at $3000$ rpm: $BP = \dfrac{2\pi \times 3000 \times 100}{60\times 1000} = 31.4$ kW.

## 19. Common mistakes

- Using $N/2$ for a two-stroke or $N$ for a four-stroke when computing power strokes per second.
- Confusing **octane number** (SI antiknock quality) with **cetane number** (CI ignition quality); high cetane means a short delay, which is the opposite requirement.
- Believing SI knock and diesel knock have the same cause; one is end-gas auto-ignition, the other is a long ignition delay.
- Applying the Willans line and Morse test to the wrong engine type (Willans: CI; Morse: multi-cylinder SI).
- Forgetting the cylinder-count factor in the Morse test.

## 20. Interconnections

- **Thermodynamics:** Otto, Diesel and Dual cycles; air-standard efficiency.
- **Fluid mechanics:** carburettor venturi works on Bernoulli's principle.
- **Machine design and TOM:** crank, connecting rod, flywheel and balancing (multi-cylinder arrangement).
- **Heat transfer:** cooling systems.

## 21. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | In a four-stroke engine, the camshaft rotates at | Half the crankshaft speed | SSC JE 2017 | [ ] |
| 2 | Octane number measures | Antiknock quality of SI engine fuel | RRB JE 2015 | [ ] |
| 3 | Cetane number measures | Ignition quality of diesel fuel | SSC JE 2018 | [ ] |
| 4 | Reference fuels for octane rating | Iso-octane and n-heptane | RRB JE 2014 | [ ] |
| 5 | Compression ratio of a CI engine is typically | $14$ to $22$ | SSC JE 2016 | [ ] |
| 6 | Willans line method is used to find | Frictional power | APPSC AEE 2012 | [ ] |
| 7 | Morse test is used for | Multi-cylinder SI engines to find IP | SSC JE 2019 | [ ] |
| 8 | Brake thermal efficiency equals | Indicated thermal efficiency $\times$ mechanical efficiency | RRB JE 2019 | [ ] |
| 9 | Knocking in SI engines is due to | Auto-ignition of the end gas | SSC JE 2015 | [ ] |
| 10 | Rich mixture is required during | Idling, cold start and full-load operation | RRB JE 2015 | [ ] |
| 11 | Governing of a CI engine is by | Quality governing | SSC JE 2020 | [ ] |
| 12 | Stoichiometric air-fuel ratio for petrol is about | $14.7:1$ | RRB JE 2018 | [ ] |
| 13 | Catalytic converter removes | CO, HC and NOx | SSC JE 2021 | [ ] |
| 14 | Scavenging is a feature of | Two-stroke engines | RRB JE 2016 | [ ] |
| 15 | Firing order of a four-cylinder inline engine | $1\text{-}3\text{-}4\text{-}2$ | APPSC AEE 2016 | [ ] |

## 22. Revision checklist

- [ ] SI vs CI table and 2-stroke vs 4-stroke table
- [ ] IP, BP, FP, mep, and all efficiency formulas
- [ ] Morse test and Willans line
- [ ] Knock in SI vs CI: causes and remedies
- [ ] Octane and cetane scales
- [ ] Emission sources and control methods
