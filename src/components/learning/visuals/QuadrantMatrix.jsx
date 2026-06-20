// A 2x2 conceptual matrix: two axes split a space into four labelled quadrants
// (e.g. System 1/2 traits, risk attitude × domain, effort × impact). Common in
// psychology and management content where the *structure* is the lesson — far
// clearer than four bullets in a list.
//
// Props:
//   xLabel, yLabel        — axis captions (y reads bottom→top, x reads left→right)
//   xLow/xHigh/yLow/yHigh — pole labels at the axis ends
//   quadrants = [{ pos: 'tl'|'tr'|'bl'|'br', title, points?: string[], accent? }]
const ACCENTS = {
  neutral: 'var(--color-border-strong)',
  accent: 'var(--color-accent)',
  purple: 'var(--color-module-purple)',
  teal: 'var(--color-module-teal)',
  positive: 'var(--color-success)',
  warning: 'var(--color-warning)',
  negative: 'var(--color-error)',
  orange: 'var(--color-module-orange)',
};
const POS = { tl: 'order-1', tr: 'order-2', bl: 'order-3', br: 'order-4' };

export function QuadrantMatrix({ caption, xLabel, yLabel, xLow, xHigh, yLow, yHigh, quadrants = [] }) {
  const byPos = pos => quadrants.find(q => q.pos === pos) ?? {};
  const cell = pos => {
    const q = byPos(pos);
    const color = ACCENTS[q.accent] ?? ACCENTS.neutral;
    return (
      <div className={`flex min-h-[7rem] flex-col gap-1.5 rounded-lg border bg-[var(--learning-card-bg-soft)] p-3.5 ${POS[pos]}`}
        style={{ borderColor: 'var(--learning-inset-border)', borderTop: `2px solid ${color}` }}>
        {q.title && <span className="text-sm font-semibold leading-snug" style={{ color }}>{q.title}</span>}
        {q.points?.length > 0 && (
          <ul className="flex flex-col gap-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
            {q.points.map((p, i) => (
              <li key={i} className="flex gap-1.5"><span className="mt-1 size-1 shrink-0 rounded-full" style={{ background: color }} aria-hidden="true" />{p}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <figure className="my-2 rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-5">
      {caption && <figcaption className="mb-4 text-sm font-medium text-muted-foreground">{caption}</figcaption>}
      <div className="flex gap-2">
        {/* Y axis rail */}
        <div className="flex w-5 shrink-0 flex-col items-center justify-between py-1">
          {yHigh && <span className="text-[0.625rem] font-medium leading-tight text-muted-foreground">{yHigh}</span>}
          {yLabel && <span className="rotate-180 whitespace-nowrap text-[0.6875rem] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] [writing-mode:vertical-rl]">{yLabel}</span>}
          {yLow && <span className="text-[0.625rem] font-medium leading-tight text-muted-foreground">{yLow}</span>}
        </div>
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-2 gap-2">
            {cell('tl')}{cell('tr')}{cell('bl')}{cell('br')}
          </div>
          {/* X axis rail */}
          <div className="mt-2 flex items-center justify-between px-1">
            {xLow && <span className="text-[0.625rem] font-medium text-muted-foreground">{xLow}</span>}
            {xLabel && <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{xLabel}</span>}
            {xHigh && <span className="text-[0.625rem] font-medium text-muted-foreground">{xHigh}</span>}
          </div>
        </div>
      </div>
    </figure>
  );
}

export default QuadrantMatrix;
