// Static metadata for Kapitel 3 · Alternative Assetklassen. Content lives in
// 03-alternative-assetklassen.mdx. Section ids must match the <section id> anchors.

export const meta = {
  id: 'alternative-assetklassen',
  title: 'Kapitel 3 · Alternative Assetklassen',
  source: 'Asset Management · Kapitel 3 · Alternative Assetklassen',
  estimatedMinutes: 75,
  sections: [
    { id: 'systematisierung', title: 'Systematisierung der Assetklassen', pages: 'Folien 2–3' },
    { id: 'hedge-funds', title: 'Hedge Funds: Merkmale, Strategien und Markt', pages: 'Folien 5–14' },
    { id: 'immobilien-grundlagen', title: 'Immobilien: Argumente, Formen und Risikoklassen', pages: 'Folien 16–22' },
    { id: 'immobilien-bewertung', title: 'Immobilien: Bewertung, Smoothing und Verteilung', pages: 'Folien 23–31' },
    { id: 'rohstoffe', title: 'Rohstoffe: Klassifizierung, Bewertung und Rollrendite', pages: 'Folien 33–41' },
    { id: 'digital-assets', title: 'Digital Assets und Kryptowährungen', pages: 'Folien 43–46' },
  ],
  keyTakeaways: [
    'Alternative (nicht standardisierte) Assetklassen umfassen Immobilien, Hedge Funds, Private Equity/Venture Capital, Rohstoffe, Volatilität und Sammlerstücke — im Gegensatz zu den traditionellen (standardisierten) Klassen Aktien, Anleihen, Geldmarkt und Währungen.',
    'Hedge Funds streben absolute Performance unabhängig vom Gesamtmarkt an; ihre Strategien gliedern sich in Directional, Event Driven und Relative Value, ihr verwaltetes Vermögen wuchs von 263 Mrd. USD (2000) auf 5.529 Mrd. USD (Q2 2025).',
    'Das Diversifikationspotenzial von Hedge Funds ist eingeschränkt: Korrelationen und Renditen sind im Zeitablauf instabil und gerade in Aktien-Krisen hoch; die Renditen sind meist nicht normalverteilt (Linksschiefe, fette Enden).',
    'Immobilien bieten Wertbeständigkeit, laufende Cashflows und geringe Korrelation, leiden aber unter geringer Liquidität, hohem Kapitalbedarf und Bewertungsproblemen; sie werden nach Risiko in Core, Value-Added und Opportunistic eingeteilt.',
    'Der Liegenschaftszins (Mieteinnahmen p.a. / Kaufpreis) und sein Kehrwert (Vervielfältiger) bilden die Bewertungsbrücke appraisal-based Indizes; der Smoothing-Effekt senkt deren gemessene Volatilität künstlich, weshalb Entglättungsverfahren nötig sind.',
    'Rohstoffrenditen über Futures setzen sich aus Spot Return, Collateral Yield und Rollrendite zusammen; bewertet wird per Cost-of-Carry F0 = S0 · e^((r_f + u − y)·T), wobei die Rollrendite in Backwardation positiv und in Contango negativ ist.',
    'Digital Assets sind nicht von einer Zentralbank emittierte, blockchainbasierte Vermögenswerte ohne Geldstatus; Bitcoin zeigt extreme Wertentwicklung bei sehr hoher Volatilität und geringer Korrelation zu klassischen Assets (Diversifikationspotenzial).',
  ],
  examFocus: [
    'Traditionelle (standardisierte) von alternativen (nicht standardisierten) Assetklassen abgrenzen und die jeweiligen Vertreter zuordnen.',
    'Merkmale von Hedge Funds nennen (absolute Performance, Mindesteinlagen, Sperr-/Rücknahmefristen, Leverage/Short Selling/Derivate, erfolgsabhängige Vergütung mit High Water Marks, geringe Regulierung).',
    'Die drei Hedgefonds-Strategiegruppen (Relative Value/marktneutral, Event Driven/ereignisorientiert, Directional/opportunistisch) mit Beispielen erklären.',
    'Event Study und CAR am Beispiel Merger Arbitrage erläutern: Targets erzielen deutlich positive abnormale Renditen, Acquirer nahe Null oder leicht negativ.',
    'Immobilien-Risikoklassen Core → Value-Added → Opportunistic entlang Risiko, Haltedauer, Objekttyp, Mieterbasis und Lage einordnen.',
    'Liegenschaftszins-Formel und Vervielfältiger sowie den Smoothing-Effekt (appraisal-based vs. transaction-based) und seine Folgen für die Volatilität erklären.',
    'Contango vs. Backwardation und ihre Wirkung auf die Rollrendite bestimmen; Cost-of-Carry-Formel für Rohstoff-Futures mit u (Lagerkosten) und y (Convenience Yield) anwenden.',
    'Bitcoin/Digital Assets einordnen: hohe Volatilität, geringe Korrelation (Diversifikation), Geldfunktionen wegen Volatilität noch nicht erfüllt — Investment als Spekulation.',
  ],
  pitfalls: [
    'Hedge Funds pauschal als Diversifikationsgaranten ansehen — in Aktien-Krisen steigt die Korrelation, und die Renditen sind meist nicht normalverteilt.',
    'Rollrendite-Vorzeichen vertauschen: positiv in Backwardation (fallende Terminkurve), negativ in Contango (steigende Terminkurve).',
    'Die Cost-of-Carry-Wirkungen verwechseln: Lagerhaltungskosten u wirken preissteigernd, die Convenience Yield y preissenkend (r_f + u − y).',
    'Appraisal-based und transaction-based Indizes gleichsetzen — nur appraisal-based Indizes erzeugen über Anker-/Glättungseffekte den Smoothing-Effekt (zu niedrig gemessene Volatilität).',
    'Geschlossene und offene Immobilienfonds verwechseln: geschlossene Fonds haben keinen geregelten Sekundärmarkt, offene Fonds erlauben Diversifikation auch bei kleinen Beträgen (Open-End-Prinzip).',
    'Kryptowährungen als vollwertiges Geld einordnen — sie erfüllen die ökonomischen Geldfunktionen wegen der hohen Volatilität derzeit noch nicht.',
  ],
};
