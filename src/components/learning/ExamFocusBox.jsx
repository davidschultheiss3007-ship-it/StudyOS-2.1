import { Info, AlertTriangle } from 'lucide-react';

export function ExamFocusBox({ examFocus = [], pitfalls = [] }) {
  if (examFocus.length === 0 && pitfalls.length === 0) return null;
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {examFocus.length > 0 && (
        <div className="rounded-xl border border-[var(--learning-accent-border)] bg-[var(--learning-accent-surface)] p-5">
          <div className="mb-3 flex items-center gap-2 font-semibold text-[var(--color-accent)]">
            <Info className="size-4" aria-hidden="true" />
            <span>Prüfungsfokus</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-foreground">
            {examFocus.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[var(--color-accent)]">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      )}
      {pitfalls.length > 0 && (
        <div className="rounded-xl border border-[var(--learning-warning-border)] bg-[var(--learning-warning-surface)] p-5">
          <div className="mb-3 flex items-center gap-2 font-semibold text-[var(--learning-warning-text)]">
            <AlertTriangle className="size-4" aria-hidden="true" />
            <span>Prüfungsfallen</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-foreground">
            {pitfalls.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[var(--learning-warning-text)]">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
