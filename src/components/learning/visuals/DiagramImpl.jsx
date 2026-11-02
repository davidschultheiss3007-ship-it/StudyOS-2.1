import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import mermaid from 'mermaid';

function subscribeToTheme(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme ?? 'light';
}

let initializedTheme;
function ensureInit(theme) {
  if (initializedTheme === theme) return;
  // theme: 'base' lets us drive colours from CSS variables resolved at runtime.
  const styles = getComputedStyle(document.documentElement);
  const v = name => styles.getPropertyValue(name).trim();
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    fontFamily: v('--font-family') || 'Inter, sans-serif',
    theme: 'base',
    themeVariables: {
      primaryColor: v('--color-accent-subtle') || '#e8effe',
      primaryBorderColor: v('--color-accent') || '#3b76f6',
      primaryTextColor: v('--color-text-primary') || '#15213b',
      lineColor: v('--color-border-strong') || '#cbd5e1',
      secondaryColor: v('--color-bg-elevated') || '#eef2f8',
      tertiaryColor: v('--color-bg-card') || '#ffffff',
      fontSize: '14px',
    },
  });
  initializedTheme = theme;
}

export default function DiagramImpl({ chart, code }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot);
  const source = (chart ?? code ?? '').trim();
  const ref = useRef(null);
  const rawId = useId();
  const id = `mmd-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    ensureInit(theme);
    mermaid
      .render(id, source)
      .then(({ svg }) => { if (!cancelled && ref.current) ref.current.innerHTML = svg; })
      .catch(err => { if (!cancelled) setError(err?.message ?? 'Diagramm konnte nicht gerendert werden.'); });
    return () => { cancelled = true; };
  }, [id, source, theme]);

  if (error) {
    return <p className="text-sm text-[var(--color-error)]">Diagrammfehler: {error}</p>;
  }
  return <div ref={ref} className="flex justify-center [&_svg]:h-auto [&_svg]:max-w-full" aria-label="Diagramm" />;
}
