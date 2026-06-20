// Lays its children out side by side so related blocks use the sheet's full
// width instead of stacking into one tall column. Children are typically <Card>s
// (or any palette figure). Collapses to a single column on narrow screens.
//
// `count` is the desired column count on wide screens (2 or 3); the grid is
// auto-fit so a row never leaves an orphaned half-width card dangling.
export function Columns({ count = 2, children }) {
  const min = count >= 3 ? '15rem' : '18rem';
  return (
    <div
      className="my-2 grid items-start gap-3 [&>*]:my-0"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))` }}
    >
      {children}
    </div>
  );
}

export default Columns;
