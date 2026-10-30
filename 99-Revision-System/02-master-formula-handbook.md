# 02. Master Formula Handbook

One-stop formula sheet for all subjects. Section numbers follow the folder order (1 to 14 map to folders 01 to 14); open the matching chapter folder for derivations and context. Symbols follow the chapter files.

---

## 1. Engineering Mechanics

| Item | Formula |
|---|---|
| Lami's theorem | $\dfrac{F_1}{\sin\alpha} = \dfrac{F_2}{\sin\beta} = \dfrac{F_3}{\sin\gamma}$ |
| Friction | $F \le \mu N$, $\tan\phi = \mu$ |
| Inclined plane, limiting angle | $\theta = \phi$ (angle of repose) |
| Moment of a force | $M = F\,d$ |
| Centroid | $\bar{x} = \dfrac{\sum A_i x_i}{\sum A_i}$ |
| Rectangle MOI about centroid | $I = \dfrac{b d^3}{12}$ |
| Circle MOI about diameter | $I = \dfrac{\pi d^4}{64}$ |
| Triangle MOI about centroid | $I = \dfrac{b h^3}{36}$ |
| Parallel axis theorem | $I = I_G + A h^2$ |
| Polar MOI of circle | $J = \dfrac{\pi d^4}{32}$ |
| Perpendicular axis theorem | $I_z = I_x + I_y$ |
| Equations of motion | $v = u + at$, $s = ut + \tfrac12 at^2$, $v^2 = u^2 + 2as$ |
| Projectile | Range $R = \dfrac{u^2\sin2\theta}{g}$, max height $H = \dfrac{u^2\sin^2\theta}{2g}$, time of flight $T = \dfrac{2u\sin\theta}{g}$ |
| Work-energy | $W = \Delta KE$, $KE = \tfrac12 mv^2$ |
| Impulse-momentum | $F\,\Delta t = m\,(v - u)$ |
| Coefficient of restitution | $e = \dfrac{v_2 - v_1}{u_1 - u_2}$ |
| Circular motion | $a_c = \omega^2 r = \dfrac{v^2}{r}$ |

## 2. Strength of Materials

| Item | Formula |
|---|---|
| Stress, strain | $\sigma = \dfrac{P}{A}$, $\varepsilon = \dfrac{\Delta L}{L}$ |
| Hooke's law | $\sigma = E\varepsilon$ |
| Axial deformation | $\delta = \dfrac{P L}{A E}$ |
| Poisson's ratio | $\nu = -\dfrac{\varepsilon_{lateral}}{\varepsilon_{axial}}$ |
| Elastic constants | $E = 2G(1 + \nu) = 3K(1 - 2\nu)$, $E = \dfrac{9KG}{3K + G}$ |
| Thermal stress | $\sigma = E\,\alpha\,\Delta T$ |
| Composite bar | $\sigma_1 A_1 + \sigma_2 A_2 = P$, equal strain |
| Strain energy | $U = \dfrac{\sigma^2}{2E}\,V$ |
| Suddenly applied load | $\sigma = 2\sigma_{static}$ |
| Impact load | $\sigma = \sigma_{st}\left(1 + \sqrt{1 + \dfrac{2h}{\delta_{st}}}\right)$ |
| Bending equation | $\dfrac{M}{I} = \dfrac{\sigma}{y} = \dfrac{E}{R}$ |
| Section modulus | $Z = \dfrac{I}{y_{max}}$ |
| Shear stress in beam | $\tau = \dfrac{V\,A\bar{y}}{I\,b}$; rectangle: $\tau_{max} = 1.5\,\tau_{avg}$; circle: $\tau_{max} = \dfrac{4}{3}\tau_{avg}$ |
| Torsion equation | $\dfrac{T}{J} = \dfrac{\tau}{r} = \dfrac{G\theta}{L}$ |
| Power transmitted | $P = \dfrac{2\pi N T}{60}$ |
| Hollow shaft | $J = \dfrac{\pi}{32}(D^4 - d^4)$ |
| Deflection, cantilever (end load) | $\delta = \dfrac{W L^3}{3EI}$ |
| Deflection, cantilever (UDL) | $\delta = \dfrac{w L^4}{8EI}$ |
| Deflection, SS beam (central load) | $\delta = \dfrac{W L^3}{48EI}$ |
| Deflection, SS beam (UDL) | $\delta = \dfrac{5 w L^4}{384EI}$ |
| Maximum BM, SS beam central load | $\dfrac{WL}{4}$; UDL: $\dfrac{wL^2}{8}$ |
| Maximum BM, cantilever | End load: $WL$; UDL: $\dfrac{wL^2}{2}$ |
| Euler's buckling load | $P_{cr} = \dfrac{\pi^2 E I}{L_e^2}$ |
| Effective length | Both ends hinged $L$; one fixed one free $2L$; both fixed $\dfrac{L}{2}$; one fixed one hinged $\dfrac{L}{\sqrt2}$ |
| Slenderness ratio | $\lambda = \dfrac{L_e}{k}$, $k = \sqrt{I/A}$ |
| Rankine's formula | $P = \dfrac{\sigma_c A}{1 + a\left(\dfrac{L_e}{k}\right)^2}$ |
| Thin cylinder | Hoop $\sigma_h = \dfrac{p d}{2t}$, longitudinal $\sigma_l = \dfrac{p d}{4t}$ |
| Thin sphere | $\sigma = \dfrac{p d}{4t}$ |
| Principal stresses | $\sigma_{1,2} = \dfrac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\dfrac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$ |
| Maximum shear stress | $\tau_{max} = \sqrt{\left(\dfrac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$ |
| Close-coiled spring deflection | $\delta = \dfrac{64 P R^3 n}{G d^4}$; stiffness $k = \dfrac{G d^4}{64 R^3 n}$ |
| Failure theories (yield) | Max principal stress: $\sigma_1 = \sigma_y$; Max shear (Tresca): $\sigma_1 - \sigma_3 = \sigma_y$; von Mises: $\sigma_v = \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2}$ |

## 3. Theory of Machines

| Item | Formula |
|---|---|
| Grubler's criterion | $F = 3(n - 1) - 2j - h$ |
| Kutzbach | $F = 3(n - 1) - 2j_1 - j_2$ |
| Grashof's law | $s + l \le p + q$ |
| Number of instantaneous centres | $\dfrac{n(n-1)}{2}$ |
| Coriolis acceleration | $2\,\omega\,v$ |
| Gear ratio | $G = \dfrac{N_1}{N_2} = \dfrac{T_2}{T_1} = \dfrac{d_2}{d_1}$ |
| Module | $m = \dfrac{d}{T}$ |
| Circular pitch | $p_c = \pi m$ |
| Minimum teeth (avoid interference) | $T_{min} = \dfrac{2}{\sin^2\phi}$ (pinion on rack) |
| Contact ratio | $\dfrac{\text{arc of contact}}{p_c}$ |
| Velocity ratio, belt drive | $\dfrac{N_2}{N_1} = \dfrac{d_1}{d_2}$ (no slip) |
| Belt tension ratio | $\dfrac{T_1}{T_2} = e^{\mu\theta}$; V-belt: $e^{\mu\theta/\sin\beta}$ |
| Power transmitted by belt | $P = (T_1 - T_2)\,v$ |
| Centrifugal tension | $T_c = m v^2$ |
| Condition for max power | $v = \sqrt{\dfrac{T_{max}}{3m}}$ |
| Flywheel | $E = I\omega^2\,C_s$, $\Delta E = I\omega_{mean}^2\,C_s$, $C_s = \dfrac{\omega_1 - \omega_2}{\omega_{mean}}$ |
| Porter governor | $h = \dfrac{m + M}{m}\cdot\dfrac{g}{\omega^2}$ (equal arms) |
| Watt governor | $h = \dfrac{g}{\omega^2}$ |
| Gyroscopic couple | $C = I\,\omega\,\omega_p$ |
| Natural frequency | $\omega_n = \sqrt{\dfrac{k}{m}}$, $f_n = \dfrac{1}{2\pi}\sqrt{\dfrac{k}{m}}$ |
| Static deflection | $f_n = \dfrac{0.4985}{\sqrt{\delta_{st}\ (\text{m})}}$ Hz |
| Damping ratio | $\zeta = \dfrac{c}{c_c}$, $c_c = 2\sqrt{km}$ |
| Logarithmic decrement | $\delta = \ln\dfrac{x_1}{x_2} = \dfrac{2\pi\zeta}{\sqrt{1 - \zeta^2}}$ |
| Transmissibility | $\varepsilon = \sqrt{\dfrac{1 + (2\zeta r)^2}{(1 - r^2)^2 + (2\zeta r)^2}}$; isolation if $r > \sqrt2$ |
| Critical speed of shaft | $\omega_c = \sqrt{\dfrac{g}{\delta}}$ |
| Balancing | $\sum m r \cos\theta = 0$, $\sum m r \sin\theta = 0$ |
| Static friction brake torque | $T = \mu\,W\,r$ |

## 4. Machine Design

| Item | Formula |
|---|---|
| Factor of safety | $FoS = \dfrac{\text{ultimate or yield stress}}{\text{working stress}}$ |
| Torsional shear in shaft | $\tau = \dfrac{16 T}{\pi d^3}$ |
| Equivalent torque | $T_e = \sqrt{M^2 + T^2}$ |
| Equivalent bending moment | $M_e = \tfrac12\left(M + \sqrt{M^2 + T^2}\right)$ |
| Keys, shear | $\tau = \dfrac{F}{w\,l}$ |
| Rivet shear strength | $P_s = n\,\dfrac{\pi}{4}d^2\,\tau$ |
| Plate tearing | $P_t = (p - d)\,t\,\sigma_t$ |
| Crushing | $P_c = n\,d\,t\,\sigma_c$ |
| Efficiency of riveted joint | $\eta = \dfrac{\min(P_s, P_t, P_c)}{p\,t\,\sigma_t}$ |
| Fillet weld (parallel load) | $P = 0.707\,s\,l\,\tau$ |
| Bolt under axial load | $\sigma = \dfrac{4P}{\pi d_c^2}$ |
| Goodman line | $\dfrac{\sigma_m}{\sigma_u} + \dfrac{\sigma_a}{\sigma_e} = \dfrac{1}{FoS}$ |
| Soderberg line | $\dfrac{\sigma_m}{\sigma_y} + \dfrac{\sigma_a}{\sigma_e} = \dfrac{1}{FoS}$ |
| Stress concentration | $K_t = \dfrac{\sigma_{max}}{\sigma_{nom}}$ |
| Lewis equation | $W_t = \sigma_b\,b\,\pi m\,y$ |
| Bearing life | $L_{10} = \left(\dfrac{C}{P}\right)^{3}$ (million revolutions) for ball bearings; exponent $\dfrac{10}{3}$ for roller bearings |
| Petroff's law | $\mu_f = 2\pi^2\,\dfrac{\eta N}{p}\,\dfrac{r}{c}$ |
| Spring index | $C = \dfrac{D}{d}$ |
| Wahl factor | $K = \dfrac{4C - 1}{4C - 4} + \dfrac{0.615}{C}$ |

## 5. Thermodynamics

| Item | Formula |
|---|---|
| First law (closed system) | $Q = \Delta U + W$ |
| Steady flow energy equation | $\dot{Q} - \dot{W} = \dot{m}\left[(h_2 - h_1) + \dfrac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)\right]$ |
| Ideal gas | $pV = mRT$, $R = \dfrac{\bar{R}}{M}$, $\bar{R} = 8.314$ kJ/(kmol K) |
| Specific heats | $c_p - c_v = R$, $\gamma = \dfrac{c_p}{c_v}$, $c_v = \dfrac{R}{\gamma - 1}$ |
| Polytropic | $pV^n = C$; $W = \dfrac{p_1V_1 - p_2V_2}{n - 1}$ |
| Isothermal work | $W = p_1V_1\ln\dfrac{V_2}{V_1}$ |
| Adiabatic relations | $\dfrac{T_2}{T_1} = \left(\dfrac{V_1}{V_2}\right)^{\gamma - 1} = \left(\dfrac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}}$ |
| Entropy change (ideal gas) | $\Delta s = c_v\ln\dfrac{T_2}{T_1} + R\ln\dfrac{V_2}{V_1}$ |
| Carnot efficiency | $\eta = 1 - \dfrac{T_L}{T_H}$ |
| COP (refrigerator, heat pump) | $\dfrac{T_L}{T_H - T_L}$, $\dfrac{T_H}{T_H - T_L}$ |
| Clausius inequality | $\oint\dfrac{\delta Q}{T} \le 0$ |
| Availability | $\psi = (h - h_0) - T_0(s - s_0) + \dfrac{V^2}{2} + gz$ |
| Joule-Thomson | $\mu_{JT} = \left(\dfrac{\partial T}{\partial p}\right)_h$ |
| Steam dryness | $h = h_f + x\,h_{fg}$, $s = s_f + x\,s_{fg}$, $v = x\,v_g$ |
| Otto | $\eta = 1 - \dfrac{1}{r^{\gamma-1}}$ |
| Diesel | $\eta = 1 - \dfrac{1}{r^{\gamma-1}}\cdot\dfrac{\rho^\gamma - 1}{\gamma(\rho - 1)}$ |
| Brayton | $\eta = 1 - \dfrac{1}{r_p^{(\gamma-1)/\gamma}}$ |
| Rankine | $\eta = \dfrac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$ |
| Mixture of ideal gases | $p = \sum p_i$, $p_i = x_i\,p$ |
| Van der Waals | $\left(p + \dfrac{a}{v^2}\right)(v - b) = RT$ |
| Compressibility factor | $Z = \dfrac{pv}{RT}$ |

## 6. Heat Transfer

| Item | Formula |
|---|---|
| Fourier's law | $Q = -k A\dfrac{dT}{dx}$ |
| Plane wall | $Q = \dfrac{\Delta T}{L/(kA)}$ |
| Composite wall | $Q = \dfrac{\Delta T}{\sum R}$ |
| Cylinder | $Q = \dfrac{2\pi k L\,\Delta T}{\ln(r_2/r_1)}$ |
| Sphere | $Q = \dfrac{4\pi k\,\Delta T}{\frac{1}{r_1} - \frac{1}{r_2}}$ |
| Critical radius of insulation | Cylinder: $r_c = \dfrac{k}{h}$; sphere: $r_c = \dfrac{2k}{h}$ |
| Newton's law of cooling | $Q = h A\,\Delta T$ |
| Fin efficiency | $\eta_f = \dfrac{\tanh(mL)}{mL}$, $m = \sqrt{\dfrac{hP}{kA}}$ |
| Fin heat (insulated tip) | $Q = \sqrt{hPkA}\,\theta_0\tanh(mL)$ |
| Biot number | $\text{Bi} = \dfrac{h L_c}{k}$ (lumped if $< 0.1$) |
| Lumped capacitance | $\dfrac{T - T_\infty}{T_i - T_\infty} = e^{-t/\tau}$, $\tau = \dfrac{\rho V c}{h A}$ |
| Fourier number | $\text{Fo} = \dfrac{\alpha t}{L^2}$ |
| Reynolds, Prandtl, Nusselt | $\text{Re} = \dfrac{\rho V D}{\mu}$, $\text{Pr} = \dfrac{\mu c_p}{k}$, $\text{Nu} = \dfrac{hD}{k}$ |
| Dittus-Boelter | $\text{Nu} = 0.023\,\text{Re}^{0.8}\text{Pr}^{n}$ ($n = 0.4$ heating, $0.3$ cooling) |
| Laminar fully developed pipe flow | $\text{Nu} = 4.36$ (constant flux), $3.66$ (constant wall temperature) |
| Grashof | $\text{Gr} = \dfrac{g\beta\,\Delta T\,L^3}{\nu^2}$ |
| Stefan-Boltzmann | $E_b = \sigma T^4$, $\sigma = 5.67\times10^{-8}$ W/(m$^2$K$^4$) |
| Radiation exchange (grey body) | $Q = \varepsilon\sigma A\,(T_1^4 - T_2^4)$ |
| Two parallel plates | $Q = \dfrac{\sigma A\,(T_1^4 - T_2^4)}{\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} - 1}$ |
| Wien's law | $\lambda_{max} T = 2898\ \mu\text{m K}$ |
| Kirchhoff | $\alpha = \varepsilon$ (thermal equilibrium) |
| LMTD | $\Delta T_{lm} = \dfrac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)}$ |
| Heat exchanger | $Q = U A\,\Delta T_{lm}$ |
| Effectiveness | $\varepsilon = \dfrac{Q}{Q_{max}} = \dfrac{Q}{C_{min}(T_{h,i} - T_{c,i})}$ |
| NTU | $\text{NTU} = \dfrac{UA}{C_{min}}$ |
| Counter-flow effectiveness | $\varepsilon = \dfrac{1 - e^{-\text{NTU}(1 - C_r)}}{1 - C_r\,e^{-\text{NTU}(1 - C_r)}}$ |

## 7. IC Engines

| Item | Formula |
|---|---|
| Indicated power | $IP = \dfrac{p_{im}\,L A\,n K}{1000}$ kW |
| Brake power | $BP = \dfrac{2\pi N T}{60000}$ kW |
| Friction power | $FP = IP - BP$ |
| Mechanical efficiency | $\eta_m = \dfrac{BP}{IP}$ |
| Brake thermal efficiency | $\eta_{bth} = \dfrac{BP}{\dot{m}_f\,CV}$ |
| BSFC | $\dfrac{\dot{m}_f\ (\text{kg/h})}{BP\ (\text{kW})}$ |
| Volumetric efficiency | $\eta_v = \dfrac{\text{actual air inducted}}{\text{swept volume}}$ |
| Power strokes per second | Four-stroke: $\dfrac{N}{120}$; two-stroke: $\dfrac{N}{60}$ |
| Morse test | $IP = K\,BP_{all} - \sum BP_{(\text{one cylinder cut})}$ |
| Compression ratio | $r = \dfrac{V_s + V_c}{V_c}$ |
| Mean piston speed | $\bar{S}_p = \dfrac{2LN}{60}$ |

## 8. Steam, Compressors, Power Plants

| Item | Formula |
|---|---|
| Nozzle exit velocity | $V = 44.72\sqrt{\Delta h\ (\text{kJ/kg})}$ m/s |
| Critical pressure ratio | $\left(\dfrac{2}{n+1}\right)^{\frac{n}{n-1}}$: $0.528$ (air), $0.546$ (superheated steam), $0.577$ (dry saturated steam) |
| Nozzle efficiency | $\eta_n = \dfrac{\Delta h_{actual}}{\Delta h_{isentropic}}$ |
| Blade efficiency (impulse) | $\eta_b = \dfrac{2U(V_{w1} + V_{w2})}{V_1^2}$ |
| Maximum impulse blade efficiency | $\cos^2\alpha$ at $\dfrac{U}{V_1} = \dfrac{\cos\alpha}{2}$ |
| Parsons maximum efficiency | $\dfrac{2\cos^2\alpha}{1 + \cos^2\alpha}$ at $\dfrac{U}{V_1} = \cos\alpha$ |
| Degree of reaction | $R = \dfrac{\Delta h_{moving}}{\Delta h_{stage}}$ |
| Equivalent evaporation | $\dfrac{\dot{m}_s(h_s - h_{fw})}{2257}$ |
| Compressor work (polytropic) | $W = \dfrac{n}{n-1}p_1V_1\left[\left(\dfrac{p_2}{p_1}\right)^{\frac{n-1}{n}} - 1\right]$ |
| Volumetric efficiency (recip.) | $\eta_v = 1 + c - c\left(\dfrac{p_2}{p_1}\right)^{1/n}$ |
| Intermediate pressure (two-stage) | $p_i = \sqrt{p_1 p_3}$ |
| Hydro power | $P = \rho g Q H \eta$ |
| Wind power | $P = \tfrac12\rho A V^3$, Betz limit $0.593$ |
| Load factor | $\dfrac{\text{average load}}{\text{maximum demand}}$ |
| Diversity factor | $\dfrac{\sum \text{individual max demands}}{\text{max demand of system}}$ |
| Capacity factor | $\dfrac{\text{actual energy}}{\text{rated capacity} \times \text{time}}$ |

## 9. Refrigeration and Air Conditioning

| Item | Formula |
|---|---|
| 1 TR | $3.5167$ kW $= 211$ kJ/min |
| VCRS COP | $\dfrac{h_1 - h_4}{h_2 - h_1}$ |
| Bell-Coleman COP | $\dfrac{1}{r_p^{(\gamma-1)/\gamma} - 1}$ |
| VARS maximum COP | $\left(\dfrac{T_G - T_A}{T_G}\right)\left(\dfrac{T_E}{T_A - T_E}\right)$ |
| Specific humidity | $\omega = 0.622\,\dfrac{p_v}{p - p_v}$ |
| Relative humidity | $\phi = \dfrac{p_v}{p_{sat}}$ |
| Enthalpy of moist air | $h = 1.005\,t + \omega(2500 + 1.88\,t)$ kJ/kg |
| Sensible heat factor | $\text{SHF} = \dfrac{Q_s}{Q_s + Q_L}$ |
| Bypass factor | $\text{BPF} = \dfrac{t_{out} - t_{ADP}}{t_{in} - t_{ADP}}$ |
| Fan laws | $Q \propto N$, $H \propto N^2$, $P \propto N^3$ |

## 10. Fluid Mechanics

| Item | Formula |
|---|---|
| Newton's law of viscosity | $\tau = \mu\dfrac{du}{dy}$ |
| Hydrostatic pressure | $p = \rho g h$ |
| Force on a submerged plane | $F = \rho g \bar{h} A$ |
| Centre of pressure | $h_{cp} = \bar{h} + \dfrac{I_G\sin^2\theta}{A\bar{h}}$ |
| Metacentric height | $GM = \dfrac{I}{V_{sub}} - BG$ |
| Capillary rise | $h = \dfrac{4\sigma\cos\theta}{\rho g d}$ |
| Continuity | $A_1V_1 = A_2V_2$ |
| Bernoulli | $\dfrac{p}{\rho g} + \dfrac{V^2}{2g} + z = $ constant |
| Venturimeter discharge | $Q = C_d\dfrac{A_1A_2}{\sqrt{A_1^2 - A_2^2}}\sqrt{2gh}$ |
| Orifice discharge | $Q = C_d\,a\sqrt{2gH}$ |
| Rectangular notch | $Q = \dfrac23 C_d L\sqrt{2g}H^{3/2}$ |
| V-notch | $Q = \dfrac{8}{15}C_d\sqrt{2g}\tan\dfrac{\theta}{2}H^{5/2}$ |
| Reynolds number | $\text{Re} = \dfrac{\rho V D}{\mu}$ |
| Laminar pipe flow | $f = \dfrac{64}{\text{Re}}$, $u_{max} = 2V_{avg}$, $\Delta p = \dfrac{32\mu V L}{D^2}$ |
| Darcy-Weisbach | $h_f = \dfrac{f L V^2}{2 g D}$ |
| Minor loss | $h_m = K\dfrac{V^2}{2g}$; sudden enlargement $\dfrac{(V_1 - V_2)^2}{2g}$ |
| Maximum power through pipe | $h_f = \dfrac{H}{3}$, $\eta = 66.7\%$ |
| Chezy | $V = C\sqrt{R_h S}$ |
| Manning | $V = \dfrac{1}{n}R_h^{2/3}S^{1/2}$ |
| Froude number | $\text{Fr} = \dfrac{V}{\sqrt{g y}}$ |
| Hydraulic jump | $\dfrac{y_2}{y_1} = \tfrac12\left(\sqrt{1 + 8\text{Fr}_1^2} - 1\right)$ |
| Blasius BL thickness | $\delta = \dfrac{5x}{\sqrt{\text{Re}_x}}$ |
| Drag | $F_D = C_D\,\tfrac12\rho V^2 A$ |
| Stokes' law | $F_D = 3\pi\mu d V$ |
| Speed of sound | $c = \sqrt{\gamma R T}$ |
| Stagnation temperature | $\dfrac{T_0}{T} = 1 + \dfrac{\gamma-1}{2}M^2$ |

## 11. Fluid Machinery

| Item | Formula |
|---|---|
| Euler's turbine/pump equation | $H = \dfrac{1}{g}\left(U_1V_{w1} \mp U_2V_{w2}\right)$ |
| Pelton jet velocity | $V_1 = C_v\sqrt{2gH}$ |
| Pelton efficiency | $\eta_h = \dfrac{2U(V_1 - U)(1 + k\cos\phi)}{V_1^2}$; max at $U = \dfrac{V_1}{2}$ |
| Turbine specific speed | $N_s = \dfrac{N\sqrt{P}}{H^{5/4}}$ (P in kW) |
| Pump specific speed | $N_s = \dfrac{N\sqrt{Q}}{H^{3/4}}$ |
| Unit quantities | $N_u = \dfrac{N}{\sqrt{H}}$, $Q_u = \dfrac{Q}{\sqrt{H}}$, $P_u = \dfrac{P}{H^{3/2}}$ |
| Overall efficiency | $\eta_o = \eta_h\eta_m\eta_v$ |
| Pump power | $P = \dfrac{\rho g Q H_m}{\eta_o}$ |
| NPSH available | $\dfrac{p_{atm}}{\rho g} - h_s - h_{fs} - \dfrac{p_v}{\rho g}$ |
| Reciprocating pump discharge | Single acting $\dfrac{ALN}{60}$; double acting $\dfrac{2ALN}{60}$ |
| Slip | $Q_{th} - Q_{act}$ |
| Affinity laws | $Q \propto N D^3$, $H \propto N^2D^2$, $P \propto N^3D^5$ |

## 12. Manufacturing

| Item | Formula |
|---|---|
| Chvorinov's rule | $t_s = B\left(\dfrac{V}{A}\right)^2$ |
| Cutting speed | $V = \dfrac{\pi D N}{1000}$ m/min |
| MRR (turning) | $V\,f\,d$ |
| Chip thickness ratio | $r = \dfrac{t_1}{t_2} = \dfrac{\sin\phi}{\cos(\phi - \alpha)}$ |
| Shear angle | $\tan\phi = \dfrac{r\cos\alpha}{1 - r\sin\alpha}$ |
| Merchant's relation | $2\phi + \beta - \alpha = 90^\circ$ |
| Shear strain | $\gamma = \cot\phi + \tan(\phi - \alpha)$ |
| Taylor's tool life | $V T^n = C$ |
| Economic tool life | $T = \left(\dfrac{1}{n} - 1\right)\left(t_c + \dfrac{C_t}{C_m}\right)$ |
| Welding heat input | $H = \eta\dfrac{VI}{v}$ |
| Resistance welding heat | $H = I^2 R t$ |
| Blanking force | $F = \tau_u\,L\,t$ |
| Deep drawing blank | $D = \sqrt{d^2 + 4dh}$ |
| Extrusion pressure | $p = \sigma_f\ln\dfrac{A_0}{A_f}$ |
| Drawing stress | $\sigma_d = \sigma_f\ln\dfrac{A_0}{A_f}$ |
| Sine bar | $\sin\theta = \dfrac{h}{L}$ |
| Indexing | $\dfrac{40}{N}$ turns |
| ECM (Faraday) | $m = \dfrac{A\,I\,t}{z\,F}$ |

## 13. Industrial Engineering

| Item | Formula |
|---|---|
| EOQ | $Q^* = \sqrt{\dfrac{2DC_o}{C_h}}$ |
| EPQ | $Q^* = \sqrt{\dfrac{2DC_o}{C_h(1 - d/p)}}$ |
| Break-even | $\dfrac{F}{p - v}$ |
| Exponential smoothing | $F_{t+1} = \alpha D_t + (1 - \alpha)F_t$ |
| PERT | $t_e = \dfrac{t_o + 4t_m + t_p}{6}$, $\sigma = \dfrac{t_p - t_o}{6}$ |
| Standard time | Normal time $\times (1 + \text{allowance})$; Normal time $=$ observed $\times$ rating |
| Control chart | $\bar{X} \pm A_2\bar{R}$; $\bar{p} \pm 3\sqrt{\bar{p}(1 - \bar{p})/n}$; $\bar{c} \pm 3\sqrt{\bar{c}}$ |
| Process capability | $C_p = \dfrac{USL - LSL}{6\sigma}$ |
| M/M/1 queue | $L_s = \dfrac{\lambda}{\mu - \lambda}$, $W_s = \dfrac{1}{\mu - \lambda}$ |
| Reliability | $R = e^{-\lambda t}$; series $\prod R_i$; parallel $1 - \prod(1 - R_i)$ |
| Line efficiency | $\dfrac{\sum t_i}{N\,C}$ |

## 14. Material Science

| Item | Formula / value |
|---|---|
| APF | SC $0.52$, BCC $0.68$, FCC $0.74$, HCP $0.74$ |
| Atoms per cell | SC $1$, BCC $2$, FCC $4$, HCP $6$ |
| BCC, FCC lattice constant | $a = \dfrac{4r}{\sqrt3}$, $a = 2\sqrt2\,r$ |
| Density | $\rho = \dfrac{nA}{V_c N_A}$ |
| Bragg's law | $n\lambda = 2d\sin\theta$ |
| Gibbs phase rule | $F = C - P + 2$ (or $+1$ at constant pressure) |
| Lever rule | $W_\alpha = \dfrac{C_L - C_0}{C_L - C_\alpha}$ |
| Fe-Fe$_3$C | Eutectoid $0.77\%$ C, $727^\circ$C; eutectic $4.3\%$ C, $1147^\circ$C; max C in austenite $2.14\%$; cementite $6.67\%$ C |
| Hall-Petch | $\sigma_y = \sigma_0 + k\,d^{-1/2}$ |
| Fick's first law | $J = -D\dfrac{dC}{dx}$ |
| Brinell | $HB = \dfrac{2P}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}$ |
| Vickers | $HV = \dfrac{1.854P}{d^2}$ |
| Composite (iso-strain) | $E_c = V_fE_f + V_mE_m$ |
| Stress intensity | $K = Y\sigma\sqrt{\pi a}$ |
| Modulus of resilience | $\dfrac{\sigma_y^2}{2E}$ |

---

## 15. Standard values to memorise

| Quantity | Value |
|---|---|
| $g$ | $9.81$ m/s$^2$ |
| Atmospheric pressure | $101.325$ kPa $= 1.013$ bar $= 760$ mm Hg |
| Universal gas constant | $8.314$ kJ/(kmol K) |
| $R$ for air | $0.287$ kJ/(kg K) |
| $\gamma$ for air | $1.4$ |
| $c_p$, $c_v$ for air | $1.005$, $0.718$ kJ/(kg K) |
| Specific heat of water | $4.18$ kJ/(kg K) |
| Latent heat of vaporisation of water at $100^\circ$C | $2257$ kJ/kg |
| Stefan-Boltzmann constant | $5.67\times10^{-8}$ W/(m$^2$K$^4$) |
| Density of water, mercury | $1000$, $13600$ kg/m$^3$ |
| Elastic modulus of steel | $200$ GPa |
| Poisson's ratio of steel | $0.3$ |
| Modulus of rigidity of steel | $80$ GPa |
| Triple point of water | $273.16$ K |
| Faraday constant | $96500$ C/mol |
| $1$ hp | $746$ W |
| $1$ TR | $3.5167$ kW |
| $1$ bar | $10^5$ Pa |
