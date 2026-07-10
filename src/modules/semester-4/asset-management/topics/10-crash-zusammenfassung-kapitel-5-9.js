// Static metadata for the Asset Management crash summary covering chapters 5-9.
// Content lives in 10-crash-zusammenfassung-kapitel-5-9.mdx. Section ids must
// match the <section id> anchors there.

export const meta = {
  id: 'crash-zusammenfassung-kapitel-5-9',
  title: 'Crash-Zusammenfassung · Kapitel 5-9',
  source: 'Asset Management · Kapitel 5-9 · Prüfungs-Crash',
  estimatedMinutes: 45,
  sections: [
    { id: 'kapitel-5-portfoliotheorie', title: 'Kapitel 5 · Portfoliotheorie', pages: 'Folien 153-202' },
    { id: 'kapitel-6-portfoliomanagement', title: 'Kapitel 6 · Portfoliomanagement', pages: 'Folien 203-230' },
    { id: 'kapitel-7-performanceanalyse', title: 'Kapitel 7 · Performanceanalyse', pages: 'Folien 231-258' },
    { id: 'kapitel-8-aktiv-passiv-indizes', title: 'Kapitel 8 · Aktiv vs. Passiv / Indizes', pages: 'Folien 259-288' },
    { id: 'kapitel-9-fintechs-robo-advisors', title: 'Kapitel 9 · FinTechs / Robo Advisors', pages: 'Folien 289-305' },
  ],
  keyTakeaways: [
    'Kapitel 5 liefert die theoretische Basis: Rendite, Risiko, Korrelation, Diversifikation, CML/SML, CAPM und APT.',
    'Kapitel 6 überführt die Theorie in den Investmentprozess mit IPS, SAA, TAA, Rebalancing, Transaktionskosten und Controlling.',
    'Kapitel 7 misst den Anlageerfolg über MWR/TWR sowie Sharpe, Treynor und Jensen-Alpha.',
    'Kapitel 8 erklärt die Benchmark- und Indexlogik sowie die Abgrenzung von aktivem, passivem und tilted Management.',
    'Kapitel 9 zeigt Robo Advisory als technologiegestützte Antwort auf Komplexität und Defizite des traditionellen Asset Managements.',
    'Prüfungsrelevant sind vor allem Abgrenzungen, Formeln, Prozessreihenfolgen, Kennzahleninterpretation und typische Ranking- bzw. Begriffsfallen.',
  ],
  examFocus: [
    'Markowitz-Logik, Diversifikation, effizienten Rand, MVP, CAPM, SML, CML und APT sicher unterscheiden.',
    'Investmentprozess, IPS, SAA/TAA, Rebalancing/Upgrading, institutionelle Nebenbedingungen und Transaktionskosten erklären.',
    'MWR/TWR, Sharpe, Treynor und Jensen-Alpha berechnen bzw. interpretieren und die jeweils verwendete Risikogröße nennen.',
    'Aktiv, passiv und tilted Management über Markteffizienz-Annahme, Benchmark-Bezug, Alpha-Ziel und Kosten abgrenzen.',
    'Indexarten, Gewichtungsmethoden, ETF/Indexfonds/Zertifikat, Tracking Error und empirische Passiv-Vorteile wiedergeben.',
    'FinTech-Definition, Robo-Advisory-Prozess, ETF-Filterkaskade, Gebührenniveau und Angebotstypen prüfen können.',
  ],
  pitfalls: [
    'Portfoliorisiko als gewichteten Durchschnitt der Einzelrisiken behandeln und Korrelationen übersehen.',
    'CML und SML, Sharpe und Treynor oder MWR und TWR gleichsetzen.',
    'SAA und TAA verwechseln oder das Brinson-Ergebnis als Aussage über Renditehöhe statt Performancevarianz lesen.',
    'Indexzertifikate als Sondervermögen behandeln oder Tracking Error als aktive Strategie missverstehen.',
    'Robo Advice und fortlaufende Finanzportfolioverwaltung gleichsetzen.',
  ],
};
