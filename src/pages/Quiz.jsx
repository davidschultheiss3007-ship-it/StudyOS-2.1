import { useParams } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { getModuleById, getQuestionsForModule } from '@/data/moduleRegistry.js';
import { getSemesterById } from '@/data/semesters.js';
import { QuizRunner } from '@/components/quiz/QuizRunner.jsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { PageShell, PageError } from '@/components/layout/PageShell.jsx';
import { Link } from 'react-router-dom';

export function Quiz() {
  const { moduleId } = useParams();
  const mod = getModuleById(moduleId);
  const questions = getQuestionsForModule(moduleId);

  if (!mod) return <PageError message="Modul nicht gefunden." />;

  const semester = getSemesterById(mod.semesterId);

  if (questions.length === 0) {
    return (
      <PageShell>
        <Breadcrumbs items={[
          { label: 'Startseite', to: '/' },
          { label: mod.title, to: `/module/${moduleId}` },
          { label: 'Quiz' },
        ]} />
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-dashed border-border p-12 text-center">
          <HelpCircle className="size-12 text-muted-foreground" aria-hidden="true" />
          <p className="text-muted-foreground">Noch keine Fragen für dieses Modul vorhanden.</p>
          <Link to={`/module/${moduleId}`}><Button variant="secondary">Zurück zum Modul</Button></Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs items={[
        { label: 'Startseite', to: '/' },
        { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
        { label: mod.title, to: `/module/${moduleId}` },
        { label: 'Quiz' },
      ]} />
      <div className="my-6">
        <h1 className="text-2xl font-bold tracking-[-0.015em] text-foreground">Quiz: {mod.title}</h1>
        <p className="text-muted-foreground">{questions.length} Fragen · Beantworte alle Fragen und sieh dein Ergebnis.</p>
      </div>
      <QuizRunner questions={questions} moduleId={moduleId} />
    </PageShell>
  );
}
