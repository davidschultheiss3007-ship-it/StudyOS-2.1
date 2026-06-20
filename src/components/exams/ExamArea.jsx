import { useState } from 'react';
import { ExamCard } from './ExamCard.jsx';
import { ExamViewer } from './ExamViewer.jsx';

export function ExamArea({ exams = [] }) {
  const [activeExam, setActiveExam] = useState(null);

  if (activeExam) {
    return <ExamViewer exam={activeExam} onBack={() => setActiveExam(null)} />;
  }

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Prüfungen</h2>
        <p className="text-sm text-muted-foreground">Aufgabenblätter zur schriftlichen Bearbeitung auf Papier.</p>
      </div>

      {exams.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
          Für dieses Modul sind noch keine Prüfungen hinterlegt.
        </p>
      ) : (
        <div className="grid gap-4">
          {exams.map(exam => (
            <ExamCard key={exam.id} exam={exam} onOpen={setActiveExam} />
          ))}
        </div>
      )}
    </section>
  );
}
