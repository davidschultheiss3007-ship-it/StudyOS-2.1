# Markdown zu StudyOS-2.1-Topic (Claude)

Lies `CLAUDE.md`, `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md`. Nutze `.claude/agents/studyos-md-topic-builder.md`. Erzeuge das Topic als `NN-slug.js` (Metadaten) plus `NN-slug.mdx` (Inhalt), optional mit explizit beauftragter Registrierung. Verwende nur zentrale Learning-Komponenten und semantische Tokens. Keine Topic-UI, kein CSS, keine eigenen Quizfragen in MDX und keine unbelegten Ergänzungen.

Abbildungstreue hat Vorrang (Spec §2.0): Die zugehörige PDF ist maßgeblich für Abbildungen, Formeln, Tabellen und Zahlen. Jede Abbildung so genau wie möglich und sinnvoll nachbauen (gleicher Typ, gleiche Achsen, Werte und Beschriftungen) oder als zugeschnittenes Original einbinden; Übungen aus dem Skript als `<Exercise>`. Prüfe IDs, Section-Anker, Quellen, Lint, Build und jede Abbildung gerendert neben der Folie.
