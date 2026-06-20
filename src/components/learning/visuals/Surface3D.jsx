import { lazy, useEffect, useRef, useState } from 'react';
import { VisualFrame, VisualSkeleton } from './VisualFrame.jsx';

const Surface3DImpl = lazy(() => import('./Surface3DImpl.jsx'));

// Flagship 3D: a parametric surface z = f(x, y) for genuine 3D relationships
// (utility/value-function landscapes, risk-aversion bowls, tradeoff saddles).
// Same lifecycle discipline as Scene3D: R3F/three are lazy-loaded, the canvas
// mounts only once scrolled into view, and prefers-reduced-motion gets a static
// note instead of an interactive canvas.
//
// `kind` selects a built-in, mathematically meaningful surface so authors don't
// pass functions through MDX:
//   'concave'  — risk-averse utility, diminishing marginal benefit (dome)
//   'bowl'     — convex risk/variance landscape with a single minimum
//   'saddle'   — a genuine tradeoff surface (min in one axis, max in the other)
//   's-curve'  — Prospect-Theory-style value surface: concave in gains, convex
//                and steeper in losses (loss aversion), across a second axis.
export function Surface3D({ kind = 'concave', title, source, hint, height = 380, xLabel, yLabel, zLabel, accent }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  }, []);

  useEffect(() => {
    if (reducedMotion || !ref.current) return undefined;
    const obs = new IntersectionObserver(
      entries => { if (entries[0]?.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: '200px' },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <VisualFrame title={title} source={source} height={height}>
      <div ref={ref}>
        {reducedMotion ? (
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-muted/40 p-6 text-center text-sm text-muted-foreground" style={{ height }}>
            <span>3D-Oberfläche deaktiviert (reduzierte Bewegung).</span>
            {hint && <span className="text-xs">{hint}</span>}
          </div>
        ) : inView ? (
          <Surface3DImpl kind={kind} height={height} xLabel={xLabel} yLabel={yLabel} zLabel={zLabel} accent={accent} />
        ) : (
          <VisualSkeleton height={height} />
        )}
      </div>
      {hint && !reducedMotion && <p className="mt-2 text-center text-xs text-muted-foreground">{hint}</p>}
    </VisualFrame>
  );
}

export default Surface3D;
