// A 100%-stacked horizontal bar for compositions and splits (e.g. portfolio
// allocation, cost structure, demographic mix). The whole bar is one figure;
// each segment is width-proportional and labelled, with a legend below. Clearer
// than a sentence listing percentages, and lighter than a full chart for a
// single distribution.
//
// Props:
//   caption?, source?
//   segments = [{ label, value (number), color?, sub? }]
//   showInline? — draw the % inside wide-enough segments (default true)
const PALETTE = [
  'var(--color-module-blue)', 'var(--color-module-purple)', 'var(--color-module-teal)',
  'var(--color-module-orange)', 'var(--color-module-pink)', 'var(--color-module-green)',
];

export function ProportionBar({ caption, source, segments = [], showInline = true }) {
  const total = segments.reduce((s, x) => s + (Number(x.value) || 0), 0) || 1;
  const pct = v => (Number(v) || 0) / total * 100;

  return (
    <figure className="my-2 rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-5">
      {caption && <figcaption className="mb-3 text-sm font-medium text-muted-foreground">{caption}</figcaption>}
      <div className="flex h-9 w-full overflow-hidden rounded-lg border border-[var(--learning-inset-border)]">
        {segments.map((s, i) => {
          const w = pct(s.value);
          const color = s.color ?? PALETTE[i % PALETTE.length];
          return (
            <div key={i} className="flex items-center justify-center overflow-hidden text-[0.6875rem] font-semibold text-white"
              style={{ width: `${w}%`, background: color }} title={`${s.label}: ${Math.round(w)}%`}>
              {showInline && w >= 9 ? `${Math.round(w)}%` : ''}
            </div>
          );
        })}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
        {segments.map((s, i) => {
          const color = s.color ?? PALETTE[i % PALETTE.length];
          return (
            <li key={i} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <span className="size-2.5 shrink-0 rounded-[3px]" style={{ background: color }} aria-hidden="true" />
              <span className="font-medium text-foreground">{s.label}</span>
              <span className="tabular-nums text-muted-foreground">{Math.round(pct(s.value))}%{s.sub ? ` · ${s.sub}` : ''}</span>
            </li>
          );
        })}
      </ul>
      {source && <p className="mt-3 text-xs italic text-muted-foreground">Quelle: {source}</p>}
    </figure>
  );
}

export default ProportionBar;
