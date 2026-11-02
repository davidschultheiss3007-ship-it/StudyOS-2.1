export const meta = {
  id: 'ds-eda-zusammenfassung',
  title: 'Kapitel 4.5 · EDA: Zusammenfassung',
  source: 'Analyse von Finanzdaten & Data Science · Kapitel 4.5 · Folien 226–229 · V26-10-25',
  estimatedMinutes: 15,
  sections: [
    { id: 'ds-eda-sum-tipps', title: 'Tipps für Visualisierungen', pages: 'Folien 226–227' },
    { id: 'ds-eda-sum-grafiken', title: 'Grafische Verfahren der Datenanalyse', pages: 'Folie 228' },
    { id: 'ds-eda-sum-kennzahlen', title: 'Übersicht deskriptive Kennzahlen', pages: 'Folie 229' },
  ],
  keyTakeaways: [
    'Eine Grafik lohnt sich, wenn sie viele Zahlen vermittelt; sie soll nicht von der Hauptbotschaft ablenken und den visuellen Vergleich fördern.',
    'Farben nur einsetzen, wenn sie den Vergleich unterstützen; 3D vermeiden; auf die Achsenskalierung achten.',
    'Die Wahl der Grafik folgt dem Skalenniveau: gf_bar/gf_barh und mosaicplot für kategoriale, gf_histogram, gf_boxplot und gf_violin für metrische Merkmale, gf_point für zwei metrische Merkmale, gf_line für Verläufe.',
    'favstats() fasst die Kennzahlen numerischer Variablen zusammen; einzeln mit mean(), median(), iqr() und sd().',
    'cor() berechnet den Korrelationskoeffizienten; für ordinale Merkmale die Rangkorrelation mit method = "spearman".',
    'prop() liefert den Anteil einer Ausprägung, tally() die (Kreuz-)Tabellierung aller Ausprägungen.',
  ],
  examFocus: [
    'Für eine gegebene Fragestellung und ein Skalenniveau die passende Grafik und den passenden mosaic-Befehl wählen.',
    'Für ein Skalenniveau die zulässigen Kennzahlen nennen (z. B. Median für ordinale, Mittelwert nur für metrische Merkmale).',
    'Eine vorliegende Grafik anhand der Visualisierungstipps kritisieren.',
  ],
  pitfalls: [
    'Den Mittelwert für ordinale Merkmale berechnen.',
    'Pearson-Korrelation für ordinale Merkmale verwenden statt method = "spearman".',
    'Farben oder 3D-Effekte ohne inhaltlichen Zweck einsetzen.',
    'Eine abgeschnittene Achse übersehen, die Unterschiede größer wirken lässt.',
  ],
};
