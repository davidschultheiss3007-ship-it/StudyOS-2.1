import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge.jsx';
import { ProgressBar } from '@/components/ui/ProgressBar.jsx';
import { getCompletedTopics } from '@/app/storage.js';
import { cn, moduleInitials } from '@/lib/utils.js';

function getStatusBadge(status) {
  switch (status) {
    case 'done': return { label: 'Fertig', variant: 'success' };
    case 'in-progress': return { label: 'Aktiv', variant: 'primary' };
    case 'planned': return { label: 'Geplant', variant: 'default' };
    default: return { label: status, variant: 'default' };
  }
}

function computeProgress(module) {
  const completed = getCompletedTopics();
  const total = module.topics?.length ?? 0;
  if (total === 0) return 0;
  const done = module.topics.filter(t => completed.includes(t.id)).length;
  return Math.round((done / total) * 100);
}

export function ModuleCard({ module, compact = false }) {
  const { label, variant } = getStatusBadge(module.status);
  const progress = computeProgress(module);
  const topicCount = module.topics?.length ?? 0;
  const initials = moduleInitials(module.title);

  return (
    <Link
      to={`/module/${module.id}`}
      className={cn(
        'group flex h-full flex-col rounded-xl border border-border bg-card text-inherit no-underline shadow-[var(--shadow-card)]',
        'transition-[border-color,transform,box-shadow] duration-150 ease-out',
        'hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)] active:translate-y-0 active:scale-[0.995]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)]',
        compact ? 'gap-2.5 p-4' : 'gap-3.5 p-5',
      )}
      style={{ '--card-accent': module.accent }}
    >
      <div className="flex items-start gap-3.5">
        {/* Module monogram tile — the shared identity affordance */}
        <span
          className={cn(
            'flex shrink-0 items-center justify-center rounded-lg font-bold tracking-tight',
            compact ? 'size-9 text-xs' : 'size-11 text-sm',
          )}
          style={{
            color: module.accent,
            background: `color-mix(in srgb, ${module.accent} 14%, transparent)`,
          }}
          aria-hidden="true"
        >
          {initials}
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-start justify-between gap-3">
            <span className={cn(
              'min-w-0 flex-1 font-semibold leading-tight text-foreground transition-colors group-hover:text-[var(--color-accent)]',
              compact ? 'text-sm' : 'text-base',
            )}>
              {module.title}
            </span>
            <Badge variant={variant} size="sm" className="mt-0.5 shrink-0">{label}</Badge>
          </div>

          {!compact && (
            <p className="line-clamp-2 min-h-[2.625rem] text-sm leading-relaxed text-muted-foreground">{module.description}</p>
          )}
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 pt-0.5">
        <ProgressBar value={progress} size="sm" color={module.accent} className="flex-1" />
        <span className="shrink-0 text-xs font-semibold tabular-nums text-foreground">{progress}%</span>
        <span aria-hidden="true" className="text-[var(--color-border-strong)]">·</span>
        <span className="shrink-0 text-xs font-medium text-muted-foreground">
          {topicCount} {topicCount === 1 ? 'Topic' : 'Topics'}
        </span>
      </div>
    </Link>
  );
}
