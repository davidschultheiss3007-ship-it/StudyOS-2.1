Analyse von Finanzdaten & Data Science
Kapitel 2
Grundlagen quantitativer Datenanalyse
V26-10-07
Analyse von Finanzdaten & Data Science / CS / Folie 22 © 2026 – Hochschule der Bayerischen Wirtschaft

Agenda
1. Einführung
2. Grundlagen quantitativer Datenanalyse
3. Einführung in R
4. Explorative Datenanalyse
5. Die Normalverteilung
6. Hypothesentests
7. Lineare Regression
8. Die Hausarbeit
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2233 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Messen
§ Beim Messen wird einer Eigenschaft eines Objektes ein Wert
zugewiesen. Dabei sollte die Beziehung der Werte der Beziehung der
Eigenschaften der Objekte entsprechen.
Pragmatisch: Definition des zu Messenden und gleichzeitig Beschreibung
des Messvorgangs.1
§ Manifeste Variablen können direkt gemessen werden, z. B. Größe.
§ Latente Variablen können nicht direkt gemessen werden, sie müssen
erst operationalisiert werden, z. B. Intelligenz.
1 Hand, D. J., (Measurement, 2016): Measurement: A Very Short Introduction, Oxford University Press, 2016.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2244 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Messen
Stimmt die Aussage:
Das „Interesse der Studierenden“ ist eine latente Variable?
a) Ja.
b) Nein.
Offene Frage: Was folgt daraus?
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2255 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Messen
Stimmt die Aussage:
Das „Interesse der Studierenden“ ist eine latente Variable?
a) Ja.
b) Nein.
Offene Frage: Was folgt daraus?
a) Ja,
… „Interesse der Studierenden“ ist keine offenliegende Eigenschaft. Man
muss erst genau definieren – und Messkriterien festlegen
(Operationalisieren!) –, was man darunter versteht.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2266 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Messung Relation
Am 1.7. war es in München 30 °C warm, am 15.4. 15 °C.
Stimmt die Aussage: Am 1.7. war es in München doppelt so warm wie am
15.4.?
a) Ja.
b) Nein.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2277 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Messung Relation
Am 1.7. war es in München 30 °C warm, am 15.4. 15 °C.
Stimmt die Aussage: Am 1.7. war es in München doppelt so warm wie am
15.4.?
a) Ja.
b) Nein.
b) Nein,
… die gleichen Temperaturen entsprechen in Fahrenheit 59 °F und 86 °F –
keine Verdoppelung. 0° Celsius ist kein absoluter Nullpunkt.
Die Relation der Werte (Temperatur) entspricht nicht der Relation der
Eigenschaft (Wärme).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2288 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Gütekriterien einer Messung
§ Genauigkeit, d. h. Exaktheit einer Messung, z. B. „Umsatz hoch /
niedrig“ oder in Euro.
§ Objektivität, d. h. Messung unabhängig vom Messenden, z. B.
Kreditrating verschiedener Agenturen.
§ Reliabilität, d. h. Zuverlässigkeit einer Messung, z. B. bei
wiederholter / anderer Messung dasselbe Ergebnis bzgl.
Kundenzufriedenheit.
§ Validität, d. h., es wird das gemessen, was gemessen werden
soll, z. B. Unternehmenserfolg oder Bilanz-Kniffe.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 2299 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Messung: Varianz und Verzerrung
Varianz Verzerrung
Hohe Varianz Verzerrung / Bias
der Messergebnisse des Messergebnisses
Geringe Reliabilität Geringe Validität
Beispiel: Umfrage zu
Beispiel: Durchschnittsnote einer
ökologischem Bewusstsein auf
Klausur mit wenigen Teilnehmern
einem Tuner-Treffen
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3300 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Gütekriterien Messung
Welches Kriterium ist verletzt, wenn die Dozentin statt „Interesse der
Studierenden“ „Angst vor der Klausur“ gemessen hat?
a) Genauigkeit.
b) Objektivität.
c) Reliabilität.
d) Validität.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3311 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Gütekriterien Messung
Welches Kriterium ist verletzt, wenn die Dozentin statt „Interesse der
Studierenden“ „Angst vor der Klausur“ gemessen hat?
a) Genauigkeit.
b) Objektivität.
c) Reliabilität.
d) Validität.
Eine Messung ist valide, wenn die erhobenen Werte geeignete
Kennzahlen für die zu untersuchende Fragestellung liefern. Es wird
gemessen, was gemessen werden soll. Hier nicht, also d).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3322 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Kategoriale Skalenniveaus
Kategoriale Skala, qualitativ
§ Nominal: Merkmalsausprägungen können unterschieden werden,
bspw. Geschlecht oder Farben.
§ Ordinal: Merkmalsausprägungen können unterschieden und in eine
Reihenfolge gebracht werden, bspw. Bildungsabschlüsse oder
olympische Medaillen. Die Abstände zwischen den Werten können nicht
direkt verglichen oder interpretiert werden.
Nominal- und Ordinalskalen = diskret, kategorial, qualitativ
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3333 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Numerische / metrische Skalenniveaus
Numerisch / metrische Skala, quantitativ, kardinal
§ Merkmalsausprägungen können unterschieden und in eine Reihenfolge
gebracht werden, die Abstände sind vergleichbar.
§ Intervallskala: Nullpunkt gesetzt, bspw. Zeitrechnung (Jahr 0).
§ Verhältnisskala: (absoluter) Nullpunkt gegeben, bspw. Gewicht.
Weitere Unterscheidung:
§ Stetig: beliebige Zwischenwerte im Intervall sind möglich, bspw. Größe.
§ Diskret: höchstens abzählbar viele Werte sind möglich, bspw. Anzahl
Kinder.
Intervall- und Verhältnisskalen = diskret, stetig, metrisch, quantitativ
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3344 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Ermittlung des Skalenniveaus
Entscheidungsbaum zur Bestimmung des Skalenniveaus
Gibt es eine natürliche
Ordnung bzw. Reihenfolge?
nein ja
Nominalskala Hat die Differenz 1 immer
dieselbe Bedeutung?
nein ja
Gibt es einen natürlichen Nullpunkt,
Ordinalskala
lassen sich Verhältnisse interpretieren?
nein ja
Intervallskala Verhältnisskala
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3355 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Skalenniveau I
Welches Skalenniveau hat die Variable Stundenlohn?
a) Kategorial nominal.
b) Kategorial ordinal.
c) Metrisch stetig.
d) Metrisch diskret.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3366 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Skalenniveau I
Welches Skalenniveau hat die Variable Stundenlohn?
a) Kategorial nominal.
b) Kategorial ordinal.
c) Metrisch stetig.
d) Metrisch diskret.
Metrisch stetig (c)), obwohl die konkrete Auszahlung in der Regel gerundet
auf zwei Nachkommastellen erfolgt („quasi-stetig”).
Da ein absoluter Nullpunkt gegeben ist, ist die Variable verhältnisskaliert.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3377 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Skalenniveau II
Welches Skalenniveau hat die Variable Telefonvorwahl?
§ Kategorial nominal.
§ Kategorial ordinal.
§ Metrisch stetig.
§ Metrisch diskret.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3388 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Skalenniveau II
Welches Skalenniveau hat die Variable Telefonvorwahl?
§ Kategorial nominal.
§ Kategorial ordinal.
§ Metrisch stetig.
§ Metrisch diskret.
a) Kategorial nominal:
Die Telefonvorwahl stellt keine Zahl als solches dar; es werden Zahlen als
Codierung verwendet. Die Interpretation der Telefonvorwahlen als Zahlen, die
dann einen Vergleich zulassen, ist sinnlos (auch wenn man vermuten kann,
dass höhere Telefonvorwahlen als Zahlen eher im Süden zu orten sind).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 3399 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Datensatz
Aufbau eines Datensatzes:
| Name     | Geschlecht | Größe |
| -------- | ---------- | ----- |
| Adalbert | M          | 180   |
| Gabi     | W          | 170   |
| Max      | M          | 162   |
| Susi     | W          | 174   |
§ Zeilen: Beobachtungen – auf welcher Einheit liegen die Daten vor:
Z. B. einzelne Menschen, Unternehmen, Länder. Hier Studierende.
§ Spalten: Variablen – welche Eigenschaften / Merkmale liegen je
Beobachtung vor: Motivation, Umsatz, Lebenserwartung. Hier Geschlecht
(kategorial – nominal), Größe (Numerisch – verhältnisskaliert).
Hinweis: Jede Zeile sollte genau eine Beobachtung beinhalten, jede Spalte
genau eine Variable.
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  4400 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Variation
Idee:
§ Daten = Modell + Rest
Messwerte einer Variable variieren / streuen, u. a.
§ Zufällig,
§ Aufgrund der Messung,
§ Aufgrund der Stichprobe,
§ Systematisch – kann evtl. modelliert werden.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4411 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Analyse von Zusammenhängen
§ Abhängige Variable (AV – endogen, erklärt):
Wert hängt von der / den unabhängige(n) Variable ab („!“).
§ Unabhängige Variable (UV – exogen, erklärend):
Wert hängt von keiner anderen Variable ab („"“).
§ Kovariablen / Störvariablen:
Variablen, deren Wert ebenfalls auf die abhängige Variable einwirkt und /
oder den Zusammenhang zwischen unabhängigen und abhängigen
Variablen beeinflusst („#“).
Hinweis: „" steht in Zusammenhang mit !“ heißt nicht zwangsläufig, dass "
kausal (ursächlich) für ! sein muss!
§ In der Mathematik: ! = & ("). Für ein " genau ein !.
§ In der Statistik / in R: ! ∼ ". Für ein " sind mehrere ! möglich: " wird zur
Modellierung von ! verwendet.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4422 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Zusammenhangsanalyse
Korrelation vs. Kausalität
Unterscheide zwischen Korrelation & Kausalität
§ Zusammenhang zweier Variablen lässt sich mittels Korrelation
mathematisch beschreiben.
§ zeigen zwei Variablen einen Zusammenhang, so variieren diese
systematisch miteinander
§ d.h. die Ausprägung des einen Merkmals gibt in gewissem Maße
Auskunft über die Ausprägung des zweiten Merkmals
Korrelation ohne Kausalität
§ Ergründen Sie auf den folgenden Folien anhand der „spurious
correlations“ den Unterschied zwischen Korrelation & Kausalität und ggf.
den Begriff der Kovariablen
Und jetzt .. Zurücklehnen und schmunzeln
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4433 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Korrelation vs. Kausalität
Quelle: http://www.tylervigen.com/spurious-correlations, abgerufen am 12. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4444 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Korrelation vs. Kausalität
Quelle: http://www.tylervigen.com/spurious-correlations, abgerufen am 12. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4455 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Korrelation vs. Kausalität
Quelle: http://www.tylervigen.com/spurious-correlations, abgerufen am 12. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4466 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Korrelation vs. Kausalität
Quelle: http://www.tylervigen.com/spurious-correlations, abgerufen am 12. März 2022
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4477 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Korrelation vs. Kausalität
Hier gibt‘s noch mehr à http://www.tylervigen.com/spurious-correlations
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4488 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Das Simpson-Paradoxon
§ Das Simpson-Paradoxon (Edward Hugh Simpson) ist ein Paradoxon aus
der Statistik. Dabei scheint es, dass die Bewertung verschiedener
Gruppen unterschiedlich ausfällt, je nachdem ob man die Ergebnisse der
Gruppen kombiniert oder nicht.
Diskriminierungsklage gegen die Universität Berkeley
§ Einer der bekanntesten Fälle des Simpson-Paradoxons zeigte sich in
einer Studie zu Zulassungen zu Graduate Schools der University of
California, Berkeley.
§ Die Zahlen für den Herbst 1973 zeigten, dass mehr Männer (44%
Zulassungsquote) als Frauen zugelassen wurden
– Männer (44% Zulassungsquote)
– Frauen (35% Zulassungsquote)
§ Die Differenz war so groß, dass sie nicht mehr durch Zufall zu erklären
war (Signifikanztest).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 4499 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Das Simpson-Paradoxon
Das Ignorieren von Kovariablen kann zu verzerrten Ergebnissen führen.1
Zulassungen an der UC Berkeley
Admit
§ Höherer Frauenanteil bei den Nicht-Zugelassenen als bei den Zugelassenen, vgl.
Höhe der Rechtecke:
§ Ein Mann hat also eine 44-prozentige Chance, zum Studium zugelassen zu
werden, eine Frau aber nur eine 35-prozentige.
§ Diskriminierung?
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5500 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt
redneG
Admitted Rejected
elaM
elameF
1Bickel, P. J., Hammel, E. A., and O’Connell, J. W. (1975). Sex bias in graduate admissions: Data from Berkeley. Science, 187,398–403.

Das Simpson-Paradoxon
Department C
|        |          | Department A |          |        |          | Department B |          |        |          |              |          |
| ------ | -------- | ------------ | -------- | ------ | -------- | ------------ | -------- | ------ | -------- | ------------ | -------- |
|        | Admitted |              | Rejected |        |          |              |          |        | Admitted |              | Rejected |
|        |          |              |          |        | Admitted |              | Rejected |        |          |              |          |
|        | elaM     |              |          |        | elaM     |              |          |        | elaM     |              |          |
| redneG |          |              |          | redneG |          |              |          | redneG |          |              |          |
|        | elameF   |              |          |        | elameF   |              |          |        | elameF   |              |          |
|        |          | Admit        |          |        |          | Admit        |          |        |          | Admit        |          |
|        |          | Department D |          |        |          | Department E |          |        |          | Department F |          |
|        | Admitted |              | Rejected |        | Admitted |              | Rejected |        | Admitted |              | Rejected |
|        | elaM     |              |          |        | elaM     |              |          |        | elaM     |              |          |
| redneG |          |              |          | redneG |          |              |          | redneG |          |              |          |
| elameF |          |              |          |        | elameF   |              |          |        | elameF   |              |          |
|        |          | Admit        |          |        |          | Admit        |          |        |          | Admit        |          |
Je nach Department1 mal mehr mal weniger Frauen bei den Nicht-Zugelassenen als bei den
Zugelassenen. Aber Frauen haben sich mehr für Fächer beworben, in denen der Anteil der
Zugelassenen geringer war, vgl. Breite der Rechtecke.
1 Kovariable!
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  5511 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Das Simpson-Paradoxon
Erklärung des Beispiels Zulassung
§ Insgesamt höhere Zulassungsquote der Männer.
§ Aber pro Studiengang zumeist höhere Zulassung der Frauen.
§ Frauen bewerben sich eher auf Studienfächer mit weniger Studienplätzen
à Zulassungsquote ist hier unabhängig vom Geschlecht niedriger, da es
pro Platz mehr Bewerber gibt à Männer eher auf den Studiengang mit
mehr Studienplätzen.
§ Das Resultat der Grundgesamtheit steht somit (teilweise) im Widerspruch
zum Resultat der Teilmenge.
Auch wenn die Berkeley-Studie schon geraume Zeit her ist –
solche Fehler passieren immer wieder !
https://www.spiegel.de/wissenschaft/mensch/simpsons-paradoxon-diese-statistik-kann-
Hausaufgabe: Lesen Sie
nicht-stimmen-oder-doch-a-1068204.html
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5522 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Übung:
Zusammenhang
Eine Dozentin stellt bei einer Untersuchung fest, dass die Motivation der Studierenden
mit der Uhrzeit zusammenhängt, und zwar unterschiedlich für Frauen und Männer.
Welche Aussage stimmt?
a) Es gibt eine abhängige Variable (Motivation), eine unabhängige Variable (Uhrzeit)
und eine Kovariable (Geschlecht).
b) Es gibt eine abhängige Variable (Uhrzeit), eine unabhängige Variable (Motivation)
und eine Kovariable (Geschlecht).
c) Es gibt zwei abhängige Variable (Motivation und Geschlecht) und eine
unabhängige Variable (Uhrzeit).
d) Es gibt eine abhängige Variable (Geschlecht) und zwei unabhängige Variablen
(Motivation und Uhrzeit).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5533 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Lösung Übung:
Zusammenhang
Eine Dozentin stellt bei einer Untersuchung fest, dass die Motivation der Studierenden
mit der Uhrzeit zusammenhängt, und zwar unterschiedlich für Frauen und Männer.
Welche Aussage stimmt?
a) Es gibt eine abhängige Variable (Motivation), eine unabhängige Variable (Uhrzeit)
und eine Kovariable (Geschlecht).
b) Es gibt eine abhängige Variable (Uhrzeit), eine unabhängige Variable (Motivation)
und eine Kovariable (Geschlecht).
c) Es gibt zwei abhängige Variable (Motivation und Geschlecht) und eine
unabhängige Variable (Uhrzeit).
d) Es gibt eine abhängige Variable (Geschlecht) und zwei unabhängige Variablen
(Motivation und Uhrzeit).
Motivation ist die abhängige Variable !, die evtl. von der unabhängigen Variable
Uhrzeit " abhängt. Das Merkmal Geschlecht beeinflusst die abhängige Variable bzw.
den Zusammenhang und ist dadurch hier eine Kovariable $, also a).
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5544 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Datenerhebung
Stichproben
§ Stichproben sind eine Teilmenge der Population / Grundgesamtheit, die
Beobachtungen / Daten.
§ In der Regel ist man daran interessiert, das Ergebnis einer Stichprobe zu
verallgemeinern, zu generalisieren:
Vom Geschmack des Suppenlöffels auf die ganze Suppe.1
Quelle: https://pixabay.com/de/photos/suppe-karotte-ingwer-nahrung-essen-2006317/, lizenzfrei
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5555 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Datenerhebung
Stichproben: Begriffe
§ Population: Die Menge über die eine Aussage getroffen werden soll:
Die ganze Suppe im Suppentopf.
§ Stichprobe: Teilmenge der Population, die zur Analyse ausgewählt wurde:
Der Löffel voll Suppe.
§ Stichprobenverfahren: Der Prozess, mit dem die Teilmenge ausgewählt wurde, z.
B. zufällig: Der Auswahlprozess, wo und wie der Löffel aus dem Suppentopf gefüllt
wurde.
§ Repräsentative Stichprobe: Ist die Verteilung der Eigenschaften der Stichprobe
ähnlich der der Population? Wenn der Löffel anders schmeckt als die Suppe, war
der Löffel nicht repräsentativ.
§ Bias / Verzerrung: Ein Teil der Population wird bevorzugt:
Nur Fleischbällchen auf dem Löffel.
§ Generalisierbarkeit: Inwieweit kann von der Stichprobe auf die Grundgesamtheit
geschlossen werden? Wenn wir gut umgerührt haben, sollten die Verteilung der
Gewürze etc. auf dem Löffel ähnlich der im Topf sein und wir können vom Löffel
auf den Topf schließen.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5566 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Datenerhebung

Vergleich verschiedener Stichprobenverfahren
§ Vergleich verschiedener Stichprobenverfahren
|                   | Gelegenheits- | geschichtete      |               |
| ----------------- | ------------- | ----------------- | ------------- |
| Zufallsstichprobe | stichprobe    | Zufallsstichprobe | Vollerhebung  |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  5577 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Griechische Buchstaben im Skript
| Buchstabe | Aussprache |                                              | Bedeutung (üblicherweise) |
| --------- | ---------- | -------------------------------------------- | ------------------------- |
|           | alpha      | Symbol für das Signifikanzniveau eines Tests |                           |
%
(auch Zeichen für Fehler 1. Art)
|     | beta | Symbol für Regressionskoeffizienten |     |
| --- | ---- | ----------------------------------- | --- |
&
(Zeichen für Fehler 2. Art)
|     | delta | Symbol für allgemeine zusammenfassende Statistik  |     |
| --- | ----- | ------------------------------------------------- | --- |
'
(Kennzahl)
| (   | epsilon | Symbol für Residuum                              |     |
| --- | ------- | ------------------------------------------------ | --- |
| µ   | my      | Symbol für den Populationsmittelwert             |     |
| *   | sigma   | Symbol für die Populationsstandardabweichung     |     |
| +   | pi      | Symbol für den Populationsanteil                 |     |
| ,   | rho     | Symbol für den Populationskorrelation            |     |
| -   | chi     | Symbol für zusammenfassende Statistik im -2-Test |     |
AAnnaallyyssee  vvoonn  FFiinnaannzzddaatteenn  &&  DDaattaa  SScciieennccee  //  CCSS  //  FFoolliiee  5588 ©©  22002266  ––  HHoocchhsscchhuullee  ddeerr  BBaayyeerriisscchheenn  WWiirrttsscchhaafftt

Quantitativer Forschungsprozess (PPDAC)
Übersicht
(Problem)
P
§ Problemdefinition, Forschungsfrage: Was soll untersucht werden?
(Plan)
P § Planung der Analyse, z. B. Operationalisierung / Variablenauswahl.
Wahl des Stichprobenverfahren / Versuchsplanung.
(Data)
D
§ Datenerhebung, Datenmanagement, Datenbereinigung.
(Analysis)
A
§ Explorative Datenanalyse, Modellierung, Hypothesenprüfung.
(Conclusion)
C
§ Schlussfolgerungen, Interpretation, Kommunikation. Problem
Conclusion Plan
Analysis Data
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 5599 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Vorbereitung und Hinweise a
u
fg
a
b
e
Während der gesamten Installation sollten Sie eine stabile
Internetverbindung haben. Laptops (insbesondere Macbooks) sollten
am Stromnetz angeschlossen sein. Für die Installation müssen Sie
ein wenig Zeit einplanen, der Aufwand ist aber nur einmalig nötig!
Bitte beachten Sie diese Hinweise.
§ R (https://www.r-project.org/) ist das Basisprogramm.
§ R Studio (https://posit.co/products/open-source/rstudio/) ist eine
komfortable Entwicklungsumgebung für R und bietet zusätzliche
Tools, wie z. B. Dokumentenerstellung etc.
§ Zusatzpakete (wie mosaic, quantmod) bieten weitere nützliche
Funktionalitäten in Ergänzung zu den Funktionalitäten der
Basisinstallation.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6600 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Systembesonderheiten a
u
fg
a
b
e
Windows
§ Sie brauchen keine Administratorrechte besitzen, um R und R Studio installieren zu
können. (Bei Windows 10 Betriebssystemen treten teilweise Ausnahmen auf.) Sie
können in Ihr lokales Verzeichnis oder aber auch z. B. auf einen USB-Stick installieren.
Linux
§ Keine besonderen Vorbereitungen nötig.
macOS
§ Neuere Versionen von R werden nur noch für OS X ab Version 10.11 (El Capitan) oder
neuer zur Verfügung gestellt. Daher lohnt sich auch aus diesem Grund evtl. ein Update.
§ Einige Zusatzpakete benötigen das X11 Windows System. Dies muss vorab - sofern
noch nicht vorhanden - von der Seite http://www.xquartz.org/ installiert werden. Nach der
Installation muss der Computer neu gestartet werden.
§ Sollten Sie bei der Installation oder nach Start von R oder RStudio gefragt werden, ob
Sie XCode (Command Line Tool) installieren wollen dies bitte tun.
1. Installation [XQuartz](http://www.xquartz.org)
2. Neustart Computer
3. Fortfahren mit der Installation von R und R Studio
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6611 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Installation a
u
fg
a
b
e
§ Installieren Sie zunächst R und anschließend RStudio.
Installation von R
§ Installieren Sie die für Ihr System aktuelle Version von R von der Seite
https://www.r-project.org/
– Windows: https://cran.rstudio.com/bin/windows/base/
– macOS: https://cran.rstudio.com/bin/macosx/
§ Sie können in der Regel die Standardeinstellungen innerhalb der Installation
verwenden.
Installation von RStudio (Desktop)
§ Sie können RStudio IDE (Desktop-Version) von der Seite
https://docs.posit.co/ide/user/#direct-downloads-open-source
entsprechend Ihrem Betriebssystem herunterladen und anschließend installieren.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6622 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Der erste Start a
u
fg
a
b
e
§ Die Grundinstallation ist jetzt abgeschlossen. R-Studio erkennt in der Regel
automatisch R, und Sie können beides durch klicken auf das Programm bzw. das
Icon mit dem Logo von R-Studio starten.*
§ Auf ihrem Bildschirm sollte folgendes Bild zu sehen sein:
* Die ausführbare Datei finden Sie dabei im Ordner `bin` des Verzeichnisses, in dem Sie RStudio installiert haben. Wenn Sie nur R starten möchten, klicken
Sie entsprechend auf das Icon mit dem R-Logo.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6633 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Installation von Zusatzpaketen a
u
fg
a
b
e
§ Für die Veranstaltung werden wir u.a. das Zusatzpaket ("package") “mosaic"
verwenden. Installieren Sie dieses, in dem Sie in der R-Console den Befehl
install.packages("mosaic", dependencies = TRUE)
eingeben und jeweils `Enter` oder `Return` drücken. Sie brauchen dafür eine
Internetverbindung. Es werden noch weitere, abhängige Zusatzpakete installiert,
der Vorgang kann also evtl. eine Weile dauern.
§ Weitere Zusatzpakete werden bei Bedarf im Laufe der Veranstaltung installiert.
§ Die Installation von Zusatzpaketen muss nur einmal erfolgen. Die Verwendung der
Zusatzpakete hingegen muss bei jeder Sitzung neu gestartet werden. Dazu muss
jedes Paket mit dem Befehl library() gestartet werden.
§ Beispiel:
library(mosaic)
startet das installierte Zusatzpaket.
§ Details dazu im Laufe der Veranstaltung.
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6644 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Installation von Zusatzpaketen a
u
fg
a
b
e
Die angegebenen Meldungen sind keine Fehler, auch wenn sie (evtl.) in roter Schrift
dargestellt werden. (Je nach Spracheinstellung können die Fehlermeldungen auch auf
Englisch erfolgen)
Registered S3 method overwritten by 'mosaic':
method from
fortify.SpatialPolygonsDataFrame ggplot2
The 'mosaic' package masks several functions from core packages in order to add
additional features. The original behavior of these functions should not be affected by this.
Attache Paket: ‘mosaic’
Die folgenden Objekte sind maskiert von ‘package:dplyr’:
count, do, tally
[…]
Die folgenden Objekte sind maskiert von ‘package:base’:
max, mean, min, prod, range, sample, sum
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6655 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt

Installation von R und RStudio
H
a
u
s
Installationstest a
u
fg
a
b
e
Achtung: R unterscheidet zwischen Groß- und Kleinbuchstaben, also resultiert
library(Mosaic)
entsprechend in einem Fehler.
Fehler in library(Mosaic) : es gibt kein Paket namens ‘Mosaic’
Bei einem echten Fehler beginnt die Meldung im Normalfall mit: ‘Error’ oder ‚Fehler‘
wie hier zu sehen ist.
Jetzt, wo Sie das Paket ‘mosaic’ geladen haben, können Sie testen, ob es geklappt
hat. Geben Sie folgende Befehle in der Konsole ein:
data(mtcars)
favstats(~drat, data = mtcars)
Erhalten sie folgende Ausgabe?
min Q1 median Q3 max mean sd n missing
2.76 3.08 3.695 3.92 4.93 3.596563 0.5346787 32 0
Gratuliere! Sie haben R und RStudio erfolgreich installiert!
AAnnaallyyssee vvoonn FFiinnaannzzddaatteenn && DDaattaa SScciieennccee // CCSS // FFoolliiee 6666 ©© 22002266 –– HHoocchhsscchhuullee ddeerr BBaayyeerriisscchheenn WWiirrttsscchhaafftt