import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Check, FileText, Clock } from 'lucide-react';
import { getTopicById, getModuleById } from '@/data/moduleRegistry.js';
import { getSemesterById } from '@/data/semesters.js';
import { FullContentView } from '@/components/learning/FullContentView.jsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs.jsx';
import { TopicEdgeNavigation, TopicNavigation } from '@/components/navigation/TopicNavigation.jsx';
import { Button } from '@/components/ui/Button.jsx';
import { Badge } from '@/components/ui/Badge.jsx';
import { PageShell, PageError } from '@/components/layout/PageShell.jsx';
import { markTopicDone, unmarkTopicDone, isTopicDone, setLastTopic } from '@/app/storage.js';

export function Topic() {
  const { moduleId, topicId } = useParams();
  const [doneState, setDoneState] = useState(() => ({ topicId, value: isTopicDone(topicId) }));

  const mod = getModuleById(moduleId);
  const topicContent = getTopicById(moduleId, topicId);
  const topicMeta = mod?.topics?.find(t => t.id === topicId) ?? null;
  const topic = topicContent ?? topicMeta;
  const done = doneState.topicId === topicId ? doneState.value : isTopicDone(topicId);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    return () => window.cancelAnimationFrame(frame);
  }, [moduleId, topicId]);

  if (!mod || !topic) return <PageError message="Topic nicht gefunden." />;

  const hasContent = topicContent !== null && (topicContent?.sections?.length ?? 0) > 0;
  const semester = getSemesterById(mod.semesterId);
  const allTopics = mod.topics ?? [];
  const currentIdx = allTopics.findIndex(item => item.id === topicId);
  const prevTopic = currentIdx > 0 ? allTopics[currentIdx - 1] : null;
  const nextTopic = currentIdx < allTopics.length - 1 ? allTopics[currentIdx + 1] : null;

  function toggleDone() {
    if (!hasContent) return;
    if (done) {
      unmarkTopicDone(topicId);
      setDoneState({ topicId, value: false });
    } else {
      markTopicDone(topicId);
      setLastTopic(moduleId, topicId);
      setDoneState({ topicId, value: true });
    }
  }

  return (
    <>
      <TopicEdgeNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} />
      {/* pt clears the fixed menu button (top-left, ~58px) so it never overlaps the heading */}
      <PageShell wide className="pt-16 lg:px-12">
        <div className="mx-auto max-w-[var(--reading-max-width)]">
          <Breadcrumbs items={[
            { label: 'Startseite', to: '/' },
            { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
            { label: mod.title, to: `/module/${moduleId}` },
            { label: topic.title },
          ]} />

          <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-foreground">{topic.title}</h1>
            <Button variant={done && hasContent ? 'success' : 'secondary'} onClick={toggleDone} disabled={!hasContent}>
              {done && hasContent ? (
                <><Check className="size-4" strokeWidth={2.5} /> Erledigt</>
              ) : hasContent ? 'Als erledigt markieren' : 'Noch kein Inhalt verfügbar'}
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {topic.source && <span className="flex items-center gap-1.5"><FileText className="size-3.5" aria-hidden="true" />{topic.source}</span>}
            {topic.estimatedMinutes && <span className="flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden="true" />ca. {topic.estimatedMinutes} min</span>}
            {done && hasContent && <Badge variant="success" size="sm">Abgeschlossen</Badge>}
          </div>

          {hasContent && (
            <div className="my-6"><TopicNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} position="top" /></div>
          )}

          <div className="mt-8">
            {hasContent ? (
              <FullContentView key={`${moduleId}-${topicId}`} topic={topic} />
            ) : (
              <div className="flex min-h-[clamp(20rem,46vh,28rem)] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
                <span className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
                  <FileText className="size-6" />
                </span>
                <p className="text-base font-semibold text-foreground">Kein Inhalt vorhanden.</p>
                <p className="max-w-[34ch] text-sm leading-relaxed">Dieses Topic ist registriert, enthält aber noch keinen Lerninhalt.</p>
              </div>
            )}
          </div>

          <div className="mt-12"><TopicNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} /></div>
        </div>
      </PageShell>
    </>
  );
}
