import { Link } from 'react-router-dom';
import { Check, Circle } from 'lucide-react';
import { isTopicDone } from '@/app/storage.js';
import { cn } from '@/lib/utils.js';

/**
 * The `source` field is a long provenance string that mostly echoes the title,
 * e.g. "Asset Management · Kapitel 5 · Grundlagen der Portfoliotheorie · Folien 153-202".
 * The only part that isn't already in the title is the slide range, so we surface
 * just that ("Folien 153–202") and drop the rest. Falls back to nothing when the
 * source carries no distinct detail.
 */
function topicDetail(topic) {
  const src = topic.source;
  if (!src) return null;
  const slideMatch = src.match(/Folien?\s+[\d–\-\s]+/i);
  if (slideMatch) return slideMatch[0].replace(/-/g, '–').replace(/\s+/g, ' ').trim();
  return null;
}

export function TopicCard({ topic, moduleId }) {
  const done = topic.hasContent !== false && isTopicDone(topic.id);
  const detail = topicDetail(topic);

  return (
    <Link
      to={`/topic/${moduleId}/${topic.id}`}
      className={cn(
        'group flex items-center gap-3.5 rounded-xl border border-border bg-card px-4 py-3 text-inherit no-underline',
        'shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-150 ease-out',
        'hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)] active:scale-[0.995]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)]',
      )}
    >
      {/* Status indicator — a real ring/check, never an empty bordered box */}
      <span
        className={cn(
          'flex size-[22px] shrink-0 items-center justify-center rounded-full transition-colors duration-150',
          done
            ? 'bg-[var(--color-success)] text-white'
            : 'text-[var(--color-border-strong)] group-hover:text-[var(--color-accent)]',
        )}
        aria-hidden="true"
      >
        {done
          ? <Check className="size-3.5" strokeWidth={3} />
          : <Circle className="size-[18px]" strokeWidth={1.75} />}
      </span>

      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className={cn(
            'truncate text-sm font-semibold leading-snug text-foreground transition-colors',
            'group-hover:text-[var(--color-accent)]',
            done && 'text-muted-foreground group-hover:text-muted-foreground',
          )}
        >
          {topic.title}
        </span>
        {detail && (
          <span className="truncate text-xs font-medium text-muted-foreground">{detail}</span>
        )}
      </div>

      {topic.estimatedMinutes && (
        <span className="shrink-0 whitespace-nowrap rounded-md bg-muted px-2 py-0.5 text-xs font-medium tabular-nums text-muted-foreground">
          {topic.estimatedMinutes} min
        </span>
      )}
    </Link>
  );
}
