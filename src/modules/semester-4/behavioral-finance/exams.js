export const exams = [
  {
    id: 'behavioral-finance-gesamt-exam',
    title: 'Probeklausur · Behavioral Finance (Gesamtüberblick)',
    label: 'Gesamt',
    description:
      'Fachliche Probeklausur über alle neun Kapitel: Grundlagen und Menschenbild, das Zwei-Systeme-Modell, Heuristiken, Entscheidungen unter Unsicherheit, Zeit in der Ökonomie, Prospect Theory, Altersvorsorge, Spekulationsblasen sowie Kapitalmarktanomalien.',
    durationMinutes: 90,
    totalPoints: 80,
    isDemo: false,
    topics: [
      'Grundlagen, Homo Oeconomicus und Zwei-Systeme-Modell',
      'Heuristiken und kognitive Verzerrungen',
      'Entscheidungen unter Unsicherheit',
      'Zeit, Diskontierung und Prospect Theory',
      'Altersvorsorge, Spekulationsblasen und Kapitalmarktanomalien',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Bei Rechenaufgaben ist der vollständige Rechenweg relevant.',
      'Nutze die Musterlösungen erst nach der vollständigen Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Grundlagen und Begriffe',
        points: 24,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Verhaltensökonomik vs. Neoklassik',
            points: 6,
            task:
              'Grenze Ökonomie und Psychologie ab und erkläre, wo die Verhaltensökonomie liegt. Nenne anschließend die drei einschränkenden Annahmen, mit denen die Verhaltensökonomik die Kernannahmen des Homo Oeconomicus ersetzt.',
            solution:
              'Die Ökonomie ist eine normative Disziplin (sie gibt vor, wie man sich verhalten soll), die Psychologie eine deskriptive Disziplin (sie beschreibt, wie der Mensch tatsächlich handelt). Die Verhaltensökonomie liegt in der Schnittmenge beider; die ökonomisch geprägte Schnittmenge heißt Verhaltensökonomie, die psychologisch geprägte Wirtschaftspsychologie. Die drei einschränkenden Annahmen sind: begrenzte Rationalität (statt vollständiger Rationalität, mit Rückgriff auf Heuristiken), begrenzte Willenskraft (statt unbegrenzter Willenskraft, Vertagung) und begrenzter Eigennutz (statt reinen Eigennutzes, Fairness).',
            gradingHints: [
              'Ökonomie als normativ, Psychologie als deskriptiv eingeordnet',
              'Verhaltensökonomie in der Schnittmenge verortet',
              'Alle drei einschränkenden Annahmen korrekt genannt',
              'Begriffe nicht mit dem Homo Oeconomicus verwechselt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 11–15, 31',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · System 1 vs. System 2',
            points: 3,
            task:
              'Welche Aussage zum Zwei-Systeme-Modell trifft zu? A: System 1 arbeitet bewusst und anstrengend. B: System 2 läuft automatisch und unbewusst. C: Der Homo Oeconomicus wäre ein reiner System-2-Akteur. D: System 1 lässt sich jederzeit abschalten.',
            solution:
              'Antwort C ist korrekt. Der Homo Oeconomicus wäre ein reiner System-2-Akteur (bewusst, langsam, rational). System 1 ist automatisch, schnell und unbewusst (A und B falsch), und es lässt sich gerade nicht abschalten (D falsch) — deshalb sind intuitive Denkfehler schwer vermeidbar.',
            gradingHints: [
              'Antwort C eindeutig genannt',
              'System 1 als automatisch/unbewusst, System 2 als bewusst eingeordnet',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folien 39, 42',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Heuristik vs. Algorithmus',
            points: 4,
            task:
              'Welche Aussagen zu Heuristiken und Algorithmen sind korrekt? A: Eine Heuristik ist eine Daumenregel zur schnellen Entscheidung bei wenig Wissen und Zeit. B: Ein Algorithmus führt in gleichen Situationen zu gleichen Ergebnissen. C: Heuristiken können zu systematischen Verzerrungen (Biases) führen. D: Bei positiver Stimmung wird analytisch und fehlerarm gearbeitet.',
            solution:
              'Korrekt sind A, B und C. Eine Heuristik entlastet System 2 und kann zu Biases führen; der Algorithmus ist die normative, reproduzierbare Referenz. D ist falsch: Bei positiver Stimmung wird heuristisch (fehleranfällig) gearbeitet, bei negativer Stimmung analytisch — die meisten Fehler entstehen bei positiver Stimmung.',
            gradingHints: [
              'A, B und C als korrekt markiert',
              'D nicht gewählt: positive Stimmung führt zu heuristischem Verarbeiten',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 18–20',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Ungewissheit vs. Risiko i.e.S.',
            points: 5,
            task:
              'Erkläre den Unterschied zwischen Ungewissheit und Risiko im engeren Sinne. Gehe darauf ein, welche Konsequenz sich daraus jeweils für die anwendbaren Entscheidungsverfahren ergibt.',
            solution:
              'Der einzige Unterschied liegt im Wissen über die Eintrittswahrscheinlichkeiten. Bei Ungewissheit kennt der Entscheider nur die Zahl der möglichen Umweltzustände, aber keine Eintrittswahrscheinlichkeiten — eine rationale Entscheidung wird unmöglich, weshalb Heuristiken bzw. die klassischen Entscheidungsregeln (Maximax, Maximin, Hurwicz, Laplace, Krelle, Savage-Niehans) eingesetzt werden. Bei Risiko i.e.S. liegen zusätzlich objektive oder subjektive Eintrittswahrscheinlichkeiten vor, sodass stochastische Modelle bzw. die Entscheidungstheorie (Erwartungswert, μσ-Regel, Bayes-Regel) anwendbar sind.',
            gradingHints: [
              'Unterschied auf das Wissen über Eintrittswahrscheinlichkeiten zugespitzt',
              'Ungewissheit: keine Wahrscheinlichkeiten → Heuristiken/Entscheidungsregeln',
              'Risiko i.e.S.: objektive oder subjektive Wahrscheinlichkeiten → stochastische Modelle',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 3–6',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Exponentielles vs. hyperbolisches Diskontieren',
            points: 3,
            task:
              'Welche Aussage ist korrekt? A: Exponentielles Diskontieren ist zeitinkonsistent. B: Beim hyperbolischen Diskontieren steht (1 + i·n) statt (1+i)^n im Nenner. C: Hyperbolisches Diskontieren verhindert jede Präferenzumkehr. D: Beim exponentiellen Diskontieren hängt der Diskontsatz vom Zeitpunkt ab.',
            solution:
              'Antwort B ist korrekt. Beim hyperbolischen Diskontieren steht (1 + i·n) im Nenner statt (1+i)^n, der effektive Diskontsatz hängt vom Zeitpunkt ab. A ist falsch (exponentielles Diskontieren ist zeitkonsistent), C ist falsch (gerade hyperbolisches Diskontieren erzeugt Präferenzumkehr), D ist falsch (beim exponentiellen Diskontieren ist der Diskontfaktor konstant).',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Exponentiell = zeitkonsistent, hyperbolisch = Präferenzumkehr verstanden',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 174, 180',
          },
          {
            id: 'a6',
            type: 'multiple-choice',
            title: 'Aufgabe 6 · Informationseffizienz nach Fama',
            points: 3,
            task:
              'Welche Aussagen zur Informationseffizienz nach Fama sind korrekt? A: Die schwache Form bezieht nur vergangene Informationen ein. B: Die halb-strenge Form bezieht alle öffentlich zugänglichen Informationen ein. C: Die strenge Form bezieht öffentliche und private Informationen ein. D: In einem effizienten Markt lassen sich systematisch risikoadjustierte Überrenditen erzielen.',
            solution:
              'Korrekt sind A, B und C. D ist falsch: In effizienten Märkten lassen sich gerade keine risikoadjustierten Überrenditen erzielen, Prognosen sind "überflüssig", und Psychologie spielt keine Rolle.',
            gradingHints: [
              'A, B und C korrekt zugeordnet',
              'D nicht gewählt: keine systematischen Überrenditen im effizienten Markt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folie 3',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Fallstudien',
        points: 56,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 7 · Verfügbarkeit, Repräsentativität und Anchoring',
            points: 10,
            task:
              'Erläutere die drei zentralen Heuristiken Verfügbarkeitsheuristik, Repräsentativitätsheuristik und Verankerungseffekt (Anchoring). Nenne jeweils die Kernidee, ein Beispiel aus dem Skript und eine mögliche Folge für Anlageentscheidungen.',
            solution:
              'Verfügbarkeitsheuristik: Die Wahrscheinlichkeitsschätzung hängt von der Abrufbarkeit von Gedächtnisinhalten ab — leicht Vorstellbares gilt als wahrscheinlicher. Beispiel: dramatische Risiken (Tornado, Blitzschlag) werden gegenüber stillen, häufigen Risiken (Asthma, Schlaganfall) überschätzt. Anlagefolge: Home Bias und Investition in medial präsente Modeprodukte. Repräsentativitätsheuristik: Etwas gilt als wahrscheinlich, wenn es in ein Schema passt; daraus folgen z. B. Conjunction Bias (Linda) und die Vernachlässigung der A-priori-Wahrscheinlichkeit (Jack). Anlagefolge: Chartanalyse und Vertrauen in Analysten-Ranglisten als vermeintliches Können. Verankerungseffekt: Schätzungen orientieren sich an einem zuvor genannten, auch sachfremden Ausgangswert (Ariely et al.: Zahlungsbereitschaft steigt monoton mit den Ziffern der Sozialversicherungsnummer). Anlagefolge: Einstandspreise und Kursziele wirken als Anker.',
            gradingHints: [
              'Verfügbarkeit korrekt über Abrufbarkeit definiert, Beispiel und Folge genannt',
              'Repräsentativität korrekt über Schemadenken definiert, Beispiel (Linda/Jack) und Folge genannt',
              'Anchoring korrekt über sachfremden Ausgangswert definiert, Beispiel (Ariely) und Folge genannt',
              'Verfügbarkeit nicht mit Häufigkeit gleichgesetzt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 24–39, 73–76',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 8 · Bayes-Regel auf einer Risikomatrix',
            points: 8,
            task:
              'Eine Risikomatrix hat drei Umweltzustände mit den Wahrscheinlichkeiten p1 = 30 %, p2 = 50 %, p3 = 20 %. Alternative a1 liefert die Ergebnisse 10 / 12 / 22, Alternative a2 die Ergebnisse 8 / 14 / 18. (a) Berechne den Erwartungswert μ je Alternative nach der Bayes-Regel. (b) Welche Alternative wird gewählt? (c) Nenne einen Vorteil und eine zentrale Kritik der Bayes-Regel.',
            solution:
              '(a) μ(a1) = 0,3·10 + 0,5·12 + 0,2·22 = 3,0 + 6,0 + 4,4 = 13,4. μ(a2) = 0,3·8 + 0,5·14 + 0,2·18 = 2,4 + 7,0 + 3,6 = 13,0.\n(b) Gewählt wird die Alternative mit dem höchsten Erwartungswert, also a1 (μ = 13,4 > 13,0).\n(c) Vorteil: Einfachheit; gut bei häufigen Entscheidungen (Gesetz der großen Zahl). Kritik: Die Bayes-Regel ignoriert die Streuung (das Risiko) und passt daher nur für risikoneutrale Entscheider.',
            gradingHints: [
              'μ(a1) = 13,4 korrekt berechnet',
              'μ(a2) = 13,0 korrekt berechnet',
              'a1 als Gewinner mit höchstem Erwartungswert genannt',
              'Vorteil (Einfachheit) und Kritik (ignoriert Streuung, nur risikoneutral) genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 17–21',
          },
          {
            id: 'b3',
            type: 'calculation',
            title: 'Aufgabe 9 · Sicherheitsäquivalent und Risikoprämie',
            points: 6,
            task:
              'Eine Lotterie zahlt mit Wahrscheinlichkeit 50 % einen Betrag von 100 € und mit 50 % einen Betrag von 0 €. Ein Entscheider ist bei einem sicheren Betrag von s = 40 € indifferent. (a) Berechne den Erwartungswert E(X) der Lotterie. (b) Berechne die Risikoprämie π. (c) Welche Risikoeinstellung liegt vor und woran erkennt man sie?',
            solution:
              '(a) E(X) = 0,5·100 + 0,5·0 = 50 €.\n(b) π = E(X) − s = 50 − 40 = 10 €.\n(c) Wegen π > 0 ist der Entscheider risikoscheu (risikoavers). Allgemein: π > 0 risikoscheu (konkave Nutzenfunktion), π = 0 risikoneutral (linear), π < 0 risikofreudig (konvex).',
            gradingHints: [
              'E(X) = 50 € korrekt berechnet',
              'π = 50 − 40 = 10 € korrekt berechnet',
              'Risikoscheu wegen π > 0 korrekt zugeordnet',
              'Vorzeichenregel π > 0 / = 0 / < 0 korrekt erläutert',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 26–34',
          },
          {
            id: 'b4',
            type: 'case-study',
            title: 'Aufgabe 10 · Prospect Theory: Wert- und Gewichtungsfunktion',
            points: 10,
            task:
              'Beschreibe Verlauf und Aussage der Wertfunktion und der Gewichtungsfunktion der Prospect Theory. Erkläre damit, warum sich Menschen am Beispiel der Fahrradversicherung (Prämie 40 €, Wert 600 €, Diebstahlwahrscheinlichkeit 5 %) gegen ihren Erwartungswert versichern.',
            solution:
              'Wertfunktion: S-förmig und relativ zu einem Referenzpunkt bewertet — konkav im Gewinnbereich (risikoscheu), konvex im Verlustbereich (risikofreudig) und im Verlustbereich steiler. Verluste werden etwa doppelt so stark gewichtet wie gleich hohe Gewinne (Verlustaversion, Prinzip abnehmender Empfindlichkeit). Gewichtungsfunktion: Kleine, unwahrscheinliche Ereignisse werden überbewertet (π(p) > p), mittlere und hohe Wahrscheinlichkeiten unterbewertet (π(p) < p); an den Endpunkten verläuft sie sehr steil (Certainty-Effekt). Fahrradversicherung: Objektiv ist E("keine Versicherung") = 0,05·(−600) + 0,95·0 = −30 € besser als E("Versicherung") = −40 €. Subjektiv überwiegt jedoch v("Versicherung"), weil π(0,05) ≫ 0,05 (die kleine Diebstahlwahrscheinlichkeit wird überbewertet) und π(0,95) ≪ 0,95. Deshalb wird die im Erwartungswert teurere Versicherung subjektiv attraktiv.',
            gradingHints: [
              'Wertfunktion korrekt: S-förmig, konkav im Gewinn-, konvex/steiler im Verlustbereich, Verlustaversion',
              'Gewichtungsfunktion korrekt: kleine Wahrscheinlichkeiten über-, mittlere/hohe unterbewertet',
              'Objektiver Erwartungswert −30 € vs. −40 € korrekt berechnet',
              'Überbewertung von π(0,05) als Begründung für den Versicherungsabschluss genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 209–211, 225–235',
          },
          {
            id: 'b5',
            type: 'case-study',
            title: 'Aufgabe 11 · Altersvorsorge: Hindernisse und Nudges',
            points: 12,
            task:
              'Die private Altersvorsorge gliedert sich in drei Entscheidungen: Beitritt, Beitragshöhe und Anlage. Nenne je Entscheidung ein zentrales verhaltensökonomisches Hindernis und eine passende Lösung (Nudge) aus dem Skript und erläutere die Wirkung kurz.',
            solution:
              'Beitritt: Hindernis ist Trägheit/Status-quo-Bias (das britische "free lunch" wird nur von ~51 % genutzt) sowie Choice Overload (Marmeladen-Experiment: mehr Auswahl lockt an, lähmt aber den Abschluss). Lösung: automatische Anmeldung (Opt-out) — die Teilnahmequoten steigen massiv (z. B. Madrian/Shea: 37 % → 86 %); zusätzlich eindeutige, einfache Auswahlmöglichkeiten. Beitragshöhe: Hindernis sind Menüeffekte (Sparraten klumpen an runden Zahlen, das Matching ab 4 % wirkt als Anker) und gegenwartsgerichtete Präferenzen (hyperbolische Diskontierung). Lösung: automatische Erhöhung über das SMarT-Programm ("Save More Tomorrow"), das Beitragserhöhungen an künftige Gehaltssteigerungen koppelt (Sparquote stieg von 3,5 % auf 13,6 %); zusätzlich die Zukunft greifbar machen (Konfrontation mit dem gealterten Selbst erhöht die Einzahlung). Anlage: Hindernis sind naive Diversifizierung (bedingte 1/N-Regel: Aktienquote folgt dem Fondsmenü, UC 34 % vs. TWA 75 %) und Trendfolge/Extrapolation. Lösung: automatisches Rebalancing über Lebenszyklus-/Target-Maturity-Fonds, die den Aktienanteil erhöhen, extreme Allokationen reduzieren und das nicht-systematische Risiko senken (Mitchell et al. 2009).',
            gradingHints: [
              'Beitritt: Trägheit/Status quo (und/oder Choice Overload) als Hindernis, Opt-out als Lösung',
              'Beitragshöhe: Menüeffekte/Gegenwartspräferenz als Hindernis, SMarT/automatische Erhöhung als Lösung',
              'Anlage: naive Diversifizierung (1/N) und/oder Trendfolge als Hindernis, Lebenszyklusfonds als Lösung',
              'Mindestens ein konkreter Skriptbeleg (free lunch, Madrian/Shea, SMarT, UC/TWA) genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 5–37',
          },
          {
            id: 'b6',
            type: 'case-study',
            title: 'Aufgabe 12 · Spekulationsblasen nach Kindleberger/Minsky',
            points: 10,
            task:
              'Beschreibe die fünf Phasen einer Spekulationsblase nach Kindleberger/Minsky in der richtigen Reihenfolge und ordne sie der Blasenkurve zu. Erläutere außerdem, warum Spekulationsblasen volkswirtschaftlich als ambivalent gelten.',
            solution:
              'Die fünf Phasen lauten: 1. Verlagerung (exogener Schock verlagert Investitionen, Beginn des Booms — flacher Anfang der Kurve), 2. Positives Feedback (fremdkapitalfinanzierte Ausweitung, steigende Preise erzeugen weitere Investitionen — beginnender Anstieg), 3. Euphorie (Überschätzung der Renditen, neue Bewertungsmodelle — steiler Aufwärtsast), 4. Kritische Phase / finanzielle Not (Insider realisieren Gewinne, Umschichtung in Liquidität — am Gipfel), 5. Abscheu (entartete Panik, massiver Rückzug, Crash — abfallender rechter Ast). Wichtig: Die kritische Phase liegt am Gipfel, die Abscheu folgt erst danach. Ambivalenz: Kurzfristig wirken Blasen konsum- und investitionsfördernd (Einkommens-/Vermögens-, Bilanz- und Übertragungseffekt). Langfristig drohen erhebliche Schäden: Verlust der Informationsfunktion von Preisen (Abkopplung von den Fundamentalwerten), Verlust der Kaufkraft durch starke Produktionsrückgänge und Vertrauensverlust der Marktteilnehmer mit Übergreifen auf die Realwirtschaft.',
            gradingHints: [
              'Alle fünf Phasen in korrekter Reihenfolge genannt',
              'Kritische Phase am Gipfel, Abscheu erst danach korrekt verortet',
              'Kurzfristig positive Effekte (Einkommens-/Bilanz-/Übertragungseffekt) genannt',
              'Langfristig negative Effekte (Preisfunktion, Kaufkraft, Vertrauen) genannt und Ambivalenz benannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folien 280–286, 292–293',
          },
        ],
      },
    ],
  },
  {
    id: 'behavioral-finance-anomalien-exam',
    title: 'Probeklausur Kapitel 9 · Kapitalanlage und Kapitalmarktanomalien',
    label: 'Kapitel 9',
    description:
      'Fachliche Probeklausur zu Informationseffizienz, Traditional vs. Behavioral Finance und den zentralen Kapitalmarktanomalien (Winner-Loser-, Value-, Size- und Momentum-Effekt) auf Basis von Kapitel 9.',
    durationMinutes: 50,
    totalPoints: 44,
    isDemo: false,
    topics: [
      'Informationseffizienz und Grossman/Stiglitz-Paradoxon',
      'Traditional vs. Behavioral Finance',
      'Kapitalmarktanomalien und ihre Erklärungen',
      'Winner-Loser-, Value-, Size- und Momentum-Effekt',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Theorie und Abgrenzung',
        points: 18,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Informationseffizienz und Grossman/Stiglitz',
            points: 6,
            task:
              'Definiere Informationseffizienz nach Fama, nenne die drei Effizienzformen und erkläre, warum vollkommene Effizienz nach dem Grossman/Stiglitz-Paradoxon (1980) logisch unmöglich ist.',
            solution:
              'Informationseffizienz (Fama): Der Marktpreis spiegelt zu jedem Zeitpunkt sofort alle verfügbaren Informationen wider. Drei Formen: schwache Form (nur vergangene Informationen), halb-strenge Form (alle öffentlich zugänglichen Informationen) und strenge Form (öffentliche und private Informationen). Grossman/Stiglitz-Paradoxon: Information kostet (Beschaffung und Analyse). Wäre alles bereits eingepreist, gäbe es keinen Ertrag aus der Informationssuche, also würde niemand suchen — sucht aber niemand, lohnt sich die Suche wieder. Vollkommene Effizienz ist daher logisch unmöglich; das Gleichgewicht liegt zwischen den Extremen.',
            gradingHints: [
              'Fama-Definition korrekt wiedergegeben',
              'Alle drei Effizienzformen korrekt abgegrenzt',
              'Information-Paradoxon-Logik (Information kostet → Kreislauf) erklärt',
              'Schlussfolgerung: Gleichgewicht zwischen den Extremen',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 3–5',
          },
          {
            id: 'a2',
            type: 'multiple-choice',
            title: 'Aufgabe 2 · Traditional vs. Behavioral Finance',
            points: 4,
            task:
              'Welche Aussagen entsprechen der Behavioral-Finance-Sicht? A: Höhere Renditen lassen sich auch ohne höheres Risiko erzielen. B: Wertpapierrenditen lassen sich zum Teil prognostizieren. C: Märkte sind teilweise falsch bewertet. D: Mehrrendite ist ausschließlich Folge höheren Risikos.',
            solution:
              'Korrekt sind A, B und C. D beschreibt die Traditional-Finance-Sicht (effiziente Märkte, Homo Oeconomicus), nicht die Behavioral-Finance-Sicht.',
            gradingHints: [
              'A, B und C korrekt markiert',
              'D nicht gewählt: das ist die traditionelle Sicht',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folie 6',
          },
          {
            id: 'a3',
            type: 'definition',
            title: 'Aufgabe 3 · Anomalie und Erklärung zuordnen',
            points: 5,
            task:
              'Ordne den folgenden Kapitalmarktanomalien jeweils die im Skript genannte mögliche verhaltensökonomische Erklärung zu: (a) Home Bias, (b) Dispositionseffekt, (c) Januar-Effekt, (d) Chartanalyse.',
            solution:
              '(a) Home Bias → Verfügbarkeitsheuristik (mehr Informationen über das Heimatland). (b) Dispositionseffekt → Prospect Theory / Verlustaversion (Gewinner zu früh verkaufen, Verlierer zu lange halten). (c) Januar-Effekt → mentale Kontenführung (Verlustrealisierung zum Jahresende, Rückkauf im Januar). (d) Chartanalyse → Repräsentativitätsheuristik (vermeintliche Muster sind nur zufällig entstanden).',
            gradingHints: [
              'Home Bias → Verfügbarkeitsheuristik',
              'Dispositionseffekt → Prospect Theory / Verlustaversion',
              'Januar-Effekt → mentale Kontenführung',
              'Chartanalyse → Repräsentativität',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 9–14',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Kapitalmarkt vs. Supermarkt',
            points: 3,
            task:
              'Ein Steak ist um 30 % reduziert — Sie kaufen. Der Aktienmarkt fällt um 30 % — viele verkaufen aus Angst. Welches Anlegerverhalten illustriert dieser Vergleich? A: rational antizyklisches Verhalten am Kapitalmarkt. B: prozyklisches, herdengetriebenes Verhalten am Kapitalmarkt. C: vollständige Informationseffizienz. D: konsequente Anwendung des Value-Ansatzes.',
            solution:
              'Antwort B ist korrekt. Während der niedrigere Preis im Supermarkt rational als Kaufanreiz wirkt, verkauft der typische Anleger am Kapitalmarkt nach Kursverlusten aus Angst und kauft bei steigenden Kursen — er handelt prozyklisch und herdengetrieben.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Prozyklisches/herdengetriebenes Verhalten am Kapitalmarkt erkannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 15–16',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anomalien und Strategien',
        points: 26,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 5 · Winner-Loser-Effekt',
            points: 8,
            task:
              'Beschreibe den Aufbau und das Ergebnis der Studie von De Bondt/Thaler (1985) zum Winner-Loser-Effekt. Nenne die wichtigste Schlussfolgerung und mögliche psychologische Erklärungen.',
            solution:
              'Aufbau: Über den Zeitraum 1923–1982 werden aus allen NYSE-Aktien Extremportfolios gebildet — ein Loser-Portfolio (35 Aktien mit der schlechtesten Performance der letzten 3 Jahre) und ein Winner-Portfolio (35 Aktien mit der besten Performance der letzten 3 Jahre). Anschließend wird die Zukunftsrendite verfolgt. Ergebnis: Das Loser-Portfolio erzielt nach der Bildung steigende kumulierte Überrenditen (CAR), das Winner-Portfolio fällt zurück. Schlussfolgerung: Vergangene Verlierer werden zukünftige Gewinner und vergangene Gewinner zukünftige Verlierer. Psychologische Erklärungen: Überreaktionen, Repräsentativitätsheuristik und die Anwendung von Daumenregeln (alternativ auch steuerinduzierte Transaktionen).',
            gradingHints: [
              'Studienaufbau (NYSE, 3-Jahres-Performance, Loser-/Winner-Portfolio) korrekt',
              'Ergebnis: Loser steigt, Winner fällt (CAR) korrekt',
              'Schlussfolgerung: vergangene Verlierer → zukünftige Gewinner',
              'Mindestens eine psychologische Erklärung (Überreaktion/Repräsentativität) genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 18–21',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 6 · Value-Effekt und die Risiko-Hypothese',
            points: 8,
            task:
              'Erkläre den Value-Effekt (Fama/French 1992) anhand des Buchwert/Marktwert-Verhältnisses. Prüfe die drei möglichen Erklärungen Zufall, Risiko und Fehlbewertung und begründe, warum die Risiko-Hypothese empirisch widerlegt ist.',
            solution:
              'Value-Effekt: Aktien werden nach dem Verhältnis Buchwert zu Marktwert (B/M) sortiert. Ein hohes B/M (geringe eingepreiste Wachstumsaussichten) kennzeichnet Value-Aktien, ein niedriges B/M (hohe Wachstumsaussichten) Growth-Aktien. Empirisch erzielen Value-Aktien (hohes B/M) deutlich höhere Renditen als Growth-Aktien; die risikoadjustierte Differenz betrug 19,99 % (1963–1990). Prüfung der Erklärungen: Zufall/Data-Mining ist unwahrscheinlich, weil Fama/French (1998) den Effekt international out-of-sample nachweisen. Risiko ist widerlegt: Wäre B/M ein Risikofaktor, müsste das CAPM-Beta positiv mit dem B/M korrelieren — empirisch ist der Zusammenhang aber negativ (hohes Beta korreliert mit niedrigem B/M). Bleibt die Fehlbewertung: Wachstum ist mean reverting; Anleger schreiben gute (Growth) bzw. schlechte (Value) Fundamentaldaten zu weit fort — die wahrscheinlichste Erklärung.',
            gradingHints: [
              'B/M korrekt: hohes B/M = Value, niedriges B/M = Growth',
              'Value schlägt Growth, Größenordnung der Renditedifferenz genannt',
              'Risiko-Hypothese widerlegt: Beta korreliert negativ statt positiv mit B/M',
              'Fehlbewertung (mean reversion, zu weites Fortschreiben) als wahrscheinlichste Erklärung',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 22–34',
          },
          {
            id: 'b3',
            type: 'definition',
            title: 'Aufgabe 7 · Size- und Momentum-Effekt',
            points: 6,
            task:
              'Grenze den Size-Effekt (SMB) vom Momentum-Effekt ab. Nenne jeweils das Sortierkriterium, die Kernaussage und eine Besonderheit aus dem Skript.',
            solution:
              'Size-Effekt (SMB, Fama/French 1992): Sortierkriterium ist die Unternehmensgröße (Marktkapitalisierung). Kernaussage: Small Caps erzielen historisch höhere Durchschnittsrenditen als Large Caps; die Differenz "Small minus Large" beträgt rund 0,63 % p. m. bzw. 7,56 % p. a. Momentum-Effekt (Rouwenhorst 1998): Sortierkriterium ist die vergangene Performance (z. B. die letzten 6 Monate). Kernaussage: Gewinner der jüngsten Vergangenheit bleiben kurzfristig Gewinner; die Renditedifferenz Winner − Loser erreichte bis zu 16,37 %. Besonderheit: Der Effekt ist zeitlich begrenzt — der stabile Kern eines Trends dauert typischerweise rund ein gutes Jahr, danach lässt er nach.',
            gradingHints: [
              'Size-Effekt: Sortierkriterium Größe, Small schlägt Large (SMB)',
              'Momentum: Sortierkriterium vergangene Performance, Trendfortsetzung',
              'Mindestens eine konkrete Zahl (0,63 % p. m. bzw. 7,56 % p. a. oder 16,37 %) genannt',
              'Zeitliche Begrenzung des Momentum-Effekts erwähnt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 41–43',
          },
          {
            id: 'b4',
            type: 'case-study',
            title: 'Aufgabe 8 · Risikoprämie und antizyklische Strategie',
            points: 4,
            task:
              'Erkläre, wie sich aus dem Dividenden-Diskontierungsmodell eine implizite Risikoprämie ableiten lässt und wie eine antizyklische Anlagestrategie auf Basis der Mean Reversion dieser Prämie funktioniert.',
            solution:
              'Im Dividenden-Diskontierungsmodell ist der Aktienpreis der Barwert aller zukünftigen Dividenden, abgezinst mit einem risikoadäquaten Zins (sicherer Zins + Risikoprämie). Setzt man statt des fairen Preises den beobachteten Marktpreis ein, lässt sich der Zins zurückrechnen, der ihn erklärt — daraus folgt die implizite Risikoprämie (Reverse Engineering). Diese Prämie schwankt um ihren langfristigen Mittelwert (Mean Reversion). Antizyklische Strategie: Bei hoher Prämie (über dem Mittel, Angst) wird übergewichtet/gekauft, bei niedriger Prämie (unter dem Mittel, Euphorie) untergewichtet/verkauft — in Erwartung der Rückkehr zum Mittelwert.',
            gradingHints: [
              'Aktienpreis als Barwert der Dividenden mit sicherem Zins + Risikoprämie',
              'Implizite Prämie über Reverse Engineering aus dem Marktpreis abgeleitet',
              'Mean Reversion der Prämie genannt',
              'Antizyklik: hohe Prämie → kaufen, niedrige Prämie → verkaufen',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 35–40',
          },
        ],
      },
    ],
  },
];

export default exams;
