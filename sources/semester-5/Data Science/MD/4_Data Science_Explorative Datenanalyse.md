Analyse von Finanzdaten & Data Science
Kapitel 4
Explorative Datenanalyse
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 102 © 2026 – Hochschule der Bayerischen Wirtschaft

Agenda
1. Einführung
2. Grundlagen quantitativer Datenanalyse
3. Einführung in R
4. Explorative Datenanalyse
5. Die Normalverteilung
6. Hypothesentests
7. Lineare Regression
8. Die Hausarbeit
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110033 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 4.1
Explorative Datenanalyse
Daten einlesen
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 104 © 2026 – Hochschule der Bayerischen Wirtschaft

Explorative Datenanalyse
Daten einlesen
Einlesen der Tipping1-Daten (Trinkgeld-Datensatz):
# tips.csv ist aus Moodle heruntergeladen
# und im Arbeitsverzeichnis abgelegt
# Einlesen in R
tips <- read.csv2("tips.csv")
# Alternativ – heruntergeladene Datei einlesen
# und das Verzeichnis auswählen:
tips <- read.csv2(file.choose())
Tipp: Über den Befehl getwd()wird das aktuelle Verzeichnis ausgegeben,
bzw. mit setwd(…) festgelegt.
1 Bryant, P. G. and Smith, M (1995) Practical Data Analysis: Case Studies in Business Statistics. Homewood, IL: Richard D. Irwin Publishing
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110055 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Die csv-Datei
Dateiaufbau tips.csv1:
§ Erste Zeile: Variablennamen2
§ Datenfeldtrennzeichen der Variablen: ; (Semikolon)3
§ Dezimaltrennzeichen: , (Komma)
§ Textkennzeichen: " (Anführungszeichen)
"total_bill";"tip";"sex";"smoker";"day";"time";"size"
16,99;1,01;"Female";"No";"Sun";"Dinner";2
10,34;1,66;"Male";"No";"Sun";"Dinner";3
21,01;3,5;"Male";"No";"Sun";"Dinner";3
23,68;3,31;"Male";"No";"Sun";"Dinner";2
...
§ Hinweis: Der Einlesebefehl in R hängt vom Dateiformat der Datei ab.
Siehe z. B. ?read.table oder Paket readr und readxl.
1 Eine solche csv-Datei kann z. B. durch Export aus Tabellenkalkulationsprogrammen erzeugt werden.
2 Tipp: Mit Buchstaben beginnen, keine Leer- oder Sonderzeichen verwenden, Umlaute vermeiden.
3 In amerikanischen csv-Dateien ist das Datenfeldtrennzeichen das Komma (daher der Name: csv – Comma Separated Values) und das
Dezimaltrennzeichen der Punkt. Solche Dateien können mit mit read.csv() eingelesen werden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110066 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Variablen Trinkgeld-Datensatz
Ein Kellner sammelte über mehrere Monate Daten über sein Trinkgeld:
§ total_bill: Rechnungshöhe in Dollar
§ tip: Trinkgeld in Dollar
§ sex: Geschlecht des Rechnungszahlenden
§ smoker: Gab es Raucher*innen am Tisch?
§ day: Wochentag
§ time: Tageszeit / Mahlzeit
§ size: Anzahl Personen am Tisch
str(tips) # gibt Informationen zur Struktur des Datensatzes
'data.frame': 244 obs. of 7 variables:
$ total_bill: num 17 10.3 21 23.7 24.6 ...
$ tip : num 1.01 1.66 3.5 3.31 3.61 4.71 2 3.12 1.96 3.23 ...
$ sex : chr "Female" "Male" "Male" "Male" ...
$ smoker : chr "No" "No" "No" "No" ...
$ day : chr "Sun" "Sun" "Sun" "Sun" ...
$ time : chr "Dinner" "Dinner" "Dinner" "Dinner" ...
$ size : int 2 3 3 2 4 4 2 4 2 2 ...
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110077 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
mosaic
Zur Erinnerung
# Ggf. Einmalig vorab installieren
install.packages("mosaic")
# Pakete müssen bei jedem Start von R bzw. RStudio geladen werden
# Paket mosaic laden
library(mosaic)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110088 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Aufbau Datensatz
Wie viele kategoriale Variablen liegen vor?
a) 1
b) 2
c) 4
d) 7
e) 244
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110099 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Aufbau Datensatz
Wie viele kategoriale Variablen liegen vor?
a) 1
b) 2
c) 4
d) 7
e) 244
Es liegen 4 (Antwort c)) kategoriale Variablen vor (sex, smoker, day,
time), als Factor gespeichert. Die anderen sind metrische Variablen, 1 davon
diskret (size – integer), 2 stetig (total_bill, tip – numeric).
7 ist die Gesamtzahl an Variablen und 244 ist die Anzahl der Beobachtungen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111100 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 4.2
Explorative Datenanalyse
Analyse kategorialer Daten
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 111 © 2026 – Hochschule der Bayerischen Wirtschaft

Explorative Datenanalyse
Variablen Trinkgeld-Datensatz
Ein Kellner sammelte über mehrere Monate Daten über sein Trinkgeld:
§ total_bill: Rechnungshöhe in Dollar
§ tip: Trinkgeld in Dollar
§ sex: Geschlecht des Rechnungszahlenden
§ smoker: Gab es Raucher*innen am Tisch?
§ day: Wochentag
§ time: Tageszeit / Mahlzeit
§ size: Anzahl Personen am Tisch
Welche Fragen fallen Ihnen ein,
bzw. was würden Sie gerne wissen,
wenn Sie die o.g. Variablen lesen?
„Exploratory data analysis is detective work“
(Tukey, 1977, Begründer der explorativen Datenanalyse)
Quelle: https://alchetron.com/John-Tukey
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111122 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Graphiken
§ Säulendiagramm / Balkendiagramm: Häufigkeit von
Merkmalsausprägungen (nominal, ordinal, metrisch diskret), vertikale
Ausrichtung.
• Vertikale Ausrichtung: Säulendiagramm
• Horizontale Ausrichtung: Balkendiagramm
§ Mosaikplot: Darstellung der Merkmalsausprägungen zweier nominaler
Merkmale.
§ Kreisdiagramm 1
Häufigkeiten
§ Anteile: Relative Anteile der verschiedenen Merkmalsausprägungen
kategorialer Merkmale (nominal, ordinal).
§ Kreuztabelle: Tabelle der verschiedenen Merkmalsausprägungen
kategorialer Merkmale (nominal, ordinal), entweder in absoluten oder
relativen Häufigkeiten.
1 Siehe z. B. Regel 20 von https://robjhyndman.com/hyndsight/graphics/ , abgerufen am 04. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111133 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Säulendiagramm1
Visualisiert die absoluten oder relativen Häufigkeiten von Beobachtungen von
kategorialen (oder metrisch diskreten) Variablen durch die Höhe der Säulen.
Kategoriale Variable: sex Metrisch diskrete Variable: size
1 Wird häufig auch als Balkendiagramm bezeichnet, korrekterweise hat ein Balkendiagramm aber querliegende Balken.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111144 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Analyse: Geschlecht RechnungszahlerIn
Analysiere über Säulendiagramm
gf_bar( ~ sex, # (unabhängige) Variable, die analysiert wird
data = tips) # Datensatz
Welche Aussage stimmt?
a) Bei einer Mehrheit der Stichprobe zahlt eine Frau.
b) Bei einer Mehrheit der Stichprobe zahlt ein Mann.
c) Weiß nicht.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111155 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Analyse: Geschlecht RechnungszahlerIn
Analysiere über Säulendiagramm oder Balkendiagramm:
# Zwei Plots erzeugen
plot1 <- gf_bar( ~ sex, # (unabhängige) Variable, die analysiert wird
data = tips) # Datensatz
plot2 <- gf_barh( ~ sex, data = tips)
# Nebeneinander anzeigen
grid.arrange(plot1, plot2, nrow = 1)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111166 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Anteil Frauen
Analysiere über Anteil +:
prop( ~ sex, # (unabhängige) Variable die analysiert wird
success = "Female", # wovon den Anteil bestimmen
data = tips) # Datensatz
prop_Female
0.3565574
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111177 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Tabellierung
Analysiere über Tabellen:
Absolute Häufigkeit ℎ :
!
tally( ~ sex, # Variable die analysiert wird
data = tips) # Datensatz
sex
Female Male
87 157
!
Relative Häufigkeit / = ! (Option format = "proportion"):
!
"
tally( ~ sex, # Variable die analysiert wird
format = "proportion", # Option: Anteile
data = tips) # Datensatz
sex
Female Male
0.3565574 0.6434426
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111188 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Modellierung Geschlecht
Das Geschlecht des Rechnungszahlenden (sex) variiert:
Mal zahlt ein Mann, mal zahlt eine Frau.
Welche der anderen Variablen könnte einen Teil dieser Variation
modellieren, d. h., womit könnte dies zusammenhängen?
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 111199 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Modellierung Geschlecht
Das Geschlecht des Rechnungszahlenden (sex) variiert:
Mal zahlt ein Mann, mal zahlt eine Frau.
Welche der anderen Variablen könnte einen Teil dieser Variation
modellieren, d. h., womit könnte dies zusammenhängen?
Hier ist vieles möglich – im folgenden versuchen wir es mit der Tageszeit
time à Geschlecht des Rechnungszahlenden je Tageszeit.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112200 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Gruppiertes Säulendiagramm
gf_bar( ~ sex # Variable die analysiert wird
| time, # Variable nach der bedingt wird
data = tips) # Datensatz
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112211 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Gruppiertes Säulendiagramm mit Farben
E
X
K
U
R
S
Darstellung mit farblicher Kategorisierung in gf_bar() über die Option fill
gf_bar( ~ sex # Variable die analysiert wird
| time, # Variable nach der bedingt wird
fill = ~sex, # unterschiedliche Farben für Variable
data = tips) # Datensatz
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112222 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Gruppiertes Säulendiagramm mit Farben
E
X
K
U
R
S
Die Farbgebung kann sich auf eine weitere Variable beziehen: hier
Raucherstatus
gf_bar( ~ sex # Variable die analysiert wird
| time, # Variable nach der bedingt wird
fill = ~smoker, # unterschiedliche Farben für Variable
data = tips) # Datensatz
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112233 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Geschlecht nach Tageszeit
Welche Aussage stimmt?
a) Beim Lunch zahlen mehr Frauen als Männer.
b) Beim Lunch zahlen weniger Frauen als Männer.
c) Beim Lunch zahlen gleich viele Frauen wie Männer.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112244 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Geschlecht nach Tageszeit
Welche Aussage stimmt?
a) Beim Lunch zahlen mehr Frauen als Männer.
b) Beim Lunch zahlen weniger Frauen als Männer.
c) Beim Lunch zahlen gleich viele Frauen wie Männer.
Antwort a) ist korrekt, im Bereich Lunch ist der Balken für Female etwas höher als der
für Male. Aber man sieht auch, dass der Unterschied klein ist. In der nachfolgenden
Kreuztabellierung sehen Sie dies auch in absoluten Zahlen und Anteilen ausgedrückt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112255 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kreuztabellierung Geschlecht nach Tageszeit
Absolute Häufigkeit je Mahlzeit:
tally( ~ sex # Variable, die analysiert wird
| time, # Variable, nach der bedingt wird
data = tips) # Datensatz
time
sex Dinner Lunch
Female 52 35
Male 124 33
Relative Häufigkeit je Mahlzeit:
tally( ~ sex # Variable, die analysiert wird
| time, # Variable, nach der bedingt wird
format = "proportion", # Option: Anteile
data = tips) # Datensatz
time
sex Dinner Lunch
Female 0.2954545 0.5147059
Male 0.7045455 0.4852941
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112266 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Raucher je Wochentag
Welcher Befehl führt eine Kreuztabellierung der Anteile der Raucher je
Wochentag durch?
a) tally( ~ smoker | day, format = 'proportion', data = tips)
b) tally( ~ day | smoker, format = 'proportion', data = tips)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112277 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Raucher je Wochentag
Welcher Befehl führt eine Kreuztabellierung der Anteile der Raucher je
Wochentag durch?
a) tally( ~ smoker | day, format = "proportion", data = tips)
b) tally( ~ day | smoker, format = "proportion", data = tips)
a) ist die korrekte Antwort.
In dieser Reihenfolge werden zeilenweise die Ausprägungen von smoker
dargestellt und spaltenweise die Ausprägungen von day, grundsätzliche
Formeleingabe ! ~ " | #, hier smoker gruppiert nach day.
Mit format = "proportion" werden die Anteile der Ausprägungen
bezogen auf die jeweilige Spalte berechnet.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112288 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kreuztabellierung Raucher und Wochentag
tally( ~ smoker | day, format = "proportion", data = tips)
day
smoker Fri Sat Sun Thur
No 0.2105263 0.5172414 0.7500000 0.7258065
Yes 0.7894737 0.4827586 0.2500000 0.2741935
tally( ~ day | smoker, format = "proportion", data = tips)
smoker
day No Yes
Fri 0.02649007 0.16129032
Sat 0.29801325 0.45161290
Sun 0.37748344 0.20430108
Thur 0.29801325 0.18279570
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 112299 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Relative Häufigkeiten
Achtung: (Confusion of the inverse):
Wovon wird die relative Häufigkeit angegeben?
§ Der relative Anteil der Raucher am Freitag entspricht nicht dem relativen
Anteil des Freitags der Raucher.
§ Der Papst ist ein Mann, aber nur die allerwenigsten Männer sind Papst.
§ Die Wahrscheinlichkeit, krank zu sein, wenn das Testergebnis positiv
ist, ist nicht dasselbe wie die Wahrscheinlichkeit, dass das Testergebnis
positiv ist, wenn man krank ist.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113300 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: R Fehler
Was ist an diesem Befehl falsch?
tally( ~ x data = daten)
a) Es fehlt eine Option.
b) Es fehlt eine bedingende Variable.
c) Es fehlt ein Komma.
d) Gar nichts.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113311 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: R Fehler
Was ist an diesem Befehl falsch?
tally( ~ x data = daten)
a) Es fehlt eine Option.
b) Es fehlt eine bedingende Variable.
c) Es fehlt ein Komma.
d) Gar nichts.
Antwort c) ist korrekt, es fehlt ein Komma.
Korrekt ist:
tally( ~ x, data = daten)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113322 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: R Fehler
Was ist an diesem Befehl falsch?
Tally( ~ x, data = daten)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113333 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: R Fehler
Was ist an diesem Befehl falsch?
Tally( ~ x, data = daten)
R unterscheidet zwischen Groß- und Kleinschreibung, Tally gibt es
nicht.
Korrekt muss es heißen:
tally( ~ x, data = daten)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113344 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Mosaikplot
Visualisiert die gemeinsame Verteilung von zwei kategorialen Variablen.
Dabei entspricht die Höhe und Breite der Rechtecke der jeweiligen relativen
Häufigkeit.
Überleben auf der Titanic
1st 2nd. 3rd Crew
Class
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113355 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
devivruS
oN
seY

Explorative Datenanalyse
Übung: Mosaikplot
Stimmt die Aussage: Der Anteil der Überlebenden ist in der 1. Klasse größer
als in den unteren Klassen?
a) Ja.
b) Nein. Überleben auf der Titanic
1st 2nd. 3rd Crew
Class
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113366 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
devivruS
oN
seY

Explorative Datenanalyse
Lösung Übung: Mosaikplot
Stimmt die Aussage: Der Anteil der Überlebenden ist in der 1. Klasse größer
als in den unteren Klassen?
a) Ja.
b) Nein. Überleben auf der Titanic
1st 2nd. 3rd Crew
a) Ja, Class
… da der Flächenanteil für Yes relativ größer ist als in den anderen Klassen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113377 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
devivruS
oN
seY

Explorative Datenanalyse
Mosaikplot Raucher und Tage
So können Sie einen solchen Plot erzeugen.1
mosaicplot(day ~ smoker, data = tips, color = TRUE)
1Hinweis: Bei mosaicplot() sollten in der Formel die Achsen vertauscht werden, also x ~ y.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113388 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Farben
E
X
K
U
R
S
Wenn Sie Farbe ins Spiel bringen wollen: Installieren und laden sie
einfach das Paket viridis.
install.packages("viridis")
library(viridis)
mosaicplot(day ~ smoker, data = tips, color = viridis(2, alpha = 0.7))
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 113399 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 4.3
Explorative Datenanalyse
Analyse numerischer (metrischer) Daten
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 140 © 2026 – Hochschule der Bayerischen Wirtschaft

Explorative Datenanalyse
Übersicht
Graphiken
§ Säulendiagramm / Balkendiagramm: Häufigkeiten von Merkmalsausprägungen
(nominal, ordinal, metrisch diskret).
§ Dotplot: Häufigkeiten von Merkmalsausprägungen (nominal, ordinal, metrisch).
§ Histogramm: Häufigkeit von gruppierten Merkmalsausprägungen (metrisch).
§ Boxplot: Visualisierung von Median, oberem und unterem Quartil 1, Minimum und
Maximum, Ausreißern (metrisch).
§ Streudiagramm / Scatterplot: Darstellung der Merkmalsausprägungen von zwei
i. d. R. metrischen Merkmalen 2 als Punkte.
§ Liniendiagramm: Verlauf der Merkmalsausprägung eines Merkmals.
Kennzahlen
§ Lagemaß: Beschreibt u. a. die zentrale Tendenz einer Verteilung.
§ Streumaß: Beschreibt die Verteilung der Daten (häufig um das Lagemaß).
§ Schiefe: Beschreibt die Form der Verteilung.
1 Lagemaße: à Erläuterung folgt.
2 Bei kategorialen oder metrisch diskreten Merkmalen ggfs. verwackeln (engl.: jitter) à Erläuterung folgt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114411 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Dotplot
Ein Dotplot zeigt die Häufigkeiten der einzelnen Ausprägungen an.
gf_dotplot( ~ size, data = tips)
Hinweis: Die Skalierung an der y-Achse ist nicht sinnvoll. Sie können sie
verbergen mit gf_dotplot( ~ size, data = tips) %>%
gf_theme(scale_y_continuous(NULL, breaks = NULL)).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114422 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Dotplot
Der Dotplot kann auch für stetige Merkmale genutzt werden. Dann werden
Bereiche in Intervalle (Klassen) zusammengefasst. Die Breite können Sie mit
binwidth = festlegen.
gf_dotplot( ~ total_bill, data = tips, binwidth = 2) %>%
gf_theme(scale_y_continuous(NULL, breaks = NULL))
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114433 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Histogramm
Ein Histogramm visualisiert die gruppierte Verteilung einer numerischen
Variable. Der Flächeninhalt der Rechtecke entspricht dabei der relativen
Häufigkeiten der Beobachtungen im Intervall (Klasse).
gf_histogram( ~ total_bill, data = tips, binwidth = 10, center = 5)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114444 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Histogramm
Welche Aussage stimmt?
a) Die meisten Werte sind ≤ 10.
b) Die meisten Werte sind > 10 und ≤ 20.
c) Die meisten Werte sind > 20 und ≤ 30.
d) Die meisten Werte sind > 30 und ≤ 40.
e) Die meisten Werte sind > 40 und ≤ 50.
f) Die meisten Werte sind > 50.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114455 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Histogramm
Welche Aussage stimmt?
a) Die meisten Werte sind ≤ 10.
b) Die meisten Werte sind > 10 und ≤ 20.
c) Die meisten Werte sind > 20 und ≤ 30.
d) Die meisten Werte sind > 30 und ≤ 40.
e) Die meisten Werte sind > 40 und ≤ 50.
f) Die meisten Werte sind > 50.
Antwort b) ist korrekt, da der Balken am höchsten ist – bei gleicher
Balkenbreite, somit in dieser Klasse prozentual am meisten Beobachtungen
sind.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114466 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Analyse Rechnungshöhe
gf_histogram( ~ total_bill, # Variable, die analysiert wird
data = tips,
binwidth = 5, # Breite einer Säule entspricht 5$
center = 2.5) # stellt sicher, dass die Klassen von 0-5,5-10,… gehen
gf_histogram( ~ total_bill, # Variable, die analysiert wird
data = tips,
binwidth = 5, # Breite einer Säule entspricht 5$
# ohne center-Angabe sind die Klassenmitten 5,10,15,…
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114477 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Histogramm: Anzahl der Klassen
Histogramm: Anzahl der Klassen festlegen mit Option bins =
bins = 2 bins = 10
bins = 20 bins = 50
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114488 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Verteilung Trinkgeld
Erstellen Sie ein Histogramm für die Variable tip. Wählen Sie geeignete
Klassenbreiten.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 114499 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Verteilung Trinkgeld
Erstellen Sie ein Histogramm für die Variable tip. Wählen Sie geeignete
Klassenbreiten.
Eine mögliche Lösung:
gf_histogram( ~ tip, binwidth = 0.5, center = 0.25, data = tips)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115500 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Verteilungen
Die Verteilung gibt an, wie häufig bzw. wahrscheinlich bestimmte
Werte oder Wertebereiche sind.
§ Schiefe: Bei rechtsschiefen (linkssteilen) Verteilungen sind mehr
Werte im unteren Wertebereich, bei linksschiefen (rechtssteilen)
im oberen.
§ Bei symmetrischen Verteilungen verteilen sich die Daten
symmetrisch um eine zentrale Lage.
§ Bei mehrgipfligen Verteilungen gibt es mehr als nur ein Zentrum,
um das die Werte streuen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115511 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Verteilungsformen
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115522 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Verteilungsform
Welche Aussage stimmt vermutlich für die Verteilung des Einkommens?
a) Das Einkommen ist gleichverteilt.
b) Das Einkommen ist multimodal.
c) Das Einkommen ist normalverteilt.
d) Das Einkommen ist linksschief.
e) Das Einkommen ist rechtsschief.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115533 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Verteilungsform
Welche Aussage stimmt vermutlich für die Verteilung des Einkommens?
a) Das Einkommen ist gleichverteilt.
b) Das Einkommen ist multimodal.
c) Das Einkommen ist normalverteilt.
d) Das Einkommen ist linksschief.
e) Das Einkommen ist rechtsschief.
Da, grob gesagt, nur wenige viel und sehr viel verdienen, viele ein mittleres
Einkommen haben und etwas weniger ein geringes, wird die Verteilung
rechtsschief sein. Antwort e) ist also korrekt.
Hausaufgabe: Recherchieren Sie doch mal die Einkommensverteilung in
Deutschland.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115544 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Rechnungshöhe
Was gilt für die Variable Rechnungshöhe total_bill?
a) Es ist eine latente verhältnisskalierte Variable.
b) Es ist eine manifeste verhältnisskalierte Variable.
c) Es ist eine latente intervallskalierte Variable.
d) Es ist eine manifeste intervallskalierte Variable.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115555 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Rechnungshöhe
Was gilt für die Variable Rechnungshöhe total_bill?
a) Es ist eine latente verhältnisskalierte Variable.
b) Es ist eine manifeste verhältnisskalierte Variable.
c) Es ist eine latente intervallskalierte Variable.
d) Es ist eine manifeste intervallskalierte Variable.
Die Rechnungshöhe lässt sich direkt messen, also ist sie manifest.
Da es einen absoluten Nullpunkt gibt, ist sie verhältnisskaliert, also ist b)
korrekt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115566 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Rechnungshöhe
Welche der folgenden Aussagen stimmt?
a) Die Rechnungshöhe ist gleichverteilt.
b) Die Rechnungshöhe ist multimodal.
c) Die Rechnungshöhe ist normalverteilt.
d) Die Rechnungshöhe ist linksschief.
e) Die Rechnungshöhe ist rechtsschief.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115577 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Rechnungshöhe
Welche der folgenden Aussagen stimmt?
a) Die Rechnungshöhe ist gleichverteilt.
b) Die Rechnungshöhe ist multimodal.
c) Die Rechnungshöhe ist normalverteilt.
d) Die Rechnungshöhe ist linksschief.
e) Die Rechnungshöhe ist rechtsschief.
Die Rechnungshöhe hat eine Spitze, ist also unimodal.
Sie fällt nach rechts hin flacher ab, als sie links steigt, somit ist sie
rechtsschief (e)).
Bei (annähernder) Gleichverteilung wären alle Balken etwa gleich hoch, die
Normalverteilung ist symmetrisch.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115588 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Variablentransformation
Ggfs. können Variablen durch Transformationen (z. B. ( ), ln( ), …) 1 in
Richtung einer symmetrischen Normalverteilung transformiert werden:
gf_histogram( ~ sqrt(total_bill), # Quadratwurzel der Variable
bins = 10, # Anzahl Säulen
data = tips) # Datensatz
Alternative:
tips$wurzel_bill <- sqrt(tips$total_bill) # Neue Variable in Datenframe tips hinzufügen/berechnen
gf_histogram( ~ wurzel_bill, # Variable
bins = 10, # Anzahl Säulen
data = tips) # Datensatz
1 Hinweis: ( ), mit sqrt( ), ln mit log( )
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 115599 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Verteilungsfunktion
Die empirische Verteilungsfunktion1 0 (") gibt an, wie viele der 1
#
Beobachtungen kleiner oder gleich " sind:
!"#$%& ()*+$,%-."/)" 0 1
0 (") =
#
"
1,00
0,75
0,50
0
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116600 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
)%(
#
!
W
ied
erh
o
S tatistik
lu
n g
Diskrete Verteilung Stetige Verteilung
Verteilungsfunktion Rechnungshöhe
0,25
0 20 40
x
1 Neben der empirischen Verteilungsfunktion gibt es auch eine theoretische Verteilungsfunktion ,(-).

Explorative Datenanalyse
Übung: Verteilungsfunktion
Für die Rechnungshöhe gilt: 0 10 = 0,07:
#
pdata( ~ total_bill, q = 10, data = tips)
[1] 0.06967213
Welche Aussage stimmt?
a) Die relative Häufigkeit einer Rechnungshöhe von 10 $ liegt bei 0.07.
b) Die relative Häufigkeit einer Rechnungshöhe von mindestens 10 $ liegt
bei 0.07.
c) Die relative Häufigkeit einer Rechnungshöhe von höchstens 10 $ liegt bei
liegt bei 0.07.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116611 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Verteilungsfunktion
Für die Rechnungshöhe gilt: 0 10 = 0,07:
#
pdata( ~ total_bill, q = 10, data = tips)
[1] 0.06967213
Welche Aussage stimmt?
a) Die relative Häufigkeit einer Rechnungshöhe von 10 $ liegt bei 0.07.
b) Die relative Häufigkeit einer Rechnungshöhe von mindestens 10 $ liegt
bei 0.07.
c) Die relative Häufigkeit einer Rechnungshöhe von höchstens 10 $ liegt bei
liegt bei 0.07.
Die (empirische) Verteilungsfunktion sagt aus, wie groß der Anteil der
Beobachtungen ist, die ≤ " sind, also c). Damit liegt dir relative Häufigkeit
einer Rechnungshöhe über 10 $ bei 1 − 0 (10) = 0.93.
#
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116622 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lagemaße
W
ied
erh
o
S tatistik
lu
n g
Lagemaße sollen u. a. die zentrale Tendenz der Daten beschreiben:
§ Minimum bzw. Maximum: Kleinste bzw. größte Merkmalsausprägung.
§ Modus / Modalwert: Häufigste Merkmalsausprägung.
§ Median / Zentralwert: Merkmalsausprägung, die bei (aufsteigend)
sortierten Beobachtungen in der Mitte liegt;
§ Arithmetischer Mittelwert (engl. mean) 1: Summe aller Werte geteilt
!
durch die Anzahl: "̅ =
∑"
" ;
#$! #
"
§ Quantil: Das p-Quantil ist der Wert, für den gilt, dass er von p Prozent der
Werte nicht überschritten wird.
§ Quartile: Q1 = 25%-Quantil, Q2 = 50%-Quantil, Q3 = 75%-Quantil.
1 Darüber hinaus gibt es noch den Geometrischen und den Harmonischen Mittelwert.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116633 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Beispielrechnung Lagemaße
W
ied
erh
o
S lu
tatistik n g
| Daten: 20; 18; 24; 40; 24; 22; 21; 23; 20; 28 (! |     |     |     |       |     | = 10)   |         |
| ------------------------------------------------ | --- | --- | --- | ----- | --- | ------- | ------- |
| § Minimum, Maximum, Modus: "                     |     |     |     | = 18, | "   | = 40, " | = 20;24 |
|                                                  |     |     |     | %#"   | %&' | %()     |         |
§ Median: 18; 20; 20; 21; 22; 23; 24; 24; 28; 40
--.-/
| 	 	 | 											" | =   | = 22,5 |     |     |     |     |
| --- | ------------ | --- | ------ | --- | --- | --- | --- |
*,,
-
|     |     |     |     | !   |     |     | -0* |
| --- | --- | --- | --- | --- | --- | --- | --- |
§ Arithmetischer Mittelwert: "̅ = 20 + 18 + 24 + ⋯+ 28 	= = 24
|                   |     |     |     | !*  |     |     | !*  |
| ----------------- | --- | --- | --- | --- | --- | --- | --- |
| § 25 %-Quantil: " |     | =   | 20  |     |     |     |     |
*,-,
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  116644 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Beispiel Quantil
Das 90%-Quantil der Rechnungshöhe liegt bei 32.24 $:
qdata( ~ total_bill, p = 0.9, data = tips)
90%
32.235
§ 90% der Rechnungen sind kleiner oder gleich 32.24 $.
§ 1 − 90% = 10% der Rechnungen sind größer oder gleich 32.24 $.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116655 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Lagemaße
W
ied
erh
o
S tatistik
lu
n g
Stimmt die Aussage: Es gilt immer ) +̅ = 0.5?
1
a) Ja.
b) Nein.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116666 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Lagemaße
W
ied
erh
o
S tatistik
lu
n g
Stimmt die Aussage: Es gilt immer ) +̅ = 0.5?
1
a) Ja.
b) Nein.
b) Nein,
… während für den Median nach Definition gilt ) + = 0.5 gilt dies
1 2,4
für den Mittelwert beispielsweise bei symmetrischen Verteilungen,
aber nicht z. B. bei schiefen Verteilungen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116677 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Mittelwert als “Modell”
Idee:
Daten = Modell + Rest.
mean( ~ total_bill, data = tips)
[1] 19.78594
§ Für Beobachtung B gilt: " = "̅ + (" − "̅).
# #
§ Der „Rest” (Residuum) " − "̅ zeigt die Abweichung der Beobachtung
#
zum Mittelwert "̅ (hier: “Modell”) an.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116688 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Abweichungen vom Mittelwert
Die Abweichungen vom Mittelwert summieren sich zu Null auf
4
3
2
1
1 3 4
$ $ $
!(#$ − #̅) = ! # − ! #̅ = * + #̅ − * + #̅ = 0
3
!"# !"# !"#
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 116699 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
toN
e
W
ied
erh
o
S tatistik
lu
n g
Richtung der
Abweichung
negativ
positiv
MW = 2.33
2

Explorative Datenanalyse
Streuungsmaße
W
ied
erh
o
S tatistik
lu
n g
Streuungsmaße sollen die Streuung / Variation der Daten
beschreiben:
§ Varianz: Maß für die durchschnittliche quadratische Abweichung zum
!
Mittelwert: C- = ∑" " − "̅ -. Diese hat aber eine andere Einheit als
#$! #
"4!
die Daten, z. B. Daten in €, Varianz €2. Durch das Quadrieren werden
Abweichungen zum Mittelwert nach oben oder unten gleich behandelt
und größere Abweichungen stärker gewichtet.1
§ Standardabweichung (engl. standard deviation):
Quadratwurzel der Varianz: CD = C = C-.
§ Interquartilsabstand (engl. interquartile range, IQR):
Oberes Quartil (75%-Quantil) – unteres Quartil (25%-Quantil).
§ Spannweite (engl. range): Maximum – Minimum.
1 1/0 ist nicht im eigentlichen Sinne falsch.
1/(0 − 1) ist aus Gründen, die außerhalb dieses Moduls liegen, besser, wenn von einer Stichprobe auf die Varianz der Population (22) verallgemeinert
werden soll. Der Unterschied ist bei großem 0 klein.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117700 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Beispielrechnung Streuungsmaße
W
ied
erh
o
S lu
tatistik n g
Daten: 20; 18; 24; 40; 24; 22; 21; 23; 20; 28,   ! = 10, +̅ = 24
§ Varianz:
1 354
|     | 5                      |      |      | 5       |      | 5     |         | 5   |
| --- | ---------------------- | ---- | ---- | ------- | ---- | ----- | ------- | --- |
|     | 1 =                    | = 20 | − 24 | + 18    | − 24 | + ⋯ + | 28 − 24 | 	=  |
|     | 10 −                   | 1    |      |         |      |       |         | 9   |
|     | ≈ 39,33                |      |      |         |      |       |         |     |
| §   | Standardabweichung: 18 |      |      | = 39,33 | =    | 6,27  |         |     |
§ Interquartilsabstand 1: ;<=
|     |                |     |      | = 24 | − 20 | = 4 |     |     |
| --- | -------------- | --- | ---- | ---- | ---- | --- | --- | --- |
| §   | Spannweite: 40 | −   | 18 = | 22.  |      |     |     |     |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  117711 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Varianz und SD als “Abweichungsquadrate”
W
ied
erh
o
S lu
tatistik n g
| 5   |     |     |     |     |     | Richtung der Abweichung |     |     |     |     |
| --- | --- | --- | --- | --- | --- | ----------------------- | --- | --- | --- | --- |
       Negativ
       Positiv
4
3
0,601
0,414
MW = 2.33
0,106
2
0,681
1
|     | 1   |     | 2   |     | 3   | 4   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
1
1$
|     |     | ≈   | 6   | 0.106 | + 0.141 | + 0.601 | + 0.681 |     | = 0.509 |     |
| --- | --- | --- | --- | ----- | ------- | ------- | ------- | --- | ------- | --- |
|     |     | 4   | − 1 |       |         |         |         |     |         |     |
Abweichungsquadrate als Kennzahl für „Rest“:
| §   | = Modell + Rest: " |     |     |     | = "̅ | + ("@ − | "̅). |     |     |     |
| --- | ------------------ | --- | --- | --- | ---- | ------- | ---- | --- | --- | --- |
Daten
!
|                            |     |     |     | ∑"  |          | 2   |        | 12  |       | 1E2. |
| -------------------------- | --- | --- | --- | --- | -------- | --- | ------ | --- | ----- | ---- |
| § Quadratsumme des Restes: |     |     |     |     | " 	 −	"̅ | =   | C	 − 1 | ⋅ = | C − 1 | 6    |
|                            |     |     |     | %&' | !        |     |        |     |       |      |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  117722 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Beispiel: Abwanderungserkennung
§ Während Max sehr regelmäßig einkauft (kleine Streuung), kauft Moni
zwar genau so oft, aber unregelmäßiger ein.
Zeitpunkte
§ Beide waren seit 30 Tagen nicht mehr einkaufen: Aufgrund der größeren
Streuung der Kaufintervalle ist dies bei Moni üblicher als bei Max.1
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117733 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
nenosreP
Max
Moni
0 50 100 150
1 Vgl. z. B. Papenhoff, H., Lübke, K. (Management, 2017): Churn Management – Herausforderungen für den Handel, in: Helmke, S. et al. (Hg.) Effektives
Customer Relationship Management, S. 161–170.

Explorative Datenanalyse
Übung: z-Wert
z-Transformation (Studentisierung):
Überführung einer Verteilung in eine mit 76 = 9 und :; = <:
!
()(̅
> = "
"
+,
#
Kunde A hat bei 30 Tagen nicht einkaufen einen z-Wert von 1, Kunde B einen von 2. Welcher
Kunde ist abwanderungsgefährdeter?
a) A.
b) B.
c) Kann mit der gegebenen Information nicht entschieden werden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117744 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: z-Wert
z-Transformation (Studentisierung):
Überführung einer Verteilung in eine mit >̅ = 0 und AB = 1:
#
()(̅
> = "
"
+,
#
Kunde A hat bei 30 Tagen nicht einkaufen einen z-Wert von 1, Kunde B einen von 2. Welcher
Kunde ist abwanderungsgefährdeter?
a) A.
b) B.
c) Kann mit der gegebenen Information nicht entschieden werden.
b),
… Der Zähler D − D̅ gibt an ob der Wert D über oder unter dem (jeweiligen) Mittelwert
" "
D̅ liegt. Durch die Standardisierung (Division durch die jeweilige AB ) wird die Abweichung
$
zum Mittelwert relativiert: Wie groß ist die Abweichung. Die Abweichung zum Mittelwert ist
bei B (relativ) größer: Während die Dauer der Abwesenheit von A eine Standardabweichung
über seinem Mittelwert liegt, liegt diese bei B zwei Standardabweichungen über dem
Mittelwert.
Hinweis: z.B. Befehl zscore().
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117755 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Vergleich Streuung
Bei welcher Abbildung ist die Standardabweichung CD wohl am größten?
a) Abbildung A.
b) Abbildung B.
c) Abbildung C.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117766 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
tnuoc
A
90
60
30
0
-2 0 2
B
C
tnuoc
40
20
0
-4 0 4
tnuoc
100
75
50
25
0
-6 -3 0 3 6

Explorative Datenanalyse
Lösung Übung: Vergleich Streuung
Bei welcher Abbildung ist die Standardabweichung !" wohl am größten?
a) Abbildung A.
b) Abbildung B.
c) Abbildung C.
c),
… hier liegen mehr Beobachtungen weiter vom Mittelwert entfernt als bei B.
(Die Beobachtungen in B streuen auch mehr als die Werte in A.) Relevant ist die
Variation der Werte (#-Achse), nicht der Häufigkeit ($-Achse).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117777 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
tnuoc
A
90
60
30
0
-2 0 2
B
C
tnuoc
40
20
0
-4 0 4
tnuoc
100
75
50
25
0
-6 -3 0 3 6

Explorative Datenanalyse
Trinkgeld-Datensatz
inspect()inspiziert den Datensatz und gibt eine Übersicht über
wesentliche Kennzahlen.
inspect(tips)
categorical variables:
name class levels n missing distribution
1 sex character 2 244 0 Male (64.3%), Female (35.7%)
2 smoker character 2 244 0 No (61.9%), Yes (38.1%)
3 day character 4 244 0 Sat (35.7%), Sun (31.1%), Thur (25.4%) ...
4 time character 2 244 0 Dinner (72.1%), Lunch (27.9%)
quantitative variables:
name class min Q1 median Q3 max mean sd n missing
...1 total_bill numeric 3.07 13.3475 17.795 24.1275 50.81 19.785943 8.9024120 244 0
...2 tip numeric 1.00 2.0000 2.900 3.5625 10.00 2.998279 1.3836382 244 0
...3 size integer 1.00 2.0000 2.000 3.0000 6.00 2.569672 0.9510998 244 0
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117788 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Metrische Variablen
Wie viele metrische Variablen liegen vor?
a) 2
b) 3
c) 4
d) 7
e) 244
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 117799 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Metrische Variablen
Wie viele metrische Variablen liegen vor?
a) 2
b) 3
c) 4
d) 7
e) 244
§ Es liegen 3 (Antwort b)) metrische (numerische) Variablen vor
(total_bill, tip, size), die anderen sind kategoriale
(bzw. nominalskalierte) Variablen.
§ 7 ist die Gesamtzahl an Variablen und 244 ist die Anzahl der
Beobachtungen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118800 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kennzahlen: Rechnungshöhe
Analysiere über Kennzahlen:
favstats( ~ total_bill, # Variable, die analysiert wird
data = tips) # Datensatz
min Q1 median Q3 max mean sd n missing
3.07 13.3475 17.795 24.1275 50.81 19.78594 8.902412 244 0
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118811 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Kennzahlen
Analysiere über Kennzahlen:
favstats( ~ total_bill, # Variable, die analysiert wird
data = tips) # Datensatz
min Q1 median Q3 max mean sd n missing
3.07 13.3475 17.795 24.1275 50.81 19.78594 8.902412 244 0
Im welchen Bereich liegen 50% der Beobachtungen der Rechnungshöhe?
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118822 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Kennzahlen
Analysiere über Kennzahlen:
favstats( ~ total_bill, # Variable, die analysiert wird
data = tips) # Datensatz
min Q1 median Q3 max mean sd n missing
3.07 13.3475 17.795 24.1275 50.81 19.78594 8.902412 244 0
Im welchen Bereich liegen 50% der Beobachtungen der Rechnungshöhe?
Die mittleren 50% liegen im Bereich Q1 bis Q3. Dies sind die
Beobachtungswerte innerhalb des Interquartilsabstands (IQR). Aber auch
zwischen min und median bzw. zwischen median und max (jeweils
einschließlich) liegen 50% der Beobachtungen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118833 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Boxplot
Der Boxplot visualisiert die Verteilung von deskriptiven Kennzahlen und
mögliche Ausreißer einer numerischen Variable.
gf_boxplot(tip ~ 1, data = tips)
gf_boxplot(~ tip, data = tips)
liefert einen horizontalen Boxplot.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118844 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Struktur eines Boxplot
§ Die untere Linie der Box ist das untere Quartil (25%-Quantil, Q1).
§ Die obere Linie der Box ist das obere Quartil (75%-Quantil, Q3).
§ Der Linie in der Box (gelegentlich auch Punkt) ist der Median.
§ Sollten Punkte außerhalb der Antennen sein, sind dies mögliche
Ausreißer.
§ Maximale Reichweite der Antennen:
Bis zu der Beobachtung, die maximal 1,5 ⋅ FGH vom oberen bzw.
unteren Quartil entfernt liegt. Sollte das Maximum der Daten kleiner bzw.
das Minimum größer sein, wird dieses genommen.1
1 Definition nicht immer einheitlich
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118855 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Boxplot
Verknüpfe Abbildung und Kennzahlen.
Ab wann ist eine Beobachtung ein potentieller Ausreißer nach oben?
0 5 10
x
min Q1 median Q3 max mean sd n missing
0.11 1.3 2.36 3.4 12.63 2.96 2.65 100 0
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118866 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Boxplot
Verknüpfe Abbildung und Kennzahlen.
Ab wann ist eine Beobachtung ein potentieller Ausreißer nach oben?
|     | 0   |           5 |     | 10  |
| --- | --- | ----------- | --- | --- |
x
| min  Q1 median  Q3   max mean   sd |     |     |     | n missing |
| ---------------------------------- | --- | --- | --- | --------- |
0.11 1.3   2.36 3.4 12.63 2.96 2.65 100       0
§ Es ist FGH	 = 	3.4	 − 	1.3	 = 	2.1	und 1,5	 ⋅ 	FGH	 = 	3.15.
| § Die obere Antenne liegt daher bei 3.4	 |     |     | + 	3.15	 | = 	6.55.  |
| ---------------------------------------- | --- | --- | -------- | --------- |
§ Also können Werte als Ausreißer nach oben gelten, wenn sie größer als 6.55 sind.
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  118877 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Boxplot Rechnungshöhe abhängig vom Geschlecht
Analysiere über Boxplot
| gf_boxplot(total_bill |          | ~ # abhängige | Variable |
| --------------------- | -------- | ------------- | -------- |
|                       | sex,     | # unabhängige | Variable |
data = tips)   # Datensatz
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  118888 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Boxplot
Welche Aussage stimmt nach der Abbildung?
a) Der Mittelwert der Rechnungshöhe ist bei den Männern unter 20$.
b) Der Mittelwert der Rechnungshöhe ist bei den Männern über 20$.
c) Der Median der Rechnungshöhe ist bei den Männern unter 20$.
d) Der Median der Rechnungshöhe ist bei den Männern über 20$.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 118899 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Boxplot
Welche Aussage stimmt nach der Abbildung?
a) Der Mittelwert der Rechnungshöhe ist bei den Männern unter 20$.
b) Der Mittelwert der Rechnungshöhe ist bei den Männern über 20$.
c) Der Median der Rechnungshöhe ist bei den Männern unter 20$.
d) Der Median der Rechnungshöhe ist bei den Männern über 20$.
Die Mittelwerte werden in diesen Boxplots nicht mit ausgegeben, daher können die
Antworten a) und b) nicht beurteilt werden. Der Median (die Linie in der Box) liegt bei
den Männern noch knapp unter 20$, somit ist Antwort c) korrekt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119900 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kennzahlen / Diagramme gruppiert nach Geschlecht
Zusammenfassende Kennzahlen je Geschlecht:
favstats(total_bill ~ sex, data = tips)
sex min Q1 median Q3 max mean sd n missing
1 Female 3.07 12.75 16.40 21.52 44.30 18.05690 8.009209 87 0
2 Male 7.25 14.00 18.35 24.71 50.81 20.74408 9.246469 157 0
Zusammenfassendes Diagramm je Mittelwert von Geschlecht:1
gf_point(total_bill ~ sex, stat = "summary", size = 5, data = tips)
1 mit gf_point(total_bill ~ sex, stat = "summary", color = "blue", size = 5, data = tips) wird’s bunt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119911 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Modellierung
Idee:
IJKL1 = MNDLOO + HLCK
Modell:
§ Gesamtmittelwert "̅, d. h. keine die Rechnungshöhe modellierende Variable:
favstats(total_bill ~ 1, data = tips)
1 min Q1 median Q3 max mean sd n missing
1 1 3.07 13.3475 17.795 24.1275 50.81 19.78594 8.902412 244 0
"
L " − " 2 = C − 1 6 1E2 = 244 − 1 6 8.9024122 = 19258.46
!
%&'
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119922 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Modellierung
Modell:
§ Gesamtmittelwert D̅ je Anzahl Personen F = 1,…6, d. h. die Rechnungshöhe wird durch
j
die jeweilige Anzahl Personen modelliert:
favstats(total_bill ~ size, data = tips)
size min Q1 median Q3 max mean sd n missing
1 1 3.07 6.2050 7.915 8.9525 10.07 7.24250 3.010729 4 0
2 2 5.75 12.4525 15.370 19.6900 40.55 16.44801 6.043729 156 0
3 3 10.33 16.9400 20.365 27.7750 50.81 23.27763 9.407065 38 0
4 4 16.49 21.5000 25.890 34.8100 48.33 28.61351 8.608603 37 0
5 5 20.69 28.1500 29.850 30.4600 41.19 30.06800 7.340396 5 0
6 6 27.05 29.1125 32.050 37.7675 48.17 34.83000 9.382000 4 0
∑0 ∑ 2 $ D − D 2 = ∑0 J − 1 K AB 3 = 12110.54
-./ 1.1 " , & & -./ & -
§ Bei der Analyse total_bill ~ size ist der Rest kleiner als bei der Analyse
§ total_bill ~ 1 (ohne erklärende Variable).
§ Für dieses Reduzierung des Restes wird ein Preis gezahlt: In den einzelnen Gruppen
sind weniger Beobachtungen: Weniger Freiheitsgrade (engl: degrees of freedom, df).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119933 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Modellierung
Visualisierung für den reduzierten Datensatz mit nur 1 oder 6 Personen am
Tisch (size).
total_bill ∽ 1 total_bill ∽ size
50 50
40 40
30 30
20 20
10 10
2 4 6 8 2 4 6 8
Relativ viel Residualstreuung Relativ wenig(er) Residualstreuung
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119944 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 4.4
Explorative Datenanalyse
Zusammenhang zwischen numerischen Variablen
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 195 © 2026 – Hochschule der Bayerischen Wirtschaft

Explorative Datenanalyse
Streudiagramm
Ein Streudiagramm visualisiert die gemeinsame Verteilung von zwei i. d. R.
numerischen Variablen durch Punkte.
plot1 <- gf_point(tip ~ total_bill, data = tips) # zwei stetige Variablen
plot2 <- gf_point(tip ~ size, data = tips) # eine stetige, eine diskrete
grid.arrange(plot1, plot2, nrow = 1)
Mit dem Befehl grid.arrange können mehrere Grafiken strukturiert nebeneinander / übereinander angeordnet werden.
Er ist Teil des Pakets gridExtra à install.packages(„gridExtra“) à library(gridExtra)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119966 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Streudiagramm
Bei diskreten Merkmalen kann es vorkommen, dass sich die einzelnen
Datenpunkte überlagern, sog. „Overplotting“. Mit dem Befehl jitter
werden die Punkte zufällig verwackelt.
plot1 <- gf_point(tip ~ size, data = tips)
plot2 <- gf_point(tip ~ jitter (size), data = tips) #jitter (engl.) = wackeln
grid.arrange(plot1, plot2, nrow = 1)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119977 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kovariation
W
ied
erh
o
S tatistik
lu
n g
§ Kovarianz beschreibt den linearen Zusammenhang zweier metrischer Merkmale:
1 =
' ∑"
" − "̅ ! − !N .
() %&' % %
"*'
§ Die Werte beider Variablen einer Beobachtung werden mit dem jeweiligen
Mittelwert der Variable verglichen. Vom Produkt der gemeinsamen Abweichungen
wird der Mittelwert berechnet.
+
§ Der Korrelationskoeffizient nach Pearson1 O = )*
+, . +,
) *
normiert die Kovarianz auf den Wertebereich −1 bis +1 durch Division der
Kovarianz durch das Produkt der Standardabweichungen.
§ Korrelationskoeffizienten O > 0 zeigen einen positiven linearen Zusammenhang
an, O < 0 einen negativen. Je größer |O|, desto größer ist der lineare
Zusammenhang.
§ Vorsicht: Korrelation heißt nicht zwangsläufig Kausalität, keine Korrelation heißt
nicht zwangsläufig kein Zusammenhang oder keine Kausalität.2
1 Alternative: Spearman.
2 Scheinkorrelation, siehe z. B. http://www.tylervigen.com/spurious-correlations
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 119988 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Kovariation W
ied
erh
o lu
S n
tatistik g
§ Einkommen P und Ausgaben Q: positiver Zusammenhang:

Personen mit überdurchschnittlichem Einkommen  " − "̅ > 0  haben
#
| häufig auch  überdurchschnittliche Ausgaben  |     |     |     | ! − | !S > 0 	,  |
| -------------------------------------------- | --- | --- | --- | --- | ---------- |
#
Personen mit unterdurchschnittlichem Einkommen  " − "̅ < 0  haben
#
| häufig auch unterdurchschnittliche Ausgaben  |     |     |     | ! − | !S < 0 .  |
| -------------------------------------------- | --- | --- | --- | --- | --------- |
#
| In beiden Fällen:  | " − "̅ | U ! | − !S > 0. |     |     |
| ------------------ | ------ | --- | --------- | --- | --- |
|                    | #      | #   |           |     |     |
§ Preis x und Absatz y: negativer Zusammenhang:
Produkte mit überdurchschnittlichem Preis  " − "̅ > 0  haben häufig
#
| einen unterdurchschnittlichen Absatz  |     |     | ! − | !S < 0 ,  |     |
| ------------------------------------- | --- | --- | --- | --------- | --- |
#
Produkte mit unterdurchschnittlichem  Preis  " − "̅ < 0  haben häufig
#
| einen überdurchschnittlichen Absatz  |     |     | ! − | !S > 0 .  |     |
| ------------------------------------ | --- | --- | --- | --------- | --- |
#
| In beiden Fällen:  | " − "̅ | U ! | − !S < 0. |     |     |
| ------------------ | ------ | --- | --------- | --- | --- |
|                    | #      | #   |           |     |     |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  119999 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Korrelationskoeffizient
| −1   | −0.9 | −0.75 |
| ---- | ---- | ----- |
| −0.3 | 0    | 0.3   |
| 0.75 | 0.9  | 1     |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  220000 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Nicht lineare Zusammenhänge
Wie groß ist hier der Korrelationskoeffizient?
a) W ≈ −1
4
b) W ≈ 0
c) W ≈ +1 3
d) W kann nicht bestimmt werden.
y 2
1
0
-2 -1 0 1 2
x
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220011 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Nicht lineare Zusammenhänge
Wie groß ist hier der Korrelationskoeffizient?
a) W ≈ −1
4
b) W ≈ 0
c) W ≈ +1 3
d) W kann nicht bestimmt werden.
y 2
1
0
-2 -1 0 1 2
x
b),
… Der Korrelationskoeffizient misst nur lineare (d. h. insbesondere
monotone) Zusammenhänge.
Hier gilt ! = "2, trotzdem ist W ≈ 0: Erst visualisieren, dann korrelieren.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220022 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Anscombe Quartett
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220033 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Anscombe Quartett
§ Die Verteilung von " und ! unterscheidet sich sichtbar. Aber die
deskriptiven Kennzahlen
•
| +̅   | = 9;	@? = 7,5 |        |
| ---- | ------------- | ------ |
| • 18 | ≈ 3,31;	18    | ≈ 2,03 |
|      | 1             | P      |
•
| A ≈ | 0,82 |     |
| --- | ---- | --- |
§ sind nahezu identisch – in allen vier Fällen.1
§ Erst visualisieren, dann korrelieren!
1 Weiteres Beispiel z. B. unter https://www.autodeskresearch.com/publications/samestats
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  220044 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
The Datasaurus Dozen
Quelle: Autodesk Reseach, https://www.autodeskresearch.com/publications/samestats
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220055 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Korrelationskoeffizient
Stimmt die Aussage: Der Korrelationskoeffizient ist robust gegen Ausreißer!
a) Ja.
b) Nein.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220066 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung Übung: Korrelationskoeffizient
Stimmt die Aussage: Der Korrelationskoeffizient ist robust gegen Ausreißer!
a) Ja.
b) Nein.
% ≈ 0,82
b) Nein,
… wie Sie auch an der Graphik 4 des Anscombe-Quartett erkennen können, gibt es
hier eigentlich gar keinen linearen Zusammenhang, dieser wird nur durch den einen
Ausreißer vorgetäuscht.
Die Kovarianz (auf der der Korrelationskoeffizient beruht) ist wie die Varianz
empfindlich gegen Ausreißer.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220077 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Zusammenhang Rechnungshöhe und Trinkgeld
Welche Aussage ist korrekt?
a) Es scheint keinen Zusammenhang zwischen Rechnungshöhe und Trinkgeld zu
geben.
b) Es scheint einen negativen Zusammenhang zwischen Rechnungshöhe und
Trinkgeld zu geben.
c) Es scheint einen positiven Zusammenhang zwischen Rechnungshöhe und
Trinkgeld zu geben.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220088 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Lösung: Zusammenhang Rechnungshöhe und Trinkgeld
Welche Aussage ist korrekt?
a) Es scheint keinen Zusammenhang zwischen Rechnungshöhe und Trinkgeld zu
geben.
b) Es scheint einen negativen Zusammenhang zwischen Rechnungshöhe und
Trinkgeld zu geben.
c) Es scheint einen positiven Zusammenhang zwischen Rechnungshöhe und
Trinkgeld zu geben.
gf_point(tip ~ total_bill, data = tips)
§ Die Punktewolke erstreckt sich von links
unten nach rechts oben, d. h., im Mittel
werden bei größeren Rechnungsbeträgen
auch die Trinkgelder höher.
Antwort c) ist somit korrekt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 220099 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Korrelation Rechnungshöhe und Trinkgeld
Analyse über Korrelationskoeffizienten:
cor(tip ~ total_bill, data = tips)
[1] 0.6757341
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221100 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Offene Übung
Offene Übung: Rechnungshöhe für Raucher bzw. Nichtraucher
§ Was können Sie über die Verteilung der Rechnungshöhe für Raucher bzw.
Nichtraucher aussagen?
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221111 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Offene Übung
Offene Übung: Rechnungshöhe für Raucher bzw. Nichtraucher
§ Was können Sie über die Verteilung der Rechnungshöhe für Raucher bzw.
Nichtraucher aussagen?
§ Mit folgenden Befehlen können Sie eine explorative Datenanalyse vornehmen:
gf_histogram(~ total_bill | smoker, data = tips)
gf_boxplot(total_bill ~ smoker, data = tips)
favstats(total_bill ~ smoker, data = tips)
iqr(total_bill ~ smoker, data = tips)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221122 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Offene Übung
Offene Übung: Rechnungshöhe für Raucher bzw. Nichtraucher
§ Was können Sie über die Verteilung der Rechnungshöhe für Raucher bzw.
Nichtraucher aussagen?
smoker min Q1 median Q3 max mean sd n missing
1 No 7.25 13.325 17.59 22.755 48.33 19.18828 8.255582 151 0
2 Yes 3.07 13.420 17.92 26.860 50.81 20.75634 9.832154 93 0
No Yes
9.43 13.44
§ Beide Verteilungen sind rechtsschief (gf_histogram),
bei den Nichtrauchern scheint es mehr Ausreißer zu
geben (gf_boxplot).
§ Im Mittel haben die Raucher eine etwas höhere
Rechnungshöhe (favstats).
§ Die Standardabweichung und der Interquartilsabstand
(iqr) sind bei den Rauchern höher.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221133 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
§ Mit den folgenden Befehlen können Kurse aus Yahoo Finance (andere
Quellen siehe ?getSymbols eingelesen werden,
– Im folgenden beispielhaft die Apple Aktienkurse für den Zeitraum von
2007 bis 2021.
§ Falls Sie das Paket quantmod noch nicht installiert haben, müssen Sie es
einmalig mit dem Befehl install.packages("quantmod",
dependencies = TRUE) installieren. Um das Paket zu laden, verwenden
Sie den library Befehl, dieser muss bei jeder neuen R Sitzung
aufgerufen werden.1
library(quantmod)
# Apple-Aktienkurse der letzten 15 Jahre aus Yahoo-Finance laden
getSymbols("AAPL", from = "2007-01-01", to = "2021-12-31")
1 Wie bereits in früheren Kapiteln erwähnt, gelten diese Hinweise für alle anderen verwendeten Pakete ebenso.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221144 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Aufbau des Datensatzes
str(AAPL)
An ‘xts’ object on 2007-01-03/2021-12-30 containing:
Data: num [1:3776, 1:6] 3.08 3 3.06 3.07 3.09 ...
- attr(*, "dimnames")=List of 2
..$ : NULL
..$ : chr [1:6] "AAPL.Open" "AAPL.High" "AAPL.Low" "AAPL.Close" ...
Indexed by objects of class: [Date] TZ: UTC
xts Attributes:
List of 2
$ src : chr "yahoo"
$ updated: POSIXct[1:1], format: "2022-05-02 10:13:14“
dim(AAPL)
[1] 3776 6
Es handelt sich um ein Zeitreihen-Objekt, ein sog. xts Objekt. Im Datensatz befinden
sich 3776 Beobachtungen und 6 Variablen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221155 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Mit names() erhalten wir die Bezeichnungen der Variablen
names(AAPL)
[1] "AAPL.Open" "AAPL.High" "AAPL.Low" "AAPL.Close"
[5] "AAPL.Volume" "AAPL.Adjusted"
Da für uns nur der um Dividenden und Aktiensplits bereinigte Schlusskurs von
Interesse ist, beschränken wir uns auf diese Variable. Im nächsten Schritt ändern wir
den Namen der verbleibenden Variable auf price.
Es handelt sich um ein Zeitreihen-Objekt, ein sog. xts-Objekt. Im Datensatz befinden
sich 3776 Beobachtungen und 6 Variablen.
# Beschränkung auf die adjustierten Schlusskurse
AAPL <- AAPL$AAPL.Adjusted
# Namensänderung auf price
names(AAPL)[1] <- "price"
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221166 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Kurzer Blick auf die ersten und letzten 6 Datenpunkte
head(AAPL)
price
2007-01-03 2.562706
2007-01-04 2.619588
2007-01-05 2.600933
2007-01-08 2.613777
2007-01-09 2.830903
2007-01-10 2.966379
tail(AAPL)
price
2021-12-22 175.4165
2021-12-23 176.0557
2021-12-27 180.1005
2021-12-28 179.0619
2021-12-29 179.1517
2021-12-30 177.9733
Mit head(AAPL, n = …) kann auch eine andere Anzahl ausgegeben werden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221177 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Zusätzlich zu den Kursen interessieren uns noch die Renditen, auf Basis
derer wir die weiteren Analysen durchführen werden.
Wir können sowohl die diskrete als auch die stetige Rendite berechnen:
|           | :     |        |          |      | :        |        |     |
| --------- | ----- | ------ | -------- | ---- | -------- | ------ | --- |
| W         | = 4   | − 1    | W        | = ln | 4 = ln	\ | − ln	\ |     |
| 5,)#67895 |       |        | 5,6595#; |      |          | 5      | 54! |
|           | : 456 |        |          |      | : 456    |        |     |
mit W  als der diskreten Rendite und  W  als der stetigen Rendite,
| 5,)#67895 |     |     |     | 5,6595#; |     |     |     |
| --------- | --- | --- | --- | -------- | --- | --- | --- |
sowie dem Aktienkurs \  zum Zeitpunkt K.
5
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  221188 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Zumeist finden stetige (logarithmierte) Renditen Verwendung. Die lassen sich
einfach über die Differenz des Logarithmus berechnen.
AAPL$return <- log(AAPL$price) %>% diff()
# A l t e r n a t i v e : AAPL$return <- diff(log(AAPL$price))
head(AAPL)
price return
2007-01-03 2.562706 NA
2007-01-04 2.619588 0.021953322
2007-01-05 2.600933 -0.007146827
2007-01-08 2.613777 0.004926075
2007-01-09 2.830903 0.079799440
2007-01-10 2.966379 0.046746275
Für den ersten Zeitpunkt gibt es keinen Vortag, daher wird dieser Wert
automatisch automatisch gleich NA (Not Available) gesetzt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 221199 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Für die Grafiken benötigen wir folgende Pakete.1
library(ggformula)
library(gridExtra)
l i b r a r y ( g g f o r t ify)
Vor der grafischen Darstellung mittels der bekannten mosaic-Befehle werden
die Zeitreihen in ein data.frame umgewandelt/abgespeichert.
# Als data.frame abspeichern und zusätzlich Variable date anlegen
AAPLdf <- as.data.frame(AAPL)
AAPLdf$date <- as.Date(row.names(AAPLdf))
# für price und return jeweils eine Grafik erzeugen
p1 <- gf_line(price ~ date, data = AAPLdf)
p2 <- gf_line(return ~ date, data = AAPLdf)
# untereinander anordnen
grid.arrange(p1, p2, ncol = 1)
1Ggf. sind sie noch über install.packages(“xxx", dependencies = TRUE) zu installieren.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222200 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Falls sie das Paket ggfortify installiert haben, gibt es eine Alternative:
# für price und return jeweils eine Grafik erzeugen
p1 <- autoplot(price data = AAPL)
p2 <- autoplot(return, data = AAPL)
# untereinander anordnen
grid.arrange(p1, p2, ncol = 1)
oder
# für price und return jeweils eine Grafik erzeugen
p1 <- autoplot(AAPL$price)
p2 <- autoplot(AAPL$return)
# untereinander anordnen
grid.arrange(p1, p2, ncol = 1)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222211 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222222 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Deskriptive Kennzahlen
§ Im nächsten Schritt analysieren wir verschiedene deskriptive Kennzahlen der
Kursveränderungen (Renditen) der Apple-Aktien.
§ Vorab speichern wir diese als „normales“ Zeitreihenobjekt (ts) und entfernen die
fehlenden Werte (damit die Kennzahlen berechnet werden können.
AAPL.return <- as.ts(na.omit(AAPL$return))
median(AAPL.return)
[1] 0.001117578
mmeeaann((AAAAPPLL..rreettuurrnn))
[1] 0.00112333
ssdd((AAAAPPLL..rreettuurrnn))
[1] 0.02026788
vvaarr((AAAAPPLL..rreettuurrnn))
[1] 0.000410787
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222233 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Deskriptive Kennzahlen
Alternativ dazu kann z. B. der Befehl favstats aus dem Paket mosaic
verwendet werden:
library(mosaic) # falls noch nicht erfolgt
favstats(AAPL.return)
min Q1 median Q3 max mean
-0.1974696 -0.00780183 0.001117578 0.01154456 0.1301941 0.00112333
sd n missing
0.02026788 3775 0
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222244 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übung: Analyse von Aktienkursen
Histogramm und Dichteschätzung
p1 <- gf_histogram(~ AAPL.return)
p2 <- gf_dens(~ AAPL.return)
grid.arrange(p1, p2, nrow = 1)
# Alternativ in einem Plot
gf_dhistogram(~ AAPL.return) %>% gf_dens(col = "blue")
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222255 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 4.5
Explorative Datenanalyse
Zusammenfassung
V26-10-25
Analyse von Finanzdaten & Data Science / CS / Folie 226 © 2026 – Hochschule der Bayerischen Wirtschaft

Explorative Datenanalyse
Visualisierung - Tipps
§ Vermittle viele Zahlen, sonst brauchst du keine Grafik.
§ Vermeide Ablenkung von der Hauptbotschaft.
§ Fördere visuellen Vergleich.
§ Unterschiedliche Farben nur, wenn es den Vergleich unterstützt.
§ Vermeide 3D.
§ Achte auf die Achsenskalierung.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222277 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Grafische Verfahren der Datenanalyse
§ Säulendiagramm / Balkendiagramm: Häufigkeit von Merkmalsausprägungen
(nominal, ordinal, metrisch diskret) – gf_bar(), gf_barh()
§ Histogramm: Häufigkeit von gruppierten Merkmalsausprägungen
(metrisch) – gf_histogram()
§ Boxplot: Visualisierung von Median, oberem und unterem Quartil, Minimum und
Maximum, Ausreißern (metrisch) – gf_boxplot()
§ Violinplot: Visualisierung der Dichtefunktion der Verteilung (metrisch) –
gf_violin()
§ Streudiagramm / Scatterplot: Darstellung der Merkmalsausprägungen von zwei i.
d. R. metrischen Merkmalen 1 als Punkte – gf_point()
§ Mosaikplot: Darstellung der Merkmalsausprägungen zweier nominaler Merkmale
– mosaicplot()
§ Liniendiagramm: Verlauf der Merkmalsausprägung eines Merkmals – gf_line()
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222288 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Explorative Datenanalyse
Übersicht deskriptive Kennzahlen
§ favstats(): Zusammenfassung Kennzahlen numerischer Variablen.
§ Einzeln, z. B. mit:
• mean(): Mittelwert (metrisch),
• median(): Median (ordinal, metrisch),
• iqr(): Interquartilsabstand ((ordinal), metrisch),
• sd(): Standardabweichung (metrisch).
§ cor(): Korrelationskoeffizient (zwei metrische Merkmale)
Für ordinale Merkmale: Rangkorrelation method = "spearman".
§ prop(): Anteile (nominal, ordinal, metrisch diskret – relative
Häufigkeiten einer Ausprägung).
§ tally(): (Kreuz-) tabellierung (nominal, ordinal, metrisch diskret –
absolute oder relative Häufigkeiten aller Ausprägungen).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 222299 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt