import { useId } from 'react';

// Schematic economics diagram (price–quantity space) drawn as inline SVG.
// Built for textbook figures that DataChart cannot express: shaded/hatched
// welfare areas (consumer/producer surplus, deadweight loss), lettered points
// (A, B, E …), symbolic axis ticks (p*, x_m) and labelled curves.
//
// All coordinates are data coordinates with the origin bottom-left (y up).
// Colors come exclusively from tokens via `tone`, so both themes work.
//
// Props:
//   title, source, alt          — caption, source line, accessible description
//   xMax, yMax                  — data domain [0,xMax] × [0,yMax]
//   xLabel, yLabel              — axis captions at the arrow tips
//   xTicks/yTicks = [{ at, label }]
//   areas   = [{ points:[[x,y]…], tone, pattern:'hatch'|'cross'|'solid', label?, labelAt?, anchor? }]
//   curves  = [{ points:[[x,y]…], tone, dashed?, width?, label?, labelAt?, anchor? }]
//   guides  = [{ points:[[x,y]…] }]               — thin dashed helper lines
//   markers = [{ at:[x,y], label, dx?, dy?, dot? }] — lettered points
//   notes   = [{ at:[x,y], text, tone?, anchor? }]  — free text (single line)
//   minWidth                    — px; below it the figure scrolls horizontally
const TONES = {
  demand: 'var(--color-accent)',
  mr: 'var(--color-module-teal)',
  cost: 'var(--color-error)',
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  purple: 'var(--color-module-purple)',
  orange: 'var(--color-module-orange)',
  accent: 'var(--color-accent)',
  muted: 'var(--color-text-muted)',
  text: 'var(--color-text-primary)',
};
const tone = t => TONES[t] ?? t ?? TONES.text;

const W = 600;
const H = 380;
const PAD = { l: 56, r: 28, t: 28, b: 44 };

export function EconDiagram({
  title, source, alt, xMax = 100, yMax = 100, xLabel = 'x', yLabel = 'p',
  xTicks = [], yTicks = [], areas = [], curves = [], guides = [], markers = [], notes = [],
  minWidth = 460,
}) {
  const uid = useId().replace(/:/g, '');
  const sx = x => PAD.l + (x / xMax) * (W - PAD.l - PAD.r);
  const sy = y => H - PAD.b - (y / yMax) * (H - PAD.t - PAD.b);
  const pts = arr => arr.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ');
  const x0 = sx(0);
  const y0 = sy(0);

  return (
    <figure className="my-2 overflow-hidden rounded-xl border border-border bg-card">
      {title && <figcaption className="border-b border-border px-4 py-2.5 text-sm font-medium text-foreground">{title}</figcaption>}
      <div className="overflow-x-auto p-4">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={alt ?? title} className="block h-auto w-full" style={{ minWidth }}>
          <defs>
            <marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--color-text-primary)" />
            </marker>
            {areas.map((a, i) => (
              <pattern key={i} id={`${uid}-p${i}`} patternUnits="userSpaceOnUse" width="7" height="7" patternTransform={a.pattern === 'cross' ? undefined : 'rotate(45)'}>
                <line x1="0" y1="0" x2="0" y2="7" stroke={tone(a.tone)} strokeWidth="1.4" />
                {a.pattern === 'cross' && <line x1="0" y1="0" x2="7" y2="0" stroke={tone(a.tone)} strokeWidth="1.4" />}
              </pattern>
            ))}
          </defs>

          {areas.map((a, i) => (
            <g key={i}>
              <polygon points={pts(a.points)} fill={tone(a.tone)} fillOpacity={a.pattern === 'solid' ? 0.35 : 0.12} />
              {a.pattern !== 'solid' && <polygon points={pts(a.points)} fill={`url(#${uid}-p${i})`} fillOpacity="0.75" />}
              <polygon points={pts(a.points)} fill="none" stroke={tone(a.tone)} strokeWidth="1.2" />
            </g>
          ))}

          {guides.map((g, i) => (
            <polyline key={i} points={pts(g.points)} fill="none" stroke="var(--color-text-muted)" strokeWidth="1" strokeDasharray="4 4" />
          ))}

          {/* axes */}
          <line x1={x0} y1={y0} x2={W - PAD.r + 10} y2={y0} stroke="var(--color-text-primary)" strokeWidth="1.5" markerEnd={`url(#${uid}-arrow)`} />
          <line x1={x0} y1={y0} x2={x0} y2={PAD.t - 14} stroke="var(--color-text-primary)" strokeWidth="1.5" markerEnd={`url(#${uid}-arrow)`} />
          <text x={W - PAD.r + 4} y={y0 + 24} fontSize="15" fill="var(--color-text-primary)" textAnchor="middle" fontStyle="italic">{xLabel}</text>
          <text x={x0 + 8} y={PAD.t - 8} fontSize="15" fill="var(--color-text-primary)" fontStyle="italic">{yLabel}</text>

          {xTicks.map((t, i) => (
            <g key={i}>
              <line x1={sx(t.at)} y1={y0} x2={sx(t.at)} y2={y0 + 5} stroke="var(--color-text-primary)" />
              <text x={sx(t.at)} y={y0 + 22} fontSize="14" fill="var(--color-text-primary)" textAnchor="middle" fontStyle="italic">{t.label}</text>
            </g>
          ))}
          {yTicks.map((t, i) => (
            <g key={i}>
              <line x1={x0 - 5} y1={sy(t.at)} x2={x0} y2={sy(t.at)} stroke="var(--color-text-primary)" />
              <text x={x0 - 10} y={sy(t.at) + 5} fontSize="14" fill="var(--color-text-primary)" textAnchor="end" fontStyle="italic">{t.label}</text>
            </g>
          ))}

          {curves.map((c, i) => (
            <polyline key={i} points={pts(c.points)} fill="none" stroke={tone(c.tone)} strokeWidth={c.width ?? 2.25}
              strokeDasharray={c.dashed ? '7 5' : undefined} strokeLinecap="round" />
          ))}

          {[...areas, ...curves].filter(o => o.label && o.labelAt).map((o, i) => (
            <text key={i} x={sx(o.labelAt[0])} y={sy(o.labelAt[1])} fontSize="13" fontWeight="600" fill={tone(o.tone)} textAnchor={o.anchor ?? 'start'}
              stroke="var(--color-bg-card)" strokeWidth="3" paintOrder="stroke">{o.label}</text>
          ))}

          {markers.map((m, i) => (
            <g key={i}>
              {m.dot !== false && <circle cx={sx(m.at[0])} cy={sy(m.at[1])} r="3" fill="var(--color-text-primary)" />}
              <text x={sx(m.at[0]) + (m.dx ?? 6)} y={sy(m.at[1]) + (m.dy ?? -6)} fontSize="14" fontWeight="600" fill="var(--color-text-primary)"
                stroke="var(--color-bg-card)" strokeWidth="3" paintOrder="stroke">{m.label}</text>
            </g>
          ))}

          {notes.map((n, i) => (
            <text key={i} x={sx(n.at[0])} y={sy(n.at[1])} fontSize="13" fill={tone(n.tone ?? 'text')} textAnchor={n.anchor ?? 'start'}
              stroke="var(--color-bg-card)" strokeWidth="3" paintOrder="stroke">{n.text}</text>
          ))}
        </svg>
      </div>
      {source && <p className="border-t border-border px-4 py-2 text-xs italic text-muted-foreground">Quelle: {source}</p>}
    </figure>
  );
}
