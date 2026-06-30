import { cn } from '@/lib/utils.js';

const ACCENTS = {
  neutral: 'var(--color-border-strong)',
  accent: 'var(--color-accent)',
  teal: 'var(--color-module-teal)',
  purple: 'var(--color-module-purple)',
  orange: 'var(--color-module-orange)',
  positive: 'var(--color-success)',
  warning: 'var(--color-warning)',
  negative: 'var(--color-error)',
};

function ScaleDots({ value, min, max, color }) {
  const steps = Array.from({ length: max - min + 1 }, (_, index) => min + index);

  return (
    <div className="flex items-center gap-1.5" aria-label={`Ausprägung ${value} von ${max}`}>
      {steps.map((step) => {
        const active = step === value;
        return (
          <span
            key={step}
            className={cn(
              'grid size-5 place-items-center rounded-full border text-[0.65rem] font-semibold tabular-nums',
              active ? 'text-white' : 'text-muted-foreground',
            )}
            style={{
              borderColor: active ? color : 'var(--learning-inset-border)',
              background: active ? color : 'var(--learning-inset-bg)',
            }}
          >
            {active ? step : ''}
          </span>
        );
      })}
    </div>
  );
}

export function ScaleProfile({
  groups = [],
  min = 1,
  max = 7,
  caption,
  source,
}) {
  return (
    <figure className="my-3 overflow-hidden rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)]">
      {(caption || source) && (
        <figcaption className="border-b border-border px-4 py-3">
          {caption && <p className="text-sm font-semibold text-foreground">{caption}</p>}
          {source && <p className="text-xs text-muted-foreground">{source}</p>}
        </figcaption>
      )}

      <div className="grid gap-4 p-4">
        {groups.map((group) => {
          const color = ACCENTS[group.accent] ?? ACCENTS.neutral;
          return (
            <section key={group.title} className="rounded-lg border border-border bg-card">
              <header className="flex items-center gap-2 border-b border-border px-3 py-2">
                <span className="size-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />
                <h4 className="text-sm font-semibold text-foreground">{group.title}</h4>
              </header>
              <div className="divide-y divide-border">
                {(group.items ?? []).map((item) => (
                  <div key={item.label} className="grid gap-2 px-3 py-2.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.note && <p className="text-xs text-muted-foreground">{item.note}</p>}
                    </div>
                    <ScaleDots value={item.value} min={min} max={max} color={color} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </figure>
  );
}

export default ScaleProfile;
