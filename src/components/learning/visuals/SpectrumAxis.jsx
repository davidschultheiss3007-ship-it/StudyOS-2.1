// Positions labelled markers along a single horizontal axis (e.g. a
// risk/return or correlation spectrum). markers = [{at: 0..100, label, sub}].
export function SpectrumAxis({ min, max, markers = [], caption }) {
  return (
    <figure className="my-2 rounded-xl border border-border bg-card p-5">
      {caption && <figcaption className="mb-4 text-sm font-medium text-muted-foreground">{caption}</figcaption>}
      <div className="relative mx-2 pb-12 pt-8">
        <div className="h-1.5 rounded-full bg-gradient-to-r from-[var(--color-success)] via-[var(--color-warning)] to-[var(--color-error)]" />
        {markers.map((m, i) => {
          // Keep edge labels inside the figure: near 0% they grow rightward,
          // near 100% leftward, otherwise stay centred on the dot. Prevents the
          // fixed-width sub-labels from spilling past the figure on narrow/mobile
          // widths (the dot stays exactly on m.at regardless of label alignment).
          const edge = m.at <= 15 ? 'start' : m.at >= 85 ? 'end' : 'center';
          const align = edge === 'start' ? 'translate-x-0 items-start text-left'
            : edge === 'end' ? '-translate-x-full items-end text-right'
            : '-translate-x-1/2 items-center text-center';
          return (
            <div key={i} className={`absolute top-0 flex max-w-[8rem] flex-col ${align}`} style={{ left: `${m.at}%` }}>
              <span className="mb-1 max-w-full rounded-md border border-border bg-card px-2 py-0.5 text-xs font-semibold leading-tight text-foreground shadow-sm">{m.label}</span>
            </div>
          );
        })}
        {markers.map((m, i) => (
          // Dot sits on the gradient bar (top: 2rem, h-1.5) and stays exactly on
          // m.at, decoupled from the label-block alignment above.
          <span key={`d${i}`} className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-[var(--color-accent)] shadow" style={{ left: `${m.at}%`, top: 'calc(2rem + 0.1875rem)' }} aria-hidden="true" />
        ))}
        {markers.map((m, i) => {
          if (!m.sub) return null;
          const edge = m.at <= 15 ? 'start' : m.at >= 85 ? 'end' : 'center';
          const align = edge === 'start' ? 'translate-x-0 text-left'
            : edge === 'end' ? '-translate-x-full text-right'
            : '-translate-x-1/2 text-center';
          return (
            <div key={`s${i}`} className={`absolute bottom-0 max-w-[8rem] text-[0.6875rem] leading-tight text-muted-foreground ${align}`} style={{ left: `${m.at}%` }}>
              {m.sub}
            </div>
          );
        })}
        {(min || max) && (
          <div className="absolute inset-x-0 -bottom-4 flex justify-between text-xs text-muted-foreground">
            <span>{min}</span><span>{max}</span>
          </div>
        )}
      </div>
    </figure>
  );
}

export default SpectrumAxis;
