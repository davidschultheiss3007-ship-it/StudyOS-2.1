# Content Index

## Semester 4

| Modul | Topic-Verzeichnis | Fragen | Prüfungen | Status |
| --- | --- | --- | --- | --- |
| Asset Management | `src/modules/semester-4/asset-management/topics/` | `questions.js` | `exams.js` | Inhalte vorhanden |
| Behavioral Finance | `src/modules/semester-4/behavioral-finance/topics/` | `questions.js` | `exams.js` | Inhalte vorhanden |
| Human Resources | `src/modules/semester-4/human-resources/topics/` | `questions.js` | `exams.js` | Inhalte vorhanden |
| Business English | `src/modules/semester-4/business-english/topics/` | `questions.js` | optional/leer | geplant |

## Semester 5

| Modul | Topic-Verzeichnis | Fragen | Prüfungen | Status |
| --- | --- | --- | --- | --- |
| Analyse von Finanzdaten & Data Science | `src/modules/semester-5/data-science/topics/` | `questions.js` | `exams.js` (leer; Hausarbeit und Präsentation) | Kapitel 1–4 vollständig (8 Topics); Kapitel 5–8 ohne Quellen |
| Corporate Financial Management | `src/modules/semester-5/corporate-financial-management/topics/` | `questions.js` (18 Fragen) | `exams.js` (45-Punkte-Training) | Alle drei vorliegenden Skripte: Einführung, 2.1 Finanzberichte, 2.2/2.3 Shareholder Value und Kapitalkosten |

Quelleninventar und Plan für die weiteren Kapitel: `docs/SEMESTER_5_PREPARATION.md`.

## Verbindlicher Topic-Vertrag

Jedes inhaltlich ausgearbeitete Topic besteht aus `NN-slug.js` (Metadaten) und `NN-slug.mdx` (Inhalt). Die Zusammenführung erfolgt ausschließlich in `topics/index.js`. Topic-ID, Dateislug und Eintrag in `module.js` müssen identisch sein; Section-IDs in den Metadaten müssen zu den MDX-Section-Ankern passen.

Die aktuelle Quellenzuordnung und der Komponentenvertrag stehen in `docs/TOPIC_BUILD_SPEC.md`. Diese Datei ist die maßgebliche Inhaltsübersicht für Builder und Auditoren.
