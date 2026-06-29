// Static metadata for Kapitel 6 · Portfoliomanagement. Content lives in
// 06-portfoliomanagement.mdx. Section ids must match the <section id> anchors.

export const meta = {
  id: 'portfoliomanagement',
  title: 'Kapitel 6 · Portfoliomanagement',
  source: 'Asset Management · Kapitel 6 · Portfoliomanagement · Folien 203-230',
  estimatedMinutes: 60,
  sections: [
    { id: 'investmentprozess-zyklus', title: 'Der Investmentprozess als Kreislauf', pages: 'Folie 204' },
    { id: 'investmentziele-und-restriktionen', title: 'Investmentziele, Restriktionen und Renditeansätze', pages: 'Folien 205–207' },
    { id: 'saa-pm-finanzcontrolling', title: 'SAA, Portfoliomanagement i.e.S. und Finanzcontrolling', pages: 'Folien 208–214' },
    { id: 'diversifikation-und-risiken', title: 'Diversifikation und Risiken der Kapitalanlage', pages: 'Folien 14–15' },
    { id: 'asset-allocation-ebenen', title: 'Asset Allocation: Definition und Ebenen', pages: 'Folien 16–20' },
    { id: 'bedeutung-der-saa', title: 'Die Bedeutung der strategischen Asset Allocation', pages: 'Folien 21–25' },
    { id: 'taktische-asset-allocation', title: 'Taktische Asset Allocation', pages: 'Folien 26–28' },
  ],
  keyTakeaways: [
    'Der Investmentprozess ist ein zyklischer Vier-Schritte-Prozess: Investmentziele, Strategische Asset Allocation, Portfoliomanagement i.e.S. und Finanzcontrolling; SAA und PM i.e.S. bilden zusammen den Asset-Allocation-Prozess.',
    'Anlageziele resultieren aus der Anlegeranalyse; das magische Dreieck Rendite–Sicherheit–Liquidität beschreibt den grundlegenden Zielkonflikt.',
    'Renditeziele unterscheiden den Relative-Return-Ansatz (Benchmark- bzw. Peer-Group-bezogen) vom Absolute-Return-Ansatz (marktunabhängige Mindestrendite).',
    'Streuung innerhalb einer Assetklasse baut nur unsystematisches Risiko ab; das systematische Marktrisiko bleibt und sinkt nur durch Mischung mehrerer Assetklassen.',
    'Asset Allocation verteilt das Kapital über Diversifikationsebenen: strategisch auf Assetklassen, Länder und Währungen, taktisch auf Branchen und Einzeltitel; theoretisches Diversifikationspotenzial entsteht besonders durch möglichst negative Korrelationen.',
    'Empirisch (Brinson, Hood & Beebower 1986) erklärt die Asset Allocation rund 91,5 % der Varianz der Portfolioperformance — sie ist die „Königsdisziplin".',
    'Wegen Nebenbedingungen (Liquidität, Wettbewerbsrenditen, Finanzstärke, gesetzlicher Rahmen) reicht das reine Markowitz-Modell für institutionelle Investoren nicht aus.',
    'Die TAA passt Assetklassengewichte an die erwartete relative Performance an, akzeptiert bewusst systematisches Risiko und zielt auf risikoadjustiertes Alpha.',
  ],
  examFocus: [
    'Die vier Investmentschritte in Reihenfolge benennen und den „Asset-Allocation-Prozess" (Schritte 2 und 3) abgrenzen.',
    'Magisches Dreieck Rendite–Sicherheit–Liquidität als Zielkonflikt erklären.',
    'Relative-Return- vs. Absolute-Return-Ansatz unterscheiden.',
    'Unsystematisches vs. systematisches Risiko anhand der Diversifikationskurve abgrenzen (Risiko über Anzahl Wertpapiere, Asymptote = Marktrisiko).',
    'Strategische vs. taktische Asset Allocation: Ebenen, Inhalte und empirischen Performance-Einfluss (SAA > TAA) erklären.',
    'Brinson-Ergebnis (ca. 91,5 % Asset Allocation) und die „80 % Rendite / 95 % Risiko"-Aussage einordnen.',
    'Portfolio Rebalancing (Rückkehr zur Ausgangsstruktur) von Portfolio Upgrading (bewusste Strukturänderung) unterscheiden.',
    'Den VAG-Anlagegrundsatz (§ 54 I / § 115): Sicherheit, Rentabilität, jederzeitige Liquidität, Mischung und Streuung wiedergeben.',
  ],
  pitfalls: [
    'Systematisches Risiko für wegdiversifizierbar halten — innerhalb einer Assetklasse bleibt nur das Marktrisiko bestehen.',
    'Strategische und taktische Asset Allocation verwechseln: SAA legt Assetklassen/Länder/Währungen fest, TAA wählt Branchen und Einzeltitel.',
    'Rebalancing und Upgrading gleichsetzen — Rebalancing stellt die alte Struktur wieder her, Upgrading verändert sie bewusst.',
    'Das Brinson-Ergebnis als Aussage über die Rendite-Höhe deuten; es betrifft die Varianz (Schwankung) der Performance.',
    'Annehmen, das Markowitz-Modell genüge institutionellen Investoren — Liquiditäts-, Wettbewerbs- und Rechtsnebenbedingungen sprengen es.',
    'Relative und absolute Renditeansätze verwechseln: relativ = gegen Benchmark, absolut = positive Rendite unabhängig vom Markt.',
  ],
};
