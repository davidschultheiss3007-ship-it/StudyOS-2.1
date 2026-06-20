import { Lightbulb, AlertTriangle, Target, Info, Sparkles } from 'lucide-react';

// Didactic emphasis box. `type` selects icon + colour role.
const VARIANTS = {
  merksatz: { icon: Lightbulb, label: 'Merksatz', border: 'var(--learning-accent-border)', surface: 'var(--learning-accent-surface)', text: 'var(--color-accent)' },
  examfocus: { icon: Target, label: 'Prüfungsfokus', border: 'var(--learning-purple-border)', surface: 'var(--learning-purple-surface)', text: 'var(--learning-purple-text)' },
  pitfall: { icon: AlertTriangle, label: 'Prüfungsfalle', border: 'var(--learning-warning-border)', surface: 'var(--learning-warning-surface)', text: 'var(--learning-warning-text)' },
  info: { icon: Info, label: 'Hinweis', border: 'var(--learning-info-border)', surface: 'var(--learning-info-surface)', text: 'var(--color-info)' },
  tip: { icon: Sparkles, label: 'Tipp', border: 'var(--learning-success-border)', surface: 'var(--learning-success-surface)', text: 'var(--learning-success-text)' },
  warn: { icon: AlertTriangle, label: 'Achtung', border: 'var(--learning-warning-border)', surface: 'var(--learning-warning-surface)', text: 'var(--learning-warning-text)' },
};

export function Callout({ type = 'info', title, children }) {
  const v = VARIANTS[type] ?? VARIANTS.info;
  const Icon = v.icon;
  return (
    <div className="my-2 flex gap-3 rounded-xl border p-4" style={{ borderColor: v.border, background: v.surface }}>
      <Icon className="mt-0.5 size-5 shrink-0" style={{ color: v.text }} aria-hidden="true" />
      <div className="min-w-0">
        <p className="mb-1 text-sm font-semibold" style={{ color: v.text }}>{title ?? v.label}</p>
        <div className="text-sm leading-relaxed text-foreground [&_p]:text-foreground">{children}</div>
      </div>
    </div>
  );
}

export default Callout;
