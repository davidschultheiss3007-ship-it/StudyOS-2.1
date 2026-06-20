import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { allModules } from '@/data/moduleRegistry.js';

// ⌘K / Ctrl+K command palette. Searches across modules and their topic
// metadata; selecting a module navigates to it, a topic to the topic page.
export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      const id = window.requestAnimationFrame(() => inputRef.current?.focus());
      return () => window.cancelAnimationFrame(id);
    }
    return undefined;
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (q.length < 2) return [];
    const hits = [];
    for (const module of allModules) {
      if (module.title?.toLowerCase().includes(q) || module.description?.toLowerCase().includes(q)) {
        hits.push({ type: 'module', module, to: `/module/${module.id}`, label: module.title, sub: 'Modul' });
      }
      for (const topic of module.topics ?? []) {
        if (topic.title?.toLowerCase().includes(q)) {
          hits.push({ type: 'topic', module, to: `/topic/${module.id}/${topic.id}`, label: topic.title, sub: module.title });
        }
      }
    }
    return hits.slice(0, 12);
  }, [q]);

  function select(to) {
    setOpen(false);
    navigate(to);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full max-w-md items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
      >
        <Search className="size-4" aria-hidden="true" />
        <span className="flex-1 text-left">Suche nach Modulen, Topics…</span>
        <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[0.625rem] font-medium sm:inline">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] flex items-start justify-center bg-black/40 p-4 pt-[12vh]"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-lg"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Suche"
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Suche nach Modulen, Topics, Fragen…"
                className="h-12 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Suchbegriff"
              />
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.625rem] text-muted-foreground">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-auto p-2">
              {q.length < 2 ? (
                <p className="p-4 text-center text-sm text-muted-foreground">Mindestens zwei Zeichen eingeben.</p>
              ) : results.length === 0 ? (
                <p className="p-4 text-center text-sm text-muted-foreground">Keine passenden Inhalte vorhanden.</p>
              ) : (
                results.map(r => (
                  <button
                    key={`${r.type}-${r.to}`}
                    type="button"
                    onClick={() => select(r.to)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                  >
                    <span className="size-2 shrink-0 rounded-full" style={{ background: r.module.accent }} aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate font-medium text-foreground">{r.label}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">{r.sub}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
