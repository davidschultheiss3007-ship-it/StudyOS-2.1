# Industrieökonomik Teil 2 – Build- und Quellenprüfung

## Quellen und Sichtung

- Primärquelle: `sources/semester-5/Industrieökonomik/Industrieökonomik WS 26-27 Teil 2.pdf`, 18 PDF-Seiten, gedruckte Folien 48–65.
- Ergänzende Quelle: `Übungsvertiefung/IÖK Vertiefung und Wiederholung Teil 2.pdf`, 1 Seite, fünf offene Aufgaben (Aufgabe 5 mit a/b); keine Musterlösungen.
- Alle 19 Seiten vor dem MDX-Bau als Bilder gerendert und in vier Kontaktbögen gesichtet. Diagramme zusätzlich in Einzelansicht geprüft; PDF-Text und vorhandenes Markdown gegengeprüft.
- Referenzen: Topic-Build-Spec vollständig, Data-Science-Topics, CFM-Originalbildmuster und AM-05-Metadaten.

## Abbildungsinventar vor dem Bau

| Folie / PDF-Seite | Information | Weg und Begründung |
| --- | --- | --- |
| 48 / 1 | Zwei Preis-/MC-/ATC-Diagramme, Gewinn- und Verlustflächen | C: zwei getrennte Originalausschnitte. Nicht numerisch skalierte ATC-Kurven und überlagerte Erlös-/Kostenflächen lassen sich mit DataChart ohne neue frei angenommene Stützstellen nicht sinnvoll exakt darstellen. Kurven, Schnittpunkte, Achsen y/y*, MC, ATC und Flächen bleiben erhalten. |
| 49 / 2 | Text zur Angebotsfunktion | Als Definition/Merksatz erhalten; keine Abbildung. |
| 50 / 3 | GK-Linie mit vier p-/x-Projektionen | A: Liniengrafik mit DataChart, numerischer Platzierungsachse und ausschließlich symbolischen Ticks p₁–p₄/x₁–x₄. GK-Linie und Projektionslinien aus PDF-Vektoren rekonstruiert. Parent erweitert DataChart abwärtskompatibel um xType/line-Ticks/showGrid. Keine numerischen Ökonomiedaten behauptet. |
| 51 / 4 | Nachfrage, steigende GK, a/p*/x*, Marktgröße, Hinweis-Pfeile | C: symbolisches Linienmodell ohne numerische Skala; mehrere schräge Beschriftungspfeile. Original bewahrt Schnittpunkt und Beschriftungszuordnung ohne erfundene Werte. |
| 52 / 5 oben | Variable Kosten/GK bei Kapazitätsannäherung | C: nicht numerisch skalierte Kurven mit unterschiedlicher Krümmung; Originalausschnitt statt erfundener Datenreihe. |
| 52 / 5 unten | Lineare variable Kosten und konstante GK | C: zweites Diagramm separat, originale Achsen und Zuordnung; keine numerische Parametrisierung gegeben. |
| 53 / 6 | Nachfrage und horizontale GK, a/p*/x*, Marktgröße | C: symbolisches Diagramm mit Beschriftungspfeilen; identische Argumente wie Folie 51. |
| 54 / 7 | Rechenaufgabe a–d | Exercise mit den vier Originalfragen und Musterlösung von Folie 55. |
| 55 / 8 | Formeln (1.1)–(1.6), (1.5′) | Als Formula nachgesetzt; keine Rasterübernahme. Fixkosten-Grenze ausdrücklich markiert. |
| 56 / 9 | Ergebnistabelle: Oligopol, Monopol, v. Wettbewerb | A: DataTable mit denselben drei Spalten; die ersten beiden bleiben wie in der Quelle unbefüllt. Werte 160, 20, 0 nur in v. Wettbewerb. |
| 57 / 10 | Kein Überschussgewinn, Unternehmerlohn | Card/Callout; keine Abbildung. |
| 58 / 11 | Offene Textaufgaben-Erstellung | Exercise; fehlende Musterlösung ausdrücklich angegeben. |
| 59–60 / 12–13 | Definitionen Wohlfahrt/Konsumentenrente | DefinitionBox, Gegenüberstellung; keine Abbildung. |
| 61 / 14 | Konsumentenrente als grün schraffierte Dreiecksfläche | C: Original erhält Schraffur, alle symbolischen Achsen, Nachfrage-/GK-Linien und Beschriftungspfeile. DataChart hat keine solche Schraffur mit freien Beschriftungspfeilen. |
| 62–65 / 15–18 | Monopolannahmen/-beispiele/-Korrektureffekt | Definition/Columns/CompareCard; keine informative Quellabbildung. |
| Vertiefung / 1 | Fünf offene Aufgaben, 5a/5b | Exercise, Originalfragen; keine Grafik und keine Musterlösung vorhanden. |
| Alle Vorlesungsfolien | Hochschullogo und Kopf-/Fußdekor | D: weggelassen; Quellen-/Folienbezug als SourceNote erhalten. |

## Zahlen und Quellauffälligkeiten

- Keine geschätzten oder aus Diagrammen abgeleiteten ökonomischen Zahlen. Abb. 50 verwendet aus PDF-Vektoren rekonstruierte Platzierungskoordinaten; sie sind ausschließlich Layoutwerte und werden nicht als Preise/Mengen angezeigt. Quelle des Chartframes nennt die Rekonstruktion ausdrücklich.
- Abb. 50 Koordinatentransformation: x = PDF-x − 40,625; y = 325,798 − PDF-y. GK-Endpunkte (39,770; 289,770) und (218,760; 242,260); Projektionsenden gemäß PDF-Vektoren x = 74,399/103,340/140,200/185,770. Die Quellzeichnung hat leicht versetzte Projektionsendpunkte; diese werden nicht in eine neue mathematisch perfekte Datenreihe umgedeutet.
- Folie 55 nennt den Gewinn ausdrücklich **ohne Fixkosten**; Folie 54 führt FK ein und Folie 56 zeigt 0 ohne diese Einschränkung. Der Zusammenhang wird sichtbar markiert, nicht still auf einen Vollgewinn von 0 vereinheitlicht.
- Folie 62 bestreitet im Einleitungstext die Preissetzungsmacht des Einzelanbieters, führt unter den Annahmen jedoch „Preissetzungsmöglichkeit“ auf. Beide Aussagen und ihr Widerspruch werden markiert.
- Folie 55 behandelt p bei der Gewinnableitung als gegeben (Preisnehmer), setzt anschließend die Markt-Preis-Absatz-Funktion ein. Diese beiden Schritte bleiben ausdrücklich getrennt.
- Folie 51 positioniert p* am GK-Achsenabschnitt statt auf Höhe des Nachfrage-GK-Schnittpunkts. Originalgrafik erhalten und Warnhinweis ergänzt.

## Fidelity Audit und Quality Upgrade

Preserve-Map: alle 18 Vorlesungsfolien sind in der Reihenfolge 48 / 49–53 / 54–58 / 59–61 / 62–65 zugeordnet. Die Vertiefung hat eine eigene Section; alle fünf Fragen einschließlich 5a/5b sind vorhanden. Keine zusätzliche fachliche Quelle verwendet. Formeln, Tabellenwerte, Definitionen und der zeitlose Charakter der Monopolentscheidung bleiben erhalten.

Geprüfte und korrigierte Befunde:

1. Fixkosten-Einschränkung drohte durch Ergebniswert 0 verloren zu gehen → Warnhinweis bei Formeln und Tabellen-Caption.
2. Widerspruch Folie 62 → beide Aussagen in Annahmen/Quellwarnung erhalten.
3. Grafisch versetztes p* auf Folie 51 → Original erhalten und Auffälligkeit benannt.
4. Erste Crop-Versionen schnitten Ränder der Kostenkurven-Beschriftung an → PDF-Cropboxen korrigiert und alle sieben endgültigen Assets einzeln angesehen.
5. Einfaches symbolisches Angebotsdiagramm → nach zentraler DataChart-Erweiterung als Linie aus Vektorkoordinaten umgesetzt, numerische Layoutwerte nur intern; Source-Label nennt Rekonstruktion. Unbenutztes Rasteroriginal entfernt.
6. Keine Musterlösungen bei Folie 58 und der Vertiefung vorhanden → explizit markiert, keine eigenen Antworten als Quelllösung ausgegeben.

## Prüfnachweise

- `node tmp/ioek/teil-2-check.mjs`: MDX-Kompilation erfolgreich; sechs Section-IDs stimmen exakt mit Metadaten überein; sieben Asset-Imports existieren; vier Quizfragen als valides JSON.
- `npx eslint src/modules/semester-5/industrieoekonomik/topics/02-ioek-teil-2.js`: erfolgreich, Exit 0.
- Alle sieben finalen Originalausschnitte einzeln visuell geprüft. Folie 50 mit PDF-Vektorlinien abgeglichen.
- Keine Topic-CSS-Datei, kein eigener Komponentenbau, keine hartcodierten Farben oder neuen Projekt-Dependencies.
- Vier belegte Single-Choice-Fragen in `tmp/ioek/teil-2-questions.json` für zentrale Integration; keine geteilte Fragen-/Klausurdatei verändert.
- Vollständiger Build, gesamtes Repo-Lint und Browservergleich Desktop hell / Mobil dunkel laufen zentral beim Orchestrator nach Registrierung; diese sind hier nicht als bereits bestanden behauptet.

### Gerenderter Quellenvergleich nach Integration

- Erste zentrale Aufnahmefolge `output/playwright/ioek/ioek-teil-2-{1440|390}-figure-01.png` bis `figure-17.png` vollständig angesehen und gegen die gerenderten Quellfolien verglichen. Desktop hell, Mobil dunkel. Enthält sieben Originalausschnitte, Chart, Formeln und Tabelle.
- Die Originalausschnitte bewahren Achsen, Kurven, Flächen, Projektionspfeile und Schraffur; auf Mobil bleiben sie vollständig und sind über den Vergrößerungslink in Originalauflösung zugänglich. Kleine Beschriftungen in der Originalgrafik skalieren auf Mobil naturgemäß mit; ihre Inhalte stehen ergänzend im Alt-Text und im umgebenden Lerntext.
- Abb. 50 zeigte zunächst nur zwei der vier p-Ticks: Recharts hatte kollidierende Ticks ausgeblendet. Zentral wurde für explizite Ticks `interval: 0` ergänzt; lokal Höhe auf 420 erhöht, damit p₁–p₄ ausreichend Abstand haben.
- Formeln (1.4), (1.5), (1.6), (1.5′) waren auf Mobil intern horizontal scrollbar. Für vollständig sichtbare Rechenketten ohne Wischen in `gathered`-Zeilen umbrochen. Reihenfolge und Werte erhalten.
- Tabellenkopf „v. Wettbew.“ erhielt ausschließlich eine unsichtbare Umbruchmöglichkeit; sichtbare Quellbeschriftung unverändert.
- Quizfragen einzeln nochmals mit Folie 57 / 55 / 60–61 / 64–65 gegengeprüft: jeweils genau eine richtige Antwort, Indizes 1/3/0/2, Erklärungen und Quellen passen.
- Erster zentraler Build/Lint und Smoke-Test laut Orchestrator erfolgreich.
- Abschließende Neuaufnahme per `node tmp/ioek/teil-2-final-figures.cjs` an der integrierten Dev-Route: `output/playwright/ioek/ioek-teil-2-{1440|390}-final-figure-{04|12|13|14|15|16}.png`. Alle zwölf Aufnahmen einzeln angesehen: Chart zeigt jetzt p₁–p₄ und x₁–x₄ vollständig, die vier Formelketten sind vollständig sichtbar, der Tabellenkopf bricht auf Mobil ohne Textverlust um. Keine KaTeX-Fehler (beide Viewports 0). Damit gerenderter Quellenvergleich aller Abbildungen, Formeln und Tabelle in Desktop hell / Mobil dunkel abgeschlossen.
