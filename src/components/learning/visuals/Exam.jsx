// Inline marker for an exam-relevant phrase inside running text or a bullet.
// A subtle purple underline + tint draws the eye to testable bits without the
// weight of a full callout, so a dense page can still signal "this is on the
// exam" at the word level. Use sparingly — if a whole block is exam-central,
// reach for <Card exam> or <Callout type="examfocus"> instead.
export function Exam({ children }) {
  return (
    <mark
      className="rounded-[3px] px-1 font-medium"
      style={{
        background: 'var(--learning-purple-surface)',
        color: 'var(--learning-purple-text)',
        boxShadow: 'inset 0 -1px 0 var(--learning-purple-border)',
      }}
    >
      {children}
    </mark>
  );
}

export default Exam;
