import { useMemo } from 'react';
import katex from 'katex';

// Renders a block (or inline) math formula via KaTeX. The MDX text pipeline
// also supports `$…$`, but <Formula> adds an optional titled card + variable
// legend for didactic emphasis. KaTeX output is library-generated HTML.
export function Formula({ expr, children, display = true, title, legend, inline = false }) {
  const tex = expr ?? (typeof children === 'string' ? children : '');
  const html = useMemo(
    () => katex.renderToString(tex, { displayMode: display && !inline, throwOnError: false, output: 'html' }),
    [tex, display, inline],
  );

  if (inline) {
    return <span className="katex-inline" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <figure className="my-2 overflow-hidden rounded-xl border border-[var(--learning-accent-border)] bg-[var(--learning-panel-bg)]">
      {title && (
        <figcaption className="border-b border-[var(--learning-accent-border)] bg-[var(--learning-accent-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
          {title}
        </figcaption>
      )}
      <div className="overflow-x-auto px-4 py-5 text-center text-foreground" dangerouslySetInnerHTML={{ __html: html }} />
      {legend?.length > 0 && (
        <dl className="grid grid-cols-1 gap-x-6 gap-y-1.5 border-t border-border px-4 py-3 text-sm sm:grid-cols-2">
          {legend.map((item, i) => (
            <div key={i} className="flex gap-2">
              <dt className="shrink-0 font-mono font-semibold text-[var(--color-accent)]" dangerouslySetInnerHTML={{ __html: katex.renderToString(item.sym, { throwOnError: false, output: 'html' }) }} />
              <dd className="text-muted-foreground">{item.desc}</dd>
            </div>
          ))}
        </dl>
      )}
    </figure>
  );
}

export default Formula;
