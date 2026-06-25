// Static metadata for the pilot topic. Kept as a plain data object (no MDX
// runtime needed) so the module registry can read it cheaply. The actual
// section content lives in 05-grundlagen-der-portfoliotheorie.mdx.

export const meta = {
  id: 'grundlagen-der-portfoliotheorie',
  title: 'Kapitel 5 · Grundlagen der Portfoliotheorie',
  source: 'Asset Management · Kapitel 5 · Grundlagen der Portfoliotheorie · Folien 153-202',
  estimatedMinutes: 90,
  sections: [
    { id: 'markowitz-und-zwei-asset-portfolio', title: 'Markowitz und das Zwei-Wertpapier-Portfolio', pages: 'Folien 155–157' },
    { id: 'risiko-grosser-portfolios-und-inputdaten', title: 'Risiko großer Portfolios und Inputdaten', pages: 'Folien 158–159' },
    { id: 'effizienzkurve-korrelation-leerverkaeufe', title: 'Effizienzkurve, Korrelation und Leerverkäufe', pages: 'Folien 160–167' },
    { id: 'gemeinsames-und-unabhaengiges-risiko', title: 'Gemeinsames und unabhängiges Risiko', pages: 'Folie 168, Folien 172–177' },
    { id: 'systematisches-und-unsystematisches-risiko', title: 'Systematisches und unsystematisches Risiko', pages: 'Folien 178–183' },
    { id: 'minimum-varianz-portfolio-und-kritik', title: 'Minimum-Varianz-Portfolio und kritische Würdigung', pages: 'Folien 184–187' },
    { id: 'tobin-separation-und-cml', title: 'Tobin-Separation und Capital Market Line', pages: 'Folien 188–194' },
    { id: 'capm-beta-sml', title: 'CAPM, Beta, SML und Marktportfolio', pages: 'Folien 196–199' },
    { id: 'multifaktormodelle-und-apt', title: 'Multifaktormodelle und Arbitrage Pricing Theory', pages: 'Folien 200–202' },
  ],
  keyTakeaways: [
    'Markowitz begründet Portfoliotheorie als optimale Kombination von Anlagealternativen anhand von Rendite, Risiko und Korrelation.',
    'Die erwartete Portfoliorendite ist eine gewichtete Summe; das Portfoliorisiko hängt zusätzlich von Kovarianzen bzw. Korrelationen ab.',
    'Diversifikation entsteht, wenn Wertpapiere nicht perfekt positiv korreliert sind; je niedriger die Korrelation, desto größer der Diversifikationseffekt.',
    'Effiziente Portfolios liegen auf der Effizienzkurve und dominieren Alternativen durch höhere Rendite, niedrigeres Risiko oder beides.',
    'Ein isoliert ineffizientes Wertpapier kann im Portfolio sinnvoll sein, wenn es Diversifikationsvorteile gegenüber den übrigen Wertpapieren liefert.',
    'Unabhängige Risiken können in großen Portfolios wegdiversifiziert werden; gemeinsame bzw. systematische Risiken bleiben bestehen.',
    'Das Minimum-Varianz-Portfolio markiert im Zwei-Asset-Beispiel den Risikominimum-Punkt; der effiziente Rand liegt oberhalb dieses Punktes.',
    'Tobin-Separation trennt Anlage- und Finanzierungsentscheidung; die CML bildet effiziente Kombinationen aus risikoloser Anlage und Marktportfolio ab.',
    'CAPM entlohnt nur systematisches Risiko über Beta; Multifaktormodelle und APT erweitern die Risikobetrachtung auf mehrere Faktoren.',
  ],
  examFocus: [
    'Formeln für erwartete Rendite und Varianz eines Zwei-Wertpapier-Portfolios anwenden und den Korrelationsterm interpretieren.',
    'Inputdatenbedarf großer Portfolios mit n Renditen, n Volatilitäten und n(n-1)/2 Korrelationen erklären.',
    'Effizienzkurve, Minimum-Varianz-Portfolio und effizienten Rand sauber voneinander abgrenzen.',
    'Korrelationswerte 1, kleiner 1, 0 und -1 hinsichtlich Diversifikationswirkung interpretieren.',
    'Begründen, warum ein einzeln ineffizientes Wertpapier durch geringe Korrelation portfolioseitig sinnvoll sein kann.',
    'Gemeinsames, unabhängiges, systematisches, unsystematisches, idiosynkratisches und diversifizierbares Risiko unterscheiden.',
    'Tobin-Separation, Tangentialportfolio, nicht beobachtbares Marktportfolio, Marktpreis des Risikos und Capital Market Line erklären.',
    'CAPM-Gleichung, Beta, systematisches Risiko und Security Market Line interpretieren.',
    'Multifaktormodelle und APT gegen CAPM abgrenzen, inklusive Faktordefinition, Annahmen, Vorteile und Nachteile der APT.',
  ],
  pitfalls: [
    'Portfoliorisiko als einfachen gewichteten Durchschnitt der Einzelrisiken berechnen und dadurch den Korrelationseffekt übersehen.',
    'Diversifikation mit bloßer Anzahl an Wertpapieren gleichsetzen, obwohl die Korrelation bzw. Risikoart entscheidend ist.',
    'Ein effizientes Portfolio mit dem Minimum-Varianz-Portfolio verwechseln; effizient ist nur der positiv geneigte Bereich oberhalb des MVP.',
    'Unsystematisches Risiko als entlohntes Risiko interpretieren, obwohl es durch Diversifikation vermeidbar ist.',
    'CAPM-Risiko mit Gesamtvolatilität verwechseln; im CAPM ist Beta als systematisches Risiko relevant.',
    'CML und SML gleichsetzen: Die CML arbeitet mit effizienten Portfolio-Kombinationen im μ-σ-Raum, die SML mit erwarteter Rendite und Beta.',
    'Vergangenheits-Betas als stabile Zukunftswerte behandeln, obwohl die PDF Instabilität und Mean Reversion betont.',
    'APT als voraussetzungslos ansehen; sie setzt ein Faktormodell, wohl diversifizierte Portfolios und keine Arbitrage voraus.',
  ],
};
