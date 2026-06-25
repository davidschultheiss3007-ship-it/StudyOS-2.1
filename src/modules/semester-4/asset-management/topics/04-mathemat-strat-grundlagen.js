// Static metadata for Kapitel 4 · Mathematische und statistische Grundlagen.
// Content lives in 04-mathemat-strat-grundlagen.mdx. Section ids must match
// the <section id> anchors there.

export const meta = {
  id: 'mathemat-strat-grundlagen',
  title: 'Kapitel 4 · Mathematische und statistische Grundlagen',
  source:
    'Asset Management · Kapitel 4 · Mathematische und statistische Grundlagen · Folien 97-152',
  estimatedMinutes: 90,
  sections: [
    { id: 'durchschnittswerte', title: 'Durchschnitts- und Renditemaße', pages: 'Folien 3–8' },
    { id: 'erwartete-rendite-und-anleihen', title: 'Erwartete Rendite und Anleihenbewertung', pages: 'Folien 9–11' },
    { id: 'zinsaenderungsrisiken', title: 'Zinsänderungsrisiken: Duration und Konvexität', pages: 'Folien 12–22' },
    { id: 'volatilitaet-und-normalverteilung', title: 'Volatilität und Normalverteilung', pages: 'Folien 23–32' },
    { id: 'hoehere-momente', title: 'Höhere Momente: Schiefe und Wölbung', pages: 'Folien 33–40' },
    { id: 'value-at-risk', title: 'Value-at-Risk (VaR)', pages: 'Folien 41–49' },
    { id: 'kovarianz-korrelation-diversifikation', title: 'Kovarianz, Korrelation und Diversifikation', pages: 'Folien 50–56' },
  ],
  keyTakeaways: [
    'Das arithmetische Mittel passt für Einperiodenrenditen ohne Wiederanlage, ist aber sensibel gegenüber Extremwerten; bei Wiederanlage (Zinseszins) über mehrere Perioden ist das geometrische Mittel das korrekte Durchschnittsmaß.',
    'Stetige Renditen sind zeitadditiv: über die e-Funktion bzw. den natürlichen Logarithmus umrechenbar und über die Zeit mit dem arithmetischen (nicht dem geometrischen) Mittel zu mitteln.',
    'Der Anleihewert ist der Barwert aller künftigen Kupon- und Tilgungszahlungen; das Verhältnis von Nominalzins zu geforderter Rendite bestimmt Notierung über, unter oder zu pari.',
    'Das Zinsänderungsrisiko steigt mit langer Laufzeit und niedrigem Coupon; die Macaulay-Duration misst es als barwertgewichtete Kapitalbindungsdauer, die Konvexität korrigiert die lineare Unterschätzung der Modified Duration.',
    'Die Standardabweichung (Volatilität) ist das zentrale Streuungs- und Risikomaß und über die Wurzel-Zeit-Regel annualisierbar; sie taugt nur unter der Normalverteilungsannahme als alleiniges Risikomaß.',
    'Reale Assetklassen sind meist linksschief (Schiefe negativ) und leptokurtisch (Kurtosis größer als 3); ein reines μ-σ-Kalkül unterschätzt dann systematisch das Risiko.',
    'Der Value-at-Risk verdichtet das Verlustpotenzial auf eine Zahl (Verlust, der mit gegebener Wahrscheinlichkeit über einen Zeithorizont nicht überschritten wird) und skaliert über die Wurzel-Zeit-Regel.',
    'Die Korrelation normiert die Kovarianz auf den Bereich von minus 1 bis plus 1 und steuert den Diversifikationseffekt; reale Korrelationen schwanken und schlagen in Krisen sprunghaft um.',
  ],
  examFocus: [
    'Arithmetisches vs. geometrisches Mittel anhand des Folienbeispiels begründen (25 % vs. 0 %) und die Bedingung Wiederanlage/Zinseszins nennen.',
    'Diskrete und stetige Renditen ineinander umrechnen (r_diskret = e^(r_stetig) − 1; ln(1 + r_diskret) = r_stetig) und die Zeitadditivität stetiger Renditen begründen.',
    'Barwert-/Kursformel einer Anleihe aufstellen und die Pari-Regeln (über/unter/zu pari) aus r_n im Verhältnis zu r ableiten.',
    'Macaulay-Duration, Modified Duration (MD = D / (1 + r)) und Konvexität unterscheiden und die Kursänderungsformel −MD · Δr + 0,5 · C · (Δr)² anwenden; Duration-Sensitivitäten und Grenzwert D_max = 1 + 1/r kennen.',
    'Standardabweichung berechnen, über die Wurzel-Zeit-Regel annualisieren (√250 · σ_d) und die σ-Intervalle der Normalverteilung (68,3 / 95,5 / 99,7 %) zuordnen.',
    'Schiefe und Wölbung als drittes bzw. viertes zentrales Moment definieren, ihre Vorzeichen/Referenzwerte deuten und die Portfolio-Handlungsempfehlung (ungerade Momente maximieren, gerade minimieren) nennen.',
    'VaR interpretieren und mit dem Varianz-Kovarianz-Ansatz rechnen (VaR_t = −z_α · σ_t; z_95% = 1,645, z_99% = 2,326); das Folienbeispiel auf 1 Tag / 10 Tage / Euro skalieren.',
    'Kovarianz und Korrelation definieren, die Korrelationsskala (−1 / 0 / +1) deuten und den Diversifikationseffekt aus der Korrelation der Anlagen erklären.',
  ],
  pitfalls: [
    'Bei schwankenden Mehrperiodenrenditen das arithmetische Mittel verwenden — es überschätzt die tatsächliche Wertentwicklung; korrekt ist das geometrische Mittel.',
    'Stetige Renditen mit dem geometrischen Mittel über die Zeit mitteln; weil sie zeitadditiv sind, ist hier das arithmetische Mittel korrekt.',
    'Macaulay- und Modified Duration verwechseln: Macaulay ist die Kapitalbindungsdauer in Jahren, MD die normierte Kennzahl für die prozentuale Kursreaktion.',
    'Annehmen, ein konstanter Verlust sei risikolos: Wertpapier B mit σ = 0 % zeigt, dass die Volatilität nur Schwankung, nicht den Verlust misst.',
    'Volatilität als alleiniges Risikomaß bei nicht normalverteilten Renditen ansetzen — Linksschiefe und fette Enden führen zur systematischen Risikounterschätzung.',
    'Den VaR als Maximalverlust lesen; er beschreibt einen Mindestverlust bei gegebenem Konfidenzniveau und Zeithorizont — der tatsächliche Verlust kann größer sein.',
    'Korrelationen als stabil unterstellen: Sie schwanken stark und schlagen in Krisen (z. B. März 2020) um, gerade wenn Diversifikation am wichtigsten wäre.',
  ],
};
