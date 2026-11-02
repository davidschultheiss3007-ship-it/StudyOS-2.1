import { meta as einfuehrung } from './01-ds-einfuehrung.js';
import EinfuehrungContent from './01-ds-einfuehrung.mdx';
import { meta as grundlagen } from './02-ds-grundlagen-quantitativer-datenanalyse.js';
import GrundlagenContent from './02-ds-grundlagen-quantitativer-datenanalyse.mdx';
import { meta as einfuehrungR } from './03-ds-einfuehrung-in-r.js';
import EinfuehrungRContent from './03-ds-einfuehrung-in-r.mdx';
import { meta as edaImport } from './04-ds-eda-datenimport.js';
import EdaImportContent from './04-ds-eda-datenimport.mdx';
import { meta as edaKategorial } from './05-ds-eda-kategoriale-daten.js';
import EdaKategorialContent from './05-ds-eda-kategoriale-daten.mdx';
import { meta as edaNumerisch } from './06-ds-eda-numerische-daten.js';
import EdaNumerischContent from './06-ds-eda-numerische-daten.mdx';
import { meta as edaZusammenhang } from './07-ds-eda-zusammenhaenge.js';
import EdaZusammenhangContent from './07-ds-eda-zusammenhaenge.mdx';
import { meta as edaZusammenfassung } from './08-ds-eda-zusammenfassung.js';
import EdaZusammenfassungContent from './08-ds-eda-zusammenfassung.mdx';

export const topics = [
  { ...einfuehrung, Content: EinfuehrungContent },
  { ...grundlagen, Content: GrundlagenContent },
  { ...einfuehrungR, Content: EinfuehrungRContent },
  { ...edaImport, Content: EdaImportContent },
  { ...edaKategorial, Content: EdaKategorialContent },
  { ...edaNumerisch, Content: EdaNumerischContent },
  { ...edaZusammenhang, Content: EdaZusammenhangContent },
  { ...edaZusammenfassung, Content: EdaZusammenfassungContent },
];
