import { useId, useState } from 'react';
import { ChevronRight, Compass } from 'lucide-react';

// A collapsible "explore interactively" container. Used to wrap optional,
// illustrative interactive visuals (e.g. a 3D scene) so the page's core,
// exam-relevant content always lives in the static flow above it and is never
// hidden behind an interaction. Starts collapsed; nothing essential should live
// inside — only enrichment.
export function Explorable({
  label = 'Interaktiv erkunden',
  note = 'Optional · zur Veranschaulichung',
  children,
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="my-2 overflow-hidden rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)]">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-bg-card-hover)] focus-visible:outline-none focus-visible:[box-shadow:var(--shadow-focus)]"
      >
        <Compass className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-foreground">{label}</span>
          {note && <span className="block text-xs text-muted-foreground">{note}</span>}
        </span>
        <ChevronRight
          className={`size-4 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-90' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div id={panelId} className="border-t border-[var(--learning-inset-border)] p-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default Explorable;
