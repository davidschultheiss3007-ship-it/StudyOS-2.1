# Corporate Financial Management: Quellen und Umsetzung

Stand: 2026-11-03. PDF ist auf ausdrücklichen Nutzerwunsch die Primärquelle; Markdown dient ausschließlich zur Klärung und Gegenprüfung. Keine externe fachliche Ergänzung.

| Topic-ID | PDF unter `sources/semester-5/Corporate Financial Management/` | Abdeckung |
| --- | --- | --- |
| `cfm-einfuehrung` | `1.CorpFM - Vorlesung 1.pdf` | 16 Seiten/Folien, Organisation und Kapitel 1, V26-10-13 |
| `cfm-finanzberichte-und-kennzahlen` | `2-CorpFM - Vorlesung 2 Grundlagen.pdf` | 47 Seiten/Folien, Kapitel 2.1 einschließlich Corporate Governance, V26-10-13 |
| `cfm-shareholder-value-management` | `3.CorpFM - Vorlesung 2.2 Shareholder Value Management.pdf` | 34 Seiten/Folien, Kapitel 2.2 und ab Folie 15 auch 2.3 WACC/CAPM, V26-11-02 |

Die drei Dateien sind keine Kapitel 1–3 der Gesamtmodulagenda: Die späteren Kapitel zur Beschaffung von Eigen-/Fremdkapital, Finanzierungspolitik und Risikomanagement liegen noch nicht vor. Foliennummern beginnen in jedem PDF erneut bei 1. Quellenangaben nennen deshalb immer das Skript.

## Technische Einbindung

Vollständiges Bundle unter `src/modules/semester-5/corporate-financial-management/`, registriert in `src/data/moduleRegistry.js` und Semester 5. Dateipräfixe 01/02/03 dienen der Reihenfolge; die Topic-ID ohne Dateipräfix entspricht dem bestehenden Projektpattern. Präfix `cfm-` verhindert Kollisionen mit gespeicherten Fortschritts-IDs anderer Module.

Die drei Original-PDFs und die verwendeten Bildausschnitte werden lokal durch Vite gebündelt. Quellenbilder erhalten beschreibende Alt-Texte und Begleittext; sie sind statisch sichtbar. Originalschemata bewahren räumliche Zusammenhänge und Beschriftungen. Formeln und Kennzahlen werden zusätzlich als zugängliche Learning-Komponenten dargestellt. Keine neuen Dependencies, Komponenten oder Topic-Styles.

## Prüfungsrahmen

Vorlesung 1, Folie 5: Klausur zu 100 %, 90 Minuten, Wissensfragen, praxisbezogene Fragen und Single Choice. Formelsammlung laut Skript vorhanden. Kein Prüfungstermin angegeben.

18 Single-Choice-Wissenschecks stehen ausschließlich in `questions.js`. Das Training in `exams.js` umfasst 45 Punkte/45 Minuten zu den vorliegenden Quellen. Dauer und Punkte sind didaktische Festlegungen dieses Trainings und keine Angaben zu einer offiziellen Klausur. Aufgaben behandeln Begriffe, Bilanz, Global-Rechenbeispiele, Agency-Probleme, CAPM und WACC; Lösungen und Quellen sind hinterlegt.

## Quellenwidersprüche

Die Topics kennzeichnen relevante Inkonsistenzen lokal, darunter die ROE-Beispielrechnung und abweichende Kennzahlendefinitionen in den Vergleichstabellen sowie die DCF-Gesamtformel und CML/SML-Beschriftung. Originalgrafiken dokumentieren dabei den Quellenstand. Historische Tabellen, Studien und Rechts-/Governance-Hinweise werden als Skriptinhalt dargestellt; sie sind keine Aktualitätsbehauptung für heutige Markt- oder Rechtsverhältnisse.

Unabhängige visuelle Bewertung und Abnahme: `docs/CFM_VISUAL_AUDIT.md`.

## Technische Abnahme

- Lint: keine Fehler, vier bereits vorhandene Warnungen. Build erfolgreich; bestehende Warnung für große Chunks.
- 24/24 Section-Anker, gültige eindeutige Fragen-IDs und Topic-Zuordnungen, Trainingspunkte 45 = 15 + 15 + 15 geprüft.
- Produktions-Chromium: drei Topics bei 1440/768/390/360 px ohne horizontalen Seitenoverflow, fehlende Bilder, KaTeX-Fehler oder Konsolenfehler. Große native Tabellen dürfen innerhalb ihres Containers horizontal gescrollt werden.
- Semesterzugang, drei Original-PDFs (HTTP 200), Inhaltsnavigation, Training und Quiz (18/18), Fortschrittspersistenz nach Reload erfolgreich.
- Modul- und Trainingsansicht auch bei 360 px ohne Seitenoverflow. Alle 18 Bildlinks öffnen lokal gebündelte Abbildungen; Bilanzzoom exemplarisch tatsächlich geöffnet. WACC-Tabelle enthält alle 20 Zeilen.
- Hell/Dunkel visuell gesichtet; acht Sections des Shareholder-Value-Topics bleiben im Druckmodus sichtbar. Vollständiges paginiertes Drucklayout und physische Mobilgeräte wurden nicht abgenommen.
- Screenshots unter `output/playwright/cfm/`. Reproduzierbare Rohberichte und Zwischenrenderings liegen unter dem ignorierten `tmp/cfm/`.
