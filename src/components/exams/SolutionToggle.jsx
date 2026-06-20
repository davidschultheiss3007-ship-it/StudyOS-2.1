import { cn } from '@/lib/utils.js';

export function SolutionToggle({ showSolutions, onChange }) {
  return (
    <div className="inline-flex rounded-lg border border-border bg-muted p-0.5" role="group" aria-label="Lösungsanzeige">
      <button
        type="button"
        aria-pressed={!showSolutions}
        onClick={() => onChange(false)}
        className={cn(
          'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
          !showSolutions ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Nur Aufgaben
      </button>
      <button
        type="button"
        aria-pressed={showSolutions}
        onClick={() => onChange(true)}
        className={cn(
          'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
          showSolutions ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Aufgaben + Lösungen
      </button>
    </div>
  );
}
