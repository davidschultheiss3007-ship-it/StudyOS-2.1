// Static metadata for Kapitel 8 · Indizes / Aktives vs. Passives Management.
// Content lives in 08-aktives-vs-passives-management.mdx. Section ids must match
// the <section id> anchors.

export const meta = {
  id: 'aktives-vs-passives-management',
  title: 'Kapitel 8 · Indizes / Aktives vs. Passives Management',
  source:
    'Asset Management · Kapitel 8 · Indizes / Aktives vs. Passives Management · Folien 259–288',
  estimatedMinutes: 60,
  sections: [
    { id: 'investmentphilosophien', title: 'Investmentphilosophien: aktiv, tilted, passiv' },
    { id: 'benchmark-und-index', title: 'Rolle der Benchmark und Definition des Index' },
    { id: 'differenzierung-und-gewichtung', title: 'Differenzierung und Gewichtung von Indizes' },
    { id: 'msci-world-zusammensetzung', title: 'Beispiel MSCI World: Market Cap Bias' },
    { id: 'passive-vehikel-und-etfs', title: 'Passive Vehikel und der Siegeszug der ETFs' },
    { id: 'aktiv-vs-passiv-empirie', title: 'Aktiv vs. passiv: Vor-/Nachteile und Empirie' },
  ],
  keyTakeaways: [
    'Investmentphilosophien gliedern sich in aktiv und passiv; tilted Management ist die Mischform, die ausgehend vom passiven Portfolio gezielt nach Risikofaktoren abweicht (umsetzbar als Core-Satellite-Strategie).',
    'Aktives Management setzt auf nicht-effiziente Märkte und zielt über Prognosen und bewusste Benchmark-Abweichungen auf eine positive risikoadjustierte Überschussrendite (Alpha); passives Management nimmt effiziente Märkte an und bildet kostenminimal einen Index nach.',
    'Die Benchmark ist im passiven Management das zu replizierende Zielportfolio, im aktiven Management das zu „schlagende" Portfolio durch Über-/Untergewichtungen.',
    'Ein Index ist ein investierbares Musterportfolio (nachbildbar, liquide, transparent) und differenziert sich nach Mitgliederzahl (Auswahl- vs. Benchmarkindex), Gewichtung (Preis vs. Kapitalisierung vs. Free-Float vs. Gleichgewichtung) und Dividendenbehandlung (Kurs- vs. Performanceindex).',
    'Die Gewichtungsmethode verändert das Ergebnis erheblich: im Rechenbeispiel steigt der preisgewichtete Index um 9,2 %, der kapitalisierungsgewichtete um 14,5 %; kapitalisierungsgewichtete Indizes wie der MSCI World erzeugen einen Market Cap Bias (US-Anteil 59,21 % → 71,91 %, IT-Anteil ca. 17 % → 27,61 % von 2018 auf 2026).',
    'Passive Umsetzungsvehikel: Indexfonds und ETFs sind insolvenzgeschütztes Sondervermögen, Indexzertifikate dagegen Schuldverschreibungen mit Totalverlustrisiko; ETFs verbinden niedrige Gebühren mit laufender Börsenhandelbarkeit (ETF = börsengehandelt + Index + Fonds).',
    'Empirie spricht für passiv: über fast alle Kategorien schlägt nur eine Minderheit aktiver Fonds die Benchmark, und der S&P 500 übertraf in zwei 30-Jahres-Perioden den Durchschnittsfonds (Index Advantage je 1,6 % p. a.); aktives Management ist vor Kosten ein Nullsummenspiel — nach Abzug der Fondskosten verschiebt sich die mediane Fondsrendite unter die Benchmark.',
    'Der Tracking-Error misst die Qualität der Indexnachbildung als Volatilität der Renditedifferenz; er entsteht u. a. durch Transaktionskosten, unvollständige Replikation, Reinvestitions- und Steuerregeln sowie die 10-Prozent-Gewichtsgrenze je Einzelwert.',
  ],
  examFocus: [
    'Aktives vs. passives vs. tilted Management abgrenzen: Markteffizienz-Annahme, Zielsetzung (Alpha vs. Indextracking) und Kosten.',
    'Rolle der Benchmark im passiven (Zielportfolio) vs. aktiven Management (zu schlagendes Portfolio) erklären.',
    'Anforderungen an Indizes (Nachbildbarkeit, Liquidität, Transparenz) und die vier Funktionen (Börsenbarometer, Vergleichsmaßstab, Analysebasis, Handelsfunktion) nennen.',
    'Auswahl- vs. Benchmarkindex (begrenzt vs. nicht begrenzt) und preis- vs. kapitalisierungsgewichteter Index (Downward Bias vs. Market Cap Bias) unterscheiden.',
    'Das Rechenbeispiel beherrschen: preisgewichteter Indexstand (arithmetisches Mittel der Kurse) vs. kapitalisierungsgewichtete Rendite — Ergebnis 9,2 % vs. 14,5 %.',
    'Kursindex vs. Performanceindex (Total Return) abgrenzen — Beispiele DJIA vs. DAX.',
    'Indexfonds vs. Indexzertifikate vs. ETFs vergleichen, insbesondere Sondervermögen vs. Totalverlustrisiko der Zertifikate.',
    'Die empirischen Belege für die Index-Superiorität (Success Rate, Bogle-Tabelle, Vanguard Zero-Sum-Game) und den Tracking-Error wiedergeben.',
  ],
  pitfalls: [
    'Aktiv und passiv über die Markteffizienz-Annahme vertauschen: aktiv unterstellt nicht-effiziente, passiv effiziente Märkte.',
    'Auswahlindex (begrenzte Mitgliederzahl, handelbar) und Benchmarkindex (nicht begrenzt, breit messend) verwechseln.',
    'Kurs- und Performanceindex gleichsetzen — nur der Performanceindex (Total Return) reinvestiert Dividenden; über lange Horizonte steigen sonst die Opportunitätskosten.',
    'Indexzertifikate für insolvenzgeschütztes Sondervermögen halten — sie sind Schuldverschreibungen mit Totalverlustrisiko.',
    'Das Rechenbeispiel: der preisgewichtete Index ist das arithmetische Mittel der Kurse (Teiler 4), nicht der Marktwerte; Titel D mit hohem, fallendem Kurs wirkt im Preisindex stark, im Kapitalisierungsindex schwach.',
    'Den Market Cap Bias übersehen: im kapitalisierungsgewichteten MSCI World dominieren wenige große US-Tech-Werte; die Konzentration nimmt über die Zeit zu.',
    'Den Tracking-Error mit einer aktiven Strategie verwechseln — er ist ein unbeabsichtigtes Nachbildungsrisiko des passiven Vehikels.',
  ],
};
