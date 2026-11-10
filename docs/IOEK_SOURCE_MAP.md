# Industrieökonomik – Quellen und Integration

Modul `industrieoekonomik`, Semester 5, Wintersemester 26/27, Prof. Dr. Oliver Schlick.
Je Vorlesungsteil ein Topic; die zugehörige Vertiefung steht im selben Topic.
PDFs sind die Primärquelle; vorhandenes Markdown dient ausschließlich der Gegenprüfung.

| Topic-ID | Vorlesungsquelle | PDF-Seiten / gedruckte Folien | Vertiefung |
| --- | --- | --- | --- |
| `ioek-teil-1` | Industrieökonomik WS 26-27 Teil 1.pdf | 45 Seiten; Folien 1–25, 27–29, 31–47 | Teil 1: 1 Seite, 9 Aufgaben |
| `ioek-teil-2` | Industrieökonomik WS 26-27 Teil 2.pdf | 18 Seiten; Folien 48–65 | Teil 2: 1 Seite, 5 Aufgaben |
| `ioek-teil-3` | Industrieökonomik WS 26-27 Teil 3.pdf | 29 Seiten; Folien 66–94 | Teil 3: 1 Seite, 5 Aufgaben |

Alle sechs PDFs liegen unter `sources/semester-5/Industrieökonomik/`, die Vertiefungen im Unterordner `Übungsvertiefung/`. Das Modul verlinkt die Originaldateien über relative Vite-Assetimporte.

Die Gesamtgliederung im ersten Skript kündigt weitere Kapitel an. Diese drei Dateien decken nur Einführung, Propädeutik, vollkommene Konkurrenz, Monopol und Preisdiskriminierung ab. Aus der Agenda werden keine fehlenden Kapitel erfunden. Gedruckte Folien 26 und 30 fehlen in Teil 1.

## Abbildungstreue und Quellenprüfung

Vollständige seitenbezogene Inventare, die Begründung jedes Originalausschnitts, rekonstruierte Werte und Quellenauffälligkeiten:

- [Teil 1](IOEK_TEIL_1_BUILD_NOTES.md)
- [Teil 2](IOEK_TEIL_2_BUILD_NOTES.md)
- [Teil 3](IOEK_TEIL_3_BUILD_NOTES.md)

Jeder Teil wurde einem eigenen PDF-Topic-Builder zugewiesen; die Integration und übergreifende Prüfung liegen beim Orchestrator. Die Builder führen nach dem Bau einen Quellenabgleich und eine lokale Qualitätsprüfung anhand der bestehenden spezialisierten Rollenregeln durch. Separat erstellte Wissenschecks werden ausschließlich in `questions.js` registriert. Ohne belegte Prüfungsform wird keine Klausurdauer oder offizielle Probeklausur vorgegeben.

Die Vertiefungsblätter enthalten keine Musterlösungen. Das Topic kennzeichnet diese Lücke; vorhandene Musterrechnungen der Vorlesung werden übernommen.

## Zentrale Chart-Erweiterung

`DataChart` unterstützt für Liniendiagramme zusätzlich `xType="number"`, die bereits vorhandenen `xTicks`/`yTicks` und optional `showGrid={false}`. Damit lassen sich symbolische Quellachsen mit rekonstruierten PDF-Koordinaten zeigen, ohne zusätzliche Zahlen oder einen anderen Diagrammtyp einzuführen. Standardwerte und bisherige Charts bleiben erhalten. Neu verwendete Referenzlinienbeschriftungen haben 12 px Schriftgröße.

Explizite Achsenticks bleiben vollständig sichtbar. `Diagram` unterstützt optional eine Mindestbreite mit einem fokussierbaren inneren Scrollbereich, damit die horizontale SCP-Struktur mobil lesbar bleibt. Ein reproduzierter Mermaid-Fehler unter `prefers-reduced-motion: reduce` behielt die temporäre 2000-Pixel-Messfläche im SVG-ViewBox. Die zentrale Komponente korrigiert ausschließlich solche übergroßen Flowchart-ViewBoxes unter reduzierter Bewegung anhand der tatsächlich gerenderten Geometrie; ohne reduzierte Bewegung bleibt die Mermaid-Geometrie erhalten. Schriftmessungen warten auf die lokal geladenen Fonts.

## Übergreifende Qualitätsprüfung

- Drei Topics, 22 Sections, 35 referenzierte Originalausschnitte, zwölf quellengeprüfte Single-Choice-Fragen. Metadaten, eindeutige IDs, Ankerreihenfolge, Seitenangaben, relative Imports und ungenutzte Assets geprüft.
- `npm run lint`: 0 Fehler, 4 bereits bestehende Warnungen. `npm run build`: erfolgreich, bekannte Warnung zu großen Chunks. Keine neue Projekt-Dependency.
- Produktionsbuild mit Headless Edge bei 1440 px (hell) sowie 390 und 360 px (dunkel, reduzierte Bewegung): alle drei Topics und der Semester-/Modulzugang ohne Seitenoverflow, defekte Bilder, KaTeX-/Mermaidfehler, Konsolenfehler oder fehlgeschlagene Requests.
- Alle informativen Darstellungen wurden von den zuständigen Topic-Agenten anhand der Desktop-/Mobilaufnahmen mit den Quellfolien abgeglichen. Gefundene Crop-Ränder, fehlende Ticks, lange Formeln und das SCP-Diagramm korrigiert und erneut geprüft.
- Alle sechs gebündelten Original-PDFs: HTTP 200 und `application/pdf`. Inhaltsnavigation, Lernfortschritt nach Reload, Bild-Vergrößerungslink, Quellübungs-Lösungsschalter und Sichtbarkeit aller Lösungen im Druckmodus geprüft.
- Quiz vollständig durchgespielt: 12/12, Ergebnis in LocalStorage gespeichert. Stichproben bestehender Asset-Management-/Data-Science-Topics ohne Laufzeitfehler oder Seitenoverflow.
- Screenshots und maschinenlesbare Berichte: `output/playwright/ioek/verification.json`, `final-smoke.json` und die zugehörigen PNGs.

Verbleibende Quellgrenzen: fehlende Folien 26/30 und fehlende Vertiefungslösungen; keine belegte Prüfungsform. Detailreiche Originalgrafiken benötigen mobil für kleine Beschriftungen den vorhandenen Vergrößerungslink. Breite Tabellen und das SCP-Schema nutzen gekennzeichnete innere Scrollbereiche. Die Quellenauffälligkeiten und abgeleiteten Diagrammkoordinaten sind in den Teilinventaren und direkt im Lerninhalt kenntlich gemacht.
