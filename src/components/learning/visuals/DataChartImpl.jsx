import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, AreaChart, Area,
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceDot, ReferenceLine,
} from 'recharts';

// Recharts implementation. Loaded lazily via DataChart.jsx so recharts stays
// out of the initial bundle. `series` = [{key,name,color}]; `data` = rows.
const GRID = 'var(--learning-grid-line)';
const AXIS = 'var(--learning-axis-line)';
const PALETTE = ['var(--color-module-blue)', 'var(--color-module-purple)', 'var(--color-module-teal)', 'var(--color-module-orange)', 'var(--color-module-pink)'];

function axisProps(label, key) {
  return {
    stroke: AXIS,
    tick: { fill: 'var(--color-text-muted)', fontSize: 12 },
    label: label ? { value: label, position: key === 'x' ? 'insideBottom' : 'insideLeft', offset: key === 'x' ? -4 : 10, fill: 'var(--color-text-muted)', fontSize: 12, angle: key === 'y' ? -90 : 0 } : undefined,
  };
}

// Legend below the plot: keep clear of an x-axis label and use neutral text so
// series colours never carry small text on their own (contrast).
function legendProps(xLabel) {
  return {
    wrapperStyle: { fontSize: 12, paddingTop: xLabel ? 18 : 0 },
    formatter: value => <span style={{ color: 'var(--color-text-secondary)' }}>{value}</span>,
  };
}

const tooltipStyle = {
  contentStyle: { background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 10, fontSize: 12, color: 'var(--color-text-primary)' },
  labelStyle: { color: 'var(--color-text-primary)' },
};

// `referenceLines` = [{ x | y | segment, label, position, labelPosition, color, dashed }].
// `position` places a line on a category axis at the band 'start' | 'middle' | 'end'
// (e.g. a class boundary between two histogram bars).
function renderReferenceLines(lines) {
  return lines.map((l, i) => {
    const color = l.color ?? 'var(--color-text-primary)';
    return (
      <ReferenceLine
        key={`ref-${i}`}
        x={l.x}
        y={l.y}
        segment={l.segment}
        position={l.position}
        stroke={color}
        strokeWidth={l.strokeWidth ?? 2}
        strokeDasharray={l.dashed === false ? undefined : '6 4'}
        ifOverflow="extendDomain"
        label={l.label ? { value: l.label, position: l.labelPosition ?? 'insideTopRight', fontSize: 12, fill: 'var(--color-text-primary)' } : undefined}
      />
    );
  });
}

export default function DataChartImpl({
  type = 'line', data = [], series = [], xKey = 'x', yKey = 'y',
  xLabel, yLabel, height = 320, markers = [], xDomain, yDomain,
  referenceLines = [], xTicks, yTicks, stacked = false, barCategoryGap, tooltip = true,
  xType = 'category', showGrid = true,
}) {
  // Recharts enter-animations are JS-driven, so the global CSS reduced-motion
  // rule does not reach them — gate them explicitly.
  const animate = !(typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  const common = showGrid && <CartesianGrid stroke={GRID} strokeDasharray="3 3" />;
  // Symbolic ticks also support numeric line axes, without exposing the internal
  // coordinates reconstructed from a source figure. Existing charts stay categorical.
  const tickProps = xTicks
    ? { ticks: xTicks.map(t => t.value), tickFormatter: v => xTicks.find(t => t.value === v)?.label ?? v, allowDecimals: true, interval: 0 }
    : {};
  const yTickProps = yTicks
    ? { ticks: yTicks.map(t => t.value), tickFormatter: v => yTicks.find(t => t.value === v)?.label ?? v, allowDecimals: true, interval: 0 }
    : {};

  if (type === 'scatter') {
    const groups = series.length > 0 ? series : [{ key: yKey, name: yLabel ?? 'Serie', color: PALETTE[0] }];
    return (
      <ResponsiveContainer width="100%" height={height}>
        <ScatterChart margin={{ top: 16, right: 24, bottom: 24, left: 12 }}>
          {common}
          <XAxis type="number" dataKey={xKey} domain={xDomain} {...tickProps} {...axisProps(xLabel, 'x')} />
          <YAxis type="number" dataKey={yKey} domain={yDomain} {...yTickProps} {...axisProps(yLabel, 'y')} />
          {tooltip && <Tooltip {...tooltipStyle} cursor={{ strokeDasharray: '3 3' }} />}
          {groups.length > 1 && <Legend {...legendProps(xLabel)} />}
          {groups.map((s, i) => (
            <Scatter key={s.key ?? i} name={s.name} data={s.data ?? data} fill={s.color ?? PALETTE[i % PALETTE.length]} line={s.line ? { stroke: s.color ?? PALETTE[i % PALETTE.length] } : false} isAnimationActive={animate} />
          ))}
          {renderReferenceLines(referenceLines)}
          {markers.map((m, i) => (
            <ReferenceDot key={i} x={m.x} y={m.y} r={5} fill={m.color ?? 'var(--color-error)'} stroke="var(--color-bg-card)" strokeWidth={2} label={{ value: m.label, position: 'top', fontSize: 11, fill: 'var(--color-text-primary)' }} />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  const Chart = type === 'bar' ? BarChart : type === 'area' ? AreaChart : LineChart;
  return (
    <ResponsiveContainer width="100%" height={height}>
      <Chart data={data} margin={{ top: 16, right: 24, bottom: 24, left: 12 }} {...(barCategoryGap !== undefined ? { barCategoryGap } : {})}>
        {common}
        <XAxis type={xType} dataKey={xKey} domain={xDomain} {...tickProps} {...axisProps(xLabel, 'x')} />
        <YAxis domain={yDomain} {...yTickProps} {...axisProps(yLabel, 'y')} />
        {tooltip && <Tooltip {...tooltipStyle} cursor={{ fill: 'var(--color-accent-subtle)' }} />}
        {series.length > 1 && <Legend {...legendProps(xLabel)} />}
        {series.map((s, i) => {
          const color = s.color ?? PALETTE[i % PALETTE.length];
          if (type === 'bar') return <Bar key={s.key} dataKey={s.key} name={s.name} fill={color} stackId={stacked ? 'stack' : undefined} radius={stacked ? 0 : [4, 4, 0, 0]} isAnimationActive={animate} />;
          if (type === 'area') return <Area key={s.key} dataKey={s.key} name={s.name} stroke={color} fill={color} fillOpacity={0.18} strokeWidth={2} isAnimationActive={animate} />;
          return <Line key={s.key} dataKey={s.key} name={s.name} stroke={color} strokeWidth={2} dot={false} isAnimationActive={animate} />;
        })}
        {renderReferenceLines(referenceLines)}
      </Chart>
    </ResponsiveContainer>
  );
}
