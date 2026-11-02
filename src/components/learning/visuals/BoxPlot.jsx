import { useLayoutEffect, useRef, useState } from 'react';
import { VisualFrame } from './VisualFrame.jsx';

// Horizontal box plot drawn as plain SVG so it themes through tokens.css.
// groups = [{ label, low, q1, median, q3, high, outliers?: number[] }]
// low / high are the whisker ends (not necessarily min / max).
// The drawing width follows the rendered width so labels stay 12px on phones.
const ROW = 64;
const PAD = { top: 12, right: 16, bottom: 44, left: 64 };

export function BoxPlot({ title, source, groups = [], domain, ticks = [], xLabel, decimal = ',' }) {
  const wrapRef = useRef(null);
  const [W, setW] = useState(640);
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(([entry]) => setW(Math.max(280, Math.round(entry.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const [min, max] = domain;
  const plotW = W - PAD.left - PAD.right;
  const height = PAD.top + groups.length * ROW + PAD.bottom;
  const x = v => PAD.left + ((v - min) / (max - min)) * plotW;
  const fmt = v => String(v).replace('.', decimal);
  const axisY = PAD.top + groups.length * ROW;

  return (
    <VisualFrame title={title} source={source}>
      <div ref={wrapRef}>
      <svg
        viewBox={`0 0 ${W} ${height}`}
        width="100%"
        role="img"
        aria-label={`${title ?? 'Boxplot'}: ${groups.map(g => `${g.label} Median ${fmt(g.median)}, Box ${fmt(g.q1)} bis ${fmt(g.q3)}`).join('; ')}`}
        className="block"
      >
        {ticks.map(t => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={PAD.top} y2={axisY} stroke="var(--learning-grid-line)" strokeDasharray="3 3" />
            <text x={x(t)} y={axisY + 18} textAnchor="middle" fontSize="12" fill="var(--color-text-muted)">{fmt(t)}</text>
          </g>
        ))}
        <line x1={PAD.left} x2={W - PAD.right} y1={axisY} y2={axisY} stroke="var(--learning-axis-line)" />
        {xLabel && (
          <text x={PAD.left + plotW / 2} y={axisY + 38} textAnchor="middle" fontSize="12" fill="var(--color-text-muted)">{xLabel}</text>
        )}

        {groups.map((g, i) => {
          const cy = PAD.top + i * ROW + ROW / 2;
          const h = 26;
          return (
            <g key={g.label}>
              <text x={PAD.left - 10} y={cy + 4} textAnchor="end" fontSize="12" fontWeight="600" fill="var(--color-text-primary)">{g.label}</text>
              <line x1={x(g.low)} x2={x(g.q1)} y1={cy} y2={cy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
              <line x1={x(g.q3)} x2={x(g.high)} y1={cy} y2={cy} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
              <line x1={x(g.low)} x2={x(g.low)} y1={cy - 8} y2={cy + 8} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
              <line x1={x(g.high)} x2={x(g.high)} y1={cy - 8} y2={cy + 8} stroke="var(--color-text-secondary)" strokeWidth="1.5" />
              <rect x={x(g.q1)} y={cy - h / 2} width={Math.max(1, x(g.q3) - x(g.q1))} height={h} rx="3" fill="var(--color-accent-subtle)" stroke="var(--color-accent)" strokeWidth="1.5" />
              <line x1={x(g.median)} x2={x(g.median)} y1={cy - h / 2} y2={cy + h / 2} stroke="var(--color-accent)" strokeWidth="3" />
              {(g.outliers ?? []).map((o, k) => (
                <circle key={k} cx={x(o)} cy={cy} r="4" fill="var(--color-module-orange)" stroke="var(--color-bg-card)" strokeWidth="1" />
              ))}
            </g>
          );
        })}
      </svg>
      </div>
      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>Box: Q1 bis Q3</span>
        <span>dicke Linie: Median</span>
        <span>Antennen: bis max. 1,5 · IQR</span>
        {groups.some(g => g.outliers?.length) && <span>Punkte: mögliche Ausreißer</span>}
      </p>
    </VisualFrame>
  );
}

export default BoxPlot;
