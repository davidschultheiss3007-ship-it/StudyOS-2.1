# Markdown zu StudyOS-2.1-Topic (Codex)

Erstelle aus der angegebenen Markdown-Quelle ein StudyOS-2.1-Topic. Lies zuerst `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md` sowie Modulstruktur und Referenz-Topic (`src/modules/semester-5/data-science/`). Verwende den Agenten `studyos-md-topic-builder`.

Lieferumfang: `topics/NN-slug.js` mit reinem `meta`-Export, `topics/NN-slug.mdx`, bei Bedarf zugeschnittene Originalabbildungen in `assets/` und – nur wenn beauftragt – Registrierung in `topics/index.js`/`module.js`. Keine Topic-Komponenten oder CSS. Nutze zentrale Learning-Komponenten, semantische Tones und Quellenangaben. Keine erfundenen oder stillschweigend gekürzten Inhalte.

Abbildungstreue hat Vorrang (Spec §2.0): Markdown ist Textquelle, die zugehörige PDF ist maßgeblich für Abbildungen, Formeln, Tabellen und Zahlen. Sieh jede Folie als Bild an und lege vor dem Bauen ein Abbildungsinventar an. Datendiagramme und Tabellen mit gleichem Typ, gleichen Achsen, Skalen, Kategorien, Reihenfolge und Beschriftungen nachbauen; Schemata mit gleicher Struktur; Fotos, Screenshots oder nicht sinnvoll nachbaubare Grafiken als zugeschnittenes Original mit Alt-Text; reine Deko weglassen. Kein Wechsel des Diagrammtyps, keine geschätzten Werte; abgeleitete Werte kennzeichnen, Fehler der Quelle benennen. Übungen aus dem Skript als `<Exercise>` mit Musterlösung; eigene Wissensabfragen nur in `questions.js`/`exams.js`.

Abschließend IDs, Section-Anker, Lint und Build prüfen, jede Abbildung gerendert neben der Folie vergleichen (Desktop hell, Mobil dunkel) und das Abbildungsinventar berichten.
