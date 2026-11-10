import { lazy } from 'react';
import { VisualFrame } from './VisualFrame.jsx';

const DiagramImpl = lazy(() => import('./DiagramImpl.jsx'));

// Public palette component for Mermaid diagrams. Mermaid (~heavy) is lazy.
export function Diagram({ title, source, chart, code, children, height = 260, minWidth }) {
  const text = chart ?? code ?? (typeof children === 'string' ? children : '');
  return (
    <VisualFrame title={title} source={source} height={height}>
      <DiagramImpl chart={text} minWidth={minWidth} />
    </VisualFrame>
  );
}

export default Diagram;
