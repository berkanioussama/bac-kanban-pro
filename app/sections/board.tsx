
import Kanban from "./kanban";
import { classes } from "@/app/data/classes";
import { ClassSwitcher } from "./class-switcher";
import TrimestreSwitcher from "./trimestre-switcher";

const Board = () => {

  const BoardTopBar = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <ClassSwitcher classes={classes} />
        <TrimestreSwitcher />
      </div>
    );
  }

  return ( 
    <section className="w-full bg-white p-6 rounded-3xl">
      <BoardTopBar />
      <Kanban />
    </section>
   );
}
 
export default Board;