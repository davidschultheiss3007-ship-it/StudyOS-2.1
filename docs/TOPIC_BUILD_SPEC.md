# StudyOS — Topic Build Spec

Canonical contract for authoring a learning topic. Every topic-builder, fidelity-auditor, and
quality-upgrader agent reads this file **first**, then the gold-standard exemplar
`src/modules/semester-4/asset-management/topics/05-grundlagen-der-portfoliotheorie.{js,mdx}`.

The goal: each topic reproduces the approved StudyOS look without needing the originating chat's context.

---

## 0. Non-negotiables (read before anything)

1. **Only facts present in the source.** Never invent figures, formulas, definitions, dates, or names.
   If a source passage is unclear, mark it (`<Callout type="warn">`) — do not smooth it over.
2. **No assessment inside topic content.** No quizzes, self-tests, exercises, or reveal/flip cards in
   `.mdx`. All knowledge checks live in `questions.js` / `exams.js`. If a source slide is a quiz/exercise,
   render its *teaching point* as a static visual and move the question to the exam files.
3. **No click-walls.** All primary content is visible on first render. `<Explorable>` may wrap only
   optional 3D enrichment — never essential, exam-relevant content.
4. **Static by default.** At most one interactive control per section, and only when a variable quantity
   drives the learning (a parameter that recomputes a formula/chart). Never on definitional content.
5. **Token discipline.** Components already carry the cobalt-on-cool-gray system. Authors never write
   raw hex or new colors in `.mdx`; they pass semantic `accent`/`tone`/`type` props.

---

## 1. Files per topic

```
src/modules/semester-4/<moduleId>/topics/
  NN-slug.js     ← static meta export (data only, no JSX)
  NN-slug.mdx    ← MDX body: <section> wrappers + palette components
```

`NN` = zero-padded chapter number. `slug` = kebab-case, **no umlauts** (ä→ae etc.), URL-safe.
Builders write **only these two files** — never `topics/index.js` or `module.js` (wired centrally).

### `NN-slug.js` shape

```js
export const meta = {
  id: 'slug',                              // MUST equal the slug and a module.js topic id
  title: 'Kapitel N · Titel',
  source: 'Modul · Kapitel N · Titel · Folien XX–YY',
  estimatedMinutes: 60,
  sections: [                              // 4–8 entries; each id MUST match a <section id> in the mdx
    { id: 'section-id', title: 'Section Title', pages: 'Folien XX–YY' },
  ],
  keyTakeaways: [ /* 5–8 central statements */ ],
  examFocus:    [ /* 4–8 exam-relevant points */ ],
  pitfalls:     [ /* typical exam traps */ ],
};
```

### `NN-slug.mdx` shape

```mdx
<section id="section-id">

## Section Title

…content using palette components…

<SourceNote>Modul · Kapitel N · Folien XX–YY</SourceNote>
</section>
```

- `## ` renders as the section heading (h3), `### ` as a sub-heading separator (h4) to group cards.
- One `<section>` per `meta.sections[]` entry; ids must match exactly.
- Every section metadata entry carries a precise `pages` label (`Folie X`, `Folien X–Y`, or a compact
  comma-separated list for non-contiguous ranges) matching the section's source note.

---

## 2. The look: "Visualize before verbalize" + card-dense

Visual quality is the top priority. Two rules, in order:

### Rule 1 — Visualize before verbalize (PRIMARY)
For **every** section, first ask: *can this be a real visualization?* If yes, use it instead of bullets.

| Source content | Reach for |
| --- | --- |
| Any math expression | `<Formula>` (with `legend` for variables) |
| Quantitative data, series, trends | `<DataChart>` (line/bar/area/scatter) |
| A 3D relationship z=f(x,y): utility, value function, risk landscape | `<Surface3D>` |
| Risk/return point cloud + frontier | `<Scene3D>` |
| Process, flow, taxonomy, org/structure | `<Diagram>` (mermaid) |
| Sequence of steps / chronology | `<Timeline>` |
| 2×2 conceptual split (two axes → four cells) | `<QuadrantMatrix>` |
| A composition / 100% split | `<ProportionBar>` |
| 2–3 way contrast | `<CompareCard>` |
| A position on a continuum | `<SpectrumAxis>` |
| Competency / requirement scale profile | `<ScaleProfile>` |
| Branching decision / criteria tree | `<DecisionTree>` |
| Key figures / KPIs | `<KpiGrid>` |
| Structured tabular data | `<DataTable>` |
| A key term + definition | `<DefinitionBox>` |

### Rule 2 — Card-dense fallback (SECONDARY)
For genuinely non-visualizable text (definitions, enumerations, principles, Merksätze), use the
card-dense "Hefteintrag" look — **not** long prose:

- **Bullets over paragraphs.** Short, scannable lines.
- **Strong block separation.** Each distinct idea in its own `<Card>`. When in doubt, add another card.
- **Use horizontal space.** Put 2–3 related cards side by side with `<Columns count={2|3}>`.
- **Group** cards under `### ` sub-headings when a section covers several facets.
- **Mark exam-relevant bits:** `<Exam>inline phrase</Exam>` (sparingly), `<Card exam>` for an
  exam-central block, `<Callout type="examfocus">` for a focus box.

**Vary the dominant visual across adjacent sections** — never the same component shape section after
section. Never use a center-badge/orbiting-pills diagram, decorative webs, or horizontal arrow chains as
default scaffolding.

---

## 3. Component API (all auto-injected via MDXProvider — no import in `.mdx`)

Registry: `src/components/learning/visuals/index.jsx`. Heavy libs (Recharts, Mermaid, three/R3F) are
lazy-loaded inside `DataChart` / `Diagram` / `Scene3D` / `Surface3D`.

**Math & data**
- `<Formula expr="E(r_P)=w_A E(r_A)+w_B E(r_B)" title? display?={true} inline?={false} legend?={[{sym,desc}]} />`
- `<DataChart type="line|bar|area|scatter" data={[…]} series={[{key,name,color?,line?,data?}]} xKey yKey xLabel? yLabel? height?={320} markers?={[{x,y,label,color}]} xDomain? yDomain? />`
- `<DataTable columns={[{key,label,align?}]} rows={[{…}]} caption? highlight?={(row,i)=>bool} />`
- `<KpiGrid items={[{value,label,accent?}]} columns? />`  accent: `default|positive|negative|warning|accent`
- `<ProportionBar segments={[{label,value,color?,sub?}]} caption? source? showInline?={true} />`

**Structure & relationships**
- `<Diagram chart={\`graph LR; A-->B\`} title? source? height?={260} />` (mermaid syntax)
- `<Timeline events={[{label?,title,text?}]} />`
- `<DecisionTree nodes={[{label,detail?,children?:[…]}]} />`
- `<QuadrantMatrix xLabel yLabel xLow xHigh yLow yHigh caption? quadrants={[{pos:'tl|tr|bl|br',title,points?:[],accent?}]} />`
- `<SpectrumAxis markers={[{at:0–100,label,sub?}]} min? max? caption? />`
- `<ScaleProfile groups={[{title,accent?,items:[{label,value,note?}]}]} min?={1} max?={7} caption? source? />`
- `<CompareCard items={[{tag?,title,subtitle?,accent?,points:[…]}]} />`  accent: `neutral|positive|negative|warning|accent|purple`

**3D (flagship — use where 3D genuinely explains)**
- `<Scene3D points={[{x,y,z?,efficient?,label?}]} frontier?={[{x,y,z?}]} title? source? hint? height?={360} />`
  (x,y in 0..1; risk/return space)
- `<Surface3D kind="concave|bowl|saddle|s-curve" title? source? hint? xLabel? yLabel? zLabel? accent? height?={380} />`
  - `concave` = diminishing-returns / risk-averse utility dome
  - `bowl` = convex variance landscape, single minimum
  - `saddle` = genuine tradeoff surface
  - `s-curve` = Prospect-Theory value (concave gains, steeper convex losses)
  - Wrap in `<Explorable>` when it is enrichment rather than core.

**Emphasis & layout**
- `<DefinitionBox term="…" source?>…</DefinitionBox>`
- `<Callout type="merksatz|examfocus|pitfall|info|tip|warn" title?>…</Callout>`
- `<Card title? tone="neutral|accent|purple|positive|negative|warning|teal|orange" compact? exam?>…</Card>`
- `<Columns count={2|3}>…</Columns>` (children are usually `<Card>`s)
- `<Exam>inline exam phrase</Exam>`
- `<Explorable label? note?>…</Explorable>` (collapsible; optional enrichment only)
- `<SourceNote>citation</SourceNote>` (end of a section)

---

## 4. MDX traps that break the build

- **Bare `<` / `>` in prose are parsed as JSX.** Write "größer", "kleiner", "unter pari", or use
  `<Formula inline expr="x < y" />`. Never a bare `<` or `>` before text or `*`.
- **`**bold**` inside JS string props is NOT markdown** (e.g. `title="…"`, `KpiGrid` labels,
  `DataTable` cells). Keep string props plain. Markdown works only in component *children* and in
  `CompareCard` `points`/`subtitle`.
- **`<section id>` must equal a `meta.sections[].id`.** No umlauts in ids/slugs. No duplicate ids.
- **Mermaid labels with special chars** go in quotes: `A["Text (mit Klammern)"]`.
- **Section/heading/card styling is central** (`ContentSection.jsx`, `FullContentView.css`). Do not add
  per-topic CSS or wrapper styling that fights it.

QA: run `npm run build` (or rely on the central build step). Verify ids match, no duplicate ids,
keyTakeaways/examFocus/pitfalls populated, no assessment in content, no invented facts.

---

## 5. Source → topic mapping (verify in Phase 0 before building)

Primary source per module is the `*_MD+PDF.md` variant (OCR text + per-slide reconstruction briefings);
fall back to the plain `.md`. PDFs only for targeted screenshots when a Markdown reference is locally
unclear. **⚠ rows are ambiguous and MUST be confirmed by reading the source header/agenda first.**

### Asset Management — `sources/semester-4/asset-management/MDs/MD+PDF/`  (accent: blue)
Module.js declares Kap 2–9; **Kap 5 already built (gold standard) — skip**. Kap 1 is a new light intro.

| NN | slug | source file | module.js | 
| --- | --- | --- | --- |
| 01 | `einfuehrung` | `skript-01-einfuehrung_MD+PDF.md` | NEW entry |
| 02 | `traditionelle-assetklassen` | `skript-02-traditionelle-assetklassen_MD+PDF.md` | exists |
| 03 | `alternative-assetklassen` | `skript-03-alternative-assetklassen_MD+PDF.md` | exists |
| 04 | `mathemat-strat-grundlagen` | `skript-04-mathemat-strat-grundlagen_MD+PDF.md` | exists |
| 05 | *(done — skip)* | — | exists |
| 06 | `portfoliomanagement` | `skript-06-portfoliomanagement_MD+PDF.md` | exists |
| 07 | `performanceanalyse` | `skript-07-performanceanalyse_MD+PDF.md` | exists |
| 08 | `aktives-vs-passives-management` | `skript-08-aktives-vs-passives-management_MD+PDF.md` | exists |
| 09 | `fintechs-im-asset-management` | `skript-09-fintechs-im-asset-management_MD+PDF.md` | exists |

→ **8 to build** (Kap 1 new + 02,03,04,06,07,08,09).

### Behavioral Finance — `sources/semester-4/behavioral-finance/MDs/MD+PDF/`  (accent: purple)
**⚠ Confirmed source-file swap on 02/03:** the file numbered `skript-02-heuristiken…` contains
**Kapitel 3** (Heuristiken); `skript-03-modell-der-zwei-systeme` contains **Kapitel 2** (Modell).

| NN | slug (= Kapitel) | source file | module.js |
| --- | --- | --- | --- |
| 01 | `einfuehrung` | `skript-01-einfuehrung_MD+PDF.md` | exists |
| 02 | `modell-der-zwei-systeme` | ⚠ `skript-03-modell-der-zwei-systeme_MD+PDF.md` | exists |
| 03 | `heuristiken-und-kognitive-verzerrungen` | ⚠ `skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF.md` | exists |
| 04 | `entscheidungen-unter-unsicherheit` | `skript-04-entscheidungen-unter-unsicherheit_MD+PDF.md` | exists |
| 05 | `zeit-in-der-oekonomie` | `skript-05-zeit-in-der-oekonomie_MD+PDF.md` | exists |
| 06 | `prospect-theory-und-ihre-konsequenzen` | `skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF.md` | exists |
| 07 | `altersvorsorge-und-private-finanzplanung` | `skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF.md` | exists |
| 08 | `spekulationsblasen-an-finanzmaerkten` | `skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF.md` | NEW entry |
| 09 | `kapitalanlage-und-kapitalmarktanomalien` | `skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF.md` | NEW entry |

→ **9 to build**.

### Human Resources — `sources/semester-4/human-resources/Markitdown/Markitdown+PDF/`  (accent: teal)
**⚠ Filename casing is inconsistent** (`HR1_MD+PDF.md`, `HR4_md+PDF.md`, `HR10_md+PDF.md` …) — glob the
actual names. **⚠ HR2/HR3 mapping is ambiguous:** `HR-structure.txt` says HR2 = Führung/Ethik/Generationen
and HR3 = Unternehmensstrategie/Personalpolitik, which is the **reverse** of the module.js source labels.
Read the HR2 and HR3 source headers/agendas and map by *content*, not filename. **⚠ HR6** source is thin
(structure.txt notes little specific content) — confirm what it covers before mapping to the
`personalauswahl-und-arbeitszeugnisse` topic.

| NN | slug | likely source | module.js |
| --- | --- | --- | --- |
| 01 | `einfuehrung` | `HR1_MD+PDF.md` | exists |
| 02 | `unternehmensstrategie-und-personalpolitik` | ⚠ verify HR2 vs HR3 | exists |
| 03 | `fuehrung-und-unternehmensethik` | ⚠ verify HR2 vs HR3 | exists |
| 04 | `operative-personalplanung` | `HR4_md+PDF.md` | exists |
| 05 | `personalbeschaffung` | `HR5_md+PDF.md` | exists |
| 06 | `personalauswahl-und-arbeitszeugnisse` | ⚠ `HR6` (thin) | exists |
| 07 | `personalauswahl-verfahren` | `HR7_md+PDF.md` | NEW entry |
| 08 | `personaladministration-sozialversicherung-dsgvo` | `HR8_md+PDF.md` | NEW entry |
| 09 | `personalcontrolling-onboarding-laufbahnplanung` | `HR9_md+PDF.md` | NEW entry |
| 10 | `arbeitsorganisation-und-personalbeurteilung` | `HR10_md+PDF.md` | NEW entry |

→ **10 to build**.

### Business English — *no source material; placeholder only*
Keep `status: 'planned'`, `hasContent: false`. No subject content authored.

**Grand total: 8 + 9 + 10 = 27 topics to build** (plus AM-05 already done).
