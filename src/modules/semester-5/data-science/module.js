import sourcePdf from '../../../../sources/semester-5/Data Science/1_Data Science_Einstieg.pdf?url';
import { meta as introduction } from './topics/01-ds-einfuehrung.js';

export const module = {
  id: 'data-science',
  semesterId: 'semester-5',
  title: 'Analyse von Finanzdaten & Data Science',
  shortTitle: 'Data Science',
  description: 'Quantitative Datenanalyse mit R: Methoden verstehen, Ergebnisse interpretieren und Finanzdaten wissenschaftlich untersuchen. Der Einstieg ist verfügbar; weitere Kapitel folgen.',
  status: 'in-progress',
  examDate: null,
  accent: 'var(--color-module-orange)',
  assessment: {
    description: 'Hausarbeit (Datenanalyse): 75 % der Modulnote, ca. 1.500–2.500 Wörter. Präsentation: 25 %, 15 Minuten. Beide Teilleistungen müssen mindestens mit 4,0 bewertet werden.',
    source: 'Einstieg · Folie 7 · Stand V26-10-07',
  },
  sources: [
    { title: 'Einstieg', detail: 'Originalskript · Folien 1–21 · PDF', href: sourcePdf },
  ],
  topics: [
    { ...introduction, status: 'available', hasContent: true },
  ],
};
