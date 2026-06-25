// Static metadata for Kapitel 7 · Performanceanalyse. Content lives in
// 07-performanceanalyse.mdx. Section ids must match the <section id> anchors.

export const meta = {
  id: 'performanceanalyse',
  title: 'Kapitel 7 · Performanceanalyse',
  source: 'Asset Management · Kapitel 7 · Performanceanalyse · Folien 231–258',
  estimatedMinutes: 65,
  sections: [
    { id: 'performanceanalyse-im-finanzcontrolling', title: 'Performanceanalyse im Finanzcontrolling', pages: 'Folien 233–235' },
    { id: 'systematik-der-performancemasse', title: 'Systematik der Performancemaße', pages: 'Folien 236, 242' },
    { id: 'geld-vs-zeitgewichtete-rendite', title: 'Geld- vs. zeitgewichtete Rendite', pages: 'Folien 237–241' },
    { id: 'sharpe-ratio', title: 'Sharpe-Ratio', pages: 'Folien 243–248' },
    { id: 'treynor-ratio', title: 'Treynor-Ratio', pages: 'Folien 249–253' },
    { id: 'sharpe-vs-treynor', title: 'Sharpe- vs. Treynor-Ranking', pages: 'Folie 252' },
    { id: 'jensen-alpha', title: 'Jensen-Alpha', pages: 'Folien 254–256' },
    { id: 'bewertung-und-vergleich', title: 'Bewertung der drei risikoadjustierten Maße', pages: 'Folien 247, 253, 257–258' },
  ],
  keyTakeaways: [
    'Die Performanceanalyse ist eine der drei Säulen des Finanzcontrollings (neben Risikoanalyse und Reporting) und misst sowie bewertet den Kapitalanlageerfolg eines (institutionellen) Investors nach Rendite, Risiko und risikoadjustierter Rendite.',
    'Performancemaße gliedern sich in reine Renditemaße (geldgewichtete MWR und zeitgewichtete TWR) und risikoadjustierte Maße (Sharpe-Ratio, Treynor-Ratio, Jensen-Alpha).',
    'Die geldgewichtete Rendite (MWR) ist der interne Zinsfuß des Zahlungsstroms und erfasst Timing und Marktgeschehen zugleich; die zeitgewichtete Rendite (TWR) ist die geometrische Durchschnittsrendite der Periodenrenditen und misst nur das Marktgeschehen (GIPS-Standard).',
    'Der Vergleich MWR vs. TWR isoliert die Timing-Qualität: MWR kleiner als TWR bedeutet ungünstiges Ein-/Auszahlungs-Timing, MWR größer als TWR günstiges.',
    'Sharpe-Ratio = Überschussrendite je Einheit Gesamtrisiko (σ), Treynor-Ratio = Überschussrendite je Einheit systematisches Risiko (β); Jensen-Alpha = absolute Über-/Unterrendite gegenüber der CAPM-erwarteten Rendite.',
    'Sharpe- und Treynor-Ranking können sich widersprechen: ist ein Portfolio schlecht diversifiziert (hohes unsystematisches Risiko), schneidet es nach Treynor (β) besser ab als nach Sharpe (σ).',
    'Grafisch ist das Jensen-Alpha der vertikale Abstand der tatsächlichen Portfoliorendite zur CAPM-/SML-Linie bzw. der Achsenabschnitt der Regression von r_P auf r_BM; α größer 0 bedeutet Outperformance.',
    'Jensen-Alpha erlaubt — anders als Sharpe und Treynor — kein einwandfreies Ranking, weil das zur Alpha-Erzielung eingegangene Risiko unberücksichtigt bleibt.',
  ],
  examFocus: [
    'Performanceanalyse definieren und als eine der drei Säulen des Finanzcontrollings einordnen; die vier Funktionen (Kontrolle, Steuerung, Beurteilung/Anreiz, Marketing) nennen.',
    'MWR und TWR berechnen und gegenüberstellen: MWR = interner Zinsfuß (geeignet für Versicherung/Investor), TWR = geometrische Durchschnittsrendite (geeignet für PM-Vergleich, GIPS-Standard).',
    'Aus dem Beispiel den Effekt erklären: trotz Marktgeschehen 0 % (TWR) ergibt das ungünstige Timing der Großeinzahlung eine MWR von −32,06 %.',
    'Sharpe-, Treynor- und Jensen-Formel sicher anschreiben und die jeweils verwendete Risikogröße (σ vs. β vs. CAPM-Erwartung) benennen.',
    'Das Sharpe-/Treynor-Beispiel rechnen und das widersprüchliche Ranking begründen (SR_A > SR_BM > SR_B, aber TR_B > TR_A > TR_BM wegen Bs schlechterer Diversifikation).',
    'Das Jensen-Alpha grafisch als Abstand zur SML bzw. als Regressionsachsenabschnitt erklären (α größer 0 Out-, α kleiner 0 Underperformance).',
    'Voraussetzungen und Grenzen der Sharpe-Ratio nennen (Normalverteilung, μ_P größer r_f, gleiches regionales Exposure) und die Anpassungen bei Schiefe / Fat Tails einordnen.',
    'Begründen, warum Jensen-Alpha kein sauberes Ranking erlaubt (Risiko bleibt unberücksichtigt), während Sharpe und Treynor es ermöglichen.',
  ],
  pitfalls: [
    'MWR und TWR verwechseln: MWR (interner Zinsfuß) berücksichtigt das Investor-Timing, TWR (geometrisch) nur das Marktgeschehen.',
    'Original-Tippfehler der Folien übernehmen: Folie 9 beschriftet die MWR irrtümlich mit „TWR", Folie 16 die Benchmark-Sharpe als „SR_A", Folie 19 die Treynor als „Sharpe-Ratio" und nutzt „σ_p" statt β_p.',
    'Sharpe und Treynor gleichsetzen: Sharpe misst am Gesamtrisiko (σ), Treynor nur am systematischen Risiko (β); bei gut diversifiziertem Portfolio fallen die Rankings zusammen, sonst nicht.',
    'Annehmen, das höchste Portfolio nach Rendite sei auch nach Sharpe das beste — Portfolio A hat die höchste Rendite, aber wegen des hohen Gesamtrisikos den schlechtesten Sharpe-Rang.',
    'Die Sharpe-Ratio auf asymmetrische / nicht-normalverteilte Renditen (z. B. Optionen) anwenden, ohne den Nenner um Schiefe- und Fat-Tail-Terme anzupassen.',
    'Mit dem Jensen-Alpha Portfolios ranken: ein hohes Alpha kann mit deutlich mehr Risiko erkauft sein, das Alpha allein bildet das nicht ab.',
  ],
};
