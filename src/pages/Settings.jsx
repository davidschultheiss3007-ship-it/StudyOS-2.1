import { useState } from 'react';
import { Info } from 'lucide-react';
import { getTheme, setTheme } from '@/app/theme.js';
import { APP_VERSION } from '@/app/config.js';
import { PageShell } from '@/components/layout/PageShell.jsx';
import { cn } from '@/lib/utils.js';

function SettingsSection({ title, children }) {
  return (
    <section className="rounded-xl border border-border bg-card">
      <h2 className="border-b border-border px-6 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</h2>
      <div className="divide-y divide-border">{children}</div>
    </section>
  );
}

function SettingsRow({ label, description, children }) {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4">
      <div className="flex min-w-0 flex-col">
        <span className="font-medium text-foreground">{label}</span>
        {description && <span className="text-sm text-muted-foreground">{description}</span>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

const selectClass = 'rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground disabled:opacity-50';

function ThemeSelect() {
  const [theme, setThemeState] = useState(() => getTheme());
  return (
    <select className={selectClass} value={theme} onChange={e => setThemeState(setTheme(e.target.value))}>
      <option value="light">Hell</option>
      <option value="dark">Dunkel</option>
    </select>
  );
}

function ToggleStub({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      onClick={() => setOn(o => !o)}
      aria-pressed={on}
      className={cn('relative h-6 w-11 rounded-full transition-colors', on ? 'bg-primary' : 'bg-muted')}
    >
      <span className={cn('absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform', on ? 'translate-x-[22px]' : 'translate-x-0.5')} />
    </button>
  );
}

export function Settings() {
  return (
    <PageShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-[-0.015em] text-foreground">Einstellungen</h1>
        <p className="text-muted-foreground">Passe StudyOS an deine Bedürfnisse an.</p>
      </div>

      <div className="flex flex-col gap-6">
        <SettingsSection title="Darstellung">
          <SettingsRow label="Theme" description="Heller Modus ist Standard. Die Auswahl wird lokal gespeichert.">
            <ThemeSelect />
          </SettingsRow>
          <SettingsRow label="Kompakter Modus" description="Reduziert Abstände für eine dichtere Ansicht.">
            <ToggleStub />
          </SettingsRow>
          <SettingsRow label="Lesebreite" description="Maximale Breite des Leseinhalts.">
            <select className={selectClass} disabled>
              <option>Normal (72ch)</option>
              <option>Breit (90ch)</option>
              <option>Volle Breite</option>
            </select>
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Lernverhalten">
          <SettingsRow label="Fortschritt zurücksetzen" description="Setzt alle erledigten Topics und Quiz-Ergebnisse zurück.">
            <button
              className="rounded-lg border border-destructive px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
              onClick={() => {
                if (window.confirm('Fortschritt wirklich zurücksetzen?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
            >
              Zurücksetzen
            </button>
          </SettingsRow>
          <SettingsRow label="Lernziel pro Tag" description="Noch nicht konfiguriert.">
            <select className={selectClass} disabled><option>Nicht festgelegt</option></select>
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Account & Daten">
          <div className="flex items-start gap-3 px-6 py-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>StudyOS ist eine lokale App ohne Account. Alle Daten werden im Browser-Speicher (localStorage) gespeichert. Keine Cloud-Synchronisation.</p>
          </div>
        </SettingsSection>

        <SettingsSection title="Version">
          <SettingsRow label="StudyOS"><span className="text-sm tabular-nums text-muted-foreground">v{APP_VERSION}</span></SettingsRow>
        </SettingsSection>
      </div>
    </PageShell>
  );
}
