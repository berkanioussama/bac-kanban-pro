'use client'
import { lessons } from "@/app/data/lessons";
import DragCard from "./drag-card";
import { useSnapshot } from "valtio";
import classState from "@/lib/state";

const Column = ({ title, tag }: { title: string, tag: string }) => {
  const snap = useSnapshot(classState)
  
  const lessonsDefault = lessons.map(lesson => ({
    ...lesson,
    tag: "todo",
  }));

  let filteredLessonsByClass
  if (classState.classId === "0") {
    filteredLessonsByClass = lessonsDefault
  } else {
    filteredLessonsByClass = lessonsDefault.filter(lesson => lesson.classId === classState.classId);
  }

  let filteredLessonsByTrimestre
  if (classState.trimestre === "0") {
    filteredLessonsByTrimestre = filteredLessonsByClass
  } else {
    filteredLessonsByTrimestre = filteredLessonsByClass.filter(lesson => lesson.trimestre === Number(classState.trimestre));
  }

  const filteredLessons = filteredLessonsByTrimestre.filter(lesson => lesson.tag === tag);
  const ColumnHeader = () => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-200 border rounded-lg">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-main text-white">{filteredLessons.length}</span>
      </div>
    );
  }

  const ColumnBody = () => {
    return (
      <div className="flex flex-col gap-3">
        {filteredLessons.map((lesson) => (
          <DragCard lesson={lesson} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 border rounded-xl">
      <ColumnHeader />
      <ColumnBody />
    </div>
  );
}
 
export default Column;