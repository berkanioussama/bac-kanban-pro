
import Kanban from "./kanban";
import { classes } from "@/app/data/classes";
import { ClassSwitcher } from "./class-switcher";
import TrimestreSwitcher from "./trimestre-switcher";
import { DivisionSwitcher } from "./division-switcher";
import { divisions } from "../data/divisions";

const Board = () => {

  const BoardTopBar = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <DivisionSwitcher divisions={divisions} />
        <div className="flex items-center gap-4">
          <ClassSwitcher classes={classes} />
          <TrimestreSwitcher />
        </div>
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