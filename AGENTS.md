# AGENTS.md

## Projektziel

StudyOS 2.1 ist eine lokale, datengetriebene Lernplattform auf Basis von React 19, Vite, Tailwind 4 und shadcn/ui im Stil `base-nova`. Maßgeblich sind außerdem `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md` und für Lerninhalte `docs/TOPIC_BUILD_SPEC.md`.

## Arbeitsregeln

- Vor Änderungen Repo-Struktur, Git-Status und relevante Patterns prüfen.
- Änderungen klein, lokal und nachvollziehbar halten. Keine fremden Bereiche refactoren.
- Keine neuen Dependencies ohne belegte Notwendigkeit.
- Keine Quellen, Zahlen, Formeln oder fachlichen Aussagen erfinden.
- Keine Inhalte stillschweigend kürzen.
- Keine Commits, Branches oder Pushes ohne ausdrücklichen Auftrag.
- Nach jeder Umsetzung `TASK_LOG.md` kurz aktualisieren.

## Architekturvertrag

Die Content-Registrierung ist verbindlich:

```text
topics/NN-slug.js + topics/NN-slug.mdx
  -> topics/index.js
  -> module/index.js: { module, topics, questions, exams }
  -> src/data/moduleRegistry.js
  -> Pages und Components
```

- `NN-slug.js` exportiert ausschließlich `meta`; `NN-slug.mdx` enthält den Inhalt.
- `meta.id`, Dateiname und Topic-ID in `module.js` müssen übereinstimmen.
- `meta.sections[].id` muss exakt einer `<section id="...">` in MDX entsprechen.
- Quizfragen liegen ausschließlich in `questions.js`, Probeklausuren ausschließlich in `exams.js`.
- `topics/index.js` importiert Metadaten und MDX-Default-Export und führt sie als `{ ...meta, Content }` zusammen.
- Neue Module exportieren in `index.js` den vollständigen Bundle-Vertrag einschließlich `exams`.

## Design- und Content-Regeln

- `src/styles/tokens.css` ist die einzige Farbpalette. Semantische Tailwind-/shadcn-Tokens verwenden.
- Keine Topic-spezifische UI, kein Topic-CSS und keine hartcodierten Farben einführen.
- Die zentrale Learning-Palette unter `src/components/learning/visuals/` verwenden.
- Inhalte sind standardmäßig statisch und beim ersten Rendern vollständig sichtbar.
- Keine Quiz-, Reveal- oder Selbsttest-Elemente in MDX.
- Visualisierung nach Stofftyp wählen; benachbarte Sections dürfen nicht schematisch gleich aussehen.
- Formeln über KaTeX/`Formula`, Daten über `DataChart`, Prozesse über `Diagram` und strukturierte Vergleiche über die vorhandenen Learning-Komponenten darstellen.
- `docs/TOPIC_BUILD_SPEC.md` vor jeder Topic-Arbeit vollständig lesen.

## Spezialisierte Codex-Agenten

Unter `.codex/agents/` stehen fünf Rollen bereit:

- `studyos-pdf-topic-builder`: Topic-Bundle aus lokaler PDF-Quelle.
- `studyos-md-topic-builder`: Topic-Bundle aus lokaler Markdown-Quelle.
- `content-fidelity-auditor`: Quellenabgleich ohne Redesign.
- `topic-quality-upgrader`: lokale didaktische und visuelle Verbesserung.
- `exam-content-builder`: Quiz- und Klausurinhalte für `questions.js`/`exams.js`.

Builder -> Fidelity Audit -> Quality Upgrade -> Exam Builder ist die Standardpipeline. Agenten dürfen ihre Scope-Grenzen nicht überschreiten.

## Qualitätssicherung

Soweit relevant prüfen:

1. `npm run lint`
2. `npm run build`
3. korrekte IDs, Imports, Exports und relative Pfade
4. keine Konsolenfehler, Overflows oder abgeschnittenen Inhalte
5. Desktop und Mobile bei visuellen Änderungen
6. Diff-Scope: keine unbeabsichtigten Änderungen an Topics, Components, Pages oder Styles

Am Ende geänderte Dateien, Umsetzung, Prüfungen und offene Risiken kurz nennen.
