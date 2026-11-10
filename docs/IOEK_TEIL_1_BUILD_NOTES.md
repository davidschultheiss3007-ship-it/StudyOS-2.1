# Industrieökonomik Teil 1 – Build Notes

## Quellen und Sichtung vor MDX-Erstellung
- Hauptquelle: Industrieökonomik WS 26-27 Teil 1.pdf, 45 PDF-Seiten, gedruckte Folien 1–25, 27–29, 31–47. Gedruckte Folien 26 und 30 sind nicht enthalten; keine Inhalte dafür ergänzt.
- Zusatzquelle: IÖK Vertiefung und Wiederholung Teil 1.pdf, eine PDF-Seite, neun offene Fragen (Frage 1 mit a–c), keine Musterlösungen.
- Alle 45 Vorlesungsseiten und die Übungsseite wurden vor dem Bauen als PNG gerendert und visuell gesichtet (Kontaktblätter mit je sechs Folien; Detailprüfung informativer Abbildungen).
- Markdown nur als Gegenprobe; Bilder/Formeln/Zahlen aus PDF. Temporäre Sichtungsbilder: tmp/pdfs/ioek1/.

## Abbildungsinventar (vor MDX)
| Druckfolie / PDF-Seite | Typ und Informationsinhalt | Weg / Umsetzung |
| --- | --- | --- |
| 1 / 1 | Titel, HBW-Logo, Schmucklinien | D: reine Deko weggelassen; Titel und Lehrender textlich erhalten |
| 2–5 / 2–5 | Vierseitige Gesamtgliederung | B: vollständige Kapitelgliederung mit Unterpunkten als strukturierte Listen |
| 6 / 6 | Structure → Conduct → Performance, drei Knoten, zwei Vorwärtspfeile | B: Diagram mit identischer Richtung/Knotenfolge |
| 7–10 / 7–10 | Text/Annahmen/Folgen, keine informative Abbildung | Text in Definitions-/Lernkarten |
| 11 / 11 | Annahmenvergleich, drei Links-Rechts-Zuordnungen | A: DataTable mit exakt denselben drei Zuordnungen |
| 12 / 12 | Marktformtabelle: Anbieter, Produkte, Preissetzung, Regel | A: DataTable mit vier Marktformen, Reihenfolge und Inhalten erhalten |
| 13 / 13 | Marktformtabelle: Eintrittsbarrieren, Gewinn | A: zweite DataTable, alle vier Marktformen und Unternehmerlohn enthalten |
| 14–16 / 14–16 | Erwartungen/Vorwissen als Text | Lernkarten |
| 17 / 17 | Zwei Ableitungstabellen (Grundfunktionen, Regeln) | A: zwei Tabellen mit Formula-Zellen, Reihenfolge und Formeln erhalten |
| 18 / 18 | Maximalbedingungen und Rechenbeispiel | Formula + Exercise mit gedruckter Lösung |
| 19 / 19 | Unternehmerannahmen | Lernkarte |
| 20 / 20 | Zweispaltige Homo-oeconomicus-/Kritikbox | B: Columns + Card, gleiche beiden inhaltlichen Gruppen |
| 21–23 / 21–23 | Gewinnmaximierung/Grenzerlös/Grenzkosten als Text | Definitionen und Vergleiche |
| 24 / 24 | Drei gekoppelte historische Ertrags-/Kostenkurven mit Phasen und Beschriftungen | C: 01-ertragsgesetz.png; kleines eingebettetes Scanbild mit mehreren überlagerten Kurven und Phasengrenzen, keine analytischen Funktionen oder numerischen Stützpunkte; Original bewahrt alle Beschriftungen ohne erfundene Kurven |
| 25 / 25 | Auswahl des neoklassischen Abschnitts aus derselben Ertragsfunktion, Rahmen und Pfeil | C: 01-neoklassik-auswahl.png; markierter Quellscan, exakte Auswahl und Pfeil erhalten |
| 27 / 26 | Konkave Produktionskurve, zwei gleich große Faktorzuwächse, unterschiedliche Outputzuwächse | C: 01-weinlese.png; qualitative, nicht skalierte Kurve und Pfeilannotation ohne konkrete Funktion; Original verhindert erfundene Daten |
| 28 / 27 | Cobb-Douglas-Funktion und Eigenschaften im Zweispaltenkasten | B: CompareCard + Formula; keine zusätzliche Datengrafik |
| 29 / 28 | Konkave Kurve mit zwei MP-Hilfslinien und allgemeiner Cobb-Douglas-Formel | C: 01-grenzprodukt.png; nicht skalierte Skizze, markierte Differenzen ohne konkrete Parameter, Formel zusätzlich als Formula |
| 31 / 29 | Drei Diagramme, Umkehrpfeile und Lohnmultiplikation, gespiegelte Achsen | C: 01-kosten-inversion.png; mehrteilige geometrische Inversion, kein datenbasierter Chart; Original bewahrt Achsenwechsel und Annotationen |
| 32 / 30 | Konvexe Kostenkurve mit horizontalen/vertikalen Hilfslinien | C: 01-variable-kosten.png; qualitative Kurve ohne Parameter und Tickwerte |
| 33 / 31 | Zwei Diagramme: Kosten bei x=8/9 (3/5), Grenzkosten=2 | C: 01-grenzkosten.png; Quelle verbindet qualitative Kostenkurve mit geometrischen Schrittmarken und kontinuierlicher GK-Kurve; Original erhält beide Typen und Annotationen exakt; gedruckte Zahlen zusätzlich als Formula |
| 34 / 32 | Gesamtkosten/variable Kosten/Fixkosten, vertikale GK-Markierung | C: 01-gesamtkosten.png; qualitative überlagerte Kurven ohne numerische Parameter |
| 35 / 33 | MC, ATC, AVC, AFC mit Minimalkostenmenge | C: 01-durchschnittskosten.png; qualitative Kurven ohne konkrete Funktionen/Ticks, Original bewahrt Schnitt- und Minimumpunkte |
| 36–38 / 34–36 | Herleitung Gewinnmaximum und Gleichungen | Formula/Lernkarte, keine separate informative Abbildung |
| 39–40 / 37–38 | Nachfrage/PAF als Text und Gleichungen | Formula + sichtbar benannte Quellenungenauigkeit |
| 41 / 39 | Lineare PAF mit a, x, p, Steigungsdreieck; p=5−x/2 | A: DataChart type=line, xType=number, ohne Quell-fremdes Raster; a-Ordinate, analytische Stützpunkte, Steigungsdreieck aus kalibrierten PDF-Vektoren als zwei referenceLines; Steigungsannotation zusätzlich als Formula; alle Ableitungen benannt |
| 42 / 40 | PAF-Rotation mit gestrichelter flacherer Kurve, b↓ | C: 01-paf-steigung.png; neue Steigung nicht numerisch angegeben, daher keine erfundene Parametrisierung |
| 43 / 41 | PAF-Parallelverschiebung mit a↓, gestrichelter Kurve | C: 01-paf-verschiebung.png; neuer Achsenabschnitt nicht numerisch angegeben |
| 44–46 / 42–44 | Annahmen, Beispiele und Funktionsweise vollkommener Konkurrenz | Lernkarten/Quellbeispiele, keine informative Abbildung |
| 47 / 45 | Gleichungsfolge 1.1–1.6 | Formula, Nummern/Formeln einschließlich Fixkostenhinweis erhalten |
| Übung / 1 | Neun offene Aufgaben, keine Abbildungen und keine Musterlösungen | Exercise, wortgleiche Fragen; fehlende Quellenlösung explizit markiert |
| alle Vorlesungsfolien | Logo und farbige Schmucklinien | D: dekorativ, weggelassen |

## Abgeleitete Werte und Quellhinweise
- Keine Daten durch visuelle Schätzung gewonnen. PAF-Stützpunkte werden aus p=5−x/2 algebraisch erzeugt und als Rekonstruktion aus der gedruckten Gleichung bezeichnet.
- PAF-Schnittpunkte zur Kalibrierung aus get_drawings(): (42,636; 186,850) und (267,670; 342,496) PDF-Punkte bilden (0; 5) und (10; 0) ab. Die PDF-Vektorlinien des Steigungsdreiecks ergeben die rekonstruierten Diagrammkoordinaten (1,75733; 4,08125) → (1,75733; 3,13487) → (3,69651; 3,11752). Diese Koordinaten bewahren die grafische Quellenannotation; sie sind keine gedruckten Marktwerte. Die kleine Schrägstellung der waagerechten Skizzenseite bleibt erhalten.
- Folie 40 verwendet dieselben a,b für Nachfrage und inverse Nachfrage, obwohl sich bei algebraischer Umkehrung die Parameter ändern. Beide Quellschreibweisen bleiben sichtbar, die Umkehrung wird als erläuternde algebraische Ableitung gekennzeichnet.
- Folie 40 nennt in der Interpretation Umsatz; das Argument x ist die Absatzmenge, nicht der Umsatz. Quellenungenauigkeit sichtbar markiert.
- Folie 29 formuliert bei Skalenerträgen sinkende/steigende Gesamtkosten missverständlich. Die im Skript ebenfalls vorhandene eindeutige Definition über proportionale Faktor- und Outputveränderungen bleibt maßgeblich; Wortlautkonflikt im Topic benannt.
- Folie 47 setzt in (1.6) Fixkosten ausdrücklich außer Betracht. Nullgewinn nicht als Aussage trotz positiver Fixkosten verallgemeinert.
- Keine Prüfungsform oder Prüfungsdauer in diesen Quellen angegeben.

## Fidelity Audit und lokale Qualitätsprüfung

### Preserve-Map vor Quality-Upgrade
- Alle 45 bereitgestellten Vorlesungsseiten, die vollständige Kapitelgliederung und alle neun Aufgaben aus Vertiefung Teil 1 bleiben berücksichtigt.
- Tabellen behalten Marktformen, Reihenfolge, Formeln und sachliche Aussagen; qualitative Originalkurven behalten Achsen, Kurven, Hilfslinien und Beschriftungen.
- Topic-/Section-IDs, Quellbezüge, Definitionen, Lehrbeispiele und Gleichungen bleiben beim Layout-Upgrade unverändert.

### Korrigierte Befunde
- Quellenabgleich: Folien 26/30 tatsächlich nicht vorhanden; keine vermeintliche Lücke durch erfundene Inhalte gefüllt.
- Quellenabgleich: Parameter-/Umsatzunschärfen auf Folie 40 und Kostenwortlaut auf Folie 29 als Warnungen sichtbar gemacht; Fixkosten-Ausnahme aus Folie 47 erhalten.
- Abbildungsprüfung: zunächst angeschnittene Überschriften in Original-Crops erkannt; Beschnitt an den tatsächlichen Text-/Grafikgrenzen korrigiert. Vollständige Formel-/Achsenbeschriftungen, Pfeile und die gewählte Produktionsphase bleiben enthalten.
- PAF-Nachbau: zunächst separat erklärte Steigungsannotation zusätzlich direkt im Chart aus PDF-Vektorlinien ergänzt; keine Lage visuell geschätzt.
- Mobilprüfung: lange Formeln in sieben Fällen ohne Inhaltsänderung mehrzeilig gesetzt (aligned/gathered), damit keine langen Rechenketten horizontal gelesen werden müssen.
- Ein zentraler Mermaid-Größenfehler beim SCP-Diagramm wurde anhand der Browseraufnahme erkannt und isoliert: Nur bei `prefers-reduced-motion: reduce` enthielt die viewBox noch die temporäre 2000px-Messfläche, obwohl die gerenderten Knoten korrekte Geometrie hatten. Der Orchestrator reparierte die zentrale Komponente durch einen bedingten Abgleich mit getBBox. Der eigene Endcheck in Desktop hell/Mobil dunkel bestätigt normale Diagrammhöhe, lesbare Beschriftungen und die unveränderte Richtung Marktstruktur → Marktverhalten → Marktergebnis. Auf Mobil hält minWidth=520 die Schrift lesbar und die zentrale Region ist seitlich scrollbar.

### Prüfnachweise
- Separater MDX-Compilerlauf erfolgreich; Metadaten haben acht Sections, alle acht MDX-Anker stimmen exakt in Reihenfolge und Schreibweise überein.
- `npx eslint src/modules/semester-5/industrieoekonomik/topics/01-ioek-teil-1.js` erfolgreich.
- 11 Originalbilder mit Alt-Text, Erklärung und Link zur Originalauflösung; zehn Quellen-Exercises (ein gelöstes Vorlesungsbeispiel und neun offene Vertiefungsaufgaben).
- Alle 40 gerenderten Figures der zentralen Screenshotserie Desktop 1440/hell und Mobile 390/dunkel gegen die zuvor gesichteten Quellfolien verglichen (output/playwright/ioek/ioek-teil-1-*). Nachprüfung der umgebrochenen Formeln 13/19/26/30/38/39 und des PAF-Dreiecks 31 erfolgreich. SCP nach der zentralen Reparatur eigens erneut aufgenommen: ioek-teil-1-1440-scp-final.png und ioek-teil-1-390-scp-final.png. Keine offenen lokalen Darstellungsfehler; kleinteilige Quellscans behalten ihren Vergrößerungslink.
- Tabellen sind mobil innerhalb ihrer vorhandenen zentralen Scrollcontainer lesbar. Detailreiche Original-Scans bewahren Quelldetails, benötigen auf kleinen Displays für feine Beschriftungen den vorhandenen Vergrößerungslink; zentrale Textzusammenfassungen vermitteln die Aussagen zusätzlich.
- Vier belegte Single-Choice-Fragen mit plausiblen Distraktoren, correctAnswer und Quellenangabe als Integrationsfragment in tmp/ioek/teil-1-questions.json; keine eigene Prüfung im MDX.
- Integration und abschließendes Gesamt-Lint/Build/Browser-Recheck erfolgen zentral durch den Orchestrator.
