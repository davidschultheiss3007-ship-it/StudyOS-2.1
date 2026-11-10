# GEMINI.md

Arbeite in diesem Repository nach `AGENTS.md`. Lies zusätzlich vor Änderungen `CLAUDE.md`, bei UI-Arbeit `DESIGN.md` und `PRODUCT.md`, bei Topic-Arbeit zwingend `docs/TOPIC_BUILD_SPEC.md`.

Wichtige Grenzen:

- StudyOS 2.1 nutzt React 19, Vite, Tailwind 4, shadcn/ui `base-nova` und MDX.
- Topic-Metadaten liegen in `NN-slug.js`, Inhalte in `NN-slug.mdx`; `topics/index.js` führt beide zusammen.
- Selbst verfasste Quiz und Prüfungen gehören ausschließlich in `questions.js` beziehungsweise `exams.js`; Übungen aus dem Skript werden als `<Exercise>` im Kapitel nachgebaut.
- Abbildungstreue hat Vorrang (`docs/TOPIC_BUILD_SPEC.md` §2.0): Abbildungen der Quelle so genau wie möglich und sinnvoll nachbauen (gleicher Typ, gleiche Achsen, Werte und Beschriftungen) oder als zugeschnittenes Original einbinden.
- Keine Topic-spezifischen Komponenten, Styles oder Farbpaletten ergänzen; zentrale Learning-Komponenten und semantische Tokens verwenden.
- Keine fachlichen Inhalte erfinden oder ohne Auftrag kürzen.
- Keine Dependencies, Refactors oder Git-Aktionen ohne Notwendigkeit beziehungsweise ausdrücklichen Auftrag.
- Nach Änderungen Lint und Build ausführen und `TASK_LOG.md` aktualisieren.
