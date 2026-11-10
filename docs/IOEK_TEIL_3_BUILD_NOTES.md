# Industrieökonomik Teil 3 – Bau- und Prüfnotizen

## Quellen und Sichtung vor dem Bau

- Primärquelle: `sources/semester-5/Industrieökonomik/Industrieökonomik WS 26-27 Teil 3.pdf`, 29 PDF-Seiten, gedruckte Folien 66–94.
- Ergänzende Primärquelle: `Übungsvertiefung/IÖK Vertiefung und Wiederholung Teil 3.pdf`, eine Seite.
- Jede Seite wurde vor dem MDX-Bau mit PyMuPDF als Bild gerendert und gesichtet (Kontaktbögen mit vier Folien; die Vertiefung einzeln). Markdown nur als Textgegenprobe.
- Temporäre Sichtungsdateien: `tmp/pdfs/ioek3/`.

## Abbildungsinventar (vor MDX festgelegt)

| Folie / PDF-Seite | Informative Darstellung | Weg und Begründung |
| --- | --- | --- |
| 66 / 1 | Methodischer Text | Keine Abbildung; Cards |
| 67 / 2 | Tabelle Menge, Preis, Umsatz, Grenzerlös bei Konkurrenz | A: DataTable, alle acht Zeilen einschließlich leerem Grenzerlös für Menge 0 |
| 68 / 3 | Preis-/Mengeneffekt als Text | Formeln und Card |
| 69 / 4 | Monopoltabelle | A: DataTable, alle acht Zeilen und negative Grenzerlöse |
| 70 / 5 | Offene Verständnisfrage | Exercise; keine eigenständige Musterlösung in Quelle |
| 71 / 6 | Herleitung und Formeln | Formula, sämtliche Gleichungen einschließlich Fixkostenfall |
| 72 / 7 | Gegenüberstellung Konkurrenz/Monopol | Formula + Columns/Card, keine Formel als ungerenderter Prop-Text |
| 73 / 8 | Preis-/Mengendiagramm mit PAF, GK, p*, x*, a | A: DataChart aus PDF-Vektorpositionen, symbolische Achsenticks; geometrisch rekonstruiert, keine erfundenen ökonomischen Werte |
| 74 / 9 | Monopoldiagramm mit GE, Nachfrage, GK, Markierungen und erläuternden Pfeilen | C: Originalausschnitt; die symbolischen Achsen, nicht numerisch kalibrierte Kurven und Pfeilannotationen wären in DataChart ohne Sonderkomponente weniger vollständig |
| 75 / 10 | Offene Rechenaufgabe a–d | Exercise, Musterlösung von Folie 76 |
| 76 / 11 | Vollständige Musterrechnung | Formula + DataTable; Tippfehler „Für a=0“ wird markiert |
| 77 / 12 | Ergebnistabelle | A: DataTable, Monopol/Konkurrenz; keine Oligopolwerte erfunden |
| 78–79 / 13–14 | Einführung und Definition Produzentenrente | DefinitionBox |
| 80 / 15 | Produzentenrente mit Pfeilen zu PAF, p*, GK und gelber Fläche | C: Originalausschnitt inklusive Pfeilziele und Beschriftungen; eigenständige Schraffur und nichtnumerische Geometrie |
| 81 / 16 | Monopol-Produzentenrente mit Schraffur | C: Originalausschnitt, Flächen- und Linienannotation bleibt exakt |
| 82 / 17 | Wohlfahrtsflächen ABE, HBEG, GED, ADH | C: Originalausschnitt, Buchstaben und Schraffuren prüfungsrelevant |
| 83 / 18 | Derselbe Vergleich mit hervorgehobenem Verlust GED | C: eigener Originalausschnitt, Hervorhebungsunterschied bleibt erhalten |
| 84 / 19 | Standardfall mit steigender Angebotskurve | C: Originalausschnitt, Schraffur und symbolische Achsen |
| 85 / 20 | Steigende GK und Buchstaben A–I | C: Originalausschnitt; alle Buchstaben/Bezugslinien erhalten |
| 86 / 21 | Flächenvergleich mit Schraffuren und separater Flächenlegende | C: vollständiger inhaltlicher Ausschnitt inklusive Flächenlegende |
| 87–88 / 22–23 | Individuelle Preise und perfekter Grenzfall | Cards und Merksatz; keine Abbildung |
| 89 / 24 | Nachfrage, Grenzerlös und vergrößerte Treppen unter Lupen | C: Originalausschnitt; Lupe ist hier erklärender Zoom, keine reine Dekoration |
| 90 / 25 | Wiederholung derselben Zoomgrafik, anderer erläuternder Text | C: Bild aus Folie 89 gemeinsam für Folien 89–90; Erklärung aus 90 vollständig im Text erhalten, keine zusätzliche Information aus der Wiederholung verloren |
| 91 / 26 | Drei Grades-Kästen mit Beispielen und gemeinsamer KR-Anmerkung für 2./3. Grad | B: drei CompareCards, gemeinsame Anmerkung darunter |
| 92 / 27 | Monopol, geringe und fast perfekte Diskriminierung mit Rentenflächen | C: drei einzeln zugeschnittene Originalgrafiken; Erläuterungen als zugehörige Cards, nicht auf winziger Dreifachgrafik |
| 93 / 28 | Vierfeldervergleich Konkurrenz, perfekt, gering, Monopol | C: vier getrennte Originalausschnitte in gleicher Leseordnung (oben links/rechts, unten links/rechts); keine numerischen Werte erfunden |
| 94 / 29 | Gesamtbeurteilung | Vier Aussagen als Cards, mit Geltungsbereich konstante GK |
| Vertiefung 1 | Aufgaben 1–4, Gewinnformel | Exercise; keine Musterlösungen im Vertiefungsblatt, daher ausdrücklich so markiert |
| Vertiefung 1, Aufgabe 5 | Symbolisches Monopoldiagramm und Fragen a–c | C: Originalausschnitt der Vertiefung, Exercise ohne erfundene Musterlösung |
| Alle Folien | Hochschullogo und Kopf-/Fußdekor | D: reine Dekoration weggelassen; Foliennummer in SourceNote erhalten |

## Preserve-Map und lokale Qualitätsprüfung

Erhalten bleiben alle Quelltabellen, Formeln und Rechenschritte; sämtliche Aufgaben; Original-Flächenzuordnungen und Symbolik; Standardfall vs. konstante Grenzkosten; alle drei Diskriminierungsgrade und alle Vergleichsabbildungen. Benachbarte Sections verwenden unterschiedliche dominante Formen (Tabellen, Formelherleitung, Rechenübung, Definition/Bild, Flächenvergleich, Exkurs, Preise/Typen, Gesamtvergleich). Keine fachlichen Ergänzungen oder Topic-Styles.

## Abgeleitete Werte und Quellauffälligkeiten

- Nur Folie 73: Diagrammgeometrie aus PDF-Vektoren rekonstruiert; Achsen sind symbolisch und zeigen keine zusätzlichen Zahlen. Diese Rekonstruktion wird im Topic gekennzeichnet.
- Folie 76 schreibt „Für a=0“ vor den Maximalmengen 200 und 1000. Gemeint sein muss der Preis p=0: Der weiterhin vorgegebene Reservationspreis a beträgt 100. Der Quellwortlaut wird mit Warnhinweis benannt; keine stille Korrektur.
- Folie 80 bezeichnet einen allgemeinen Preis p* oberhalb GK, während GK zugleich mit dem Konkurrenzpreis gleichgesetzt wird. Im Topic wird die kontextabhängige Symbolverwendung ausdrücklich benannt; Folie 81 verwendet p* als Konkurrenzpreis auf GK.
- Folien 88 und 92 unterscheiden perfekte und fast perfekte Diskriminierung; die Restlücke aus 92 wird nicht auf den perfekten Grenzfall übertragen.
- Die Aussagen „Produzentenrente = 0“ gelten hier für den Modellfall konstanter GK, nicht für den steigenden Standardfall des Exkurses.
- Die Vertiefungsquelle hat keine Musterlösungen. Keine selbst erstellte Antwort wird als Quelllösung ausgegeben.

## Prüfstatus

- Lokale MDX-Kompilierung mit `@mdx-js/mdx`: erfolgreich.
- Metadaten-/Anchor-Prüfung: acht Sections, exakt gleiche Reihenfolge und IDs; 17 relative Asset-Imports vorhanden.
- Lokaler ESLint-Lauf für die Metadatendatei: erfolgreich.
- Vier source-belegte SC-Fragen im bestehenden Schema unter `tmp/ioek/teil-3-questions.json`; korrekte Antwortindizes und options geprüft. Integration durch Orchestrator.
- Fidelity Audit gegen sämtliche 29 Folien und die Vertiefungsseite: alle Tabellenwerte, Formelnummern, Rentenflächen und Aufgaben erhalten. Keine unbelegten fachlichen Ergänzungen gefunden.
- Desktop hell / Mobile dunkel: sämtliche 37 zentral erzeugten Abbildungsaufnahmen gesichtet und mit den Quellen verglichen. Dabei Randanschnitte an Achsen/Buchstaben korrigiert, vier überlagerte PDF-Panelbilder getrennt, Bildmasken korrekt mit Weiß gerendert und lange Formelketten mehrzeilig gesetzt.
- Offene Grenze: umfangreiche Originalgrafiken (80, 86, 89) enthalten auf schmalen Displays kleine Originalbeschriftungen. Jede ist vollständig, mit Alt-Text, Erklärung und Vergrößern-Link zugänglich; die wesentlichen Aussagen stehen zusätzlich im normalen Text. Breite Quelltabellen verwenden den vorhandenen horizontalen Tabellen-Scroller.
- Integration sowie abschließender zentraler Build-/Lint-/Browserlauf liegen beim Orchestrator. Nach lokalen visuellen Korrekturen wurde ein erneuter Browserlauf angefordert.
