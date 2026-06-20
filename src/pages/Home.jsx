import { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchCommand } from '@/components/ui/SearchCommand.jsx';
import { ProgressBar } from '@/components/ui/ProgressBar.jsx';
import { semesters } from '@/data/semesters.js';
import { allModules } from '@/data/moduleRegistry.js';
import { getCompletedTopics, getStats, getTaskState, toggleTask } from '@/app/storage.js';
import {
  formatWeekRange,
  getContinueTarget,
  getFocusStreak,
  getModuleProgress,
  getNextExam,
  getQuizSuggestion,
  getRecentTopics,
  getSeedTasks,
  getStudyEvents,
  getWeekDays,
  getWeekPlan,
  getWeekStart,
  greetingFor,
  isSameISODate,
  startOfDay,
  toISODate,
} from '@/data/dashboard.js';
import { cn } from '@/lib/utils.js';

/* ----------------------------------------------------------------- icons */
const Icon = {
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  chevD: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  chevL: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  chevR: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  play: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>,
  quiz: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>,
  exam: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  book: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  flame: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  check: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
  'August', 'September', 'Oktober', 'November', 'Dezember'];
const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

/* -------------------------------------------------------- circular ring */
function Ring({ value = 0, size = 46, stroke = 4, color = 'var(--color-accent)', children }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value));
  const offset = circ * (1 - pct / 100);
  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">{children}</span>
    </span>
  );
}

/* --------------------------------------------------------- top bar */
function TopBar() {
  const semester = semesters[0];
  const examModuleId = getNextExam()?.moduleId;
  return (
    <header className="flex items-center gap-4">
      <Link
        to={semester ? `/semester/${semester.id}` : '/'}
        className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-[var(--color-border-strong)]"
      >
        {semester?.title ?? 'StudyOS'} <span className="text-muted-foreground">{Icon.chevD}</span>
      </Link>
      <div className="min-w-0 flex-1">
        <SearchCommand />
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <Link
          to={examModuleId ? `/module/${examModuleId}` : (semester ? `/semester/${semester.id}` : '/')}
          className="rounded-[10px] border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Prüfungen
        </Link>
        <Link
          to="/settings"
          aria-label="Einstellungen"
          className="flex size-[38px] items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:border-[var(--color-border-strong)] hover:text-foreground"
        >
          {Icon.bell}
        </Link>
        <span
          aria-hidden="true"
          className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
        >
          S
        </span>
      </div>
    </header>
  );
}

/* --------------------------------------------------- Heute lernen cards */
function HeuteCard({ to, ring, icon, accent, kicker, title, meta, status }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 rounded-[14px] border border-border bg-card px-5 py-4 text-foreground no-underline shadow-[var(--shadow-card)] transition-[border-color,box-shadow] hover:border-[color-mix(in_srgb,var(--card-accent,var(--color-accent))_45%,var(--color-border))] hover:shadow-[var(--shadow-md)]"
      style={{ '--card-accent': accent }}
    >
      {ring != null
        ? <Ring value={ring} size={52} stroke={5} color={accent}><span className="text-[0.6875rem] font-bold text-foreground">{ring}%</span></Ring>
        : (
          <span
            className="flex size-[52px] shrink-0 items-center justify-center rounded-full"
            style={{ color: accent, background: `color-mix(in srgb, ${accent} 14%, transparent)` }}
          >
            {icon}
          </span>
        )}
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span
          className="text-[0.6875rem] font-semibold uppercase tracking-[0.04em]"
          style={{ color: accent }}
        >
          {kicker}
        </span>
        <span className="line-clamp-2 text-sm font-semibold leading-tight text-foreground">{title}</span>
        {meta && <span className="truncate text-xs text-muted-foreground">{meta}</span>}
      </span>
      <span
        className="inline-flex shrink-0 items-center gap-1 text-[0.6875rem] font-semibold"
        style={{ color: accent }}
      >
        <span className="hidden sm:inline">{status}</span>
        <span className="transition-transform duration-150 group-hover:translate-x-0.5">{Icon.arrow}</span>
      </span>
    </Link>
  );
}

function HeuteLernen({ completed }) {
  const cont = useMemo(() => getContinueTarget(completed), [completed]);
  const quiz = useMemo(() => getQuizSuggestion(completed), [completed]);
  const exam = useMemo(() => getNextExam(), []);
  const cards = [];

  if (cont) {
    cards.push(
      <HeuteCard key="c" to={`/topic/${cont.module.id}/${cont.topic.id}`} accent={cont.module.accent}
        ring={getModuleProgress(cont.module, completed)} kicker="Weiterlernen"
        title={cont.topic.title} meta={cont.module.title} status="Fortsetzen" />,
    );
  }
  if (quiz) {
    cards.push(
      <HeuteCard key="q" to={`/quiz/${quiz.module.id}`} accent={quiz.module.accent}
        icon={Icon.quiz} kicker="Quiz" title={quiz.module.title}
        meta={`${quiz.questionCount} ${quiz.questionCount === 1 ? 'offene Frage' : 'offene Fragen'}`} status="Starten" />,
    );
  }
  if (exam) {
    cards.push(
      <HeuteCard key="e" to={exam.moduleId ? `/module/${exam.moduleId}` : '/'} accent={exam.module?.accent ?? 'var(--color-error)'}
        icon={Icon.exam} kicker="Prüfungsplan" title={exam.module?.title ?? exam.title}
        meta={exam.days === 0 ? 'Heute' : `in ${exam.days} ${exam.days === 1 ? 'Tag' : 'Tagen'}`} status="Vorbereiten" />,
    );
  }
  if (cards.length === 0) return null;

  return (
    <section aria-label="Heute lernen">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-foreground">Heute lernen</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
    </section>
  );
}

/* ------------------------------------------------------------ Wochenplan */
function Wochenplan({ events }) {
  const now = useMemo(() => new Date(), []);
  const [view, setView] = useState('woche');
  const [weekOffset, setWeekOffset] = useState(0);
  const [viewMonth, setViewMonth] = useState(() => {
    const d = startOfDay(new Date());
    d.setDate(1);
    return d;
  });

  const weekStart = useMemo(() => getWeekStart(now, weekOffset), [now, weekOffset]);
  const days = useMemo(() => getWeekDays(weekStart, now), [weekStart, now]);
  const plan = useMemo(() => getWeekPlan(weekStart, events), [weekStart, events]);

  return (
    <section aria-label="Wochenplan">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-foreground">Wochenplan</h2>
        <div className="flex flex-wrap items-center gap-3">
          {/* Segmented control */}
          <div
            className="inline-flex rounded-[10px] bg-muted p-[3px]"
            role="tablist"
            aria-label="Ansicht"
          >
            {['woche', 'monat'].map(v => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
                className={cn(
                  'rounded-[8px] px-3 py-1 text-sm font-medium transition-[background-color,color,box-shadow]',
                  view === v
                    ? 'bg-card font-semibold text-foreground shadow-[var(--shadow-sm)]'
                    : 'text-muted-foreground',
                )}
              >
                {v === 'woche' ? 'Woche' : 'Monat'}
              </button>
            ))}
          </div>

          {/* Nav arrows + range */}
          {view === 'woche' ? (
            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setWeekOffset(o => o - 1)}
                aria-label="Vorherige Woche"
                className="flex size-[30px] items-center justify-center rounded-[8px] border border-border bg-card text-muted-foreground transition-colors hover:border-[var(--color-border-strong)] hover:text-foreground"
              >
                {Icon.chevL}
              </button>
              <span className="min-w-[116px] text-center text-sm font-medium text-muted-foreground">{formatWeekRange(weekStart)}</span>
              <button
                type="button"
                onClick={() => setWeekOffset(o => o + 1)}
                aria-label="Nächste Woche"
                className="flex size-[30px] items-center justify-center rounded-[8px] border border-border bg-card text-muted-foreground transition-colors hover:border-[var(--color-border-strong)] hover:text-foreground"
              >
                {Icon.chevR}
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
                aria-label="Vorheriger Monat"
                className="flex size-[30px] items-center justify-center rounded-[8px] border border-border bg-card text-muted-foreground transition-colors hover:border-[var(--color-border-strong)] hover:text-foreground"
              >
                {Icon.chevL}
              </button>
              <span className="min-w-[116px] text-center text-sm font-medium text-muted-foreground">{MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}</span>
              <button
                type="button"
                onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
                aria-label="Nächster Monat"
                className="flex size-[30px] items-center justify-center rounded-[8px] border border-border bg-card text-muted-foreground transition-colors hover:border-[var(--color-border-strong)] hover:text-foreground"
              >
                {Icon.chevR}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
        {view === 'woche' ? (
          <div
            className="grid gap-[6px]"
            style={{ gridTemplateColumns: '128px repeat(7, minmax(78px, 1fr))', minWidth: 660 }}
            role="table"
          >
            <div />
            {days.map(d => (
              <div
                key={d.iso}
                className={cn(
                  'flex flex-col items-center gap-px rounded-[8px] py-2',
                  d.isToday && 'bg-[var(--color-accent-subtle)]',
                )}
              >
                <span className="text-[0.6875rem] font-semibold uppercase text-muted-foreground">{d.label}</span>
                <span className={cn('text-sm font-bold text-foreground', d.isToday && 'text-primary')}>{d.dayNum}</span>
              </div>
            ))}
            {plan.map(({ module, cells }) => (
              <Fragment key={module.id}>
                <div className="flex min-w-0 items-center gap-2 px-1 py-2">
                  <span className="size-2 shrink-0 rounded-full" style={{ background: module.accent }} aria-hidden="true" />
                  <span className="truncate text-[0.6875rem] font-medium text-muted-foreground">{module.shortTitle ?? module.title}</span>
                </div>
                {cells.map((dayEvents, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex min-h-[52px] flex-col gap-1 rounded-[8px] p-1',
                      days[i].isToday ? 'bg-[var(--color-accent-subtle)]' : 'bg-muted',
                    )}
                  >
                    {dayEvents.map(evt => (
                      <Link
                        key={evt.id}
                        to={evt.moduleId ? `/module/${evt.moduleId}` : '/'}
                        className="flex flex-col gap-px rounded-[6px] border px-[6px] py-1 text-foreground no-underline transition-colors"
                        style={{
                          background: `color-mix(in srgb, ${module.accent} 16%, var(--color-bg-card))`,
                          borderColor: `color-mix(in srgb, ${module.accent} 30%, transparent)`,
                        }}
                      >
                        {evt.time && (
                          <span
                            className="text-[0.6875rem] font-bold"
                            style={{ color: `color-mix(in srgb, ${module.accent} 70%, var(--color-text-primary))` }}
                          >
                            {evt.time}
                          </span>
                        )}
                        <span className="line-clamp-2 text-[0.6875rem] leading-[1.25] text-muted-foreground">{evt.title}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        ) : (
          <MonthGrid viewMonth={viewMonth} events={events} now={now} />
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------- month grid (Monat) */
function MonthGrid({ viewMonth, events, now }) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const todayISO = toISODate(now);
  const firstOfMonth = new Date(year, month, 1);
  const lead = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const byDay = {};
  events.forEach(e => {
    const d = new Date(`${e.date}T00:00:00`);
    if (d.getFullYear() === year && d.getMonth() === month) {
      const n = d.getDate();
      (byDay[n] = byDay[n] || []).push(e);
    }
  });

  const cells = [];
  for (let i = 0; i < lead; i += 1) cells.push(<div key={`b${i}`} />);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = toISODate(new Date(year, month, day));
    const dayEvents = byDay[day] ?? [];
    const isToday = iso === todayISO;
    cells.push(
      <div
        key={day}
        className={cn(
          'flex min-h-[68px] flex-col gap-[3px] rounded-[8px] border p-1',
          isToday ? 'border-primary bg-[var(--color-accent-subtle)]' : 'border-[var(--color-border-subtle)]',
        )}
      >
        <span className={cn('text-[0.6875rem] font-semibold text-muted-foreground', isToday && 'text-primary')}>{day}</span>
        <span className="flex flex-col gap-0.5">
          {dayEvents.slice(0, 2).map(evt => (
            <span
              key={evt.id}
              className="truncate rounded-[5px] px-[5px] py-px text-[0.625rem] leading-[1.3]"
              style={{
                background: `color-mix(in srgb, ${evt.module?.accent ?? 'var(--color-accent)'} 16%, var(--color-bg-card))`,
                color: `color-mix(in srgb, ${evt.module?.accent ?? 'var(--color-accent)'} 72%, var(--color-text-primary))`,
              }}
            >
              {evt.title}
            </span>
          ))}
          {dayEvents.length > 2 && <span className="text-[0.625rem] text-muted-foreground">+{dayEvents.length - 2}</span>}
        </span>
      </div>,
    );
  }
  return (
    <div>
      <div className="mb-1 grid grid-cols-7 gap-1">
        {WEEKDAY_LABELS.map(d => (
          <span key={d} className="py-1 text-center text-[0.6875rem] font-semibold uppercase text-muted-foreground">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{cells}</div>
    </div>
  );
}

/* ----------------------------------------------------- Lernfortschritt */
function Lernfortschritt({ stats, completed }) {
  const modules = allModules.map(m => ({ module: m, pct: getModuleProgress(m, completed) }));
  const semester = semesters[0];
  return (
    <div className="flex flex-col rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <h3 className="mb-4 text-base font-semibold text-foreground">Lernfortschritt</h3>
      <div className="flex flex-1 items-center gap-6">
        <div className="shrink-0">
          <Ring value={stats.progress} size={132} stroke={11} color="var(--color-success)">
            <span className="text-xl font-bold text-foreground">{stats.progress}%</span>
            <span className="text-[0.6875rem] text-muted-foreground">gesamt</span>
          </Ring>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col gap-3">
          {modules.map(({ module, pct }) => (
            <li key={module.id} className="grid items-center gap-2" style={{ gridTemplateColumns: 'auto minmax(0,1fr) 64px 2.4rem' }}>
              <span className="size-[9px] rounded-full" style={{ background: module.accent }} aria-hidden="true" />
              <span className="truncate text-sm text-muted-foreground">{module.shortTitle ?? module.title}</span>
              <ProgressBar value={pct} size="sm" color={module.accent} />
              <span className="text-right text-[0.6875rem] font-semibold text-muted-foreground">{pct}%</span>
            </li>
          ))}
        </ul>
      </div>
      {semester && (
        <Link
          to={`/semester/${semester.id}`}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-primary no-underline transition-colors hover:text-primary/80"
        >
          Detaillierte Statistik ansehen
          <span className="transition-transform hover:translate-x-0.5">{Icon.arrow}</span>
        </Link>
      )}
    </div>
  );
}

/* ------------------------------------------------------- Zuletzt gelernt */
function ZuletztGelernt({ recent, completed }) {
  const semester = semesters[0];
  return (
    <div className="rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">Zuletzt gelernt</h3>
        {semester && (
          <Link to={`/semester/${semester.id}`} className="text-[0.6875rem] font-medium text-primary no-underline hover:text-primary/80">
            Alle anzeigen
          </Link>
        )}
      </div>
      <ul className="flex flex-col gap-0.5">
        {recent.map(({ topic, module }) => {
          const pct = getModuleProgress(module, completed);
          return (
            <li key={`${module.id}-${topic.id}`}>
              <Link
                to={`/topic/${module.id}/${topic.id}`}
                className="-mx-2 flex items-center gap-3 rounded-[10px] px-2 py-3 text-foreground no-underline transition-colors hover:bg-[var(--color-bg-card-hover)]"
                style={{ '--card-accent': module.accent }}
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-[10px]"
                  style={{ color: module.accent, background: `color-mix(in srgb, ${module.accent} 14%, transparent)` }}
                  aria-hidden="true"
                >
                  {Icon.book}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="truncate text-sm font-semibold text-foreground">{topic.title}</span>
                  <span className="text-[0.6875rem] text-muted-foreground">{module.title}</span>
                  <ProgressBar value={pct} size="sm" color={module.accent} className="mt-px" />
                </span>
                <span className="shrink-0 text-sm font-bold" style={{ color: module.accent }}>{pct}%</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------- mini calendar */
function MiniCalendar({ viewMonth, selectedDate, events, onSelect, onPrev, onNext }) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const today = startOfDay(new Date());
  const firstOfMonth = new Date(year, month, 1);
  const lead = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const eventDays = new Set(
    events.filter(e => {
      const d = new Date(`${e.date}T00:00:00`);
      return d.getFullYear() === year && d.getMonth() === month;
    }).map(e => Number(e.date.split('-')[2])),
  );

  const cells = [];
  for (let i = 0; i < lead; i += 1) cells.push(<span key={`b${i}`} className="aspect-square" />);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const isToday = isSameISODate(toISODate(today), date);
    const isSelected = isSameISODate(toISODate(selectedDate), date);
    cells.push(
      <button
        key={day}
        type="button"
        onClick={() => onSelect(date)}
        className={cn(
          'relative flex aspect-square w-full items-center justify-center rounded-[8px] text-[0.6875rem] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
          isSelected && !isToday && 'bg-muted font-semibold text-foreground',
          isToday && 'bg-primary font-bold text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
        )}
        aria-pressed={isSelected}
        aria-label={`${day}. ${MONTHS[month]}`}
      >
        {day}
        {eventDays.has(day) && (
          <span
            className={cn(
              'absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full',
              isToday ? 'bg-primary-foreground' : 'bg-[var(--color-accent-2)]',
            )}
            aria-hidden="true"
          />
        )}
      </button>,
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
        <span className="flex gap-1">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Vorheriger Monat"
            className="flex size-[26px] items-center justify-center rounded-[8px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {Icon.chevL}
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Nächster Monat"
            className="flex size-[26px] items-center justify-center rounded-[8px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {Icon.chevR}
          </button>
        </span>
      </div>
      <div className="mb-0.5 grid grid-cols-7 gap-0.5">
        {WEEKDAY_LABELS.map(d => (
          <span key={d} className="py-1 text-center text-[0.6875rem] font-semibold uppercase text-muted-foreground">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">{cells}</div>
    </div>
  );
}

/* ---------------------------------------------------------- tasks panel */
function TasksPanel() {
  const seed = useMemo(() => getSeedTasks(), []);
  const [state, setState] = useState(() => getTaskState());
  const moduleById = useMemo(() => Object.fromEntries(allModules.map(m => [m.id, m])), []);
  const doneCount = seed.filter(t => state[t.id]).length;

  return (
    <div className="rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">Notizen &amp; Aufgaben</h3>
        <span className="rounded-full bg-muted px-[9px] py-0.5 text-[0.6875rem] font-semibold text-muted-foreground">{doneCount}/{seed.length}</span>
      </div>
      <ul className="flex flex-col gap-0.5">
        {seed.map(task => {
          const done = !!state[task.id];
          const mod = task.moduleId ? moduleById[task.moduleId] : null;
          return (
            <li key={task.id}>
              <button
                type="button"
                className="-mx-2 flex w-[calc(100%+1rem)] items-start gap-3 rounded-[8px] px-2 py-2 text-left transition-colors hover:bg-[var(--color-bg-card-hover)]"
                onClick={() => setState(toggleTask(task.id))}
                aria-pressed={done}
              >
                <span
                  className={cn(
                    'mt-px flex size-[18px] shrink-0 items-center justify-center rounded-[8px] border-[1.5px] text-white transition-colors',
                    done ? 'border-primary bg-primary' : 'border-[var(--color-border-strong)]',
                  )}
                  aria-hidden="true"
                >
                  {done && Icon.check}
                </span>
                <span className="flex min-w-0 flex-col gap-px">
                  <span className={cn('text-sm text-foreground', done && 'text-muted-foreground line-through')}>{task.label}</span>
                  {mod && <span className="text-[0.6875rem]" style={{ color: mod.accent }}>{mod.title}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------- focus streak */
function FokusStreak() {
  const { days, week, todayIndex } = useMemo(() => getFocusStreak(new Date()), []);
  return (
    <div className="rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-[10px] text-[var(--color-warning)]"
          style={{ background: 'var(--color-warning-subtle)' }}
          aria-hidden="true"
        >
          {Icon.flame}
        </span>
        <span className="flex flex-col">
          <span className="text-xl font-bold leading-none text-foreground">{days}</span>
          <span className="text-[0.6875rem] text-muted-foreground">Tage Fokus-Streak</span>
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {WEEKDAY_LABELS.map((label, i) => (
          <span key={label} className="flex flex-col items-center gap-1">
            <span
              className={cn(
                'flex size-6 items-center justify-center rounded-full border-[1.5px] text-white',
                week[i] ? 'border-[var(--color-success)] bg-[var(--color-success)]' : 'border-border',
                i === todayIndex && 'shadow-[var(--shadow-focus)]',
              )}
              aria-hidden="true"
            >
              {week[i] && Icon.check}
            </span>
            <span className="text-[0.625rem] text-muted-foreground">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== page */
export function Home() {
  const completed = useMemo(() => getCompletedTopics(), []);
  const stats = useMemo(() => getStats(allModules), []);
  const events = useMemo(() => getStudyEvents(new Date()), []);
  const nextExam = useMemo(() => getNextExam(new Date(), events), [events]);
  const recent = useMemo(() => getRecentTopics(4), []);
  const now = useMemo(() => new Date(), []);

  const todayCount = events.filter(e => isSameISODate(e.date, now)).length;

  const [selectedDate, setSelectedDate] = useState(() => startOfDay(new Date()));
  const [calMonth, setCalMonth] = useState(() => {
    const d = startOfDay(new Date());
    d.setDate(1);
    return d;
  });
  const shiftCal = delta => setCalMonth(m => new Date(m.getFullYear(), m.getMonth() + delta, 1));

  return (
    <div className="grid min-h-screen items-start bg-[var(--color-bg-base)]" style={{ gridTemplateColumns: `minmax(0,1fr) var(--right-panel-width)` }}>
      {/* main column */}
      <div className="flex min-w-0 flex-col gap-6 px-8 py-6">
        <TopBar />

        <div>
          <h1 className="text-2xl font-bold leading-[1.15] tracking-[-0.015em] text-foreground">Bereit für deine Prüfungsvorbereitung</h1>
          <p className="mt-2 text-base text-muted-foreground">
            {greetingFor(now)}. {todayCount > 0
              ? `Du hast heute ${todayCount} ${todayCount === 1 ? 'Lerneinheit' : 'Lerneinheiten'} geplant.`
              : 'Für heute ist nichts geplant. Ein guter Moment zum Wiederholen.'}
          </p>
        </div>

        <HeuteLernen completed={completed} />
        <Wochenplan events={events} />

        <div className="grid gap-5" style={{ gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)' }}>
          <Lernfortschritt stats={stats} completed={completed} />
          <ZuletztGelernt recent={recent} completed={completed} />
        </div>
      </div>

      {/* right rail */}
      <aside
        aria-label="Übersicht"
        className="sticky top-0 flex h-screen min-w-0 flex-col gap-4 overflow-y-auto border-l border-border bg-[var(--color-bg-surface)] px-5 py-6"
      >
        {/* next exam */}
        <div className="rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h3 className="mb-4 text-base font-semibold text-foreground">Nächste Prüfung</h3>
          {nextExam ? (
            <Link
              to={nextExam.moduleId ? `/module/${nextExam.moduleId}` : '/'}
              className="flex items-center gap-4 rounded-[10px] text-foreground no-underline transition-opacity hover:opacity-90"
            >
              <span className="flex size-[68px] shrink-0 flex-col items-center justify-center rounded-[10px] bg-[var(--color-error-subtle)] text-[var(--color-error)]">
                <span className="text-[1.875rem] font-bold leading-none">{nextExam.days}</span>
                <span className="text-[0.6875rem] font-medium">{nextExam.days === 1 ? 'Tag' : 'Tage'}</span>
              </span>
              <span className="flex min-w-0 flex-col gap-[3px]">
                <span className="text-sm font-semibold text-foreground">{nextExam.module?.title ?? nextExam.title}</span>
                <span className="text-[0.6875rem] text-muted-foreground">{selectedExamDateLabel(nextExam)}</span>
              </span>
            </Link>
          ) : (
            <p className="text-sm text-muted-foreground">Keine Prüfung hinterlegt.</p>
          )}
        </div>

        {/* mini calendar */}
        <div className="rounded-[14px] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h3 className="mb-4 text-base font-semibold text-foreground">Prüfungsplan</h3>
          <MiniCalendar
            viewMonth={calMonth}
            selectedDate={selectedDate}
            events={events}
            onSelect={setSelectedDate}
            onPrev={() => shiftCal(-1)}
            onNext={() => shiftCal(1)}
          />
          <div className="mt-3 flex gap-4 text-[0.6875rem] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-primary" />
              Heute
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-[var(--color-accent-2)]" />
              Termin
            </span>
          </div>
        </div>

        <TasksPanel />
        <FokusStreak />
      </aside>
    </div>
  );
}

function selectedExamDateLabel(exam) {
  const months = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const d = new Date(`${exam.date}T00:00:00`);
  const date = `${d.getDate()}. ${months[d.getMonth()]}`;
  const label = exam.module ? exam.title : 'Prüfung';
  return `${label} · ${date}${exam.time ? ` · ${exam.time}` : ''}`;
}
