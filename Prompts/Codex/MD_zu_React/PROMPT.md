# Markdown zu StudyOS-2.1-Topic (Codex)

Erstelle aus der angegebenen Markdown-Quelle ein StudyOS-2.1-Topic. Lies zuerst `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md` sowie Modulstruktur und Goldstandard-Topic. Verwende den Agenten `studyos-md-topic-builder`.

Lieferumfang: `topics/NN-slug.js` mit reinem `meta`-Export, `topics/NN-slug.mdx` und – nur wenn beauftragt – Registrierung in `topics/index.js`/`module.js`. Keine Topic-Komponenten oder CSS. Nutze zentrale Learning-Komponenten, semantische Tones und Quellenangaben. Keine Wissensabfragen in MDX; diese gehören in `questions.js`/`exams.js`. Keine erfundenen oder stillschweigend gekürzten Inhalte. Abschließend IDs, Section-Anker, Lint und Build prüfen.
