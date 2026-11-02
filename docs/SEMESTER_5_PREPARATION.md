# Semester 5: Vorbereitung Data Science

Stand: 2026-11-02. Alle acht Topics der vorliegenden Skripte (Kapitel 1–4, Folien 1–229) sind gebaut und registriert.
Für die Kapitel 5–8 (Normalverteilung, Hypothesentests, Lineare Regression, Hausarbeit) liegen noch keine Skripte vor.

## Bewertung

Die bestehende React-/Vite-/MDX-Architektur nimmt Semester 5 ohne neue Dependencies auf.
Semester 5 bleibt in `src/data/semesters.js` als `planned` geführt, enthält jetzt aber `data-science`.
Die Registry enthält neben den vier Modulen aus Semester 4 das Data-Science-Bundle. Die Semesterseite filtert
Module über `module.semesterId`; Routing und Suche sind grundsätzlich modulübergreifend angelegt.

Gelesen: `AGENTS.md`, `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, `docs/TOPIC_BUILD_SPEC.md`,
Modultemplate und Asset-Management-Pilot. Die historischen Build-Zählungen und Semester-4-Pfade
in der Topic-Spezifikation sind keine aktuelle Bestandsliste für Semester 5.

## Quellenbestand

Originalordner: `sources/semester-5/Data Science/`. Zu allen vier PDFs liegen inzwischen gleichnamige
Markdown-Dateien im Unterordner `MD/` vor. Originale bei der Umsetzung erhalten; Ordner nicht beiläufig umbenennen.
Der bestehende Ordnername weicht von der Slug-Konvention in `sources/README.md` ab, verhindert
aber keine Einbindung. Vorgeschlagener App-Modul-Slug: `data-science`.

Offizieller Modultitel laut Titelfolie: **Analyse von Finanzdaten & Data Science**.
Dozent: Prof. Dr. Christian Schmitt. Kurzbezeichnung für die App: **Data Science**.

| Quelle (jeweils PDF und MD) | PDF-Seiten | Gedruckte Folien | Stand |
| --- | ---: | --- | --- |
| `1_Data Science_Einstieg` | 21 | 1–21 | V26-10-07 |
| `2_Data Science_Grundlagen quantitativer Datenanalyse` | 45 | 22–66 | V26-10-07 |
| `3_Data Science_Einführung R` | 35 | 67–101 | V26-10-07 |
| `4_Data Science_Explorative Datenanalyse` | 128 | 102–229 | V26-10-25 |

Gesamt: 229 PDF-Seiten mit fortlaufenden Foliennummern. Die Seiten-/Folienzuordnung ist geprüft;
eine vollständige fachliche Rekonstruktion aller Abbildungen und Formeln steht noch aus.

### Prüfungsform zuerst berücksichtigen

Quelle: Einstieg, Folie 7 (PDF-Seite 7), zusätzlich visuell geprüft:

- Hausarbeit: Analyse eines Finanzdatensatzes, ca. 1.500–2.500 Wörter, 75 % der Modulnote.
- Präsentation: 15 Minuten, 25 % der Modulnote.
- Beide Teilleistungen müssen mindestens mit 4,0 bewertet werden.

Inhalte deshalb auf Methodenauswahl, Interpretation, R-Anwendung und wissenschaftliche Darstellung
ausrichten. Quizfragen können das Lernen unterstützen; keine reale schriftliche Klausur oder einen
Prüfungstermin behaupten. `examDate: null`; `exams` als leeres Array exportieren.
Wissenschecks zum Pilot werden ausschließlich in `questions.js` gepflegt.
Das bestehende Metadatenfeld `examFocus` kann prüfungsrelevante Kompetenzen aufnehmen.
Ein neues Prüfungsformat oder eine neue Aufgaben-UI ist für den ersten Content-Aufbau nicht nötig.

## Vorgeschlagene Topic-Zuordnung

Kapitel 4 entlang seiner tatsächlichen Unterkapitel aufteilen. So entstehen zunächst acht Topics.
Der Einstieg verwendet bereits `ds-einfuehrung`; alle übrigen IDs bleiben Vorschläge. Präfix `ds-` verhindert Kollisionen mit vorhandenen
IDs wie `einfuehrung`. Dateimuster: `NN-<topic-id>.js` und `.mdx`; `meta.id` und `module.js` verwenden
die Topic-ID ohne numerischen Dateipräfix, entsprechend dem bestehenden Pilot-Pattern.

| Datei-Basis | Inhalt | Gedruckte Folien | PDF-Seiten innerhalb der Quelle |
| --- | --- | --- | --- |
| `01-ds-einfuehrung` | Organisation, Ziele, Forschungsbeispiel, Daten und Modell | 1–21 | Einstieg: 1–21 |
| `02-ds-grundlagen-quantitativer-datenanalyse` | Messen, Skalen, Gütekriterien, Kausalität, Simpson-Paradoxon, Stichproben, PPDAC, Installation | 22–66 | Grundlagen: 1–45 |
| `03-ds-einfuehrung-in-r` | R/RStudio/mosaic, Formelsyntax, Datenworkflow, tidy data, Transformation und Befehle | 67–101 | Einführung R: 1–35 |
| `04-ds-eda-datenimport` | Kapitel-4-Einordnung und 4.1: CSV-Import, Struktur, Datenprüfung | 102–110 | EDA: 1–9 |
| `05-ds-eda-kategoriale-daten` | 4.2: Häufigkeiten, Tabellen, kategoriale Verteilungen und Vergleiche | 111–139 | EDA: 10–38 |
| `06-ds-eda-numerische-daten` | 4.3: Verteilungen, Lage, Streuung, Standardisierung, Boxplots und Gruppen | 140–194 | EDA: 39–93 |
| `07-ds-eda-zusammenhaenge` | 4.4: Streudiagramme, Kovarianz/Korrelation, Anscombe, Finanzdaten und Renditen | 195–225 | EDA: 94–124 |
| `08-ds-eda-zusammenfassung` | 4.5: Grafikregeln, Diagrammwahl und Kennzahlen-/R-Befehlsübersicht | 226–229 | EDA: 125–128 |

Die Spannen dienen der vollständigen Quellenabdeckung; bei der Ausarbeitung jede Section genauer
zuordnen und Deckblätter, Agenden, Übungs-/Lösungspaare sowie Literatur gesondert erfassen.
Lernzeiten und Abschnittsgrenzen erst nach vollständiger Sichtung der jeweiligen Quelle festlegen.

## Vor dem Inhaltsaufbau auflösen oder sichtbar festhalten

1. **Agenden widersprechen sich.** Einstieg Folie 8 nennt nach Normalverteilung lineare Regression
   und Regressionsdiagnostik; Folie 11 sowie die späteren Skripte nennen Hypothesentests und
   lineare Regression. Keine verbindliche Kapitel-5-bis-8-Struktur allein daraus erzeugen.
   Eigene Quellen für Normalverteilung, Hypothesentests/Regressionsdiagnostik, Regression und
   Hausarbeit liegen im untersuchten Semester-5-Ordner noch nicht vor.
2. **Markdown ist eine Arbeitshilfe.** Doppelte OCR-Fußzeilen, beschädigte Tabellen und unleserliche
   Formelzeichen sind sichtbar. Formeln, Diagramme, Hervorhebungen und Zahlen am PDF prüfen.
   Stichprobe: Renditeformeln auf Folie 218 (EDA-PDF-Seite 117) visuell lesbar, im Text beschädigt.
3. **Daten fehlen für reproduzierbare Übungen.** EDA verweist auf `tips.csv` aus Moodle; im
   Semester-5-Quellenordner liegt keine CSV. Ergebnisse aus Folien können statisch erklärt werden,
   ein vollständig reproduzierbarer lokaler Analyseablauf braucht den zugehörigen Datensatz.
   Yahoo-Finance-Beispiele benötigen für den Abruf Internet; keine aktuellen Kurse als historischen
   Folienbestand ausgeben. Für Offline-Reproduktion wäre eine passende lokale Datendatei nötig.
4. **Installationsanleitungen sind Quellenstand.** Historische Betriebssystem-/Versionshinweise
   nicht ungeprüft als aktuelle Empfehlung formulieren. Eine Aktualisierung wäre separat anhand
   offizieller Dokumentation zu prüfen.

## Technische Einbindung

Umgesetzte Basis für den Pilot und die späteren Kapitel:

```text
src/modules/semester-5/data-science/
  module.js
  index.js                 # bundle = { module, topics, questions, exams }
  questions.js
  exams.js
  topics/
    index.js               # meta + MDX-Default-Export => { ...meta, Content }
    NN-ds-*.js
    NN-ds-*.mdx
src/data/moduleRegistry.js  # neues Bundle importieren und bundles ergänzen
src/data/semesters.js       # data-science zu Semester 5 zuordnen
```

- Bestehendes Modultemplate verwenden; `semesterId: 'semester-5'`, offizieller Titel,
  kurze Bezeichnung und vorhandener Modul-Farbtoken. Keine neue Palette.
- Topic-Metadaten mit `source`, `sections[].pages`, `keyTakeaways`, `examFocus`, `pitfalls`;
  jede Section-ID stimmt exakt mit dem MDX-Anker überein. Nur fertige Inhalte als verfügbar markieren.
- `CONTENT_INDEX.md` und Quellenzuordnung bei tatsächlicher Registrierung ergänzen.
- Die Semesterseite bietet direkte Links für den Wechsel zwischen Semester 4 und 5.
- Der Modulbereich verlinkt das über Vite gebündelte Original-PDF und zeigt unter Prüfungen die
  tatsächliche Hausarbeits-/Präsentationsleistung; es wird keine Probeklausur erfunden.
- Semesterstatus separat fachlich festlegen. Das Hinzufügen von Material bedeutet noch nicht
  automatisch, dass Semester 4 abgeschlossen oder Semester 5 global aktiv sein soll.

### Bestehende Annahmen bei einem Semesterwechsel beachten

- `Home.jsx` verwendet in mehreren Bereichen `semesters[0]`; `Sidebar.jsx` ebenso für den
  Semesterlink und `allModules[0]` für den Modulstandard. Ein Wechsel von `status` allein ändert
  diese Ziele nicht. Vor Aktivierung von Semester 5 eine gemeinsame Auswahl des aktuellen Semesters
  und einen erreichbaren Semesterwechsel vorsehen; bloßes Umsortieren wäre eine fragile Lösung.
- Lernfortschritt in `src/app/storage.js` wird nur nach Topic-ID gespeichert. IDs müssen deshalb
  auch zwischen Modulen eindeutig bleiben. Für neue Data-Science-Topics das `ds-`-Präfix verwenden;
  bestehende IDs und gespeicherten Fortschritt in dieser Aufgabe nicht migrieren.
- `src/data/dashboard.js` enthält weiterhin Demo-Termine und Lernvorschläge aus Semester 4.
  Diese sind kein Nachweis echter Abgaben oder Prüfungen und dürfen nicht auf Data Science
  übertragen werden. Semesterbezogene Dashboard-Filter wären eine eigene lokale Erweiterung.

## Didaktische und visuelle Umsetzung

- Definitionen: `DefinitionBox`; Skalen/Gütekriterien: `CompareCard` und `DataTable`.
- Skalenniveau: `DecisionTree`; PPDAC/Datenworkflow: `Diagram` oder `Timeline`.
- Formeln mit `Formula`/KaTeX; R-Code über vorhandene MDX-Codeblöcke, ohne neue Runtime.
- Belegte Daten mit `DataChart`; keine erfundenen Punktwolken oder nachgebauten Originalkurven
  ohne zugrunde liegende Daten. `DataChart` unterstützt derzeit line, bar, area und scatter;
  Histogramm und Boxplot sind keine eigenen unterstützten Typen. Vor einer Erweiterung konkrete
  Quellenanforderung prüfen; Tabellen und Formeln können die Kennzahlen bereits statisch erklären.
- Übungsfolien im Lerntext als statische Erklärung des belegten Lernpunkts verarbeiten;
  eigentliche Fragen ausschließlich in `questions.js`/`exams.js`. Offene Fragen ohne Musterlösung
  nicht durch erfundene Lösungsaussagen vervollständigen.
- Kein Topic-CSS, keine neuen Farben, keine Reveal-Elemente für Kerninhalte.

## Empfohlene Reihenfolge und Abnahme

1. Einstieg vollständig aus MD + PDF als Pilot aufbereiten und mit Quellen-/Folienbelegen versehen.
2. Pilot-Bundle registrieren, Semesterzuordnung und Erreichbarkeit prüfen.
3. Quellenabgleich, dann didaktische/visuelle Qualitätsrunde gemäß Projektpipeline.
4. Grundlagen und R, danach die fünf EDA-Unterkapitel ausarbeiten; Fragen erst auf geprüfter Basis.
5. IDs, Section-Anker, Bundle-Exporte und Quellenabdeckung prüfen; Lint und Build ausführen.
6. Neue Routen, Suche und Lernfortschritt im Browser auf Desktop/Mobile prüfen; besonders Code,
   Formeln und Tabellen auf Overflow kontrollieren.

## Abnahme des Einstiegspilots

Umgesetzt: vollständiges Modul-Bundle, Pilot `ds-einfuehrung`, neun Wissenschecks und Original-PDF.
Die Registry, Semesterzuordnung, Inhaltsübersicht und Topic-Spezifikation sind ergänzt.
Route: `/topic/data-science/ds-einfuehrung`.

- Unabhängiger Fidelity-Audit gegen alle 21 Folien einschließlich Bildfolien: keine fachlichen
  Befunde. Nach der mobilen Agenda-Verbesserung wurden die Zuordnung sowie alle neun
  Quiz-Antwortschlüssel und Erklärungen erneut freigegeben.
- Acht Sections mit passenden Metadaten-Ankern, acht SourceNotes, acht Takeaways, sieben
  Prüfungsfokus-Punkten und sieben Prüfungsfallen. Keine doppelten DOM-IDs, Abfragen im MDX,
  Click-Walls, Topic-Styles oder erfundenen Diagrammdaten.
- Lint: 0 Fehler, vier bereits bestehende Warnungen. Build: erfolgreich; bestehende Warnung
  für Chunks über 500 kB. Keine neuen Dependencies.
- Chromium gegen den Produktionsbuild: Semesterwechsel inklusive Filterreset, Modul und
  Prüfungsleistung, PDF (HTTP 200; 1.588.215 Bytes), Inhaltsnavigation, Markieren/Rücknahme des
  Lernfortschritts und Persistenz nach Neuladen erfolgreich geprüft.
- Quiz vollständig durchlaufen: neun von neun Antworten korrekt; Ergebnis im Browser gespeichert.
- Darstellung bei 1440, 768, 390 und 360 Pixeln geprüft: kein horizontaler Seiten- oder Tabellen-
  Overflow im Pilot; keine abgeschnittene Modulbeschreibung. Suchergebnisse zeigen auch den
  langen Modultitel vollständig. Screenshots visuell geprüft.
- Hell-/Dunkelwechsel einschließlich Neuladen geprüft. Ein dabei gefundener Fehler der zentralen
  Mermaid-Komponente ist behoben: Diagramme aktualisieren ihre Farbkonfiguration bei Themewechsel.
  Regression am bestehenden Asset-Management-Piloten mit zwei Diagrammen geprüft.
- Keine Konsolenfehler/-warnungen, fehlgeschlagenen Requests oder externen Netzwerkanfragen
  im erfolgreichen Produktions-Smoke-Test. Lokal gebündelte Schriften, Visuals und PDF;
  keine Abhängigkeit von Internetdiensten für den Pilot. Kein Service-Worker-/Offline-Reload-Versprechen.
- Druckmodus: alle acht Sections bleiben sichtbar. Eine vollständige paginierte PDF-/Drucklayout-
  Abnahme sowie physische Mobilgeräte sind damit nicht geprüft.

Belegte lokale UI-Korrekturen: zu lange Suchergebnisse umbrechen, Modulbeschreibung nicht
abschneiden, echte Links statt verschachtelter Link-/Button-Steuerelemente im Modul und die
irreführende Abschlussbehauptung am letzten Topic durch „Wissen vertiefen“ ersetzen.

Visuelle Nachweise unter `output/playwright/`: `data-science-desktop.png`,
`data-science-mobile.png`, `data-science-agenda-mobile.png`, `data-science-model-dark-mobile.png`
und `data-science-search-mobile.png`.

Separater Bestandsbefund außerhalb des Pilots: Die Startseite besitzt weiterhin ein festes
Dashboard-Spaltenlayout und war bei 390 Pixeln in der Browserprüfung nicht vollständig bedienbar.
Die globale Suche wurde deshalb über die Desktop-Startseite geöffnet und ihr Dialog zusätzlich
mobil geprüft. Der mobile Pfad Semesterseite → Semester 5 → Modul → Topic wurde erfolgreich
getestet. Ein allgemeines Dashboard-Redesign gehört nicht zu dieser Content-Umsetzung.

Nächster Content-Schritt: Kapitel 2 (Grundlagen) gemäß obiger Quellenzuordnung. Für den
Einstiegspiloten bestehen nach dieser Abnahme keine offenen fachlichen oder funktionalen Befunde.
