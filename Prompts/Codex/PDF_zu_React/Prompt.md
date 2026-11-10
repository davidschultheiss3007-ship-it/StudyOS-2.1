# PDF zu StudyOS-2.1-Topic (Codex)

Erstelle aus der angegebenen lokalen PDF ein StudyOS-2.1-Topic. Lies zuerst `AGENTS.md`, `docs/TOPIC_BUILD_SPEC.md`, die Modulstruktur und das Referenz-Topic (`src/modules/semester-5/data-science/`). Verwende den Agenten `studyos-pdf-topic-builder`.

Extrahiere ausschließlich belegte Inhalte samt Seiten-/Folienbezug. Erstelle `NN-slug.js` und `NN-slug.mdx` (bei Bedarf zugeschnittene Originalabbildungen in `assets/`); integriere nur bei Auftrag. Nutze die zentrale Learning-Palette, ohne Topic-CSS, neue UI oder eigene Farben.

Abbildungstreue hat Vorrang (Spec §2.0): Sieh jede Folie als Bild an und lege vor dem Bauen ein Abbildungsinventar an. Datendiagramme und Tabellen mit gleichem Typ, gleichen Achsen, Skalen, Kategorien, Reihenfolge und Beschriftungen nachbauen; Schemata mit gleicher Struktur; Fotos, Screenshots oder nicht sinnvoll nachbaubare Grafiken als zugeschnittenes Original mit Alt-Text; reine Deko weglassen. Kein Wechsel des Diagrammtyps. Werte nicht schätzen: gedruckte Zahlen bzw. R-Ausgaben, dann PDF-Vektorkoordinaten (PyMuPDF `get_drawings()`), dann kalibrierte Pixelauswertung; abgeleitete Werte kennzeichnen, Fehler der Quelle mit Warn-Callout benennen. Übungen aus dem Skript als `<Exercise>` mit Musterlösung; eigene Quiz- und Prüfungsfragen ausschließlich in `questions.js` beziehungsweise `exams.js`.

Prüfe Quellenabdeckung, IDs, Anker, Lint und Build, vergleiche jede Abbildung gerendert neben der Folie (Desktop hell, Mobil dunkel) und berichte das Abbildungsinventar.
