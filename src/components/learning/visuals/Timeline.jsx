// Vertical ordered sequence of steps/events: each {label, title, text}.
export function Timeline({ events = [] }) {
  return (
    <ol className="my-2 flex flex-col">
      {events.map((evt, i) => {
        const last = i === events.length - 1;
        return (
          <li key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-subtle)] text-xs font-semibold text-[var(--color-accent)]">
                {evt.label ?? i + 1}
              </span>
              {!last && <span className="my-1 w-px flex-1 bg-border" aria-hidden="true" />}
            </div>
            <div className={last ? 'pb-0' : 'pb-6'}>
              <h4 className="font-semibold text-foreground">{evt.title}</h4>
              {evt.text && <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{evt.text}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
