import { Badge } from '@/components/ui/Badge.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { getExamTaskCount, getExamTotalPoints, renderPoints } from './examUtils.jsx';

export function ExamCard({ exam, onOpen }) {
  const taskCount = getExamTaskCount(exam);
  const totalPoints = getExamTotalPoints(exam);

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{exam.title}</h3>
            {exam.isDemo && <Badge variant="warning" size="sm">Demo</Badge>}
            {exam.label && !exam.isDemo && <Badge variant="primary" size="sm">{exam.label}</Badge>}
          </div>
          {exam.description && <p className="text-sm text-muted-foreground">{exam.description}</p>}
        </div>
        <Button variant="primary" onClick={() => onOpen(exam)}>Prüfung öffnen</Button>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>{exam.durationMinutes ?? 0} min</span>
        <span>{renderPoints(totalPoints)}</span>
        <span>{taskCount} Aufgaben</span>
      </div>

      {exam.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1.5" aria-label="Prüfungsthemen">
          {exam.topics.map(topic => (
            <span key={topic} className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">{topic}</span>
          ))}
        </div>
      )}
    </article>
  );
}
