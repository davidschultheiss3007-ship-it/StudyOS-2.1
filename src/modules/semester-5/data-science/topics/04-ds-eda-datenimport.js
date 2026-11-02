export const meta = {
  id: 'ds-eda-datenimport',
  title: 'Kapitel 4.1 · EDA: Daten einlesen',
  source: 'Analyse von Finanzdaten & Data Science · Kapitel 4.1 · Folien 102–110 · V26-10-25',
  estimatedMinutes: 25,
  sections: [
    { id: 'ds-eda-tips-einlesen', title: 'Den Trinkgeld-Datensatz einlesen', pages: 'Folien 102–105' },
    { id: 'ds-eda-csv-datei', title: 'Aufbau der csv-Datei', pages: 'Folie 106' },
    { id: 'ds-eda-variablen-tips', title: 'Die Variablen des Datensatzes', pages: 'Folien 107–110' },
  ],
  keyTakeaways: [
    'Kapitel 4 arbeitet mit dem Trinkgeld-Datensatz tips (Bryant & Smith 1995): 244 Beobachtungen, 7 Variablen.',
    'tips.csv wird aus Moodle heruntergeladen, im Arbeitsverzeichnis abgelegt und mit read.csv2("tips.csv") eingelesen; alternativ mit read.csv2(file.choose()).',
    'Die Datei hat Variablennamen in der ersten Zeile, Semikolon als Feldtrennzeichen, Komma als Dezimaltrennzeichen und Anführungszeichen als Textkennzeichen – deshalb read.csv2().',
    'Amerikanische csv-Dateien (Comma Separated Values) trennen Felder mit Komma und Dezimalstellen mit Punkt; dafür ist read.csv() gedacht.',
    'str(tips) zeigt die Struktur: total_bill und tip sind numeric (stetig), size ist integer (diskret), sex, smoker, day und time sind kategorial.',
    'Explorative Datenanalyse ist nach Tukey (1977) „detective work“: Fragen an die Daten stellen.',
  ],
  examFocus: [
    'Den Einlesebefehl am Dateiformat festmachen: Feld- und Dezimaltrennzeichen bestimmen read.csv() oder read.csv2().',
    'Mit str() die Struktur eines Datensatzes lesen: Anzahl Beobachtungen, Anzahl Variablen, Variablentypen.',
    'Die Variablen des Trinkgeld-Datensatzes ihren Skalenniveaus zuordnen.',
  ],
  pitfalls: [
    'Eine deutsche csv-Datei (Semikolon, Dezimalkomma) mit read.csv() einlesen.',
    'Die Anzahl der Variablen (7) mit der Anzahl der Beobachtungen (244) verwechseln.',
    'size wegen der Ganzzahlen für kategorial halten: Es ist eine metrisch diskrete Variable.',
    'Variablennamen mit Leer- oder Sonderzeichen oder Umlauten anlegen.',
    'Vergessen, mosaic nach jedem Start von R bzw. RStudio mit library(mosaic) zu laden.',
  ],
};
