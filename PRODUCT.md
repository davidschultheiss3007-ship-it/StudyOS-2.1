# Product

## Register

product

## Users

A university student (currently Semester 4: Asset Management, Behavioral Finance,
HR, Business English) preparing for written exams. Context: focused study sessions
at a desk, often returning daily to continue where they left off. The job to be
done is "show me what to study next and let me get into the material with zero
friction." Everything is local-first / offline (data lives in the browser).

## Product Purpose

StudyOS is a personal learning operating system: a dashboard that plans the week,
tracks progress per module, and surfaces structured learning content, quizzes, and
paper-style practice exams. Success looks like the student opening the app and
immediately knowing the single next action, then disappearing into the content.
It is the successor to "StudyOS 2.0" and must clearly exceed it in polish.

## Brand Personality

Calm, precise, trustworthy, academic-but-modern. Three words: focused, crafted,
quietly confident. It should feel like a well-made instrument (Linear / Things /
Notion territory), not a gamified consumer app. The cobalt accent signals action
and focus; the cool gray canvas keeps long study sessions easy on the eyes.

## Anti-references

- A generic, unfinished shadcn/Tailwind starter (grayscale neutral surfaces,
  default radii, no identity). This was the failure mode of the 2.1 draft.
- Gamified, badge-heavy, saturated edtech (Duolingo-style).
- Thin decorative side-stripes on cards that read as rendering artifacts.
- Anything that makes the student stop and parse a subtly-off component.

## Design Principles

1. **One coherent surface system.** A single token source of truth; no two
   palettes competing. Every neutral is cool-tinted toward the cobalt identity.
2. **The next action is always obvious.** Hierarchy and the accent color point at
   exactly one thing per screen.
3. **Finished, not flashy.** Earned familiarity over novelty. Motion conveys state,
   never decoration. The tool disappears into the task.
4. **Consistent affordances.** Same tile system, same card vocabulary, same focus
   ring everywhere. A "module" looks like a module on every screen.
5. **Exceed 2.0 through craft, not features.** The win is in spacing, weight,
   states, and the invisible details.

## Accessibility & Inclusion

Target WCAG AA: body text ≥4.5:1, large text/UI ≥3:1, verified against the cool
gray canvas and white cards in both light and dark themes. Full `prefers-reduced-motion`
support (already collapses motion globally). Visible focus ring on every interactive
element. Color is never the sole carrier of meaning (status uses label + tint).
