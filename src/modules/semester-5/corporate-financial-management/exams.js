export const exams = [
  {
    "id": "cfm-grundlagen-training",
    "title": "Training · Einführung, Finanzberichte und Unternehmenswert",
    "label": "Skripte 1–3",
    "description": "Quellenbasiertes Training zu den drei vorliegenden Skripten einschließlich WACC und CAPM. Dauer und Punkte sind für dieses Training festgelegt; es bildet keine vollständige Modulabschlussklausur ab.",
    "durationMinutes": 45,
    "totalPoints": 45,
    "isDemo": false,
    "topics": [
      "Finanzierung und Investition",
      "Finanzberichte und Kennzahlen",
      "Shareholder Value, WACC und CAPM"
    ],
    "instructions": [
      "Bearbeite die Aufgaben schriftlich.",
      "Begründe Antworten und dokumentiere Rechenwege einschließlich Einheiten.",
      "Die reale Modulprüfung dauert laut Einstieg 90 Minuten; dieses Training behandelt nur die bisher vorliegenden Skripte."
    ],
    "sections": [
      {
        "id": "cfm-a",
        "title": "Teil A · Begriffe und Verständnis",
        "points": 15,
        "tasks": [
          {
            "id": "cfm-a1",
            "type": "definition",
            "title": "Finanzierung, Investition und Bilanz",
            "points": 6,
            "task": "Grenze Finanzierung und Investition ab. Ordne beide Begriffe den Bilanzseiten zu und nenne die Bilanzidentität.",
            "solution": "Finanzierung: Bereitstellung von Eigen- und Fremdkapital, Mittelherkunft auf der Passivseite. Investition: Umwandlung von Kapital in Vermögen, Mittelverwendung auf der Aktivseite. Vermögen = Schulden + Eigenkapital.",
            "gradingHints": [
              "Finanzierung 2 P.",
              "Investition 2 P.",
              "Bilanzzuordnung und Identität je 1 P."
            ],
            "sourceRef": "Vorlesung 1 · Folien 10–11; Grundlagen · Folie 7"
          },
          {
            "id": "cfm-a2",
            "type": "single-choice",
            "title": "Gewinn und Zahlungsmittel",
            "points": 4,
            "task": "Welche Aussage trifft zu? A: Abschreibungen sind immer laufende Barauszahlungen. B: Ein positives Nettoergebnis garantiert positive operative Cashflows. C: Eine Kreditaufnahme kann den Barsaldo erhöhen, obwohl operative Cashflows negativ sind. D: Dividenden zählen zu Umsatzerlösen. Begründe deine Wahl.",
            "solution": "C ist richtig. Die Kapitalflussrechnung trennt operative, Investitions- und Finanzierungstätigkeit. Globals höhere Barmittel stammen im Beispiel aus Kreditfinanzierung; Gewinne und operative Zahlungsmittel sind nicht identisch.",
            "gradingHints": [
              "C gewählt: 2 P.",
              "Begründung zur Kreditfinanzierung und Cashflow-Trennung: 2 P."
            ],
            "sourceRef": "Grundlagen · Folien 22–28"
          },
          {
            "id": "cfm-a3",
            "type": "case-study",
            "title": "Eigentum und Kontrolle",
            "points": 5,
            "task": "Erläutere das Agency-Problem bei externem Management und nenne drei im Skript behandelte Erscheinungsformen.",
            "solution": "Kapitalgeber delegieren Kontrolle an das Management. Dieses kann eigene Interessen zulasten der Geldgeber verfolgen. Beispiele: unzureichende Anstrengungen, extravagante Investitionen, Vergünstigungen, Intransparenz, problematische Vergütungssysteme oder Bilanzmanipulation.",
            "gradingHints": [
              "Trennung von Eigentum und Kontrolle: 2 P.",
              "Drei passende Beispiele: je 1 P."
            ],
            "sourceRef": "Grundlagen · Folien 46–47"
          }
        ]
      },
      {
        "id": "cfm-b",
        "title": "Teil B · Kennzahlen im Global-Beispiel",
        "points": 15,
        "tasks": [
          {
            "id": "cfm-b1",
            "type": "calculation",
            "title": "Marktkapitalisierung, KBV und EPS",
            "points": 8,
            "task": "Global hat 3,6 Mio. Aktien zu je 14 EUR, Buch-Eigenkapital von 22,2 Mio. EUR und ein Nettoergebnis von 2,0 Mio. EUR. Berechne Marktkapitalisierung, KBV und EPS. Erkläre den Unterschied zwischen Markt- und Buchwert.",
            "solution": "Marktkapitalisierung = 3,6 × 14 = 50,4 Mio. EUR. KBV = 50,4 / 22,2 ≈ 2,27. EPS = 2,0 / 3,6 ≈ 0,556 EUR je Aktie. Buchwerte beruhen auf bilanzierten Werten/historischen Kosten; Marktwerte spiegeln die Erwartungen der Investoren an künftige Erträge wider.",
            "gradingHints": [
              "Drei Berechnungen mit Einheit: je 2 P.",
              "Markt-/Buchwert verständlich abgegrenzt: 2 P."
            ],
            "sourceRef": "Grundlagen · Folien 12–16, 20"
          },
          {
            "id": "cfm-b2",
            "type": "calculation",
            "title": "Margen vergleichen",
            "points": 7,
            "task": "Global erzielt 186,7 Mio. EUR Umsatz, 33,3 Mio. EUR Bruttogewinn, 10,4 Mio. EUR Betriebsergebnis und 2,0 Mio. EUR Nettoergebnis. Berechne Bruttomarge, operative Marge und Nettoumsatzrendite. Erkläre, warum sie auseinanderliegen.",
            "solution": "Bruttomarge = 33,3 / 186,7 ≈ 17,84 %. Operative Marge = 10,4 / 186,7 ≈ 5,57 %. Nettoumsatzrendite = 2,0 / 186,7 ≈ 1,07 %. Die Ergebnisgrößen berücksichtigen unterschiedliche Aufwendungen; insbesondere operative Aufwendungen, Zinsen und Steuern vermindern nachfolgende Ergebnisstufen.",
            "gradingHints": [
              "Jede Marge mit Ansatz und Ergebnis: 2 P.",
              "Unterschiedliche Ergebnisstufen erläutert: 1 P."
            ],
            "sourceRef": "Grundlagen · Folien 18–19, 29–30"
          }
        ]
      },
      {
        "id": "cfm-c",
        "title": "Teil C · Wertorientierung und Kapitalkosten",
        "points": 15,
        "tasks": [
          {
            "id": "cfm-c1",
            "type": "calculation",
            "title": "Eigenkapitalkosten nach CAPM",
            "points": 7,
            "task": "Verwende das Skriptbeispiel: risikoloser Zins 4 %, Marktrendite 10 %, Beta 1,3. Berechne Marktrisikoprämie und Eigenkapitalkosten. Erläutere, welche Risikoart Beta erfasst.",
            "solution": "Marktrisikoprämie = 10 % − 4 % = 6 %. r_E = 4 % + 1,3 × 6 % = 11,8 %. Beta misst das systematische, nicht diversifizierbare Risiko relativ zum Marktportfolio.",
            "gradingHints": [
              "Risikoprämie: 2 P.",
              "CAPM-Ansatz und Ergebnis: 3 P.",
              "Beta und systematisches Risiko: 2 P."
            ],
            "sourceRef": "Shareholder Value Management · Folien 18–19, 22–23, 28"
          },
          {
            "id": "cfm-c2",
            "type": "open",
            "title": "WACC und Shareholder Value",
            "points": 8,
            "task": "Erkläre das Ziel des Shareholder Value Managements, die WACC-Bestandteile einschließlich Steuerfaktor und die Rolle des Diskontierungszinssatzes für den Barwert künftiger freier Cashflows. Nenne zwei Grenzen historischer Risikoprämien.",
            "solution": "Ziel ist langfristige Steigerung des Marktwerts des Eigenkapitals innerhalb der Gesetze. WACC gewichtet Eigenkapitalkosten und Fremdkapitalkosten mit den jeweiligen Kapitalanteilen; FK-Kosten werden mit (1−Steuersatz) berücksichtigt. Bei unveränderten positiven künftigen Cashflows sinkt deren Barwert bei höherem Diskontierungssatz. Historische Risikoprämien unterliegen Noise/Schätzunsicherheit und sind möglicherweise nicht repräsentativ für heutige Erwartungen.",
            "gradingHints": [
              "Ziel: 2 P.",
              "Gewichtung und Steuerfaktor: 3 P.",
              "Diskontierungswirkung: 1 P.",
              "Zwei historische Grenzen: je 1 P."
            ],
            "sourceRef": "Shareholder Value Management · Folien 4–5, 11–14, 33"
          }
        ]
      }
    ]
  }
];
