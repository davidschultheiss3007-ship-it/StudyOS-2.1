import { Badge } from '@/components/ui/Badge.jsx';
import { ExamTask } from './ExamTask.jsx';
import { renderPoints } from './examUtils.jsx';

export function ExamSection({ section, startIndex, showSolutions }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3 border-b border-border pb-3">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
          {section.description && <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>}
        </div>
        {section.points !== undefined && (
          <Badge variant="default" size="sm">{renderPoints(section.points)}</Badge>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {(section.tasks ?? []).map((task, index) => (
          <ExamTask key={task.id} task={task} index={startIndex + index} showSolutions={showSolutions} />
        ))}
      </div>
    </section>
  );
}
