'use client'
import { useSnapshot } from "valtio"
import classState from "@/lib/state"
import { useEffect, useState } from "react"
import { Lesson as LessonType } from "../data/lessons"
import RadialChart from "./radial-chart";

interface Lesson extends LessonType {
  tag: string;
}
const LOCAL_STORAGE_KEY = "kanban_lessons";
const StaticsSidebar = () => {

  const snap = useSnapshot(classState);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [totalLessons, setTotalLessons] = useState(0);
  const [totalDone, setTotalDone] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [totalTodo, setTotalTodo] = useState(0);
  const [thefilteredLessons, setFilteredLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const storedLessons = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedLessons) {
      return
    }
    setLessons(JSON.parse(storedLessons));
    const filteredLessons = lessons.filter(
      (lesson) =>
        (snap.classId === "0" || lesson.classId === snap.classId) &&
        (snap.trimestre === "0" || lesson.trimestre === Number(snap.trimestre))
    );
  
    const total = filteredLessons.length;
    const done = filteredLessons.filter((lesson) => lesson.tag === "done").length;
    const inProgress = filteredLessons.filter(
      (lesson) => lesson.tag === "progress"
    ).length;
    const todo = filteredLessons.filter((lesson) => lesson.tag === "todo").length;
  
    setFilteredLessons(filteredLessons);
    setTotalLessons(total);
    setTotalDone(done);
    setTotalProgress(inProgress);
    setTotalTodo(todo);
  }, [snap.classId, snap.trimestre, classState]); 

  return (
    <div className="w-md bg-white p-6 rounded-3xl">
      <div>
        <RadialChart lessons={thefilteredLessons} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>كل الدروس</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{totalLessons}</span>
          </div>
        </div>
        <div>
          <p>في التقدم</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{totalProgress}</span>
          </div>
          
        </div>
        <div>
          <p>للقيام به</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{totalTodo}</span>
          </div>
        </div>
        <div>
          <p>تم</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 border-r-6 border-main" />
            <span className="text-2xl font-medium leading-none">{totalDone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StaticsSidebar;