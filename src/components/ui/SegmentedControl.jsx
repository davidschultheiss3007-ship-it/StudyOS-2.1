import { cn } from '@/lib/utils.js';

/**
 * One segmented-control vocabulary for the whole app: module tabs, semester
 * filters, and the dashboard week/month toggle. Recessed track, raised active
 * pill, cobalt active label. `role` lets it act as a tablist or a plain group.
 */
export function SegmentedControl({
  options,            // [{ value, label }]
  value,
  onChange,
  ariaLabel,
  role = 'tablist',
  size = 'md',
  className,
}) {
  const itemRole = role === 'tablist' ? 'tab' : undefined;
  const pad = size === 'sm' ? 'px-3 py-1' : 'px-4 py-1.5';
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-[12px] border border-border bg-[var(--color-bg-elevated)] p-1',
        className,
      )}
    >
      {options.map(opt => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role={itemRole}
            aria-selected={itemRole ? active : undefined}
            aria-pressed={!itemRole ? active : undefined}
            onClick={() => onChange(opt.value)}
            className={cn(
              'rounded-md text-sm font-medium transition-[background-color,color,box-shadow,transform] duration-150 ease-out active:scale-[0.97]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)]',
              pad,
              active
                ? 'bg-card text-[var(--color-on-accent-subtle)] shadow-[var(--shadow-sm)]'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
