# Mechanical Engineering Master Repository

A complete, exam-oriented Mechanical Engineering knowledge base for:

- **APPSC AEE** (Assistant Executive Engineer, Mechanical)
- **SSC JE** (Mechanical, Paper-II)
- **RRB JE** (Mechanical, CBT-2)
- Other AE/AEE/JE technical recruitment exams

Each chapter has two parts: **Part A** is the full textbook-style theory (read first, written for a learner returning after a long gap), and **Part B** is the quick-reference layer (formulas, worked numericals, mistakes, PYQs, revision checklist).

---

## How to read this repo

| Folder | Subject | Approx. share of SSC JE / RRB JE paper |
|---|---|---|
| `01-Engineering-Mechanics` | Statics, friction, trusses, centroid/MOI, dynamics | 4-6% |
| `02-Strength-of-Materials` | Stress-strain, SFD/BMD, bending, deflection, torsion, columns | 8-10% |
| `03-Theory-of-Machines` | Mechanisms, gears, cams, balancing, vibration, governors, flywheel | 6-8% |
| `04-Machine-Design` | Fatigue, joints, shafts, bearings, gears, springs | 6-8% |
| `05-Thermodynamics` | Laws, entropy, properties, gas/vapour cycles | 8-10% |
| `06-Heat-Transfer` | Conduction, convection, radiation, heat exchangers | 4-6% |
| `07-IC-Engines` | SI/CI engines, performance, combustion | 4-5% |
| `08-Steam-Turbines-Compressors-PowerPlants` | Boilers, nozzles, turbines, compressors, gas turbines, power plants | 6-8% |
| `09-Refrigeration-and-Air-Conditioning` | VCRS, VARS, psychrometry | 4-6% |
| `10-Fluid-Mechanics` | Properties, statics, flow, pipes, boundary layer, dimensional analysis | 8-10% |
| `11-Fluid-Machinery` | Turbines, pumps, hydraulic devices | 4-6% |
| `12-Manufacturing-Processes` | Casting, welding, forming, machining, metrology, CNC | 12-15% |
| `13-Industrial-Engineering` | PPC, inventory, work study, CPM/PERT, quality, OR | 5-7% |
| `14-Material-Science` | Crystals, phase diagrams, heat treatment, testing | 4-5% |
| `98-PYQ-Bank` | Cross-subject PYQ practice sets | - |
| `99-Revision-System` | Master formula handbook, revision plan, error log | - |

Percentages are approximate and based on the usual distribution; always check the current official notification.

---

## Yield tags used in every chapter

| Tag | Meaning |
|---|---|
| **VHY** | Very High Yield: asked almost every cycle |
| **HY** | High Yield: asked in most cycles |
| **MY** | Medium Yield: asked occasionally |
| **LY** | Low Yield: rare, but part of the standard syllabus (included to avoid gaps) |

## Exam relevance tags

| Tag | Meaning |
|---|---|
| **ALL** | Common to APPSC AEE, SSC JE and RRB JE |
| **AEE+** | Mainly APPSC AEE (deeper conceptual MCQs, multi-step numerical MCQs) |
| **SSC+** | Mainly SSC JE (formula-based numericals, conceptual MCQs) |
| **RRB+** | Mainly RRB JE (one-liner facts, definitions, applied basics) |

---

## Standard chapter layout

**Part A: Detailed Theory (read this first)**

- Numbered sections `A1, A2, ...` building from basic definitions to exam-level concepts
- Physical meaning, assumptions, derivations and engineering logic
- Final section: what examiners test, split by APPSC AEE, SSC JE and RRB JE

**Part B: Quick-reference notes, formulas, numericals and PYQs**

1. Exam relevance matrix
2. Foundational theory and definitions (condensed)
3. Governing laws and assumptions
4. Formulas (with units)
5. Derivations and engineering logic
6. Worked numericals
7. Common mistakes and shortcuts
8. Interconnections with other subjects
9. PYQs with exam and year
10. Revision checklist

## Recommended study flow

1. First pass: read Part A of each chapter in the order given in the study plan.
2. Second pass: work through Part B numericals and PYQs.
3. Revision: use the Part B checklists, the master formula handbook and the rest of `99-Revision-System/`.
4. Log every wrong answer in the error log template.

---

## PYQ policy (read this)

- PYQs are tagged with **exam and year (exam cycle)**, for example `SSC JE 2018`, `RRB JE CBT-2 2019`.
- The questions are the recurring, textbook-type ones. Answers were worked out and checked, so the **answers are reliable**.
- Exact year and shift attribution comes from memory-based compilations and **could not be cross-checked against official question papers** while writing. Each PYQ table has a `Verify` column; tick it once you confirm against the official paper or answer key.
- Where a question has been repeated over several cycles, the table says so (for example `2018-2022 (repeated)`).
- Official sources: ssc.gov.in (past papers), rrbcdg.gov.in and regional RRB sites, psc.ap.gov.in (APPSC question papers).

## Notion and GitHub usage

- Notion: Import > Markdown & CSV, select the folder as a zip. Tables and headings import cleanly. The files use no HTML.
- GitHub: push the folder as-is. Use `README.md` as the landing page.
- Formulas are written in LaTeX: single dollar signs for inline math and double dollar signs for display equations. GitHub and Notion both render these natively. In Notion, imported display equations become equation blocks. If an inline equation does not convert on import, select it and press Ctrl+Shift+E.

## Navigation

- Start with [`00-Exam-Coverage-Matrix.md`](00-Exam-Coverage-Matrix.md)
- Follow the study order in [`99-Revision-System/01-study-plan.md`](99-Revision-System/01-study-plan.md)
- Keep [`99-Revision-System/02-master-formula-handbook.md`](99-Revision-System/02-master-formula-handbook.md) open while solving numericals
