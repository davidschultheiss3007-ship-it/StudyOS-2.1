import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarDays, FileText } from 'lucide-react';
import { getModuleById, getTopicsForModule, getQuestionsForModule, getExamsForModule } from '@/data/moduleRegistry.js';
import { getSemesterById } from '@/data/semesters.js';
import { TopicCard } from '@/components/cards/TopicCard.jsx';
import { ExamArea } from '@/components/exams/ExamArea.jsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs.jsx';
import { Badge } from '@/components/ui/Badge.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { SegmentedControl } from '@/components/ui/SegmentedControl.jsx';
import { ProgressBar } from '@/components/ui/ProgressBar.jsx';
import { PageShell, PageError } from '@/components/layout/PageShell.jsx';
import { getCompletedTopics } from '@/app/storage.js';
import { moduleInitials } from '@/lib/utils.js';

function getStatusBadge(status) {
  switch (status) {
    case 'done': return { label: 'Fertig', variant: 'success' };
    case 'in-progress': return { label: 'Aktiv', variant: 'primary' };
    case 'planned': return { label: 'Geplant', variant: 'default' };
    default: return { label: status, variant: 'default' };
  }
}

const TABS = [
  { id: 'learn', label: 'Lernbereich' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'exams', label: 'Prüfungen' },
];

export function Module() {
  const { moduleId } = useParams();
  const [activeArea, setActiveArea] = useState('learn');
  const mod = getModuleById(moduleId);

  if (!mod) return <PageError message="Modul nicht gefunden." />;

  const semester = getSemesterById(mod.semesterId);
  const topicData = getTopicsForModule(moduleId);
  const questions = getQuestionsForModule(moduleId);
  const exams = getExamsForModule(moduleId);
  const completed = getCompletedTopics();

  const allTopics = mod.topics ?? [];
  const totalTopics = allTopics.length;
  const doneCount = allTopics.filter(t => completed.includes(t.id)).length;
  const progress = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

  const { label, variant } = getStatusBadge(mod.status);
  const firstTopic = allTopics[0];

  return (
    <PageShell>
      <Breadcrumbs items={[
        { label: 'Startseite', to: '/' },
        { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
        { label: mod.title },
      ]} />

      {/* Header card — monogram tile identity, no side stripe */}
      <div className="mt-5 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-[12px] text-base font-bold tracking-tight"
              style={{ color: mod.accent, background: `color-mix(in srgb, ${mod.accent} 14%, transparent)` }}
              aria-hidden="true"
            >
              {moduleInitials(mod.title)}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl font-bold tracking-[-0.015em] text-foreground">{mod.title}</h1>
                <Badge variant={variant}>{label}</Badge>
              </div>
              {mod.description && (
                <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
              )}
              {mod.examDate && (
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Prüfung: {new Date(mod.examDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            {firstTopic && (
              <Link to={`/topic/${moduleId}/${firstTopic.id}`}><Button variant="primary" size="sm">Lernen starten</Button></Link>
            )}
            <Link to={`/quiz/${moduleId}`}><Button variant="secondary" size="sm">Quiz starten</Button></Link>
            <Button variant="secondary" size="sm" onClick={() => setActiveArea('exams')}>Prüfungen</Button>
          </div>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Fortschritt</span>
            <span className="font-medium text-foreground">{doneCount} / {totalTopics} Topics · {progress}%</span>
          </div>
          <ProgressBar value={progress} size="sm" color={mod.accent} />
        </div>
      </div>

      {/* Module area tabs — shared segmented control */}
      <SegmentedControl
        className="mt-6"
        ariaLabel="Modulbereiche"
        options={TABS.map(t => ({ value: t.id, label: t.label }))}
        value={activeArea}
        onChange={setActiveArea}
      />

      {/* Tab panels */}
      <div className="mt-6">
        {activeArea === 'learn' && (
          <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
            <div>
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-foreground">Topics</h2>
                {totalTopics > 0 && (
                  <span className="text-sm font-medium tabular-nums text-muted-foreground">{doneCount} / {totalTopics} abgeschlossen</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {allTopics.length === 0 ? (
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-4 py-12 text-center">
                    <span
                      className="flex size-11 items-center justify-center rounded-[12px] text-base font-bold tracking-tight"
                      style={{ color: mod.accent, background: `color-mix(in srgb, ${mod.accent} 14%, transparent)` }}
                      aria-hidden="true"
                    >
                      {moduleInitials(mod.title)}
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {mod.status === 'planned' ? 'Dieses Modul ist in Vorbereitung' : 'Noch keine Topics hinterlegt'}
                    </p>
                    <p className="max-w-[34ch] text-xs leading-relaxed text-muted-foreground">
                      {mod.status === 'planned'
                        ? 'Sobald die Skripte vorliegen, erscheinen hier die Lerninhalte, Quizfragen und Probeklausuren — im gewohnten StudyOS-Format.'
                        : 'Für dieses Modul sind noch keine Lerninhalte verfügbar.'}
                    </p>
                  </div>
                ) : allTopics.map(t => {
                  const loaded = topicData.find(td => td.id === t.id);
                  return <TopicCard key={t.id} topic={loaded ?? t} moduleId={moduleId} />;
                })}
              </div>
            </div>

            <aside className="lg:sticky lg:top-6 lg:self-start">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quellen &amp; Skripte</h3>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-4 py-8 text-center">
                <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
                  <FileText className="size-5" />
                </span>
                <p className="text-sm font-medium text-foreground">Noch keine Quellen</p>
                <p className="max-w-[22ch] text-xs leading-relaxed text-muted-foreground">
                  Skripte und Foliensätze erscheinen hier, sobald sie hinterlegt sind.
                </p>
              </div>
            </aside>
          </div>
        )}

        {activeArea === 'quiz' && (
          <section className="max-w-[820px]">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Quiz</h2>
            {questions.length === 0 ? (
              <p className="text-sm text-muted-foreground">Keine Quizfragen vorhanden.</p>
            ) : (
              <div className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-border bg-card p-5">
                <div>
                  <p className="font-semibold text-foreground">Wissenscheck</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{questions.length} Fragen für dieses Modul.</p>
                </div>
                <Link to={`/quiz/${moduleId}`}><Button variant="primary">Quiz starten</Button></Link>
              </div>
            )}
          </section>
        )}

        {activeArea === 'exams' && <ExamArea exams={exams} moduleId={moduleId} />}
      </div>
    </PageShell>
  );
}
