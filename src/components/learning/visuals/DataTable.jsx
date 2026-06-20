import { cn } from '@/lib/utils.js';

// Structured table with optional row highlighting. `columns` = [{key,label,align}].
// `rows` = array of objects keyed by column.key. `highlight` = predicate(row,i).
export function DataTable({ columns = [], rows = [], caption, highlight }) {
  return (
    <figure className="my-2">
      {caption && <figcaption className="mb-2 text-sm font-medium text-muted-foreground">{caption}</figcaption>}
      <div className="overflow-x-auto rounded-xl border border-[var(--learning-inset-border)]">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[var(--learning-inset-bg)]">
            <tr>
              {columns.map(col => (
                <th key={col.key} className={cn('border-b border-border px-3 py-2 font-semibold text-foreground', col.align === 'right' ? 'text-right' : 'text-left')}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const hot = highlight?.(row, i);
              return (
                <tr key={i} className={cn(hot && 'bg-[var(--color-accent-subtle)]')}>
                  {columns.map(col => (
                    <td key={col.key} className={cn('border-b border-border px-3 py-2 tabular-nums text-[var(--color-text-secondary)]', col.align === 'right' ? 'text-right' : 'text-left', hot && 'font-medium text-foreground')}>
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default DataTable;
