Analyse von Finanzdaten & Data Science
Modul
Analyse von Finanzdaten & Data Science
Prof. Dr. Christian Schmitt
V26-10-07
Analyse von Finanzdaten & Data Science / CS / Folie 1 © 2026 – Hochschule der Bayerischen Wirtschaft

Analyse von Finanzdaten & Data Science
Organisatorisches
V26-10-07
Analyse von Finanzdaten & Data Science / CS / Folie 2 © 2026 – Hochschule der Bayerischen Wirtschaft

Einordnung im Rahmen des Schwerpunktes
Finance & Risk Management
§ 3. Semester
Finanzinstrumente und
Risikomanagement
§ 4. Semester
Asset Management Behavioral Finance
§ 5. Semester
Analyse von Finanzdaten Corporate Financial
und Data Science Management
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 33 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Modulziele
Die Studierenden können nach erfolgreichem Abschluss des Moduls:
§ die Grundlagen und Grundbegriffe quantitativer Datenanalyse
beschreiben,
§ Methoden der deskriptiven und induktiven Statistik auswählen und
anwenden,
§ die Ergebnisse statistischer Methoden interpretieren,
§ Datensätze für (finanz-)ökonometrische Untersuchungen aufbereiten und
transformieren,
§ Regressionsanalysen durchführen, diagnostizieren und den
Regressionsoutput interpretieren,
§ eine empirisch quantitative wissenschaftliche Arbeit durchführen und
verfassen, insbes. auch in Vorbereitung auf eine empirische
Bachelorarbeit mit Finanzdaten,
§ die Statistik-Software R zur Datenanalyse (von Finanzdaten) verwenden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 44 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Bedeutung von Data Science (I)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 55 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Bedeutung von Data Science (II)
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 66 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Spielregeln:
Hausarbeit
| Lehrmethoden: | SWS |     |
| ------------- | --- | --- |
§ Analyse eines Datensatzes von
| Präsenz | 52  | Finanzdaten |
| ------- | --- | ----------- |
§ Umfang ca. 1.500-2.500 Wörter
| Selbststudium | 80  |     |
| ------------- | --- | --- |
Präsentation
§ Dauer 15 Minuten
Leistungsbewertung
| Hausarbeit (Datenanalyse) | 75% |     |
| ------------------------- | --- | --- |
Hausarbeit und Präsentation gehen im
| Präsentation | 25% |     |
| ------------ | --- | --- |
Verhältnis 75:25 in die Modulnote ein
Beide Prüfungs-(Teil-)leistungen
müssen mit mindestens 4,0 bewertet
werden.
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  77 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Agenda
1. Einführung
2. Grundlagen quantitativer Datenanalyse
3. Einführung in R
4. Explorative Datenanalyse
5. Die Normalverteilung
6. Lineare Regression
7. Regressionsdiagnostik
8. Die Hausarbeit
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 88 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Literaturempfehlungen
§ Gehrke, M. (2022): Angewandte
empirische Methoden in Finance &
Accounting – Umsetzung mit R
§ Sauer, S. (2019): Moderne Datenanalyse
mit R – Daten einlesen, aufbereiten,
visualisieren und kommunizieren.
§ Wickham, H. & Grolemund, G. (2023):
R for Data Science,
https://r4ds.had.co.nz/
§ Wickham, H. & Grolemund, G. (2017):
R für Data Science (deutsche
Übersetzung)
§ Ismay, C. / Kim, A. (2017): ModernDive
– An Introduction to Statistical and Data
Sciences via R, http://moderndive.com/
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 99 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Finanzdaten & Data Science
Kapitel 1
Einführung
V26-10-07
Analyse von Finanzdaten & Data Science / CS / Folie 10 © 2026 – Hochschule der Bayerischen Wirtschaft

Agenda
1. Einführung
2. Grundlagen quantitativer Datenanalyse
3. Einführung in R
4. Explorative Datenanalyse
5. Die Normalverteilung
6. Hypothesentests
7. Lineare Regression
8. Die Hausarbeit
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1111 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Ihr Erinnerungsvermögen
Was glauben Sie:
Wann können Sie sich besser an Wörter erinnern, die Sie sich vorher
einprägen mussten?
a) Nachdem ich ein Nickerchen gemacht habe.
b) Nachdem ich eine Koffeintablette genommen habe.
c) Egal.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1122 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Ihr Erinnerungsvermögen
Was glauben Sie:
Wann können Sie sich besser an Wörter erinnern, die Sie sich vorher
einprägen mussten?
a) Nachdem ich ein Nickerchen gemacht habe.
b) Nachdem ich eine Koffeintablette genommen habe.
c) Egal.
Was für Sie gilt, kann Ihr Dozent nicht wissen. Die Wissenschaft kann aber
versuchen herauszufinden, welche Zusammenhänge allgemein
(z. B. im Durchschnitt) gelten. Systematische Daten sind dafür besser als
einzelne Anekdoten.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1133 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Erinnerungsvermögen im allgemeinen
Was glauben Sie:
Wann kann Mensch sich besser an Wörter erinnern, die Mensch sich vorher
einprägen musste?
a) Nach einem Nickerchen.
b) Nach einer Koffeintablette.
c) Egal.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1144 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Erinnerungsvermögen im allgemeinen
Was glauben Sie:
Wann kann Mensch sich besser an Wörter erinnern, die Mensch sich vorher
einprägen musste?
a) Nach einem Nickerchen.
b) Nach einer Koffeintablette.
c) Egal.
Zur Beantwortung einer Forschungsfrage immer zuerst die Literatur recherchieren!
Mednick, S. C., Cai, D. J., Kanady, J., & Drummond, S. P. (2008). Comparing the
benefits of caffeine, naps and placebo on verbal, motor and perceptual memory.
Behavioural Brain Research, 193(1), 79-86
sagen z. B. Nickerchen (a)).
In diesem Modul lernen Sie u.a. den Prozess kennen, der von der Forschungsfrage zur
vorläufigen Antwort führt. Dabei geht es neben der Datenerhebung auch um die
Datenanalyse.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1155 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Worterinnerung nach „Behandlung“
Die Daten der Studie sind wie folgt:
20
15
10
5
Koffein Schlaf
Behandlung
Welche Aussage ist korrekt?
a) Die Analyse beweist, dass Schlaf vorteilhaft gegenüber Koffeintabletten ist.
b) Das hier Schlaf besser ist als Koffein ist reiner Zufall, in Wirklichkeit ist
Koffeinbesser.
c) Kann nicht endgültig entschieden werden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1166 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
retröW
etrennirE
Im Mittelwert konnten diejenigen mit
der Koffeintablette 12.25 Wörter
erinnern, die mit dem Schlaf 15.25,
d. h. im Mittelwert konnte die
Schlafgruppe 3 Wörter mehr
erinnern.

Lösung Übung:
Worterinnerung nach „Behandlung“
Im Mittelwert konnten diejenigen mit der Koffeintablette 12.25 Wörter erinnern, die mit
dem Schlaf 15.25, d. h. im Mittelwert konnte die Schlafgruppe 3 Wörter mehr erinnern.
Welche Aussage ist korrekt?
a) Die Analyse beweist, dass Schlaf vorteilhaft gegenüber Koffeintabletten ist.
b) Das hier Schlaf besser ist als Koffein ist reiner Zufall, in Wirklichkeit ist
Koffeinbesser.
c) Kann nicht endgültig entschieden werden.
► In der Wissenschaft werden Aussagen kritisch überprüft, auch sind Aussagen
immer vorläufig und nicht endgültig, daher c).
► Solange nicht versucht wurde, eine Aussage zu widerlegen, kann sie keinesfalls
als belegt gelten.
► Wir können aber z. B. überprüfen, welche Unterschiede zufällig vorkommen
würden, wenn es keinen Unterschied geben würde (Modellannahme).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1177 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Vergleich Daten und Modell
Im Modell vorhergesagte Differenzen − wenn es keinen Unterschied
gibt
2500
2000
1500
1000
500
0
-6 -3 0 3 6
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1188 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
nenoitalumiS
lhaznA
Empirischer
Wert
Differenz Mittelwert erinnerte Wörter

Übung:
Daten und Modell
Der Anteil der Simulationen, in denen es zufällig einen Unterschied von mindestens
drei erinnerten Wörtern im Mittelwert gibt, liegt bei 0.0474.
Was stimmt Ihrer Meinung nach?
a) Der beobachtete Unterschied von 3 Wörtern ist eher selten, wenn es gar keinen
Unterschied geben würde.
b) Es liegt ein Fehler vor:
Wenn es keinen Unterschied gibt, dürften wir auch keinen beobachten.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 1199 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Daten und Modell
Der Anteil der Simulationen, in denen es zufällig einen Unterschied von mindestens
drei erinnerten Wörtern im Mittelwert gibt, liegt bei 0.0474.
Was stimmt Ihrer Meinung nach?
a) Der beobachtete Unterschied von 3 Wörtern ist eher selten, wenn es gar keinen
Unterschied geben würde.
b) Es liegt ein Fehler vor:
Wenn es keinen Unterschied gibt, dürften wir auch keinen beobachten.
§ Auch wenn es keinen Unterschied gibt, kann es zufällig vorkommen, dass wir
einen Unterschied sehen. Aber wenn es keinen Unterschied geben sollte, dann ist
das Ergebnis dieser Stichprobe eher ungewöhnlich (a)) – aber natürlich kein
Beweis dafür, dass es einen gibt!
§ In diesem Modul lernen Sie, wie Sie Daten erheben können, welche Aussagen
damit möglich sind, wie Sie Daten auswerten können und wie Sie Modelle mit und
über Daten erstellen können.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2200 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Einordnung des Beispiels
§ Wie sind Sie zu Ihrer ursprünglichen Einschätzung gekommen?
Vielleicht u. a. auf Basis von Erfahrungen und (Vor-) Wissen.
§ Wie ordnen Sie die Erkenntnisse der Studie ein?
Vielleicht verwerfen Sie diese1, vielleicht bestätigt die Studie Ihre
Einschätzung, vielleicht revidieren Sie Ihre Einschätzung.
Auch wenn der Fokus dieses Moduls die Methoden sind:
Literaturrecherche ist zwingend erforderlich, damit Sie ein Bild über den
aktuellen Stand der Forschung, aber auch über das methodische Vorgehen
anderer erhalten.
1 Fake News
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2211 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt