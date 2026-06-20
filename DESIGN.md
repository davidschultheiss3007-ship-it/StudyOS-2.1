# Design

## Theme

Cool, calm, focused. A cobalt-on-cool-gray product system for long study sessions.
Light is the default; dark is a faithful inversion. The canvas is a cool gray
(never pure white) so white cards lift off it; cobalt is reserved for action,
current state, and module identity.

## Token architecture (single source of truth)

`src/styles/tokens.css` is the ONLY palette. It defines `--color-*` for surfaces,
borders, text, accent, semantic, and per-module colors, themed via
`:root` (light) and `:root[data-theme="dark"]` (dark).

`src/styles/globals.css` contains a **bridge**: the shadcn/ui semantic variables
(`--background`, `--foreground`, `--card`, `--border`, `--muted`, `--accent`,
`--primary`, `--ring`, `--sidebar-*`) are aliased to the tokens.css `--color-*`
variables. Because the aliases reference variables (not static values) and the
theme toggle sets `data-theme="dark"` + `.dark` in lockstep, dark mode resolves
through tokens.css automatically — there is no separate `.dark` color block.

Do NOT reintroduce a second grayscale palette. New components use Tailwind
semantic utilities (`bg-card`, `text-foreground`, `text-muted-foreground`,
`border-border`, `bg-muted`, `hover:bg-accent`) which now carry the cobalt system.

## Color

- Canvas `--color-bg-base` #eef1f6 (dark #0a0e16). Cards `--color-bg-card` #fff
  (dark #141b29). Card hover `--color-bg-card-hover` #f5f8fc (dark #1a2233).
- Ink `--color-text-primary` #15213b; secondary #41506b; muted #5b6880. All ≥4.5:1.
- Accent cobalt `--color-accent` #3b76f6 (dark #4f86f7). Used for primary actions,
  current selection, links, and active nav state only.
- Module identity palette `--color-module-{blue,purple,teal,orange,pink,green}`,
  surfaced as a tinted monogram tile (`color-mix(accent 14%, transparent)` bg +
  accent text) and the module's progress bar. No colored side-stripes.
- Semantic: success #16a34a, warning #d97706, error #e11d48, info #0ea5e9, each
  with a `-subtle` tint for badges and surfaces.

## Typography

One family: **Geist Variable** (`--font-family`), loaded via @fontsource. Body
weight ~450 for presence on the light canvas; headings 600–700, tracking tightened
(-0.015 to -0.02em on display sizes). Scale (StudyOS, not Tailwind default):
sm .875 / base .9375 / md 1.0625 / lg 1.25 / xl 1.5 / 2xl 1.875 / 3xl 2.25rem.
KaTeX for math, in-content visuals via the learning/visuals system.

## Components

- **Tile**: rounded-[14px] colored monogram/number tile, the shared identity
  affordance (semester number, module initials, dashboard icons).
- **Card**: white surface, `border-border`, rounded-xl (14px), `--shadow-card`.
  Hover lift (-1px translate, border tint, `--shadow-md`). Never nested.
- **Segmented control**: `bg-muted` track, `p-1`, active pill = `bg-card` +
  `--shadow-sm` + cobalt label. One pattern for tabs, filters, and view toggles.
- **TopicCard / list rows**: real Lucide circle/check indicator (never an empty
  bordered span), tight title+meta rhythm, full-row hover + focus ring.
- **Badge / ProgressBar / Button**: cobalt primary, cool-neutral secondary.

## Learning palette (in-content visuals)

`src/components/learning/visuals/` holds the MDX-injected components for topic
content (auto-available in `.mdx` via `visuals/index.jsx`; heavy libs lazy-loaded).
Tone is always carried by **full border + tinted surface + tone-colored title/dot**,
never a side-stripe. All colors resolve through the `--learning-*` tokens, so dark
mode is automatic.

- **Card / Columns / Exam**: the card-dense "Hefteintrag" primitives — a framed
  study block (tone, optional `exam` purple frame + "Klausur" badge), a responsive
  side-by-side container, and an inline purple exam-phrase marker.
- **Figures**: `Formula` (KaTeX), `DataChart` (Recharts), `Diagram` (Mermaid),
  `Scene3D` + `Surface3D` (R3F: risk/return cloud and parametric utility/value
  surfaces, wrapped in `Explorable` as optional enrichment), `Timeline`,
  `QuadrantMatrix`, `ProportionBar`, `CompareCard`, `SpectrumAxis`, `DecisionTree`,
  `KpiGrid`, `DataTable`, `DefinitionBox`, `Callout`, `SourceNote`.
- Authoring contract + component API: `docs/TOPIC_BUILD_SPEC.md`.

## Motion

Product-grade: 120–200ms, ease-out, transform/opacity/color only. Hover and press
feedback on interactive surfaces (cards lift, buttons/rows nudge). Full
`prefers-reduced-motion` collapse (already global). No page-load choreography.

## Layout

Fixed left sidebar (236px) + content (max 1080px) + optional right rail (332px on
the dashboard). PageShell controls page padding. Responsive is structural
(sidebar → overlay drawer under 900px), not fluid type.
