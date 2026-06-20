import { CornerDownRight } from 'lucide-react';

// Simple nested decision/branch structure. node = { label, detail?, children?[] }.
function Node({ node, depth = 0 }) {
  return (
    <li className="relative">
      <div className="flex items-start gap-2">
        {depth > 0 && <CornerDownRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
        <div className="min-w-0">
          <span className="font-semibold text-foreground">{node.label}</span>
          {node.detail && <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{node.detail}</p>}
        </div>
      </div>
      {node.children?.length > 0 && (
        <ul className="ml-3 mt-2 flex flex-col gap-2 border-l border-border pl-3">
          {node.children.map((child, i) => <Node key={i} node={child} depth={depth + 1} />)}
        </ul>
      )}
    </li>
  );
}

export function DecisionTree({ root, nodes }) {
  const items = nodes ?? (root ? [root] : []);
  return (
    <div className="my-2 rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-5">
      <ul className="flex flex-col gap-2">
        {items.map((n, i) => <Node key={i} node={n} />)}
      </ul>
    </div>
  );
}

export default DecisionTree;
