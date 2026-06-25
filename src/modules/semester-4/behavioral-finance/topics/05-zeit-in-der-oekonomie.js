export const meta = {
  id: 'zeit-in-der-oekonomie',
  title: 'Kapitel 5 · Zeit in der Ökonomie',
  source: 'Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 165–190',
  estimatedMinutes: 55,
  sections: [
    { id: 'zeitpraeferenz-und-zinssatz', title: 'Zeitpräferenz des Geldes und der Zinssatz', pages: 'Folien 167–173' },
    { id: 'du-modell', title: 'Das DU-Modell: exponentielles Diskontieren', pages: 'Folien 174–176' },
    { id: 'zeitinkonsistenz', title: 'Zeitinkonsistenz und zeitkonsistentes Verhalten', pages: 'Folien 177–179' },
    { id: 'hyperbolisches-diskontieren', title: 'Hyperbolisches Diskontieren und Präferenzumkehr', pages: 'Folien 180, 182–184' },
    { id: 'thaler-und-marshmallow', title: 'Empirie: Thaler (1981) und der Marshmallow-Test', pages: 'Folien 181, 185' },
    { id: 'aehnlichkeit-rubinstein', title: 'Diskontierung aufgrund von Ähnlichkeit (Rubinstein)', pages: 'Folien 186–187' },
    { id: 'weitere-zeitanomalien', title: 'Weitere Zeitanomalien', pages: 'Folien 188–190' },
  ],
  keyTakeaways: [
    'Ein positiver Zinssatz drückt die Zeitpräferenz des Geldes aus: heutiger Konsum wird höher bewertet als künftiger. Beck (2014) nennt sechs Gründe — Unsicherheit, Risikokompensation, Opportunitätskosten, Inflation, Ungeduld und multiple Persönlichkeiten.',
    'Das traditionelle DU-Modell (Discounted Utility) bewertet den Gesamtnutzen als Summe der mit konstantem, exponentiellem Diskontfaktor (1/(1+i))^n abgezinsten Periodennutzen.',
    'Bei exponentiellem Diskontieren ist Verhalten zeitkonsistent: Verschiebt man beide Optionen um dieselbe Spanne, bleibt die Rangfolge der Barwerte erhalten (909,09 = 909,09 bzw. 826,45 = 826,45).',
    'Hyperbolisches Diskontieren ersetzt (1+i)^n durch (1+i·n) im Nenner — der effektive Diskontsatz steigt mit Annäherung an die Gegenwart und erklärt damit Präferenzumkehr.',
    'Thaler (1981) belegt sinkende implizite Jahreszinsen mit zunehmender Wartezeit (ca. 400 % bei 1 Monat, 233 % bei 1 Jahr, 21 % bei 10 Jahren) — ein empirischer Beleg für hyperbolisches Diskontieren.',
    'Der Marshmallow-Test misst Belohnungsaufschub; die Fähigkeit zu warten korreliert eng mit Sozialkompetenz und akademischen Fähigkeiten.',
    'Rubinsteins Ähnlichkeitsansatz (2003) erklärt Entscheidungen über die wahrgenommene Ähnlichkeit von Beträgen und Zeitpunkten, nicht allein über den Diskontfaktor.',
    'Zeitanomalien: Vorzeicheneffekt (Gewinne stärker diskontiert als Verluste), Größeneffekt (kleine Beträge stärker diskontiert als große) und die Vorliebe für steigende Konsumprofile widersprechen der reinen DU-Logik.',
  ],
  examFocus: [
    'Sechs Gründe für die Existenz eines Zinssatzes nach Beck (2014) nennen und je kurz begründen können.',
    'Exponentielle DU-Formel U = Σ (1/(1+i))^n · U(c_n) sicher anwenden; Beispiel mit i = 10 % ergibt Barwert 371,97.',
    'Definition der Zeitinkonsistenz: Eine Entscheidung sollte sich nicht ändern, wenn beide Optionen um dieselbe Zeitspanne verschoben werden.',
    'Unterschied der Diskontfaktoren: exponentiell (1/(1+i))^n gegenüber hyperbolisch 1/(1+i·n) — und die Konsequenz Präferenzumkehr (909,09 vs. 883,33 sofort, aber 530 vs. 526,32 später).',
    'Thaler-(1981)-Daten als Beleg für hyperbolisches Diskontieren: sinkender impliziter Zinssatz mit steigender Frist.',
    'Vorzeicheneffekt vs. Größeneffekt korrekt zuordnen (Gewinn/Verlust bzw. klein/groß) und mit Thaler-Zahlen belegen.',
    'Vorliebe für steigende Konsumprofile (80,90,100) statt fallender (100,90,80) und die vier Erklärungen (Verlustaversion, Gewöhnung, Antizipationsnutzen, Zwangssparen).',
  ],
  pitfalls: [
    'Exponentielles und hyperbolisches Diskontieren verwechseln: exponentiell hat n im Exponenten ((1+i)^n), hyperbolisch hat n als Faktor im Nenner (1+i·n).',
    'Glauben, exponentielles Diskontieren erzeuge Präferenzumkehr — es ist gerade zeitkonsistent; nur hyperbolisches Diskontieren kehrt die Rangfolge um.',
    'Vorzeicheneffekt und Größeneffekt vertauschen: der Vorzeicheneffekt betrifft Gewinn vs. Verlust, der Größeneffekt kleine vs. große Beträge.',
    'Das 2002er-Experiment (Alternative A/B) als Beleg für hyperbolisches Diskontieren lesen — es ist gerade ein Widerspruch (geduldig auf mittlere Frist, ungeduldig auf lange Frist).',
    'Die Banknoten-Visuals (500-Euro-Schein) für fachlichen Inhalt halten: sie sind rein dekorativ; entscheidend ist der jeweilige Zeithorizont der Frage.',
  ],
};

export default meta;
