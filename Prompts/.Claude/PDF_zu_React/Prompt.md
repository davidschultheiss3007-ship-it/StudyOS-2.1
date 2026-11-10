# PDF zu StudyOS-2.1-Topic (Claude)

Lies `CLAUDE.md`, `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md`. Nutze `.claude/agents/studyos-pdf-topic-builder.md`. Erzeuge aus der lokalen PDF ein quellentreues Topic aus `NN-slug.js` und `NN-slug.mdx`; registriere es nur bei Auftrag. Nutze die zentrale Learning-Palette, keine Topic-Komponenten, kein CSS und keine eigene Farbwelt. Eigene Wissensabfragen gehören in `questions.js`/`exams.js`.

Abbildungstreue hat Vorrang (Spec §2.0): Jede Abbildung so genau wie möglich und sinnvoll nachbauen (gleicher Typ, gleiche Achsen, Werte und Beschriftungen; Werte aus der Quelle statt geschätzt) oder als zugeschnittenes Original einbinden; Übungen aus dem Skript als `<Exercise>`. Prüfe Quellenbezüge, IDs, Anker, Lint, Build und jede Abbildung gerendert neben der Folie.
