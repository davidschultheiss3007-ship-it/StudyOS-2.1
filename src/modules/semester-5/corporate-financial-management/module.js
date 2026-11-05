import introductionPdf from '../../../../sources/semester-5/Corporate Financial Management/1.CorpFM - Vorlesung 1.pdf?url';
import financialReportsPdf from '../../../../sources/semester-5/Corporate Financial Management/2-CorpFM - Vorlesung 2 Grundlagen.pdf?url';
import shareholderValuePdf from '../../../../sources/semester-5/Corporate Financial Management/3.CorpFM - Vorlesung 2.2 Shareholder Value Management.pdf?url';
import { meta as introduction } from './topics/01-cfm-einfuehrung.js';
import { meta as financialReports } from './topics/02-cfm-finanzberichte-und-kennzahlen.js';
import { meta as shareholderValue } from './topics/03-cfm-shareholder-value-management.js';

export const module = {
  id: 'corporate-financial-management',
  semesterId: 'semester-5',
  title: 'Corporate Financial Management',
  shortTitle: 'Corporate FM',
  description: 'Finanzierung und Investition, Finanzberichte und Kennzahlen sowie Shareholder Value, WACC und CAPM. Alle drei vorliegenden Skripte sind als Topics verfügbar; weitere Kapitel folgen mit den Quellen.',
  status: 'in-progress',
  examDate: null,
  accent: 'var(--color-module-green)',
  assessment: {
    description: 'Klausur: 100 % der Modulnote, 90 Minuten. Wissensfragen, praxisbezogene Fragen und Single Choice; eine Formelsammlung ist laut Skript vorhanden.',
    source: 'Vorlesung 1 · Folie 5 · Stand V26-10-13',
  },
  sources: [
    { title: 'Einführung und Organisation', detail: 'Originalskript · Folien 1–16 · PDF', href: introductionPdf },
    { title: 'Grundlagen: Finanzberichte und Kennzahlen', detail: 'Originalskript · Folien 1–47 · PDF', href: financialReportsPdf },
    { title: 'Shareholder Value, WACC und CAPM', detail: 'Originalskript · Folien 1–34 · PDF', href: shareholderValuePdf },
  ],
  topics: [introduction, financialReports, shareholderValue].map(meta => ({
    ...meta, status: 'available', hasContent: true,
  })),
};
