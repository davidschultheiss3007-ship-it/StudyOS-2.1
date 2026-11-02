import sourcePdf from '../../../../sources/semester-5/Data Science/1_Data Science_Einstieg.pdf?url';
import sourcePdfGrundlagen from '../../../../sources/semester-5/Data Science/2_Data Science_Grundlagen quantitativer Datenanalyse.pdf?url';
import sourcePdfR from '../../../../sources/semester-5/Data Science/3_Data Science_Einführung R.pdf?url';
import { meta as introduction } from './topics/01-ds-einfuehrung.js';
import { meta as grundlagen } from './topics/02-ds-grundlagen-quantitativer-datenanalyse.js';
import { meta as einfuehrungR } from './topics/03-ds-einfuehrung-in-r.js';

export const module = {
  id: 'data-science',
  semesterId: 'semester-5',
  title: 'Analyse von Finanzdaten & Data Science',
  shortTitle: 'Data Science',
  description: 'Quantitative Datenanalyse mit R: Methoden verstehen, Ergebnisse interpretieren und Finanzdaten wissenschaftlich untersuchen. Kapitel 1–3 sind verfügbar; weitere Kapitel folgen.',
  status: 'in-progress',
  examDate: null,
  accent: 'var(--color-module-orange)',
  assessment: {
    description: 'Hausarbeit (Datenanalyse): 75 % der Modulnote, ca. 1.500–2.500 Wörter. Präsentation: 25 %, 15 Minuten. Beide Teilleistungen müssen mindestens mit 4,0 bewertet werden.',
    source: 'Einstieg · Folie 7 · Stand V26-10-07',
  },
  sources: [
    { title: 'Einstieg', detail: 'Originalskript · Folien 1–21 · PDF', href: sourcePdf },
    { title: 'Grundlagen quantitativer Datenanalyse', detail: 'Originalskript · Folien 22–66 · PDF', href: sourcePdfGrundlagen },
    { title: 'Einführung in R', detail: 'Originalskript · Folien 67–101 · PDF', href: sourcePdfR },
  ],
  topics: [
    { ...introduction, status: 'available', hasContent: true },
    { ...grundlagen, status: 'available', hasContent: true },
    { ...einfuehrungR, status: 'available', hasContent: true },
  ],
};
