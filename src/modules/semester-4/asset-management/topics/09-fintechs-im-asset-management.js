// Static metadata for Kapitel 9 · FinTechs im Asset Management / Robo Advisors.
// Content lives in 09-fintechs-im-asset-management.mdx. Section ids must match
// the <section id> anchors there.

export const meta = {
  id: 'fintechs-im-asset-management',
  title: 'Kapitel 9 · FinTechs im Asset Management / Robo Advisors',
  source:
    'Asset Management · Kapitel 9 · FinTechs im Asset Management / Robo Advisors · Folien 289–305',
  estimatedMinutes: 50,
  sections: [
    { id: 'was-ist-fintech', title: 'FinTech: Definition und Investitionsdynamik' },
    { id: 'fintech-klassifikation', title: 'Klassifikation der FinTech-Segmente' },
    { id: 'komplexitaet-und-defizite', title: 'Komplexität und Defizite des traditionellen Asset Managements' },
    { id: 'robo-advisor-charakteristika', title: 'Charakteristika der Robo Advisors' },
    { id: 'markt-und-aum', title: 'Markt und verwaltetes Vermögen' },
    { id: 'robo-advisory-prozess', title: 'Der Robo-Advisory-Prozess' },
    { id: 'angebotstypen-und-generationen', title: 'Angebotstypen und Entwicklungspfad' },
  ],
  keyTakeaways: [
    'FinTech = „Financial Services" + „Technology": innovative Unternehmen, die Finanzdienstleistungen mit moderner Technologie erbringen; der moderne FinTech-Begriff kam mit der Finanzkrise 2008 auf.',
    'Innerhalb der FinTech-Landschaft ist Robo-Advice dem Segment Vermögensverwaltung zugeordnet (neben Finanzierung, Zahlungsverkehr und Sonstige) — das ist der Fokus des Kapitels.',
    'Robo Advisory ist die potenzielle Lösung für die zwei Dimensionen der Komplexität (intensiv = pro Person, extensiv = zwischen Personen) und die Defizite des traditionellen Asset Managements.',
    'Robo Advisors automatisieren das Asset-/Wealth-Management zu geringen Gebühren (USA 0,15–0,67 %, Europa Ø ca. 0,8 % der AuM p. a.) und zeigen sehr hohe Wachstumsraten; größte europäische Märkte sind UK und Deutschland.',
    'Der Markt ist stark konzentriert: Vanguard dominiert das weltweit verwaltete Vermögen ausgewählter Robo-Advisors 2021 (206,6 Mrd. USD) deutlich; in Deutschland wächst das AuM von 0,76 (2017) auf prognostizierte ca. 32 Mrd. Euro (2026).',
    'Der Robo-Advisory-Prozess gliedert sich in drei Schritte: 1) Investor Screening & Onboarding, 2) Investmentstrategie-Implementierung, 3) Monitoring und Rebalancing.',
    'Das Onboarding erfolgt über Online-Multiple-Choice-Fragebögen (günstig, schnell), birgt aber Informationsverlust und Response Bias; die Strategie nutzt eine mehrstufige ETF-Filterkaskade, die das Universum auf ca. 3–6 % der ETFs reduziert.',
    'Robo-Angebote unterscheiden sich v. a. in der Rebalancing-Ausgestaltung: einfache Angebote (§ 34f GewO, nur strategisch) vs. aufwendigere lizenzierte Angebote (aktive taktische Neugewichtung); die digitale Vermögensanlage entwickelt sich über vier Generationen, aktuell dominiert die zweite.',
  ],
  examFocus: [
    'Begriffsherkunft und Definition von FinTech wiedergeben und den historischen Bezug zur Finanzkrise 2008 nennen.',
    'Robo-Advice in der FinTech-Klassifikation verorten: Segment Vermögensverwaltung (in Anlehnung an Dorfleitner et al. 2020).',
    'Intensive vs. extensive Komplexität abgrenzen — entscheidend: extensive Komplexität hängt nicht von makroökonomischen Größen ab (für alle gleich).',
    'Defizite des traditionellen Asset Managements aufzählen und Robo Advisory als Lösung begründen.',
    'Charakteristika der Robo Advisors inkl. Gebührenniveau (USA 0,15–0,67 %, Europa Ø ca. 0,8 %) und Trend zu hybriden Lösungen benennen.',
    'Die drei Prozessschritte in Reihenfolge nennen; beim Onboarding Pro/Con des Online-Fragebogens und den Response Bias erklären.',
    'Die sechsstufige ETF-Filterkaskade und das Ergebnis (ca. 3–6 % aller ETFs) wiedergeben.',
    'Einfache (§ 34f GewO) vs. aufwendigere Angebote (Vermögensverwaltungs-Lizenz) unterscheiden; Rebalancing als wichtigstes Unterscheidungskriterium nennen.',
  ],
  pitfalls: [
    'Robo Advice (einzelne/einmalige Anlageempfehlung = Anlageberatung) und die fortlaufende Finanzportfolioverwaltung (z. B. mit Rebalancing) gleichsetzen — es sind unterschiedliche Tätigkeiten.',
    'Intensive und extensive Komplexität verwechseln: intensiv = innerhalb einer Person (auch makroökonomisch beeinflusst), extensiv = zwischen Personen (makroökonomische Größen sind für alle gleich).',
    'Annehmen, der Online-Fragebogen sei nur vorteilhaft — er erzeugt Informationsverlust und Response Bias, weil Fragen subjektiv interpretiert werden.',
    'Die Prognosejahre des Deutschland-Charts (2022–2026, mit *) als realisierte Werte lesen; es sind Schätzwerte mit abflachendem Wachstum.',
    'Einfache und aufwendigere Angebote vermischen: nur aufwendigere (lizenzierte) Angebote nehmen eine aktive, automatische taktische Neugewichtung vor.',
    'Annehmen, Robo Advisory beseitige alle Interessenskonflikte — Agency-Probleme bleiben möglich (z. B. bei der Trade Execution durch Kooperationen).',
  ],
};
