import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button.jsx';

const GRADES = {
  excellent: { label: 'Ausgezeichnet!', color: 'var(--color-success)' },
  good: { label: 'Gut gemacht!', color: 'var(--color-accent)' },
  ok: { label: 'Noch Verbesserungspotenzial.', color: 'var(--color-warning)' },
  retry: { label: 'Nochmal üben empfohlen.', color: 'var(--color-error)' },
};

export function QuizResult({ score, total, moduleId, onRetry }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : pct >= 40 ? 'ok' : 'retry';
  const { label, color } = GRADES[grade];

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-6 rounded-xl border border-border bg-card p-8 text-center">
      <div
        className="flex size-32 flex-col items-center justify-center rounded-full border-4"
        style={{ borderColor: color }}
      >
        <span className="text-3xl font-bold text-foreground">{pct}%</span>
        <span className="text-xs text-muted-foreground">{score} / {total} richtig</span>
      </div>
      <p className="text-lg font-medium" style={{ color }}>{label}</p>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onRetry}>Nochmal versuchen</Button>
        <Link to={`/module/${moduleId}`}>
          <Button variant="primary">Zurück zum Modul</Button>
        </Link>
      </div>
    </div>
  );
}
