export const meta = {
  name: 'build-remaining-topics',
  description: 'Build the 24 remaining StudyOS MDX topics (AM/BF/HR) in the approved visual-first style, wire registries, audit fidelity, quality-upgrade, then fill questions.js + exams.js — per docs/TOPIC_BUILD_SPEC.md',
  whenToUse: 'Run after the 3 reference exemplars (AM-06, BF-02, HR-01) were approved. Builds everything still missing. Style + verified source→topic mapping live in docs/TOPIC_BUILD_SPEC.md and in this script.',
  phases: [
    { title: 'Build', detail: '24 topic builders, each writes 2 files (NN-slug.js + .mdx)' },
    { title: 'Wire', detail: '3 module assemblers rewrite topics/index.js + patch module.js, then a central build' },
    { title: 'Audit', detail: 'fidelity audit per topic vs its source, fixed in place' },
    { title: 'Quality', detail: 'visual-density / quality upgrade per topic, no new facts' },
    { title: 'Exams', detail: 'per module fill questions.js + exams.js' },
    { title: 'Final', detail: 'final production build + UI/UX audit, fixed green' },
  ],
}

// ---------------------------------------------------------------------------
// Verified manifest (docs/TOPIC_BUILD_SPEC.md §5). Source→topic mapping was
// confirmed against the source headers, INCLUDING the known traps:
//   - BF 02/03 source files are SWAPPED (skript-03 file holds Kap.2 content).
//   - HR 02/03 are SWAPPED vs module.js labels (HR3 = Strategie/Personalpolitik,
//     HR2 = Führung/Generationen/Ethik), confirmed via HR-structure.txt + headers.
//   - HR filename casing is inconsistent (_MD+PDF vs _md+PDF) — exact paths below.
// Already-built (EXCLUDED): AM-05, AM-06, BF-02, HR-01.
// ---------------------------------------------------------------------------
const AM_DIR = 'src/modules/semester-4/asset-management'
const BF_DIR = 'src/modules/semester-4/behavioral-finance'
const HR_DIR = 'src/modules/semester-4/human-resources'

const AM_SRC = 'sources/semester-4/asset-management/MDs/MD+PDF'
const BF_SRC = 'sources/semester-4/behavioral-finance/MDs/MD+PDF'
const HR_SRC = 'sources/semester-4/human-resources/Markitdown/Markitdown+PDF'

const TOPICS = [
  // Asset Management (7 remaining; 05 & 06 already built). accent: blue
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '01', slug: 'einfuehrung',                   src: `${AM_SRC}/skript-01-einfuehrung_MD+PDF.md`,                   newEntry: true,  title: 'Kapitel 1 · Einführung' },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '02', slug: 'traditionelle-assetklassen',    src: `${AM_SRC}/skript-02-traditionelle-assetklassen_MD+PDF.md`,    newEntry: false },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '03', slug: 'alternative-assetklassen',      src: `${AM_SRC}/skript-03-alternative-assetklassen_MD+PDF.md`,      newEntry: false },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '04', slug: 'mathemat-strat-grundlagen',     src: `${AM_SRC}/skript-04-mathemat-strat-grundlagen_MD+PDF.md`,     newEntry: false },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '07', slug: 'performanceanalyse',            src: `${AM_SRC}/skript-07-performanceanalyse_MD+PDF.md`,            newEntry: false },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '08', slug: 'aktives-vs-passives-management', src: `${AM_SRC}/skript-08-aktives-vs-passives-management_MD+PDF.md`, newEntry: false },
  { mod: 'AM', dir: AM_DIR, accent: 'blue', nn: '09', slug: 'fintechs-im-asset-management',  src: `${AM_SRC}/skript-09-fintechs-im-asset-management_MD+PDF.md`,  newEntry: false },

  // Behavioral Finance (8 remaining; 02 already built). accent: purple. ⚠ 03 uses skript-02 file.
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '01', slug: 'einfuehrung',                          src: `${BF_SRC}/skript-01-einfuehrung_MD+PDF.md`,                          newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '03', slug: 'heuristiken-und-kognitive-verzerrungen', src: `${BF_SRC}/skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '04', slug: 'entscheidungen-unter-unsicherheit',    src: `${BF_SRC}/skript-04-entscheidungen-unter-unsicherheit_MD+PDF.md`,    newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '05', slug: 'zeit-in-der-oekonomie',                src: `${BF_SRC}/skript-05-zeit-in-der-oekonomie_MD+PDF.md`,                newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '06', slug: 'prospect-theory-und-ihre-konsequenzen', src: `${BF_SRC}/skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '07', slug: 'altersvorsorge-und-private-finanzplanung', src: `${BF_SRC}/skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '08', slug: 'spekulationsblasen-an-finanzmaerkten', src: `${BF_SRC}/skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF.md`, newEntry: true,  title: 'Kapitel 8 · Spekulationsblasen an Finanzmärkten' },
  { mod: 'BF', dir: BF_DIR, accent: 'purple', nn: '09', slug: 'kapitalanlage-und-kapitalmarktanomalien', src: `${BF_SRC}/skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF.md`, newEntry: true, title: 'Kapitel 9 · Kapitalanlage und Kapitalmarktanomalien' },

  // Human Resources (9 remaining; 01 already built). accent: teal. ⚠ 02←HR3, 03←HR2 (swapped).
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '02', slug: 'unternehmensstrategie-und-personalpolitik', src: `${HR_SRC}/HR3_MD+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '03', slug: 'fuehrung-und-unternehmensethik',           src: `${HR_SRC}/HR2_MD+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '04', slug: 'operative-personalplanung',                src: `${HR_SRC}/HR4_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '05', slug: 'personalbeschaffung',                      src: `${HR_SRC}/HR5_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '06', slug: 'personalauswahl-und-arbeitszeugnisse',     src: `${HR_SRC}/HR6_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '07', slug: 'personalauswahl-verfahren',                src: `${HR_SRC}/HR7_MD+PDF.md`,  newEntry: true,  title: 'Kapitel 7 · Personalauswahl – Verfahren' },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '08', slug: 'personaladministration-sozialversicherung-dsgvo', src: `${HR_SRC}/HR8_MD+PDF.md`, newEntry: true, title: 'Kapitel 8 · Personaladministration, Sozialversicherung und DSGVO' },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '09', slug: 'personalcontrolling-onboarding-laufbahnplanung', src: `${HR_SRC}/HR9_MD+PDF.md`, newEntry: true, title: 'Kapitel 9 · Personalcontrolling, Onboarding und Laufbahnplanung' },
  { mod: 'HR', dir: HR_DIR, accent: 'teal', nn: '10', slug: 'arbeitsorganisation-und-personalbeurteilung', src: `${HR_SRC}/HR10_md+PDF.md`, newEntry: true, title: 'Kapitel 10 · Arbeitsorganisation und Personalbeurteilung' },
]

// Shared contract injected into every builder/upgrader prompt so a fresh agent
// reproduces the approved look without this chat's context.
const STYLE = `
STYLE CONTRACT — match the approved exemplars exactly. READ THESE FIRST:
- docs/TOPIC_BUILD_SPEC.md (the full authoring contract: component API, MDX traps, mapping).
- The 3 approved exemplars:
  ${AM_DIR}/topics/06-portfoliomanagement.mdx (quant),
  ${BF_DIR}/topics/02-modell-der-zwei-systeme.mdx (conceptual),
  ${HR_DIR}/topics/01-einfuehrung.mdx (process/structure).
- The component registry (what exists): src/components/learning/visuals/index.jsx.

LOOK PRINCIPLE — "VISUALIZE BEFORE VERBALIZE":
- For EVERY section, first ask: can this be a real visualization? Prefer it over bullet text.
  numbers/series → <DataChart>; process/flow/taxonomy/tree → <Diagram> (mermaid);
  3D relation z=f(x,y) (utility/value/risk) → <Surface3D>; risk/return cloud → <Scene3D>;
  steps/chronology → <Timeline>; 2-axis split → <QuadrantMatrix>; composition/% → <ProportionBar>;
  2-3 way contrast → <CompareCard>; continuum → <SpectrumAxis>; criteria tree → <DecisionTree>;
  KPIs → <KpiGrid>; tabular → <DataTable>; math → <Formula>; key term → <DefinitionBox>.
- CARD-DENSE FALLBACK for non-visualizable text: <Card title tone exam compact> blocks, grouped
  side-by-side with <Columns count={2|3}>, "### " sub-headings to group, bullets over prose.
- Mark exam-relevant bits: <Exam>inline phrase</Exam> (sparingly), <Card exam>, <Callout type="examfocus">.
- VARY the dominant visual across adjacent sections — never the same shape twice in a row.
- These components are AUTO-INJECTED (no import in .mdx): Formula, DataChart, Diagram, Scene3D, Surface3D,
  CompareCard, Timeline, DefinitionBox, Callout, DataTable, KpiGrid, DecisionTree, SpectrumAxis,
  QuadrantMatrix, ProportionBar, SourceNote, Explorable, Card, Columns, Exam.

MDX TRAPS THAT BREAK THE BUILD:
- Bare < or > in prose parse as JSX. Write "größer"/"kleiner"/"unter pari" or use <Formula inline expr="x < y" />.
  (Inside chart={\`...\`} template strings, --> and <--> are fine.)
- **bold** inside JS STRING props is NOT markdown — keep KpiGrid labels, DataTable cells, Callout/Card
  title PLAIN. Markdown works only in component CHILDREN and CompareCard points/subtitle.
- Every <section id> MUST equal a meta.sections[].id. No umlauts in ids/slugs. No duplicate ids.
- Mermaid node labels with special chars must be quoted: A["Text (x)"].
- Do NOT add per-topic CSS/wrappers; section/heading/card styling is central.

CONTENT RULES: only facts present in the source — never invent figures/formulas/names. NO assessment in
content (no quiz/self-test/reveal/flip — render source quizzes as STATIC teaching examples with the
answer shown; real questions go to questions.js/exams.js). No click-walls. Static by default
(<Explorable> only wraps optional 3D enrichment). Mark unclear source passages, don't smooth them over.
`

// ---------------------------------------------------------------------------
// PHASE 1 — Build: 24 topics in parallel. Each builder writes ONLY its two
// NN-slug files. Uses general-purpose agents (custom .claude/agents types do
// not resolve as agentType in this harness — instructions are embedded here).
// ---------------------------------------------------------------------------
phase('Build')
log(`Building ${TOPICS.length} topics across AM/BF/HR…`)

const BUILD_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'mdxFile', 'metaFile', 'sectionIds', 'ok'],
  properties: {
    slug: { type: 'string' },
    mdxFile: { type: 'string' },
    metaFile: { type: 'string' },
    sectionIds: { type: 'array', items: { type: 'string' } },
    pdfFallbacks: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
    ok: { type: 'boolean', description: 'true if both files written and self-checked against the SPEC' },
  },
}

const built = await parallel(TOPICS.map((t) => () =>
  agent(
    `You are a StudyOS Markdown-to-MDX topic builder. Build the learning topic "${t.slug}" (${t.mod} Kapitel ${t.nn}), one of the remaining topics in a 24-topic build. Visual quality is the top priority.

PRIMARY SOURCE (read it FULLY — it is Markdown with per-slide visual-reconstruction briefings): ${t.src}
This module's accent color is ${t.accent.toUpperCase()} — prefer tone="${t.accent === 'blue' ? 'accent' : t.accent}"/"accent" on emphasis cards where natural.

TARGET FILES — write EXACTLY these two, nothing else:
  ${t.dir}/topics/${t.nn}-${t.slug}.js   (meta export; meta.id MUST equal "${t.slug}")
  ${t.dir}/topics/${t.nn}-${t.slug}.mdx  (body, 4–8 sections, each <section id> matching a meta.sections[] id)

${t.newEntry
  ? `This is a NEW topic not yet in module.js. Use title "${t.title}". Read a sibling entry in ${t.dir}/module.js to copy the "Modul · ..." source-label style and pick a sensible estimatedMinutes.`
  : `Copy title / source / estimatedMinutes VERBATIM from the matching topic entry in ${t.dir}/module.js (match by id "${t.slug}").`}

Build the meta with strong keyTakeaways (5–8), examFocus (4–8), and pitfalls (present). Vary the dominant
visual form across sections. Use the richest STATIC visualization the content supports.

Do NOT edit ${t.dir}/topics/index.js or ${t.dir}/module.js — registry wiring happens centrally next.
Do NOT run a build (a central build runs after wiring).

${STYLE}

Return the structured result.`,
    { label: `build:${t.mod}-${t.nn}`, phase: 'Build', schema: BUILD_SCHEMA, agentType: 'general-purpose' },
  ),
)).then((r) => r.filter(Boolean))

const failed = built.filter((b) => !b.ok)
log(`Build: ${built.length}/${TOPICS.length} returned, ${failed.length} self-reported not-ok.`)

// ---------------------------------------------------------------------------
// PHASE 2 — Wire (BARRIER per module is correct: needs ALL topic files present),
// then ONE central build to verify the whole app compiles.
// ---------------------------------------------------------------------------
phase('Wire')

const MODULES = [
  { mod: 'AM', dir: AM_DIR, addEntries: TOPICS.filter((t) => t.mod === 'AM' && t.newEntry) },
  { mod: 'BF', dir: BF_DIR, addEntries: TOPICS.filter((t) => t.mod === 'BF' && t.newEntry) },
  { mod: 'HR', dir: HR_DIR, addEntries: TOPICS.filter((t) => t.mod === 'HR' && t.newEntry) },
]

const WIRE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['module', 'indexTopicsCount', 'ok'],
  properties: {
    module: { type: 'string' },
    indexTopicsCount: { type: 'integer' },
    moduleEntriesAdded: { type: 'array', items: { type: 'string' } },
    ok: { type: 'boolean' },
    notes: { type: 'string' },
  },
}

await parallel(MODULES.map((m) => () =>
  agent(
    `Wire the topic registry for the ${m.mod} module at ${m.dir}.

1. List every file matching ${m.dir}/topics/NN-slug.js (and its .mdx). Rewrite ${m.dir}/topics/index.js so it
   imports { meta as metaNN } and ContentNN for EACH present topic in ascending NN order, and exports:
       export const topics = [ { ...metaNN, Content: ContentNN }, ... ];
       export default topics;
   Read the existing index.js first and keep its import style. KEEP topics already present (do not drop
   the already-built exemplars).
2. ${m.addEntries.length
      ? `Add these NEW topic entries to ${m.dir}/module.js topics[] in NN order, matching the sibling object
         shape exactly (id, title, status:'available', hasContent:true, source, estimatedMinutes). Read each
         topic's meta .js to copy its title/source/estimatedMinutes: ${m.addEntries.map((e) => `${e.nn}:${e.slug}`).join(', ')}.
         Place each entry at the correct chapter position in the array.`
      : 'No new module.js entries needed for this module — leave module.js unchanged.'}

Edit ONLY ${m.dir}/topics/index.js and (if needed) ${m.dir}/module.js. Do NOT touch topic content files.
Return the structured result.`,
    { label: `wire:${m.mod}`, phase: 'Wire', schema: WIRE_SCHEMA, agentType: 'general-purpose' },
  ),
)).then((r) => r.filter(Boolean))

const buildOut = await agent(
  `Run the production build and report the result.
Run \`npm run build\` in the repo root (C:/Users/zt6xjhh/OneDrive - Allianz/Uni/Lernapp/StudyOS-2.1).
If it FAILS: read the error, identify the offending topic file(s), and FIX the MDX/JS error in place.
Common causes: bare < or > in MDX prose (write "größer"/"kleiner" or <Formula inline/>), <section id> not
matching meta.sections[], **bold** inside a JS string prop, bad import path, duplicate id. Re-run until
GREEN or until an error you cannot fix without inventing content.
Report: final status (GREEN/RED), files you fixed, and any remaining errors verbatim.`,
  { label: 'build:verify', phase: 'Wire', agentType: 'general-purpose' },
)
log(`Wire/build: ${String(buildOut).slice(0, 200)}`)

// ---------------------------------------------------------------------------
// PHASE 3+4 — Audit then Quality, PIPELINED per topic (no barrier): each topic
// is audited against its source and fixed, then quality/visual-density upgraded.
// ---------------------------------------------------------------------------
const AUDIT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'ok'],
  properties: {
    slug: { type: 'string' },
    findings: { type: 'array', items: { type: 'string' } },
    fixesApplied: { type: 'array', items: { type: 'string' } },
    ok: { type: 'boolean' },
  },
}

const reviewed = await pipeline(
  TOPICS,
  // Stage 1 — fidelity audit + fix in place
  (t) => agent(
    `You are a content-fidelity auditor for StudyOS. Audit ${t.dir}/topics/${t.nn}-${t.slug}.mdx (and its .js)
against its source ${t.src}.
Check for: invented claims/figures/formulas NOT in the source; materially wrong statements; missing
exam-relevant content; shortened/incorrect definitions; wrong citations; <section id> not matching
meta.sections[]. FIX issues in place in the .mdx/.js, preserving the approved style (docs/TOPIC_BUILD_SPEC.md).
NEVER invent content to fill a gap — if the source lacks it, flag it instead. Keep changes minimal and
faithful. Return the structured result (findings + fixesApplied).`,
    { label: `audit:${t.mod}-${t.nn}`, phase: 'Audit', schema: AUDIT_SCHEMA, agentType: 'general-purpose' },
  ),
  // Stage 2 — quality / visual-density upgrade
  (audit, t) => agent(
    `You are a learning-design + visual-quality editor for StudyOS. Upgrade ${t.dir}/topics/${t.nn}-${t.slug}.mdx.
Enforce "VISUALIZE BEFORE VERBALIZE": any bullet-Card that could be a real visualization (numbers→DataChart,
process→Diagram/Timeline, contrast→CompareCard, 2-axis split→QuadrantMatrix, composition→ProportionBar,
3D relation→Surface3D) should be UPGRADED to that form. Add <Card>/<Columns> block separation, "### "
sub-headings to group cards, <Exam> markers on testable phrases, convert leftover prose to bullets, and
raise visual density. Ensure the dominant visual VARIES across adjacent sections.
Do NOT add subject-matter facts not already present. Keep meta keyTakeaways/examFocus/pitfalls strong.
Follow docs/TOPIC_BUILD_SPEC.md and avoid the MDX traps (no bare < > in prose; no **bold** in string props).
After editing, the topic must still build. Return a one-line summary of the changes you made.`,
    { label: `quality:${t.mod}-${t.nn}`, phase: 'Quality', agentType: 'general-purpose' },
  ),
)
log(`Audit+Quality complete for ${reviewed.filter(Boolean).length}/${TOPICS.length} topics.`)

// ---------------------------------------------------------------------------
// PHASE 5 — Exams: one builder per module fills questions.js + exams.js.
// ---------------------------------------------------------------------------
phase('Exams')

await parallel(['asset-management', 'behavioral-finance', 'human-resources'].map((modId) => () =>
  agent(
    `You are an exam-content builder for StudyOS. Build exam-focused assessment for module
src/modules/semester-4/${modId}, grounded ONLY in that module's now-complete topics and its sources.

Populate (read existing files first; for asset-management ADD to / round out what already exists rather
than overwriting good content):
  src/modules/semester-4/${modId}/questions.js — quiz questions. Shape per the existing
    asset-management/questions.js: { id, type:'single'|'multiple', question, options:[...],
    correctAnswer:<idx> | correctAnswers:[...], explanation }. Export \`export const questions = [...]\`
    and a default export. Cover EVERY topic in the module; aim for a solid set per topic.
  src/modules/semester-4/${modId}/exams.js — paper-style practice exams. Match the schema in
    src/modules/semester-4/asset-management/exams.js exactly (id, title, label, description, durationMinutes,
    totalPoints, topics[], instructions[], sections[].tasks[] with task types single-choice/multiple-choice/
    definition/calculation/case-study, each with solution + gradingHints). Provide at least one substantive
    exam covering the module. Export \`export const exams = [...]\` and a default export.

Rules: only content grounded in the sources/topics — no invented facts. All ids unique. Do NOT modify any
topic .mdx/.js files or index.js/module.js. After writing, sanity-check the files are valid JS.
Return a summary: counts of questions and exam tasks created.`,
    { label: `exams:${modId}`, phase: 'Exams', agentType: 'general-purpose' },
  ),
)).then((r) => r.filter(Boolean))

// ---------------------------------------------------------------------------
// PHASE 6 — Final build + UI/UX audit.
// ---------------------------------------------------------------------------
phase('Final')

const finalBuild = await agent(
  `Run the final production build: \`npm run build\` in the repo root
(C:/Users/zt6xjhh/OneDrive - Allianz/Uni/Lernapp/StudyOS-2.1). Fix any errors in place until GREEN — do NOT
invent content. Common causes are listed in docs/TOPIC_BUILD_SPEC.md §4 (bare < >, section-id mismatch,
bold-in-string-prop, duplicate ids, bad import). Report final status (GREEN/RED), files fixed, and any
remaining errors verbatim.`,
  { label: 'build:final', phase: 'Final', agentType: 'general-purpose' },
)

const uiux = await agent(
  `You are a UI/UX quality auditor for StudyOS (React 19 + Tailwind 4 + shadcn). Audit the newly built
topics for visual/usability issues ONLY (not content). Read DESIGN.md and a few of the new
src/modules/semester-4/*/topics/*.mdx plus src/components/learning/visuals/* and FullContentView.css.
Check: horizontal overflow, token discipline (no hardcoded hex / second grayscale; uses tokens), card/
table/callout/chart consistency, repeated-identical-silhouette monotony across a topic's sections,
mobile plausibility, motion budget. Apply MINIMAL in-place fixes for any CRITICAL issues only (do not
redesign, do not change content). Then run \`npm run build\` once more to confirm GREEN.
Report: a short prioritized findings list (critical/medium/low) with file + fix, and final build status.`,
  { label: 'uiux:audit', phase: 'Final', agentType: 'general-purpose' },
)

return {
  built: built.length,
  notOk: failed.map((f) => f.slug),
  reviewed: reviewed.filter(Boolean).length,
  buildAfterWire: String(buildOut).slice(0, 300),
  finalBuild: String(finalBuild).slice(0, 300),
  uiux: String(uiux).slice(0, 300),
}
