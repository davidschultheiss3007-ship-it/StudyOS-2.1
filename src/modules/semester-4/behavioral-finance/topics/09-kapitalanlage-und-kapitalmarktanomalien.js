// Static metadata for Kapitel 9 · Kapitalanlage und Kapitalmarktanomalien.
// Content lives in 09-kapitalanlage-und-kapitalmarktanomalien.mdx.
// Section ids must match the <section id> anchors in the mdx exactly.

export const meta = {
  id: 'kapitalanlage-und-kapitalmarktanomalien',
  title: 'Kapitel 9 · Kapitalanlage und Kapitalmarktanomalien',
  source: 'Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 294–340',
  estimatedMinutes: 100,
  sections: [
    { id: 'informationseffizienz', title: 'Traditionelle Theorie: Informationseffizienz', pages: 'Folien 3–5' },
    { id: 'traditional-vs-behavioral', title: 'Traditional vs. Behavioral Finance', pages: 'Folien 6–8' },
    { id: 'kapitalmarktanomalien', title: 'Anomalien an den Finanzmärkten', pages: 'Folien 9–16' },
    { id: 'winner-loser-effekt', title: 'Winner-Loser-Effekt', pages: 'Folien 18–21' },
    { id: 'value-effekt', title: 'Value-Effekt', pages: 'Folien 22–34' },
    { id: 'risikopraemie', title: 'Risikoprämie als Anlagestrategie', pages: 'Folien 35–40' },
    { id: 'size-und-momentum-effekt', title: 'Size- und Momentum-Effekt', pages: 'Folien 41–43' },
    { id: 'idealtypischer-kurstrend', title: 'Idealtypisches Muster eines Kurstrends', pages: 'Folien 44–47' },
  ],
  keyTakeaways: [
    'Die traditionelle Theorie kennt drei Stufen der Informationseffizienz (schwach, halb-streng, streng); bei Effizienz sind keine risikoadjustierten Überrenditen erzielbar, Prognosen sind überflüssig und Psychologie spielt keine Rolle.',
    'Das Grossman/Stiglitz-Paradoxon (1980) zeigt: vollkommene Informationseffizienz ist logisch unmöglich, weil Informationsbeschaffung Kosten verursacht — das Gleichgewicht liegt zwischen den Extremen.',
    'Behavioral Finance widerspricht: Kapitalmarktpreise werden durch beschränkt rationale Investoren beeinflusst, Märkte können falsch bewertet sein und Renditen sind teilweise prognostizierbar.',
    'Kapitalmarktanomalien (Kalendereffekte, Dispositionseffekt, Home Bias, Über-/Unterreaktionen, Equity-Premium-Puzzle u. a.) lassen sich verhaltensökonomisch über Heuristiken, Anker, Prospect Theory und mentale Kontenführung erklären.',
    'Winner-Loser-, Value-, Size- und Momentum-Effekt sind empirisch belegte Strategien: vergangene Verlierer/Value-/Small-Cap-Aktien erzielen Überrenditen, die sich nicht durch höheres Beta erklären lassen.',
    'Der Value-Effekt (Renditedifferenz 19,99 %) ist am besten durch Fehlbewertung erklärbar — Zufall und Risiko gelten als unwahrscheinlich; Investoren schreiben gute (Growth) bzw. schlechte (Value) Fundamentaldaten zu weit in die Zukunft fort.',
    'Die implizite Risikoprämie wird invers aus Marktpreis und Dividendenprognosen abgeleitet; eine risikoprämienbasierte Strategie handelt antizyklisch (hohe Prämie → übergewichten, niedrige → untergewichten).',
    'Das idealtypische Kurstrendmuster durchläuft vier Phasen: Unterreaktion → positive Überraschungen → psychologische Trendverselbständigung → offenkundige Übertreibung (grüne Unter- in rote Überbewertung).',
  ],
  examFocus: [
    'Die drei Formen der Informationseffizienz nach Fama benennen und zuordnen (vergangene / öffentliche / öffentliche + private Informationen).',
    'Das Grossman/Stiglitz-Paradoxon als Logikkette erklären (Information kostet → ohne Ertrag sucht niemand → dann lohnt sich Suche wieder → Gleichgewicht dazwischen).',
    'Traditional vs. Behavioral Finance gegenüberstellen: Mehrrendite, Prognostizierbarkeit, Markteffizienz und Menschenbild.',
    'Anomalien ihren verhaltensökonomischen Erklärungen zuordnen (z. B. Dispositionseffekt → Verlustaversion; Home Bias → Verfügbarkeitsheuristik).',
    'Winner-Loser- und Value-Effekt empirisch einordnen: Loser/Value höhere Rendite ohne höheres Beta (Renditedifferenz 10,84 % bzw. 19,99 %).',
    'Die drei Erklärungen des Value-Effekts (Zufall, Risiko, Fehlbewertung) bewerten — Fehlbewertung ist die wahrscheinlichste.',
    'Das Dividendenbarwertmodell und die Herleitung der impliziten Risikoprämie (BMW-Beispiel: 10,65 %) erläutern; antizyklische Strategie ableiten.',
    'Size-Effekt (SMB: 0,63 % p.m. / 7,56 % p.a.) und Momentum-Effekt (Renditedifferenz 16,37 %, Trendkern ca. ein Jahr) sowie das vierphasige Kurstrendmuster beschreiben.',
  ],
  pitfalls: [
    'Empirische Unvorhersagbarkeit von Kursen nicht mit fundamentaler Richtigkeit verwechseln — laut Shiller einer der größten Fehler des ökonomischen Denkens.',
    'Beim Winner-Loser-Effekt die Richtung verdrehen: vergangene Verlierer sind zukünftige Gewinner (Mean Reversion), nicht umgekehrt.',
    'Annehmen, die Überrenditen von Value/Loser-Portfolios seien Risikoprämien — empirisch fällt das Beta nicht, das CAPM-Beta korreliert sogar negativ mit dem Book-to-Market.',
    'Die Risiko-Hypothese als bestätigt ansehen: die Empirie zeigt das Gegenteil der erwarteten positiven Beta-Rendite-Beziehung.',
    'Beim Dispositionseffekt nicht vergessen, dass er der goldenen Börsenregel widerspricht (Gewinne laufen lassen, Verluste begrenzen).',
    'Fair Value und Marktpreis im Dividendenbarwertmodell vertauschen: bei gegebenem Zins folgt der faire Preis, bei gegebenem Marktpreis folgt die implizite Risikoprämie.',
    'Momentum für unbegrenzt halten: der Effekt ist zeitlich begrenzt — der stabile Trendkern hält typischerweise nur etwa ein Jahr.',
  ],
};
