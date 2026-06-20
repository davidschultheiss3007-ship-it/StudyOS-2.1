import { BookMarked } from 'lucide-react';

// Highlights a key term with its definition and an optional source reference.
export function DefinitionBox({ term, source, children }) {
  return (
    <div className="my-2 rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-5">
      <div className="mb-2 flex items-center gap-2">
        <BookMarked className="size-4 text-[var(--color-accent)]" aria-hidden="true" />
        <h4 className="font-semibold text-foreground">{term}</h4>
      </div>
      <div className="text-sm leading-relaxed text-[var(--color-text-secondary)] [&_p]:text-[var(--color-text-secondary)]">{children}</div>
      {source && <p className="mt-3 text-xs italic text-muted-foreground">Quelle: {source}</p>}
    </div>
  );
}

export default DefinitionBox;
