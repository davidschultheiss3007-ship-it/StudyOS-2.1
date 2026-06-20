// Paper-style Probeklausuren für das Modul Human Resources (Semester 4).
// Schema identisch zu asset-management/exams.js:
// { id, title, label, description, durationMinutes, totalPoints, isDemo, topics[],
//   instructions[], sections[].tasks[] } mit Task-Typen single-choice / multiple-choice /
//   definition / calculation / case-study, jeweils mit solution + gradingHints (+ sourceRef).
// Alle Inhalte sind ausschließlich aus den Topic-Quellen (HR1–HR10) abgeleitet.

export const exams = [
  {
    id: 'human-resources-grundlagen-exam',
    title: 'Probeklausur Teil 1 · Grundlagen, Strategie und Ethik',
    label: 'Kapitel 1–3',
    description:
      'Fachliche Probeklausur zu den Grundlagen des HRM, zur Unternehmensstrategie und Personalpolitik sowie zu Führung, Generationen und Unternehmensethik auf Basis der Kapitel 1–3.',
    durationMinutes: 50,
    totalPoints: 50,
    isDemo: false,
    topics: [
      'Grundlagen und Prozesskette des HRM',
      'Arbeitsrecht und Mitbestimmung',
      'Managementebenen und Personalpolitik',
      'Ethikpositionen und ethische Bezugsfelder',
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
        points: 22,
        tasks: [
          {
            id: 'a1',
            type: 'definition',
            title: 'Aufgabe 1 · Grundbegriffe des HRM',
            points: 6,
            task:
              'Grenze die Begriffe Personalpolitik und Personalmanagement voneinander ab und definiere Human Resource Management in einem Satz.',
            solution:
              'Personalpolitik ist der Gestaltungsrahmen bzw. die Leitlinie für die Ziele der Personalwirtschaft, ausgerichtet an der Unternehmenspolitik. Personalmanagement ist der gesamte Aufgabenbereich für personelle Fragen (Systemgestaltung/Führungstätigkeiten plus Verhaltenssteuerung/Mitarbeiterführung). HRM ist der Bereich der Betriebswirtschaft, der sich mit dem Produktionsfaktor Arbeit bzw. dem Personal auseinandersetzt und auf nachhaltigen Erfolg sowie Wertschöpfung auf lange Sicht zielt.',
            gradingHints: [
              'Personalpolitik als Rahmen/Leitlinie erkannt',
              'Personalmanagement als gesamter Aufgabenbereich erkannt',
              'Beide nicht gleichgesetzt',
              'HRM korrekt über den Produktionsfaktor Arbeit definiert',
            ],
            sourceRef: 'Quelle: Human Resources · HR1 · Grundbegriffe des HRM',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Prozesskette der Personalarbeit',
            points: 3,
            task:
              'Welche Reihenfolge gibt die Prozesskette der operativen Personalarbeit korrekt wieder? A: Einsatz → Beschaffung → Führung → Beurteilung → Entwicklung → Freisetzung. B: Beschaffung → Einsatz → Führung → Beurteilung → Entwicklung → Freisetzung. C: Beurteilung → Beschaffung → Einsatz → Führung → Entwicklung → Freisetzung. D: Führung → Beschaffung → Einsatz → Beurteilung → Entwicklung → Freisetzung.',
            solution:
              'Antwort B ist korrekt: Beschaffung → Einsatz → Führung → Beurteilung → Entwicklung → Freisetzung.',
            gradingHints: [
              'Antwort B eindeutig genannt',
              'Beschaffung am Anfang, Freisetzung am Ende erkannt',
            ],
            sourceRef: 'Quelle: Human Resources · HR1 · Themenfelder und Vorgehen',
          },
          {
            id: 'a3',
            type: 'multiple-choice',
            title: 'Aufgabe 3 · Gliederung des Arbeitsrechts',
            points: 4,
            task:
              'Welche Zuordnungen zur Gliederung des Arbeitsrechts sind korrekt? A: Arbeitsvertragsrecht ist individuelles Arbeitsrecht. B: Arbeitsschutzrecht ist individuelles Arbeitsrecht. C: Tarifvertragsrecht ist kollektives Arbeitsrecht. D: Mitbestimmungsrecht ist individuelles Arbeitsrecht.',
            solution:
              'Korrekt sind A, B und C. D ist falsch: Das Mitbestimmungsrecht gehört zum kollektiven Arbeitsrecht.',
            gradingHints: [
              'A, B und C genannt',
              'D als falsch erkannt (Mitbestimmung ist kollektiv)',
            ],
            sourceRef: 'Quelle: Human Resources · HR1 · Rechtlicher Rahmen / Arbeitsrecht',
          },
          {
            id: 'a4',
            type: 'definition',
            title: 'Aufgabe 4 · Köpfe vs. Kapazitäten und leitende Angestellte',
            points: 5,
            task:
              'Erkläre den Unterschied zwischen Köpfen und Kapazitäten und ordne leitende Angestellte nach § 5 Abs. 3 BetrVG ein.',
            solution:
              'Köpfe sind die Anzahl der Mitarbeiter ohne Berücksichtigung von Teilzeitfaktoren; Kapazitäten sind die Full-Time-Equivalents, also rechnerische Vollzeitäquivalente. Leitende Angestellte sind arbeitsrechtlich Arbeitnehmer, gelten aber nicht als Arbeitnehmer im Sinne des BetrVG (weder wahlberechtigt noch wählbar).',
            gradingHints: [
              'Köpfe ohne Teilzeitfaktor beschrieben',
              'Kapazitäten als Vollzeitäquivalente/FTE beschrieben',
              'Leitende Angestellte als Arbeitnehmer, aber nicht im Sinne des BetrVG eingeordnet',
            ],
            sourceRef: 'Quelle: Human Resources · HR2 · Arbeitsrecht und Personalbegriffe (§ 5 Abs. 3 BetrVG)',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · Ethikpositionen',
            points: 4,
            task:
              'Welche Aussage ordnet die klassischen Ethikpositionen korrekt zu? A: Aristoteles begründet eine pflichtorientierte Ethik, Kant eine glücksorientierte Tugendethik. B: Aristoteles begründet eine glücksorientierte Tugendethik, Kant mit dem kategorischen Imperativ eine pflichtorientierte (deontologische) Ethik. C: Beide begründen eine rein utilitaristische Ethik. D: Beide lehnen Tugendhaftigkeit ab.',
            solution:
              'Antwort B ist korrekt. Aristoteles steht für die glücksorientierte Tugendethik, Kant mit dem kategorischen Imperativ für eine pflichtorientierte (deontologische) Ethik.',
            gradingHints: [
              'Antwort B genannt',
              'Aristoteles = Tugendethik, Kant = deontologisch korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Human Resources · HR3 · Klassische Ethikpositionen (Aristoteles und Kant)',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Anwendung und Vergleich',
        points: 28,
        tasks: [
          {
            id: 'b1',
            type: 'case-study',
            title: 'Aufgabe 6 · Managementebenen und Personalpolitik',
            points: 8,
            task:
              'Ordne die drei Managementebenen (normativ, strategisch, operativ) nach Zeithorizont und Leitsatz ein und erkläre, wo die Personalpolitik angesiedelt ist.',
            solution:
              'Normatives Management hat den weitesten Zeithorizont (über 5 Jahre) mit dem Leitsatz „der Grund, warum". Strategisches Management liegt bei 2–5 Jahren mit dem Leitsatz „die richtigen Dinge tun" (Effektivität). Operatives Management reicht bis 1 Jahr (taktisch bis 2 Jahre) mit dem Leitsatz „die Dinge richtig tun" (Effizienz). Die Personalpolitik ist auf der strategischen Ebene angesiedelt und übersetzt die langfristige Unternehmenspolitik in handlungsnahe Aktivitäten.',
            gradingHints: [
              'Drei Ebenen mit korrekten Zeithorizonten genannt',
              'Effektivität (strategisch) und Effizienz (operativ) nicht verwechselt',
              'Personalpolitik der strategischen Ebene zugeordnet',
            ],
            sourceRef: 'Quelle: Human Resources · HR2 · Managementebenen und Zeithorizonte',
          },
          {
            id: 'b2',
            type: 'definition',
            title: 'Aufgabe 7 · Utilitaristische vs. deontologische Ethik',
            points: 6,
            task:
              'Stelle utilitaristische/konsequentialistische und deontologische Ethik über ihre Leitfrage und ihr Bewertungskriterium gegenüber (z. B. am Trolley-Problem).',
            solution:
              'Die utilitaristische/konsequentialistische Ethik fragt nach den Folgen: Eine Handlung ist gut, wenn ihre Folgen nützlich sind (folgenorientiert). Die deontologische Ethik fragt nach der Pflicht: Eine Handlung wird unabhängig von ihren Folgen nach der Pflicht beurteilt (pflichtorientiert). Das Trolley-Problem macht beide Logiken sichtbar — Bewertung nach dem Nutzen der Folgen versus Bewertung nach der Pflicht.',
            gradingHints: [
              'Utilitaristisch als folgenorientiert erklärt',
              'Deontologisch als pflichtorientiert (unabhängig von Folgen) erklärt',
              'Beide nicht vertauscht',
            ],
            sourceRef: 'Quelle: Human Resources · HR3 · Ethische Bewertung (Trolley-Problem)',
          },
          {
            id: 'b3',
            type: 'definition',
            title: 'Aufgabe 8 · Ebenenmodell und Legalität',
            points: 6,
            task:
              'Beschreibe das Ebenenmodell der ethischen Bezugsfelder (Makro/Meso/Mikro) und erkläre, warum Legalität nicht automatisch moralische Richtigkeit bedeutet.',
            solution:
              'Das Ebenenmodell lautet: Wirtschaftsethik auf der Makroebene → Unternehmensethik auf der Mesoebene → Führungsethik auf der Mikroebene, eingebettet in die Sozialethik. Legalität ist nur die Mindestanforderung und nicht automatisch moralisch richtig; Unternehmensethik wird gerade im Graubereich zwischen Gesetz und Praxis relevant.',
            gradingHints: [
              'Wirtschaftsethik = Makro, Unternehmensethik = Meso, Führungsethik = Mikro korrekt zugeordnet',
              'Einbettung in die Sozialethik erwähnt',
              'Legalität als Mindestanforderung, nicht als ethischer Maßstab erklärt',
            ],
            sourceRef: 'Quelle: Human Resources · HR3 · Ethische Bezugsfelder und Unternehmensethik',
          },
          {
            id: 'b4',
            type: 'case-study',
            title: 'Aufgabe 9 · Personalverwaltung vs. Personalmanagement',
            points: 8,
            task:
              'Vergleiche die klassische Personalverwaltung und das moderne Personalmanagement entlang der Dimensionen Ziele, Menschenbild, Umweltzustand und Antriebskräfte.',
            solution:
              'Ziele: Personalverwaltung verfolgt Rechtmäßigkeit und Arbeitsproduktivität, Personalmanagement Zufriedenheit und Wirtschaftlichkeit. Menschenbild: homo oeconomicus/Normarbeiter versus complex man/Organisationsmitglied. Umweltzustand: statisch versus dynamisch. Antriebskräfte: Gesetzgeber versus Wettbewerb. Der Kern des Wandels ist der Übergang vom homo oeconomicus zum complex man und vom statischen zum dynamischen Umfeld.',
            gradingHints: [
              'Mindestens drei der vier Dimensionen korrekt gegenübergestellt',
              'Menschenbild homo oeconomicus vs. complex man genannt',
              'Umweltzustand statisch vs. dynamisch genannt',
            ],
            sourceRef: 'Quelle: Human Resources · HR1 · Personalverwaltung vs. Personalmanagement',
          },
        ],
      },
    ],
  },
  {
    id: 'human-resources-prozesse-administration-exam',
    title: 'Probeklausur Teil 2 · Personalprozesse, Administration und Beurteilung',
    label: 'Kapitel 4–10',
    description:
      'Fachliche Probeklausur zur operativen Personalplanung, Beschaffung, Auswahl und Arbeitszeugnissen, Auswahlverfahren, Personaladministration/Sozialversicherung/DSGVO, Personalcontrolling/Onboarding/Laufbahnplanung sowie Arbeitsorganisation und Personalbeurteilung auf Basis der Kapitel 4–10.',
    durationMinutes: 75,
    totalPoints: 67,
    isDemo: false,
    topics: [
      'Operative Personalplanung und Beschaffung',
      'Personalauswahl, Arbeitszeugnisse und Verfahren',
      'Sozialversicherung, Personalkosten und DSGVO',
      'Personalcontrolling, Kennzahlen und Arbeitszeit',
      'Arbeitsorganisation und 360-Grad-Feedback',
    ],
    instructions: [
      'Bearbeite die Aufgaben schriftlich und zeige bei Rechenaufgaben den vollständigen Lösungsweg.',
      'Bei Auswahlaufgaben sind nur die geforderten Antwortbuchstaben zu notieren.',
      'Bei Zeugnis- und Kennzahlenaufgaben sorgfältig auf Signalwörter und Bezugsgrößen achten.',
      'Nutze die Musterlösungen erst nach der vollständigen Bearbeitung zur Kontrolle.',
    ],
    sections: [
      {
        id: 'teil-a',
        title: 'Teil A · Begriffe und Auswahl',
        points: 20,
        tasks: [
          {
            id: 'a1',
            type: 'multiple-choice',
            title: 'Aufgabe 1 · Kompetenzdimensionen',
            points: 4,
            task:
              'Welche vier Kompetenzdimensionen umfasst ein Anforderungsprofil? A: Fachkompetenz. B: Persönlichkeitskompetenz. C: Methodenkompetenz und Sozialkompetenz. D: Steuerkompetenz.',
            solution:
              'Korrekt sind A, B und C (Fach-, Persönlichkeits-, Methoden- und Sozialkompetenz). D ist keine Kompetenzdimension des Modells.',
            gradingHints: [
              'A, B und C genannt',
              'Vier Kompetenzarten erkannt (Fach, Persönlichkeit, Methode, Sozial)',
              'D als falsch erkannt',
            ],
            sourceRef: 'Quelle: Human Resources · HR4 · Das Vier-Felder-Kompetenzmodell',
          },
          {
            id: 'a2',
            type: 'single-choice',
            title: 'Aufgabe 2 · Assessment Center',
            points: 3,
            task:
              'Wie ist das Assessment Center einzuordnen? A: Als eigenständiges Einzelinstrument. B: Als Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren. C: Als grafologisches Gutachten. D: Als ärztliche Eignungsuntersuchung.',
            solution:
              'Antwort B ist korrekt. Das Assessment Center ist die Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren; grafologische Gutachten stehen eigenständig daneben.',
            gradingHints: [
              'Antwort B genannt',
              'Kombinationscharakter erkannt, nicht als Einzelinstrument behandelt',
            ],
            sourceRef: 'Quelle: Human Resources · HR6/HR7 · Auswahlverfahren / Assessment Center',
          },
          {
            id: 'a3',
            type: 'single-choice',
            title: 'Aufgabe 3 · Insights-MDI-Farbrad',
            points: 3,
            task:
              'Welche Farbe ordnet das Insights-MDI-Modell dem analytischen Typ zu? A: Rot. B: Blau. C: Grün. D: Gelb.',
            solution:
              'Antwort B ist korrekt: Blau steht für den analytischen Typ. Rot ist dominant, Grün stetig, Gelb initiativ.',
            gradingHints: [
              'Antwort B genannt',
              'Blau = analytisch korrekt zugeordnet',
            ],
            sourceRef: 'Quelle: Human Resources · HR7 · Insights-MDI: das Farbrad der vier Typen',
          },
          {
            id: 'a4',
            type: 'multiple-choice',
            title: 'Aufgabe 4 · Zweige der Sozialversicherung',
            points: 4,
            task:
              'Welche der folgenden gehören zu den fünf Zweigen der gesetzlichen Sozialversicherung? A: Arbeitslosen- und Krankenversicherung. B: Unfallversicherung. C: Pflege- und Rentenversicherung. D: Hausratversicherung.',
            solution:
              'Korrekt sind A, B und C. Die fünf Zweige sind Arbeitslosen-, Kranken-, Unfall-, Pflege- und Rentenversicherung. Die Hausratversicherung (D) gehört nicht dazu.',
            gradingHints: [
              'A, B und C genannt',
              'Fünf Zweige korrekt benannt',
              'D als falsch erkannt',
            ],
            sourceRef: 'Quelle: Human Resources · HR8 · Das Sozialversicherungssystem in Deutschland',
          },
          {
            id: 'a5',
            type: 'single-choice',
            title: 'Aufgabe 5 · DSGVO-Bußgeldstufen',
            points: 3,
            task:
              'Welcher Bußgeldrahmen gilt nach Art. 83 Abs. 5 DSGVO für größere Verstöße (z. B. gegen die Grundsätze des Art. 5)? A: bis 10 Mio. € oder 2 % Weltjahresumsatz. B: bis 20 Mio. € oder 4 % Weltjahresumsatz. C: bis 5 Mio. € oder 1 % Weltjahresumsatz. D: bis 50 Mio. € oder 10 % Weltjahresumsatz.',
            solution:
              'Antwort B ist korrekt: bis 20 Mio. € oder 4 % des Weltjahresumsatzes (Art. 83 Abs. 5). Kleinere Verstöße (Art. 83 Abs. 4) liegen bei bis zu 10 Mio. € oder 2 %.',
            gradingHints: [
              'Antwort B genannt',
              'Abs. 5 (20 Mio./4 %) nicht mit Abs. 4 (10 Mio./2 %) verwechselt',
            ],
            sourceRef: 'Quelle: Human Resources · HR8 · Sanktionen und Datenschutzbeauftragte(r)',
          },
          {
            id: 'a6',
            type: 'single-choice',
            title: 'Aufgabe 6 · Job Enlargement vs. Job Enrichment',
            points: 3,
            task:
              'Welche Aussage trennt Job Enlargement und Job Enrichment korrekt? A: Enlargement erweitert vertikal um Verantwortung, Enrichment horizontal um gleichartige Aufgaben. B: Enlargement erweitert horizontal um gleichartige Tätigkeiten (Arbeitsbreite), Enrichment vertikal um Planung/Entscheidung/Kontrolle (Arbeitstiefe). C: Beide erweitern nur die Arbeitszeit. D: Beide sind Synonyme.',
            solution:
              'Antwort B ist korrekt: Job Enlargement erweitert horizontal um gleichartige Tätigkeiten (Arbeitsbreite), Job Enrichment vertikal um Planungs-, Entscheidungs- und Kontrollanteile (Arbeitstiefe).',
            gradingHints: [
              'Antwort B genannt',
              'Enlargement (Breite) und Enrichment (Tiefe) nicht vertauscht',
            ],
            sourceRef: 'Quelle: Human Resources · HR10 · Aufgabentiefe und Aufgabenbreite',
          },
        ],
      },
      {
        id: 'teil-b',
        title: 'Teil B · Rechnen und Kennzahlen',
        points: 23,
        tasks: [
          {
            id: 'b1',
            type: 'calculation',
            title: 'Aufgabe 7 · Quote der effektiven Arbeitszeit',
            points: 8,
            task:
              'Ein Mitarbeiter hat eine vereinbarte Arbeitszeit von 220 Tagen. Davon entfallen 10 Tage auf Feiertage und 5 Tage auf Freistellungen. Im Jahr fallen 15 Ausfalltage (Krankheit) an, zusätzlich werden 3 Tage Mehrarbeit geleistet. Berechne Soll-Arbeitszeit, Ist-Arbeitszeit und die Quote der effektiven Arbeitszeit. Zeige den Rechenweg.',
            solution:
              'Soll-Arbeitszeit = vereinbart − Feiertage − Freistellungen = 220 − 10 − 5 = 205 Tage. Ist-Arbeitszeit = Soll − Ausfallzeiten + Mehrarbeit = 205 − 15 + 3 = 193 Tage. Quote der effektiven Arbeitszeit = Ist / Soll = 193 / 205 ≈ 0,9415, also rund 94,1 %.',
            gradingHints: [
              'Soll korrekt als vereinbart − Feiertage − Freistellungen (205 Tage) berechnet',
              'Ist korrekt als Soll − Ausfallzeiten + Mehrarbeit (193 Tage) berechnet',
              'Quote als Ist/Soll und nicht umgekehrt gebildet',
              'Endergebnis ca. 94,1 % korrekt',
            ],
            sourceRef: 'Quelle: Human Resources · HR9 · Ableitung Soll-/Ist-Arbeitszeit und Quote der effektiven Arbeitszeit',
          },
          {
            id: 'b2',
            type: 'calculation',
            title: 'Aufgabe 8 · Fluktuationsquote',
            points: 7,
            task:
              'In einem Unternehmen mit einem durchschnittlichen Personalbestand von 400 Arbeitnehmern p.a. gibt es im Jahr 32 Abgänge insgesamt (davon 8 Pensionierungen/Todesfälle als natürliche Fluktuation und 24 Kündigungen/Trennungen). Berechne die gesamte Fluktuationsquote und erläutere, welche Posten zu den Abgängen zählen.',
            solution:
              'Fluktuationsquote = Anzahl aller Abgänge p.a. × 100 / durchschnittliche Anzahl der Arbeitnehmer p.a. = 32 × 100 / 400 = 8 %. Zu den Abgängen zählen sowohl die natürliche Fluktuation (Pensionierung, Tod) als auch Kündigungen/Trennungen; beide zusammen (8 + 24 = 32) ergeben die gesamte Fluktuation.',
            gradingHints: [
              'Formel Abgänge × 100 / Ø Personalbestand korrekt angewandt',
              'Alle 32 Abgänge einbezogen (natürliche Fluktuation + Kündigungen)',
              'Ergebnis 8 % korrekt',
              'Natürliche Fluktuation als Teil der Abgänge erkannt',
            ],
            sourceRef: 'Quelle: Human Resources · HR9 · Kennzahlen der Personalstatistik (Fluktuationsquote)',
          },
          {
            id: 'b3',
            type: 'calculation',
            title: 'Aufgabe 9 · Personalzusatzkosten',
            points: 8,
            task:
              'Der Bruttolohn eines Mitarbeiters beträgt 4.000 € pro Monat. Schätze die monatlichen Personalzusatzkosten anhand der im Skript genannten Faustregel und nenne die drei Bestandteile der Personalzusatzkosten. Zeige den Rechenweg und kennzeichne, dass es sich um einen Näherungswert handelt.',
            solution:
              'Laut Skript betragen die Personalzusatzkosten ca. 40 % des Bruttolohns. Näherung: 40 % × 4.000 € = 0,40 × 4.000 € = 1.600 € pro Monat. Die Personalzusatzkosten setzen sich aus gesetzlichen, tariflichen und freiwilligen Bestandteilen zusammen. Da es sich um eine Faustregel handelt, ist der Wert ein Näherungswert (ca. 1.600 €).',
            gradingHints: [
              'Faustregel ca. 40 % des Bruttolohns korrekt verwendet',
              'Rechnung 0,40 × 4.000 € = 1.600 € gezeigt',
              'Drei Bestandteile (gesetzlich, tariflich, freiwillig) genannt',
              'Näherungscharakter ("ca.") gekennzeichnet',
            ],
            sourceRef: 'Quelle: Human Resources · HR8 · Personalkosten (Personalzusatzkosten ca. 40 %)',
          },
        ],
      },
      {
        id: 'teil-c',
        title: 'Teil C · Anwendung und Fallstudien',
        points: 24,
        tasks: [
          {
            id: 'c1',
            type: 'case-study',
            title: 'Aufgabe 10 · Interne vs. externe Beschaffung',
            points: 8,
            task:
              'Erkläre Personalbeschaffung als reziproken Prozess und nenne je zwei interne und zwei externe Beschaffungswege. Anhand welcher drei Kategorien werden die Vor- und Nachteile interner vs. externer Beschaffung verglichen?',
            solution:
              'Personalbeschaffung ist ein reziproker Aushandlungsprozess: Organisation und Individuum bieten und fragen gegenseitig nach; ein Vertrag entsteht nur bei weitgehend komplementären Interessen. Interne Wege sind z. B. Versetzung und innerbetriebliche Ausschreibung (auch Personalentwicklung, Mehrarbeit). Externe Wege sind z. B. Internet/Online-Anzeigen und Personalberatung (auch Werbung/Employer Branding, Arbeitsvermittlung, Guerilla-Recruiting). Der Vergleich erfolgt entlang der Kategorien Allgemeines, Qualifikation und Motivation, wobei beide Seiten in jeder Kategorie gemischte Effekte haben.',
            gradingHints: [
              'Reziprozität (beidseitige Angebote/Nachfrage) erklärt',
              'Mindestens zwei interne und zwei externe Wege korrekt genannt',
              'Drei Vergleichskategorien (Allgemeines, Qualifikation, Motivation) genannt',
              'Gemischte Effekte statt reiner Pro-/Contra-Vereinfachung erwähnt',
            ],
            sourceRef: 'Quelle: Human Resources · HR5 · Beschaffungswege und reziproker Prozess',
          },
          {
            id: 'c2',
            type: 'case-study',
            title: 'Aufgabe 11 · Zeugniscode und Zufriedenheitsformel',
            points: 8,
            task:
              'Ordne die folgenden Formulierungen den Schulnoten zu und erkläre die Rolle der Signalwörter: (1) „Stets zu unserer vollsten Zufriedenheit", (2) „Zu unserer vollen Zufriedenheit". Erläutere zusätzlich, warum scheinbar positive Wendungen wie „hatte Verständnis für seine Arbeit" oder „gesundes Selbstvertrauen" kritisch sind.',
            solution:
              '(1) „Stets zu unserer vollsten Zufriedenheit" entspricht der Note 1 · sehr gut (Signalwörter stets + vollsten). (2) „Zu unserer vollen Zufriedenheit" entspricht nur der Note 3 · befriedigend; fehlt „stets", sinkt die Note. Kleine Signalwörter (stets, voll, vollsten) steuern die Note erheblich. Scheinbar positive Wendungen sind codiert: „hatte Verständnis für seine Arbeit" steht für ungenügende Leistungsbereitschaft, „gesundes Selbstvertrauen" und „bemüht" sind negativ besetzt.',
            gradingHints: [
              '„Stets zu unserer vollsten Zufriedenheit" = sehr gut (1) erkannt',
              '„Zu unserer vollen Zufriedenheit" = befriedigend (3) erkannt',
              'Rolle der Signalwörter stets/voll/vollsten erklärt',
              'Mindestens eine codierte Negativwendung korrekt entschlüsselt',
            ],
            sourceRef: 'Quelle: Human Resources · HR6 · Zeugniscode und Zufriedenheitsformel',
          },
          {
            id: 'c3',
            type: 'case-study',
            title: 'Aufgabe 12 · 360-Grad-Feedback',
            points: 8,
            task:
              'Erkläre Sinn und Zweck des 360-Grad-Feedbacks (Selbst- vs. Fremdbild) und ordne es in die Beurteilungsformen ein. Warum darf es nicht als Beurteilungs- oder Vergütungsinstrument missbraucht werden?',
            solution:
              'Das 360-Grad-Feedback vergleicht das Selbstbild des Feedback-Empfängers mit dem Fremdbild aus mehreren Perspektiven (Vorgesetzte, Kollegen, Mitarbeiter, Kunden) und macht so blinde Flecken sichtbar. Es ist die umfassendste und aufwendigste Beurteilungsform. Es ist ein freiwilliges Entwicklungs-, kein Beurteilungsinstrument und setzt Vertrauen voraus. Wird es mit Gehalts- oder Beförderungsentscheidungen verknüpft, zerstört es sofort das Vertrauen, auf dem es beruht.',
            gradingHints: [
              'Selbst- vs. Fremdbild aus mehreren Perspektiven erklärt',
              'Blinde Flecken als Zweck genannt',
              'Als umfassendste/aufwendigste Form eingeordnet',
              'Entwicklungs- statt Beurteilungsinstrument erkannt (Vertrauensaspekt)',
            ],
            sourceRef: 'Quelle: Human Resources · HR10 · 360-Grad-Feedback',
          },
        ],
      },
    ],
  },
];

export default exams;
