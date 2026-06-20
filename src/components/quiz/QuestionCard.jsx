import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export function QuestionCard({ question, selected, onSelect, revealed }) {
  const isMultiple = question.type === 'multiple';

  function isCorrect(idx) {
    if (isMultiple) return question.correctAnswers.includes(idx);
    return question.correctAnswer === idx;
  }
  function isSelected(idx) {
    if (isMultiple) return Array.isArray(selected) && selected.includes(idx);
    return selected === idx;
  }
  function handleClick(idx) {
    if (revealed) return;
    if (isMultiple) {
      const cur = Array.isArray(selected) ? selected : [];
      const next = cur.includes(idx) ? cur.filter(i => i !== idx) : [...cur, idx];
      onSelect(next);
    } else {
      onSelect(idx);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {isMultiple ? 'Multiple Choice' : 'Single Choice'}
      </span>
      <p className="mt-2 text-lg font-medium text-foreground">{question.question}</p>

      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((opt, idx) => {
          const correct = revealed && isCorrect(idx);
          const wrong = revealed && isSelected(idx) && !isCorrect(idx);
          const active = !revealed && isSelected(idx);
          return (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={revealed}
              className={cn(
                'flex items-center gap-3 rounded-lg border p-3 text-left text-sm',
                'transition-[border-color,background-color,box-shadow,transform] duration-150 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-card)]',
                !revealed && 'active:scale-[0.99]',
                correct && 'border-[var(--color-success)] bg-[var(--color-success-subtle)]',
                wrong && 'border-[var(--color-error)] bg-[var(--color-error-subtle)]',
                active && 'border-primary bg-[var(--color-accent-subtle)] shadow-[var(--shadow-sm)]',
                !correct && !wrong && !active && 'border-border hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-card-hover)]',
              )}
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border text-xs font-semibold text-muted-foreground">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1 text-foreground">{opt}</span>
              {correct && <Check className="size-4 shrink-0 text-[var(--color-success)]" strokeWidth={2.5} />}
              {wrong && <X className="size-4 shrink-0 text-[var(--color-error)]" strokeWidth={2.5} />}
            </button>
          );
        })}
      </div>

      {revealed && question.explanation && (
        <div className="mt-4 rounded-lg border border-border bg-muted/50 p-4 text-sm text-foreground">
          <strong className="font-semibold">Erklärung:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}
