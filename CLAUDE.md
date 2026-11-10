# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**StudyOS 2.1** is a React 19 + Vite + Tailwind 4 local-first learning platform for a university student preparing for Semester 4 written exams (Asset Management, Behavioral Finance, Human Resources, Business English). No backend — all state lives in localStorage. The product identity is "calm, precise, instrument-like" (Linear/Things territory). See `DESIGN.md` and `PRODUCT.md` for brand and design constraints.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # ESLint check
```

No test runner is configured. Validate behavior by running the dev server.

## Architecture

### Data flow

Content is registered bottom-up through a strict import chain:

```
NN-slug.mdx + NN-slug.js
    ↓
modules/[module]/topics/index.js   (merges meta + Content)
    ↓
modules/[module]/index.js          (exports bundle: { module, topics, questions, exams })
    ↓
src/data/moduleRegistry.js         (imports all bundles, exposes accessor functions)
    ↓
Pages → Components
```

All data access goes through `moduleRegistry.js` accessors: `allModules`, `getModuleById`, `getModulesBySemester`, `getTopicsForModule`, `getTopicById`, `getQuestionsForModule`, `getExamsForModule`.

### Adding a topic (required steps in order)

1. Create `src/modules/semester-4/[module]/topics/NN-slug.js` — exports `meta` (id, title, source, estimatedMinutes, sections, keyTakeaways, examFocus, pitfalls)
2. Create `src/modules/semester-4/[module]/topics/NN-slug.mdx` — MDX body
3. Wire both into `topics/index.js` — import meta + Content, export merged array entry
4. Add topic definition to `module.js` topics array (id must match meta.id)
5. No changes to `moduleRegistry.js` needed (it re-exports the bundle automatically)

### ID rules (strictly enforced)

- Topic ID must be identical across: `module.js` topics entry → `meta.id` in `.js` → `NN-slug` filename
- Section `id` values in `meta.sections[]` must match `<section id="...">` anchors in the `.mdx` (used by FullContentView TOC scroll-spy)
- All IDs: lowercase, URL-safe, hyphen-separated, no umlauts or special characters

### Routing

Routes defined in `src/app/config.js` (ROUTES constants) and registered in `src/app/routes.jsx`. All routes are nested under `AppLayout` (fixed 236px sidebar + content area).

### State persistence

`src/app/storage.js` handles all localStorage: completed topics, last viewed topic, quiz results, task state, theme preference. No other persistence layer exists.

### Theme system

`src/styles/tokens.css` is the **sole palette file** — defines `--color-*` tokens for light (`:root`) and dark (`:root[data-theme="dark"]`). `src/styles/globals.css` bridges shadcn/ui semantic variables (`--background`, `--card`, etc.) to those tokens. `src/app/theme.js` toggles both `data-theme` attribute and `.dark` class in lockstep.

**Never add a second color palette or a separate `.dark {}` color block.** New components use Tailwind semantic utilities (`bg-card`, `text-foreground`, `border-border`, `bg-muted`, `hover:bg-accent`).

### Component patterns

- **Path alias**: `@/` → `src/` (configured in both `vite.config.js` and `jsconfig.json`)
- **Cards**: white surface, `border-border`, `rounded-xl`, hover lift (−1px translate + `--shadow-md`)
- **Tiles**: colored monogram/number, shared identity affordance (module initials, semester number)
- **Segmented controls**: `bg-muted` track, `p-1`, active pill = `bg-card` + cobalt label — one pattern for tabs, filters, view toggles
- **TopicCard/ModuleCard**: real Lucide icons (never empty bordered spans), tight title+meta rhythm, full-row hover
- Motion: 120–200ms ease-out, transform/opacity/color only. No page-load choreography

### MDX content conventions

**Figure fidelity comes first** (`docs/TOPIC_BUILD_SPEC.md` §2.0): every informative source figure is reproduced as exactly as possible and sensible — same chart type, axes, scale, categories, labels and values (taken from the source, never estimated), or a cropped original when a rebuild is not sensible. Source exercises are rebuilt with `<Exercise>`; self-authored quizzes stay in `questions.js` / `exams.js`. Reference implementation: `src/modules/semester-5/data-science/`.

The approved pilot topic (`05-grundlagen-der-portfoliotheorie.mdx`) is the style reference:
- Card blocks per concept with strong block separation
- `<Columns>` for 2–3 cards side-by-side
- `<Exam>` inline marker for exam-relevant phrases
- `<Callout type="examfocus">` for exam-central sections
- `<Card title tone={...} exam>` for purple-framed exam blocks
- `<h3>` / `###` headers render as accent-bar separators
- Bullets over prose (hefteintrag/uni-skript style)
- KaTeX for math formulas

## Agent workflows

`.claude/agents/` contains specialized agent instructions for content work. `.claude/workflows/build-remaining-topics.js` is a multi-phase workflow (Recon → Build → Wire → Audit → Quality → Exams) for the remaining topics (27: AM 8, BF 9, HR 10; AM Kap. 5 is the already-built gold standard). The build spec — including the verified source→topic mapping — lives at `docs/TOPIC_BUILD_SPEC.md`. Always read that spec before bulk-building topics.

## Key constraints

- **No hardcoded colors** anywhere outside `tokens.css`. Module identity uses `--color-module-{blue,purple,teal,orange,pink,green}`.
- **Sidebar fixed at 236px**, switches to overlay drawer at <900px. Content max-width 1080px.
- **WCAG AA**: body text ≥4.5:1, UI elements ≥3:1, verified on cool gray canvas + white cards in both themes. Color is never the sole carrier of meaning.
- The anti-pattern for this project is "generic shadcn starter" (grayscale neutrals, default radii, no identity). Every component must contribute to the cobalt+cool-gray system.
