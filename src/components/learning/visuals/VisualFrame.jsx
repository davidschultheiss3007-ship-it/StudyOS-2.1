import { Suspense } from 'react';

// Shared chrome for the heavy lazy visuals: optional title, framed surface,
// and a Suspense fallback skeleton sized to the chart.
export function VisualFrame({ title, source, height = 320, children }) {
  return (
    <figure className="my-2 overflow-hidden rounded-xl border border-border bg-card">
      {title && (
        <figcaption className="border-b border-border px-4 py-2.5 text-sm font-medium text-foreground">{title}</figcaption>
      )}
      <div className="p-4">
        <Suspense fallback={<VisualSkeleton height={height} />}>{children}</Suspense>
      </div>
      {source && <p className="border-t border-border px-4 py-2 text-xs italic text-muted-foreground">Quelle: {source}</p>}
    </figure>
  );
}

export function VisualSkeleton({ height = 320 }) {
  return (
    <div
      className="flex w-full animate-pulse items-center justify-center rounded-lg bg-muted/50 text-sm text-muted-foreground motion-reduce:animate-none"
      style={{ height }}
    >
      Visualisierung wird geladen …
    </div>
  );
}
