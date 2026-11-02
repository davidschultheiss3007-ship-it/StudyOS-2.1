import { meta as einfuehrung } from './01-ds-einfuehrung.js';
import EinfuehrungContent from './01-ds-einfuehrung.mdx';
import { meta as grundlagen } from './02-ds-grundlagen-quantitativer-datenanalyse.js';
import GrundlagenContent from './02-ds-grundlagen-quantitativer-datenanalyse.mdx';

export const topics = [
  { ...einfuehrung, Content: EinfuehrungContent },
  { ...grundlagen, Content: GrundlagenContent },
];
