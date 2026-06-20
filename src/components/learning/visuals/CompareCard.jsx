// Side-by-side comparison of 2–3 items, each with a title, optional subtitle,
// accent role and a list of points. For binary/ternary contrasts.
const ACCENTS = {
  neutral: 'var(--color-border-strong)',
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  warning: 'var(--color-warning)',
  accent: 'var(--color-accent)',
  purple: 'var(--color-module-purple)',
};

export function CompareCard({ items = [] }) {
  const cols = items.length === 3 ? 'md:grid-cols-3' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1';
  return (
    <div className={`my-2 grid gap-3 ${cols}`}>
      {items.map((item, i) => {
        const color = ACCENTS[item.accent] ?? ACCENTS.neutral;
        return (
          <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)]">
            <div className="border-b-2 px-4 py-3" style={{ borderColor: color }}>
              {item.tag && <span className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>{item.tag}</span>}
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              {item.subtitle && <p className="text-xs text-muted-foreground">{item.subtitle}</p>}
            </div>
            <ul className="flex flex-1 flex-col gap-2 p-4 text-sm">
              {(item.points ?? []).map((p, j) => (
                <li key={j} className="flex gap-2 text-[var(--color-text-secondary)]">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: color }} aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CompareCard;
