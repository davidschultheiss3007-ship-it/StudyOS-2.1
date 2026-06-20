// Compact grid of key figures: each {value, label, accent?}.
// Values use the darker on-tint colors so they clear contrast on the recessed
// inset surface (the base hues are too light there); these tokens re-theme to
// the lighter base colors in dark mode.
const ACCENTS = {
  default: 'var(--color-text-primary)',
  positive: 'var(--color-on-success-subtle)',
  negative: 'var(--color-on-error-subtle)',
  warning: 'var(--color-on-warning-subtle)',
  accent: 'var(--color-on-accent-subtle)',
};

export function KpiGrid({ items = [], columns }) {
  const cols = columns ?? Math.min(items.length, 4);
  return (
    <div
      className="my-2 grid gap-3"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${cols >= 4 ? '8rem' : '10rem'}, 1fr))` }}
    >
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-4 text-center">
          <div className="text-2xl font-bold tabular-nums" style={{ color: ACCENTS[item.accent] ?? ACCENTS.default }}>
            {item.value}
          </div>
          <div className="mt-1 text-xs font-medium leading-snug text-[var(--color-text-secondary)]">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default KpiGrid;
