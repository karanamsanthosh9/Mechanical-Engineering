# 02. Mechanical Properties, Testing, Engineering Materials and Corrosion

**Exam relevance:** APPSC AEE: C | SSC JE: C | RRB JE: C | Category: ALL | Yield: HY

---

## Part A: Detailed Theory (read this first)

The previous chapter explained structure; this chapter explains behaviour and selection. A material is chosen for its properties, and properties are measured by standard tests whose results mean something only if we understand what each test measures. The chapter therefore moves in four steps: define the mechanical properties, show how tests (tensile, hardness, impact, fatigue, creep) measure them, survey the engineering materials (ferrous, non-ferrous, non-metallic) with the reason for each one's use, and finish with corrosion, the main way in which materials fail in service without any mechanical overload.

### A1. Mechanical properties
```text
stress
	^                  UTS
	|                /\
	|       ________/  \__ fracture
	|      /
	+------------------------> strain
```


| Property | Meaning |
|---|---|
| Strength | resistance to deformation or failure under load |
| Elasticity | ability to return to the original shape on unloading |
| Plasticity | permanent deformation without fracture |
| Ductility | ability to be drawn into a wire; measured by percent elongation or reduction in area |
| Malleability | ability to be hammered or rolled into sheet (compressive deformation) |
| Brittleness | fracture with little plastic deformation |
| Toughness | energy absorbed up to fracture; area under the stress-strain curve |
| Resilience | energy absorbed in the elastic range; modulus of resilience $\sigma_y^2/2E$ |
| Hardness | resistance to indentation, scratching or wear |
| Stiffness | resistance to elastic deformation; measured by the modulus $E$ |
| Creep | time-dependent deformation under constant load at high temperature |
| Fatigue | failure under repeated cyclic stress |

**Comparisons worth remembering.** Gold, silver and copper are very ductile and malleable. Strength and toughness are not the same: toughness needs both strength and ductility, so a ductile metal can be tougher than a stronger brittle one. Stiffness depends on bond strength and is almost unaffected by heat treatment or alloying; strength is strongly affected.

**Mohs scale of scratch hardness.** Talc 1, gypsum 2, calcite 3, fluorite 4, apatite 5, orthoclase 6, quartz 7, topaz 8, corundum 9, diamond 10.

### A2. Tensile test and the stress-strain curve

A standard specimen is pulled in a universal testing machine (UTM). For a proportional specimen the gauge length is $L_0 = 5.65\sqrt{A_0}$.

- **Engineering stress** $\sigma = P/A_0$ and strain $\varepsilon = \Delta L/L_0$ use the original dimensions.
- **True stress** $\sigma_T = \sigma(1 + \varepsilon)$ and **true strain** $\varepsilon_T = \ln(1 + \varepsilon)$ use instantaneous dimensions; they are valid up to the onset of necking.

**Mild steel curve.** Proportional limit, elastic limit, upper and lower yield points, strain hardening, ultimate tensile strength (UTS), necking and fracture. The yield point phenomenon arises because carbon atoms gather around dislocations and pin them; once freed, the stress drops. Materials without a distinct yield point (aluminium, copper, high carbon steel) use the 0.2 percent offset (proof) stress.

**Ductility measures.** Percent elongation $= (L_f - L_0)/L_0\times 100$. Percent reduction in area $= (A_0 - A_f)/A_0\times 100$.

**Other points.**

- **Bauschinger effect:** after plastic deformation in one direction, the yield stress in the reverse direction is lower.
- **Strain-hardening exponent $n$** in $\sigma = K\varepsilon^n$.
- **Ductile fracture** is cup-and-cone with necking; **brittle fracture** is flat and by cleavage, with no necking.
- **Ductile-brittle transition:** BCC metals such as steel become brittle at low temperature; FCC metals (Al, Cu, austenitic stainless steel) do not. The Charpy test reveals the transition.

### A3. Hardness tests

Hardness is resistance to plastic indentation. Each test presses an indenter into the surface and measures either the size of the impression or its depth.

| Test | Indenter and load | Measure | Use |
|---|---|---|---|
| Brinell (HB) | 10 mm hardened steel ball (or carbide); 500 to 3000 kgf | diameter of impression | castings, soft metals |
| Vickers (HV) | square diamond pyramid, $136^\circ$; 1 to 120 kgf | mean diagonal | all ranges, thin sections, case depth |
| Rockwell (HR) | diamond cone $120^\circ$ or 1/16 inch steel ball; minor load 10 kgf, major 60, 100 or 150 kgf | depth of penetration | quick reading, production |
| Knoop | elongated diamond, light load | long diagonal | thin and brittle materials |
| Shore | scleroscope (rebound) or durometer | rebound or indentation | rubber, plastics |

$$HB = \frac{2P}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}, \qquad HV = \frac{1.854\,P}{d^2}$$

For steel, UTS in MPa is roughly $3.45\times HB$.

**Rockwell scales.** B scale: 1/16 inch ball, 100 kgf, for soft steel and brass. C scale: diamond cone, 150 kgf, for hard steel. A scale: diamond cone, 60 kgf, for carbides and thin hard sheet. Microhardness tests use Vickers or Knoop at light loads.

### A4. Impact, fatigue and creep

**Impact test.** Measures the energy absorbed when a notched specimen is broken by a swinging pendulum.

- **Charpy:** simply supported beam, V-notch, 10 x 10 x 55 mm, notch facing away from the striker.
- **Izod:** cantilever, notch facing the striker.
- The result is a measure of notch toughness, not the same as the toughness from a tension test.

**Fatigue.** Failure under repeated or fluctuating stress even when the maximum stress is below the static yield strength. Stages: crack initiation (at a surface defect or stress raiser), propagation (leaving beach marks) and final sudden fracture.

- The **S-N curve** plots stress amplitude against cycles to failure.
- The **endurance limit** is the stress below which a ferrous metal survives indefinitely (about $10^6$ to $10^7$ cycles; roughly $0.5\,\sigma_u$). Non-ferrous metals such as aluminium show no sharp limit, so a fatigue strength at $10^8$ cycles is quoted.
- **Reduce fatigue life:** stress concentrations, rough surfaces, corrosion, large size and tensile residual stress.
- **Improve fatigue life:** shot peening, surface rolling, nitriding (compressive residual stress) and polishing.

**Creep.** Continuous slow deformation at constant stress, significant at temperatures above about $0.4\,T_m$. Three stages: primary (decreasing rate), secondary (steady state, minimum rate) and tertiary (accelerating, leading to rupture). Creep resistance is improved by coarse grain (fewer grain boundaries for sliding), solid-solution alloying and precipitates, as in nickel superalloy turbine blades. The Larson-Miller parameter is $P = T(C + \log t_r)$. Stress relaxation is the related fall of stress at constant strain.

**Fracture mechanics.**

- Stress concentration factor $K_t = \sigma_{max}/\sigma_{nom}$.
- Griffith's criterion for brittle fracture: $\sigma_f = \sqrt{2E\gamma_s/(\pi a)}$.
- Stress intensity factor $K = Y\sigma\sqrt{\pi a}$. Fracture occurs when $K \ge K_{Ic}$, the plane-strain fracture toughness.

### A5. Ferrous materials

| Material | Composition and properties | Use |
|---|---|---|
| Pig iron | 3.5 to 4.5 percent C from the blast furnace | raw material for cast iron and steel |
| Grey cast iron | 2.5 to 4 percent C; graphite flakes; good damping, machinability and compressive strength; brittle and weak in tension | machine beds, engine blocks |
| White cast iron | carbon as cementite; hard and brittle | wear surfaces; raw material for malleable iron |
| Malleable cast iron | white iron annealed; temper carbon nodules | pipe fittings, automotive parts |
| Nodular (SG, ductile) iron | graphite spheroids from Mg or Ce treatment; high strength and ductility | crankshafts, gears |
| Plain carbon steel | Fe and C with Mn, Si, S, P | general use |
| Alloy steels | Ni, Cr, Mo, V, W, Mn | tools, gears, shafts |
| Stainless steel | above 10.5 percent Cr forming a passive $\text{Cr}_2\text{O}_3$ film; ferritic (430, magnetic), austenitic (18-8, 304, non-magnetic, best corrosion resistance, not heat-treatable), martensitic (410, 420, hardenable) | cutlery, chemical plant |
| HSS | 18-4-1 (W 18, Cr 4, V 1 percent) | cutting tools |
| Spring steel | 0.5 to 1 percent C with Si, Mn, Cr | springs |
| Free-cutting steel | S and Pb added | screw machine parts |
| Maraging steel | very high strength nickel steel, aged | aerospace |

**Why the graphite shape matters in cast iron.** Flakes act as internal notches and make grey iron weak in tension; spheroids in nodular iron do not, so nodular iron is strong and ductile; temper carbon nodules give malleable iron its ductility.

**Effect of alloying elements in steel.**

- **C:** hardness and strength; lowers ductility and weldability.
- **Mn:** strength and hardenability; counters the harm of sulphur.
- **Si:** deoxidiser, raises elasticity.
- **S:** improves machinability but causes hot shortness.
- **P:** causes cold shortness.
- **Ni:** toughness and corrosion resistance.
- **Cr:** hardness, wear and corrosion resistance.
- **Mo:** hardenability and creep resistance; reduces temper brittleness.
- **V:** fine grain and strength.
- **W and Co:** red hardness.
- **Al:** deoxidiser, and forms nitrides in nitriding steel.

**Steelmaking.** The blast furnace (iron ore, coke, limestone) gives pig iron. Steel is made in the LD (basic oxygen) converter, electric arc furnace (scrap and alloy steels), induction furnace, and historically the Bessemer converter and open hearth. Killed steel is fully deoxidised with Si or Al and is sound; semi-killed is partly deoxidised; rimmed steel is not deoxidised.

**IS designation.** C45 is a plain carbon steel with 0.45 percent C. In 40Ni14Cr1 the first number is carbon in hundredths and the others give alloy elements. Fe 410 is a plain steel with a minimum tensile strength of 410 MPa.

### A6. Non-ferrous materials

| Material | Composition and properties | Use |
|---|---|---|
| Copper | FCC; excellent electrical and thermal conductivity | wires, heat exchangers |
| Brass | Cu and Zn up to 40 percent Zn; cartridge brass 70/30; Muntz metal 60/40 | fittings, ammunition |
| Bronze | Cu and Sn (5 to 12 percent); gun metal (88 Cu, 10 Sn, 2 Zn); phosphor bronze; aluminium bronze; bell metal | bearings, gears |
| Aluminium | FCC; density 2.7 g/cm$^3$; corrosion resistant through an oxide film | aircraft, cans |
| Duralumin | Al with 4 percent Cu, 0.5 Mg, 0.5 Mn; age hardenable | aircraft |
| Y-alloy | Al, Cu, Ni, Mg; strength at high temperature | pistons |
| Magnesium | lightest structural metal, 1.74 g/cm$^3$; HCP | aerospace |
| Titanium | high strength to weight ratio; corrosion resistant; HCP changes to BCC at $882^\circ$C | aircraft, implants |
| Nickel alloys | Monel (Ni-Cu), Inconel (Ni-Cr-Fe), Nichrome (heating elements), Invar (36 percent Ni, very low expansion) | high-temperature use |
| Babbitt (white metal) | Sn-Sb-Cu or Pb-based | bearing liner |
| Zinc | die-casting alloys; galvanising | coating |
| Tungsten | highest melting point of metals, $3422^\circ$C | filaments |

### A7. Non-metallic materials

**Polymers.** Long-chain molecules of repeating monomer units.

- **Thermoplastics** soften on heating and can be remoulded: PE, PP, PVC, polystyrene, nylon, acrylic (PMMA), PTFE (Teflon), ABS.
- **Thermosets** harden permanently by cross-linking and cannot be remoulded: Bakelite, epoxy, polyester, melamine, urea-formaldehyde.
- **Elastomers:** natural rubber, neoprene and silicone; vulcanised with sulphur.
- **Glass transition temperature $T_g$:** the temperature at which a polymer changes from glassy to rubbery.

**Ceramics.** Compounds of metals and non-metals (oxides, carbides, nitrides): hard, brittle, high melting point, good insulators and strong in compression. Examples: alumina, silicon carbide, zirconia, porcelain and glass. Also refractories, abrasives and cermets.

**Composites.** Two or more distinct phases: a matrix (polymer, metal or ceramic) carrying reinforcement (fibre, particle or flake). Fibres include glass (GFRP), carbon (CFRP) and aramid (Kevlar). For a unidirectional composite:

$$E_c = V_fE_f + V_mE_m \quad\text{(upper bound, iso-strain)}, \qquad \frac{1}{E_c} = \frac{V_f}{E_f} + \frac{V_m}{E_m} \quad\text{(lower bound, iso-stress)}$$

Unidirectional composites are anisotropic: strong along the fibres and weak across them. Concrete is a particulate composite and plywood is a laminate.

**Other classes.** Smart materials (shape memory alloys such as Nitinol, piezoelectric materials), nanomaterials, biomaterials and superconductors. **Semiconductors:** silicon and germanium; n-type is doped with a pentavalent element such as phosphorus, p-type with a trivalent element such as boron. **Magnetic materials:** soft (low hysteresis loss, silicon steel for transformer cores) and hard (permanent magnets: alnico, ferrites, rare earths).

### A8. Corrosion and its prevention

**Mechanism.** Corrosion is an electrochemical attack. It needs an anode (where the metal oxidises and dissolves), a cathode (where reduction occurs), an electrolyte and a conducting path between anode and cathode.

**Galvanic corrosion.** When two dissimilar metals are in contact in an electrolyte, the more active metal in the galvanic series becomes the anode and corrodes. The area ratio matters: a small anode with a large cathode corrodes very rapidly.

**Forms of corrosion.** Uniform, galvanic, pitting, crevice, intergranular, stress corrosion cracking, erosion corrosion, dezincification of brass, selective leaching, hydrogen embrittlement and fretting. Intergranular attack of stainless steel (weld decay) results from chromium carbide precipitating at grain boundaries and depleting the surrounding chromium; it is prevented by low-carbon grades or stabilisation with titanium or niobium.

**Prevention.**

- **Coatings:** paint, galvanising, tinning, electroplating and anodising of aluminium.
- **Cathodic protection:** sacrificial anodes such as zinc and magnesium, or impressed current.
- **Inhibitors.**
- **Design:** avoid crevices and dissimilar metal couples.
- **Material choice:** for example stainless steel.

**High-temperature oxidation.** The Pilling-Bedworth ratio (volume of oxide to volume of metal consumed) indicates whether the oxide film is protective: a ratio just above 1 gives a continuous, protective film, while a ratio below 1 or well above 2 gives a cracked, non-protective one.

### A9. What examiners test from this chapter

| Topic | APPSC AEE | SSC JE | RRB JE |
|---|---|---|---|
| Definitions of properties (toughness, resilience, ductility) | Direct | Very common | Very common |
| Stress-strain curve, yield point, proof stress | Conceptual | Very common | Very common |
| Brinell, Vickers, Rockwell tests | Direct | Very common | Very common |
| Charpy vs Izod | Direct | Very common | Common |
| Fatigue, endurance limit, S-N curve | Conceptual | Common | Common |
| Creep stages | Direct | Common | Common |
| Grey, white, malleable, nodular cast iron | Direct | Very common | Very common |
| Stainless steel types | Direct | Common | Common |
| Effects of alloying elements | Direct | Very common | Very common |
| Brass, bronze and aluminium alloys | Direct | Very common | Very common |
| Thermoplastics vs thermosets | Direct | Common | Very common |
| Composites and rule of mixtures | Numerical | Occasional | Common |
| Galvanic corrosion and cathodic protection | Conceptual | Common | Common |

---

## Part B: Quick-reference notes, formulas, numericals and PYQs


## 🧭 1. Mechanical properties

| Property | Meaning |
|---|---|
| **Strength** | Resistance to deformation or failure under load |
| **Elasticity** | Ability to return to the original shape after unloading |
| **Plasticity** | Permanent deformation without fracture |
| **Ductility** | Ability to be drawn into wire (measured by % elongation or % reduction in area) |
| **Malleability** | Ability to be hammered or rolled into sheets (compressive) |
| **Brittleness** | Fracture with little plastic deformation |
| **Toughness** | Energy absorbed up to fracture (area under the stress-strain curve) |
| **Resilience** | Energy absorbed in the elastic range (modulus of resilience $= \dfrac{\sigma_y^2}{2E}$) |
| **Hardness** | Resistance to indentation, scratching or wear |
| **Stiffness** | Resistance to elastic deformation (modulus of elasticity $E$) |
| **Creep** | Time-dependent deformation under constant load at high temperature |
| **Fatigue** | Failure under repeated cyclic stress |
| **Malleability/ductility ordering** | Gold, silver and copper are highly ductile and malleable; the highest ductility is gold or platinum |
| **Hardness order (scratch)** | Mohs scale: talc 1, gypsum 2, calcite 3, fluorite 4, apatite 5, orthoclase 6, quartz 7, topaz 8, corundum 9, diamond 10 |

## 🧭 2. Tensile test and stress-strain curve

- A standard specimen is pulled in a **universal testing machine (UTM)**. Gauge length $L_0 = 5.65\sqrt{A_0}$ (proportional specimen).
- **Engineering stress** $\sigma = \dfrac{P}{A_0}$, strain $\varepsilon = \dfrac{\Delta L}{L_0}$. **True stress** $\sigma_T = \sigma(1 + \varepsilon)$, **true strain** $\varepsilon_T = \ln(1 + \varepsilon)$ (valid up to necking).
- **Mild steel curve:** proportional limit, elastic limit, **upper and lower yield points** (yield point phenomenon, due to carbon atmospheres pinning dislocations), strain hardening, **ultimate tensile strength (UTS)**, necking, fracture. Mild steel has a distinct yield point; for materials without one (aluminium, copper, high carbon steel), the **$0.2\%$ offset (proof) stress** is used.
- **Ductility:** % elongation $= \dfrac{L_f - L_0}{L_0}\times100$; % reduction in area $= \dfrac{A_0 - A_f}{A_0}\times100$.
- **Toughness** of a ductile material is higher than a brittle one with the same strength.
- **Bauschinger effect:** reduced yield strength on reversing the load direction after plastic deformation.
- **Strain ageing**, **strain hardening exponent $n$** ($\sigma = K\varepsilon^n$).
- **Ductile fracture:** cup-and-cone; **brittle fracture:** flat, with cleavage.
- **Ductile-brittle transition temperature (DBTT):** BCC metals (steel) become brittle at low temperature; FCC metals (Al, Cu, austenitic stainless steel) do not. The Charpy test shows this.

## 🧭 3. Hardness tests

| Test | Indenter | Load | Formula / notes |
|---|---|---|---|
| **Brinell (HB)** | Hardened steel ball $10$ mm (or carbide) | $500$ to $3000$ kgf | $HB = \dfrac{2P}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}$, $d$ is the impression diameter. Used for castings and soft metals. Approximate relation $\sigma_{u} \approx 3.45\,HB$ (MPa, for steel) |
| **Vickers (HV)** | Square-based diamond pyramid, $136^\circ$ | $1$ to $120$ kgf | $HV = \dfrac{1.854\,P}{d^2}$, $d$ is the mean diagonal. Covers the whole range; thin sections and case depth |
| **Rockwell (HR)** | Diamond cone ($120^\circ$, scale C) or $\frac{1}{16}$ inch steel ball (scale B) | Minor $10$ kgf, major $60$/$100$/$150$ kgf | Reads the depth of penetration directly; quick |
| **Knoop** | Elongated diamond | Light | Thin and brittle materials |
| **Shore** | Scleroscope: rebound height; durometer for rubbers | | Rubber, plastics |
| **Mohs** | Scratch | | Minerals |

- **Rockwell scales:** **B** (red scale; $\frac{1}{16}$" ball, $100$ kgf; soft steel, brass), **C** (black scale; diamond cone, $150$ kgf; hard steel), **A** (diamond cone, $60$ kgf; carbides and thin hard sheets). 
- **Microhardness:** Vickers and Knoop at light loads.

## 🧭 4. Impact, fatigue and creep tests

- **Impact test:** measures the energy absorbed in fracture of a notched specimen. **Charpy** (simply supported beam, V-notch, $10\times10\times55$ mm; the notch faces away from the striker) and **Izod** (cantilever, notch faces the striker). Notch sensitivity; the impact value is not the same as toughness measured by tension.
- **Fatigue:** failure under repeated or fluctuating stress, below the static yield strength. Stages: crack initiation, propagation (beach marks), final fracture. **S-N curve:** stress amplitude vs the number of cycles. **Endurance limit** (ferrous metals, about $10^6$ to $10^7$ cycles; roughly $0.5\,\sigma_u$): the stress below which the material survives indefinitely. Non-ferrous metals (aluminium) have no sharp endurance limit; a fatigue strength at $10^8$ cycles is quoted. **Factors reducing fatigue life:** stress concentrators, rough surface, corrosion, size, and tensile residual stress. **Improvements:** shot peening, surface rolling, nitriding (compressive residual stress), polishing.
- **Creep:** at temperatures above about $0.4\,T_m$, a material strains continuously under a constant stress. **Three stages:** primary (decreasing rate), secondary (steady-state; minimum creep rate), tertiary (accelerating rate, leading to rupture). Creep resistance is raised by large grain size, solid-solution alloying, and precipitation (e.g. nickel superalloys, turbine blades). **Larson-Miller parameter**: $P = T\,(C + \log t_r)$. **Stress relaxation** is related.
- **Fracture mechanics:** stress concentration factor $K_t = \dfrac{\sigma_{max}}{\sigma_{nom}}$; **Griffith's criterion** $\sigma_f = \sqrt{\dfrac{2E\gamma_s}{\pi a}}$; **stress intensity factor** $K = Y\,\sigma\sqrt{\pi a}$; fracture occurs when $K \ge K_{Ic}$ (**plane-strain fracture toughness**).

## 🧭 5. Ferrous materials

| Material | Composition / properties | Use |
|---|---|---|
| **Pig iron** | $3.5\%$ to $4.5\%$ C from the blast furnace | Raw material for cast iron and steel |
| **Grey cast iron** | $2.5\%$ to $4\%$ C; graphite flakes; good damping, machinability, compressive strength; brittle, weak in tension | Machine beds, engine blocks |
| **White cast iron** | Carbon as cementite; hard, brittle | Wear surfaces; raw material for malleable iron |
| **Malleable cast iron** | White iron annealed; temper carbon nodules | Pipe fittings, automotive parts |
| **Nodular (SG, ductile) iron** | Graphite spheroids from Mg or Ce treatment; high strength and ductility | Crankshafts, gears |
| **Plain carbon steel** | Fe + C (+ Mn, Si, S, P) | General |
| **Alloy steels** | With Ni, Cr, Mo, V, W, Mn and similar elements | Tools, gears, shafts |
| **Stainless steel** | $>10.5\%$ Cr (passive $\text{Cr}_2\text{O}_3$ film). **Ferritic** (430; magnetic), **austenitic** (18-8: 18% Cr, 8% Ni, 304; non-magnetic, most corrosion resistant, not hardenable by heat treatment), **martensitic** (410, 420; hardenable) | Cutlery, chemical plants |
| **HSS** | 18-4-1 (W 18%, Cr 4%, V 1%) | Cutting tools |
| **Spring steel** | $0.5\%$ to $1\%$ C with Si, Mn, Cr | Springs |
| **Tool steels** | Hardened, wear-resistant | Dies, punches |
| **Free-cutting steel** | Added S, Pb (for machinability) | Screw machine parts |
| **Maraging steel** | Very high strength Ni steel aged | Aerospace |

- **Effects of elements in steel:** C (hardness, strength; reduces ductility and weldability); Mn (strength, hardenability, counteracts S); Si (deoxidiser, elasticity); S (machinability; but hot shortness); P (cold shortness); Ni (toughness, corrosion resistance); Cr (hardness, corrosion and wear resistance); Mo (hardenability, creep resistance; reduces temper brittleness); V (fine grain, strength); W (red hardness); Co (red hardness); Al (nitriding, deoxidiser).
- **Steel making:** blast furnace (iron ore, coke, limestone) gives pig iron; **Bessemer**, **open hearth** (obsolete), **LD (BOF, basic oxygen)**, **electric arc** (scrap, alloy steels), **induction furnace**. **Killed steel** (fully deoxidised with Si/Al; sound), **semi-killed**, **rimmed** (not deoxidised).
- **IS designation:** **C45** (plain carbon steel with $0.45\%$ C), **40Cr1** or **40Ni14Cr1**: first number is carbon in hundredths; element symbols with numbers ($\times$ the factor) give percentages. **Fe 410:** plain steel with a minimum UTS of $410$ MPa.

## 🧭 6. Non-ferrous materials

| Material | Composition and properties | Use |
|---|---|---|
| **Copper** | FCC; excellent electrical and thermal conductivity | Wires, heat exchangers |
| **Brass** | Cu + Zn (up to $40\%$ Zn): cartridge brass 70/30, Muntz metal 60/40 ($\alpha+\beta$) | Fittings, ammunition |
| **Bronze** | Cu + Sn ($5\%$ to $12\%$); **gun metal** (88 Cu, 10 Sn, 2 Zn); **phosphor bronze** (bearings, springs); **aluminium bronze**; **bell metal** | Bearings, gears |
| **Aluminium** | FCC; light ($2.7$ g/cm$^3$), corrosion resistant (oxide layer), good conductor | Aircraft, cans |
| **Duralumin** | Al + $4\%$ Cu, $0.5\%$ Mg, $0.5\%$ Mn; age hardenable | Aircraft |
| **Y-alloy** | Al, Cu, Ni, Mg; high-temperature strength | Pistons |
| **Magnesium** | Lightest structural metal ($1.74$ g/cm$^3$); HCP | Aerospace |
| **Titanium** | High strength-to-weight, corrosion resistant; HCP to BCC at $882^\circ$C | Aircraft, implants |
| **Nickel alloys** | Monel (Ni-Cu), Inconel (Ni-Cr-Fe), Nichrome (Ni-Cr; heating elements), Invar (Ni 36%; very low expansion) | High temperature |
| **Babbitt (white metal)** | Sn-Sb-Cu or Pb-based | Bearing liner |
| **Solder** | Sn-Pb | Joining |
| **Zinc** | Die casting alloys; galvanising | Coating |
| **Tungsten** | Highest melting point of metals ($3422^\circ$C) | Filaments |

## 🧭 7. Non-metallic materials

- **Polymers:** long-chain molecules (monomer repeat units). **Thermoplastics** soften on heating and can be re-moulded (PE, PP, PVC, polystyrene, nylon, acrylic/PMMA, PTFE/Teflon, ABS). **Thermosets** harden permanently (Bakelite, epoxy, polyester, melamine, urea-formaldehyde). **Elastomers** (natural rubber, neoprene, silicone, vulcanised with sulphur). **Glass transition temperature $T_g$:** the temperature at which a polymer changes from glassy to rubbery.
- **Ceramics:** compounds of metals and non-metals (oxides, carbides, nitrides): hard, brittle, high melting point, good insulators, strong in compression (alumina, silicon carbide, zirconia, porcelain, glass). **Refractories**, **abrasives**, **cermets**.
- **Composites:** two or more distinct phases. **Matrix** (polymer, metal or ceramic) and **reinforcement** (fibre, particle, flake). **Fibre-reinforced:** glass (GFRP), carbon (CFRP), aramid (Kevlar). **Rule of mixtures** (upper bound, iso-strain / Voigt): $E_c = V_fE_f + V_mE_m$. **Lower bound** (iso-stress / Reuss): $\dfrac{1}{E_c} = \dfrac{V_f}{E_f} + \dfrac{V_m}{E_m}$. Properties are anisotropic in unidirectional composites. **Concrete** is a particulate composite; **plywood** is laminar.
- **Smart materials:** shape-memory alloys (Nitinol), piezoelectric materials. **Nanomaterials**, **biomaterials**, **superconductors**.
- **Semiconductors:** silicon, germanium; intrinsic and extrinsic (n-type: doped with a pentavalent element such as P; p-type: doped with a trivalent element such as B).
- **Magnetic materials:** soft (low hysteresis loss, transformer cores: silicon steel) and hard (permanent magnets: alnico, ferrites, rare earth).

## 🧭 8. Corrosion and its prevention

- **Corrosion:** an electrochemical degradation of a metal by the environment. An **anode** (oxidation), **cathode** (reduction), an electrolyte and a conductor are required.
- **Galvanic series:** when two dissimilar metals are in contact in an electrolyte, the more active (anodic) metal corrodes. A **small anode with a large cathode** gives rapid corrosion.
- **Forms:** uniform (general), galvanic, pitting, crevice, intergranular (weld decay in stainless steel because of chromium carbide precipitation; prevented by low carbon grades or stabilisation with Ti/Nb), stress corrosion cracking, erosion corrosion, dezincification (brass), selective leaching, hydrogen embrittlement, and fretting.
- **Prevention:** coatings (paint, galvanising, tinning, electroplating, anodising of aluminium), **cathodic protection** (sacrificial anodes such as zinc and magnesium, or impressed current), inhibitors, design (avoid crevices and dissimilar metal couples), and the choice of material (stainless steel).
- **Oxidation at high temperature** and **scaling**. **Pilling-Bedworth ratio** indicates whether an oxide film is protective.

## 🧭 9. Worked numericals

1. **Elongation.** $L_0 = 50$ mm, $L_f = 62$ mm: $24\%$.
2. **Modulus of resilience.** $\sigma_y = 250$ MPa, $E = 200$ GPa: $\dfrac{250^2}{2\times200000} = 0.156$ MJ/m$^3$.
3. **Brinell.** $P = 3000$ kgf, $D = 10$ mm, $d = 4$ mm: $HB = \dfrac{2\times3000}{\pi\times10\times(10 - \sqrt{84})} = \dfrac{6000}{\pi\times10\times0.835} = 228.7$.
4. **Rule of mixtures.** $V_f = 0.4$, $E_f = 300$ GPa, $E_m = 3$ GPa: $E_c = 0.4\times300 + 0.6\times3 = 121.8$ GPa (longitudinal).
5. **Stress intensity.** $\sigma = 200$ MPa, $a = 5$ mm, $Y = 1.12$: $K = 1.12\times200\times\sqrt{\pi\times0.005} = 28.1$ MPa$\sqrt{\text{m}}$.

## 🧭 10. Common mistakes

- Confusing toughness (energy to fracture) with strength or hardness.
- Using the Charpy specimen position in the Izod test and vice versa.
- Believing that all metals show a ductile-to-brittle transition; only BCC metals do.
- Treating austenitic stainless steel as hardenable by heat treatment.
- Calling brass a Cu-Sn alloy (that is bronze).
- Mixing up thermoplastics and thermosets.

## 🧭 11. Interconnections

- **Strength of materials:** stress-strain, elastic constants, fatigue and creep.
- **Machine design:** endurance limit, material selection.
- **Manufacturing:** formability, machinability, weldability.

## 🧭 12. PYQs

| # | Question | Answer | Exam / Year | Verify |
|---|---|---|---|---|
| 1 | Toughness is represented by | Area under the stress-strain curve | SSC JE 2017 | [ ] |
| 2 | Brinell test indenter | Hardened steel ball | RRB JE 2015 | [ ] |
| 3 | Vickers indenter | Square-based diamond pyramid | SSC JE 2018 | [ ] |
| 4 | Rockwell C scale uses | Diamond cone, $150$ kgf | RRB JE 2014 | [ ] |
| 5 | Charpy and Izod tests measure | Impact toughness | SSC JE 2016 | [ ] |
| 6 | Endurance limit is | Stress below which a material can withstand infinite cycles | APPSC AEE 2012 | [ ] |
| 7 | Creep is significant at | High temperature under constant load | SSC JE 2019 | [ ] |
| 8 | Brass is an alloy of | Copper and zinc | RRB JE 2019 | [ ] |
| 9 | Bronze is an alloy of | Copper and tin | SSC JE 2015 | [ ] |
| 10 | Duralumin | Aluminium, copper, magnesium, manganese | RRB JE 2016 | [ ] |
| 11 | Grey cast iron carbon is present as | Graphite flakes | SSC JE 2020 | [ ] |
| 12 | Nodular cast iron graphite shape | Spheroids | RRB JE 2018 | [ ] |
| 13 | Stainless steel contains minimum chromium of | About $10.5\%$ to $12\%$ | SSC JE 2021 | [ ] |
| 14 | Thermosetting plastic | Bakelite | APPSC AEE 2016 | [ ] |
| 15 | Malleability is related to | Compressive deformation (hammering/rolling) | RRB JE 2017 | [ ] |
| 16 | Best cathodic protection anode | Zinc / magnesium (sacrificial) | SSC JE 2022 | [ ] |
| 17 | Hall-Petch relation | Yield strength increases as grain size decreases | RRB JE 2013 | [ ] |

## 🧭 13. Revision checklist

- [ ] Property definitions, stress-strain features
- [ ] Hardness tests and indenters
- [ ] Impact, fatigue, creep concepts
- [ ] Ferrous and non-ferrous alloy compositions
- [ ] Polymers, ceramics, composites
- [ ] Corrosion types and prevention
