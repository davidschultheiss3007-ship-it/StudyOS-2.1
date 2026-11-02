Analyse von Finanzdaten & Data Science
Kapitel 3
Einführung in R
V26-10-07
Analyse von Finanzdaten & Data Science / CS / Folie 67 © 2026 – Hochschule der Bayerischen Wirtschaft

Agenda
1. Einführung
2. Grundlagen quantitativer Datenanalyse
3. Einführung in R
4. Explorative Datenanalyse
5. Die Normalverteilung
6. Hypothesentests
7. Lineare Regression
8. Die Hausarbeit
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6688 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Warum R?
§ Verbreitung z. B.: http://r4stats.com/articles/popularity/
§ R ist eine weit verbreitete Eintrittskarte in das globale Datenzeitalter!
Vorteile von R
§ Methoden- und Anwendungsvielfalt (Finance, Marketing, HR, Psychologie,...)
§ Neue Methoden der Datenanalyse werden häufig in R entwickelt (auch Big Data,
KI, etc.)
§ Frei und Offen; Kostenlos
§ Schnittstellen zu sehr vielen Datenquellen / -banken (auch SocialMedia etc.)
§ Unzählige Nutzer*innen weltweit in Unternehmen und Wissenschaft
§ Möglichkeiten für Reporting, Apps, etc.
§ Numerische Stabilität / Genauigkeit
§ Große Entwickler*innen Gemeinde mit langer Geschichte (seit 1993);
R Konsortium, u. a. IBM, Microsoft, Oracle, Google,...
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6699 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
R und seine Gefährten
§ R https://www.r-project.org/ ist das Basisprogramm.
§ RStudio Desktop https://posit.co/products/open-source/rstudio/
ist eine komfortable Entwicklungsumgebung für R und bietet
zusätzliche Tools, wie z. B. Dokumentenerstellung etc.
§ mosaic https://cran.r-project.org/web/packages/mosaic/ ist ein
Zusatzpaket, welches u. a. eine vereinheitlichte R Syntax bietet.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7700 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Zusammenarbeit
Statistik, R, RStudio und mosaic
§ Das Auto (Statistik) sollten wir fahren R: der Motor
können, um den Weg von der
Forschungsfrage zur vorläufigen Antwort
zu bringen.
§ R, der Motor, treibt das Auto an und hilft
uns dabei – um diesen müssen wir uns
eigentlich nicht kümmern.
§ Das Cockpit, (RStudio Desktop) steuert
RStudio: das Cockpit
unseren Motor – das sollten wir bedienen
können!
§ Die Zusatzausstattung (Paket mosaic)
ebenso, da es uns die Motorsteuerung
vereinfacht und so schneller an unser
erstes Ziel bringt.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7711 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

RStudio
Ansicht
Die Umgebung ist wie die Küchenzeile. Man
kann hier Zutaten (Daten) und fertige Gerichte
(Modell-Ausgaben) zur Nutzung während des
Kochens abstellen.
Skripte sind Rezepte – Es ist eine Liste von
Anweisungen, wie Dinge zu tun sind! Schreiben und
Speichern Sie ihre Rezepte hier, sodass R weiß was zu
kochen ist.
Pakete sind wie
Dateien sind wie
Werkzeuge. Wenn sie
Zutaten in Ihrem
keinen Kochtopf haben,
Schrank – Sie müssen
kaufen Sie sich einen –
sie aus der Küchenzeile
Die Konsole ist der Herd, an dem gekocht wird. install.packages().
herausholen, um sie
Schicken Sie die Rezepte hier hin (Run Code), Jedes Mal wenn Sie
benutzen zu können.
um sie zu kochen! dann einen Kochtopf
Die benötigten Dateien
Sie können hier auch ohne Rezepte kochen, aber nutzen möchten, holen
können im Rezept
Sie werden beim erneuten Kochen Probleme haben, Sie ihn aus dem
angegeben werden.
das Gericht nachzukochen, sodass es Schrank – library().
empfehlenswerter ist ein Rezept (Skript) zu nutzen.
1 Idee von und in Anlehnung an Jessica Ward https://twitter.com/RLadiesNCL/status/1138812826917724160, abgerufen am 14. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7722 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Pakete I
Pakete ermöglichen Zusatzfunktionen in R
§ Pakete liefern einen erweiterten Funktions- und Befehlsumfang,
um leichter (mosaic) mit R zu arbeiten oder um spezifische
Analysen und Anwendungen bereit zu stellen (dplyr)
§ Benötigt wird (erstmal) nur ein Paket: mosaic (in diesem sind viele
Pakete integriert (z.B. dplyr, muss also nicht extra installiert und
geladen werden)).
§ Standard R Befehle können immer angewandt werden. Um
spezifische Paketbefehle nutzen zu können müssen Pakete
immer(!) geladen werden – Sind Pakete geladen oder aktiviert, so
kann R auf die hinterlegten Befehle zugreifen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7733 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Pakete II
Installieren
Pakete installieren
§ Für die Veranstaltung werden wir u.a. das Zusatzpaket ("package") “mosaic"
verwenden. Installieren Sie dieses, in dem Sie in der R-Console den Befehl
install.packages("mosaic", dependencies = TRUE)
eingeben und jeweils `Enter` oder `Return` drücken. Sie brauchen dafür eine
Internetverbindung. Es werden noch weitere, abhängige Zusatzpakete installiert,
der Vorgang kann also evtl. eine Weile dauern.
§ Die Installation von Zusatzpaketen muss nur einmal erfolgen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7744 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Pakete III
Laden
Pakete laden (aktivieren)
§ Die Verwendung der Zusatzpakete hingegen muss bei jeder Sitzung neu geladen/
gestartet werden. Dazu muss jedes Paket mit dem Befehl library() gestartet
werden.
library(mosaic)
Die angegebenen Meldungen sind nur Hinweise, keine Fehler!
Registered S3 method overwritten by 'mosaic':
method from
fortify.SpatialPolygonsDataFrame ggplot2
The 'mosaic' package masks several functions from core packages in order to add
additional features. The original behavior of these functions should not be affected by this.
Attache Paket: ‘mosaic’
Die folgenden Objekte sind maskiert von ‘package:dplyr’:
count, do, tally
[…]
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7755 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

mosaic
Der Grundbefehl
§ Mosaic wurde für Sie als R-Studenten entwickelt
§ Es gibt einen einzigen (!) Code mit wenigen Variationen
Befehl_was_mag_ich_machen( abhVar ~ unabhVar | Bedingung, data = meineDaten)
§ Eine Bedingung ermöglicht z.B. eine Gruppierung
analysiere(y ~ x | z, Optionen, data = meine_daten)
analysiere(y # abhängige Variable
~ x # unabhängige Variable(n)
| z, # ggf. bedingende (gruppierende) Variable(n)
Optionen, # ggf. weitere Optionen
data = meine_daten) # Datensatz
Hinweis: unter macOS: ~: opt+n |: opt+7
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7766 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Zentrale Fragen
1. Was soll der Computer für mich tun?
2. Was muss der Computer dafür wissen?
meine.analyse(mein.y ~ mein.x, data = meine.daten)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7777 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Grafiken
Bei Graphiken ist
Ø y = y-Achse (abhängige Variable)
Ø x = x-Achse (unabhängige Variable)
Ø z = Bedingungsvariable
y ~ x | z („ y wird modelliert von (oder hängt ab von) x | gruppiert nach den
Stufen von z“)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7788 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Überblick
Quelle: Wickham / Grolemund (2018), S. ix
§ Siehe hierzu und den nachfolgenden Folien auch
https://r4ds.had.co.nz/introduction.html
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 7799 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Import: Daten einlesen
Sind die Dateien z.B. im Verzeichnis
C:/Ordner/weitere Unterordner/Vorlesung abgespeichert
muss R wissen, wo sich die Dateien befinden.
Mit
setwd(“/Users/ihrname/Ordner/Unterordner…/Vorlesung“) (Mac)
s etwd(“C:/Ordner/Unterordner…/Vorlesung“) (Windows)
wird das Arbeitsverzeichnis festgelegt.
Wichtig: Der Pfad muss mit / (slash) geschrieben werden und in “ “ stehen!
Mit
getwd()
können Sie sich das aktuelle Arbeitsverzeichnis anzeigen lassen, z.B.
[1] "/Users/christianschmitt/Desktop/10 HDBW/13 Financial Data Science/Work-R "
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8800 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Import: Daten einlesen
Einlesen von Dateien
data <- read.csv(„meineDatentabelle.csv“)
data <- read.csv2(„meineDatentabelle.csv“)
§ Mit data <- wird der Inhalt der Datei der Tabelle „data“ zugeordnet. Die Daten
können nun aufgerufen, bearbeitet und analysiert werden.
WICHTIG:
§ read.csv() liest Daten mit Dezimalpunkt ein (englische/amerikanischer
Zahlenformat
§ read.csv2() liest Daten mit Dezimalkomma ein (deutschsprachiges
Zahlenformat)
§ Lesen Sie ein Dezimalpunkt mit read.csv2() ein, so werden die Daten nicht
richtig eingelesen und umgekehrt!
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8811 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Tidy: Daten bereinigen
tidy data bedeutet, dass Ihre Daten nach einer anerkannten, gebräuchlichen und
einheitlichen Form auf- bzw. vorbereitet sind – der einheitlichen Form eines
Datensatzes.
Datensatz
(Normalform)
§ tidy data bedeutet, dass
jede Spalte eine Variable enthält und
|     | Name | Geschlecht | Größe |
| --- | ---- | ---------- | ----- |
jede Zeile eine Beobachtung.
| § Jede Spalte hat einen „Spalten-“ bzw.  | Adalbert | M   | 180 |
| ---------------------------------------- | -------- | --- | --- |
| „Variablennamen“                         | Gabi     | W   | 170 |
in Zeilen:
Beobachtungen
|     | Max | M   | 162 |
| --- | --- | --- | --- |
§ Jede Zeile gehört einer Beobachtung,
|     | Susi | W   | 174 |
| --- | ---- | --- | --- |
welche meist durch Eine Art „ID“
Wert /
| zuordenbar ist.  |     | in Spalten: |     |
| ---------------- | --- | ----------- | --- |
Ausprägung
| § Entsprechen die Daten nicht dieser  | Merkmal / Variable |     |     |
| ------------------------------------- | ------------------ | --- | --- |
Form, so sollte die Datentabelle in diese
Form gebracht werden!
§ Sind die Daten tidy, so werden diese im
nächsten Schritt transformiert.
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  8822 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Schritte der Datenanalyse
Transform: Daten transformieren
Ziel der Transformation ist es, die Variablen zu erzeugen/
zusammenzufassen o.ä., welche ggf. (zusätzlich) zur Analyse benötigt
werden und notwendig sind.
§ Einschränken auf die Daten, die von Interesse sind, z.B.
– alle Beobachtungen einer Stadt
– Aktienkurse in einem bestimmten Zeitraum
§ Erzeugen neuer Variablen, z.B.
– Tempoberechnung aus Distanz und Zeit
– Renditen aus dem aktuellen Aktienkurs und dem der Vorperiode
§ Berechnung von statistischen Parametern (Überblick), z.B.
– Mittelwerte oder Anzahlen
– Volatilitäten oder Korrelationen
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8833 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Visualize: Daten visualisieren
Die Visualisierung der Daten ermöglicht es ungeahnte Strukturen und
Muster in den Daten „sichtbar“ zu machen.
§ Ungeahnte Strukturen oder auffällige Muster in den Daten werfen neue
Fragen hinsichtlich der Daten auf oder zeigen, dass ggf. weitere Daten
notwendig sind.
§ Der Zyklus zwischen Visualisierung und Modellierung kann sich
einige Male wiederholen....
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8844 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Model: Daten modellieren
Die Modellierung der Daten ist die Ergänzung der Visualisierung der
Daten
§ Ist die Frage ausreichend präzise gestellt, so kann diese mittels
Modellierung beantwortet werden.
§ Modellierungen sind grundlegende mathematische oder rechnergestützte
Möglichkeiten im Bereich der Datenanalyse
§ Ein Modell ist somit ein Werkzeug zur Hypothesenprüfung, welche nach
der Modellierung/Analyse angenommen oder verworfen wird.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8855 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Schritte der Datenanalyse
Communicate: Ergebnisse mitteilen / publizieren
Eine Kommunikation der Daten ist essentiell, auch wenn sich ein
anderes Ergebnis (kein Ergebnis) einstellte, als mensch gedacht oder
erhofft hatte.
§ Die adäquate und zielgerichtete Publikation der Daten, kann nur dann
erfolgen, wenn man seine Daten gut kennt und versteht !!
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8866 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Beispiel: Datensatz Alcohol
Ggf. einmalig vorab mosaic installieren:
install.packages("mosaic")
Paket mosaic in jeder Sitzung laden:
library(mosaic)
Internen Datensatz Alcohol laden:
data(Alcohol)
Datensatzbeschreibung (Hilfe zu den Daten):
?Alcohol
Daten betrachten:
View(Alcohol)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8877 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Beispiel: Datensatz Alcohol
Daten betrachten:
View(Alcohol)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8888 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Datenvorverarbeitung
§ Häufig müssen Daten vor der eigentlichen Analyse vorverarbeitet werden,
z. B.:
– Variablen auswählen: select()
– Beobachtungen auswählen: filter()
– Variablen verändern, neu erzeugen: mutate()
– ...
1 wird mit mosaic installiert und geladen. http://dplyr.tidyverse.org/index.html
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 8899 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
filter() wählt Beobachtungen aus
Alcohol.Ger soll das Ergebnis sein von:
§ Nimm den Datensatz Alcohol und dann...
§ filtere auf die Beobachtungen, in denen das Land Deutschland ist.
Alcohol.Ger <- Alcohol %>%
filter(country == "Germany")
View(Alcohol.Ger)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9900 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
select() wählt Variablen aus
Alcohol.2008 soll das Ergebnis sein von:
§ Nimm den Datensatz Alcohol und dann...
§ filtere auf die Beobachtungen, in denen das Jahr 2008 ist und dann...
§ selektiere die Variablen Land und Alkohol.
Alcohol.2008 <- Alcohol %>%
filter(year == 2008) %>%
select(country, alcohol)
View(Alcohol.2008)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9911 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
arrange() sortiert Beobachtungen
Alcohol.2008.sort soll das Ergebnis sein von:
§ Nimm den Datensatz Alcohol.2008 und dann...
§ sortiere nach der Variable Alkohol.
Alcohol.2008.sort <- Alcohol.2008 %>%
arrange(alcohol)
View(Alcohol.2008.sort)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9922 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
mutate() verändert bzw. erzeugt Variablen
Alcohol.2008.rank soll das Ergebnis sein von:
§ Nimm den Datensatz Alcohol.2008 und dann...
§ erzeuge neue Variable rank als Rang der Beobachtung in der Variable
Alkohol.
Alcohol.2008.rang <- Alcohol.2008 %>%
mutate(rang = rank(alcohol))
View(Alcohol.2008.rang)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9933 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Übung: Rangliste
Alcohol.2008.rang %>%
filter(country == "Germany")
country alcohol rang
1 Germany 12.14 160
Ist Deutschland in der Stichprobe in dem Jahr das Land mit dem 160. in der
Rangfolge geringsten oder höchsten Alkoholkonsum?
a. Geringsten.
b. Höchsten.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9944 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Lösung Übung: Rangliste
Alcohol.2008.rang %>%
filter(country == "Germany")
country alcohol rang
1 Germany 12.14 160
Ist Deutschland in der Stichprobe in dem Jahr das Land mit dem 160. in der
Rangfolge geringsten oder höchsten Alkoholkonsum?
a. Geringsten.
b. Höchsten.
Die Ränge werden aufsteigend gebildet, d. h. a. Das Land mit Rang 1 hat
dem geringsten Alkoholkonsum.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9955 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Variablentypen in R
Struktur des Datensatzes Alcohol:
Alcohol.2008.rang %>%
filter(country == "Germany")
'data.frame': 411 obs. of 3 variables:
$ country: chr "Russia" "Russia" "Russia" "Russia" ...
$ year : int 1985 1986 1987 1988 1989 1990 1990 1990 1990 1991 ...
$ alcohol: num 13.3 10.8 11 11.6 12 ...
§ Ein Datensatz (data.frame) kann aus mehreren Variablen (Spalten) mit
gleicher Anzahl Beobachtungen (Zeilen) bestehen. Für Variablen gibt es
verschiedene Typen, u. a.:
§ Zeichenketten (character) und Faktoren (factor)1.
§ Gleitkommazahlen (numeric bzw. double) und Ganze Zahlen (integer).
1 Faktoren sind Zeichenketten, die eine definierte Menge an Werten (Ausprägungen, levels) annehmen können.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9966 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Übung: Variablentyp
Als welcher Variablentyp sollten kategorial-nominale Variablen in R
gespeichert werden?
a) character bzw. factor.
b) integer.
c) numeric bzw. double.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9977 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Lösung Übung: Variablentyp
Als welcher Variablentyp sollten kategorial-nominale Variablen in R
gespeichert werden?
a) character bzw. factor.
b) integer.
c) numeric bzw. double.
a) integer wird für ganze Zahlen, d. h. häufig numerisch diskrete
und numeric für numerisch quasi-stetige Variablen verwendet.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9988 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
R im Studium
§ Daten und deren Analyse sind zentraler Bestandteil
wissenschaftlichen Arbeitens.
§ Jede wissenschaftliche Arbeit sollte mind. eine Methode haben. In
den zahlreichen Studiengängen sind dies häufig empirische
Methoden – je nach Forschungsfrage qualitativ oder quantitativ.
§ Zur Analyse von Daten sollte auf geeignete Software
zurückgegriffen werden. Dabei ist die Software das Werkzeug, um
die inhaltliche Arbeit (die Analyse) erledigen zu können.
§ Es geht nicht primär darum, dass Sie R-Programmierung lernen,
sondern dass Sie die Daten (mit Hilfe von R) analysieren
können.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 9999 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
R Basics
§ R unterscheidet zwischen Groß- und Kleinbuchstaben
§ R verwendet den Punkt . als Dezimaltrennzeichen
§ Fehlende Werte werden in R durch NA kodiert
§ Kommentare werden mit dem Rautezeichen # eingeleitet
§ Eine Ergebniszuweisung erfolgt über <-
§ %>% (Paket dplyr 1) übergibt Ergebnisse. (Pipe-Operator)
§ Hilfe zur Funktion gf_bar:?gf_bar
1 wird von mosaic automatisch geladen
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110000 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einführung in R
Fehlermeldungen
§ Die häufigste Ursache von Fehlermeldungen sind Tippfehler.
– Genaues Lesen und googeln der Fehlermeldung helfen.
§ Gerne vergisst man, die benötigten Pakete und Daten zu laden.
§ R schreibt sowohl Hinweise, als auch Warnungen und Fehler (Error) in rot. Aber
nur Fehler sind i. d. R. ein Problem, Hinweise nicht.
§ Gibt R beim Laden eines Paketes (library(XXX)) den Fehler aus, dass ein
Paket fehlt (Fehler in library(XXX): es gibt kein Paket namens
'XXX'), so muss man das genannte Paket noch installieren
(install.packages("XXX"))1
§ Steht am Beginn einer Zeile in der Konsole ein +, so ist der vorherige Befehl noch
nicht abgeschlossen.
§ Reagiert R nicht, so kann es daran liegen, dass der aktuelle Befehl in der Konsole
noch nicht abgeschlossen ist. à Ein einfacher Ausweg ist, in die Konsole zu
klicken und dann die Escape-Taste (Esc) zu drücken. à Damit wird die aktuelle
Befehlszeile in der Konsole abgebrochen.
§ In RStudio kann über die Tabulatortaste (Tab) vervollständigt werden, über die
Pfeiltasten können in der Konsole vorherige Befehle wiederholt werden.
1 Am Besten gleich am Beginn einer R-Session.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 110011 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt