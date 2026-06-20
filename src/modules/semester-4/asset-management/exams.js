export const exams = [
  {
    id: 'asset-management-demo-exam',
    title: 'Demo-Probeklausur Asset Management',
    label: 'Demo',
    description:
      'Beispielprüfung zur technischen Demonstration des Prüfungsbereichs. Die Aufgaben sind Dummy-Aufgaben und ersetzen keine fachliche Klausurvorbereitung.',
    durationMinutes: 20,
    totalPoints: 24,
    isDemo: true,
    topics: [
      'Demo: Begriffe',
      'Demo: Rechenaufgabe',
      'Demo: Fallstudie',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich auf Papier.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
      'Bei Rechenaufgaben ist der Rechenweg relevant.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Grundlagen',
        points: 7,
        tasks: [
          {
            id: 'a1',
            type: 'single-choice',
            title: 'Aufgabe 1 · Single-Choice-Demo',
            points: 3,
            task:
              'Welche Antwort ist als Platzhalter korrekt markiert? Notiere den Buchstaben der aus deiner Sicht passenden Antwort: A, B, C oder D.',
            solution:
              'Demo-Lösung: Antwort B ist als korrekter Platzhalter hinterlegt.',
            gradingHints: [
              'Auswahl eindeutig notiert',
              'Demo-Charakter der Aufgabe erkannt',
            ],
            sourceRef: 'Quelle: Asset Management · Demo-Prüfung · Platzhalter',
          },
          {
            id: 'a2',
            type: 'multiple-choice',
            title: 'Aufgabe 2 · Mehrfachauswahl-Demo',
            points: 4,
            task:
              'Welche Aussagen sind als Platzhalter korrekt markiert? Notiere alle passenden Antwortbuchstaben. Zur Auswahl stehen A, B, C und D.',
            solution:
              'Demo-Lösung: Aussage A und Aussage C sind als korrekte Platzhalter hinterlegt.',
            gradingHints: [
              'Alle richtigen Optionen genannt',
              'Keine zusätzliche falsche Option gewählt',
            ],
            sourceRef: 'Quelle: Asset Management · Demo-Prüfung · Platzhalter',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung',
        points: 17,
        tasks: [
          {
            id: 'b1',
            type: 'definition',
            title: 'Aufgabe 3 · Kurzantwort-Demo',
            points: 5,
            task:
              'Formuliere in einem Satz, woran du eine Demo-Aufgabe erkennst.',
            solution:
              'Eine Demo-Aufgabe ist klar als Demo oder Platzhalter gekennzeichnet und enthält keine fachliche Klausurbehauptung.',
            gradingHints: [
              'Demo-Kennzeichnung genannt',
              'Platzhalter-Charakter genannt',
              'Antwort in einem klaren Satz formuliert',
            ],
            sourceRef: 'Quelle: Asset Management · Demo-Prüfung · Platzhalter',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 4 · Rechen-Demo',
            points: 5,
            task:
              'Addiere 40 und 2. Notiere das Ergebnis und den Rechenweg.',
            solution:
              '40 + 2 = 42. Das Ergebnis lautet 42.',
            gradingHints: [
              'Rechenweg angegeben',
              'Endergebnis korrekt',
            ],
            sourceRef: 'Quelle: Asset Management · Demo-Prüfung · Platzhalter',
          },
          {
            id: 'b3',
            type: 'case-study',
            title: 'Aufgabe 5 · Fallstudien-Demo',
            points: 7,
            task:
              'Skizziere, wie du eine echte Klausurfrage aus einem Skript ableiten würdest. Gehe dabei auf Quelle, erwartete Lösung und den Umgang mit Annahmen ein.',
            solution:
              'Eine echte Aufgabe sollte aus einer benannten Quelle abgeleitet, mit einer transparenten Musterlösung versehen und ohne unmarkierte Annahmen formuliert werden. Unsichere Inhalte müssen als unsicher markiert werden.',
            gradingHints: [
              'Quelle der Aufgabe benannt',
              'Erwartete Musterlösung erwähnt',
              'Umgang mit Annahmen oder Unsicherheiten beschrieben',
            ],
            sourceRef: 'Quelle: Asset Management · Demo-Prüfung · Platzhalter',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-alternative-assetklassen-exam',
    title: 'Probeklausur Kapitel 3 · Alternative Assetklassen',
    label: 'Kapitel 3',
    description:
      'Fachliche Probeklausur zu Hedge Funds, Immobilien, Rohstoffen und Digital Assets auf Basis von Kapitel 3.',
    durationMinutes: 45,
    totalPoints: 48,
    isDemo: false,
    topics: [
      'Hedge Funds',
      'Immobilien und Immobilienindizes',
      'Rohstoffe und Futures',
      'Digital Assets',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Abgrenzung',
        points: 16,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Alternative Assetklassen',
            points: 5,
            task:
              'Grenze traditionelle und alternative Assetklassen anhand der Systematisierung aus Kapitel 3 ab und nenne je drei Beispiele.',
            solution:
              'Traditionelle Assetklassen sind standardisierte Anlagen wie Aktien, Anleihen, Geldmarktinstrumente, Währungen, Derivate und Fonds. Alternative Assetklassen sind nicht standardisierte Anlagen wie Immobilien, Hedge Funds, Private Equity/Venture Capital, Rohstoffe, Volatilität oder Sammlerstücke.',
            gradingHints: [
              'Unterscheidung standardisiert/nicht standardisiert genannt',
              'Mindestens drei traditionelle Beispiele korrekt',
              'Mindestens drei alternative Beispiele korrekt',
              'Keine externen oder erfundenen Kategorien als Kernantwort',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folie 53',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Hedge-Fund-Merkmal',
            points: 3,
            task:
              'Welche Aussage beschreibt Hedge Funds nach Kapitel 3 am besten? A: Sie verfolgen ausschließlich den Marktindex. B: Sie suchen absolute Performance unabhängig vom Gesamtmarkt. C: Sie dürfen keine Derivate einsetzen. D: Sie unterliegen immer strengeren Anforderungen als traditionelle Investmentfonds.',
            solution:
              'Antwort B ist korrekt. Hedge Funds suchen absolute Performance unabhängig vom Gesamtmarkt und besitzen hohe Strategiefreiheit.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Absolute-Return-Logik korrekt verstanden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folie 55',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Anteilseigneraktivismus',
            points: 4,
            task:
              'Welche Maßnahmen nennt Kapitel 3 als Formen des Anteilseigneraktivismus? A: Verkauf unrentabler Bereiche. B: Dividendenerhöhungen oder Aktienrückkäufe durch geringere Kapitalbindung. C: Drängen auf Abberufung von Vorstand oder Aufsichtsrat. D: Vollständiger Verzicht auf Einflussnahme bei schlechter Performance.',
            solution:
              'Korrekt sind A, B und C. D widerspricht der Rolle aktiver Finanzinvestoren.',
            gradingHints: [
              'Alle drei korrekten Optionen genannt',
              'Keine falsche Option D gewählt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folie 56',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Blockchain und Kryptowährungen',
            points: 4,
            task:
              'Definiere Blockchain und erkläre, warum Kryptowährungen laut Kapitel 3 die ökonomischen Geldfunktionen derzeit noch nicht vollständig erfüllen.',
            solution:
              'Blockchain ist eine technische Lösung, um Daten innerhalb einer digitalen Infrastruktur ohne zentrale Instanz nachvollziehbar und manipulationssicher zu verwalten. Kryptowährungen erfüllen die Geldfunktionen derzeit noch nicht vollständig, insbesondere wegen enorm hoher Wertschwankungen beziehungsweise Volatilität.',
            gradingHints: [
              'Dezentrale Datenverwaltung ohne zentrale Instanz genannt',
              'Nachvollziehbarkeit und Manipulationssicherheit genannt',
              'Hohe Volatilität als Hauptgrund genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folien 94-96',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Vergleich',
        points: 32,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 5 · Hedge-Fund-Strategien',
            points: 8,
            task:
              'Vergleiche marktneutrale, ereignisorientierte und direktionale Hedge-Fund-Strategien. Nenne jeweils die Kernidee und ein Beispiel aus Kapitel 3.',
            solution:
              'Marktneutrale beziehungsweise Relative-Value-Strategien nutzen Fehlbewertungen einzelner Wertpapiere und eliminieren Marktrisiken wie Beta oder Duration weitgehend; Beispiel: Equity Market Neutral. Ereignisorientierte Strategien nutzen angekündigte oder erwartete Ereignisse und Fehleinschätzungen; Beispiele: Merger Arbitrage oder Distressed Securities. Direktionale Strategien bauen Positionen nach Markteinschätzung auf oder ab; Beispiele: Long-Short Equity mit Netto-Long-Position oder Global Macro Funds.',
            gradingHints: [
              'Alle drei Strategiegruppen unterschieden',
              'Jeweilige Kernidee korrekt',
              'Mindestens ein passendes Beispiel pro Gruppe',
              'Marktneutral nicht mit direktionaler Netto-Long-Position verwechselt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folien 57-60',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 6 · Immobilienrisiko',
            points: 8,
            task:
              'Ordne Core/Core Plus, Value-Added und Opportunistic entlang von Risiko, Haltedauer und typischen Immobilienmerkmalen ein.',
            solution:
              'Core/Core Plus weist sehr geringes Risiko durch stabilen Cashflow und liquide Märkte auf, mit 8-15 Jahren Haltedauer, hochwertigen Standardimmobilien, hohem Vermietungsgrad, langfristigen Mietverträgen und Top-Lagen. Value-Added besitzt höheres Risiko durch geringeren oder volatileren Cashflow, 4-7 Jahre Haltedauer und Standard- oder Sonderimmobilien mit finanziellen, baulichen oder managementspezifischen Risikoaspekten. Opportunistic hat sehr hohes Risiko, 1-4 Jahre Haltedauer, häufig hohen Investitionsstau, kurze oder komplexe Mietverträge und B-/C-Lagen beziehungsweise illiquidere Märkte.',
            gradingHints: [
              'Risikograd der drei Kategorien korrekt abgestuft',
              'Haltedauern korrekt zugeordnet',
              'Mieter-, Lage- oder Objektmerkmale sinnvoll einbezogen',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folie 69',
          },
          {
            id: 'b3',
            type: 'definition',
            title: 'Aufgabe 7 · Smoothing-Effekt',
            points: 6,
            task:
              'Erkläre den Smoothing-Effekt bei Immobilienindizes und seine Bedeutung für die Interpretation von Volatilität.',
            solution:
              'Der Smoothing-Effekt entsteht, weil Immobilienindizes häufig auf theoretischen Bewertungen statt auf tatsächlichen Transaktionen beruhen. Bewertungen orientieren sich an früheren Objektbewertungen und unterschiedliche Bewertungszeitpunkte einzelner Objekte glätten die Zeitreihe zusätzlich. Dadurch sinkt die gemessene Volatilität; sie darf nicht automatisch als tatsächliche geringe Marktschwankung interpretiert werden.',
            gradingHints: [
              'Appraisal-Based-Bewertungen als Ursache genannt',
              'Anker-Effekt oder frühere Objektbewertungen genannt',
              'Unterschiedliche Bewertungszeitpunkte als zusätzlicher Glättungsgrund genannt',
              'Konsequenz für gemessene Volatilität korrekt beschrieben',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folien 78-81',
          },
          {
            id: 'b4',
            type: 'case-study',
            title: 'Aufgabe 8 · Rohstoff-Futures und Rollrendite',
            points: 10,
            task:
              'Ein Anleger hält eine Long-Futures-Position in Öl und möchte vor Fälligkeit in einen länger laufenden Kontrakt rollen. Erkläre, wie sich Backwardation und Contango auf die Rollrendite und den Break-even auswirken.',
            solution:
              'Bei Backwardation sind Futures-Kurse niedriger, je länger die Laufzeit ist. Der Anleger verkauft den nahen Kontrakt zu einem höheren Preis und reinvestiert in einen länger laufenden, günstigeren Kontrakt. Dadurch kann er eine positive Rollrendite erzielen und der Break-even sinkt. Bei Contango sind längere Futures teurer; der Anleger muss teurer reinvestieren, wodurch eine negative Rollwirkung entsteht und der Break-even steigt.',
            gradingHints: [
              'Backwardation korrekt als fallende Futures-Kurse mit längerer Laufzeit beschrieben',
              'Positive Rollwirkung für Long-Investor in Backwardation erklärt',
              'Contango korrekt als teurere längere Futures beschrieben',
              'Break-even-Effekt in beiden Fällen genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 3 · Folien 87-90',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-mathemat-strat-grundlagen-exam',
    title: 'Probeklausur Kapitel 4 · Mathematische und statistische Grundlagen',
    label: 'Kapitel 4',
    description:
      'Fachliche Probeklausur zu Durchschnittswerten, Renditelogik, Duration, Volatilität, Value-at-Risk sowie Kovarianz und Korrelation auf Basis von Kapitel 4 (Folien 97–152).',
    durationMinutes: 60,
    totalPoints: 55,
    isDemo: false,
    topics: [
      'Durchschnittswerte und Renditelogik',
      'Erwartete Rendite und Anleihebewertung',
      'Duration, Modified Duration und Konvexität',
      'Volatilität, Normalverteilung, Schiefe und Kurtosis',
      'Value-at-Risk',
      'Kovarianz, Korrelation und Diversifikation',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und zeige bei Rechenaufgaben den vollständigen Lösungsweg.',
      'Bei Auswahlaufgaben nur die geforderten Antwortbuchstaben notieren.',
      'Zwischen verschiedenen Mittelwerten sorgfältig unterscheiden — die Auswahl des richtigen Durchschnitts ist prüfungsrelevant.',
      'Nutze die Musterlösungen erst nach der vollständigen Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Definitionen',
        points: 17,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Arithmetisches vs. geometrisches Mittel',
            points: 5,
            task:
              'Unterscheide arithmetisches Mittel und geometrisches Mittel als Renditekennzahlen. Nenne jeweils die Einsatzlogik und erkläre anhand des Skriptbeispiels (100 EUR → 200 EUR → 100 EUR), warum das arithmetische Mittel bei mehrperiodiger Wiederanlage irreführen kann.',
            solution:
              'Das arithmetische Mittel ergibt sich als Summe der Beobachtungswerte geteilt durch die Zahl der Beobachtungen. Es ist geeignet für durchschnittliche Einperiodenrenditen ohne Wiederanlage, reagiert aber empfindlich auf Extremwerte. Das geometrische Mittel berücksichtigt Zinseszinseffekte und ist der korrekte Durchschnitt, wenn Renditen über mehrere Perioden wiederangelegt werden. Im Skriptbeispiel: Periode 1 +100%, Periode 2 −50%. Arithmetisch ergibt sich (+100% + (−50%)) / 2 = +25%, was eine positive Rendite suggeriert. Geometrisch ergibt sich (1,00 · 0,50)^(1/2) − 1 = 0% — korrekt, weil das Kapital wieder auf den Anfangswert von 100 EUR fällt. Das arithmetische Mittel überschätzt die tatsächliche Mehrperiodenrendite systematisch.',
            gradingHints: [
              'Arithmetisches Mittel als Einperiodenrendite ohne Wiederanlage korrekt eingeordnet',
              'Geometrisches Mittel als Mehrperiodenrendite mit Wiederanlage korrekt eingeordnet',
              'Skriptbeispiel: Einzelrenditen +100% und −50% korrekt genannt',
              'Arithmetisches Ergebnis +25% vs. geometrisches Ergebnis 0% korrekt berechnet und Diskrepanz erklärt',
              'Systematische Überschätzung durch arithmetisches Mittel bei Wiederanlage benannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 99–104',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Median und Modus',
            points: 3,
            task:
              'Welche Aussage beschreibt den Median nach Kapitel 4 am besten? A: Der Median ist der häufigste Wert einer Verteilung. B: Der Median ist der mittlere Wert einer der Größe nach sortierten Beobachtungsgruppe. C: Der Median ist empfindlich gegenüber Extremwerten. D: Der Median entspricht immer dem arithmetischen Mittel.',
            solution:
              'Antwort B ist korrekt. Der Median ist der mittlere Wert einer der Größe nach sortierten Beobachtungsgruppe. Der häufigste Wert ist der Modus (Antwort A). Median ist gerade wegen seiner Robustheit gegenüber Extremwerten nützlich, reagiert also nicht empfindlich auf sie (Antwort C falsch). Median und arithmetisches Mittel stimmen nur bei symmetrischen Verteilungen überein (Antwort D falsch).',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Unterschied zu Modus (häufigster Wert) verstanden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 99–104',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Einflussfaktoren auf die Zinssensitivität einer Anleihe',
            points: 4,
            task:
              'Welche der folgenden Aussagen zur Zinssensitivität von Anleihen sind nach Kapitel 4 korrekt? A: Je länger die Laufzeit, desto zinssensitiver die Anleihe. B: Je höher der Coupon, desto zinssensitiver die Anleihe. C: Zero-Bonds reagieren besonders stark auf Zinsänderungen. D: Die Duration steigt ceteris paribus mit der Restlaufzeit. E: Eine höhere Konvexität ist bei gleicher Modified Duration nachteilig.',
            solution:
              'Korrekt sind A, C und D. Zu B: Ein höherer Coupon erzeugt frühere Cashflows und reduziert damit die Zinssensitivität — niedrigere Kupons erhöhen die Sensitivität, nicht höhere. Zu E: Bei gleicher Modified Duration ist höhere Konvexität nach dem Skript wertvoller, nicht nachteilig.',
            gradingHints: [
              'A korrekt gewählt: längere Laufzeit erhöht Zinssensitivität',
              'C korrekt gewählt: Zero-Bonds besonders sensitiv',
              'D korrekt gewählt: Duration steigt mit Restlaufzeit',
              'B nicht gewählt: höherer Coupon reduziert Zinssensitivität',
              'E nicht gewählt: höhere Konvexität ist vorteilhaft',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 108–118',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Value-at-Risk: Definition und Interpretation',
            points: 5,
            task:
              'Definiere den Value-at-Risk (VaR) und interpretiere folgende Aussage aus dem Skript korrekt: "VaR von 1,5 Mio. EUR pro Tag bei 5% Wahrscheinlichkeit." Erkläre außerdem, was der VaR ausdrücklich nicht beschreibt.',
            solution:
              'Der VaR ist eine Schätzung des Verlustbetrags, von dem erwartet wird, dass er mit einer bestimmten Wahrscheinlichkeit in einem bestimmten Zeitraum nicht überschritten wird. Die Aussage bedeutet: Mit 95% Wahrscheinlichkeit beträgt der Portfolioverlust an einem Handelstag nicht mehr als 1,5 Mio. EUR. Gleichzeitig besteht eine 5%ige Wahrscheinlichkeit, dass der Verlust 1,5 Mio. EUR oder mehr erreicht. Der VaR beschreibt ausdrücklich keinen Maximalverlust — der tatsächliche Verlust kann deutlich größer sein.',
            gradingHints: [
              'VaR als Verlustschätzung zu einem Konfidenzniveau in einem bestimmten Zeithorizont definiert',
              '95%-Wahrscheinlichkeit und 5%-Restrisiko korrekt zugeordnet',
              '1,5 Mio. EUR als Verlustniveau, nicht als Maximalverlust interpretiert',
              'Kein Maximalverlust: tatsächlicher Verlust kann überschritten werden, explizit genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 137–145',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Rechenaufgaben',
        points: 22,
        tasks: [
          {
            id: 'b1',
            type: 'calculation',
            title: 'Aufgabe 5 · Erwartete Rendite aus Szenarien',
            points: 6,
            task:
              'Die "Birne-Aktie" aus dem Skript hat folgende Szenarien: Szenario 1: Kurs steigt von 100 EUR auf 140 EUR, Eintrittswahrscheinlichkeit 25%. Szenario 2: Kurs steigt von 100 EUR auf 110 EUR, Eintrittswahrscheinlichkeit 50%. Szenario 3: Kurs fällt von 100 EUR auf 80 EUR, Eintrittswahrscheinlichkeit 25%. (a) Berechne die Rendite in jedem Szenario. (b) Berechne die erwartete Rendite μ. (c) Interpretiere das Ergebnis.',
            solution:
              '(a) Szenario 1: (140 − 100) / 100 = +40%. Szenario 2: (110 − 100) / 100 = +10%. Szenario 3: (80 − 100) / 100 = −20%.\n(b) μ = Σ pᵢ · rᵢ = 0,25 · 40% + 0,50 · 10% + 0,25 · (−20%) = 10% + 5% − 5% = 10%.\n(c) Die erwartete Rendite entspricht dem wahrscheinlichkeitsgewichteten Durchschnitt aller Szenarien und bildet die Grundlage der Anlageentscheidung unter Unsicherheit.',
            gradingHints: [
              'Alle drei Einzelrenditen korrekt berechnet: +40%, +10%, −20%',
              'Gewichtungsformel μ = Σ pᵢ · rᵢ angewandt',
              'Beiträge: 10%, 5%, −5% korrekt ermittelt',
              'Erwartete Rendite als 10% korrekt summiert',
              'Interpretation: probabilistischer Erwartungswert, Grundlage Anlageentscheidung',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 105–107',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 6 · Standardabweichung und Annualisierung',
            points: 6,
            task:
              'Ein Wertpapier weist folgende tägliche Renditen (in %) über 5 Handelstage auf: +1,0; −0,5; +2,0; −1,0; +0,5. (a) Berechne den arithmetischen Mittelwert der täglichen Renditen. (b) Berechne die tägliche Standardabweichung σ (Stichprobenformel, Nenner n−1). (c) Annualisiere die Standardabweichung auf Jahresbasis (250 Handelstage). Zeige alle Rechenschritte.',
            solution:
              '(a) Mittelwert r̄ = (1,0 + (−0,5) + 2,0 + (−1,0) + 0,5) / 5 = 2,0 / 5 = 0,4%.\n(b) Abweichungen: +0,6; −0,9; +1,6; −1,4; +0,1. Quadrate: 0,36; 0,81; 2,56; 1,96; 0,01. Summe = 5,70. Varianz s² = 5,70 / 4 = 1,425 (%²). σ = √1,425 ≈ 1,194%.\n(c) σ_ann = √250 · 1,194% ≈ 18,88%.',
            gradingHints: [
              'Mittelwert 0,4% korrekt berechnet',
              'Stichprobenformel mit Nenner n−1 = 4 verwendet',
              'Alle fünf quadrierten Abweichungen korrekt ermittelt',
              'Varianz 1,425 korrekt',
              'Tägliche Standardabweichung ≈ 1,194% korrekt (Rundungstoleranz ±0,01%)',
              'Annualisierung mit √250 korrekt angewandt; Ergebnis ≈ 18,88% (Rundungstoleranz ±0,5%)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 119–125',
          },
          {
            id: 'b3',
            type: 'calculation',
            title: 'Aufgabe 7 · Kovarianz und Korrelation zweier Aktien',
            points: 6,
            task:
              'Zwei Aktien X und Y weisen über 4 Perioden folgende Renditen auf: Periode 1: rₓ = +3%, r_y = +5%. Periode 2: rₓ = −1%, r_y = −2%. Periode 3: rₓ = +4%, r_y = +6%. Periode 4: rₓ = −2%, r_y = −3%. (a) Berechne die Mittelwerte μₓ und μ_y. (b) Berechne die Kovarianz cov_xy (Stichprobenformel, Nenner n−1). (c) Berechne die Standardabweichungen σₓ und σ_y. (d) Berechne den Korrelationskoeffizienten ρ_xy und interpretiere das Ergebnis für die Diversifikation.',
            solution:
              '(a) μₓ = 1,0%, μ_y = 1,5%.\n(b) Kreuzprodukte: 7,0; 7,0; 13,5; 13,5. Summe = 41,0. cov_xy = 41,0 / 3 ≈ 13,667 (%²).\n(c) σₓ ≈ 2,944%, σ_y ≈ 4,655%.\n(d) ρ_xy = 13,667 / (2,944 · 4,655) ≈ 0,997. Interpretation: nahezu perfekt positive Korrelation — kaum Diversifikationseffekt.',
            gradingHints: [
              'Mittelwerte μₓ = 1,0% und μ_y = 1,5% korrekt',
              'Stichprobenformel mit Nenner n−1 = 3 verwendet',
              'Alle vier Kreuzprodukte korrekt berechnet und summiert',
              'Kovarianz ≈ 13,667 korrekt (Rundungstoleranz ±0,1)',
              'Standardabweichungen σₓ ≈ 2,944% und σ_y ≈ 4,655% korrekt (Toleranz ±0,05%)',
              'Korrelationskoeffizient ≈ 0,997 korrekt berechnet',
              'Interpretation: nahe +1, kaum Diversifikationseffekt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 146–152',
          },
          {
            id: 'b4',
            type: 'calculation',
            title: 'Aufgabe 8 · VaR-Berechnung und Zeitskalierung',
            points: 4,
            task:
              'Ein Portfolio hat eine tägliche Standardabweichung von σ_Tag = 0,8% und einen Erwartungswert von näherungsweise 0. (a) Berechne den parametrischen 1-Tages-VaR auf dem 95%-Konfidenzniveau (z₉₅% = 1,645). (b) Skaliere den 1-Tages-VaR auf einen 10-Tages-VaR mittels der Wurzel-T-Skalierung. (c) Was ändert sich, wenn das Konfidenzniveau auf 99% angehoben wird (z₉₉% = 2,326)?',
            solution:
              '(a) VaR = 1,645 · 0,8% = 1,316%.\n(b) VaR₁₀ = 1,316% · √10 ≈ 4,161%.\n(c) VaR₉₉ = 2,326 · 0,8% = 1,861%. Höheres Konfidenzniveau ergibt höheren VaR; Vergleichbarkeit nur bei gleichem Niveau.',
            gradingHints: [
              '1-Tages-VaR = 1,645 · 0,8% = 1,316% korrekt',
              'Wurzel-T-Skalierung korrekt angewandt: √10 ≈ 3,162',
              '10-Tages-VaR ≈ 4,161% korrekt (Rundungstoleranz ±0,05%)',
              '99%-VaR = 2,326 · 0,8% = 1,861% korrekt',
              'Erklärung: höheres Konfidenzniveau führt zu höherem VaR; Vergleichbarkeit nur bei gleichem Niveau',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 137–145',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Anwendung und Transfer',
        points: 16,
        tasks: [
          {
            id: 'c1',
            type: 'open',
            title: 'Aufgabe 9 · Duration und Konvexität im Portfolioeinsatz',
            points: 6,
            task:
              'Eine Anlegerin hält zwei Anleihen mit identischer Modified Duration, aber unterschiedlicher Konvexität. Erkläre (a) was Modified Duration und Konvexität jeweils aussagen, (b) warum die Anlegerin die Anleihe mit höherer Konvexität bevorzugen sollte und (c) warum die lineare Näherung über Modified Duration allein bei großen Zinsänderungen unzureichend ist.',
            solution:
              '(a) Modified Duration: ΔK/K ≈ −MD · Δr — gibt die prozentuale Kursveränderung bei einer Zinsänderung um einen Prozentpunkt an. Konvexität beschreibt die Krümmung der Kurs-Rendite-Beziehung.\n(b) Bei gleichem MD: Sinkt die Renditeforderung, steigt der Kurs der konvexeren Anleihe überproportional. Steigt sie, fällt ihr Kurs unterproportional. Höhere Konvexität ist bei gleicher MD wertvoller.\n(c) Die lineare Näherung unterschätzt den Kursgewinn bei Zinssenkungen und überschätzt den Kursverlust bei Zinserhöhungen. Erst die Konvexitätskorrektur ΔK/K ≈ −MD · Δr + 0,5 · C · (Δr)² erfasst den nichtlinearen Effekt.',
            gradingHints: [
              'Modified Duration korrekt als Kurssensitivität (ΔK/K ≈ −MD · Δr) beschrieben',
              'Konvexität korrekt als Krümmung der Kurs-Rendite-Beziehung definiert',
              'Asymmetrischer Vorteil höherer Konvexität erklärt: mehr Kursgewinn, weniger Kursverlust',
              'Formel ΔK/K ≈ −MD · Δr + 0,5 · C · (Δr)² als Konvexitätskorrektur genannt',
              'Begründung: lineare Näherung nur für kleine Δr ausreichend',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 108–118',
          },
          {
            id: 'c2',
            type: 'case-study',
            title: 'Aufgabe 10 · Normalverteilung, Schiefe und Kurtosis im Risikokontext',
            points: 5,
            task:
              'Ein Fondsmanager wertet die Renditeverteilung zweier Portfolios aus. Portfolio A ist normalverteilt (μ = 6%, σ = 10%, Schiefe = 0, Kurtosis = 3). Portfolio B weist dieselbe μ und σ auf, aber Schiefe = −0,8 und Kurtosis = 5,2. (a) Erkläre, welches Portfolio bei gleichen Lage- und Streuungskennzahlen risikoreicher ist und warum. (b) Was bedeutet Linksschiefe für die Extremverlustwahrscheinlichkeit? (c) Was folgt aus Kurtosis > 3 für die Güte des VaR-Modells?',
            solution:
              '(a) Portfolio B ist risikoreicher: negative Schiefe und Kurtosis > 3 erhöhen die Wahrscheinlichkeit extremer negativer Ergebnisse.\n(b) Linksschiefe: Mean < Median < Modus — extreme negative Renditen treten häufiger auf als bei Normalverteilung.\n(c) Kurtosis > 3 signalisiert Fat Tails: VaR-Modelle mit Normalverteilungsannahme unterschätzen die Extremverlustwahrscheinlichkeit systematisch.',
            gradingHints: [
              'Portfolio B korrekt als risikoreicher identifiziert',
              'Linksschiefe und Kurtosis > 3 als Begründung genannt',
              'Linksschiefe: Mean < Median < Modus und erhöhte Extremverlustgefahr erklärt',
              'Kurtosis > 3: Fat Tails und Unterschätzung durch Normalverteilungsannahme beschrieben',
              'Skript-Aussage einbezogen: σ nur bei Normalverteilung geeignet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 126–136',
          },
          {
            id: 'c3',
            type: 'case-study',
            title: 'Aufgabe 11 · Diversifikation und Korrelation',
            points: 5,
            task:
              'Ein Portfoliomanager möchte durch Hinzunahme einer dritten Aktie das Portfoliorisiko senken. Er hat drei Kandidaten: Aktie Alpha (ρ = +0,95), Aktie Beta (ρ = +0,10) und Aktie Gamma (ρ = −0,60). (a) Ordne die drei Aktien nach ihrem Diversifikationspotenzial und begründe die Rangfolge. (b) Erkläre den Kernmerksatz: "Diversifikation entsteht nicht dadurch, dass viele Assets gehalten werden, sondern dadurch, dass ihre Renditen nicht perfekt positiv miteinander korreliert sind." (c) Weise auf die Einschränkung des Skripts bezüglich der Stabilität von Korrelationen hin.',
            solution:
              '(a) Rangfolge: Gamma (ρ = −0,60) > Beta (ρ = +0,10) > Alpha (ρ = +0,95). Negativste Korrelation bietet maximalen Diversifikationseffekt.\n(b) Risikoreduktion entsteht durch ρ < +1, nicht durch bloße Anzahl der Positionen. Bei ρ = +1 addiert sich das Risiko linear — kein Effekt.\n(c) Das Skript weist darauf hin, dass Korrelationen schwanken können; in Krisenphasen steigen sie oft an, was den Diversifikationseffekt reduziert.',
            gradingHints: [
              'Rangfolge Gamma > Beta > Alpha mit Begründung korrekt',
              'Kernmerksatz: Diversifikation durch ρ < +1, nicht durch bloße Anzahl erklärt',
              'Extremfall ρ = +1 (kein Effekt) korrekt eingeordnet',
              'Instabilität von Korrelationen als Einschränkung aus dem Skript genannt',
              'Krisenphasen als Beispiel für steigende Korrelationen sinnvoll erwähnt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 4 · Folien 146–152',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-portfoliotheorie-exam',
    title: 'Probeklausur Kapitel 5 · Grundlagen der Portfoliotheorie',
    label: 'Kapitel 5',
    description:
      'Fachliche Probeklausur zu Markowitz-Portfoliotheorie, Diversifikation, Effizienzlinie, Minimum-Varianz-Portfolio, Tobin-Separation, CML, CAPM, SML sowie Multifaktormodellen und APT auf Basis von Kapitel 5.',
    durationMinutes: 60,
    totalPoints: 55,
    isDemo: false,
    topics: [
      'Markowitz und Zwei-Wertpapier-Portfolio',
      'Diversifikation und Risikoarten',
      'Effizienzkurve und Minimum-Varianz-Portfolio',
      'Tobin-Separation und Capital Market Line',
      'CAPM, Beta und Security Market Line',
      'Multifaktormodelle und APT',
    ],
    instructions: [
      'Bearbeite alle drei Teile vollständig und begründe deine Antworten knapp, aber nachvollziehbar.',
      'Bei Rechenaufgaben ist der vollständige Rechenweg verpflichtend; nur ein Endergebnis ohne Weg ergibt maximal die Hälfte der Punkte.',
      'Bei Auswahlaufgaben genügt die Angabe des Buchstabens; Mehrfachantworten nur bei expliziter Aufforderung.',
      'Nutze die Musterlösungen erst nach vollständiger Bearbeitung zur Selbstkontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Definitionen',
        points: 17,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Grundidee der Portfoliotheorie nach Markowitz',
            points: 4,
            task:
              'Erkläre in maximal vier Sätzen die Grundidee der Portfoliotheorie nach Harry M. Markowitz. Gehe dabei auf die drei zentralen Inputgrößen ein, die eine Rendite-Risiko-Kombination eines Portfolios bestimmen.',
            solution:
              'Markowitz begründete die moderne Portfoliotheorie als systematische Handlungsanweisung zur bestmöglichen Kombination von Anlagealternativen. Die entscheidenden Inputgrößen sind die erwarteten Renditen der Einzelanlagen, ihre Volatilitäten als Risikomaß und die Korrelationskoeffizienten zwischen den Anlagen. Der zentrale Gedanke lautet: Risiko kann reduziert werden, wenn ein Portfolio nicht nur aus Wertpapieren besteht, die hoch miteinander korreliert sind. Rendite ist damit eine gewichtete Summe der Einzelrenditen, während das Risiko zusätzlich von der Kovarianz der Assets untereinander abhängt.',
            gradingHints: [
              'Markowitz als Begründer der modernen Portfoliotheorie genannt',
              'Alle drei Inputgrößen genannt: erwartete Renditen, Volatilitäten, Korrelationen',
              'Zusammenhang zwischen Korrelation und Diversifikationseffekt korrekt erläutert',
              'Unterschied zwischen linearer Renditenberechnung und nichtlinearer Risikoberechnung angesprochen',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 153–157',
          },
          {
            id: 'a2',
            type: 'definition',
            title: 'Aufgabe 2 · Systematisches vs. unsystematisches Risiko',
            points: 5,
            task:
              'Grenze systematisches von unsystematischem Risiko ab. Nenne je zwei Beispiele für Quellen des jeweiligen Risikotyps und erläutere, welches der beiden Risiken durch Diversifikation vermieden werden kann und warum.',
            solution:
              'Systematisches Risiko, auch Marktrisiko genannt, entsteht durch marktweite Einflüsse, die alle Wertpapiere gemeinsam betreffen, zum Beispiel Konjunkturschwankungen oder Zinsniveauveränderungen. Es ist nicht diversifizierbar, weil alle Wertpapiere gleichzeitig betroffen sind. Unsystematisches Risiko entsteht durch Ereignisse, die nur ein einzelnes Unternehmen betreffen, zum Beispiel ein Managementwechsel oder ein Produktrückruf. Es kann in großen Portfolios wegdiversifiziert werden. Deshalb wird nur das systematische Risiko durch eine Risikoprämie entlohnt.',
            gradingHints: [
              'Systematisches Risiko korrekt als nicht diversifizierbar beschrieben',
              'Mindestens ein konkretes Beispiel für systematisches Risiko genannt',
              'Unsystematisches Risiko korrekt als diversifizierbar beschrieben',
              'Mindestens ein konkretes Beispiel für unsystematisches Risiko genannt',
              'Begründung, warum nur systematisches Risiko entlohnt wird',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 178–183',
          },
          {
            id: 'a3',
            type: 'single-choice',
            title: 'Aufgabe 3 · Korrelation und Diversifikationseffekt',
            points: 3,
            task:
              'Welche Aussage zum Korrelationskoeffizienten und seinem Einfluss auf die Diversifikation ist nach Kapitel 5 korrekt?\nA: Bei ρ = 1 ist die Diversifikation am größten, weil beide Assets dieselbe Rendite erzielen.\nB: Bei ρ = −1 besteht die Minimum-Varianz-Grenze aus zwei Geraden mit einem Schnittpunkt bei σ = 0.\nC: Diversifikation ist nur dann sinnvoll, wenn ρ exakt null beträgt.\nD: Bei ρ < 1 ist kein Diversifikationseffekt erreichbar.',
            solution:
              'Antwort B ist korrekt. Bei ρ = −1 besteht die Minimum-Varianz-Grenze aus zwei Geraden mit einem Schnittpunkt bei σ = 0 — vollständige Risikoelimination ist theoretisch möglich. A ist falsch: bei ρ = 1 entsteht kein Diversifikationseffekt. C ist falsch: Gewinne entstehen bereits bei jedem ρ < 1. D ist falsch: Bei ρ < 1 liegt das Portfoliorisiko unter dem gewichteten Durchschnitt der Einzelrisiken.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Aussage zu ρ = −1 und σ = 0 korrekt verstanden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 160–162',
          },
          {
            id: 'a4',
            type: 'multiple-choice',
            title: 'Aufgabe 4 · Eigenschaften effizienter Portfolios',
            points: 5,
            task:
              'Welche der folgenden Aussagen beschreiben effiziente Portfolios im Sinne von Kapitel 5 korrekt? Notiere alle richtigen Buchstaben.\nA: Ein effizientes Portfolio weist bei gegebenem Risiko die höchstmögliche erwartete Rendite auf.\nB: Das Minimum-Varianz-Portfolio ist ein effizientes Portfolio, weil es das geringste Risiko aller erreichbaren Portfolios hat.\nC: Leerverkäufe können die erreichbaren Rendite-Risiko-Kombinationen über reine Long-only-Portfolios hinaus erweitern.\nD: Jeder rationale Investor wählt ein Portfolio auf dem effizienten Rand.\nE: Ein isoliert ineffizientes Wertpapier darf in keinem Fall Teil eines effizienten Portfolios sein.',
            solution:
              'Korrekt sind A, C und D. B ist falsch: Das MVP liegt zwar auf der Minimum-Varianz-Kurve, aber nur der positiv geneigte Bereich oberhalb des MVP gilt als effizienter Rand. E ist falsch: Ein isoliert ineffizientes Wertpapier kann durch niedrige Korrelation die Diversifikation verbessern.',
            gradingHints: [
              'Alle drei korrekten Antworten A, C und D genannt',
              'Antwort B nicht als korrekt gewählt (MVP ≠ effizienter Rand)',
              'Antwort E nicht als korrekt gewählt (isoliert ineffizient ≠ im Portfolio unbrauchbar)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 160–167',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Rechenaufgaben',
        points: 22,
        tasks: [
          {
            id: 'b1',
            type: 'calculation',
            title: 'Aufgabe 5 · Portfolio-Rendite und Portfolio-Varianz',
            points: 8,
            task:
              'Gegeben: Aktie A (E(rA) = 16,0 %, σA = 14,0 %), Corporate Bond B (E(rB) = 6,0 %, σB = 11,0 %), ρA,B = 0,5. Portfolio: wA = 20 %, wB = 80 %. (a) Berechne E(rP). (b) Berechne σP². (c) Bestimme σP. Zeige alle Rechenschritte.',
            solution:
              '(a) E(rP) = 0,20 · 16,0% + 0,80 · 6,0% = 3,2% + 4,8% = 8,0%.\n(b) σP² = (0,20)²·(0,14)² + (0,80)²·(0,11)² + 2·0,20·0,80·0,14·0,11·0,5 = 0,000784 + 0,007744 + 0,001232 = 0,009760 ≈ 1,10% (als Prozentwert).\n(c) σP = √0,009760 ≈ 10,48%.',
            gradingHints: [
              'Formel E(rP) = wA·E(rA) + wB·E(rB) korrekt angewendet',
              'Rendite 8,0% korrekt errechnet',
              'Varianzformel mit allen drei Termen vollständig aufgestellt',
              'Numerische Einsetzmethode korrekt gezeigt',
              'Portfoliovarianz ca. 1,10% (Akzeptanzbereich: 1,09%–1,11%)',
              'Portfoliovolatilität ca. 10,48% korrekt abgeleitet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 153–159',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 6 · Minimum-Varianz-Portfolio',
            points: 7,
            task:
              'Verwende die Daten aus Aufgabe 5 (σA = 14,0 %, σB = 11,0 %, ρA,B = 0,5). (a) Berechne wA* im MVP mit der Formel: wA* = (σB² − σA·σB·ρA,B) / (σA² + σB² − 2·σA·σB·ρA,B). (b) Bestimme wB*. (c) Ermittle E(rP*) und σP* des MVP und beschreibe seine Lage auf der Effizienzkurve.',
            solution:
              '(a) Zähler: (0,11)² − 0,14·0,11·0,5 = 0,0121 − 0,0077 = 0,0044. Nenner: (0,14)² + (0,11)² − 2·0,14·0,11·0,5 = 0,0196 + 0,0121 − 0,0154 = 0,0163. wA* = 0,0044 / 0,0163 ≈ 27%.\n(b) wB* = 73%.\n(c) E(rP*) = 0,27·16,0% + 0,73·6,0% ≈ 8,70%. σP* ≈ 10,45%. Das MVP markiert den Risikominimum-Punkt; der effiziente Rand beginnt erst oberhalb davon.',
            gradingHints: [
              'MVP-Formel mit korrektem Zähler und Nenner aufgestellt',
              'wA* ≈ 27% errechnet (Akzeptanzbereich: 26%–28%)',
              'wB* = 73% korrekt abgeleitet',
              'Rendite des MVP ≈ 8,7% korrekt berechnet',
              'Volatilität des MVP ≈ 10,45% genannt oder konsistent berechnet',
              'Aussage zur Lage: MVP als unterste Grenze des effizienten Randes korrekt beschrieben',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 184–187',
          },
          {
            id: 'b3',
            type: 'calculation',
            title: 'Aufgabe 7 · CAPM und erwartete Rendite',
            points: 7,
            task:
              'Gegeben: rF = 3,0 %, E(rM) = 10,0 %, βX = 1,4, βY = 0,6. (a) Berechne E(rX) nach CAPM. (b) Berechne E(rY) nach CAPM. (c) Erkläre verbal, was β = 1,4 im Vergleich zu β = 0,6 für das systematische Risiko bedeutet.',
            solution:
              '(a) E(rX) = 3,0% + 1,4·(10,0% − 3,0%) = 3,0% + 9,8% = 12,8%.\n(b) E(rY) = 3,0% + 0,6·7,0% = 3,0% + 4,2% = 7,2%.\n(c) β misst die Sensitivität auf Marktbewegungen. β = 1,4: überdurchschnittliche Reaktion — bei +1% Markt steigt X um 1,4%; höhere Risikoprämie. β = 0,6: unterdurchschnittliche Reaktion; geringere Prämie. Unsystematisches Risiko wird im CAPM nicht entlohnt.',
            gradingHints: [
              'CAPM-Formel E(ri) = rF + βi·[E(rM) − rF] korrekt aufgestellt',
              'E(rX) = 12,8% korrekt berechnet',
              'E(rY) = 7,2% korrekt berechnet',
              'Beta als Maß für systematisches Risiko korrekt definiert',
              'Höheres Beta = stärkere Marktreagibilität = höhere Risikoprämie erläutert',
              'Unsystematisches Risiko als nicht entlohnt genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 195–199',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Anwendung und Transfer',
        points: 16,
        tasks: [
          {
            id: 'c1',
            type: 'case-study',
            title: 'Aufgabe 8 · Tobin-Separation und Capital Market Line',
            points: 6,
            task:
              'Tobias hält ein rein risikobehaftetes Portfolio auf der Markowitz-Effizienzkurve. Sein Berater empfiehlt, einen Teil des Kapitals in einen risikolosen Geldmarktfonds (rF = 2,5%) umzuschichten und das verbleibende Kapital im Tangentialportfolio zu investieren. (a) Erkläre das Prinzip der Tobin-Separation: Welche zwei Entscheidungen werden getrennt und warum ist das vorteilhaft? (b) Beschreibe die CML geometrisch und erkläre den Marktpreis des Risikos. (c) Was gilt unter CML-Logik für alle Investoren mit homogenen Erwartungen?',
            solution:
              '(a) Tobin-Separation trennt Anlageentscheidung (Wahl des Tangentialportfolios) von Finanzierungsentscheidung (individuelle Mischung mit risikolosem Asset). Vorteil: Kombinationen auf der CML dominieren rein risikobehaftete Portfolios auf der Markowitz-Kurve.\n(b) Die CML ist eine Gerade vom risikolosen Zinssatz rF durch das Tangentialportfolio im µ-σ-Raum. Der Marktpreis des Risikos = [E(rM) − rF] / σM gibt die zusätzliche erwartete Rendite je Einheit Marktrisiko an.\n(c) Alle Investoren mit homogenen Erwartungen wählen dasselbe riskante Portfolio (Tangentialportfolio = Marktportfolio). Die individuelle Risikoaversion bestimmt nur die Mischungsquote.',
            gradingHints: [
              'Anlageentscheidung und Finanzierungsentscheidung als die zwei getrennten Aspekte korrekt benannt',
              'Vorteil der CML gegenüber reiner Effizienzkurve erklärt',
              'CML als Gerade von rF durch das Tangentialportfolio beschrieben',
              'Marktpreis des Risikos als Steigung [E(rM) − rF] / σM erklärt',
              'Tangentialportfolio = Marktportfolio im Gleichgewicht genannt',
              'Homogene Erwartungen implizieren gleiches riskantes Portfolio für alle Investoren',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 188–194',
          },
          {
            id: 'c2',
            type: 'open',
            title: 'Aufgabe 9 · CML vs. SML und Grenzen der Portfoliotheorie',
            points: 5,
            task:
              '(a) Grenze CML von SML ab: Nenne je die horizontale Achse, die betrachtete Portfolioart und die Aussage der Linie. (b) Nenne drei Grenzen der Markowitz-Portfoliotheorie aus Kapitel 5 und erkläre jeweils kurz die praktische Relevanz.',
            solution:
              '(a) CML: x-Achse = σ, gilt nur für effiziente Portfolios im µ-σ-Raum. SML: x-Achse = Beta, gilt für alle Assets und Portfolios im µ-β-Raum. Beide schneiden die Rendite-Achse bei rF.\n(b) 1. Inputdatenproblem: n Renditen, n Volatilitäten, n(n−1)/2 Korrelationen — für große Portfolios kaum zuverlässig schätzbar. 2. Einperiodiges Modell: Portfoliorevision und Timing werden nicht berücksichtigt. 3. Normalverteilungsannahme: Renditen weisen Schiefe und Excess-Kurtosis auf; extreme Verluste sind häufiger als das Modell annimmt.',
            gradingHints: [
              'CML: σ als x-Achse, nur effiziente Portfolios, µ-σ-Raum korrekt beschrieben',
              'SML: Beta als x-Achse, alle Assets, µ-β-Raum korrekt beschrieben',
              'Erste Grenze (Inputdaten / Instabilität) korrekt beschrieben',
              'Zweite Grenze (Einperiodenmodell) korrekt beschrieben',
              'Dritte Grenze (Normalverteilungsannahme oder andere valide Grenze) korrekt beschrieben',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 184–199',
          },
          {
            id: 'c3',
            type: 'case-study',
            title: 'Aufgabe 10 · Multifaktormodelle und APT',
            points: 5,
            task:
              'Ein Portfoliomanager argumentiert, das CAPM sei für die Praxis unzureichend. Er möchte ein Multifaktormodell einsetzen. (a) Erkläre, was ein "Faktor" in Multifaktormodellen ist, und nenne die drei Typen mit je einem Merkmal. (b) Erläutere die Kernaussage der APT und nenne zwei Vorteile sowie zwei Nachteile gegenüber dem CAPM.',
            solution:
              '(a) Ein Faktor ist ein Element, zu dem mehrere Variablen korreliert sind. Drei Typen: 1. Makroökonomische Faktormodelle (unerwartete makroökonomische Ereignisse). 2. Fundamentalfaktormodelle (KBV, KGV). 3. Statistische Faktormodelle (quantitative Backtesting-Faktoren).\n(b) APT-Kernaussage: Erwartete Rendite = risikoloser Zins + Summe der Faktorsensitivitäten gewichtet mit Faktorprämien. Voraussetzung: keine Arbitragemöglichkeiten. Vorteile: mehrdimensionale Risikobetrachtung; kein beobachtbares Marktportfolio nötig. Nachteile: Identifikationsproblem der Faktoren; Instabilität der Sensitivitäten.',
            gradingHints: [
              'Faktor korrekt definiert',
              'Alle drei Faktormodell-Typen mit je einem inhaltlichen Merkmal genannt',
              'APT-Kernaussage: lineare Funktion der Faktorsensitivitäten',
              'Keine-Arbitrage-Bedingung als APT-Voraussetzung genannt',
              'Zwei Vorteile der APT korrekt',
              'Zwei Nachteile der APT korrekt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 5 · Folien 200–202',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-portfoliomanagement-exam',
    title: 'Probeklausur Kapitel 6 · Portfoliomanagement',
    label: 'Kapitel 6',
    description:
      'Fachliche Probeklausur zu Investmentprozess, Investment Policy Statement, Strategischer und Taktischer Asset Allocation, Portfoliorevision, Transaktionskosten und Finanzcontrolling auf Basis von Kapitel 6.',
    durationMinutes: 60,
    totalPoints: 55,
    isDemo: false,
    topics: [
      'Investmentprozess und IPS',
      'Relative Return vs. Absolute Return',
      'Strategische Asset Allocation (SAA)',
      'Taktische Asset Allocation (TAA)',
      'Portfoliorevision: Rebalancing vs. Upgrading',
      'Transaktionskosten und Bid-Ask-Spread',
      'Finanzcontrolling',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Bei offenen Fragen gilt: Kernaussagen zählen, keine Musterwörtlichkeit erforderlich.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
      'Gesamtpunkte: 55 · Bearbeitungszeit: 60 Minuten.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Definitionen',
        points: 17,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Investmentprozess',
            points: 4,
            task:
              'Nenne die vier Schritte des Investmentprozesses nach Kapitel 6 in der richtigen Reihenfolge und ordne jedem Schritt seine zentrale Funktion in einem Satz zu.',
            solution:
              'Schritt 1: Investmentziele – Analyse von Risikotoleranz, Renditezielen und Anlagebeschränkungen; Ergebnis ist das Investment Policy Statement. Schritt 2: Strategische Asset Allocation – Festlegung von Assetuniversum, Benchmarks, Investmentlimits und der Wahl zwischen aktivem und passivem Management. Schritt 3: Portfoliomanagement im engeren Sinne – operative Umsetzung durch Research, Portfoliobildung, Taktische Asset Allocation, Rebalancing und Trading. Schritt 4: Finanzcontrolling – Performanceanalyse, Risikoanalyse und Konkurrenzanalyse mit Rückkopplung an Schritt 1 und 2. Der Prozess ist zyklisch.',
            gradingHints: [
              'Alle vier Schritte in der korrekten Reihenfolge genannt',
              'Investmentziele mit IPS als Ergebnis verbunden',
              'SAA mit Festlegung der Grundstruktur beschrieben',
              'PM i.e.S. als operative Umsetzung charakterisiert',
              'Finanzcontrolling mit zyklischer Rückkopplungsfunktion beschrieben',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 205–214',
          },
          {
            id: 'a2',
            type: 'definition',
            title: 'Aufgabe 2 · Investment Policy Statement',
            points: 4,
            task:
              'Definiere das Investment Policy Statement (IPS) und nenne die drei Komponenten, die es nach Kapitel 6 zusammenfasst. Gib für jede Komponente zwei konkrete Einflussfaktoren an.',
            solution:
              'Das Investment Policy Statement fasst die Ergebnisse der Anlegeranalyse zusammen und bildet die Grundlage für alle weiteren Schritte des Investmentprozesses. Es enthält: (1) Risikotoleranz – abhängig u. a. von Alter, Einkommen, Erfahrung, Anlagehorizont, Gesamtvermögen und bestehenden Verpflichtungen. (2) Mindestrenditeziele – entweder als absolutes Ziel oder als Performanceziel gegenüber einer Benchmark. (3) Anlagebeschränkungen – z. B. Anlagehorizont, Liquiditätsbedarf, Steuern und persönliche Einschränkungen wie Wertvorstellungen, Religion oder Kultur.',
            gradingHints: [
              'IPS als Grundlage des Investmentprozesses korrekt eingeordnet',
              'Risikotoleranz mit mindestens zwei Einflussfaktoren genannt',
              'Mindestrenditeziele als absolut oder benchmarkorientiert beschrieben',
              'Anlagebeschränkungen mit mindestens zwei Beispielen belegt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 205–209',
          },
          {
            id: 'a3',
            type: 'single-choice',
            title: 'Aufgabe 3 · Absolute-Return-Ansatz',
            points: 3,
            task:
              'Welche Aussage beschreibt den Absolute-Return-Ansatz nach Kapitel 6 am treffendsten?\nA: Der Anleger strebt eine möglichst hohe Rendite im Vergleich zur Benchmark an.\nB: Der Anleger zielt auf eine positive Rendite unabhängig von der Marktsituation.\nC: Der Anleger verzichtet vollständig auf Risikosteuerung.\nD: Der Anleger orientiert sich ausschließlich an der Peer Group.',
            solution:
              'Antwort B ist korrekt. Der Absolute-Return-Ansatz zielt auf eine positive Rendite oder Mindestrendite unabhängig von der allgemeinen Marktsituation. Er ist marktunabhängig ausgerichtet, enthält aber kein Nullrisikoversprechen.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Marktunabhängigkeit als Kernmerkmal korrekt erkannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 205–207',
          },
          {
            id: 'a4',
            type: 'multiple-choice',
            title: 'Aufgabe 4 · Bid-Ask-Spread: Einflussfaktoren',
            points: 3,
            task:
              'Welche Faktoren erhöhen laut Kapitel 6 den Bid-Ask-Spread? Kreuze alle zutreffenden Antworten an.\nA: Steigende Informationstransparenz des gehandelten Titels.\nB: Höheres Risiko der Aktie.\nC: Niedrigeres absolutes Preisniveau der Aktie.\nD: Höhere Liquidität des Marktsegments.',
            solution:
              'Korrekt sind B und C. Ein höheres Risiko der Aktie erhöht den Spread. Ein niedrigeres absolutes Preisniveau erhöht den Spread relativ gesehen. Steigende Informationstransparenz (A) und höhere Liquidität (D) verengen den Spread.',
            gradingHints: [
              'Antwort B korrekt gewählt',
              'Antwort C korrekt gewählt',
              'Antwort A nicht gewählt (Transparenz senkt den Spread)',
              'Antwort D nicht gewählt (Liquidität senkt den Spread)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folie 213',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Empirischer Performancebeitrag',
            points: 3,
            task:
              'Welche Aussage zur empirischen Bedeutung der Asset-Allocation-Ebenen ist laut Kapitel 6 korrekt?\nA: Die Taktische Asset Allocation hat den größten Einfluss auf die langfristige Performance.\nB: Die Wahl einzelner Titel ist wichtiger als die Verteilung auf Assetklassen.\nC: Die Strategische Asset Allocation hat empirisch den größten Einfluss auf die Performance.\nD: Performancebeitrag von SAA und TAA sind empirisch gleich groß.',
            solution:
              'Antwort C ist korrekt. Die Strategische Asset Allocation hat empirisch den größten Einfluss auf die Performance – mehr als die taktische Ebene.',
            gradingHints: [
              'Antwort C eindeutig genannt',
              'SAA als dominante Performancequelle korrekt verstanden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folie 222',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Vergleich',
        points: 22,
        tasks: [
          {
            id: 'b1',
            type: 'open',
            title: 'Aufgabe 6 · SAA vs. TAA: Systematischer Vergleich',
            points: 8,
            task:
              'Vergleiche Strategische Asset Allocation (SAA) und Taktische Asset Allocation (TAA) anhand der vier Kriterien: (1) Zeithorizont, (2) Zielsetzung, (3) Entscheidungsebene (Diversifikationsobjekte) und (4) typische Umsetzungsinstrumente. Stelle die Unterschiede in einer übersichtlichen Gegenüberstellung dar.',
            solution:
              'SAA – (1) Zeithorizont: langfristig; (2) Zielsetzung: Festlegung der Grundstruktur des Portfolios, größter empirischer Performancebeitrag; (3) Entscheidungsebene: Assetklassen, Länder, Währungen; (4) Umsetzung: direkte Allokation, Festlegung von Benchmarks und Investmentlimits.\nTAA – (1) Zeithorizont: kurz- bis mittelfristig; (2) Zielsetzung: Erzielung von Alpha durch Übergewichtung relativ besser erwarteter Assetklassen; (3) Entscheidungsebene: Branchen und Einzeltitel; (4) Umsetzung: typischerweise über Derivate-Overlays.',
            gradingHints: [
              'Zeithorizont: SAA langfristig, TAA kurzfristig korrekt differenziert',
              'Zielsetzung: SAA als Grundstruktur, TAA als Alpha-Quelle korrekt beschrieben',
              'Entscheidungsebene: Assetklassen/Länder/Währungen (SAA) vs. Branchen/Titel (TAA) korrekt zugeordnet',
              'Derivate-Overlays als TAA-Umsetzungsinstrument genannt',
              'Empirischer Performancevorteil der SAA erwähnt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 221–222, 228',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 7 · Beschränkungen institutioneller Investoren',
            points: 7,
            task:
              'Ein Lebensversicherer und ein offener Aktienfonds wollen jeweils ihre Strategische Asset Allocation optimieren. Erkläre für jeden der beiden Investoren, welche spezifischen Beschränkungen laut Kapitel 6 zu beachten sind, und begründe, warum das Markowitz-Modell allein für institutionelle Investoren nicht ausreicht.',
            solution:
              'Lebensversicherer: Unterliegt dem VAG (Versicherungsaufsichtsgesetz) und Anlageverordnungen mit Vorgaben zu Mischung, Streuung, Anlagequoten und Solvabilitätserfordernissen. Muss Versicherungsleistungen dauerhaft erfüllen können – daraus folgen strenge Liquiditätserfordernisse. Die Finanzstärke (aktive und passive Reservepolster) begrenzt das zulässige Exposure in riskante Assetklassen.\nOffener Aktienfonds: Ist an Verkaufsprospekte und Investmentguidelines gebunden. Muss jederzeit den Rückkauf von Anteilen gewährleisten, was eine Konzentration auf standardisiert handelbare, liquide Assetklassen erfordert.\nMarkowitz-Kritik: Das Portfolio-Selection-Modell optimiert die Rendite-Risiko-Struktur, berücksichtigt aber weder gesetzliche Anlagegrenzen noch Liquiditätspflichten noch Wettbewerbsfähigkeit der Renditen. Für institutionelle Investoren sind diese zusätzlichen Nebenbedingungen bindend.',
            gradingHints: [
              'VAG und Anlageverordnung als Beschränkung des Versicherers korrekt genannt',
              'Solvabilitätserfordernisse und Finanzstärke erwähnt',
              'Dauerhaftes Leistungserbringen als Liquiditätsgrund beim Versicherer genannt',
              'Verkaufsprospekt und jederzeit-Rückkaufpflicht beim Fonds genannt',
              'Markowitz-Grenzen: fehlende Berücksichtigung gesetzlicher Grenzen und Liquiditätspflichten erläutert',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 224–227',
          },
          {
            id: 'b3',
            type: 'open',
            title: 'Aufgabe 8 · Rebalancing vs. Upgrading',
            points: 7,
            task:
              'Unterscheide Portfolio Rebalancing und Portfolio Upgrading anhand von Auslöser, Ziel und Konsequenz für die Portfoliostruktur. Gib für jeden Begriff ein illustrierendes Szenario an, das den Unterschied verdeutlicht.',
            solution:
              'Portfolio Rebalancing: Auslöser sind Kursverschiebungen, die die ursprüngliche Zielstruktur verändert haben. Ziel ist die Wiederherstellung dieser Ursprungsstruktur – die Zielgewichtung bleibt inhaltlich unverändert. Es handelt sich um eine passive Reaktion auf Marktbewegungen. Beispiel: Der Aktienanteil eines gemischten Portfolios steigt nach einem Kursanstieg von 60 % auf 70 %; durch Verkauf von Aktien wird die 60-%-Zielquote wiederhergestellt.\nPortfolio Upgrading: Auslöser sind neue Informationen oder veränderte Erwartungen des Managers. Ziel ist eine bewusste Strukturverbesserung des Portfolios. Es handelt sich um eine aktive Entscheidung. Beispiel: Der Manager ersetzt aufgrund einer geänderten Zinsprognose langlaufende Staatsanleihen durch kurzlaufende Unternehmensanleihen und verändert damit die Zielstruktur dauerhaft.',
            gradingHints: [
              'Rebalancing als passiv und reaktiv auf Kursverschiebungen charakterisiert',
              'Zielstruktur bleibt beim Rebalancing unverändert',
              'Upgrading als aktive Entscheidung aufgrund neuer Informationen beschrieben',
              'Upgrading als dauerhafte Strukturveränderung erkannt',
              'Illustrierendes Szenario für Rebalancing sinnvoll',
              'Illustrierendes Szenario für Upgrading sinnvoll',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 211–212',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Transfer und Analyse',
        points: 16,
        tasks: [
          {
            id: 'c1',
            type: 'case-study',
            title: 'Aufgabe 9 · Transaktionskosten und Handelbarkeit',
            points: 6,
            task:
              'Ein Portfoliomanager überlegt, einen Teil des Portfolios von börsennotierten Aktien eines DAX-Unternehmens in GmbH-Anteile eines mittelständischen Unternehmens umzuschichten. Analysiere die Auswirkungen auf die Transaktionskosten anhand der drei Kostentreiber aus Kapitel 6 (Brokerage-Gebühren, Geld-Brief-Spanne, Handelbarkeit/Fungibilität) und leite eine Empfehlung für das Liquiditätsmanagement des Portfolios ab.',
            solution:
              'Brokerage-Gebühren: Bei börsennotierten DAX-Aktien sind standardisierte Provisionssätze üblich. Bei GmbH-Anteilen fallen individuell verhandelte Transaktionsgebühren an, die in der Regel höher sind.\nGeld-Brief-Spanne: DAX-Aktien weisen aufgrund hoher Liquidität, großer Informationstransparenz und einem breiten Börsensegment sehr enge Spreads auf. GmbH-Anteile haben keinen liquiden Sekundärmarkt; der Spread ist strukturell deutlich höher oder de facto nicht existent (keine Market Maker).\nHandelbarkeit/Fungibilität: Börsennotierte Aktien sind standardisiert und weisen hohe Liquidität auf. GmbH-Anteile sind nicht standardisiert und haben eine sehr geringe Fungibilität – Verkäufe erfordern individuelle Käufersuche und rechtliche Abwicklung.\nEmpfehlung: Die Umschichtung erhöht die Gesamttransaktionskosten erheblich und reduziert die Portfolioliquidität dauerhaft. Für institutionelle Investoren mit Rückkaufpflicht (Fonds) oder Leistungspflicht (Versicherung) ist ein hoher Anteil illiquider GmbH-Anteile aus regulatorischen und operativen Gründen problematisch.',
            gradingHints: [
              'Brokerage-Kosten: individuell vs. standardisiert korrekt differenziert',
              'Bid-Ask-Spread: GmbH-Anteile als strukturell weiter oder nicht vorhanden beschrieben',
              'Fungibilität: GmbH-Anteile als nicht standardisiert mit sehr geringer Liquidität eingeordnet',
              'Konsequenz für Portfolioliquidität abgeleitet',
              'Bezug zu institutionellen Liquiditätspflichten hergestellt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folie 213',
          },
          {
            id: 'c2',
            type: 'case-study',
            title: 'Aufgabe 10 · TAA mit Derivate-Overlays',
            points: 5,
            task:
              'Ein Portfoliomanager möchte im Rahmen der Taktischen Asset Allocation den Aktienanteil eines Portfolios kurzfristig erhöhen, ohne die physischen Positionen zu verändern. Erkläre, warum Derivate-Overlays für die Umsetzung der TAA in der Praxis bevorzugt werden, und erläutere den Zusammenhang zwischen TAA, systematischem Risiko und der Möglichkeit, Alpha zu erzielen.',
            solution:
              'Derivate-Overlays ermöglichen die kurzfristige Veränderung der wirtschaftlichen Risikostruktur des Portfolios, ohne dass physische Käufe oder Verkäufe erforderlich sind. Dies reduziert Transaktionskosten und Realisierungsaufwand erheblich. Außerdem können Positionen schnell und kosteneffizient wieder zurückgeführt werden, wenn sich die taktische Einschätzung ändert.\nZusammenhang TAA und systematisches Risiko: Die Grundlage der TAA ist die Bereitschaft des Investors, systematisches (marktweites) Risiko zu akzeptieren. Nur für systematisches Risiko erhält der Investor eine Kompensation in Form einer Risikoprämie. Unsystematisches Risiko wird durch Diversifikation eliminiert und trägt keine Prämie. Die TAA übergewichtet Assetklassen mit kurzfristig besser erwarteter relativer Performance und erhöht damit bewusst das systematische Exposure. Die angestrebte positive risikoadjustierte Überrendite gegenüber der Benchmark wird als Alpha bezeichnet.',
            gradingHints: [
              'Kostenvorteil von Derivate-Overlays gegenüber physischen Transaktionen erklärt',
              'Flexibilität und schnelle Reversibilität als weiterer Vorteil genannt',
              'Systematisches Risiko als Kompensationsquelle der TAA beschrieben',
              'Unsystematisches Risiko korrekt als nicht entlohnt eingeordnet',
              'Alpha als Zielgröße der TAA korrekt definiert',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folien 228–230',
          },
          {
            id: 'c3',
            type: 'case-study',
            title: 'Aufgabe 11 · Finanzcontrolling und Prozesslogik',
            points: 5,
            task:
              'Ein institutioneller Investor stellt nach dem Jahresabschluss fest, dass sein Portfolio eine Rendite von 6,2 % erzielt hat. Erkläre anhand der drei Säulen des Finanzcontrollings aus Kapitel 6, welche Analysen nun durchzuführen sind, und zeige auf, an welche Stellen des Investmentprozesses die Ergebnisse des Controllings zurückgekoppelt werden.',
            solution:
              'Performanceanalyse: Zunächst wird die realisierte Rendite ermittelt (Messung). Dann wird die Rendite von 6,2 % eingeordnet – gegenüber der Benchmark und gegenüber der Peer Group (Bewertung). Messung und Bewertung sind zwei getrennte Aufgaben.\nRisikoanalyse: Kennzahlenanalyse zur laufenden Risikoüberwachung, Asset-Liability-Management (Abstimmung von Anlage- und Verpflichtungsstruktur) sowie Stress-Test-Szenarien für extreme Marktlagen.\nKonkurrenzanalyse: Makroebene: Kennzahlenvergleich mit dem Gesamtmarkt. Mikroebene: Kennzahlenvergleich mit Peer Group und direkten Mitbewerbern. Ergebnis: Reporting.\nRückkopplung: Das Finanzcontrolling liefert Rückmeldungen an Schritt 1 (Investmentziele – sind Risikotoleranz und Renditeziele noch adäquat?) und Schritt 2 (Strategische Asset Allocation – sind Assetuniversum, Benchmarks und Limits noch passend?). Der Investmentprozess ist damit zyklisch.',
            gradingHints: [
              'Performancemessung und Performancebewertung als zwei getrennte Schritte beschrieben',
              'Benchmark- und Peer-Group-Vergleich als Bewertungsmaßstab genannt',
              'Risikoanalyse mit Kennzahlen, ALM und Stress-Tests genannt',
              'Konkurrenzanalyse auf Makro- und Mikroebene differenziert',
              'Rückkopplung an Schritt 1 (Investmentziele) und Schritt 2 (SAA) korrekt beschrieben',
              'Zyklische Prozesslogik explizit gemacht',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 6 · Folie 214',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-einfuehrung-exam',
    title: 'Probeklausur Kapitel 1 · Einführung',
    label: 'Kapitel 1',
    description:
      'Fachliche Probeklausur zu Definition und Formen des Asset Management, institutionellen Anlegern, den beteiligten Parteien im Fondsgeschäft sowie BaFin, KVG, Depotbank und Sondervermögen auf Basis von Kapitel 1.',
    durationMinutes: 40,
    totalPoints: 40,
    isDemo: false,
    topics: [
      'Definition und Formen des Asset Management',
      'Institutionelle Anleger',
      'Beteiligte Parteien im Fondsgeschäft',
      'BaFin, KVG und Depotbank',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Definitionen',
        points: 18,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Definition Asset Management',
            points: 5,
            task:
              'Definiere Asset Management nach Kapitel 1, nenne drei gängige Synonyme und benenne die vier Ziele des magischen Vierecks der Kapitalanlage.',
            solution:
              'Asset Management ist die systematische Dienstleistung der professionellen Kapitalanlage mit dem Ziel, risikoeffiziente Portefeuilles zu bilden. Synonyme sind unter anderem Portfolio Management, Wertpapiermanagement, Fondsmanagement, Investment Management und Vermögensverwaltung. Das magische Viereck der Kapitalanlage besteht aus den vier konkurrierenden Zielen Rendite, Risiko, Liquidität und Steuern.',
            gradingHints: [
              'Definition als systematische professionelle Kapitalanlage zu risikoeffizienten Portefeuilles genannt',
              'Mindestens drei korrekte Synonyme genannt',
              'Alle vier Ziele des magischen Vierecks (Rendite, Risiko, Liquidität, Steuern) genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folien 10-11',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Klassisches vs. fondsgestütztes Asset Management',
            points: 3,
            task:
              'Welche Aussage trifft das klassische und das fondsgestützte Asset Management korrekt? A: Klassisch ist breit gestreut und schon ab kleinem Vermögen möglich. B: Klassisch ist individuell, aber teuer und wenig gestreut, fondsgestützt bietet breite Streuung schon ab kleinem Vermögen bei geringerer Individualität. C: Beide sind hinsichtlich Kosten und Streuung identisch. D: Fondsgestützt beruht auf einem individuellen Vermögensverwaltungsmandat ohne Streuung.',
            solution:
              'Antwort B ist korrekt. Klassisches Asset Management ist individuell, aber teuer und wenig gestreut; fondsgestütztes Asset Management bietet breite Streuung schon ab kleinem Vermögen, ist aber weniger individuell.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Individualität/Kosten dem klassischen, Streuung dem fondsgestützten Ansatz korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folie 11',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Charakteristika institutioneller Anleger',
            points: 4,
            task:
              'Welche Merkmale kennzeichnen institutionelle Anleger nach Kapitel 1? A: Es handelt sich um eine juristische Person. B: Sie legen überwiegend fremde, von Dritten überlassene Mittel an. C: Sie unterliegen hohen gesetzlichen Restriktionen (z. B. KAGG, WpHG, KWG). D: Sie legen ausschließlich geringe Beträge ohne professionelles Research an.',
            solution:
              'Korrekt sind A, B und C. D ist falsch: Institutionelle Anleger weisen i. d. R. hohe Anlagebeträge auf und fragen professionelles Research nach.',
            gradingHints: [
              'A, B und C als korrekt gewählt',
              'D nicht gewählt (hohe Beträge und professionelles Research)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folien 12-13',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Sondervermögen',
            points: 6,
            task:
              'Definiere das Sondervermögen, erkläre seinen Schutzcharakter und gib an, wie sein Wert ermittelt wird.',
            solution:
              'Das Sondervermögen ist das Anlagekapital der Fondsanleger, das vom Vermögen der KVG abgetrennt und durch die Depotbank verwahrt wird. Es ist geschützt vor Wertänderungen anderer Fonds der KVG sowie vor dem Zugriff der KVG oder ihrer Gläubiger. Sein Wert ist die Summe der mit dem aktuellen Rücknahmepreis bewerteten Anteilscheine.',
            gradingHints: [
              'Sondervermögen als abgetrenntes Anlagekapital der Anleger definiert',
              'Verwahrung durch die Depotbank genannt',
              'Schutz vor Zugriff der KVG bzw. ihrer Gläubiger erklärt',
              'Wertermittlung über den aktuellen Rücknahmepreis der Anteilscheine genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folien 16-17',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Vergleich',
        points: 22,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 5 · Beteiligte Parteien im Fondsgeschäft',
            points: 8,
            task:
              'Rekonstruiere die zentralen Beziehungen zwischen BaFin, Finanzdienstleister, KVG, Fondsmanager, Depotbank, Sondervermögen und Investor. Gib jeweils Quelle, Beziehung und Ziel an.',
            solution:
              'Die BaFin kontrolliert den Finanzdienstleister (§ 32 KWG) und die KVG und überwacht die Depotbank. Sowohl der Finanzdienstleister als auch die KVG beauftragen die Depotbank. Die KVG beschäftigt den Fondsmanager. Der Fondsmanager verwaltet das Sondervermögen, während die Depotbank das Sondervermögen verwahrt. Der Investor investiert in das Sondervermögen, das ihm im Gegenzug Anteile gibt.',
            gradingHints: [
              'BaFin kontrolliert Finanzdienstleister und KVG, überwacht die Depotbank',
              'Finanzdienstleister und KVG beauftragen die Depotbank (Pfeilrichtung korrekt)',
              'KVG beschäftigt den Fondsmanager',
              'Fondsmanager verwaltet, Depotbank verwahrt das Sondervermögen',
              'Investor investiert in das Sondervermögen und erhält Anteile',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folie 14',
          },
          {
            id: 'b2',
            type: 'open',
            title: 'Aufgabe 6 · Zwei Modelle des Finanzdienstleisters',
            points: 7,
            task:
              'Unterscheide die klassische Anlageberatung von der Finanzportfolioverwaltung anhand der Entscheidungshoheit und der aufsichtsrechtlichen Anforderungen.',
            solution:
              'Bei der klassischen Anlageberatung muss das Einverständnis des Kunden vor jedem einzelnen Geschäft eingeholt werden; der Kunde behält die Entscheidungshoheit über jede Transaktion. Bei der Finanzportfolioverwaltung erteilt der Kunde eine Generalvollmacht, sodass der Verwalter selbstständig entscheiden kann. Für die Finanzportfolioverwaltung fordert die BaFin höhere Eigenkapital-Richtlinien.',
            gradingHints: [
              'Klassische Anlageberatung: Einverständnis vor jedem Geschäft, Entscheidungshoheit beim Kunden',
              'Finanzportfolioverwaltung: Generalvollmacht des Kunden',
              'Höhere EK-Anforderungen der BaFin bei der Finanzportfolioverwaltung genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folie 14',
          },
          {
            id: 'b3',
            type: 'case-study',
            title: 'Aufgabe 7 · BaFin, KVG und Depotbank',
            points: 7,
            task:
              'Beschreibe die Rolle und Rechtsgrundlage der BaFin und grenze die Aufgaben von KVG und Depotbank voneinander ab.',
            solution:
              'Die BaFin handelt auf Grundlage des Kreditwesengesetzes (KWG) als Allfinanzaufsicht über alle Bereiche des Finanzwesens (Banken, Versicherungen, Wertpapierhandel); die Pendants sind die FMA (Österreich) und die FINMA (Schweiz). Die KVG sammelt liquide Mittel der Anleger ein und steuert die Anlagepolitik des Sondervermögens durch Initiierung von Käufen und Verkäufen. Die Depotbank übernimmt die Verwahrung der Anlagegelder und überwacht die KVG, u. a. hinsichtlich der Rechtmäßigkeit der Geschäfte, der korrekten Ermittlung des Anteilspreises, des Collateral Managements und der Anlagegrenzprüfung.',
            gradingHints: [
              'KWG als Rechtsgrundlage und Allfinanzaufsicht der BaFin genannt',
              'FMA und FINMA als Pendants genannt',
              'KVG steuert die Anlagepolitik des Sondervermögens',
              'Depotbank verwahrt die Anlagegelder und überwacht die KVG',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 1 · Folien 15-17',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-traditionelle-assetklassen-exam',
    title: 'Probeklausur Kapitel 2 · Traditionelle Assetklassen',
    label: 'Kapitel 2',
    description:
      'Fachliche Probeklausur zu Assetklassen-Systematik, Aktienrechtsformen und -gattungen, Anleihen, dem Pari-Zusammenhang, Ratings sowie weiteren Finanzierungsformen auf Basis von Kapitel 2.',
    durationMinutes: 50,
    totalPoints: 48,
    isDemo: false,
    topics: [
      'Was sind Assetklassen?',
      'Aktien: Rechtsformen und Gattungen',
      'Anleihen, Verzinsung und Pari-Zusammenhang',
      'Rating und weitere Finanzierungsformen',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Bei Rechenargumentationen ist der Gedankengang relevant.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Abgrenzung',
        points: 19,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Assetklassen und Systematik',
            points: 5,
            task:
              'Definiere den Begriff Assetklasse und erkläre die Unterscheidung zwischen standardisierten (traditionellen) und nicht standardisierten (alternativen) Assetklassen. Nenne je drei Beispiele.',
            solution:
              'Eine Assetklasse bündelt Anlagen mit vergleichbaren wirtschaftlichen Eigenschaften, die ähnlich auf fundamentale Faktoren reagieren. Standardisierte (traditionelle) Assetklassen sind v. a. Aktien, Anleihen, Geldmarktinstrumente und Währungen samt zugehöriger Derivate und Fonds; sie sind hochliquide, fungibel und transparent handelbar. Nicht standardisierte (alternative) Assetklassen sind etwa Immobilien, Hedge Funds, Private Equity, Rohstoffe oder Sammlerstücke.',
            gradingHints: [
              'Assetklasse über vergleichbare Eigenschaften und ähnliche Reaktion auf Fundamentalfaktoren definiert',
              'Standardisiert/nicht standardisiert korrekt unterschieden',
              'Drei traditionelle Beispiele korrekt',
              'Drei alternative Beispiele korrekt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Was sind Assetklassen?',
          },
          {
            id: 'a2',
            type: 'multiple-choice',
            title: 'Aufgabe 2 · Aktiengattungen',
            points: 4,
            task:
              'Welche Aussagen zu Aktiengattungen sind korrekt? A: Vorzugsaktien dürfen maximal 50 % des Grundkapitals ausmachen und gewähren eine kumulative Vorzugsdividende. B: Inhaber- und Namensaktien unterscheiden sich nach der Übertragbarkeit. C: Ein Unternehmen kann gleichzeitig Nennwert- und Stückaktien ausgeben. D: Vinkulierte Namensaktien dürfen nur mit Zustimmung der Gesellschaft übertragen werden.',
            solution:
              'Korrekt sind A, B und D. C ist falsch: Ein Unternehmen kann nur Nennwertaktien ODER Stückaktien ausgeben, niemals beide Gattungen.',
            gradingHints: [
              'A, B und D als korrekt gewählt',
              'C nicht gewählt (nur Nennwert- oder Stückaktien)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Aktiengattungen',
          },
          {
            id: 'a3',
            type: 'single-choice',
            title: 'Aufgabe 3 · Pari-Zusammenhang',
            points: 3,
            task:
              'Eine Anleihe notiert über pari. Welche Aussage zum Verhältnis von Effektivverzinsung (ytm) und Nominalzins ist korrekt? A: Die ytm liegt über dem Nominalzins. B: Die ytm liegt unter dem Nominalzins. C: Die ytm entspricht genau dem Nominalzins. D: Der Pari-Zusammenhang gilt nur für Nullkuponanleihen.',
            solution:
              'Antwort B ist korrekt. Notiert eine Anleihe über pari, liegt die Effektivverzinsung (ytm) unter dem Nominalzins; bei Kurs unter pari liegt die ytm darüber, bei Kurs gleich pari entspricht die ytm dem Nominalzins.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Pari-Zusammenhang nicht verdreht',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Anleihen: Verzinsung',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Forderungs- vs. Anteilsrecht',
            points: 4,
            task:
              'Grenze die Rechtsstellung des Anleihekäufers von der des Aktionärs ab.',
            solution:
              'Eine Anleihe verbrieft ein Forderungsrecht: Der Käufer wird Gläubiger, der Emittent Schuldner mit unbedingter Zins- und Tilgungspflicht. Eine Aktie verbrieft dagegen ein Anteilsrecht: Der Aktionär wird Miteigentümer der AG mit Beteiligungs-, Stimm- und Gewinnrechten. Der Anleihekäufer hat ein Forderungsrecht ohne Eigentümerstellung, der Aktionär ein Beteiligungsrecht.',
            gradingHints: [
              'Anleihe als Forderungsrecht (Gläubiger/Schuldner) beschrieben',
              'Aktie als Anteilsrecht (Miteigentum) beschrieben',
              'Unbedingte Zins- und Tilgungspflicht des Emittenten genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Anleihen: Definition',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Ratinggrenze',
            points: 3,
            task:
              'Wo liegt die Grenze zwischen Investment Grade und spekulativem Bereich nach der Ratingskala von Moody’s und S&P? A: zwischen A3/A− und Baa1/BBB+. B: zwischen Baa3/BBB− und Ba1/BB+. C: zwischen Aa3/AA− und A1/A+. D: zwischen Ba3/BB− und B1/B+.',
            solution:
              'Antwort B ist korrekt. Die Grenze zwischen Investment Grade und spekulativem Bereich liegt zwischen Baa3/BBB− und Ba1/BB+; darüber liegt der Investment-Grade-Bereich, darunter der spekulative Bereich bis zum Default.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Investment Grade reicht bis Baa3/BBB−',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Risiken, Rating',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Transfer',
        points: 29,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 6 · Übernahmeschutz über Aktienformen',
            points: 7,
            task:
              'Ein Unternehmen möchte seine Eigentümerstruktur besser kontrollieren und feindliche Übernahmen erschweren. Erkläre, welche Aktienform sich nach der Logik des Kapitels eignet und warum, und grenze sie von der Inhaberaktie ab.',
            solution:
              'Geeignet sind Namensaktien, insbesondere vinkulierte Namensaktien. Bei Namensaktien sind die Eigentümer namentlich bekannt, was die Kontrolle der Eigentümerstruktur erleichtert. Bei vinkulierten Namensaktien dürfen Übertragungen nur mit Zustimmung der Gesellschaft erfolgen, sodass unerwünschte Anteilseigner abgewehrt werden können. Die Inhaberaktie ist dagegen anonym und besonders fungibel; sie bietet keinen Übernahmeschutz, weil Aktionäre nicht bekannt sind und Übertragungen ohne Zustimmung möglich sind.',
            gradingHints: [
              '(Vinkulierte) Namensaktie als geeignete Form genannt',
              'Bekanntheit der Eigentümer als Vorteil erklärt',
              'Zustimmungserfordernis bei vinkulierten Namensaktien genannt',
              'Inhaberaktie korrekt als anonym/fungibel ohne Übernahmeschutz abgegrenzt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Aktiengattungen',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 7 · Versprochene vs. erwartete Rendite',
            points: 8,
            task:
              'Erkläre anhand des Kapitels, warum die versprochene Rendite (ytm) einer Anleihe von der erwarteten Rendite abweicht. Beziehe dich auf das Rechenbeispiel mit 20 % Ausfallwahrscheinlichkeit und 60 % Recovery (versprochene ytm 18,9 %, erwartete ytm 9,4 %) und leite die Konsequenz für die Bewertung ab.',
            solution:
              'Die versprochene ytm unterstellt, dass alle Zins- und Tilgungszahlungen vollständig und termingerecht erfolgen. Wegen des Ausfallrisikos werden die Zahlungen aber nur mit einer bestimmten Wahrscheinlichkeit und im Ausfall nur teilweise (Recovery) geleistet. Im Beispiel ergibt sich bei 20 % Ausfallwahrscheinlichkeit und 60 % Recovery eine versprochene ytm von 18,9 %, aber nur eine erwartete ytm von 9,4 %. Die versprochene ytm überzeichnet also den tatsächlich zu erwartenden Ertrag; das Ausfallrisiko muss in der Bewertung berücksichtigt werden.',
            gradingHints: [
              'Versprochene ytm als Renditeversprechen ohne Ausfall beschrieben',
              'Ausfallwahrscheinlichkeit (PD) und Recovery als Korrekturfaktoren genannt',
              'Beispielwerte 18,9 % versprochen vs. 9,4 % erwartet korrekt eingeordnet',
              'Konsequenz: versprochene ytm überzeichnet den Ertrag',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · Risiken, Rating',
          },
          {
            id: 'b3',
            type: 'open',
            title: 'Aufgabe 8 · Wandel- vs. Optionsanleihe',
            points: 7,
            task:
              'Unterscheide Wandelanleihe und Optionsanleihe hinsichtlich des Schicksals der ursprünglichen Anleihe nach Ausübung des Rechts.',
            solution:
              'Bei der Wandelanleihe wird die Anleihe in Aktien gewandelt; nach der Wandlung erlischt die Anleihe und der Gläubiger wird Aktionär. Bei der Optionsanleihe bleibt die Anleihe nach Ausübung der Option bestehen; der Anleger behält den Zins- und Tilgungsanspruch und erhält zusätzlich Aktien über das separat ausübbare Optionsrecht.',
            gradingHints: [
              'Wandelanleihe: Anleihe erlischt nach Wandlung, Gläubiger wird Aktionär',
              'Optionsanleihe: Anleihe bleibt bestehen',
              'Zusätzlicher Aktienerwerb über das Optionsrecht genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · weitere Finanzierungsformen',
          },
          {
            id: 'b4',
            type: 'open',
            title: 'Aufgabe 9 · Schuldscheindarlehen und Hybridanleihe',
            points: 7,
            task:
              'Beschreibe das Schuldscheindarlehen als Finanzierungsform und erkläre die bilanzielle und steuerliche Einordnung der Hybridanleihe.',
            solution:
              'Das Schuldscheindarlehen ist ein nicht börsengehandeltes, bankarrangiertes Fremdkapital-Instrument für bonitätsstarke Unternehmen: ohne Besicherung, ohne Dokumentationspflichten und ohne externes Rating, dafür mit einer um ca. 0,5 % höheren Verzinsung und erschwertem Verkauf. Für den Investor ergibt sich der Vorteil, dass kein Abschreibungsrisiko besteht. Die Hybridanleihe ist eine Mischform zwischen Eigen- und Fremdkapital mit sehr langer Laufzeit; sie ist handelsbilanziell Eigenkapital, steuerrechtlich jedoch Fremdkapital — beide Einordnungen dürfen nicht gleichgesetzt werden.',
            gradingHints: [
              'Schuldscheindarlehen als nicht börsengehandeltes, bankarrangiertes FK-Instrument beschrieben',
              'Keine Besicherung/kein externes Rating und erschwerter Verkauf genannt',
              'Hybridanleihe handelsbilanziell Eigenkapital, steuerlich Fremdkapital korrekt unterschieden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 2 · weitere Finanzierungsformen',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-performanceanalyse-exam',
    title: 'Probeklausur Kapitel 7 · Performanceanalyse',
    label: 'Kapitel 7',
    description:
      'Fachliche Probeklausur zu geld- und zeitgewichteter Rendite, Sharpe-, Treynor- und Jensen-Maß sowie deren Bewertung auf Basis von Kapitel 7 (Folien 231–258).',
    durationMinutes: 55,
    totalPoints: 50,
    isDemo: false,
    topics: [
      'Performanceanalyse im Finanzcontrolling',
      'Geld- vs. zeitgewichtete Rendite',
      'Sharpe-, Treynor- und Jensen-Maß',
      'Bewertung der risikoadjustierten Maße',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und zeige bei Rechenaufgaben den Lösungsweg.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Definitionen',
        points: 18,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Säulen des Finanzcontrollings',
            points: 4,
            task:
              'Ordne die Performanceanalyse in das Finanzcontrolling ein und nenne die drei Säulen sowie die vier Funktionen der Performanceanalyse.',
            solution:
              'Die Performanceanalyse ist eine der drei Säulen des Finanzcontrollings, neben Risikoanalyse und Reporting. Sie misst und bewertet den Kapitalanlageerfolg nach Rendite, Risiko und risikoadjustierter Rendite. Ihre vier Funktionen sind die Kontrollfunktion (Messung in Relation zur Benchmark), die Steuerungsfunktion (Eingriff in die Asset Allocation), die Beurteilungs- und Anreizfunktion (leistungsgerechte Entlohnung des Portfoliomanagers) und die Marketingfunktion (Wettbewerbsvergleich und Kundenwerbung).',
            gradingHints: [
              'Drei Säulen Performanceanalyse, Risikoanalyse, Reporting genannt',
              'Messung und Bewertung von Rendite, Risiko, risikoadjustierter Rendite genannt',
              'Mindestens drei der vier Funktionen korrekt benannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 233–235',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · MWR vs. TWR',
            points: 4,
            task:
              'Welche Aussage zur geldgewichteten (MWR) und zeitgewichteten Rendite (TWR) ist korrekt? A: Die MWR misst nur das Marktgeschehen. B: Die MWR ist der interne Zinsfuß des Zahlungsstroms und erfasst Timing und Markt, die TWR ist die geometrische Durchschnittsrendite und misst nur das Marktgeschehen. C: Beide Maße sind stets identisch. D: Die TWR ist der interne Zinsfuß, die MWR die geometrische Durchschnittsrendite.',
            solution:
              'Antwort B ist korrekt. Die MWR ist der interne Zinsfuß des Zahlungsstroms und erfasst Timing und Marktgeschehen; die TWR ist die geometrische Durchschnittsrendite der Periodenrenditen und misst nur das Marktgeschehen (GIPS-Standard).',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'MWR als interner Zinsfuß, TWR als geometrische Durchschnittsrendite korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 237–241',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Risikobezug der risikoadjustierten Maße',
            points: 4,
            task:
              'Welche Zuordnungen sind korrekt? A: Sharpe-Ratio misst die Überschussrendite je Einheit Gesamtrisiko (σ). B: Treynor-Ratio misst die Überschussrendite je Einheit systematisches Risiko (β). C: Jensen-Alpha ist die absolute Über-/Unterrendite gegenüber der CAPM-erwarteten Rendite. D: Treynor-Ratio misst am Gesamtrisiko (σ).',
            solution:
              'Korrekt sind A, B und C. D ist falsch: Die Treynor-Ratio misst am systematischen Risiko (β), nicht am Gesamtrisiko (σ).',
            gradingHints: [
              'A, B und C als korrekt gewählt',
              'D nicht gewählt (Treynor misst an β, nicht an σ)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 242–253',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Jensen-Alpha',
            points: 6,
            task:
              'Definiere das Jensen-Alpha, gib seine grafische Deutung an und erkläre, warum es kein einwandfreies Ranking erlaubt.',
            solution:
              'Das Jensen-Alpha ist ein absolutes Performancemaß für den Renditeunterschied des Portfolios zur Benchmark unter Beachtung des Betas: α_P = (r_P − r_f) − (r_BM − r_f) · β_P. Grafisch ist es der vertikale Abstand der tatsächlichen Portfoliorendite zur CAPM-/SML-Linie bzw. der Achsenabschnitt der Regression von r_P auf r_BM; α > 0 bedeutet Outperformance, α < 0 Underperformance. Ein einwandfreies Ranking ist nicht möglich, weil das zur Alpha-Erzielung eingegangene Risiko unberücksichtigt bleibt — ein hohes Alpha kann mit deutlich mehr Risiko erkauft sein.',
            gradingHints: [
              'Jensen-Alpha als absolutes Maß und Renditedifferenz zur CAPM-Erwartung definiert',
              'Formel oder verbale Beschreibung (gemessene minus erwartete Überrendite) korrekt',
              'Grafische Deutung als vertikaler Abstand zur SML genannt',
              'Begründung: eingegangenes Risiko bleibt unberücksichtigt → kein sauberes Ranking',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 254–258',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Rechnen und Transfer',
        points: 32,
        tasks: [
          {
            id: 'b1',
            type: 'calculation',
            title: 'Aufgabe 5 · MWR vs. TWR am Beispiel',
            points: 8,
            task:
              'Ein Investor legt bei t=0 100 € an. Der Wert verdoppelt sich (+100 %), dann schießt der Investor bei t=1 weitere 300 € nach und verliert im zweiten Jahr 50 %. Endvermögen bei t=2: 250 €. (a) Berechne die zeitgewichtete Rendite (TWR). (b) Gib die geldgewichtete Rendite (MWR) als internen Zinsfuß an (Skriptwert) und interpretiere den Vergleich beider Maße.',
            solution:
              '(a) TWR = √((1 + r₁)(1 + r₂)) − 1 = √(2 · 0,5) − 1 = √1 − 1 = 0 %. Das Marktgeschehen war im Saldo neutral.\n(b) Die MWR ist der interne Zinsfuß des Zahlungsstroms −100 (t=0), −300 (t=1), +250 (t=2) und beträgt laut Skript −32,06 %. Da MWR (−32,06 %) kleiner als TWR (0 %) ist, lag ungünstiges Timing vor: Der Investor schoss die große Einzahlung gerade vor dem Verlustjahr nach.',
            gradingHints: [
              'TWR mit Periodenrenditen +100 % und −50 % korrekt zu 0 % berechnet',
              'MWR als interner Zinsfuß des Zahlungsstroms identifiziert',
              'MWR-Skriptwert −32,06 % genannt',
              'Interpretation: MWR < TWR = ungünstiges Timing',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 237–241',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 6 · Sharpe-Ratio',
            points: 8,
            task:
              'Bei einem risikolosen Zins r_f = 4 % weisen drei Anlagen folgende Jahresrendite und annualisierte Volatilität auf: Portfolio A (r = 25 %, σ = 29,4 %), Portfolio B (r = 10 %, σ = 6,6 %), Benchmark (r = 20 %, σ = 18,7 %). (a) Berechne die Sharpe-Ratio jeder Anlage. (b) Bilde das Ranking und interpretiere, warum Portfolio A trotz höchster Rendite abgeschlagen ist.',
            solution:
              '(a) SR = (μ − r_f) / σ. SR_A = (25 % − 4 %) / 29,4 % ≈ 0,71. SR_B = (10 % − 4 %) / 6,6 % ≈ 0,91. SR_BM = (20 % − 4 %) / 18,7 % ≈ 0,86.\n(b) Ranking: 1. Portfolio B (0,91), 2. Benchmark (0,86), 3. Portfolio A (0,71). Trotz der höchsten Rendite ist A wegen seines sehr hohen Gesamtrisikos (σ) nach der Sharpe-Ratio abgeschlagen — die Sharpe-Ratio misst die Risikoprämie je Einheit Gesamtrisiko.',
            gradingHints: [
              'Sharpe-Formel (μ − r_f) / σ korrekt angewandt',
              'SR_A ≈ 0,71, SR_B ≈ 0,91, SR_BM ≈ 0,86 korrekt (Rundungstoleranz ±0,02)',
              'Ranking B > Benchmark > A korrekt',
              'Interpretation: A trotz höchster Rendite wegen hohem Gesamtrisiko schlecht',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 243–248',
          },
          {
            id: 'b3',
            type: 'case-study',
            title: 'Aufgabe 7 · Widersprüchliches Sharpe-/Treynor-Ranking',
            points: 8,
            task:
              'In einem Beispiel (r_f = 3 %) ergibt sich für drei Anlagen: SR_A > SR_BM > SR_B, aber TR_B > TR_A > TR_BM. Erkläre, warum sich Sharpe- und Treynor-Ranking widersprechen können und welche Eigenschaft von Portfolio B die Ursache ist.',
            solution:
              'Die Sharpe-Ratio misst die Überschussrendite am Gesamtrisiko (σ), die Treynor-Ratio nur am systematischen Risiko (β). Portfolio B schneidet nach Treynor am besten ab, nach Sharpe aber sogar schlechter als die Benchmark. Ursache ist, dass Portfolio B schlecht diversifiziert ist und damit viel unsystematisches Risiko trägt: Dieses erhöht σ (Sharpe verschlechtert sich), schlägt sich aber nicht im β nieder (Treynor bleibt gut). Bei einem gut diversifizierten Portfolio fielen beide Rankings zusammen.',
            gradingHints: [
              'Sharpe misst an σ, Treynor an β korrekt unterschieden',
              'Schlechte Diversifikation von B als Ursache genannt',
              'Hohes unsystematisches Risiko erhöht σ, nicht β erklärt',
              'Aussage: bei guter Diversifikation fielen Rankings zusammen',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folie 252',
          },
          {
            id: 'b4',
            type: 'calculation',
            title: 'Aufgabe 8 · Jensen-Alpha berechnen',
            points: 8,
            task:
              'Bei r_f = 3 % und einer Benchmark-Rendite r_BM = 4 % weisen zwei Portfolios folgende Werte auf: Portfolio A (r_A = 4,5 %, β_A = 1,2772), Portfolio B (r_B = 4,3 %, β_B = 0,9911). (a) Berechne das Jensen-Alpha beider Portfolios. (b) Welches Portfolio hat das höhere Alpha und was bedeutet das?',
            solution:
              '(a) α_P = (r_P − r_f) − (r_BM − r_f) · β_P. α_A = (4,5 % − 3 %) − (4 % − 3 %) · 1,2772 = 1,5 % − 1,2772 % ≈ 0,22 %. α_B = (4,3 % − 3 %) − (4 % − 3 %) · 0,9911 = 1,3 % − 0,9911 % ≈ 0,31 %.\n(b) Beide Portfolios haben ein positives Jensen-Alpha und schlagen damit die CAPM-Erwartung. Portfolio B weist mit ca. 0,31 % das höhere Alpha auf — bezogen auf das systematische Risiko performt B besser als A und beide besser als die Benchmark.',
            gradingHints: [
              'Jensen-Formel korrekt aufgestellt',
              'α_A ≈ 0,22 % korrekt berechnet',
              'α_B ≈ 0,31 % korrekt berechnet',
              'B mit höherem Alpha; positives Alpha = Outperformance gegenüber CAPM-Erwartung',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 7 · Folien 254–256',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-aktives-vs-passives-exam',
    title: 'Probeklausur Kapitel 8 · Indizes / Aktives vs. Passives Management',
    label: 'Kapitel 8',
    description:
      'Fachliche Probeklausur zu Investmentphilosophien, Indexdefinition und -gewichtung, MSCI-World-Beispiel, passiven Vehikeln und der Empirie aktiv vs. passiv auf Basis von Kapitel 8 (Folien 259–288).',
    durationMinutes: 55,
    totalPoints: 50,
    isDemo: false,
    topics: [
      'Aktiv, passiv und tilted Management',
      'Index: Definition, Differenzierung und Gewichtung',
      'Passive Vehikel und ETFs',
      'Empirie und Tracking-Error',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und zeige bei Rechenaufgaben den Lösungsweg.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Abgrenzung',
        points: 18,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Aktiv, passiv und tilted',
            points: 5,
            task:
              'Grenze aktives, passives und tilted Management anhand der Markteffizienz-Annahme, der Zielsetzung und der Kosten voneinander ab.',
            solution:
              'Aktives Management unterstellt nicht-effiziente Märkte und zielt über Prognosen und bewusste Benchmark-Abweichungen auf eine positive risikoadjustierte Überschussrendite (Alpha); es ist mit hohem Prognoseaufwand und hohen Kosten verbunden. Passives Management unterstellt effiziente Märkte und bildet kostenminimal einen Index nach (Indextracking statt Prognose); typisches Vehikel ist der ETF. Tilted Management ist die Mischform: ausgehend vom passiven Portfolio wird gezielt nach ausgewählten Risikofaktoren abgewichen, umsetzbar als Core-Satellite-Strategie.',
            gradingHints: [
              'Aktiv: nicht-effiziente Märkte, Alpha-Ziel, höhere Kosten',
              'Passiv: effiziente Märkte, Indextracking, kostenminimal',
              'Tilted: Mischform ausgehend vom passiven Portfolio nach Risikofaktoren',
              'Core-Satellite-Strategie als Umsetzung des tilted Managements genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 3–5',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Rolle der Benchmark',
            points: 3,
            task:
              'Welche Rolle spielt die Benchmark im aktiven gegenüber dem passiven Management? A: passiv = zu schlagendes Portfolio, aktiv = Zielportfolio. B: passiv = zu replizierendes Zielportfolio, aktiv = zu schlagendes Portfolio. C: in beiden Fällen das zu schlagende Portfolio. D: in beiden Fällen irrelevant.',
            solution:
              'Antwort B ist korrekt. Im passiven Management ist die Benchmark das zu replizierende Zielportfolio; im aktiven Management ist sie das durch Über-/Untergewichtungen zu schlagende Portfolio.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Zielportfolio (passiv) vs. zu schlagendes Portfolio (aktiv) korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 6–8',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Differenzierung von Indizes',
            points: 4,
            task:
              'Nach welchen Kriterien lassen sich Indizes differenzieren? A: Anzahl der Indexmitglieder (Auswahl- vs. Benchmarkindex). B: Gewichtung (preis- vs. kapitalisierungsgewichtet). C: Berechnung (Kurs- vs. Performanceindex). D: garantierte Mindestrendite des Index.',
            solution:
              'Korrekt sind A, B und C. D ist falsch: Indizes garantieren keine Mindestrendite. Die drei Differenzierungskriterien sind Anzahl der Mitglieder, Gewichtung und Dividendenbehandlung (Kurs- vs. Performanceindex).',
            gradingHints: [
              'A, B und C als korrekt gewählt',
              'D nicht gewählt (keine garantierte Mindestrendite)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 13–14',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Passive Vehikel und Insolvenzrisiko',
            points: 3,
            task:
              'Welche Aussage zum Insolvenzrisiko passiver Vehikel ist korrekt? A: ETFs und Indexfonds tragen ein Totalverlustrisiko. B: Indexfonds und ETFs sind insolvenzgeschütztes Sondervermögen, Indexzertifikate sind Schuldverschreibungen mit Totalverlustrisiko. C: Alle drei sind Schuldverschreibungen. D: Alle drei sind Sondervermögen.',
            solution:
              'Antwort B ist korrekt. Indexfonds und ETFs sind insolvenzgeschütztes Sondervermögen; Indexzertifikate sind dagegen Schuldverschreibungen mit Totalverlustrisiko bei Emittenteninsolvenz.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Sondervermögen (ETF/Indexfonds) vs. Totalverlustrisiko (Zertifikat) korrekt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folie 22',
          },
          {
            id: 'a5',
            type: 'definition',
            title: 'Aufgabe 5 · Tracking-Error',
            points: 3,
            task:
              'Definiere den Tracking-Error und nenne zwei Ursachen bei Indexfonds.',
            solution:
              'Der Tracking-Error misst die Qualität der Indexnachbildung als Volatilität der Renditedifferenz zwischen Portfolio- und Benchmark-Rendite (TE = σ(r_P − r_B)) — das Risiko, die Benchmark-Rendite zu verfehlen. Ursachen sind u. a. Transaktionskosten im Portfolio (nicht in der Benchmark), unvollständige Replikation aus Kostengründen, Reinvestitions- und Steuerregeln sowie die Begrenzung des Gewichts eines Einzelwerts auf 10 %.',
            gradingHints: [
              'Tracking-Error als Volatilität der Renditedifferenz definiert',
              'Mindestens zwei valide Ursachen genannt',
              'Nicht mit einer aktiven Strategie verwechselt (unbeabsichtigtes Nachbildungsrisiko)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folie 30',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Transfer',
        points: 32,
        tasks: [
          {
            id: 'b1',
            type: 'calculation',
            title: 'Aufgabe 6 · Preis- vs. kapitalisierungsgewichteter Index',
            points: 8,
            task:
              'Ein Index enthält vier Aktien. Kurse am 30.11.: A=30, B=10, C=20, D=60; am 31.12.: A=36, B=12, C=25, D=58. Die Gesamtmarktwerte betragen am 30.11. 110.000 und am 31.12. 126.000. (a) Berechne den preisgewichteten Indexstand zu beiden Stichtagen und die Monatsrendite. (b) Berechne die kapitalisierungsgewichtete Monatsrendite. (c) Erkläre, warum die Ergebnisse abweichen.',
            solution:
              '(a) Preisgewichtet = arithmetisches Mittel der Kurse (Teiler 4). Index 30.11. = (30+10+20+60)/4 = 30. Index 31.12. = (36+12+25+58)/4 = 32,75. r_Preis = (32,75 − 30)/30 = 9,2 %.\n(b) r_Kap = (126.000 − 110.000)/110.000 = 14,5 %.\n(c) Die Gewichtungsmethode verändert das Ergebnis: Titel D hat einen hohen, aber fallenden Kurs und wirkt deshalb im preisgewichteten Index stark (dämpfend), im kapitalisierungsgewichteten Index aber nur entsprechend seinem Marktwert.',
            gradingHints: [
              'Preisindex als arithmetisches Mittel der Kurse (Teiler 4) berechnet',
              'Indexstände 30 und 32,75 sowie r_Preis = 9,2 % korrekt',
              'Kapitalisierungsgewichtete Rendite r_Kap = 14,5 % korrekt',
              'Begründung über die starke Wirkung des hohen, fallenden Kurses von Titel D im Preisindex',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 17–18',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 7 · Market Cap Bias des MSCI World',
            points: 8,
            task:
              'Erkläre am Beispiel des MSCI World den Market Cap Bias kapitalisierungsgewichteter Indizes. Gehe auf die Konzentration der Top-Werte und die Veränderung der Länder- und Sektorgewichte von 2018 auf 2026 ein.',
            solution:
              'Der MSCI World ist kapitalisierungsgewichtet, ohne Emerging Markets. Durch die Gewichtung nach Marktkapitalisierung dominieren wenige große (US-Tech-)Werte den Index; die Top-10-Constituents tragen 2026 zusammen rund 26,99 % des Index-Gewichts. Die Konzentration nimmt über die Zeit zu (Market Cap Bias): Der US-Länderanteil steigt von 59,21 % (2018) auf 71,91 % (2026), und der IT-Sektoranteil steigt von rund 16,8 % auf 27,61 %, sodass Information Technology die Financials als größten Sektor ablöst.',
            gradingHints: [
              'Kapitalisierungsgewichtung als Ursache des Bias genannt',
              'Dominanz weniger großer US-Werte erklärt',
              'US-Anteil 59,21 % → 71,91 % korrekt genannt',
              'IT-Sektor steigt auf 27,61 % und wird größter Sektor genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 15–16',
          },
          {
            id: 'b3',
            type: 'case-study',
            title: 'Aufgabe 8 · Empirie aktiv vs. passiv',
            points: 8,
            task:
              'Ein Anleger fragt, ob aktives Management langfristig vorteilhaft ist. Beziehe dich auf die Erfolgsquote aktiver Fonds, das Bogle-Ergebnis zur Index-Superiorität und das Vanguard-Argument vom Nullsummenspiel.',
            solution:
              'Empirisch spricht vieles für passiv: Über fast alle Aktien-Kategorien schlägt nur eine Minderheit aktiver Fonds die Benchmark (Erfolgsquote deutlich unter 50 %), und die Quote sinkt mit dem Anlagehorizont. In zwei unabhängigen 30-Jahres-Perioden (1945–1975 und 1985–2015) übertraf der S&P 500 den durchschnittlichen aktiven Fonds um jeweils rund 1,6 % p. a. bei höherer Sharpe Ratio. Das Vanguard-Argument: Aktives Management ist vor Kosten ein Nullsummenspiel; nach Abzug der Fondskosten verschiebt sich die mediane Fondsrendite unter die Benchmark, sodass im Mittel mehr Fonds die Benchmark verfehlen als sie schlagen.',
            gradingHints: [
              'Erfolgsquote aktiver Fonds unter 50 %, sinkend mit Horizont genannt',
              'Bogle: S&P 500 schlägt Durchschnittsfonds um ca. 1,6 % p. a. genannt',
              'Vanguard: aktives Management vor Kosten ein Nullsummenspiel erklärt',
              'Konsequenz nach Kosten: mediane Fondsrendite unter Benchmark',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 27–29',
          },
          {
            id: 'b4',
            type: 'open',
            title: 'Aufgabe 9 · Kurs- vs. Performanceindex und ETF-Eigenschaften',
            points: 8,
            task:
              '(a) Unterscheide Kurs- und Performanceindex und nenne je ein Beispiel. (b) Erkläre, warum ein ETF als „börsengehandelt + Index + Fonds" beschrieben wird und welche Vorteile sich daraus ergeben.',
            solution:
              '(a) Der Kursindex (z. B. DJIA) reinvestiert keine Dividenden, sodass über lange Horizonte Opportunitätskosten entstehen. Der Performanceindex (Total Return, z. B. DAX) reinvestiert die Erträge und bildet so die Gesamtrendite ab.\n(b) Ein ETF ist börsengehandelt (jederzeit handelbar wie eine Aktie statt nur einmal täglich), bildet einen Index nach (Marktbarometer) und ist ein Fonds bzw. Sondervermögen (insolvenzgeschützt). Vorteile: permanent aktueller Kurs, keine Ausgabeaufschläge sowie sehr geringe Verwaltungskosten, da nur der Index nachgebildet und nicht aktiv gemanagt wird.',
            gradingHints: [
              'Kursindex ohne Dividendenreinvestition, Beispiel genannt',
              'Performanceindex mit Dividendenreinvestition, Beispiel genannt',
              'ETF = börsengehandelt + Index + Fonds korrekt aufgeschlüsselt',
              'Vorteile (laufende Handelbarkeit, keine Ausgabeaufschläge, geringe Kosten) genannt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 8 · Folien 20, 23',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management-fintechs-exam',
    title: 'Probeklausur Kapitel 9 · FinTechs im Asset Management / Robo Advisors',
    label: 'Kapitel 9',
    description:
      'Fachliche Probeklausur zu FinTech-Definition und -Klassifikation, Komplexität und Defiziten des traditionellen Asset Managements, Robo-Advisor-Charakteristika, dem Robo-Advisory-Prozess und den Angebotstypen auf Basis von Kapitel 9 (Folien 289–305).',
    durationMinutes: 45,
    totalPoints: 42,
    isDemo: false,
    topics: [
      'FinTech: Definition und Klassifikation',
      'Komplexität und Defizite',
      'Robo-Advisor-Charakteristika und Markt',
      'Robo-Advisory-Prozess und Angebotstypen',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und begründe deine Antworten knapp.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Nutze die Lösungen erst nach der Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Einordnung',
        points: 17,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · FinTech und Verortung von Robo-Advice',
            points: 5,
            task:
              'Definiere den Begriff FinTech, nenne den historischen Bezugspunkt des modernen FinTech-Begriffs und verorte Robo-Advice in der FinTech-Klassifikation.',
            solution:
              'FinTech setzt sich aus Financial Services und Technology zusammen und bezeichnet innovative Unternehmen, die mit moderner Technologie Finanzdienstleistungen erbringen. Der moderne FinTech-Begriff entstand mit der Finanzkrise 2008, auch wenn die technischen Wurzeln weiter zurückreichen. In der Klassifikation (in Anlehnung an Dorfleitner et al. 2020) gliedern sich FinTechs in vier Hauptsegmente: Finanzierung, Vermögensverwaltung, Zahlungsverkehr und Sonstige. Robo-Advice ist dem Segment Vermögensverwaltung zugeordnet.',
            gradingHints: [
              'FinTech aus Financial Services und Technology hergeleitet',
              'Finanzkrise 2008 als historischer Bezugspunkt genannt',
              'Vier Hauptsegmente genannt',
              'Robo-Advice korrekt dem Segment Vermögensverwaltung zugeordnet',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folien 291–293',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Extensive Komplexität',
            points: 3,
            task:
              'Welche Aussage zur extensiven Komplexität ist korrekt? A: Sie betrifft die Komplexität innerhalb einer Person und hängt stark von makroökonomischen Größen ab. B: Sie betrifft die Komplexität zwischen Personen und hängt nicht von makroökonomischen Größen ab, da diese für alle Marktteilnehmer gleich sind. C: Sie ist identisch mit der intensiven Komplexität. D: Sie wird durch Robo Advisory vollständig beseitigt.',
            solution:
              'Antwort B ist korrekt. Die extensive Komplexität betrifft die Unterschiede zwischen Personen und ist von makroökonomischen Größen unabhängig, weil diese als Rahmenbedingungen für alle Marktteilnehmer identisch sind. Bei der intensiven Komplexität (innerhalb einer Person) wirken makroökonomische Einflüsse dagegen mit.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Unabhängigkeit der extensiven Komplexität von makroökonomischen Größen verstanden',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folien 294–295',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Defizite des traditionellen Asset Managements',
            points: 4,
            task:
              'Welche Defizite des traditionellen Asset Managements nennt Kapitel 9? A: Geringer Grad der Financial Literacy. B: Interessenskonflikte zwischen Anleger und Portfoliomanager. C: Starke Abhängigkeit von den Fähigkeiten des Portfoliomanagers. D: Garantierte Outperformance des aktiven Managements.',
            solution:
              'Korrekt sind A, B und C. D ist falsch: Das aktive Portfoliomanagement hat grundsätzlich geringere Erfolgsaussichten — eine garantierte Outperformance gibt es nicht.',
            gradingHints: [
              'A, B und C als korrekt gewählt',
              'D nicht gewählt (keine garantierte Outperformance)',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folie 295',
          },
          {
            id: 'a4',
            type: 'single-choice',
            title: 'Aufgabe 4 · Robo-Advisory-Prozess',
            points: 5,
            task:
              'Welche Reihenfolge beschreibt den Robo-Advisory-Prozess korrekt? A: Monitoring/Rebalancing → Onboarding → Strategie-Implementierung. B: Investor Screening & Onboarding → Investmentstrategie-Implementierung → Monitoring und Rebalancing. C: Strategie-Implementierung → Monitoring → Onboarding. D: Onboarding → Monitoring → Strategie-Implementierung.',
            solution:
              'Antwort B ist korrekt. Der Robo-Advisory-Prozess gliedert sich in 1) Investor Screening & Onboarding, 2) Investmentstrategie-Implementierung und 3) Monitoring und Rebalancing.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Reihenfolge Onboarding → Implementierung → Monitoring/Rebalancing korrekt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folien 300–302',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Transfer',
        points: 25,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 5 · Onboarding per Online-Fragebogen',
            points: 8,
            task:
              'Ein Robo Advisor erhebt das Anlegerprofil ausschließlich über einen Online-Multiple-Choice-Fragebogen. Nenne die Vorteile dieses Kanals und erläutere die drei Nachteile, die Kapitel 9 mit dem Aspekt „Advisor" verbindet.',
            solution:
              'Vorteile des Online-Fragebogens: geringere Kosten als beim persönlichen Interview (Dauer Ø ca. 15 Minuten), flexible Anpassung der Investmentziele durch den Kunden sowie einfache und kostengünstige Dokumentation der Investmentziele durch den Robo Advisor. Nachteile (Aspekt Advisor): Informationsverlust durch das Multiple-Choice-Format; Kunden interpretieren die Fragen unterschiedlich; die Fragebögen unterstellen vergleichbare Anlegertypen, obwohl die Antworten subjektiv sind, woraus ein Response Bias entsteht.',
            gradingHints: [
              'Mindestens zwei Vorteile (geringe Kosten, Flexibilität, einfache Dokumentation) genannt',
              'Informationsverlust durch MC-Format genannt',
              'Unterschiedliche Frageninterpretation genannt',
              'Response Bias als dritter Nachteil korrekt erklärt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folien 300–301',
          },
          {
            id: 'b2',
            type: 'case-study',
            title: 'Aufgabe 6 · ETF-Filterkaskade',
            points: 8,
            task:
              'Erkläre die mehrstufige ETF-Filterkaskade der Investmentstrategie-Implementierung. Nenne die Ausschlusskriterien und das Ergebnis, und begründe, welches Ziel die Implementierung verfolgt.',
            solution:
              'Ausgehend vom Universum aller investierbaren ETFs werden in mehreren Stufen ausgeschlossen: Nischen- und Leveraged-ETFs, ETFs mit kurzer Kurshistorie, ETFs mit ungenügender Marktliquidität und ETFs mit schlechter Performance. Am Ende verbleibt ein finales Set von ca. 3–6 % aller ETFs aus der Ausgangsstufe. Ziel der Implementierung — gemäß Portfolio Selection Theory mit ETFs als Anlageuniversum — ist die Eliminierung von Interessenskonflikten; dennoch bleiben Agency-Probleme möglich, z. B. bei der Trade Execution durch Kooperationen.',
            gradingHints: [
              'Mindestens drei Ausschlusskriterien genannt',
              'Ergebnis ca. 3–6 % aller ETFs genannt',
              'Ziel: Eliminierung von Interessenskonflikten genannt',
              'Hinweis auf verbleibende Agency-Probleme als Transferleistung',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folie 302',
          },
          {
            id: 'b3',
            type: 'open',
            title: 'Aufgabe 7 · Einfache vs. aufwendigere Angebote',
            points: 9,
            task:
              'Unterscheide einfache Angebote (§ 34f GewO) von aufwendigeren, lizenzierten Angeboten anhand des wichtigsten Unterscheidungskriteriums und der eingesetzten Instrumente. Erkläre außerdem, warum Robo Advice im Sinne der Anlageberatung nicht mit der Finanzportfolioverwaltung gleichzusetzen ist.',
            solution:
              'Das wichtigste Unterscheidungskriterium ist die Ausgestaltung der Portfolioanpassungen (Rebalancing). Einfache Angebote (§ 34f GewO, z. B. vaamo, GINMON) helfen bei der Auswahl der passenden strategischen Asset Allocation, hinterlegen die Assetklassen mit kostengünstigen ETFs und führen ein regelmäßiges Rebalancing durch. Aufwendigere Angebote mit Vermögensverwaltungs-Lizenz (z. B. scalable.CAPITAL, investify) hinterlegen die Allokation mittels ETFs oder Zertifikaten und nehmen eine aktive, automatische taktische Neugewichtung in Bandbreiten um die Target-Allokation vor. Robo Advice im Sinne der Anlageberatung ist eine einzelne/einmalige Anlageempfehlung, während eine fortlaufende Vermögensverwaltung mit Rebalancing der Finanzportfolioverwaltung entspricht — beide Tätigkeiten dürfen nicht gleichgesetzt werden.',
            gradingHints: [
              'Rebalancing als wichtigstes Unterscheidungskriterium genannt',
              'Einfache Angebote: nur strategische Allokation mit regelmäßigem Rebalancing, ETFs',
              'Aufwendigere Angebote: aktive taktische Neugewichtung, ETFs oder Zertifikate',
              'Anlageberatung (einmalig) vs. Finanzportfolioverwaltung (fortlaufend) korrekt abgegrenzt',
            ],
            sourceRef: 'Quelle: Asset Management · Kapitel 9 · Folien 296, 303–304',
          },
        ],
      },
    ],
  },
];

export default exams;
