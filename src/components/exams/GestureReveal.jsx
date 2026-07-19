import { useRef, useState } from 'react';
import { cn } from '@/lib/utils.js';
import { renderTextBlock } from './examUtils.jsx';

// Reserves space for a written-answer solution without an input field. Press
// and hold to peek the model answer while held; double-click pins it open
// until the next click closes it again. Falls back to a plain static box
// when the exam-wide "Aufgaben + Lösungen" toggle is on (showSolutions),
// exactly like ExamTask's button-based reveal for every other task type.
export function GestureReveal({ task, showSolutions }) {
  const [peeking, setPeeking] = useState(false);
  const [pinned, setPinned] = useState(false);
  const holdActive = useRef(false);

  if (!task.solution) return null;

  const interactive = !showSolutions;
  const visible = showSolutions || peeking || pinned;

  function startPeek() {
    if (!interactive) return;
    holdActive.current = true;
    setPeeking(true);
  }
  function endPeek() {
    if (!holdActive.current) return;
    holdActive.current = false;
    setPeeking(false);
  }
  function handleClick() {
    if (interactive && pinned) setPinned(false);
  }
  function handleDoubleClick() {
    if (interactive && !pinned) setPinned(true);
  }
  function handleKeyDown(e) {
    if (!interactive) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPinned(p => !p);
    }
  }

  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive ? pinned : undefined}
      aria-label={interactive ? (visible ? 'Lösung ausblenden (klicken)' : 'Lösung anzeigen (gedrückt halten oder doppelklicken)') : undefined}
      className={cn(
        'mt-4 rounded-lg border p-4 transition-colors',
        interactive && 'cursor-pointer select-none',
        visible
          ? 'border-[var(--learning-success-border)] bg-[var(--learning-success-surface)]'
          : 'border-dashed border-border bg-muted/30 hover:bg-muted/50',
      )}
      onMouseDown={startPeek}
      onMouseUp={endPeek}
      onMouseLeave={endPeek}
      onTouchStart={startPeek}
      onTouchEnd={endPeek}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
    >
      {visible ? (
        <>
          <h5 className="mb-2 text-sm font-semibold text-[var(--learning-success-text)]">Musterlösung</h5>
          <div className="flex flex-col gap-2 text-sm leading-relaxed text-foreground [&_p]:text-foreground">
            {renderTextBlock(task.solution)}
          </div>
          {task.gradingHints?.length > 0 && (
            <div className="mt-3 border-t border-[var(--learning-success-border)] pt-3">
              <h6 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Bewertungshinweise</h6>
              <ul className="flex flex-col gap-1 text-sm text-foreground">
                {task.gradingHints.map(hint => (
                  <li key={hint} className="flex gap-2"><span className="text-muted-foreground">•</span><span>{hint}</span></li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p className="text-sm italic text-muted-foreground">
          Platz für die Lösung — gedrückt halten oder doppelklicken zum Anzeigen
        </p>
      )}
    </div>
  );
}
