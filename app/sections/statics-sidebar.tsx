'use client'
import { useSnapshot } from "valtio"
import classState from "@/lib/state"
import RadialChart from "./radial-chart";

const StaticsSidebar = () => {

  const snap = useSnapshot(classState);


  const filteredLessons = snap.lessons.filter(
    (lesson) =>
      (snap.classId === "0" || lesson.classId === snap.classId) &&
      (snap.trimestre === "0" || lesson.trimestre === Number(snap.trimestre))
  )

  const total = filteredLessons.length;
  const done = filteredLessons.filter((lesson) => lesson.tag === "done").length;
  const inProgress = filteredLessons.filter(
    (lesson) => lesson.tag === "progress"
  ).length;
  const todo = filteredLessons.filter((lesson) => lesson.tag === "todo").length;


  return (
    <div className="w-md bg-white p-6 rounded-3xl">
      <div>
        <RadialChart lessons={filteredLessons} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>كل الدروس</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{total}</span>
          </div>
        </div>
        <div>
          <p>في التقدم</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{inProgress}</span>
          </div>
          
        </div>
        <div>
          <p>للقيام به</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{todo}</span>
          </div>
        </div>
        <div>
          <p>تم</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{done}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StaticsSidebar;