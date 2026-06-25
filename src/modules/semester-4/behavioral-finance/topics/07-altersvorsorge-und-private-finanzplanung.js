export const meta = {
  id: 'altersvorsorge-und-private-finanzplanung',
  title: 'Kapitel 7 · Altersvorsorge und private Finanzplanung',
  source: 'Behavioral Finance · BF7 - Altersvorsorge und private Finanzplanung · Folien 236-272',
  estimatedMinutes: 90,
  sections: [
    { id: 'grundlagen-und-lebenszyklus', title: 'Grundlagen und die Lebenszyklus-Hypothese', pages: 'Folien 236–241' },
    { id: 'beitritt-traegheit-defaults', title: 'I. Beitritt: Trägheit und Default-Effekte', pages: 'Folien 7–11' },
    { id: 'beitritt-komplexitaet-und-loesungen', title: 'I. Beitritt: Komplexität und Lösungen', pages: 'Folien 12–18' },
    { id: 'beitragshoehe-menueeffekte', title: 'II. Beitragshöhe: Menüeffekte und Gegenwartspräferenz', pages: 'Folien 19–23' },
    { id: 'beitragshoehe-loesungen', title: 'II. Beitragshöhe: Lösungen', pages: 'Folien 24–26' },
    { id: 'anlage-und-trendfolge', title: 'III. Anlage: naive Diversifizierung und Trendfolge', pages: 'Folien 27–37' },
  ],
  keyTakeaways: [
    'Die Altersvorsorge ist besonders anfällig für Verhaltensverzerrungen: extrem langer Anlagehorizont, kaum Lernmöglichkeiten und oft fehlendes Finanzwissen.',
    'Empirische Befunde (positive Sparquoten im Alter, Konsum koppelt an Einkommen) widersprechen der neoklassischen Lebenszyklus-Hypothese.',
    'Default-Effekte (Opt-In vs. Opt-Out) zählen zu den robustesten Ergebnissen der angewandten Wirtschaftsforschung - Organspende: ~4-28 % vs. ~86-100 %.',
    'Choice Overload: eine größere Auswahl wirkt attraktiver, lähmt aber die Entscheidung (Marmelade: 60 % vs. 40 % bleiben stehen, aber nur 3 % vs. 30 % kaufen).',
    'Automatische Anmeldung (Opt-out) hebt Teilnahmequoten massiv: von ~53 % auf 88-91 % (Choi), von 37 % auf 86 % (Madrian/Shea).',
    'Menüeffekte steuern die Beitragshöhe und die Allokation: Sparraten klumpen an runden Werten, Matching verschiebt sie auf den Matching-Punkt, 1/N koppelt die Aktienquote an das Fondsmenü.',
    'Gegenwartsgerichtete Präferenzen schwächen das Sparen - die Lösung SMarT ("Save More Tomorrow") steigert die Sparquote über Jahre (3,5 % -> 13,6 %).',
    'Trendfolge/Extrapolation: neue Teilnehmer richten ihre Aktienquote nach der jüngsten Marktentwicklung aus (Einbruch 2002 auf 54 %), während träge Bestandsanleger kaum reagieren.',
  ],
  examFocus: [
    'Drei zentrale Entscheidungen der Altersvorsorge: Beitritt, Beitragshöhe, Anlageform - jeweils fehleranfällig.',
    'Default-Effekt am Organspende-Beispiel (Johnson et al. 2003): Opt-In-Länder niedrig, Opt-Out-Länder nahe 100 %.',
    'Choice Overload (Iyengar und Lepper 2000): mehr Auswahl -> mehr Aufmerksamkeit, aber weniger Abschlüsse.',
    'Wirkung der automatischen Anmeldung (Choi; Madrian/Shea; Benartzi/Thaler) und der vereinfachten "Schnellanmelde-Option" (9 % -> 34 %).',
    'Menüeffekte: runde Zahlen, Matching-Effekt bei 4 %, bedingte 1/N-Regel (UC 34 % vs. TWA 75 %), Steuerung über die Zahl der Formularzeilen.',
    'SMarT-Programm / automatische Erhöhung und das "zukünftige Selbst" (Hershfield et al. 2011: 172 $ vs. 80 $) als Lösungen gegen Gegenwartspräferenz.',
    'Klumpenrisiko durch Arbeitgeberaktien (2004: 26,5 %; jeder Vierte über 50 %) und Trendfolge bei der Aktienquote neuer Teilnehmer.',
    'Lebenszyklus-/Target-Maturity-Fonds (Mitchell et al. 2009) als automatisches Rebalancing gegen naive Diversifizierung und Trendfolge.',
  ],
  pitfalls: [
    'Opt-In und Opt-Out nicht verwechseln: Opt-In = aktiver Beitritt nötig (niedrige Quoten), Opt-Out = automatisch dabei, Austritt nötig (hohe Quoten).',
    'Choice Overload ist zweigeteilt: große Auswahl erhöht die Aufmerksamkeit (mehr bleiben stehen), senkt aber die Abschlussquote - nicht nur "mehr ist schlechter".',
    'Die bedingte 1/N-Regel bedeutet nicht 1/N über alle Fonds, sondern gleichmäßige Verteilung auf die (3-4) gewählten Fonds - die Aktienquote hängt am Menü, nicht an einer Anlegerpräferenz.',
    'Werte aus den Linien- und einigen Balkendiagrammen sind visuell aus den Folien abgelesen (ca.-Werte), nicht exakt protokolliert.',
    'Beim Matching-Effekt verschiebt das Arbeitgeber-Matching ab 4 % die Sparraten genau auf 4 % - das ist ein Anker-/Menüeffekt, keine rationale Optimierung.',
  ],
};

export default meta;
