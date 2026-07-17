// Static metadata for Kapitel 10 · Behavioral Corporate Finance.
// Content lives in 10-behavioral-corporate-finance.mdx.
// Section ids must match the <section id> anchors in the mdx exactly.
// Folien 362–364 (Agenda-Recap, Modulziele, Kursabschluss) sind Modul- statt
// Kapitelinhalt und wurden bewusst nicht in Sections/Content übernommen —
// siehe sources/.../MDs/MD+PDF/BF10 - Behavioral Corporate Finance_MD+PDF.md.

export const meta = {
  id: 'behavioral-corporate-finance',
  title: 'Kapitel 10 · Behavioral Corporate Finance',
  source: 'Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 341–361',
  estimatedMinutes: 90,
  sections: [
    { id: 'traditionelles-vs-behavioral-corporate-finance', title: 'Traditionelles vs. Behavioral Corporate Finance', pages: 'Folie 343' },
    { id: 'managerial-overconfidence', title: 'Managerial Overconfidence', pages: 'Folien 344–345' },
    { id: 'ma-transaktionen', title: 'M&A-Transaktionen', pages: 'Folien 346–348' },
    { id: 'begrenzung-der-selbstueberschaetzung', title: 'Begrenzung der Selbstüberschätzung', pages: 'Folien 349–351' },
    { id: 'ausschuettungspolitik', title: 'Verwendung der Free Cash Flows und Ausschüttungspolitik', pages: 'Folien 352–357' },
    { id: 'besonderheiten-bei-ipos', title: 'Besonderheiten bei IPOs', pages: 'Folien 358–361' },
  ],
  keyTakeaways: [
    'Behavioral Corporate Finance stellt der traditionellen Annahme vollständig rationaler Manager und effizienter Märkte gegenüber, dass Manager begrenzt rational sind und Kapitalmärkte nicht vollständig effizient sind.',
    'Managerial Overconfidence wird durch Komplexität und Individualität von Investitionsentscheidungen, Selbstattribution nach Beförderung, Kontrollillusion und die Verfügbarkeitsheuristik im Risikomanagement begünstigt; typische Indizien sind riskante M&A-Transaktionen, geringe Dividendenausschüttung bei verstärktem Aktienrückkauf und selbstsichere Außenkommunikation.',
    'M&A-Transaktionen scheitern empirisch oft aus Sicht der Bieteraktionäre: Targets erzielen deutlich höhere kumulierte Überrenditen (CAR) als Acquirer (z. B. Bradley et al. 1988: +28 % vs. +2 %); Hybris-Hypothese und Free-Cash-Flow-getriebene Agency-Probleme erklären wertvernichtende Übernahmen, auch wenn Effizienzsteigerung und echte Synergien wertschaffende Übernahmen begründen können.',
    'Selbstüberschätzung lässt sich durch Schulung, Risikomanagementsysteme, angepasste vertragliche Anreize, höhere Diskontierungsfaktoren sowie externe/interne Corporate-Governance-Mechanismen begrenzen — die Kontrolle durch Fremdkapitalgeber wirkt aber erst bei wachsender Gefahr ökonomischen Misserfolgs.',
    'Der Anteil ausschüttender US-Unternehmen ist seit Ende der 1970er-Jahre strukturell rückläufig, wobei sich die Zusammensetzung von reinen Dividenden zu Aktienrückkäufen verschiebt; ökonomische (Signalwirkung, Disziplinierung) und verhaltensorientierte Gründe (Sentiment, Selbstkontrolle, mentale Buchführung) erklären die anhaltende Dividendenpräferenz.',
    'Kursreaktionen auf Dividendenänderungen sind asymmetrisch — Kürzungen wirken stark negativ, Erhöhungen nur leicht positiv — konsistent mit der Prospect Theory und Auslöser des Dividend Smoothing.',
    'IPOs zeigen zwei gegenläufige Phänomene: kurzfristiges Underpricing (Deutschland 10–20 %, Neuer Markt teils > 40 %) und langfristige Underperformance über 3–5 Jahre, welche die Underpricing-Rendite innerhalb von rund sechs Monaten wieder aufzehrt.',
    'IPO-Aktivität verläuft stark zyklisch (Hoch Ende der 1990er, Einbruch 2008/2009); die langfristige Underperformance konzentriert sich laut Brav/Gompers (1997) auf kleine Unternehmen mit niedrigem Buchwert-Marktwert-Verhältnis und auf Börsengänge in Boom-Phasen.',
  ],
  examFocus: [
    'Traditionelle vs. Behavioral Corporate Finance anhand der zwei Kernannahmen unterscheiden können (Rationalität der Manager, Markteffizienz).',
    'Rahmenbedingungen und Indizien der Managerial Overconfidence benennen können.',
    'Die CAR-Empirie zu M&A-Transaktionen (Bradley et al. 1988, Sirower 1998) sowie die Unterscheidung "Reasons that (don\'t) make sense" (Effizienzsteigerung/Synergien vs. Hybris/Agency) erläutern können.',
    'Maßnahmen zur Begrenzung der Selbstüberschätzung sowie externe/interne CG-Mechanismen aufzählen und die begrenzte Wirksamkeit der Fremdkapitalgeberkontrolle einordnen.',
    'Thesaurierung vs. Ausschüttung sowie ökonomische und verhaltensorientierte Gründe für Dividenden gegenüberstellen können.',
    'Die asymmetrische Kursreaktion auf Dividendenänderungen (Prospect Theory) und das Konzept Dividend Smoothing erklären können.',
    'Underpricing und langfristige Underperformance von IPOs mit ihren jeweiligen Erklärungsansätzen (Kurspflege, optimistische Anleger, Brav/Gompers) unterscheiden können.',
    'Die Ritter-(2014)-Zahlen zur IPO- vs. size-/BM-gematchten Performance (geometrisches Mittel 11,1 % vs. 13,0 %) einordnen können.',
  ],
  pitfalls: [
    '"Synergien sind nicht notwendig!" nicht übersehen — Effizienzsteigerung durch Restrukturierung erklärt Wertsteigerung bei M&A auch ohne Synergien.',
    'Hybris-Hypothese und Agency-Probleme (Free Cash Flow Hypothese) nicht verwechseln — Hybris erklärt zu hohe Kaufpreise, Agency-Probleme erklären, warum überhaupt (unnötig) gekauft wird.',
    'Kontrolle durch Fremdkapitalgeber als durchgehend wirksam ansehen — der Anreiz zu verstärkter Kontrolle steigt erst mit wachsender Gefahr ökonomischen Misserfolgs.',
    'Dividende und Aktienrückkauf vorschnell als perfekte Substitute behandeln — im Marktvergleich unterscheiden sich Emittenten systematisch (Größe, Cash-Flow-Stabilität).',
    'Bei Dividendenänderungen die Richtung der Asymmetrie vertauschen: Kürzungen wirken stark negativ, Erhöhungen nur leicht positiv — nicht symmetrisch.',
    'Underpricing mit der (schlechteren) langfristigen Performance verwechseln — beides sind zwei getrennte, gegenläufige Phänomene desselben IPO-Prozesses.',
  ],
};
