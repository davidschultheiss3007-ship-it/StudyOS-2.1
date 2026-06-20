import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils.js';

// Standard content container for full-width pages.
export function PageShell({ className, children, wide = false }) {
  return (
    <div className={cn('mx-auto w-full px-4 py-8 sm:px-6 lg:px-8', wide ? 'max-w-screen-2xl' : 'max-w-[var(--content-max-width)]', className)}>
      {children}
    </div>
  );
}

export function PageError({ message = 'Seite nicht gefunden.' }) {
  return (
    <PageShell>
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted-foreground">{message}</p>
        <Link to="/" className="font-medium text-primary hover:underline">Zurück zur Startseite</Link>
      </div>
    </PageShell>
  );
}
