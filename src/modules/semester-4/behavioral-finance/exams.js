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
  {
    id: 'behavioral-finance-corporate-finance-exam',
    title: 'Probeklausur Kapitel 10 · Behavioral Corporate Finance',
    label: 'Kapitel 10',
    description:
      'Fachliche Probeklausur zu Managerial Overconfidence, M&A-Transaktionen, Corporate-Governance-Mechanismen, Ausschüttungspolitik und den Besonderheiten von IPOs auf Basis von Kapitel 10.',
    durationMinutes: 50,
    totalPoints: 44,
    isDemo: false,
    topics: [
      'Traditionelles vs. Behavioral Corporate Finance',
      'Managerial Overconfidence und M&A-Transaktionen',
      'Begrenzung der Selbstüberschätzung und Corporate Governance',
      'Ausschüttungspolitik und Besonderheiten von IPOs',
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
        points: 16,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Traditionell vs. Behavioral und Managerial Overconfidence',
            points: 6,
            task:
              'Grenze die traditionelle Corporate-Finance-Theorie von der Behavioral Corporate Finance anhand der Kernannahmen ab. Nenne anschließend drei Rahmenbedingungen, die laut Skript die Neigung zur Managerial Overconfidence begünstigen.',
            solution:
              'Traditionelle Theorie: Überzeugungen und Präferenzen der Agenten sind völlig rational — Investoren können davon ausgehen, dass Manager rational auf Governance-Anreize reagieren, und Manager können effiziente Märkte annehmen. Behavioral Corporate Finance: empirische Evidenz, die schwer mit diesen Rationalitätsannahmen zu vereinbaren ist — Manager sind begrenzt rational, Kapitalmärkte nicht vollständig effizient. Rahmenbedingungen der Selbstüberschätzung (drei von): Komplexität von Investitionsentscheidungen unter Unsicherheit; Individualität von Entscheidungen mit erst spät messbarer Qualität (ausbleibende Lerneffekte); Beförderung erfolgreicher Manager (Selbstattribution); Kontrollillusion; unzureichendes Risikomanagement (Verfügbarkeitsheuristik, besonders bei Start-ups).',
            gradingHints: [
              'Traditionelle Annahme (rationale Manager, effiziente Märkte) korrekt genannt',
              'Behavioral-Gegenposition (begrenzt rational, ineffiziente Märkte) korrekt genannt',
              'Mindestens drei Rahmenbedingungen der Selbstüberschätzung korrekt benannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 343–344',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · CAR-Empirie bei M&A-Transaktionen',
            points: 3,
            task:
              'Welche Aussage zur CAR-Empirie bei M&A-Transaktionen ist korrekt? A: Acquirer erzielen durchweg höhere CAR als Targets. B: Bradley et al. (1988) finden CAR +28 % bei Targets und +2 % bei Acquirern. C: CAR-Analysen zeigen keinen Unterschied zwischen Targets und Acquirern. D: Sirower (1998) findet für Targets eine negative CAR.',
            solution:
              'Antwort B ist korrekt. Bradley et al. (JoFE 1988): CAR bei Targets +28 %, bei Acquirern +2 %. A ist falsch (umgekehrt), C ist falsch (deutlicher Unterschied), D ist falsch (Sirower 1998 findet für Targets +30,1 %, für Bieter −2,6 %).',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Zahlenwerte Targets/Acquirer korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folie 346',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Reasons for M&A\'s that (don\'t) make sense',
            points: 4,
            task:
              'Welche Aussagen sind korrekt? A: Effizienzsteigerung durch Restrukturierung kann M&A auch ohne Synergien wertsteigernd machen. B: Die Hybris-Hypothese erklärt Übernahmepreise deutlich über dem ökonomischen Wert des Zielunternehmens. C: Laut Free-Cash-Flow-Hypothese sinkt die Macht der Manager, wenn Free Cash Flows zur Übernahme eines anderen Unternehmens genutzt werden. D: Synergien werden in der Praxis eher unterschätzt als überschätzt.',
            solution:
              'Korrekt sind A und B. C ist falsch: Werden Free Cash Flows zur Übernahme genutzt, steigt die Macht/das Ansehen der Manager (statt sie durch Ausschüttung zu verlieren). D ist falsch: Synergien werden in der Praxis eher überschätzt, die Probleme der Post-Merger-Integration eher unterschätzt.',
            gradingHints: [
              'A und B korrekt markiert',
              'C nicht gewählt: Free Cash Flows für Übernahme erhöhen Managermacht',
              'D nicht gewählt: Synergien werden überschätzt, nicht unterschätzt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 347–348',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Dividendenänderungen und Prospect Theory',
            points: 3,
            task:
              'Welche Aussage zu Kursreaktionen auf Dividendenänderungen ist korrekt? A: Kürzungen und Erhöhungen lösen betragsmäßig gleich starke Kursreaktionen aus. B: Dividendenkürzungen wirken stark negativ, Dividendenerhöhungen nur leicht positiv. C: Dividendenerhöhungen wirken stärker als Kürzungen. D: Die Kursreaktion widerspricht der Prospect Theory.',
            solution:
              'Antwort B ist korrekt. Konsistent mit der Verlustaversion der Prospect Theory fällt die Kursreaktion auf Kürzungen stark negativ, auf Erhöhungen nur leicht positiv aus — Folge ist das Dividend Smoothing der Manager.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Bezug zur Prospect Theory/Verlustaversion hergestellt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folie 357',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Fallstudien',
        points: 28,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 5 · Hybris-Hypothese und Agency-Probleme',
            points: 8,
            task:
              'Erläutere die Hybris-Hypothese und die Free-Cash-Flow-Hypothese als zwei getrennte Erklärungsansätze für wertvernichtende M&A-Transaktionen. Nenne jeweils den Kernmechanismus und eine Konsequenz.',
            solution:
              'Hybris-Hypothese (verhaltenswissenschaftlich): Sind Märkte informationseffizient, ist bereits alles zum Zielunternehmen im Kurs verarbeitet. Übernahmeangebote, die deutlich über dem ökonomischen Wert des Zielunternehmens liegen, lassen sich dann durch Hybris (Selbstüberschätzung) des Bieter-Managements erklären. Konsequenz: the winner\'s curse — der "erfolgreiche" Bieter zahlt strukturell zu viel. Free-Cash-Flow-Hypothese (Agency-Problem): M&A-Transaktionen sind eine Manifestation von Agency-Problemen. Die Auszahlung von Free Cash Flows an die Aktionäre reduziert die Ressourcen und damit die Macht der Manager; werden die Free Cash Flows stattdessen zur Übernahme eines anderen Unternehmens genutzt, steigen Macht bzw. Ansehen der Manager. Konsequenz: Manager bevorzugen (unnötige) Übernahmen gegenüber Ausschüttung.',
            gradingHints: [
              'Hybris-Hypothese korrekt über Selbstüberschätzung/informationseffiziente Märkte erklärt',
              'The winner\'s curse als Konsequenz der Hybris genannt',
              'Free-Cash-Flow-Hypothese korrekt über Macht-/Ressourcenlogik erklärt',
              'Beide Ansätze klar als getrennte Erklärungen abgegrenzt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folie 348',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 6 · Corporate-Governance-Mechanismen und ihre Grenzen',
            points: 8,
            task:
              'Nenne je zwei typische externe und interne Corporate-Governance-Mechanismen zur Begrenzung der Selbstüberschätzung. Erläutere anschließend, warum die Kontrolle durch Fremdkapitalgeber nur eingeschränkt wirksam ist.',
            solution:
              'Externe CG-Mechanismen: Produktmarkt (Wettbewerb reduziert den opportunistischen Spielraum des Managements) und Markt für Unternehmenskontrolle (Disziplinarwirkung der Gefahr einer feindlichen Übernahme); ergänzend der Markt für Manager. Interne CG-Mechanismen: Eigentümerstruktur (Exit- oder Voice-Strategie) und Kapitalstruktur/Kontrolle durch FK-Geber; ergänzend Kontrolle durch Aufsichtsgremien und das Vergütungssystem. Grenze der FK-Geber-Kontrolle: Theoretisch disziplinieren finanzierende Hausbanken die Manager durch Kontrolle (Skaleneffekte, gute Informationsbasis durch Offenlegungspflichten). Der Anreiz zu verstärkter Kontrolle nimmt aber erst mit wachsender Gefahr ökonomischen Misserfolgs zu — bei geringer Ausfallgefahr ist die Kontrollintensität entsprechend niedrig. Zudem bestehen Eigner-Gläubiger-Konflikte (z. B. bei der Ausschüttungspolitik), die die Kontrollwirkung weiter einschränken.',
            gradingHints: [
              'Zwei externe CG-Mechanismen korrekt genannt',
              'Zwei interne CG-Mechanismen korrekt genannt',
              'FK-Geber-Kontrolle als abhängig von der Gefahr ökonomischen Misserfolgs erklärt',
              'Eigner-Gläubiger-Konflikte als zusätzliche Einschränkung genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 350–351',
          },
          {
            id: 'b3',
            type: 'case-study',
            title: 'Aufgabe 7 · Ausschüttungspolitik: Trend und Gründe',
            points: 8,
            task:
              'Beschreibe den langfristigen Trend der US-amerikanischen Ausschüttungspolitik seit den 1970er-Jahren (Berk/DeMarzo 2011). Nenne je einen ökonomischen und einen verhaltensorientierten Grund für Dividendenausschüttungen.',
            solution:
              'Trend: Der Anteil ausschüttender US-Industrieunternehmen stieg bis zu einem Hoch von ca. 75 % (1978), fiel danach strukturell auf ein Tief von ca. 37–40 % (frühe/mittlere 2000er) und erholte sich leicht auf ca. 47 % (2007). Innerhalb der verbleibenden Ausschüttungen verschiebt sich das Gewicht von reinen Dividenden hin zu Aktienrückkäufen. Ökonomischer Grund: Dividende als sichere Renditekomponente mit Signalfunktion — sie signalisiert wirtschaftliche Stärke und baut Informationsasymmetrien gegenüber externen Kapitalgebern ab, insb. gegenüber uninformierten Anlegern (alternativ: "Disziplinierung" des Managements durch geringeres verfügbares Investitionskapital). Verhaltensorientierter Grund: mentale Buchführung — Anleger verbuchen Dividenden in einem "Konsumkonto" und Aktien in einem "Anlagekonto" (alternativ: Sentiment der Marktteilnehmer oder Selbstkontrolle als Schutz vor übereiltem Verkauf).',
            gradingHints: [
              'Trend korrekt: Hoch ca. 1978 (~75 %), Tief in den 2000ern (~37–40 %), leichte Erholung (~47 % 2007)',
              'Verschiebung von reinen Dividenden zu Aktienrückkäufen genannt',
              'Ein ökonomischer Grund (Signalfunktion/Disziplinierung) korrekt erläutert',
              'Ein verhaltensorientierter Grund (mentale Buchführung/Sentiment/Selbstkontrolle) korrekt erläutert',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 353, 355–356',
          },
          {
            id: 'b4',
            type: 'case-study',
            title: 'Aufgabe 8 · Underpricing vs. Underperformance bei IPOs',
            points: 4,
            task:
              'Unterscheide Underpricing und langfristige Underperformance bei IPOs. Nenne die von Ritter (2014) berichteten geometrischen Mittelwerte für IPO-Firmen und size-/BM-gematchte Vergleichsunternehmen über die Jahre 1–5.',
            solution:
              'Underpricing ist ein kurzfristiges Phänomen: Anleger erzielen bei der Erstemission positive, marktbereinigte Emissionsrenditen (Deutschland ca. 10–20 %, Neuer Markt teils über 40 %) — die Kurse liegen am ersten Handelstag über dem Emissionspreis. Underperformance ist ein langfristiges Phänomen: IPO-Kandidaten zeigen im Zeitraum von 3–5 Jahren nach Erstemission eine negative Performance gegenüber vergleichbaren Unternehmen; die Underpricing-Rendite wird bereits nach rund 6 Monaten wieder aufgezehrt. Ritter (2014): geometrisches Mittel Jahre 1–5 beträgt 11,1 % für IPO-Firmen gegenüber 13,0 % für size-/BM-gematchte Unternehmen (Differenz −1,9 Prozentpunkte).',
            gradingHints: [
              'Underpricing korrekt als kurzfristiges Phänomen mit Prozentangaben beschrieben',
              'Underperformance korrekt als langfristiges, gegenläufiges Phänomen beschrieben',
              'Ritter-(2014)-Werte 11,1 % vs. 13,0 % korrekt genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 358–359',
          },
        ],
      },
    ],
  },
  {
    id: 'behavioral-finance-probeklausur-1-exam',
    title: 'Probeklausur 1 · Behavioral Finance (Alle Kapitel)',
    label: 'Probe 1',
    description:
      'Vollständige Simulation der Abschlussklausur (90 Punkte / 90 Minuten) im offiziellen Format mit Multiple Choice, Ergänzungstext und Offenen Fragen über alle zehn Kapitel — von der Einführung bis zur Behavioral Corporate Finance.',
    durationMinutes: 90,
    totalPoints: 90,
    isDemo: false,
    revealMode: 'gesture',
    topics: [
      'Einführung, Zwei-Systeme-Modell und Heuristiken',
      'Entscheidungen unter Unsicherheit und Zeit in der Ökonomie',
      'Prospect Theory, Altersvorsorge und Spekulationsblasen',
      'Kapitalmarktanomalien und Behavioral Corporate Finance',
    ],
    instructions: [
      'Die Klausur besteht aus drei Blöcken: Multiple Choice, Ergänzungstext und Offene Fragen.',
      'Bei Multiple-Choice-Aufgaben mit einer richtigen Antwort genügt der Antwortbuchstabe; die Musterlösung liefert zusätzlich die Begründung.',
      'Bei Ergänzungstext-Aufgaben ist der fehlende Begriff bzw. die fehlende Kurzformulierung gesucht.',
      'Bei den Offenen Fragen ist eine vollständige, begründete Ausformulierung erforderlich.',
      'Nutze die Musterlösungen erst nach vollständiger Bearbeitung zur Selbstkontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Multiple Choice',
        points: 28,
        tasks: [
          {
            id: 'a1',
            type: 'single-choice',
            title: 'Aufgabe 1 · Maximal- und Minimalprinzip',
            points: 2,
            task:
              'Welche Aussage zum ökonomischen Prinzip ist korrekt? A: Beim Maximalprinzip ist der Output fix und der Input wird minimiert. B: Beim Minimalprinzip ist der Input fix und der Output wird maximiert. C: Beim Maximalprinzip ist der Input fix und der Output wird so groß wie möglich gewählt. D: Maximal- und Minimalprinzip beschreiben denselben Sachverhalt.',
            solution:
              'Antwort C ist korrekt: Beim Maximalprinzip ist der Input fix, der Output wird maximiert. A beschreibt fälschlich das Maximalprinzip mit den Merkmalen des Minimalprinzips (dort ist der Output fix, der Input wird minimiert). B vertauscht die fixe Größe ebenfalls. D ist falsch, da beide Prinzipien sich gerade darin unterscheiden, welche Größe fixiert wird.',
            gradingHints: ['Antwort C eindeutig genannt', 'Fixe vs. variable Größe je Prinzip korrekt zugeordnet'],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 18–19',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Homo Oeconomicus',
            points: 2,
            task:
              'Welche Annahme gehört NICHT zum klassischen Menschenbild des Homo Oeconomicus? A: vollständige Informiertheit. B: begrenzte Willenskraft. C: feste Präferenzen. D: Nutzenmaximierung.',
            solution:
              'Antwort B ist korrekt (gesucht ist die nicht dazugehörende Annahme). Begrenzte Willenskraft ist gerade eine der drei einschränkenden Annahmen, mit denen die Verhaltensökonomik den Homo Oeconomicus ersetzt — er selbst gilt als frei von Selbstkontrollproblemen (unbegrenzte Willenskraft). A, C und D sind dagegen klassische Merkmale des Homo Oeconomicus.',
            gradingHints: ['Antwort B eindeutig genannt', 'Begründung über den Gegensatz Homo Oeconomicus vs. Verhaltensökonomik'],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 20–23',
          },
          {
            id: 'a3',
            type: 'single-choice',
            title: 'Aufgabe 3 · Kognitive Leichtigkeit',
            points: 3,
            task:
              'Welcher der folgenden Faktoren erzeugt KEINE kognitive Leichtigkeit? A: Wiederholung eines Reizes. B: schlecht lesbare Schrift (disfluency). C: gute Laune. D: klare, gut lesbare Darstellung.',
            solution:
              'Antwort B ist korrekt. Schlecht lesbare Schrift mobilisiert gerade System 2 und senkt dadurch beim Cognitive Reflection Test die Fehlerquote von rund 90 % auf 35 % — sie erzeugt kognitive Anstrengung statt Leichtigkeit. A, C und D (wiederholte Erfahrung, gute Laune, klare Darstellung) sind dagegen anerkannte Auslöser kognitiver Leichtigkeit.',
            gradingHints: ['Antwort B eindeutig genannt', 'Disfluency korrekt als Gegenbeispiel zur kognitiven Leichtigkeit erklärt'],
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folie 13',
          },
          {
            id: 'a4',
            type: 'multiple-choice',
            title: 'Aufgabe 4 · Folgen der Repräsentativitätsheuristik',
            points: 2,
            task:
              'Welche der folgenden Fehlschlüsse zählen zu den Folgen der Repräsentativitätsheuristik? A: Conjunction Bias. B: Vernachlässigung der A-priori-Wahrscheinlichkeit. C: Verankerungseffekt. D: Gesetz der kleinen Zahlen.',
            solution:
              'Korrekt sind A, B und D. Der Verankerungseffekt (C) ist eine eigenständige Heuristik (Anchoring) und zählt nicht zu den sieben Folgen der Repräsentativitätsheuristik, zu denen u. a. Conjunction Bias, Vernachlässigung der A-priori-Wahrscheinlichkeit und das Gesetz der kleinen Zahlen gehören.',
            gradingHints: ['A, B und D korrekt markiert', 'C nicht gewählt: Anchoring ist eine eigenständige Heuristik'],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 29–39',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Maximax-Regel',
            points: 2,
            task:
              'Welche Grundeinstellung liegt der Maximax-Regel bei Entscheidungen unter Ungewissheit zugrunde? A: extrem pessimistisch. B: extrem optimistisch. C: kompromissorientiert. D: regret-orientiert.',
            solution:
              'Antwort B ist korrekt. Die Maximax-Regel wählt je Zeile das bestmögliche Ergebnis und davon insgesamt das höchste — eine extrem optimistische Grundhaltung. A beschreibt die Maximin-Regel, C das Hurwicz-Kriterium (gewichtete Mischung aus bestem und schlechtestem Ergebnis), D die Savage-Niehans-Regel (geringster maximaler Schaden/Regret).',
            gradingHints: ['Antwort B eindeutig genannt', 'Abgrenzung zu Maximin, Hurwicz und Savage-Niehans erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 10–16',
          },
          {
            id: 'a6',
            type: 'single-choice',
            title: 'Aufgabe 6 · Sechs Gründe für den Zinssatz',
            points: 3,
            task:
              'Welcher der folgenden Punkte gehört NICHT zu den sechs Gründen nach Beck (2014) für die Existenz eines positiven Zinssatzes? A: Inflation. B: Opportunitätskosten. C: Verlustaversion. D: multiple Persönlichkeiten.',
            solution:
              'Antwort C ist korrekt (gesucht ist der nicht dazugehörende Punkt). Verlustaversion ist ein Konzept der Prospect Theory (Kapitel 6), nicht einer der sechs Zinsgründe nach Beck. A, B und D zählen dagegen zu den sechs Gründen — neben Unsicherheit, Risikokompensation und Ungeduld.',
            gradingHints: ['Antwort C eindeutig genannt', 'Verlustaversion korrekt als Prospect-Theory-Konzept statt Zinsgrund erkannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 167–173',
          },
          {
            id: 'a7',
            type: 'single-choice',
            title: 'Aufgabe 7 · Allais-Paradoxon',
            points: 2,
            task:
              'Im Allais-Paradoxon (Entscheidungsproblem I) ist der Erwartungswert von Alternative A (2.409 EUR) höher als der von Alternative B (2.400 EUR). Welche Aussage trifft zu? A: Die Mehrheit der Probanden wählt rational Alternative A. B: Die Mehrheit der Probanden wählt das sichere Ergebnis B. C: A und B werden gleich häufig gewählt. D: Der Erwartungswert von B ist tatsächlich höher als der von A.',
            solution:
              'Antwort B ist korrekt. Trotz des höheren Erwartungswerts von A wählt die Mehrheit das sichere Ergebnis B — genau dieser Widerspruch zur Erwartungsnutzentheorie ist die Anomalie, die die Prospect Theory motiviert. A und D widersprechen den gegebenen Zahlen (2.409 EUR größer als 2.400 EUR), C trifft empirisch nicht zu.',
            gradingHints: ['Antwort B eindeutig genannt', 'Widerspruch zur Erwartungsnutzentheorie als Kern der Anomalie erkannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 191–195',
          },
          {
            id: 'a8',
            type: 'single-choice',
            title: 'Aufgabe 8 · Default-Effekt Organspende',
            points: 2,
            task:
              'Was zeigt das Organspende-Beispiel nach Johnson et al. (2003) am deutlichsten? A: Opt-In- und Opt-Out-Länder unterscheiden sich kaum in den Zustimmungsraten. B: Der Default (Opt-In vs. Opt-Out) beeinflusst die Zustimmungsrate dramatisch. C: Choice Overload senkt die Zustimmungsrate. D: Automatische Erhöhung steigert die Zustimmungsrate.',
            solution:
              'Antwort B ist korrekt. Opt-In-Länder liegen bei ca. 4–28 % Zustimmung, Opt-Out-Länder bei ca. 86–100 % — der Default-Effekt gilt als eines der robustesten Ergebnisse der angewandten Wirtschaftsforschung. A widerspricht diesen Zahlen, C (Choice Overload) und D (SMarT/automatische Erhöhung) beschreiben andere Konzepte des Kapitels.',
            gradingHints: ['Antwort B eindeutig genannt', 'Zahlenrahmen Opt-In vs. Opt-Out sinngemäß genannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 7–11',
          },
          {
            id: 'a9',
            type: 'single-choice',
            title: 'Aufgabe 9 · Kategorien des Herdentriebs',
            points: 2,
            task:
              'Welche Kategorie zählt NICHT zu den vier Auslöser-Kategorien des Herdentriebs? A: Informationskaskaden. B: Reputationsinteressen. C: Verlustaversion. D: historische Marktbewegungen (Chartanalyse).',
            solution:
              'Antwort C ist korrekt (gesucht ist die nicht dazugehörende Kategorie). Verlustaversion ist ein Konzept der Prospect Theory. Die vier Auslöser-Kategorien des Herdentriebs sind Informationskaskaden, Reputationsinteressen, Informationsquellen und historische Marktbewegungen.',
            gradingHints: ['Antwort C eindeutig genannt', 'Die vier tatsächlichen Kategorien korrekt benannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folien 278–279',
          },
          {
            id: 'a10',
            type: 'single-choice',
            title: 'Aufgabe 10 · Idealtypischer Kurstrend',
            points: 2,
            task:
              'In welcher Reihenfolge verläuft das idealtypische Muster eines Kurstrends? A: Übertreibung – Trendverselbständigung – positive Überraschungen – Unterreaktion. B: Unterreaktion – positive Überraschungen – psychologische Trendverselbständigung – offenkundige Übertreibung. C: positive Überraschungen – Unterreaktion – Übertreibung – Trendverselbständigung. D: Trendverselbständigung – Unterreaktion – Übertreibung – positive Überraschungen.',
            solution:
              'Antwort B ist korrekt. Das Muster durchläuft zunächst eine Unterreaktion auf neue Informationen (verankerungsbedingt), dann positive Überraschungen als Trendbasis, danach eine psychologisch getriebene Trendverselbständigung und schließlich eine offenkundige Übertreibung über den fairen Wert. A, C und D vertauschen diese Reihenfolge.',
            gradingHints: ['Antwort B eindeutig genannt', 'Die vier Phasen in korrekter Reihenfolge erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 44–47',
          },
          {
            id: 'a11',
            type: 'multiple-choice',
            title: 'Aufgabe 11 · Indizien für Managerial Overconfidence',
            points: 3,
            task:
              'Welche der folgenden Verhaltensweisen gelten laut Skript als typische Indizien für Managerial Overconfidence? A: riskante, fremdfinanzierte M&A-Transaktionen. B: geringe Dividendenausschüttungsquote bei verstärktem Aktienrückkauf. C: selbstsichere Außenkommunikation. D: konsequente Diversifikation des Investitionsportfolios.',
            solution:
              'Korrekt sind A, B und C — alle drei sind im Skript (Baker/Nofsinger 2010) explizit als Indizien für Selbstüberschätzung genannt. D ist kein Indiz für Overconfidence, sondern beschreibt gerade vorsichtiges, risikobewusstes Handeln — das Gegenteil einer Selbstüberschätzung.',
            gradingHints: ['A, B und C korrekt markiert', 'D nicht gewählt: Diversifikation ist kein Overconfidence-Indiz'],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 344–345',
          },
          {
            id: 'a12',
            type: 'single-choice',
            title: 'Aufgabe 12 · Asian-Disease-Problem',
            points: 3,
            task:
              'Beim Asian-Disease-Problem sind Therapie A und C sowie B und D rechnerisch identisch. Welche Aussage zum Wahlverhalten trifft zu? A: Im Gewinn-Frame wählt die Mehrheit die riskante Alternative. B: Im Verlust-Frame wählt die Mehrheit die sichere Alternative. C: Im Gewinn-Frame wählt die Mehrheit die sichere Alternative A, im Verlust-Frame die riskante Alternative D. D: Framing hat keinen Einfluss auf die Wahl.',
            solution:
              'Antwort C ist korrekt. Im Gewinn-Frame ("gerettet werden") wählt die Mehrheit die sichere Variante A (risikoavers), im rechnerisch identischen Verlust-Frame ("sterben") dagegen die riskante Variante D (risikofreudig) — obwohl A/C und B/D jeweils identische Erwartungswerte besitzen. A und B kehren die tatsächlichen Befunde um, D widerspricht dem gesamten Framing-Konzept.',
            gradingHints: ['Antwort C eindeutig genannt', 'Gewinn-Frame → risikoavers, Verlust-Frame → risikofreudig korrekt zugeordnet'],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 50–72',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Ergänzungstext',
        points: 16,
        tasks: [
          {
            id: 'b1',
            type: 'fill-in-blank',
            title: 'Aufgabe 13 · Formelle Rationalität',
            points: 2,
            task:
              'Die Auswahl aus bekannten Alternativen anhand eines systematischen Verfahrens — unabhängig vom verfolgten Nutzenziel — bezeichnet man als ... Rationalität.',
            solution: 'formelle (Rationalität)',
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 20–23',
          },
          {
            id: 'b2',
            type: 'fill-in-blank',
            title: 'Aufgabe 14 · Kognitive Leichtigkeit',
            points: 2,
            task:
              'Wird eine Information wiederholt, klar dargestellt oder in guter Stimmung verarbeitet, empfindet man sie als vertraut und mühelos — dieses Phänomen bezeichnet man als kognitive ...',
            solution: 'Leichtigkeit (cognitive ease)',
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folie 13',
          },
          {
            id: 'b3',
            type: 'fill-in-blank',
            title: 'Aufgabe 15 · Verfügbarkeitsheuristik',
            points: 2,
            task:
              'Wird die Wahrscheinlichkeit eines Ereignisses danach eingeschätzt, wie leicht sich passende Beispiele aus dem Gedächtnis abrufen lassen, spricht man von der ...',
            solution: 'Verfügbarkeitsheuristik',
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 24–28',
          },
          {
            id: 'b4',
            type: 'fill-in-blank',
            title: 'Aufgabe 16 · Sicherheitsäquivalent',
            points: 2,
            task:
              'Der sichere Betrag, bei dem ein Entscheider zwischen ihm und einer riskanten Alternative gerade indifferent ist, heißt ...',
            solution: 'Sicherheitsäquivalent',
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 24–28, 32',
          },
          {
            id: 'b5',
            type: 'fill-in-blank',
            title: 'Aufgabe 17 · Hyperbolisches Diskontieren',
            points: 2,
            task:
              'Steigt der effektive Diskontsatz mit zunehmender Nähe zur Gegenwart, sodass es zu Präferenzumkehr kommen kann, spricht man von ... Diskontieren.',
            solution: 'hyperbolischem Diskontieren',
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 180, 182–184',
          },
          {
            id: 'b6',
            type: 'fill-in-blank',
            title: 'Aufgabe 18 · Editing-Phase',
            points: 2,
            task:
              'Die Phase, in der ein Prospekt vor der eigentlichen Bewertung aufbereitet, gerundet, kombiniert und kodiert wird, heißt in der Prospect Theory die ... -Phase.',
            solution: 'Editing(-Phase) / Aufbereitungsphase',
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 201–206',
          },
          {
            id: 'b7',
            type: 'fill-in-blank',
            title: 'Aufgabe 19 · Beitrittsverfahren',
            points: 2,
            task:
              'Wird ein Sparplan so gestaltet, dass die Teilnahme automatisch erfolgt und ein aktiver Austritt nötig ist, spricht man vom ... -Verfahren.',
            solution: 'Opt-out(-Verfahren)',
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 7–11',
          },
          {
            id: 'b8',
            type: 'fill-in-blank',
            title: 'Aufgabe 20 · Rationale Blasen',
            points: 2,
            task:
              'Eine Spekulationsblase, bei der die Marktteilnehmer wissen, dass die Blase irgendwann platzen wird, aber hoffen, vorher an einen "größeren Narren" zu verkaufen, nennt man eine ... Blase.',
            solution: 'rationale (bzw. fast-rationale) Blase',
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folien 278–279',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Offene Fragen',
        points: 46,
        tasks: [
          {
            id: 'c1',
            type: 'case-study',
            title: 'Aufgabe 21 · Entscheidungsregeln bei Ungewissheit',
            points: 14,
            task:
              'Gegeben ist folgende Ergebnismatrix mit sechs Alternativen und vier Umweltzuständen (Ausschnitt): a1: 5/7/20/13; a4: 3/9/18/4; a5: 6/7/12/15. (a) Wende die Maximin-Regel auf alle drei Alternativen an und bestimme den Gewinner. (b) Berechne für a4 das Hurwicz-Kriterium mit Optimismusparameter 0,3 (0,3 · bestes Ergebnis + 0,7 · schlechtestes Ergebnis) und vergleiche das Resultat mit dem bekannten Hurwicz-Wert von a1 (9,5). (c) Erläutere die Grundidee der Savage-Niehans-Regel und nenne, wonach dabei je Alternative der "Schaden" bemessen wird.',
            solution:
              '(a) Maximin wählt je Zeile das schlechteste Ergebnis und davon das höchste: a1 = 5, a4 = 3, a5 = 6. Unter diesen drei Alternativen gewinnt a5 mit dem höchsten Zeilenminimum (6) — a5 ist damit (wie im Gesamtmodell mit allen sechs Alternativen) die pessimistisch beste Wahl.\n(b) Hurwicz(a4) = 0,3 · 18 (bestes Ergebnis) + 0,7 · 3 (schlechtestes Ergebnis) = 5,4 + 2,1 = 7,5. Damit liegt a4 (7,5) unter dem Hurwicz-Wert von a1 (9,5) — a1 bleibt nach dem Hurwicz-Kriterium klar vorne, weil sowohl sein bestes als auch sein schlechtestes Ergebnis günstiger in die gewichtete Summe eingehen.\n(c) Die Savage-Niehans-Regel (Minimax-Regret) bildet zunächst eine Bedauernsmatrix, indem von jedem Zellenwert das jeweilige Spaltenmaximum (das beste in diesem Zustand erreichbare Ergebnis) abgezogen wird. Je Alternative wird dann der größte negative Wert (maximaler Schaden/Regret) bestimmt; gewählt wird die Alternative mit dem geringsten maximalen Schaden — der "Schaden" bemisst sich also relativ zum jeweils bestmöglichen Ergebnis im selben Umweltzustand, nicht am Absolutwert.',
            gradingHints: [
              'Maximin korrekt berechnet (a1=5, a4=3, a5=6) und a5 als Gewinner benannt',
              'Hurwicz(a4) korrekt berechnet: 0,3·18+0,7·3=7,5',
              'Vergleich mit a1 (9,5) korrekt eingeordnet',
              'Savage-Niehans korrekt über Bedauernsmatrix (Spaltenmaximum minus Zellenwert) und geringsten maximalen Schaden erläutert',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 10–16',
          },
          {
            id: 'c2',
            type: 'definition',
            title: 'Aufgabe 22 · Hedonic Framing beim Autokauf',
            points: 12,
            task:
              'Nenne die vier Hedonic-Framing-Regeln der Prospect Theory zum Umgang mit mehreren Gewinnen bzw. Verlusten. Erläutere anschließend anhand des Autokauf-Beispiels (Grundmodell, Klimaanlage, Radio, jeweils mit Rabatt; Gesamtpreis in jeder Darstellungsvariante identisch 33.250 €), warum es aus Verkäufersicht günstiger ist, den Gesamtpreis gebündelt darzustellen, aber mehrere kleine Einzelrabatte statt eines einzigen Gesamtrabatts auszuweisen.',
            solution:
              'Die vier Hedonic-Framing-Regeln lauten: (1) Gewinne werden eher getrennt (segregiert) dargestellt — v(G1) + v(G2) > v(G1+G2). (2) Verluste werden eher zusammengefasst (integriert) — v(V1) + v(V2) < v(V1+V2). (3) Kleine Verluste werden mit großen Gewinnen integriert. (4) Kleine Gewinne werden von großen Verlusten getrennt. Anwendung auf den Autokauf: Der Gesamtpreis (Grundmodell, Klimaanlage, Radio) ist aus Käufersicht ein Verlust (eine Ausgabe) — mehrere Einzelposten sollten daher gebündelt/integriert dargestellt werden, weil ein einziger großer Verlust subjektiv weniger schmerzt als mehrere kleine Verluste in Summe (Regel 2). Die Rabatte sind dagegen Gewinne — sie sollten segregiert/einzeln ausgewiesen werden, weil mehrere kleine Gewinne zusammen subjektiv mehr Freude erzeugen als ein einziger gleich hoher Gewinn (Regel 1). Obwohl der Endpreis in jeder Darstellungsvariante identisch 33.250 € beträgt, wirkt diese Kombination aus gebündeltem Preis und entbündelten Rabatten für den Käufer am attraktivsten — reines Hedonic Framing ohne ökonomischen Unterschied.',
            gradingHints: [
              'Alle vier Hedonic-Framing-Regeln korrekt genannt',
              'Preis als Verlust korrekt der Integrations-Regel zugeordnet',
              'Rabatte als Gewinn korrekt der Segregations-Regel zugeordnet',
              'Hinweis, dass der Gesamtpreis (33.250 €) in allen Varianten identisch bleibt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 214–224',
          },
          {
            id: 'c3',
            type: 'essay',
            title: 'Aufgabe 23 · Implizite Risikoprämie und antizyklische Strategie',
            points: 10,
            task:
              'Erläutere das Dividenden-Diskontierungsmodell als Grundlage der Risikoprämie. Was unterscheidet die "Vorwärts"- von der "Rückwärts"-Richtung der Formel, und wie leitet sich daraus eine antizyklische Anlagestrategie ab?',
            solution:
              'Im Dividenden-Diskontierungsmodell entspricht der Aktienpreis dem Barwert aller zukünftigen Dividenden, abgezinst mit einem risikoadäquaten Zins (sicherer Zins plus Risikoprämie): P = Σ D_t / (1 + r_f + π)^t. Vorwärtsrichtung: Bei gegebenem Diskontierungszins (sicherer Zins plus als fair angenommener Risikoprämie) ergibt sich der faire Preis der Aktie. Rückwärtsrichtung: Bei gegebenem, beobachtetem Marktpreis wird umgekehrt derjenige Zins gesucht, der genau diesen Preis erklärt — daraus folgt die implizite Risikoprämie (Reverse Engineering, z. B. BMW-Beispiel: 10,65 %). Diese implizite Prämie schwankt um ihren langfristigen Mittelwert (Mean Reversion): Liegt sie über dem Mittel (geringes Kontrollgefühl, Angst der Marktteilnehmer), wird übergewichtet/gekauft; liegt sie darunter (Kompetenzgefühl, Euphorie), wird untergewichtet/verkauft — ein antizyklisches Vorgehen, das auf die Rückkehr der Prämie zum langfristigen Mittelwert setzt.',
            gradingHints: [
              'Formel/Logik des Dividenden-Diskontierungsmodells korrekt erläutert',
              'Vorwärts (fairer Preis aus Zins) vs. Rückwärts (implizite Prämie aus Marktpreis) korrekt unterschieden',
              'Mean Reversion der impliziten Risikoprämie genannt',
              'Antizyklische Regel (hohe Prämie → kaufen, niedrige Prämie → verkaufen) korrekt abgeleitet',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 35–40',
          },
          {
            id: 'c4',
            type: 'essay',
            title: 'Aufgabe 24 · Hybris, Agency-Probleme und Begrenzung der Selbstüberschätzung',
            points: 10,
            task:
              'Erläutere den Unterschied zwischen der Hybris-Hypothese und der Free-Cash-Flow-Hypothese als Erklärungen für wertvernichtende M&A-Transaktionen. Nenne anschließend zwei Maßnahmen aus zwei unterschiedlichen Kategorien (jenseits der Corporate-Governance-Mechanismen), mit denen sich Managerial Overconfidence begrenzen lässt.',
            solution:
              'Hybris-Hypothese (verhaltenswissenschaftlich): Sind Märkte informationseffizient, ist bereits alles zum Zielunternehmen im Kurs verarbeitet. Übernahmeangebote deutlich über dem ökonomischen Wert des Zielunternehmens lassen sich dann durch Hybris (Selbstüberschätzung) des Bieter-Managements erklären; Folge ist the winner\'s curse — der "erfolgreiche" Bieter zahlt strukturell zu viel. Free-Cash-Flow-Hypothese (Agency-Problem): M&A-Transaktionen sind eine Manifestation von Agency-Problemen. Die Auszahlung von Free Cash Flows an Aktionäre reduziert die Ressourcen und damit die Macht der Manager; werden die Free Cash Flows stattdessen zur Übernahme eines anderen Unternehmens genutzt, steigen Macht und Ansehen der Manager — Übernahmen werden so unabhängig von ihrem ökonomischen Nutzen attraktiv. Maßnahmen zur Begrenzung der Selbstüberschätzung (zwei von, jeweils unterschiedliche Kategorie): Schulung der Unternehmenslenker (Sensibilisierung für die eigene Verzerrungsanfälligkeit); Einführung eines Risikomanagementsystems; Anpassung vertraglicher Anreize, z. B. längere Mindesthaltedauern für Aktienoptionen oder Verlustbeteiligungen; Kalkulation künftiger Cash Flows mit höheren Diskontierungsfaktoren.',
            gradingHints: [
              'Hybris-Hypothese korrekt über Selbstüberschätzung und the winner\'s curse erklärt',
              'Free-Cash-Flow-Hypothese korrekt über Macht-/Ressourcenlogik der Manager erklärt',
              'Zwei Maßnahmen aus unterschiedlichen Kategorien genannt (Schulung, Risikomanagementsystem, Anreizanpassung, höhere Diskontierungsfaktoren)',
              'CG-Mechanismen nicht als eine der beiden genannten Kategorien wiederholt (explizit ausgeschlossen)',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 346–351',
          },
        ],
      },
    ],
  },
  {
    id: 'behavioral-finance-probeklausur-2-exam',
    title: 'Probeklausur 2 · Behavioral Finance (Alle Kapitel)',
    label: 'Probe 2',
    description:
      'Zweite vollständige Klausursimulation (90 Punkte / 90 Minuten) mit neuen Fragen zu allen zehn Kapiteln — Schwerpunkte u. a. auf Ankerungseffekt, Markowitz-Effizienz, Size-/Momentum-Effekt und Corporate Governance.',
    durationMinutes: 90,
    totalPoints: 90,
    isDemo: false,
    revealMode: 'gesture',
    topics: [
      'Verhaltensökonomische Grundlagen und Zwei-Systeme-Modell',
      'Heuristiken, Entscheidungen unter Unsicherheit und Zeitpräferenzen',
      'Prospect Theory, Altersvorsorge und Spekulationsblasen',
      'Kapitalmarktanomalien und Corporate Governance',
    ],
    instructions: [
      'Die Klausur besteht aus drei Blöcken: Multiple Choice, Ergänzungstext und Offene Fragen.',
      'Bei Multiple-Choice-Aufgaben mit einer richtigen Antwort genügt der Antwortbuchstabe; die Musterlösung liefert zusätzlich die Begründung.',
      'Bei Ergänzungstext-Aufgaben ist der fehlende Begriff bzw. die fehlende Kurzformulierung gesucht.',
      'Bei den Offenen Fragen ist eine vollständige, begründete Ausformulierung erforderlich.',
      'Nutze die Musterlösungen erst nach vollständiger Bearbeitung zur Selbstkontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Multiple Choice',
        points: 26,
        tasks: [
          {
            id: 'a1',
            type: 'single-choice',
            title: 'Aufgabe 1 · Vorläufer der Verhaltensökonomik',
            points: 2,
            task:
              'Welches Beispiel zeigt laut Skript, dass verhaltensökonomische Ideen nicht neu sind? A: Kahneman (1979). B: Smith (1759). C: Fama (1970). D: Markowitz (1952).',
            solution:
              'Antwort B ist korrekt. Bereits Adam M. Smith (1759) betonte in seiner Schrift die Rolle von Empfindungen, Gefühlen und Moralität im wirtschaftlichen Handeln; ähnlich später Keynes (1936, "Animal Spirits") und Clark (1918). Kahneman (1979) begründet dagegen erst die moderne Prospect Theory, Fama und Markowitz stehen für die neoklassische/traditionelle Kapitalmarkttheorie.',
            gradingHints: ['Antwort B eindeutig genannt', 'Smith (1759) als früher Vorläufer korrekt eingeordnet'],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 11–17',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Disfluency-Befund',
            points: 3,
            task:
              'Welche Aussage zum Cognitive-Reflection-Test-Befund (Disfluency) trifft zu? A: Schlecht lesbare Schrift erhöht die Fehlerquote. B: Schlecht lesbare Schrift senkt die Fehlerquote, weil sie System 2 aktiviert. C: Die Lesbarkeit der Schrift hat keinen Einfluss auf die Fehlerquote. D: Gut lesbare Schrift aktiviert System 2 stärker als schlecht lesbare.',
            solution:
              'Antwort B ist korrekt. Schwer lesbare (disfluente) Darstellung mobilisiert System 2 und senkt so die Fehlerquote beim Schläger-und-Ball-Beispiel von rund 90 % (normale Schrift) auf 35 % (schlecht lesbare Schrift) — ein Gegenbeispiel zur naheliegenden Intuition. A, C und D widersprechen diesem empirischen Befund.',
            gradingHints: ['Antwort B eindeutig genannt', 'Zahlen 90 % vs. 35 % sinngemäß genannt oder Mechanismus korrekt erklärt'],
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folien 11–16',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Ankerungseffekt (Ariely et al. 2003)',
            points: 3,
            task:
              'Welche Aussagen zum Ankerungseffekt (Ariely et al. 2003) treffen zu? A: Die Zahlungsbereitschaft steigt monoton mit dem Quintil der (sachfremden) Sozialversicherungsnummer. B: Nur Laien, nicht aber Experten sind für Anchoring anfällig. C: Alle gemessenen Korrelationen zwischen Anker und Schätzung waren positiv und signifikant. D: Der Ankerungsindex misst, wie stark sich Schätzungen relativ zur Ankerdifferenz verschieben.',
            solution:
              'Korrekt sind A, C und D. B ist falsch: Sowohl Laien als auch Experten verschieben ihre Schätzungen in Richtung des Ankers ("coherent arbitrariness") — Anchoring betrifft also nicht nur Laien, sondern lässt sich auch bei Fachleuten nachweisen.',
            gradingHints: ['A, C und D korrekt markiert', 'B nicht gewählt: Anchoring betrifft auch Experten'],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 73–82',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Laplace-Regel',
            points: 2,
            task:
              'Welche Regel überführt eine Entscheidung unter Ungewissheit rechnerisch in eine Risikosituation, indem sie allen Umweltzuständen die gleiche Wahrscheinlichkeit (1/Z) unterstellt? A: Maximin-Regel. B: Savage-Niehans-Regel. C: Laplace-Regel. D: Krelle-Regel.',
            solution:
              'Antwort C ist korrekt. Die Laplace-Regel (Prinzip des unzureichenden Grundes) gewichtet alle Zustände gleich (1/Z) und wählt den höchsten Zeilendurchschnitt — dadurch wird die Ungewissheit rechnerisch in eine Risikosituation überführt. Maximin (A) ist pessimistisch orientiert, Savage-Niehans (B) regret-orientiert, Krelle (D) nutzt eine Wurzeltransformation der Werte.',
            gradingHints: ['Antwort C eindeutig genannt', 'Gleichgewichtung 1/Z als Kernmerkmal erkannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 10–16',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Größeneffekt beim Diskontieren',
            points: 3,
            task:
              'Welche Aussage zum Größeneffekt (magnitude effect) beim Diskontieren ist korrekt? A: Große Beträge werden stärker diskontiert als kleine. B: Kleine Beträge werden stärker diskontiert als große. C: Der Größeneffekt betrifft nur Verluste, nicht Gewinne. D: Der Größeneffekt ist identisch mit dem Vorzeicheneffekt.',
            solution:
              'Antwort B ist korrekt. Menschen diskontieren kleine Beträge stärker als große — der geforderte implizite Zins sinkt mit steigendem Betrag (z. B. 15 $ → 60 $ nach einem Jahr: rund 300 % gegenüber 3.000 $ → 4.000 $: rund 33 %). A kehrt die Richtung um, C ist falsch (der Effekt betrifft Beträge allgemein, nicht nur Verluste), D verwechselt den Größeneffekt mit dem Vorzeicheneffekt, der den Unterschied zwischen Gewinn- und Verlustdiskontierung beschreibt.',
            gradingHints: ['Antwort B eindeutig genannt', 'Beispielzahlen oder Mechanismus sinngemäß genannt', 'Abgrenzung zum Vorzeicheneffekt erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 188–190',
          },
          {
            id: 'a6',
            type: 'single-choice',
            title: 'Aufgabe 6 · Gewichtungsfunktion',
            points: 3,
            task:
              'Welche Aussage zur Gewichtungsfunktion pi(p) der Prospect Theory ist korrekt? A: Mittlere und hohe Wahrscheinlichkeiten werden überbewertet. B: Kleine Wahrscheinlichkeiten werden unterbewertet. C: Kleine Wahrscheinlichkeiten werden überbewertet, mittlere/hohe unterbewertet. D: Die Gewichtungsfunktion verläuft linear zur objektiven Wahrscheinlichkeit.',
            solution:
              'Antwort C ist korrekt: pi(p) > p bei kleinen, pi(p) < p bei mittleren/hohen Wahrscheinlichkeiten; an den Rändern (nahe 0 % und 100 %) verläuft die Funktion besonders steil. A und B kehren die Richtung jeweils um, D beschreibt den hier gerade nicht geltenden risikoneutralen Referenzfall pi(p) = p.',
            gradingHints: ['Antwort C eindeutig genannt', 'Über-/Unterbewertung korrekt kleinen bzw. mittleren/hohen Wahrscheinlichkeiten zugeordnet'],
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 225–235',
          },
          {
            id: 'a7',
            type: 'multiple-choice',
            title: 'Aufgabe 7 · Maßnahmen zur Steigerung der Teilnahme',
            points: 3,
            task:
              'Welche der folgenden Maßnahmen wirken laut Skript nachweislich beitrittsfördernd bzw. sparquotenerhöhend? A: automatische Anmeldung (Opt-out). B: eine deutlich größere Fondsauswahl ohne weitere Vereinfachung. C: das SMarT-Programm ("Save More Tomorrow"). D: eine vereinfachte Schnellanmelde-Option mit fester Sparquote.',
            solution:
              'Korrekt sind A, C und D. B ist falsch: Eine größere, unstrukturierte Fondsauswahl erzeugt tendenziell Choice Overload und senkt die Teilnahmequote (Iyengar/Kamenica 2010), statt sie zu erhöhen — anders als die gezielt vereinfachten Lösungen A, C und D.',
            gradingHints: ['A, C und D korrekt markiert', 'B nicht gewählt: mehr unstrukturierte Auswahl senkt die Teilnahme'],
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 12–26',
          },
          {
            id: 'a8',
            type: 'single-choice',
            title: 'Aufgabe 8 · Arten von Spekulationsblasen',
            points: 3,
            task:
              'Welche Aussage zu den vier Arten von Spekulationsblasen nach Entstehungsursache ist korrekt? A: Intrinsische Blasen sind unabhängig von Fundamentaldaten. B: Bei informationsbedingten Blasen spiegelt der Preis den Fundamentalwert korrekt wider. C: Bei rationalen/fast-rationalen Blasen wissen die Akteure, dass die Blase platzen wird, aber nicht wann. D: Launen und Moden beruhen ausschließlich auf fehlerhaften Unternehmenszahlen.',
            solution:
              'Antwort C ist korrekt. Rationale Blasen entsprechen dem "Markt der größeren Narren": Die Akteure wissen um das bevorstehende Platzen, kennen aber den Zeitpunkt nicht. A ist falsch (intrinsische Blasen hängen gerade von Fundamentaldaten und deren übertriebener Interpretation ab), B ist falsch (der Preis spiegelt bei informationsbedingten Blasen den Fundamentalwert gerade nicht korrekt wider), D ist falsch (Launen und Moden beruhen auf sozialpsychologischen Faktoren, nicht auf fehlerhaften Zahlen).',
            gradingHints: ['Antwort C eindeutig genannt', '"Markt der größeren Narren" sinngemäß erläutert'],
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folien 278–279',
          },
          {
            id: 'a9',
            type: 'single-choice',
            title: 'Aufgabe 9 · Grossman/Stiglitz-Paradoxon',
            points: 2,
            task:
              'Welche Aussage zum Grossman/Stiglitz-Paradoxon (1980) ist korrekt? A: Es zeigt, dass vollkommene Informationseffizienz stets erreichbar ist. B: Es zeigt, dass vollkommene Informationseffizienz logisch unmöglich ist, weil Informationsbeschaffung Kosten verursacht. C: Es begründet ausschließlich die strenge Form der Informationseffizienz. D: Es widerlegt die Existenz von Kapitalmarktanomalien.',
            solution:
              'Antwort B ist korrekt. Weil Informationssuche Kosten verursacht, würde bei vollständiger Einpreisung niemand mehr suchen — sucht aber niemand, lohnt sich die Suche wieder. Das Gleichgewicht liegt daher zwischen den Extremen; vollkommene Effizienz ist logisch unmöglich. A widerspricht der Kernaussage, C und D sind sachfremd.',
            gradingHints: ['Antwort B eindeutig genannt', 'Logikkreislauf (Kosten → kein Ertrag → Suche lohnt sich wieder) sinngemäß erläutert'],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 3–5',
          },
          {
            id: 'a10',
            type: 'single-choice',
            title: 'Aufgabe 10 · Kontrolle durch Fremdkapitalgeber',
            points: 2,
            task:
              'Welche Aussage zur Kontrolle durch Fremdkapitalgeber als Corporate-Governance-Mechanismus ist korrekt? A: Sie wirkt unabhängig von der wirtschaftlichen Lage des Unternehmens immer gleich stark. B: Der Kontrollanreiz steigt erst mit wachsender Gefahr ökonomischen Misserfolgs. C: Sie ist grundsätzlich wirksamer als jeder interne CG-Mechanismus. D: Eigner-Gläubiger-Konflikte spielen dabei keine Rolle.',
            solution:
              'Antwort B ist korrekt. Der Anreiz zu verstärkter Kontrolle durch Fremdkapitalgeber nimmt erst mit wachsender Gefahr ökonomischen Misserfolgs zu — bei geringer Ausfallgefahr bleibt die Kontrollintensität niedrig. A widerspricht dem, C ist eine nicht belegte pauschale Rangfolge, D ist falsch: Eigner-Gläubiger-Konflikte (z. B. bei der Ausschüttungspolitik) schränken die Kontrollwirkung zusätzlich ein.',
            gradingHints: ['Antwort B eindeutig genannt', 'Abhängigkeit vom ökonomischen Misserfolgsrisiko korrekt erklärt'],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 349–351',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Ergänzungstext',
        points: 14,
        tasks: [
          {
            id: 'b1',
            type: 'fill-in-blank',
            title: 'Aufgabe 11 · Ökonomie als Disziplin',
            points: 2,
            task:
              'Ökonomie gilt als ... Disziplin, weil sie vorgibt, wie man sich verhalten soll; Psychologie gilt dagegen als deskriptive Disziplin, weil sie beschreibt, wie der Mensch tatsächlich handelt.',
            solution: 'normative (Disziplin)',
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 11–17',
          },
          {
            id: 'b2',
            type: 'fill-in-blank',
            title: 'Aufgabe 12 · Schnelles Denksystem',
            points: 2,
            task:
              'Ein Denksystem, das schnell, automatisch und unbewusst arbeitet und sich nicht willentlich abschalten lässt, bezeichnet Kahneman als ...',
            solution: 'System 1',
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folie 39',
          },
          {
            id: 'b3',
            type: 'fill-in-blank',
            title: 'Aufgabe 13 · Bestätigungsirrtum',
            points: 2,
            task:
              'Suchen und interpretieren Menschen Informationen gezielt so, dass sie eine bereits gebildete Meinung stützen, spricht man vom ...',
            solution: 'Bestätigungsirrtum (Confirmation Bias)',
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 40–49',
          },
          {
            id: 'b4',
            type: 'fill-in-blank',
            title: 'Aufgabe 14 · Markowitz-Effizienz',
            points: 2,
            task:
              'Eine Alternative, die von keiner anderen Alternative bei gleichem Erwartungswert mit geringerem Risiko oder bei gleichem Risiko mit höherem Erwartungswert übertroffen wird, heißt in der μ-σ-Ebene ...',
            solution: '(Markowitz-)effizient',
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 22–23',
          },
          {
            id: 'b5',
            type: 'fill-in-blank',
            title: 'Aufgabe 15 · Zeitkonsistenz',
            points: 2,
            task:
              'Ändert sich die Präferenz zwischen zwei Optionen allein dadurch, dass beide um dieselbe Zeitspanne verschoben werden, liegt eine Verletzung der ... vor.',
            solution: 'Zeitkonsistenz (bzw. es liegt Zeitinkonsistenz vor)',
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 177–179',
          },
          {
            id: 'b6',
            type: 'fill-in-blank',
            title: 'Aufgabe 16 · Referenzpunkt',
            points: 2,
            task:
              'Wird ein Ergebnis relativ zu einem neutralen Bezugspunkt bewertet, statt anhand des absoluten Endvermögens, spricht man in der Prospect Theory vom ...',
            solution: 'Referenzpunkt',
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 209–213',
          },
          {
            id: 'b7',
            type: 'fill-in-blank',
            title: 'Aufgabe 17 · Bedingte 1/N-Regel',
            points: 2,
            task:
              'Verteilen Sparer ihr Vermögen unabhängig von ihrer eigentlichen Risikoneigung gleichmäßig auf die 3–4 im Menü gewählten Fonds, spricht man von der (bedingten) ... -Regel.',
            solution: '1/N(-Regel)',
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 27–37',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Offene Fragen',
        points: 50,
        tasks: [
          {
            id: 'c1',
            type: 'essay',
            title: 'Aufgabe 18 · System 1 und vorschnelle Fehlantworten',
            points: 10,
            task:
              'Erläutere anhand des Cognitive Reflection Tests (Schläger-und-Ball-Aufgabe) und des Stroop-Konflikts, wie System 1 vorschnelle, aber typischerweise falsche Antworten liefert. Erkläre anschließend, warum schwer lesbare Schrift (disfluency) nachweislich die Fehlerquote senkt.',
            solution:
              'Cognitive-Reflection-Test-Aufgabe: Ein Schläger und ein Ball kosten zusammen 1,10 €, der Schläger kostet 1 € mehr als der Ball. System 1 antwortet reflexhaft "0,10 €" — korrekt ist jedoch 0,05 € (Schläger 1,05 € + Ball 0,05 € = 1,10 €). System 1 liefert hier eine schnelle, aber falsche Intuition, die nur System 2 durch bewusstes Nachrechnen korrigiert. Beim Stroop-Konflikt kollidiert das automatische Lesen (System 1) mit der bewussten Aufgabe, Schreibweise oder Position eines Wortes zu benennen (System 2) — das Unterdrücken der automatischen Reaktion kostet Anstrengung und verlangsamt die Antwort. Der Disfluency-Befund zeigt empirisch: Bei normaler, gut lesbarer Schrift machten rund 90 % der Studierenden mindestens einen Fehler bei der CRT-Aufgabe; bei schwer lesbarer Schrift sank der Anteil auf 35 %, weil die zusätzliche kognitive Anstrengung System 2 mobilisiert und die vorschnelle System-1-Antwort verwirft.',
            gradingHints: [
              'Schläger-und-Ball-Beispiel korrekt gerechnet (0,05 € statt 0,10 €)',
              'Stroop-Konflikt als Kollision von automatischem Lesen und bewusster Aufgabe erklärt',
              'Disfluency-Zahlen 90 % vs. 35 % genannt',
              'Mechanismus (Anstrengung mobilisiert System 2) korrekt erklärt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folien 11–16',
          },
          {
            id: 'c2',
            type: 'case-study',
            title: 'Aufgabe 19 · Mental Accounting und Decoy-Effekt',
            points: 10,
            task:
              'Erläutere das Konzept des Mental Accounting anhand des Kino-Beispiels (verlorene 10-Euro-Kinokarte vs. verlorener 10-Euro-Schein). Erkläre anschließend anhand des Economist-Abo-Beispiels (Decoy-Effekt), wie ein bewusst uninteressantes drittes Angebot die Wahl zwischen zwei anderen Optionen verschieben kann.',
            solution:
              'Mental Accounting: Obwohl der Geldverlust in beiden Fällen identisch ist (10 EUR), verzichten 54 % der Befragten auf einen Neukauf, wenn die Kinokarte verloren ging, aber nur 12 %, wenn stattdessen ein 10-Euro-Schein verloren ging. Der Verlust wird unterschiedlichen mentalen Konten ("Kino-Konto" vs. "Bargeld-Konto") zugeordnet, was zu inkonsistentem Verhalten trotz identischem ökonomischem Sachverhalt führt. Decoy-Effekt: Beim Economist-Abo wählen ohne Köder-Option nur 32 % Print+Online (68 % Online). Wird zusätzlich ein reines Print-Abo zum selben Preis wie Print+Online angeboten — eine Option, die praktisch niemand wählt (0 %) — steigt der Anteil von Print+Online auf 84 %. Der unattraktive Köder macht die dominierende Option (Print+Online) relativ attraktiver (asymmetrische Dominanz), obwohl er selbst nie gewählt wird.',
            gradingHints: [
              'Kino-Beispiel mit Zahlen 54 % vs. 12 % korrekt erklärt',
              'Identischer Geldverlust, aber unterschiedliche mentale Konten als Ursache benannt',
              'Decoy-Effekt am Economist-Beispiel korrekt erläutert (32 % auf 84 %)',
              'Asymmetrische Dominanz als Mechanismus genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 73–82',
          },
          {
            id: 'c3',
            type: 'essay',
            title: 'Aufgabe 20 · DU-Modell und steigende Konsumprofile',
            points: 10,
            task:
              'Erkläre die Kernannahme des DU-Modells (exponentielles Diskontieren) anhand seiner Nutzenformel. Nenne anschließend zwei Annahmen des Modells, die empirisch verletzt werden, und erkläre, wie die Vorliebe für steigende Konsumprofile diese Verletzung illustriert.',
            solution:
              'Das DU-Modell (Discounted-Utility-Modell) bewertet den Gesamtnutzen als U(c0,...,cT) = Σ (1/(1+i))^n · U(c_n): Jede Periode wird mit demselben, konstanten und exponentiellen Diskontfaktor gewichtet, unabhängig vom betrachteten Zeitpunkt. Zwei empirisch verletzte Annahmen: (1) ein konstanter Diskontierungsfaktor für alle Zeitpunkte und (2) die Unabhängigkeit von Nutzen und Konsum, wonach heutiger Konsum den morgigen Konsum nicht beeinflussen darf. Steigende Konsumprofile: Obwohl das DU-Modell bei identischer Gesamtsumme zwischen einem fallenden Profil (100, 90, 80) und einem steigenden Profil (80, 90, 100) indifferent sein müsste, bevorzugen Probanden das steigende Profil deutlich. Erklärungen sind Verlustaversion (ein sinkender Lohn wird als Verlust empfunden), Gewöhnung (der Nutzen hängt vom bisherigen Konsumniveau ab), Antizipationsnutzen (Vorfreude) und Zwangssparen — alle vier widersprechen der Unabhängigkeits- und Konstanzannahme des DU-Modells.',
            gradingHints: [
              'DU-Formel und konstanter exponentieller Diskontfaktor korrekt erläutert',
              'Zwei verletzte Annahmen (Konstanz, Unabhängigkeit) korrekt benannt',
              'Steigendes vs. fallendes Konsumprofil (80/90/100 vs. 100/90/80) korrekt beschrieben',
              'Mindestens zwei der vier Erklärungen (Verlustaversion, Gewöhnung, Antizipationsnutzen, Zwangssparen) genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 174–176, 188–190',
          },
          {
            id: 'c4',
            type: 'case-study',
            title: 'Aufgabe 21 · Subprime-Krise im 5-Phasen-Modell',
            points: 10,
            task:
              'Ordne die Subprime-Krise (ab 2007) den fünf Phasen des Kindleberger/Minsky-Modells zu und nenne für jede Phase ein zentrales Merkmal aus dem Skript.',
            solution:
              '1. Verlagerung: Gesetzesänderungen begünstigten seit den 1980er-Jahren Kredite an Schuldner niedriger Bonität, ergänzt um Lockvogelangebote. 2. Positives Feedback: schwache Kreditkontrollen sowie Verbriefung der Kreditverpflichtungen und ihre Weitergabe an internationale Investoren. 3. Euphorie: House-flipping (Erwerb zum schnellen Weiterverkauf) und ein kumulierter Immobilienpreisanstieg von +92 % zwischen 1996 und 2007. 4. Kritische Phase: das "This time is different"-Syndrom, die Schieflage zweier Bear-Stearns-Fonds sowie eine Zunahme von Kreditausfällen. 5. Abscheu: Verstaatlichungen, der Höhepunkt mit dem Zusammenbruch von Lehman Brothers und einsetzende Bank-Runs.',
            gradingHints: [
              'Alle fünf Phasen in korrekter Reihenfolge benannt',
              'Je Phase ein passendes Subprime-spezifisches Merkmal genannt',
              'Kritische Phase klar von der Abscheu-Phase unterschieden',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folien 287–289, 291',
          },
          {
            id: 'c5',
            type: 'essay',
            title: 'Aufgabe 22 · Winner-Loser-Effekt und Risiko-Widerlegung',
            points: 10,
            task:
              'Beschreibe den Studienaufbau von De Bondt/Thaler (1985) zum Winner-Loser-Effekt sowie die Ergänzung durch Chopra/Lakonishok/Ritter (1992). Wie widerlegt der empirische Befund zum CAPM-Beta die Risiko-Erklärung der Renditedifferenz?',
            solution:
              'De Bondt/Thaler (1985) bilden aus allen NYSE-Aktien über den Zeitraum 1923–1982 Extremportfolios: ein Loser-Portfolio (35 Aktien mit der schlechtesten Performance der letzten drei Jahre) und ein Winner-Portfolio (35 Aktien mit der besten Performance). Die kumulierte Überrendite (CAR) des Loser-Portfolios steigt nach der Portfoliobildung, die des Winner-Portfolios fällt — vergangene Verlierer werden zukünftige Gewinner und umgekehrt. Chopra/Lakonishok/Ritter (1992) ergänzen dies mit 20 Quantilportfolios (NYSE, 1930–1981, jährliche Bildung): Die Rendite fällt vom Loser-Portfolio (knapp 30 %) zum Winner-Portfolio (13–15 %), die risikoadjustierte Renditedifferenz der Extreme beträgt 10,84 %. Widerlegung der Risiko-Erklärung: Wäre die Renditedifferenz eine Kompensation für höheres Risiko, müsste das Loser-Portfolio ein systematisch höheres CAPM-Beta aufweisen. Das Beta steigt dabei jedoch nicht an — die Differenz lässt sich also nicht durch höheres Risiko erklären, weshalb Überreaktion und Repräsentativitätsheuristik als Erklärung wahrscheinlicher gelten als eine reine Risikoprämie.',
            gradingHints: [
              'Studienaufbau De Bondt/Thaler (NYSE, 3-Jahres-Performance, 35 Aktien je Portfolio) korrekt',
              'CAR-Ergebnis (Loser steigt, Winner fällt) korrekt beschrieben',
              'Chopra/Lakonishok/Ritter Renditedifferenz 10,84 % genannt',
              'Beta-Befund korrekt als Widerlegung der Risiko-Erklärung eingeordnet',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 18–21',
          },
        ],
      },
    ],
  },
  {
    id: 'behavioral-finance-probeklausur-3-exam',
    title: 'Probeklausur 3 · Behavioral Finance (Alle Kapitel)',
    label: 'Probe 3',
    description:
      'Dritte vollständige Klausursimulation (90 Punkte / 90 Minuten) mit neuen Fragen zu allen zehn Kapiteln — Schwerpunkte u. a. auf Bernoulli-Prinzip, Reflexionseffekt, IPO-Underperformance und Priming.',
    durationMinutes: 90,
    totalPoints: 90,
    isDemo: false,
    revealMode: 'gesture',
    topics: [
      'Rationalitätsbegriffe und Zwei-Systeme-Modell',
      'Heuristiken, Nutzentheorie und Zeitanomalien',
      'Prospect Theory, Altersvorsorge und Spekulationsblasen',
      'Kapitalmarktanomalien und Behavioral Corporate Finance',
    ],
    instructions: [
      'Die Klausur besteht aus drei Blöcken: Multiple Choice, Ergänzungstext und Offene Fragen.',
      'Bei Multiple-Choice-Aufgaben mit einer richtigen Antwort genügt der Antwortbuchstabe; die Musterlösung liefert zusätzlich die Begründung.',
      'Bei Ergänzungstext-Aufgaben ist der fehlende Begriff bzw. die fehlende Kurzformulierung gesucht.',
      'Bei den Offenen Fragen ist eine vollständige, begründete Ausformulierung erforderlich.',
      'Nutze die Musterlösungen erst nach vollständiger Bearbeitung zur Selbstkontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Multiple Choice',
        points: 30,
        tasks: [
          {
            id: 'a1',
            type: 'single-choice',
            title: 'Aufgabe 1 · Formelle Rationalität',
            points: 2,
            task:
              'Welche Aussage zur formellen Rationalität ist korrekt? A: Sie verlangt Nutzenmaximierung. B: Sie liegt vor, wenn eine Handlung systematisch aus den bekannten Alternativen ausgewählt wurde — dadurch ist nahezu jedes menschliche Handeln formell rational. C: Sie ist identisch mit substantieller Rationalität. D: Sie wird durch die Prospect Theory ersetzt.',
            solution:
              'Antwort B ist korrekt. Formelle Rationalität verlangt nur eine systematische Auswahl aus bekannten Alternativen, wodurch nahezu jedes Handeln formell rational ist. A beschreibt die engere substantielle Rationalität (Orientierung an Nutzenmaximierung), C verwechselt beide Begriffe, D ist sachfremd.',
            gradingHints: ['Antwort B eindeutig genannt', 'Abgrenzung zur substantiellen Rationalität erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 20–23',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Unvermeidbarkeit intuitiver Denkfehler',
            points: 2,
            task:
              'Warum sind intuitive Denkfehler laut Skript schwer zu vermeiden? A: Weil System 2 permanent aktiv ist. B: Weil sich System 1 nicht willentlich abschalten lässt und automatisch reagiert. C: Weil Heuristiken ausschließlich in System 2 vorkommen. D: Weil das Gehirn grundsätzlich fehlerfrei arbeitet.',
            solution:
              'Antwort B ist korrekt. System 1 läuft permanent und lässt sich nicht abstellen; das "faule" Gehirn bevorzugt es gegenüber dem anstrengenden System 2, wodurch Denkfehler systematisch, aber schwer vermeidbar entstehen. A, C und D widersprechen dem Kapitelinhalt.',
            gradingHints: ['Antwort B eindeutig genannt', 'Unmöglichkeit des Abschaltens von System 1 erkannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folie 42',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Overconfidence-Kennzahlen',
            points: 3,
            task:
              'Welche Aussagen zu Svenson (1981) und Barber/Odean (2000) treffen zu? A: 93 % der US-Autofahrer halten sich für besser als der Durchschnitt. B: Alleinstehende Männer weisen den höchsten Depotumsatz auf. C: Höherer Depotumsatz geht im Querschnitt mit höherer Nettorendite einher. D: Die umsatzärmste Anlegergruppe schlägt den S&P 500 leicht.',
            solution:
              'Korrekt sind A, B und D. C ist falsch: Die Empirie zeigt das Gegenteil — je höher der Portfolioumsatz (Quintil Q4), desto niedriger die Jahresrendite; Overconfidence-getriebenes Handeln verringert die Nettorendite statt sie zu erhöhen.',
            gradingHints: ['A, B und D korrekt markiert', 'C nicht gewählt: höherer Umsatz senkt die Nettorendite'],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 40–49',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Bernoulli-Prinzip',
            points: 2,
            task:
              'Im Bernoulli-Beispiel (sichere vs. spekulative Anlage, u(z) = ln(z)) sind die Erwartungswerte beider Alternativen mit 110.000 EUR identisch. Welche Aussage ist korrekt? A: Wegen des höheren Erwartungsnutzens wird die spekulative Anlage gewählt. B: Wegen der konkaven Nutzenfunktion wird die sichere Anlage gewählt, da sie den höheren Erwartungsnutzen liefert. C: Beide Alternativen sind bei gleichem Erwartungswert immer gleichwertig. D: Das Bernoulli-Prinzip ignoriert die Risikoeinstellung vollständig.',
            solution:
              'Antwort B ist korrekt. E[u(sicher)] = ln(110) ≈ 4,70 ist größer als E[u(spekulativ)] = 0,5·ln(140) + 0,5·ln(80) ≈ 4,66 — wegen der konkaven (risikoaversen) Nutzenfunktion wird trotz gleichem Erwartungswert die sichere Anlage bevorzugt. A widerspricht der Rechnung, C ignoriert gerade die Nutzenfunktion, D ist falsch, da die Risikoeinstellung über die Krümmung der Nutzenfunktion direkt in das Bernoulli-Prinzip einfließt.',
            gradingHints: ['Antwort B eindeutig genannt', 'Erwartungsnutzen-Rechnung sinngemäß nachvollzogen (4,70 > 4,66)'],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 24–28, 32',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Steigende Konsumprofile',
            points: 3,
            task:
              'Bei gleicher Gesamtsumme bevorzugen Probanden ein steigendes Lohnprofil (z. B. 80, 90, 100) gegenüber einem fallenden (100, 90, 80). Welche der folgenden Erklärungen wird im Skript NICHT genannt? A: Verlustaversion. B: Gewöhnung. C: Rückschaufehler. D: Antizipationsnutzen.',
            solution:
              'Antwort C ist korrekt (gesucht ist die nicht genannte Erklärung). Der Rückschaufehler (Hindsight Bias) ist ein Konzept aus Kapitel 3 und hat mit der Präferenz für steigende Konsumprofile nichts zu tun. Genannt werden dagegen Verlustaversion, Gewöhnung, Antizipationsnutzen und Zwangssparen (A, B und D gehören dazu).',
            gradingHints: ['Antwort C eindeutig genannt', 'Die tatsächlich genannten vier Erklärungen zumindest teilweise benannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 188–190',
          },
          {
            id: 'a6',
            type: 'single-choice',
            title: 'Aufgabe 6 · Reflexionseffekt',
            points: 2,
            task:
              'Was beschreibt der Reflexionseffekt der Prospect Theory? A: Verluste werden generell ignoriert. B: Die Spiegelung von Gewinnen zu Verlusten kehrt das Risikoverhalten um. C: Gewinne und Verluste werden immer gleich bewertet. D: Der Referenzpunkt bleibt bei gespiegelten Prospekten unverändert wirkungslos.',
            solution:
              'Antwort B ist korrekt. Bei positiven Prospekten dominiert Risikoaversion, bei den spiegelbildlich negativen Prospekten Risikofreude — die reine Spiegelung von Gewinn zu Verlust kehrt also das Risikoverhalten um (z. B. Fall 1: 92 % wählen bei Verlusten die riskante Option gegenüber nur 20 % bei Gewinnen). A, C und D widersprechen dieser empirischen Befundlage.',
            gradingHints: ['Antwort B eindeutig genannt', 'Risikoaversion bei Gewinnen vs. Risikofreude bei Verlusten korrekt zugeordnet'],
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 209–213',
          },
          {
            id: 'a7',
            type: 'multiple-choice',
            title: 'Aufgabe 7 · Menüeffekte bei der Beitragshöhe',
            points: 3,
            task:
              'Welche Aussagen zu Menüeffekten bei der Beitragshöhe treffen zu? A: Sparraten klumpen an runden Werten wie 5 %, 10 % oder 15 %. B: Ein Arbeitgeber-Matching ab 4 % verschiebt viele Sparraten genau auf 4 %. C: Der Matching-Effekt ist ein Zeichen rationaler Optimierung der Sparquote. D: Die Wahl der Sparrate wird laut der zitierten USC-Befragung typischerweise über mehrere Stunden sorgfältig durchdacht.',
            solution:
              'Korrekt sind A und B. C ist falsch: Der Matching-Effekt ist gerade kein Zeichen rationaler Optimierung, sondern ein Anker-/Menüeffekt. D ist falsch: Laut der zitierten Befragung wenden Teilnehmer typischerweise weniger als eine Stunde für die Wahl ihrer Sparrate auf und verlassen sich auf naive Faustregeln.',
            gradingHints: ['A und B korrekt markiert', 'C und D korrekt ausgeschlossen'],
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 19–23',
          },
          {
            id: 'a8',
            type: 'single-choice',
            title: 'Aufgabe 8 · Verhaltensanomalien am Neuen Markt',
            points: 2,
            task:
              'Wann tritt laut Skript "erlernte Sorglosigkeit" im Verlauf einer Spekulationsblase typischerweise auf? A: ganz am Anfang der Verlagerungsphase. B: am Gipfel der Blase. C: erst spät nach dem Crash. D: Das Skript beschreibt nur "gelernte Hilflosigkeit", nicht "erlernte Sorglosigkeit".',
            solution:
              'Antwort B ist korrekt. Erlernte Sorglosigkeit wird laut Skript am Gipfel der Blase verortet, während gelernte Hilflosigkeit erst spät nach dem Absturz auftritt — beide Phänomene dürfen nicht verwechselt werden. A, C und D entsprechen nicht der im Skript beschriebenen zeitlichen Zuordnung.',
            gradingHints: ['Antwort B eindeutig genannt', 'Abgrenzung zu gelernter Hilflosigkeit (spät nach dem Crash) erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF8 – Spekulationsblasen an Finanzmärkten · Folie 290',
          },
          {
            id: 'a9',
            type: 'single-choice',
            title: 'Aufgabe 9 · Erklärung des Value-Effekts',
            points: 3,
            task:
              'Welche der drei geprüften Erklärungen des Value-Effekts gilt laut Skript als am wahrscheinlichsten? A: Zufall/Data-Mining, weil Fama/French (1998) den Effekt nur innerhalb der US-Stichprobe finden. B: Risiko, weil das CAPM-Beta positiv mit dem Buchwert/Marktwert-Verhältnis korreliert. C: Fehlbewertung, weil Anleger gute (Growth) bzw. schlechte (Value) Fundamentaldaten zu weit in die Zukunft fortschreiben. D: Keine der drei Erklärungen ist mit den Daten vereinbar.',
            solution:
              'Antwort C ist korrekt. Da Fama/French (1998) den Effekt international out-of-sample bestätigen (gegen Zufall) und die Beta-B/M-Korrelation empirisch negativ statt positiv ist (gegen Risiko), bleibt Fehlbewertung durch zu weit in die Zukunft fortgeschriebene Wachstumserwartungen als wahrscheinlichste Erklärung. A und B beschreiben die jeweils widerlegten Gegenpositionen inkorrekt, D widerspricht der klaren Einordnung im Skript.',
            gradingHints: ['Antwort C eindeutig genannt', 'Widerlegung von Zufall und Risiko-Hypothese sinngemäß erklärt'],
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 22–34',
          },
          {
            id: 'a10',
            type: 'single-choice',
            title: 'Aufgabe 10 · Dividend Smoothing',
            points: 2,
            task:
              'Was versteht man unter Dividend Smoothing? A: Manager erhöhen Dividenden regelmäßig unabhängig von der Ertragslage. B: Manager vermeiden Dividendenkürzungen und erhöhen Dividenden nur, wenn künftige Kürzungen unwahrscheinlich sind. C: Manager schütten grundsätzlich keine Dividenden aus. D: Dividend Smoothing bezeichnet die betragsmäßige Angleichung von Dividende und Aktienrückkauf.',
            solution:
              'Antwort B ist korrekt. Weil Kursreaktionen auf Dividendenkürzungen stark negativ, auf Erhöhungen dagegen nur leicht positiv ausfallen (konsistent mit der Prospect Theory), versuchen Manager, Kürzungen zu vermeiden und Dividenden nur zu erhöhen, wenn eine künftige Rücknahme unwahrscheinlich ist — dieses Glätten heißt Dividend Smoothing. A, C und D beschreiben das Konzept nicht korrekt.',
            gradingHints: ['Antwort B eindeutig genannt', 'Asymmetrische Kursreaktion (Kürzung stark negativ, Erhöhung leicht positiv) als Ursache genannt'],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 352–357',
          },
          {
            id: 'a11',
            type: 'single-choice',
            title: 'Aufgabe 11 · Halo-Effekt',
            points: 3,
            task:
              'Was beschreibt der Halo-Effekt? A: Eine herausragende Einzeleigenschaft strahlt auf das Gesamturteil über eine Person oder Sache aus. B: Menschen bevorzugen grundsätzlich den Status quo. C: Wahrscheinlichkeiten werden anhand der Abrufbarkeit von Erinnerungen geschätzt. D: Ein sachfremder Ausgangswert verzerrt nachfolgende Schätzungen.',
            solution:
              'Antwort A ist korrekt. Der Halo-Effekt beschreibt, wie eine positive oder negative Einzeleigenschaft (etwa ein erster Eindruck) das Gesamturteil über eine Person oder Sache prägt. B beschreibt den Status-quo-Bias, C die Verfügbarkeitsheuristik, D den Verankerungseffekt.',
            gradingHints: ['Antwort A eindeutig genannt', 'Abgrenzung zu Status-quo-Bias, Verfügbarkeit und Anchoring erkennbar'],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 50–72',
          },
          {
            id: 'a12',
            type: 'single-choice',
            title: 'Aufgabe 12 · Kritik an der Bayes-Regel',
            points: 3,
            task:
              'Welche zentrale Kritik wird an der Bayes-Regel (μ-Prinzip) bei Entscheidungen unter Risiko geübt? A: Sie berücksichtigt keine Eintrittswahrscheinlichkeiten. B: Sie ignoriert die Streuung der Ergebnisse und passt daher nur für risikoneutrale Entscheider. C: Sie ist nur bei genau zwei Alternativen anwendbar. D: Sie liefert keine reproduzierbaren Ergebnisse.',
            solution:
              'Antwort B ist korrekt. Die Bayes-Regel verdichtet die Ergebnisse zu einem einzigen Erwartungswert und blendet die Streuung (das Risiko) vollständig aus — sie eignet sich daher nur für risikoneutrale Entscheider. A ist falsch (die Regel beruht gerade auf den Eintrittswahrscheinlichkeiten), C und D sind sachfremd.',
            gradingHints: ['Antwort B eindeutig genannt', 'Bezug zur Risikoneutralität als Einschränkung hergestellt'],
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 17–21',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Ergänzungstext',
        points: 16,
        tasks: [
          {
            id: 'b1',
            type: 'fill-in-blank',
            title: 'Aufgabe 13 · Homo Oeconomicus',
            points: 2,
            task:
              'Ein Nutzenmaximierer, der vollständig informiert ist, feste Präferenzen besitzt und frei von Emotionen und Selbstkontrollproblemen entscheidet, wird in der Neoklassik als ... bezeichnet.',
            solution: 'Homo Oeconomicus',
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 20–23',
          },
          {
            id: 'b2',
            type: 'fill-in-blank',
            title: 'Aufgabe 14 · Kognitive Leichtigkeit',
            points: 2,
            task:
              'Das Gefühl, mit dem sich ein wiederholter, klar dargestellter oder in guter Stimmung wahrgenommener Reiz vertraut und mühelos anfühlt, heißt kognitive ...',
            solution: 'Leichtigkeit (cognitive ease)',
            sourceRef: 'Quelle: Behavioral Finance · BF2 – Modell 2 Systeme · Folie 13',
          },
          {
            id: 'b3',
            type: 'fill-in-blank',
            title: 'Aufgabe 15 · Repräsentativitätsheuristik',
            points: 2,
            task:
              'Schätzen Menschen die Wahrscheinlichkeit eines Ereignisses danach ein, wie gut es zu einem bekannten Muster oder Schema passt, spricht man von der ...',
            solution: 'Repräsentativitätsheuristik',
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 29–39',
          },
          {
            id: 'b4',
            type: 'fill-in-blank',
            title: 'Aufgabe 16 · Risikoprämie',
            points: 2,
            task:
              'Der Betrag, um den der Erwartungswert einer riskanten Alternative vom Sicherheitsäquivalent abweicht, heißt ...',
            solution: 'Risikoprämie (π)',
            sourceRef: 'Quelle: Behavioral Finance · BF4 – Entscheidungen unter Unsicherheit · Folien 24–28, 32',
          },
          {
            id: 'b5',
            type: 'fill-in-blank',
            title: 'Aufgabe 17 · Größeneffekt',
            points: 2,
            task:
              'Verlangen Menschen für den Verzicht auf einen kleinen Geldbetrag relativ einen höheren impliziten Zins als für einen großen Betrag, spricht man vom ...',
            solution: 'Größeneffekt (magnitude effect)',
            sourceRef: 'Quelle: Behavioral Finance · BF5 – Zeit in der Ökonomie · Folien 188–190',
          },
          {
            id: 'b6',
            type: 'fill-in-blank',
            title: 'Aufgabe 18 · Certainty-Effekt',
            points: 2,
            task:
              'Kleine, objektiv unwahrscheinliche Ereignisse werden in der Gewichtungsfunktion pi(p) über-, mittlere und hohe Wahrscheinlichkeiten dagegen unterbewertet; nahe der 100-%-Marke führt die besonders steile Kurve zum sogenannten ... -Effekt.',
            solution: 'Certainty(-Effekt)',
            sourceRef: 'Quelle: Behavioral Finance · BF6 – Prospect Theory und ihre Konsequenzen · Folien 225–235',
          },
          {
            id: 'b7',
            type: 'fill-in-blank',
            title: 'Aufgabe 19 · SMarT-Programm',
            points: 2,
            task:
              'Ein Sparprogramm, das künftige Beitragserhöhungen automatisch an künftige Gehaltssteigerungen koppelt, um gegenwartsgerichtete Präferenzen zu überwinden, heißt ... ("Save More Tomorrow").',
            solution: 'SMarT',
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 24–26',
          },
          {
            id: 'b8',
            type: 'fill-in-blank',
            title: 'Aufgabe 20 · Implizite Risikoprämie',
            points: 2,
            task:
              'Die aus dem beobachteten Marktpreis und den prognostizierten Dividenden rückwärts berechnete Risikoprämie nennt man die ... Risikoprämie.',
            solution: 'implizite (Risikoprämie)',
            sourceRef: 'Quelle: Behavioral Finance · BF9 – Kapitalanlage und Kapitalmarktanomalien · Folien 35–40',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Offene Fragen',
        points: 44,
        tasks: [
          {
            id: 'c1',
            type: 'essay',
            title: 'Aufgabe 21 · Entscheidungsketten und Experimenttypen',
            points: 11,
            task:
              'Beschreibe den Unterschied zwischen der Entscheidungskette der traditionellen Ökonomik und jener der Verhaltensökonomik. Erkläre, aus welchen zwei Komponenten sich die subjektive Risikowahrnehmung zusammensetzt, und nenne die drei Typen ökonomischer Experimente mit je einem ihrer Zwecke.',
            solution:
              'Traditionelle Ökonomik: Objektives Risiko führt bei rational entscheidenden Akteuren direkt zur Entscheidung. Verhaltensökonomik: Zwischen objektivem Risiko und Entscheidung schiebt sich ein zusätzlicher Schritt — die subjektive Risikowahrnehmung. Diese setzt sich aus zwei Komponenten zusammen: der Risikodarstellung (Framing) und der individuellen Risikoeinstellung. Genau dieser Zwischenschritt verzerrt die Entscheidung gegenüber dem rationalen Idealbild. Drei Experimenttypen: Laborexperimente dienen u. a. dazu, bestehende Theorien zu überprüfen; Feldexperimente dienen dazu, Schwächen bestehender Theorien zu finden und neue zu entwickeln; natürliche Experimente dienen dazu, Institutionen hinsichtlich Robustheit und Leistung zu vergleichen. Ergänzend werden Experimente auch eingesetzt, um Politikkonzepte und neue Designs zu testen.',
            gradingHints: [
              'Beide Entscheidungsketten korrekt beschrieben (direkt vs. mit Zwischenschritt)',
              'Subjektive Risikowahrnehmung korrekt als Framing + Risikoeinstellung erklärt',
              'Alle drei Experimenttypen benannt',
              'Mindestens ein sinnvoller Zweck je Experimenttyp genannt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF1 – Einführung · Folien 28–29, 32',
          },
          {
            id: 'c2',
            type: 'case-study',
            title: 'Aufgabe 22 · Priming, Halo-Effekt und WYSIATI',
            points: 11,
            task:
              'Erläutere die Konzepte Priming, Halo-Effekt und WYSIATI ("What you see is all there is"). Illustriere den Priming-Effekt anschließend am Florida-Experiment von Bargh/Chen/Burrows (1996).',
            solution:
              'Priming: die unterschwellige Aktivierung von Assoziationen und sogar Handlungen durch vorher wahrgenommene Reize, ohne dass der Reiz bewusst wahrgenommen wird. Halo-Effekt: eine herausragende Eigenschaft (positiv oder negativ) strahlt auf das Gesamturteil über eine Person oder Sache aus (erster Eindruck). WYSIATI: System 1 konstruiert aus wenigen verfügbaren Informationen eine kohärente Geschichte und ignoriert dabei fehlende Informationen — "was man sieht, ist alles, was es gibt". Florida-Experiment (Bargh/Chen/Burrows 1996): Studierende, die unbewusst mit alterstypischen Begriffen (u. a. Florida, grau, Falte) geprimt wurden, gingen anschließend messbar langsamer aus dem Labor — obwohl ihnen der Reiz selbst nicht bewusst war. Die Kausalkette verläuft von den Wörtern über unbewusste Gedanken/Assoziationen bis zum beobachtbaren Verhalten (langsameres Gehen).',
            gradingHints: [
              'Priming, Halo-Effekt und WYSIATI korrekt definiert',
              'Florida-Experiment korrekt beschrieben (altersbezogene Begriffe → langsameres Gehen)',
              'Priming-Kausalkette (Wörter → Gedanken/Assoziationen → Verhalten) genannt',
              'Unbewusstheit des Reizes als zentrales Merkmal von Priming hervorgehoben',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 50–72',
          },
          {
            id: 'c3',
            type: 'essay',
            title: 'Aufgabe 23 · Bedingte 1/N-Regel und Formularzeilen',
            points: 11,
            task:
              'Erläutere anhand des Vergleichs University of California vs. TWA die bedingte 1/N-Regel bei der Fondsauswahl. Erkläre anschließend, wie die Zahl der Formularzeilen die Zahl der gewählten Fonds als reiner Anker-/Menüeffekt beeinflusst.',
            solution:
              'Teilnehmer wählen typischerweise 3–4 Fonds und verteilen ihr Geld dann gleichmäßig darauf (bedingte 1/N-Regel) — die tatsächliche Aktienquote hängt daher vom Verhältnis Aktien- zu Rentenfonds im angebotenen Menü ab, nicht von einer rationalen Risikoeinschätzung. Bei der University of California (4 festverzinsliche Fonds : 1 Aktienfonds) ergibt sich eine Aktienquote von nur 34 %, bei TWA (1 festverzinslicher Fonds : 5 Aktienfonds) dagegen 75 %: identisches Anlegerverhalten (gleichmäßige Verteilung auf die gewählten Fonds) führt allein durch das Fondsmenü zu völlig unterschiedlichen Risikoprofilen. Auch die Zahl der Formularzeilen wirkt als Anker: Erlaubt das Formular standardmäßig nur bis zu vier Fonds (weitere nur per Zusatzklick), wählen deutlich mehr Teilnehmer genau vier Fonds als bei einem Formular mit acht Zeilen — schon das Layout lenkt die gewählte Fondszahl, unabhängig von der tatsächlichen Diversifikationsabsicht der Anleger.',
            gradingHints: [
              'Bedingte 1/N-Regel korrekt als Verteilung auf die gewählten (nicht alle) Fonds erklärt',
              'UC (34 %) vs. TWA (75 %) korrekt als reiner Menüeffekt eingeordnet',
              'Formularzeilen-Effekt (4 vs. 8 Zeilen) korrekt als Anker beschrieben',
              'Betonung, dass gleiches Verhalten zu unterschiedlichen Ergebnissen führt',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF7 – Altersvorsorge und private Finanzplanung · Folien 27–37',
          },
          {
            id: 'c4',
            type: 'essay',
            title: 'Aufgabe 24 · IPO-Underperformance nach Brav/Gompers',
            points: 11,
            task:
              'Erläutere zwei Erklärungsansätze nach Brav/Gompers (1997) für die langfristige Underperformance von IPOs und erkläre, warum diese Underperformance nicht im Widerspruch zum kurzfristigen Underpricing steht.',
            solution:
              'Zwei Erklärungsansätze nach Brav/Gompers (1997): (1) Negative Performance tritt besonders bei Unternehmen mit geringer Marktkapitalisierung und geringem Verhältnis von Buchwert zu Marktwert auf — die Preisbildung beim Börsengang wurde durch zu optimistische Investoren und Analysten beeinflusst. (2) Werte, die in einer Boom-Phase an die Börse gegangen sind, verzeichnen eine besonders ausgeprägte Underperformance — möglicherweise wird eine Überbewertung beim IPO bewusst ausgenutzt. Kein Widerspruch zum Underpricing: Underpricing ist ein kurzfristiges Phänomen (positive, marktbereinigte Emissionsrendite am ersten Handelstag), Underperformance dagegen ein davon unabhängiges, langfristiges Phänomen über 3–5 Jahre. Die anfängliche Underpricing-Rendite wird bereits nach rund sechs Monaten wieder aufgezehrt, danach entwickelt sich der Kurs schwächer als vergleichbare Unternehmen — beide Effekte beschreiben also unterschiedliche Zeithorizonte desselben IPO-Prozesses und schließen sich nicht gegenseitig aus.',
            gradingHints: [
              'Erklärung 1 (geringe Marktkapitalisierung/niedriges B/M, zu optimistische Investoren) korrekt genannt',
              'Erklärung 2 (Boom-Phase-IPOs, ausgenutzte Überbewertung) korrekt genannt',
              'Underpricing als kurzfristiges, Underperformance als langfristiges Phänomen unterschieden',
              'Hinweis auf die rund sechsmonatige Frist, nach der die Underpricing-Rendite aufgezehrt ist',
            ],
            sourceRef: 'Quelle: Behavioral Finance · BF10 – Behavioral Corporate Finance · Folien 358–361',
          },
        ],
      },
    ],
  },
];

export default exams;
