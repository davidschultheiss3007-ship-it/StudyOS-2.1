import { useEffect, useRef, useState } from 'react';
import { ListTree, X } from 'lucide-react';
import { TopicContent } from './ContentSection.jsx';
import { ExamFocusBox } from './ExamFocusBox.jsx';
import { cn } from '@/lib/utils.js';
import './FullContentView.css';

// Renders a topic. The table of contents (driven by topic.sections, with
// scroll-spy) is a LEFT overlay panel that collapses exactly like the main
// sidebar: it starts closed so the reading sheet is full-width and centred,
// and slides in over the content on demand without reflowing the page. Below
// the TOC sits the compiled MDX body, key takeaways and the exam-focus boxes.
export function FullContentView({ topic }) {
  const sections = topic.sections ?? [];
  const Content = topic.Content;
  const hasToc = sections.length > 1;
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? null);
  const [tocOpen, setTocOpen] = useState(false);
  const clickScrolling = useRef(false);
  const scrollGuardTimeout = useRef(null);
  const toggleRef = useRef(null);
  const closeButtonRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!hasToc) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        if (clickScrolling.current) return;
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 },
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections, hasToc]);

  // ESC closes the panel (mirrors the sidebar overlay's keyboard handling).
  useEffect(() => {
    if (!tocOpen) return undefined;
    function onKeyDown(e) {
      if (e.key === 'Escape') setTocOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [tocOpen]);

  // Move focus into the panel when it opens and back to the toggle when it
  // closes — for every close path (ESC, backdrop, close button, link click).
  // Deferring to an effect (rather than focusing synchronously) lets tabIndex
  // and the open class settle first, so focus never lands on a hidden control.
  // Mirrors Sidebar.jsx / AppLayout.jsx.
  useEffect(() => {
    if (tocOpen) {
      closeButtonRef.current?.focus();
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = tocOpen;
  }, [tocOpen]);

  // Clear the pending scroll-spy guard timer on unmount.
  useEffect(() => () => {
    if (scrollGuardTimeout.current) window.clearTimeout(scrollGuardTimeout.current);
  }, []);

  if (!Content) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
        <p>Kein Inhalt verfügbar.</p>
      </div>
    );
  }

  function scrollTo(id) {
    setActiveSection(id);
    setTocOpen(false);
    clickScrolling.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Re-arm a single guard window: clicking another section before the first
    // smooth-scroll settles must not let the observer hijack the highlight.
    if (scrollGuardTimeout.current) window.clearTimeout(scrollGuardTimeout.current);
    scrollGuardTimeout.current = window.setTimeout(() => { clickScrolling.current = false; }, 700);
  }

  function closeToc() {
    setTocOpen(false);
  }

  return (
    <>
      {hasToc && (
        <>
          <button
            ref={toggleRef}
            type="button"
            className={cn('toc-toggle', tocOpen && 'toc-toggle--hidden')}
            onClick={() => setTocOpen(true)}
            aria-label="Inhaltsverzeichnis öffnen"
            aria-expanded={tocOpen}
            tabIndex={tocOpen ? -1 : 0}
          >
            <ListTree className="size-4" aria-hidden="true" />
            <span>Inhalt</span>
          </button>

          <button
            type="button"
            className={cn('toc-backdrop', tocOpen && 'toc-backdrop--visible')}
            onClick={closeToc}
            aria-label="Inhaltsverzeichnis schließen"
            tabIndex={tocOpen ? 0 : -1}
          />

          <nav
            className={cn('toc-panel', tocOpen && 'toc-panel--open')}
            aria-label="Inhaltsnavigation"
            aria-hidden={!tocOpen}
            inert={!tocOpen}
          >
            <div className="toc-panel__head">
              <span className="toc-panel__title">Inhalt</span>
              <button
                type="button"
                ref={closeButtonRef}
                className="toc-panel__close"
                onClick={closeToc}
                aria-label="Inhaltsverzeichnis schließen"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <ul className="toc-panel__list">
              {sections.map(s => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={cn('toc-panel__link', activeSection === s.id && 'toc-panel__link--active')}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {/* The reading column is a white document sheet that lifts off the cool
          gray page, so the script reads as one continuous surface and the inset
          figure blocks have a ground to contrast against. */}
      <article className="rounded-2xl border border-[var(--learning-sheet-border)] bg-[var(--learning-sheet-bg)] px-6 py-8 shadow-[var(--shadow-card)] sm:px-9 sm:py-10 lg:px-14 lg:py-12">
        <TopicContent Content={Content} />

        {topic.keyTakeaways?.length > 0 && (
          <div className="mx-auto mt-10 max-w-[var(--prose-measure)] rounded-xl border border-[var(--learning-inset-border)] bg-[var(--learning-inset-bg)] p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Key Takeaways</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-foreground">
              {topic.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-2.5"><span aria-hidden="true" className="mt-0.5 font-semibold text-primary">→</span><span className="leading-relaxed">{t}</span></li>
              ))}
            </ul>
          </div>
        )}

        <div className="mx-auto max-w-[var(--prose-measure)]">
          <ExamFocusBox examFocus={topic.examFocus} pitfalls={topic.pitfalls} />
        </div>
      </article>
    </>
  );
}
