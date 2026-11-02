import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSemesterById, semesters } from '@/data/semesters.js';
import { getModulesBySemester } from '@/data/moduleRegistry.js';
import { ModuleCard } from '@/components/cards/ModuleCard.jsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs.jsx';
import { Badge } from '@/components/ui/Badge.jsx';
import { SegmentedControl } from '@/components/ui/SegmentedControl.jsx';
import { PageShell, PageError } from '@/components/layout/PageShell.jsx';

const FILTER_OPTIONS = [
  { value: 'all', label: 'Alle' },
  { value: 'in-progress', label: 'Aktiv' },
  { value: 'planned', label: 'Geplant' },
  { value: 'done', label: 'Fertig' },
];

export function Semester() {
  const { semesterId } = useParams();
  const [filter, setFilter] = useState('all');
  const semester = getSemesterById(semesterId);

  if (!semester) return <PageError message="Semester nicht gefunden." />;

  const modules = getModulesBySemester(semesterId);
  const filtered = filter === 'all' ? modules : modules.filter(m => m.status === filter);
  const semesterNum = semesterId.replace('semester-', '');

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Startseite', to: '/' }, { label: semester.title }]} />

      <nav aria-label="Semester wechseln" className="mt-5 flex w-fit flex-wrap gap-1 rounded-xl bg-muted p-1">
        {semesters.map(item => (
          <Link
            key={item.id}
            to={`/semester/${item.id}`}
            aria-current={item.id === semesterId ? 'page' : undefined}
            onClick={() => setFilter('all')}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${item.id === semesterId ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Semester monogram tile — same identity system as module cards */}
          <div className="flex size-14 shrink-0 items-center justify-center rounded-[14px] bg-[var(--color-accent-subtle)] text-2xl font-bold text-[var(--color-accent)]">
            {semesterNum}
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-[-0.015em] text-foreground">{semester.title}</h1>
            <p className="mt-0.5 text-sm text-muted-foreground">{semester.description}</p>
          </div>
        </div>
        <Badge variant={semester.status === 'current' ? 'success' : 'default'} className="mt-1 shrink-0">
          {semester.label}
        </Badge>
      </div>

      {/* Filter row — shared segmented control */}
      <SegmentedControl
        className="mt-6"
        role="group"
        ariaLabel="Module filtern"
        options={FILTER_OPTIONS}
        value={filter}
        onChange={setFilter}
      />

      {/* Module list — single column like 2.0, grid on wider screens */}
      <div className="mt-6 flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
            {modules.length === 0 ? 'In diesem Semester sind noch keine Module hinterlegt.' : 'Keine Module für diesen Filter.'}
          </p>
        ) : (
          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            {filtered.map(mod => <ModuleCard key={mod.id} module={mod} />)}
          </div>
        )}
      </div>
    </PageShell>
  );
}
