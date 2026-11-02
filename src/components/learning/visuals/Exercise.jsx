import { useId, useState } from 'react';
import { CheckCircle2, ChevronRight, PencilLine } from 'lucide-react';

// Source-faithful "Übung / Lösung Übung" pair: the learner first commits to an
// answer, then reveals the solution. Correct options get an icon + "richtig"
// label (never colour alone). The solution is always printed.
//
// `options` = string[]; `answer` = index | index[] (omit for open questions);
// `children` = the explanation shown with the solution.
const LETTERS = 'abcdefgh';

export function Exercise({ title, question, options = [], answer, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const correct = new Set(Array.isArray(answer) ? answer : answer === undefined ? [] : [answer]);

  return (
    <div className="my-2 overflow-hidden rounded-xl border border-[var(--learning-accent-border)] bg-card">
      <div className="flex items-center gap-2 px-5 pt-4">
        <PencilLine className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
        <h4 className="min-w-0 text-sm font-semibold leading-snug text-foreground">
          <span className="text-[var(--color-on-accent-subtle)]">Übung</span>
          {title && <span className="text-muted-foreground"> · {title}</span>}
        </h4>
      </div>

      <div className="px-5 pb-4 pt-3 text-sm leading-relaxed text-foreground">
        {question && <div className="[&>p]:my-0 [&>p+p]:mt-2">{question}</div>}
        {options.length > 0 && (
          <ol className="mt-3 flex list-none flex-col gap-1.5 p-0">
            {options.map((opt, i) => {
              const isCorrect = open && correct.has(i);
              return (
                <li
                  key={i}
                  className={`flex items-start gap-2 rounded-lg border px-3 py-2 transition-colors duration-150 ${isCorrect ? 'border-[var(--learning-success-border)] bg-[var(--learning-success-surface)]' : 'border-border bg-[var(--learning-inset-bg)]'}`}
                >
                  <span className="w-5 shrink-0 font-semibold text-muted-foreground">{LETTERS[i]})</span>
                  <span className="min-w-0 flex-1">{opt}</span>
                  {isCorrect && (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[var(--learning-success-text)]">
                      <CheckCircle2 className="size-4" aria-hidden="true" />richtig
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-2 border-t border-border px-5 py-2.5 text-left text-sm font-semibold text-[var(--color-accent)] transition-colors hover:bg-accent focus-visible:outline-none focus-visible:[box-shadow:var(--shadow-focus)] print:hidden"
      >
        <ChevronRight className={`size-4 shrink-0 transition-transform duration-150 ${open ? 'rotate-90' : ''}`} aria-hidden="true" />
        {open ? 'Lösung ausblenden' : 'Erst selbst überlegen, dann Lösung anzeigen'}
      </button>

      <div
        id={panelId}
        className={`${open ? 'block' : 'hidden'} border-t border-border bg-[var(--learning-inset-bg)] px-5 py-4 text-sm leading-relaxed text-foreground print:block [&>:first-child]:mt-0 [&>:last-child]:mb-0`}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Lösung</p>
        {children}
      </div>
    </div>
  );
}

export default Exercise;
