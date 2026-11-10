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

function fitReducedMotionFlowchart(container) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const svg = container.querySelector('svg.flowchart');
  if (!svg) return;
  // Mermaid can retain its temporary 2000px measuring canvas in the viewBox
  // under reduced motion. The mounted SVG already has the correct geometry.
  const box = svg.getBBox();
  const view = svg.viewBox.baseVal;
  if (box.width > 0 && box.height > 0 && (view.width > box.width * 2 || view.height > box.height * 2)) {
    const padding = 8;
    svg.setAttribute('viewBox', `${box.x - padding} ${box.y - padding} ${box.width + padding * 2} ${box.height + padding * 2}`);
    svg.style.maxWidth = `${box.width + padding * 2}px`;
  }
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

export default function DiagramImpl({ chart, code, minWidth }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot);
  const source = (chart ?? code ?? '').trim();
  const ref = useRef(null);
  const rawId = useId();
  const id = `mmd-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    // Mermaid measures labels during rendering; wait for the local font so the
    // initial viewBox is as reliable as a later theme change or re-render.
    document.fonts.ready
      .then(() => {
        if (cancelled) return null;
        ensureInit(theme);
        return mermaid.render(id, source);
      })
      .then(result => {
        if (result && !cancelled && ref.current) {
          ref.current.innerHTML = result.svg;
          fitReducedMotionFlowchart(ref.current);
        }
      })
      .catch(err => { if (!cancelled) setError(err?.message ?? 'Diagramm konnte nicht gerendert werden.'); });
    return () => { cancelled = true; };
  }, [id, source, theme]);

  if (error) {
    return <p className="text-sm text-[var(--color-error)]">Diagrammfehler: {error}</p>;
  }
  const diagram = <div ref={ref} className="flex justify-center [&_svg]:h-auto [&_svg]:max-w-full" style={minWidth ? { minWidth } : undefined} aria-label={minWidth ? undefined : 'Diagramm'} />;
  if (minWidth) {
    return <div className="overflow-x-auto" role="region" aria-label="Diagramm" tabIndex={0}>{diagram}</div>;
  }
  return diagram;
}
