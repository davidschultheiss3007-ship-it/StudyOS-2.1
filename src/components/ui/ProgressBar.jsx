import { cn } from '@/lib/utils.js';

const sizeClass = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3' };

export function ProgressBar({ value = 0, max = 100, color, size = 'md', showLabel = false, className }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn('w-full overflow-hidden rounded-full bg-muted', sizeClass[size] ?? sizeClass.md)}>
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%`, ...(color ? { background: color } : {}) }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && <span className="text-xs tabular-nums text-muted-foreground">{pct}%</span>}
    </div>
  );
}
