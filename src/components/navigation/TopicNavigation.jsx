import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function TopicLink({ direction, moduleId, topic }) {
  if (!topic) return <span aria-hidden="true" />;
  const isPrev = direction === 'prev';
  return (
    <Link
      to={`/topic/${moduleId}/${topic.id}`}
      className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:bg-accent"
    >
      {isPrev && <ArrowLeft className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
      <span className={`flex min-w-0 flex-col ${isPrev ? '' : 'ml-auto text-right'}`}>
        <span className="text-xs text-muted-foreground">{isPrev ? 'Vorheriges Topic' : 'Nächstes Topic'}</span>
        <span className="truncate font-medium text-foreground">{topic.title}</span>
      </span>
      {!isPrev && <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
    </Link>
  );
}

export function TopicNavigation({ moduleId, prevTopic, nextTopic, position = 'bottom' }) {
  return (
    <nav
      className="flex flex-col gap-3 sm:flex-row"
      aria-label={`Topic-Navigation ${position === 'top' ? 'oben' : 'unten'}`}
    >
      <TopicLink direction="prev" moduleId={moduleId} topic={prevTopic} />
      {nextTopic ? (
        <TopicLink direction="next" moduleId={moduleId} topic={nextTopic} />
      ) : (
        <Link
          to={`/quiz/${moduleId}`}
          className="flex flex-1 items-center justify-end gap-3 rounded-lg border border-transparent bg-primary p-4 text-sm text-primary-foreground transition-opacity hover:opacity-90"
        >
          <span className="flex flex-col text-right">
            <span className="text-xs opacity-80">Modul abgeschlossen</span>
            <span className="font-medium">Quiz starten</span>
          </span>
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}

export function TopicEdgeNavigation({ moduleId, prevTopic, nextTopic }) {
  return (
    <nav
      className="pointer-events-none fixed inset-x-0 top-1/2 z-30 hidden -translate-y-1/2 justify-between px-2 xl:flex"
      aria-label="Schnelle Topic-Navigation"
    >
      {prevTopic ? (
        <Link
          to={`/topic/${moduleId}/${prevTopic.id}`}
          className="pointer-events-auto flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-accent"
          aria-label={`Vorheriges Topic: ${prevTopic.title}`}
          title={`Vorheriges Topic: ${prevTopic.title}`}
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </Link>
      ) : <span />}
      {nextTopic ? (
        <Link
          to={`/topic/${moduleId}/${nextTopic.id}`}
          className="pointer-events-auto flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-accent"
          aria-label={`Nächstes Topic: ${nextTopic.title}`}
          title={`Nächstes Topic: ${nextTopic.title}`}
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : <span />}
    </nav>
  );
}
