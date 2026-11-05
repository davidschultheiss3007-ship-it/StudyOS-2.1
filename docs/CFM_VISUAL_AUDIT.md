# Corporate Financial Management: Quellen- und Visual-Audit

Stand: 2026-11-03. Quellen sind die drei lokalen Original-PDFs: Vorlesung 1 (16 Folien), Grundlagen (47 Folien) und Shareholder Value Management einschließlich WACC/CAPM (34 Folien). Insgesamt 97 Folien. Markdown war für diesen Audit nicht erforderlich; PDF-Text wurde nur gemeinsam mit den gerenderten Seiten bewertet.

## Vorgehen und Unabhängigkeit

- Alle 97 Folien anhand gerenderter Kontaktbögen gesichtet; zentrale Grafiken, Tabellen und strittige Formeln zusätzlich in großer Darstellung geprüft.
- Topic 2 und 3 durch einen anderen Agenten als den jeweiligen Builder anhand vollständiger MDX-Dateien, Metadaten und Originalseiten geprüft. Topic 1 durch den Builder von Topic 2 unabhängig quergeprüft.
- Alle 24 mobilen Section-Screenshots bei 390 px visuell gesichtet. Desktop-Stichproben bei 1440 px: Einstieg Sections 4/6, Finanzberichte Sections 1/7, Shareholder Value Sections 3/7; dort liegen die strukturell anspruchsvollen Ziele-, Bilanz-, Quartil-, Werttreiber- und Cisco-Abbildungen.
- Screenshotbasis: `output/playwright/cfm/<topicId>-<1440|390>-section-<1..8>.png`. Nach der ersten Auditrunde wurden sämtliche Aufnahmen am finalen Produktionsbuild erneuert. Der Hauptagent hat die korrigierten mobilen Überschriften, die sichtbaren Bildlinks sowie den Dunkelmodus visuell nachgeprüft. Die Bildvergrößerung wurde tatsächlich geöffnet; die WACC-Tabelle enthält geprüft alle 20 Datenzeilen.

## Bewertungsrubrik

Die Bewertungen sind begründete qualitative Urteile, keine gemessenen Prozentwerte und keine Pixelähnlichkeitsmessung.

| Wert | Formtreue | Lesbarkeit | Inhaltsvollständigkeit |
| --- | --- | --- | --- |
| 5 | Achsen, Beziehungen, Anordnung und Gruppierung vollständig erhalten | Alle Details unmittelbar gut lesbar | Alle fachlichen Bestandteile vorhanden |
| 4 | Logik erhalten, kleinere gestalterische Änderungen | Gut lesbar, einzelne Details verlangen Vergrößerung oder lokales Scrollen | Nur unwesentliche Randdetails fehlen |
| 3 | Grundidee erhalten, wichtige Beziehungen schwerer erkennbar | Grundstruktur lesbar, Detailarbeit verlangt Vergrößerung | Einzelne wichtige Bestandteile fehlen |
| 2 | Deutlich schlechtere Darstellungslogik | Mehrere zentrale Inhalte schwer lesbar | Mehrere zentrale Lücken |
| 1 | Originalaussage visuell verfälscht | Nicht sinnvoll lesbar | Fachliche Kernaussage fehlt |

Die Formtreue bezieht sich auf die fachliche Darstellungslogik, nicht auf die Nachahmung der Folienköpfe, Logos oder Buchcover.

## Vergleich der wichtigen Darstellungen

F = Formtreue, I = Inhaltsvollständigkeit. L-D = Lesbarkeit am Desktop, L-M = Lesbarkeit der eingebetteten Darstellung auf Mobile. Die Mobile-Scores bewerten bewusst die Erstansicht; die nun angebotene Vergrößerung verbessert den Zugriff auf Details, macht deren kleine Erstansicht aber nicht automatisch gleichwertig mit Desktop.

| Originalstelle | Umsetzung und Prüfung | F | I | L-D | L-M |
| --- | --- | ---: | ---: | ---: | ---: |
| Einstieg 3, 10–11: Semesterzuordnung, Finanzierung/Investition, Bilanz | Semesterzuordnung als Tabelle; Finanzierung/Investition gegenübergestellt; Aktiv-/Passiv-Perspektive zweispaltig und beide Definitionen erhalten. Zahlenbeispiel als Originalcrop. | 5 | 5 | 4 | 3 |
| Einstieg 12: Zielsystem | Original-Hierarchie mit sechs Anspruchsgruppen, Oberziel und drei Zielarten vollständig; Beispiele zusätzlich als native Texte für Mobile. | 5 | 5 | 5 | 4 |
| Einstieg 13: Zieldreieck | Dreieck, Doppelpfeile und additive Unabhängigkeit vollständig. Kein unübersichtlicher Ersatzgraph. | 5 | 5 | 5 | 4 |
| Einstieg 14: Kennzahlenableitung | Kapitalflussrechnung links, Bilanz mittig, GuV rechts sowie beide Zuordnungsklammern erhalten; native Tabelle erklärt Beziehungen. | 5 | 5 | 5 | 3 |
| Einstieg 15–16: Kennzahlenformeln | Alle drei Liquiditäts- und Rentabilitätsformeln mit Originalbezugsgrößen; durchschnittliches Kapital und FK-Zinsen korrekt. | 5 | 5 | 5 | 4 |
| Grundlagen 6/17/22: Global-Abschlüsse | Vollständige native Tabellen mit beiden Jahren; Bilanz bilateral, GuV und Cashflow-Rechnung in Originalreihenfolge. Mobil lokal horizontal scrollbar. | 5 | 5 | 5 | 4 |
| Grundlagen 39: DAX-/S&P-KGV | Beide Originalzeitreihen getrennt, Zeitachsen, Verläufe und historische Datumswerte erhalten; mobil untereinander. | 5 | 5 | 4 | 3 |
| Grundlagen 41–44: US-Kennzahlen | Alle 27 Zeilen mit Formeln und drei Quartilen in vier ursprünglichen Gruppen erhalten. Native Tabellen statt verkleinerter Folienbilder. | 5 | 5 | 4 | 4 |
| Value 7–9: Stakeholder, Ansprüche, Kreislauf | Konzentrische Originalkarte und Kreislauf erhalten; Anspruchsvergleich als native Tabelle mit allen vier Gruppen und Grundlagen. | 5 | 5 | 5 | 3 |
| Value 10–11: Werttreiber und FCF/WACC | Original-Netzbeziehungen, drei Entscheidungsbereiche, Bewertungsbausteine und Cashflow-/Kapitalkostenseite vollständig; Formeln zusätzlich nativ. | 5 | 5 | 5 | 3 |
| Value 12–14: Terminal Value und WACC | Formeln nativ; widersprüchliche Original-Gesamtformel als Crop mit Warnung; Original-WACC-Bestandteile in KaTeX samt Legende. | 5 | 5 | 5 | 4 |
| Value 18/20: Diversifikation und Kapitalmarktlinie | Originalkurve mit systematischem Risikosockel; originale σ-Achse, Tangente, Effizienzkurve und Punkte A/B/C/M/X erhalten. | 5 | 5 | 5 | 3 |
| Value 24–27: Branchenbetas und Cisco | Branchenvergleich und drei Cisco-Grafiken als vollständige Originalausschnitte; keine erfundenen Datenpunkte. Regression und Betaverlauf zusätzlich erklärt. | 5 | 5 | 4 | 3 |
| Value 31–32: Risikoprämien und WACC | Vollständige historische Tabelle; WACC-Balkenreihe mit allen 20 Originalwerten rekonstruiert. Datentabelle ergänzt, damit alle Zahlen statisch zugänglich bleiben. | 5 | 5 | 4 | 4 |

Fazit der Detailprüfung: Die fachliche Darstellungslogik ist sehr nah am Original. Eine pauschale Bewertung „visuell genauso gut auf Mobile wie im PDF am Desktop“ wäre falsch: komplexe Originalgrafiken bleiben auf 308 px Inhaltsbreite klein. Sichtbare Links zum Öffnen jeder Grafik in voller Auflösung und native Erklärungen beziehungsweise Datentabellen sind deshalb Teil der Umsetzung.

## Im Audit konkret korrigiert

1. **Abgeschnittene Originalausschnitte:** Zielkreislauf und Cisco-Regression gemeldet und vom Value-Builder neu exportiert; anschließend vollständig gegengeprüft. Auch dessen weitere Crop-Korrekturen an Zieldreieck, Diversifikation und Cisco-Abbildungen übernommen. Keine abgeschnittenen Achsen oder Formelreste in den kontrollierten finalen Assets.
2. **Fehlende statische WACC-Zahlen:** Die Originalgrafik zeigt 20 Zahlen über den Balken; im Recharts-Nachbau waren sie nur über Tooltip zugänglich. Eine vollständige 20-Zeilen-Tabelle ergänzt.
3. **Mobile Grafikdetails:** Alle 18 eingebetteten Originalabbildungen mit sichtbarem „Abbildung vergrößern“-Link auf die importierte Bilddatei versehen, einschließlich Titel und beschreibendem zugänglichem Linknamen. Kerninhalt bleibt eingebettet sichtbar.
4. **Mobile Überschriften:** Zwei lange Wörter wurden in den Section-Screenshots intern abgeschnitten, obwohl kein Seitenoverflow gemessen wurde. Überschriften lokal zu „Kriterien der Finanzwirtschaft“ und „Finanzielle Ziele und Shareholder Value“ geändert; Metadaten synchronisiert.

## Quellenunklarheiten und Lernkontrollen

- Grundlagen: Jahreszahl 2012/2018 bei Dividenden; unterschiedliche DPO-Nenner; falsche ROE-Rechenzeile; wechselnde ROA-Definition; abweichende Gradbezeichnung der Liquidität. Alle fünf im Topic sichtbar kenntlich.
- Value: nicht eindeutige DCF-Gesamtformel auf Folie 13; Vermischung der Kapitalmarktlinie mit SML auf Folie 20; Stern-/Zinsaufwandkonvention auf Folie 11. Originalstellen und Unsicherheit bleiben sichtbar. Folie 32 zeigt WACC, obwohl der Folientitel Risikoprämie lautet; dies wird ausdrücklich erklärt.
- Alle 18 Quiz-Antwortschlüssel, Erklärungen und Quellenbezüge sowie die sieben Trainingsaufgaben gegen die Quellen geprüft. Global- und CAPM-Rechenwerte nachgerechnet. Punktesummen: 15 + 15 + 15 = 45; Teilaufgaben konsistent. Keine prioritären fachlichen Befunde.
- Die reale Modulprüfung ist laut Einstieg Folie 5 eine Klausur mit 100 % Gewichtung und 90 Minuten. Das 45-Minuten-/45-Punkte-Training ist als Training zu den vorhandenen Skripten gekennzeichnet.

## Grenzen und technische Nachweise

- Formeln und breite native Tabellen nutzen lokale horizontale Scrollbereiche auf kleinen Displays. Die Erstansicht zeigt deshalb nicht jede Spalte gleichzeitig; Inhalte sind vollständig vorhanden. Dies ist ein bewusster Lesbarkeitskompromiss statt einer unlesbar verkleinerten Gesamttabelle.
- Originalgrafiken bewahren ihre Quellfarben und weißen Hintergründe auch im Dunkelmodus; native Inhalte nutzen die vorhandenen Tokens. Keine neue Palette, keine Topic-Styles, keine neuen Komponenten oder Dependencies.
- Keine Pixelvergleichsmetrik, keine Prüfung auf physischen Mobilgeräten und keine vollständige paginierte Druckabnahme. Aus den Bewertungen wird keine vorgetäuschte Prozent-Qualität abgeleitet.
- Alle drei MDX-Dateien nach den finalen Änderungen mit vorhandenen `remark-math`-/`remark-gfm`-Plugins erfolgreich kompiliert. IDs und Anker laut Builderprüfungen je 8/8 konsistent. Finale Lint-/Build-/Browserergebnisse dokumentiert der Hauptagent im Task Log.
- Finale technische Abnahme durch den Hauptagenten: Lint ohne Fehler (vier bestehende Warnungen), Produktionsbuild erfolgreich (bestehende Chunkwarnung), 24/24 Anker, 18 gültige Fragen und 45 Punkte. Produktionsbrowser: alle drei Topics bei 1440/768/390/360 px ohne Seitenoverflow, fehlende Bilder, KaTeX- oder Konsolenfehler; Modul und Training bei 360 px ebenfalls ohne Seitenoverflow. PDF3×HTTP200, TOC, Quiz18/18, Training und Fortschrittspersistenz erfolgreich. Alle acht Sections des Value-Topics im Druckmodus sichtbar.
