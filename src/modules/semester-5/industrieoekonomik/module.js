import partOnePdf from '../../../../sources/semester-5/Industrieökonomik/Industrieökonomik WS 26-27 Teil 1.pdf?url';
import partTwoPdf from '../../../../sources/semester-5/Industrieökonomik/Industrieökonomik WS 26-27 Teil 2.pdf?url';
import partThreePdf from '../../../../sources/semester-5/Industrieökonomik/Industrieökonomik WS 26-27 Teil 3.pdf?url';
import practiceOnePdf from '../../../../sources/semester-5/Industrieökonomik/Übungsvertiefung/IÖK Vertiefung und Wiederholung Teil 1.pdf?url';
import practiceTwoPdf from '../../../../sources/semester-5/Industrieökonomik/Übungsvertiefung/IÖK Vertiefung und Wiederholung Teil 2.pdf?url';
import practiceThreePdf from '../../../../sources/semester-5/Industrieökonomik/Übungsvertiefung/IÖK Vertiefung und Wiederholung Teil 3.pdf?url';
import { meta as partOne } from './topics/01-ioek-teil-1.js';
import { meta as partTwo } from './topics/02-ioek-teil-2.js';
import { meta as partThree } from './topics/03-ioek-teil-3.js';

export const module = {
  id: 'industrieoekonomik',
  semesterId: 'semester-5',
  title: 'Industrieökonomik',
  shortTitle: 'Industrieökonomik',
  description: 'Einführung, mathematische Grundlagen, vollkommene Konkurrenz und Monopol. Die drei vorliegenden Vorlesungsteile mit zugehöriger Vertiefung sind als Topics verfügbar.',
  status: 'in-progress',
  examDate: null,
  accent: 'var(--color-module-pink)',
  sources: [
    { title: 'Vorlesung · Teil 1', detail: 'Originalskript · Folien 1–47 · PDF', href: partOnePdf },
    { title: 'Vorlesung · Teil 2', detail: 'Originalskript · Folien 48–65 · PDF', href: partTwoPdf },
    { title: 'Vorlesung · Teil 3', detail: 'Originalskript · Folien 66–94 · PDF', href: partThreePdf },
    { title: 'Vertiefung und Wiederholung · Teil 1', detail: 'Originalmaterial · PDF', href: practiceOnePdf },
    { title: 'Vertiefung und Wiederholung · Teil 2', detail: 'Originalmaterial · PDF', href: practiceTwoPdf },
    { title: 'Vertiefung und Wiederholung · Teil 3', detail: 'Originalmaterial · PDF', href: practiceThreePdf },
  ],
  topics: [partOne, partTwo, partThree].map(meta => ({
    ...meta, status: 'available', hasContent: true,
  })),
};
