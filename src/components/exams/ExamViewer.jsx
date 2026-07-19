import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { ExamSection } from './ExamSection.jsx';
import { SolutionToggle } from './SolutionToggle.jsx';
import { getExamTaskCount, getExamTotalPoints, renderPoints } from './examUtils.jsx';

export function ExamViewer({ exam, onBack }) {
  const [showSolutions, setShowSolutions] = useState(false);
  const sectionsWithOffsets = (exam.sections ?? []).reduce((items, section) => {
    const previous = items.at(-1);
    const startIndex = previous ? previous.startIndex + (previous.section.tasks?.length ?? 0) : 0;
    return [...items, { section, startIndex }];
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="size-4" aria-hidden="true" /> Zurück zu Prüfungen
        </Button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={() => window.print()}>Drucken</Button>
          <SolutionToggle showSolutions={showSolutions} onChange={setShowSolutions} />
        </div>
      </div>

      <header className="flex flex-col gap-3 border-b border-border pb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-foreground">{exam.title}</h2>
          {exam.isDemo && <Badge variant="warning" size="sm">Demo</Badge>}
          {exam.label && !exam.isDemo && <Badge variant="primary" size="sm">{exam.label}</Badge>}
        </div>
        {exam.description && <p className="text-sm text-muted-foreground">{exam.description}</p>}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground" aria-label="Prüfungsdaten">
          <span>{exam.durationMinutes ?? 0} min</span>
          <span>{renderPoints(getExamTotalPoints(exam))}</span>
          <span>{getExamTaskCount(exam)} Aufgaben</span>
        </div>
      </header>

      {exam.instructions?.length > 0 && (
        <section className="rounded-lg border border-border bg-muted/40 p-4" aria-label="Bearbeitungshinweise">
          <h3 className="mb-2 text-sm font-semibold text-foreground">Hinweise</h3>
          <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
            {exam.instructions.map(instruction => (
              <li key={instruction} className="flex gap-2"><span>•</span><span>{instruction}</span></li>
            ))}
          </ul>
        </section>
      )}

      {exam.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1.5" aria-label="Prüfungsthemen">
          {exam.topics.map(topic => (
            <span key={topic} className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">{topic}</span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-8">
        {sectionsWithOffsets.map(({ section, startIndex }) => (
          <ExamSection key={section.id} section={section} startIndex={startIndex} showSolutions={showSolutions} revealMode={exam.revealMode} />
        ))}
      </div>
    </section>
  );
}
