# BF10 - Behavioral Corporate Finance_MD+PDF - Behavioral Corporate Finance: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `BF10 - Behavioral Corporate Finance.md` um die visuellen Inhalte, die bei der Markdown-Extraktion aus `BF10 - Behavioral Corporate Finance.pdf` verloren gegangen sind oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Tabellen oder Bildaussagen verloren gehen.

**Quelle:** `BF10 - Behavioral Corporate Finance.pdf` mit 24 Folien (Folie 341–364) und die dazugehörige Markitdown-Datei `BF10 - Behavioral Corporate Finance.md`. Alle 24 Seiten wurden für dieses Briefing als Bild gerendert und visuell geprüft (nicht nur textlich extrahiert).

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue/blaue Kopfzeile und Folien-Footer (`Behavioral Finance / CS / Folie XXX`) sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind: das CAR-Liniendiagramm zu M&A (Folie 346), das gestapelte Flächendiagramm zur Ausschüttungspolitik (Folie 353), das Balkendiagramm + die Tabelle zur IPO-Performance (Folie 359) und das zweiachsige Kombi-Diagramm zu IPO-Waves (Folie 360). Dieses Kapitel ist das **letzte Kapitel des gesamten Moduls** — die Folien 362–364 (Agenda-Recap, Modulziele, Abschluss-GIF) sind Kursabschluss-Material, kein neuer Fachinhalt zu Kapitel 10.

---

## Globale Umsetzungsregeln für React

1. **Zwei-Kasten-Kontrast (Folie 343):** Die Gegenüberstellung "Traditionelle Corporate Finance Theorie" (grau-blauer Kasten) vs. "Behavioral Corporate Finance" (pfirsich-/orangefarbener Kasten) ist die zentrale Einstiegsfolie des Kapitels und sollte als zweispaltiger `CompareCard`-Kontrast umgesetzt werden, nicht als Fließtext.
2. **CAR-Diagramm (Folie 346) neu aufbauen:** Zwei Linien (Targets grün, Acquirer/Bieter dunkelrot) über Tage vor/nach Ankündigung (-60 bis +60), y-Achse 0–16%+. Als `DataChart type="line"` mit zwei Serien und einer vertikalen Markerlinie bei "Press day" umsetzen.
3. **Gestapeltes Flächendiagramm (Folie 353) neu aufbauen:** Drei Kategorien (Nur Dividenden, Dividenden & Rückkäufe, Nur Aktienrückkäufe) über 1975–2007, y-Achse 0–80%. Klarer Abwärtstrend von ~70% (1978 Hoch ~75%) auf ein Tief um ~37–40% (frühe 2000er/2003–2004), leichter Wiederanstieg auf ~47% bis 2007. Als `DataChart type="area"` (gestapelt) umsetzen.
4. **IPO-Performance (Folie 359):** Balkendiagramm + Tabelle sind beide im Render exakt lesbar (siehe Werte unten) und werden 1:1 als `DataChart type="bar"` + `DataTable` rekonstruiert.
5. **IPO-Waves (Folie 360):** Zweiachsiges Kombi-Diagramm (Balken = Erträge in USD Mrd., linke Achse 0–70; Linie mit Rautenmarkern = Anzahl der Angebote, rechte Achse 0–700) über 1975–2014. Als `DataChart` mit zwei Y-Achsen (bar + line Serie) umsetzen.
6. **Fotoband auf Titelfolie (Folie 341) rein dekorativ:** vier Stockfotos (Tablet mit HBW-Logo, lächelnde Frau, Gespräch zweier Personen, Bürogebäude) — gehört zum globalen `ChapterTitleSlide`-Template, kein Fachinhalt.
7. **Callouts/Merksätze erhalten:** "Synergien sind nicht notwendig!" (Folie 347), "The winner's curse." (Folie 348), "Dividend Smoothing." (Folie 357) als hervorgehobene Merksätze/Callouts abbilden.
8. **Kapitelabschluss (Folien 362–364) nicht als Fachinhalt rendern:** Agenda-Recap ist identisch zu Folie 342 (nur ohne Kapitel-10-Highlight, da nach Kapitel 9 benannt in der Fußzeile — inhaltlich Dopplung). Modulziele (Folie 363) bündelt Lernziele über alle 10 Kapitel und ist kein neuer Stoff zu Behavioral Corporate Finance. Folie 364 ist ein reines Abschluss-GIF ohne Fachinhalt. Alle drei werden im Topic-Build bewusst ausgelassen (siehe Non-negotiable Nr. 2: kein Stoff, der nicht zum Kapitelinhalt gehört).
9. **Quellenangaben erhalten:** Asquith (1983), Bradley et al. (JoFE 1988), Sirower (1998), Baker/Nofsinger (2010), Berk/DeMarzo (2011, 2018), Ritter (2014), Brav/Gompers (JoF 1997) als `SourceNote` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapitel-Titelfolie mit Bildband |
| `AgendaList` | 2 | 10-Punkte-Agenda mit aktivem Kapitelmarker (Punkt 10) |
| `CompareCard` / `TwoColumnCompare` | 3 | Traditionelle vs. Behavioral Corporate Finance Theorie |
| `AssumptionsList` / `BulletCard` | 4, 5 | Rahmenbedingungen und Indizien für Selbstüberschätzung |
| `CumulativeReturnChart` (`DataChart line`) | 6 | CAR-Kurven Targets/Acquirer bei M&A |
| `CompareCard` | 7, 8 | Reasons for M&A's that (don't) make sense |
| `BulletCard` | 9 | Überblick Maßnahmen zur Begrenzung der Selbstüberschätzung |
| `TwoColumnCompare` | 10 | Externe vs. interne CG-Mechanismen |
| `BulletCard` | 11 | Kontrolle durch FK-Geber |
| `TwoColumnCompare` | 12 | Thesaurierung vs. Ausschüttung |
| `PayoutPolicyChart` (`DataChart area` gestapelt) | 13 | Ausschüttungspolitik Befunde US-Markt |
| `BulletCard` + Callout | 14 | Dividende vs. Aktienrückkauf (Substitutionsverhältnis) |
| `BulletCard` | 15, 16 | Ökonomische und verhaltensorientierte Gründe für Dividenden |
| `CompareCard` + Callout | 17 | Dividendenänderungen im Licht der Prospect Theory |
| `BulletCard` | 18 | IPO-Underpricing: Definition und Erklärungsansätze |
| `IpoPerformanceChart` (`DataChart bar` + `DataTable`) | 19 | Ritter (2014): IPO- vs. size/BM-gematchte Renditen |
| `IpoWavesChart` (`DataChart` zweiachsig) | 20 | Zyklizität von US-Neuemissionen 1975–2014 |
| `BulletCard` | 21 | Langfristige Underperformance von IPOs |

---

# Folienweise Ergänzungen

## Folie 1 (Folie 341) – Kapitel 10: Behavioral Corporate Finance (Titelfolie)

### In der MD vorhanden
Titelzeilen "Behavioral Finance", "Kapitel 10", "Behavioral Corporate Finance", Versionskennung "V26-05-17". Fußzeile "Behavioral Finance / CS / Folie 341".

### Fehlende visuelle Inhalte
Oben eine horizontale Reihe aus vier rechteckigen Fotos: (1) Hand hält Tablet mit HBW-Logo, (2) lächelnde junge Frau (Porträt), (3) zwei Personen im Gespräch, (4) modernes Glas-/Bürogebäude mit Wasserbecken. Hintergrund hellblau-grau, unten links der Kapiteltitel.

### Fachliche Aussage
Reine Eröffnungsfolie zu Kapitel 10, keine Fachinhalte.

### React-Vorschlag
`ChapterTitleSlide` (globales Template), Bildband dekorativ.

---

## Folie 2 (Folie 342) – Agenda

### In der MD vorhanden
Vollständige 10-Punkte-Agenda als nummerierte Liste.

### Fehlende visuelle Inhalte
Punkt 10 "Behavioral Corporate Finance" ist blau und fett hervorgehoben (aktiver Kapitelmarker); alle übrigen Punkte schwarz.

### React-Vorschlag
`AgendaList` mit `activeIndex={9}`.

---

## Folie 3 (Folie 343) – Traditionelles vs. Behavioral Corporate Finance

### In der MD vorhanden
Leitfrage und beide nummerierten Listen (Traditionelle Theorie, Behavioral Corporate Finance) vollständig als Text vorhanden.

### Fehlende visuelle Inhalte
Zwei deutlich getrennte, farbig hinterlegte Kästen: oberer Kasten hellblau-grau mit fetter Überschrift "Traditionelle Corporate Finance Theorie"; unterer Kasten pfirsich-/orangefarben mit fetter Überschrift "Behavioral Corporate Finance". Die Kastenformatierung geht in der MD verloren.

### Inhaltliche Rekonstruktion
Leitfrage: "Wie lassen sich empirisch beobachtbare Finanzierungs- und Investitionsmuster erklären, die sich aus dem Zusammenspiel von Managern und Investoren ergeben?"

| | Traditionelle Corporate Finance Theorie | Behavioral Corporate Finance |
|---|---|---|
| Grundannahme | Überzeugungen und Präferenzen von Agenten völlig rational | Empirische Evidenz, schwer mit klassischen Rationalitätsannahmen vereinbar |
| Investoren/Manager | 1. Investoren gehen davon aus, dass Manager rational auf Governance-Anreize reagieren. 2. Manager können effiziente Märkte annehmen. | 1. Manager sind Individuen, die begrenzt rational sind. 2. Kapitalmärkte sind nicht vollständig effizient. |

### Fachliche Aussage
Behavioral Corporate Finance stellt der Annahme vollständig rationaler Manager und effizienter Märkte die empirische Evidenz begrenzter Rationalität und unvollständiger Markteffizienz gegenüber.

### React-Vorschlag
`CompareCard` (zwei Items, tone neutral vs. warning/purple) oder `TwoColumnCompare` mit den beiden Farbkästen.

---

## Folie 4 (Folie 344) – Managerial Overconfidence: Rahmenbedingungen

### In der MD vorhanden
Einleitungssatz und alle fünf Aufzählungspunkte vollständig vorhanden, inkl. fett hervorgehobener Schlüsselbegriffe ("Komplexität", "Individualität", "Gefahr der Selbstattribution", "Kontrollillusion", "Anwendung der Verfügbarkeitsheuristik").

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift "Unternehmensleitung und die Gefahr der Selbstüberschätzung". Keine Grafik.

### Inhaltliche Rekonstruktion
Rahmenbedingungen, die die Neigung zur Selbstüberschätzung fördern:
- **Komplexität** von Investitionsentscheidungen: Selbstüberschätzung besonders bei Unsicherheit verbreitet.
- **Individualität** von Investitionsentscheidungen: Entscheidungsqualität erst spät messbar → Lerneffekte bleiben aus.
- Beförderung erfolgreicher Manager → Gefahr der **Selbstattribution**.
- Hohe Wahrscheinlichkeit der **Kontrollillusion**, bedingt durch Erfahrung, Ausbildung.
- Unzureichendes Risikomanagement: Anwendung der **Verfügbarkeitsheuristik**. Besonders relevant bei Start-ups (hohe Abhängigkeit von Firmengründern).

### React-Vorschlag
`BulletCard` mit fett hervorgehobenen Schlüsselbegriffen.

---

## Folie 5 (Folie 345) – Managerial Overconfidence: Indizien

### In der MD vorhanden
Einleitungssatz mit Quelle (Baker/Nofsinger, 2010, S. 408ff.) und alle drei Indizien vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. "Indizien für Selbstüberschätzung" im Einleitungssatz blau/fett hervorgehoben.

### Inhaltliche Rekonstruktion
Indizien für Selbstüberschätzung (vgl. Baker/Nofsinger, 2010, S. 408ff.):
- (riskante, fremdfinanzierte) M&A-Transaktionen
- Geringe Dividendenausschüttungsquoten; stattdessen verstärkter Rückkauf eigener Aktien
- Selbstsichere Außenkommunikation (z. B. in Zeitungsartikeln)

### React-Vorschlag
`BulletCard` (kompakt, 3 Punkte), Quelle als `SourceNote`.

---

## Folie 6 (Folie 346) – M&A-Transaktionen (CAR-Diagramm)

### In der MD problematisch/fehlend
Text und Quellenangaben vollständig vorhanden; das CAR-Liniendiagramm ist in der MD nur als verstreute Zahlen/Achsenbeschriftungen extrahiert. Im Render sind Kurvenverlauf und Achsen klar lesbar.

### Fehlende visuelle Inhalte
Liniendiagramm "CAR" (cumulative abnormal return) über "Days before and after the announcement" (-60 bis +60, "Press day" als vertikale Referenzlinie bei 0):
- **Targets** (grüne Linie): startet nahe 0% bei Tag -60, verläuft bis ca. Tag -20 flach leicht positiv, steigt ab kurz vor dem Press day steil an und erreicht danach ein Plateau bei ca. **+16–17%**.
- **Acquirer/Bieter** (dunkelrote Linie): verläuft über den gesamten Zeitraum nahe flach, leicht positiv, endet bei ca. **+4–5%**.
- Y-Achse: 0%, +8%, +16% (gestrichelte Hilfslinien).

### Inhaltliche Rekonstruktion
- M&A-Transaktionen scheitern oftmals aus Perspektive der Aktionäre des Bieterunternehmens.
- Empirie: Bradley et al. (JoFE 1988): CAR bei Targets +28%, CAR bei übernehmenden Unternehmen +2%. Sirower (1998): CAR für Targets +30,1%, CAR für Bieter −2,6%.
- Quelle des Diagramms: Asquith (1983).

### Fachliche Aussage
Die Kursreaktion konzentriert sich fast vollständig beim Zielunternehmen (Targets); die Aktionäre des Bieterunternehmens profitieren allenfalls marginal — ein zentraler empirischer Beleg gegen naive Rationalitätsannahmen bei Übernahmen.

### React-Vorschlag
`DataChart type="line"` mit zwei Serien (Targets grün, Acquirer dunkelrot), `markers` für "Press day"-Vertikale, `SourceNote` Asquith (1983).

---

## Folie 7 (Folie 347) – M&A-Transaktionen: Reasons for M&A's that make sense

### In der MD vorhanden
Beide Blöcke (Effizienzsteigerung, Synergien) mit allen Punkten vollständig vorhanden, inkl. fett "Synergien sind nicht notwendig!" und "überschätzt"/"unterschätzt".

### Fehlende visuelle Inhalte
Zwei blau überschriebene Blöcke "Effizienzsteigerung" und "Synergien". Keine Grafik.

### Inhaltliche Rekonstruktion
**Effizienzsteigerung:**
- Ausgangsbasis: Management des Zielunternehmens ist ineffizient.
- Folge: niedrige Marktbewertung (ggf. kombiniert mit hohen Cash-Reserven).
- Wertsteigerung durch Restrukturierung, Aufspaltung/Verkauf unrentabler Teile, Umbesetzung von Vorstand/Aufsichtsrat, Änderung des Verschuldungsgrads.
- **Synergien sind nicht notwendig!** Oftmals Finanzinvestor als Käufer.

**Synergien:** Economies of Scale, Zugang zu neuen Technologien, Prozessoptimierungen, vertikale Integration, finanzielle Synergien (Cash Pooling, Mengeneffekte bei Emissionskosten).

Synergien werden oftmals **überschätzt** bzw. die Probleme bei der Post-Merger-Integration **unterschätzt**.

### React-Vorschlag
`CompareCard` (zwei Items) mit hervorgehobenem Merksatz "Synergien sind nicht notwendig!".

---

## Folie 8 (Folie 348) – M&A-Transaktionen: Reasons for M&A's that don't make sense

### In der MD vorhanden
Beide Blöcke (Hybris-Hypothese, Agency-Probleme) vollständig vorhanden, inkl. fett "Hybris", "The winner's curse.".

### Fehlende visuelle Inhalte
Blaue/fette Überschrift "Hybris-Hypothese:" mit unterstrichenem "verhaltenswissenschaftlicher". Blaue Überschrift "Agency-Probleme". Keine Grafik.

### Inhaltliche Rekonstruktion
**Hybris-Hypothese** (verhaltenswissenschaftlicher Erklärungsansatz):
- Sind Märkte informationseffizient, sind bereits alle Informationen zum Zielunternehmen in dessen Kursen verarbeitet.
- Bei Übernahmeangeboten deutlich über dem ökonomischen Wert des Zielunternehmens ist **Hybris** ein wesentlicher Erklärungsansatz.
- Folge: **The winner's curse.**

**Agency-Probleme:**
- M&A-Transaktion als Manifestation von Agency-Problemen.
- Free Cash Flow Hypothese: Auszahlung an Aktionäre reduziert die Ressourcen (und Macht) der Manager; werden Free Cash Flows stattdessen zur Übernahme genutzt, steigt Macht/Ansehen der Manager.

### React-Vorschlag
`CompareCard` (zwei Items, tone warning/negative), Merksatz "The winner's curse." als Callout.

---

## Folie 9 (Folie 349) – Begrenzung der Selbstüberschätzung: Überblick

### In der MD vorhanden
Alle fünf Maßnahmen vollständig vorhanden, inkl. fett hervorgehobener Fachbegriffe.

### Fehlende visuelle Inhalte
Keine Grafik.

### Inhaltliche Rekonstruktion
Mögliche Maßnahmen zur Begrenzung der Selbstüberschätzung:
- Beachtung der Selbstüberschätzung: **Schulung der Unternehmenslenker**.
- Einführung eines **Risikomanagementsystems**.
- **Anpassung vertraglicher Anreize (incentives)**, z. B. längere Mindesthaltedauern von Aktienoptionen, mögliche Verlustbeteiligungen.
- Kalkulation künftiger Cash Flows mit **höheren Diskontierungsfaktoren**.
- **Externe und interne Corporate Governance Mechanismen**, z. B. verstärkte Kontrolle durch Aufsichtsräte (auch hier Gefahr der Selbstüberschätzung), Großaktionäre oder FK-Geber.

### React-Vorschlag
`BulletCard` mit fett hervorgehobenen Maßnahmen.

---

## Folie 10 (Folie 350) – Begrenzung der Selbstüberschätzung: Externe und interne CG

### In der MD vorhanden
Definition CG-Mechanismen sowie beide Listen (externe/interne Mechanismen) vollständig vorhanden.

### Fehlende visuelle Inhalte
Zwei blau überschriebene Blöcke "Typische externe CG-Mechanismen" und "Gängige interne CG-Mechanismen". Keine Grafik.

### Inhaltliche Rekonstruktion
**CG-Mechanismen:** Maßnahmen zur Kontrolle des Managements zur Reduktion von Agency-Kosten.

| Typische externe CG-Mechanismen | Gängige interne CG-Mechanismen |
|---|---|
| Produktmarkt: Wettbewerb reduziert opportunistischen Spielraum | Eigentümerstruktur (Exit- oder Voice-Strategie) |
| Markt für Manager | Kapitalstruktur (Kontrolle durch FK-Geber) |
| Markt für Unternehmenskontrolle: Disziplinarwirkung feindlicher Übernahmen | Kontrolle durch Aufsichtsgremien |
| | Vergütungssystem |

### React-Vorschlag
`TwoColumnCompare` (extern vs. intern).

---

## Folie 11 (Folie 351) – Begrenzung der Selbstüberschätzung: Kontrolle durch FK-Geber?

### In der MD vorhanden
Alle Punkte inkl. fett hervorgehobener Kernbegriffe ("Disziplinierung der Manager", "Anreiz zu verstärkter Kontrolle...", "Eigner-Gläubiger-Konflikte") vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Fragezeichen im Folientitel deutet auf kritische Reflexion hin.

### Inhaltliche Rekonstruktion
- Theoretisch: **Disziplinierung der Manager** durch Kontrolle finanzierender Hausbanken.
- Hohe Kontrollqualität denkbar: Skaleneffekte der Kontrollausübung, gute Informationsbasis (Offenlegungspflichten).
- Besondere Bedeutung bei künftigem Fremdkapitalbedarf und/oder zusätzlichem EK-Investment des Kreditinstituts.
- Aber: Der **Anreiz zu verstärkter Kontrolle durch einen Fremdkapitalgeber** nimmt erst mit wachsender Gefahr **ökonomischen Misserfolgs** zu.
- Zudem: **Eigner-Gläubiger-Konflikte** (z. B. bei Ausschüttungspolitik).

### React-Vorschlag
`BulletCard` mit "Aber:"-Absatz als eigenständig hervorgehobener Punkt.

---

## Folie 12 (Folie 352) – Verwendungsmöglichkeiten der Free Cash Flows

### In der MD vorhanden
Beide Blöcke (Thesaurierung, Ausschüttung) vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Blaue Zwischenüberschriften "Thesaurierung" und "Ausschüttung".

### Inhaltliche Rekonstruktion
Leitfrage: Verwendung der freien Cash Flows – Thesaurierung oder Ausschüttung?

| Thesaurierung | Ausschüttung |
|---|---|
| Investitionen in neue Projekte (Voraussetzung: Wachstumspotenzial) | Dividendenzahlung |
| Erhöhung der Barreserven (Sicherheitsgedanke) | Aktienrückkauf |
| (vorzeitige) Tilgung von Fremdkapital (Optimierung der Kapitalstruktur) | |

### React-Vorschlag
`TwoColumnCompare` (Thesaurierung vs. Ausschüttung).

---

## Folie 13 (Folie 353) – Ausschüttungspolitik: Befunde US-Markt

### In der MD problematisch/fehlend
In der MD nur als Bildverweis/Quellenangabe vorhanden ("aus: Berk/DeMarzo (2011), S. 626"); das eigentliche Diagramm fehlt komplett.

### Fehlende visuelle Inhalte
Gestapeltes Flächendiagramm ("Abbildung 17.4: Der Rückgang der Ausschüttungen und der Umfang der Dividendenausschüttungen"), x-Achse Jahre 1975–2007, y-Achse "Anteil der Unternehmen" 0–80% in 10%-Schritten. Drei gestapelte Kategorien (von unten nach oben, dunkel nach hell):
- **Nur Dividenden** (dunkelster Ton, unterste/größte Fläche)
- **Dividenden & Rückkäufe** (mittlerer Ton)
- **Nur Aktienrückkäufe** (hellster Ton, oberste Fläche)

Gesamtverlauf (obere Kontur = Summe aller drei Kategorien): steigt von ca. 70% (1975) auf ein Hoch von ca. **75%** (1978), fällt danach kontinuierlich ab auf ein Tief von ca. **37–40%** (frühe/mittlere 2000er, lokales Minimum um 2003/2004), steigt zum Ende hin wieder auf ca. **47%** (2007) an. Innerhalb des Gesamtrückgangs verschiebt sich die Zusammensetzung: der Anteil "Nur Dividenden" schrumpft am stärksten, während "Nur Aktienrückkäufe" und "Dividenden & Rückkäufe" relativ zunehmen.

### Inhaltliche Rekonstruktion
Bildunterschrift (Quelle): "Diese Abbildung zeigt den Anteil der an der Börse gehandelten US-Industrieunternehmen, der in den jeweiligen Jahren Auszahlungen an die Aktionäre getätigt hat. Die farbigen Bereiche zeigen die Unternehmen, die ausschließlich Dividenden, ausschließlich Aktienrückkäufe oder beides verwendet haben. Zu beachten ist der Trend, dass mit der Zeit immer weniger Dividenden gezahlt wurden, wobei Unternehmen, die Ausschüttungen getätigt haben, ein höheres Maß an Aktienrückkäufen aufweisen und der Anteil der Unternehmen, die überhaupt Auszahlungen vornehmen, insgesamt rückläufig ist." Quelle: Compustat; aus Berk/DeMarzo (2011), S. 626.

### Fachliche Aussage
Der Anteil ausschüttender US-Unternehmen ist seit Ende der 1970er-Jahre strukturell rückläufig; innerhalb der verbleibenden Ausschüttungen verschiebt sich das Gewicht von reinen Dividenden hin zu Aktienrückkäufen — ein empirischer Beleg für den auf Folie 354 diskutierten Substitutionstrend.

### React-Vorschlag
`DataChart type="area"` gestapelt (3 Serien), `SourceNote` Compustat / Berk/DeMarzo (2011), S. 626.

---

## Folie 14 (Folie 354) – Dividende vs. Aktienrückkauf

### In der MD vorhanden
Alle Argumente und der "Aber:"-Absatz vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Fett: "Argumente für ein substitutives Verhältnis...", "Aber:".

### Inhaltliche Rekonstruktion
Argumente für ein substitutives Verhältnis zwischen Dividende und Aktienrückkauf:
- Empirisch: steigender Anteil an Emittenten, die Aktien zurückkaufen, bei gleichzeitigem Rückgang des relativen Anteils der Dividendenzahler.
- Im vollkommenen Markt: perfekte Substitute.
- Bei Informationsasymmetrien: sowohl positive Signalwirkung der Dividende als auch des Aktienrückkaufs.

**Aber:** Zwischen Dividendenzahlern und Emittenten, die Aktien zurückkaufen, bestehen z. T. systematische Unterschiede.
- Dividendenausschüttende Emittenten sind i.d.R. deutlich größer (Marktkapitalisierung).
- Deren Cash Flows weisen eine höhere Stabilität auf.

Hintergrund: Dividendenkontinuität.

### React-Vorschlag
`BulletCard` + Callout (Variante info) für "Aber:"-Absatz.

---

## Folie 15 (Folie 355) – Gründe für Dividendenausschüttungen: ökonomisch

### In der MD vorhanden
Alle vier ökonomischen Gründe vollständig vorhanden, inkl. fett "sichere Renditekomponente", "Signalfunktion", "Präferenz für Dividendenausschüttung", "Disziplinierung".

### Fehlende visuelle Inhalte
Keine Grafik.

### Inhaltliche Rekonstruktion
Ökonomische Gründe für Dividendenausschüttungen:
- Dividende als **sichere Renditekomponente**, während Kursgewinne unsicher sind. Theoretische Folge: Rückgang der Eigenkapitalkosten.
- Indiz für wirtschaftliche Stärke → Abbau von Informationsasymmetrien gegenüber externen Kapitalgebern. **Signalfunktion** insb. gegenüber uninformierten Anlegern.
- Nachfrage von Aktionären nach laufenden Zahlungsmittelzuflüssen → **Präferenz für Dividendenausschüttung** insb. institutioneller Anleger (z. B. regulatorische Vorgaben).
- Ausschüttende Unternehmen weisen nicht zwingend geringeres Wachstum auf; trotz weniger Investitionskapital ggf. "bessere" Investitionsentscheidungen → **"Disziplinierung" des Managements**.

### React-Vorschlag
`BulletCard` mit fett hervorgehobenen Fachbegriffen.

---

## Folie 16 (Folie 356) – Gründe für Dividendenausschüttungen: verhaltensorientiert

### In der MD vorhanden
Alle drei verhaltensorientierten Gründe sowie die fett hervorgehobene Schlussfolgerung vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik.

### Inhaltliche Rekonstruktion
Verhaltensorientierte Gründe für Dividendenausschüttungen:
- **Sentiment der Marktteilnehmer:** Nachfrage nach Dividendenausschüttungen ändert sich abhängig von der Risikoneigung; in Rezessionsphasen geringere Risikoneigung, schlechtes Sentiment, hohe Nachfrage nach Dividendentiteln.
- **Selbstkontrolle:** Marktteilnehmer präferieren Dividendentitel als Schutz vor übereiltem Verkauf.
- **Mentale Buchführung:** Verbuchung von Dividenden in einem "Konsumkonto", von Aktien in einem "Anlagekonto".

**Demnach schütten Unternehmen also Dividenden aus, um den durch den Anleger wahrgenommenen Wert des Wertpapiers zu erhöhen.**

### React-Vorschlag
`BulletCard` + abschließender Merksatz fett/hervorgehoben.

---

## Folie 17 (Folie 357) – Dividendenänderungen

### In der MD vorhanden
Alle Punkte vollständig vorhanden.

### Fehlende visuelle Inhalte
Farbcodierung im Render: "Dividendenkürzungen" in Orange/Braun, "stark negativ" fett; "Dividendenerhöhungen" in Grün, "leicht positiv" fett. Diese Farbunterscheidung (negativ = warm, positiv = grün) geht in der MD verloren.

### Inhaltliche Rekonstruktion
- Kursreaktionen auf Dividendenänderungen stehen im Einklang mit den Implikationen der **Prospect Theory**:
  - **Dividendenkürzungen** sind besonders "schmerzvoll"; Kursreaktion fällt i.d.R. **stark negativ** aus.
  - **Dividendenerhöhungen** stiften vergleichsweise geringen Nutzen; Kursreaktion fällt **leicht positiv** aus.
- Manager versuchen daher, Dividendenkürzungen zu vermeiden. Dividenden werden nur angehoben, wenn zukünftige Kürzungen unwahrscheinlich sind.
- Ergebnis: **Dividend Smoothing.**

### Fachliche Aussage
Die asymmetrische Kursreaktion (starke Strafe bei Kürzung, schwache Belohnung bei Erhöhung) folgt der Verlustaversion der Prospect Theory und erklärt, warum Manager Dividenden geglättet und vorsichtig erhöhen (Dividend Smoothing).

### React-Vorschlag
`CompareCard` (Kürzung tone negative/warning, Erhöhung tone positive) + Callout "Dividend Smoothing."

---

## Folie 18 (Folie 358) – Besonderheiten bei IPOs: Underpricing

### In der MD vorhanden
Alle Punkte inkl. Prozentangaben vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik.

### Inhaltliche Rekonstruktion
**Initial Public Offerings:** 2 Phänomene (weltweit): 1. (kurzfristig) Underpricing, 2. (langfristig) Underperformance.

**Underpricing:** Anleger erzielen bei der Erstemission von Aktien positive, marktbereinigte Emissionsrenditen. Durchschnittliche Emissionsrendite am deutschen Kapitalmarkt zwischen **10% und 20%**. Extremfall: Neuer Markt mit Emissionsrenditen **> 40%**.

Erklärungsansätze für Underpricing:
- Emissionskurse werden unabsichtlich (fehlerhaft) zu niedrig angesetzt (heute weniger realistisch).
- Kurse am ersten Börsentag größer als wahre Werte, da (1) Emissionsbanken Kurspflege betreiben und/oder (2) einige Anleger IPO-Wertpapiere systematisch zu hoch einschätzen ("optimistisch" gestimmte Anleger).
- Bewusstes Underpricing aufgrund von Informationsasymmetrien.

### React-Vorschlag
`BulletCard` mit `KpiGrid` für die Prozentspannen (10–20%, >40%).

---

## Folie 19 (Folie 359) – Performance von IPOs

### In der MD vorhanden
Die Tabelle wurde in der MD als kaputte, doppelt gebrochene Markdown-Tabelle extrahiert; im hochaufgelösten Render sind Balkendiagramm und Tabelle jedoch vollständig und eindeutig lesbar (bestätigt exakte Übereinstimmung mit den MD-Zahlenwerten).

### Fehlende visuelle Inhalte
Gruppiertes Balkendiagramm (dunkelblau = "IPO firms", hellblau/grau = "size & BM-matched") über 8 Kategorien, y-Achse 0–20%.

### Inhaltliche Rekonstruktion
Ritter (2014): Comparison of IPO returns and firms matched by size and M/B ratio (1970–2012)

| | First six month | Second six month | First year | Second year | Third year | Fourth year | Fifth year | Geometric Mean years 1–5 |
|---|---|---|---|---|---|---|---|---|
| IPO firms | 6,5% | 1,0% | 7,8% | 6,9% | 12,0% | 18,4% | 11,0% | 11,1% |
| Size & BM-Matched | 3,9% | 4,9% | 9,2% | 12,8% | 11,9% | 18,5% | 13,2% | 13,0% |
| Difference | 2,5% | −3,8% | −1,3% | −5,9% | 0,0% | −0,1% | −2,2% | −1,9% |
| No. of IPOs | 8.397 | 8.370 | 8.397 | 8.226 | 7.505 | 6.613 | 5.823 | — |

### Fachliche Aussage
IPO-Unternehmen performen über den 5-Jahres-Horizont im geometrischen Mittel (11,1%) schlechter als größen- und bewertungsgematchte Vergleichsunternehmen (13,0%) — eine Differenz von −1,9 Prozentpunkten, konsistent mit der langfristigen IPO-Underperformance.

### React-Vorschlag
`DataChart type="bar"` (2 Serien) + `DataTable` darunter, `SourceNote` Ritter (2014).

---

## Folie 20 (Folie 360) – IPO-Waves

### In der MD problematisch/fehlend
In der MD nur die Bildunterschrift/Quelle vorhanden; das eigentliche Kombi-Diagramm fehlt komplett.

### Fehlende visuelle Inhalte
"Abbildung 19.5: Zyklizität von Neuemissionen in den Vereinigten Staaten." Zweiachsiges Kombi-Diagramm, x-Achse Jahre 1975–2014:
- Balken "Erträge (USD Milliarden)" (pfirsichfarben), linke y-Achse 0–70. Werte niedrig in den 1970er/1980er-Jahren (unter 20), steigen deutlich in den späten 1990ern auf ein Hoch von ca. **65 Mrd. USD** (1999–2000), fallen danach ab, zweites Hoch ca. **47 Mrd. USD** (2014).
- Linie mit roten Rautenmarkern "Anzahl der Angebote", rechte y-Achse 0–700. Mehrere Wellen: Anstieg auf ca. 500 (Anfang 1980er), Rückgang, starker Anstieg auf ein Maximum von ca. **690** (1996), Rückgang auf ein Tief nahe **20–30** (2008/2009, Finanzkrise), langsame Erholung danach auf ca. 220 (2014).

### Inhaltliche Rekonstruktion
Bildunterschrift: "Die Grafik zeigt die Anzahl der Neuemissionen und den gesamten Dollarbetrag der angebotenen Aktien pro Jahr. Die Anzahl und der Betrag der Neuemissionen erreichten Ende der 1990er-Jahre einen Höchststand und sie sind sehr zyklisch." Quelle: übernommen von Jay Ritter aus "Initial Public Offerings: Tables Updated through 2014"; aus Berk/DeMarzo (2018), S. 725.

### Fachliche Aussage
IPO-Aktivität (Anzahl wie Volumen) verläuft hochgradig zyklisch mit einem ausgeprägten Höchststand während des Dotcom-Booms Ende der 1990er und einem tiefen Einbruch während der Finanzkrise 2008/2009 — ein empirischer Beleg für die auf Folie 5 genannte "Selbstüberschätzung"/Marktsentiment-getriebene Timing-Problematik bei Börsengängen.

### React-Vorschlag
`DataChart` mit zwei Y-Achsen (Balken-Serie "Erträge" + Linien-Serie "Anzahl der Angebote"), `SourceNote` Ritter / Berk/DeMarzo (2018), S. 725.

---

## Folie 21 (Folie 361) – Langfristige Underperformance von IPOs

### In der MD vorhanden
Beide nummerierten Erklärungsansätze vollständig vorhanden, inkl. fett hervorgehobener Kernaussagen.

### Fehlende visuelle Inhalte
Keine Grafik.

### Inhaltliche Rekonstruktion
Diverse Studien dokumentieren eine negative Performance von IPO-Kandidaten im Zeitraum von 3 bis 5 Jahren nach Erstemission. Die Underpricing-Renditen werden innerhalb von ca. 6 Monaten nach Erstemission aufgezehrt. Mögliche Erklärungen:
1. **Brav und Gompers (JoF 1997):** negative Performance tritt speziell bei Unternehmen mit geringer Marktkapitalisierung und geringem Verhältnis Buchwert zu Marktwert auf. Hintergrund: tatsächliche Gewinne weichen signifikant nach unten von den realisierten Gewinnen ab — die Preisbildung beim Börsengang wurde durch **zu optimistische Investoren/Analysten** beeinflusst.
2. Insb. Werte, die in einer Boom-Phase an die Börse gegangen sind, verzeichnen eine Underperformance — ggf. **Ausnutzung einer Überbewertung bei IPO**.

### React-Vorschlag
`BulletCard` (2 nummerierte Erklärungsansätze), `SourceNote` Brav/Gompers (JoF 1997).

---

## Folien 22–24 (Folien 362–364) – Kapitel- und Modulabschluss (nicht Teil des Topic-Contents)

### In der MD vorhanden
Folie 362: identische Agenda-Liste wie Folie 342, jedoch ohne Kapitel-10-Highlight (Fußzeile bereits bei Folie 362, Liste zeigt nur 9 sichtbare Punkte in der MD-Extraktion, Kapitel 10 fehlt in der Aufzählung selbst — Darstellungsartefakt der Quelle). Folie 363: vollständige Liste der sieben Modulziele. Folie 364: "Glückwunsch! Sie haben es geschafft!" mit Quellenangabe zu einem GIF.

### Fehlende visuelle Inhalte
Folie 364 zeigt ein Standbild eines animierten GIFs (jubelnde Person im Publikum bei einer Award-Verleihung, buntes Publikum im Hintergrund) — rein illustrativ, keine Fachaussage.

### Fachliche Aussage
Diese drei Folien schließen das **gesamte Behavioral-Finance-Modul** ab (nicht nur Kapitel 10): Agenda-Rückblick, gebündelte Lernziele über alle 10 Kapitel, Abschlussgruß. Sie enthalten keinen neuen, kapitel-10-spezifischen Fachinhalt und wurden entsprechend Non-negotiable Nr. 2 (kein Stoff außerhalb des Kapitelinhalts) nicht in die Topic-MDX übernommen.

### React-Vorschlag
Keiner — bewusst ausgelassen. Falls künftig ein modulweiter Abschluss-Screen gewünscht wird, separates Komponenten-Konzept außerhalb des Topic-Contents.
