// Learning palette registry.
//
// Every component here is available inside `.mdx` topic files in two ways:
//   1. via MDXProvider (see ContentSection.jsx) — the `mdxComponents` map, and
//   2. by direct import from '@/components/learning/visuals'.
//
// Heavy libraries (recharts, mermaid, three/R3F) live behind React.lazy in
// DataChart / Diagram / Scene3D so they are not in the initial bundle.

import { proseComponents } from './prose.jsx';
import { Formula } from './Formula.jsx';
import { DataChart } from './DataChart.jsx';
import { Diagram } from './Diagram.jsx';
import { Scene3D } from './Scene3D.jsx';
import { Surface3D } from './Surface3D.jsx';
import { CompareCard } from './CompareCard.jsx';
import { Timeline } from './Timeline.jsx';
import { DefinitionBox } from './DefinitionBox.jsx';
import { Callout } from './Callout.jsx';
import { DataTable } from './DataTable.jsx';
import { KpiGrid } from './KpiGrid.jsx';
import { DecisionTree } from './DecisionTree.jsx';
import { SpectrumAxis } from './SpectrumAxis.jsx';
import { QuadrantMatrix } from './QuadrantMatrix.jsx';
import { ProportionBar } from './ProportionBar.jsx';
import { ScaleProfile } from './ScaleProfile.jsx';
import { SourceNote } from './SourceNote.jsx';
import { Explorable } from './Explorable.jsx';
import { Card } from './Card.jsx';
import { Columns } from './Columns.jsx';
import { Exam } from './Exam.jsx';
import { ChapterDivider } from './ChapterDivider.jsx';
import { ExamFocusBox } from '../ExamFocusBox.jsx';

export {
  Formula, DataChart, Diagram, Scene3D, Surface3D, CompareCard, Timeline,
  DefinitionBox, Callout, DataTable, KpiGrid, DecisionTree, SpectrumAxis, ScaleProfile,
  QuadrantMatrix, ProportionBar, SourceNote, Explorable, Card, Columns, Exam,
  ChapterDivider, ExamFocusBox,
};

// Components injected into every `.mdx` topic via MDXProvider.
export const mdxComponents = {
  ...proseComponents,
  Formula, DataChart, Diagram, Scene3D, Surface3D, CompareCard, Timeline,
  DefinitionBox, Callout, DataTable, KpiGrid, DecisionTree, SpectrumAxis, ScaleProfile,
  QuadrantMatrix, ProportionBar, SourceNote, Explorable, Card, Columns, Exam,
  ChapterDivider, ExamFocusBox,
};
