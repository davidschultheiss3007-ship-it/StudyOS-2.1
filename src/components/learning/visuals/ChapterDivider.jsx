// Marks the start of a chapter inside a merged multi-chapter topic (e.g. the
// Gesamtzusammenfassung). Sits as the first child of a chapter's opening
// <section>, so it gets that section's own border-t/pt-12 separator for free
// and only needs to make the chapter break unmistakable beyond that hairline.
export function ChapterDivider({ number, title, source }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Kapitel {number}</span>
      <h2 className="text-2xl font-bold tracking-[-0.015em] text-foreground">{title}</h2>
      {source && <span className="text-xs text-muted-foreground">{source}</span>}
    </div>
  );
}

export default ChapterDivider;
