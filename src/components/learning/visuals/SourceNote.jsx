// Small italic source reference, placed at the end of a section.
export function SourceNote({ children }) {
  return (
    <p className="mt-4 border-t border-border pt-3 text-xs italic text-muted-foreground">
      Quelle: {children}
    </p>
  );
}

export default SourceNote;
