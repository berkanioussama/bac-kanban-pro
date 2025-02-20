import Column from "./column";

const Kanban = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Columns.map((column) => (
        <Column key={column.tag} title={column.title} tag={column.tag} />
      ))}
    </div>
  );
}
const Columns = [
  {
    title: "للقيام به",
    tag: "todo",
  },
  {
    title: "في التقدم",
    tag: "progress",
  },
  {
    title: "تم",
    tag: "done",
  }
]
export default Kanban;