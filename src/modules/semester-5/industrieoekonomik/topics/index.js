import { meta as partOne } from './01-ioek-teil-1.js';
import PartOneContent from './01-ioek-teil-1.mdx';
import { meta as partTwo } from './02-ioek-teil-2.js';
import PartTwoContent from './02-ioek-teil-2.mdx';
import { meta as partThree } from './03-ioek-teil-3.js';
import PartThreeContent from './03-ioek-teil-3.mdx';

export const topics = [
  { ...partOne, Content: PartOneContent },
  { ...partTwo, Content: PartTwoContent },
  { ...partThree, Content: PartThreeContent },
];
