import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './visuals/index.jsx';
import { cn } from '@/lib/utils.js';

// Wraps a topic's compiled MDX body in an MDXProvider so the learning palette
// (<Formula/>, <DataChart/>, …) and styled prose elements are available. The
// MDX is a build-time-compiled React component — never an HTML string, so
// there is no dangerouslySetInnerHTML. Section anchors live inside the MDX as
// <section id="…"> wrappers (used by the TOC scroll-spy in FullContentView).
export function TopicContent({ Content }) {
  if (!Content) return null;
  return (
    <MDXProvider components={mdxComponents}>
      <div
        className={cn(
          'topic-prose flex flex-col',
          // Each <section> is a self-contained study block. A hairline rule plus
          // generous vertical padding separates consecutive blocks; the first
          // has no top border so the sheet doesn't open with a line.
          '[&>section]:scroll-mt-28 [&>section]:flex [&>section]:flex-col [&>section]:gap-5',
          '[&>section]:border-t [&>section]:border-[var(--learning-sheet-border)] [&>section]:pt-12 [&>section]:pb-2',
          '[&>section:first-child]:border-t-0 [&>section:first-child]:pt-0',
          // Running prose is held to a readable measure and centred in the wide
          // sheet, while figures (charts, tables, KPI grids, formulas, callouts)
          // stay full width — so the page uses the extra space without long text
          // lines. Text elements are matched as direct <section> children so the
          // prose inside palette components keeps that component's own layout.
          '[&_section>p]:mx-auto [&_section>p]:w-full [&_section>p]:max-w-[var(--prose-measure)]',
          '[&_section>ul]:mx-auto [&_section>ul]:w-full [&_section>ul]:max-w-[var(--prose-measure)]',
          '[&_section>ol]:mx-auto [&_section>ol]:w-full [&_section>ol]:max-w-[var(--prose-measure)]',
          '[&_section>blockquote]:mx-auto [&_section>blockquote]:w-full [&_section>blockquote]:max-w-[var(--prose-measure)]',
          // Section heading. MDX `##` renders as <h3> (see visuals/prose.jsx),
          // so this targets h3 — the earlier h2 selector never matched and the
          // intended large title style was lost. Subheads (### → h4) get a step
          // down. Both align to the prose measure's left edge.
          '[&_section>h3]:mx-auto [&_section>h3]:mb-1 [&_section>h3]:w-full [&_section>h3]:max-w-[var(--prose-measure)] [&_section>h3]:text-2xl [&_section>h3]:font-bold [&_section>h3]:tracking-[-0.015em] [&_section>h3]:text-foreground',
          '[&_section>h4]:mx-auto [&_section>h4]:mt-2 [&_section>h4]:w-full [&_section>h4]:max-w-[var(--prose-measure)] [&_section>h4]:text-lg [&_section>h4]:font-semibold [&_section>h4]:text-foreground',
        )}
      >
        <Content />
      </div>
    </MDXProvider>
  );
}
