// A self-contained study block — the card-dense "Hefteintrag" primitive. Each
// distinct idea gets its own framed surface so a dense chapter stays scannable
// instead of collapsing into one tall column of prose.
//
// Tone is carried by a FULL border + tinted surface + a tone-colored title (and,
// for module-identity tones, a small leading dot) — never a side-stripe, which
// the design system explicitly bans. `exam` reframes the card as exam-central
// (purple frame + "Klausur" badge), matching the <Exam> inline marker. `compact`
// tightens padding for tight side-by-side grids. All colors resolve through
// tokens.css, so dark mode is automatic.
import { GraduationCap } from 'lucide-react';

const TONES = {
  neutral:  { border: 'var(--learning-inset-border)',   bg: 'var(--learning-inset-bg)',        title: 'var(--color-text-primary)',      dot: null },
  accent:   { border: 'var(--learning-accent-border)',  bg: 'var(--learning-accent-surface)',  title: 'var(--color-on-accent-subtle)',  dot: 'var(--color-accent)' },
  purple:   { border: 'var(--learning-purple-border)',  bg: 'var(--learning-purple-surface)',  title: 'var(--learning-purple-text)',    dot: 'var(--color-module-purple)' },
  positive: { border: 'var(--learning-success-border)', bg: 'var(--learning-success-surface)', title: 'var(--learning-success-text)',   dot: 'var(--color-success)' },
  negative: { border: 'var(--learning-warning-border)', bg: 'var(--color-error-subtle)',       title: 'var(--color-on-error-subtle)',   dot: 'var(--color-error)' },
  warning:  { border: 'var(--learning-warning-border)', bg: 'var(--learning-warning-surface)', title: 'var(--learning-warning-text)',   dot: 'var(--color-warning)' },
  teal:     { border: 'var(--learning-inset-border)',   bg: 'var(--learning-inset-bg)',        title: 'var(--color-text-primary)',      dot: 'var(--color-module-teal)' },
  orange:   { border: 'var(--learning-inset-border)',   bg: 'var(--learning-inset-bg)',        title: 'var(--color-text-primary)',      dot: 'var(--color-module-orange)' },
};

export function Card({ title, tone = 'neutral', compact = false, exam = false, children }) {
  const t = TONES[exam ? 'purple' : tone] ?? TONES.neutral;
  return (
    <div
      className="my-2 flex flex-col overflow-hidden rounded-xl border"
      style={{ borderColor: t.border, background: t.bg }}
    >
      {title && (
        <div className={`flex items-center justify-between gap-2 ${compact ? 'px-4 pt-3' : 'px-5 pt-4'}`}>
          <h4 className="flex min-w-0 items-center gap-2 text-sm font-semibold leading-snug" style={{ color: t.title }}>
            {t.dot && <span className="size-1.5 shrink-0 rounded-full" style={{ background: t.dot }} aria-hidden="true" />}
            <span className="min-w-0">{title}</span>
          </h4>
          {exam && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide"
              style={{ color: 'var(--learning-purple-text)', background: 'var(--learning-purple-surface)', border: '1px solid var(--learning-purple-border)' }}>
              <GraduationCap className="size-3" aria-hidden="true" />Klausur
            </span>
          )}
        </div>
      )}
      <div className={`text-sm leading-relaxed text-foreground ${compact ? 'p-4' : 'p-5'} ${title ? (compact ? 'pt-2' : 'pt-3') : ''} [&>:first-child]:mt-0 [&>:last-child]:mb-0 [&_p]:text-[var(--color-text-secondary)]`}>
        {children}
      </div>
    </div>
  );
}

export default Card;
