import { useState } from 'react';
import { Badge } from '@/components/ui/Badge.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { getTaskTypeLabel, renderPoints, renderTextBlock } from './examUtils.jsx';

export function ExamTask({ task, index, showSolutions }) {
  const [localSolutionVisible, setLocalSolutionVisible] = useState(false);
  const solutionVisible = showSolutions || localSolutionVisible;

  return (
    <article className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Aufgabe {index + 1}</span>
          <h4 className="font-semibold text-foreground">{task.title}</h4>
        </div>
        <div className="flex shrink-0 gap-2">
          <Badge variant="default" size="sm">{getTaskTypeLabel(task.type)}</Badge>
          <Badge variant="primary" size="sm">{renderPoints(task.points)}</Badge>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-foreground [&_p]:text-foreground">
        {renderTextBlock(task.task)}
      </div>

      {task.sourceRef && <p className="mt-2 text-xs text-muted-foreground">{task.sourceRef}</p>}

      {!showSolutions && task.solution && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-3"
          onClick={() => setLocalSolutionVisible(v => !v)}
        >
          {localSolutionVisible ? 'Lösung ausblenden' : 'Lösung anzeigen'}
        </Button>
      )}

      {solutionVisible && task.solution && (
        <div className="mt-4 rounded-lg border border-[var(--learning-success-border)] bg-[var(--learning-success-surface)] p-4">
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
        </div>
      )}
    </article>
  );
}
