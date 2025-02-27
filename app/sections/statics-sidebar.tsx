'use client'
import { useSnapshot } from "valtio"
import classState from "@/lib/state"
import RadialChart from "./radial-chart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import clsx from "clsx";

const StaticsSidebar = () => {

  const snap = useSnapshot(classState);

  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("ar", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
      })
    );
  }, []);


  const filteredLessons = snap.lessons.filter(
    (lesson) =>
      (snap.classId === "0" || lesson.classId === snap.classId) &&
      (snap.trimestre === "0" || lesson.trimestre === Number(snap.trimestre))
  )

  const total = filteredLessons.length;
  const done = filteredLessons.filter((lesson) => lesson.tag === "done").length;
  const progress = filteredLessons.filter(
    (lesson) => lesson.tag === "progress"
  ).length;
  const todo = filteredLessons.filter((lesson) => lesson.tag === "todo").length;
  const percentage = Math.round((done / total) * 100);

  return (
    <div className="w-md h-fit bg-white p-6 rounded-3xl">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>إحصائيات التقدم</CardTitle>
          <CardDescription>{currentDate}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-0">
          <RadialChart percentage={percentage} />
        </CardContent>
        
        <CardFooter>
          <div className="grid grid-cols-2 gap-4 w-full">
            <StaticItem title={"كل الدروس"} number={total} color={"border-black"} />
            <StaticItem title={"للقيام به"} number={todo} color={"border-todo"} />
            <StaticItem title={"في التقدم"} number={progress} color={"border-progress"} />
            <StaticItem title={"تم"} number={done} color={"border-main"}  />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
 
export default StaticsSidebar;

const StaticItem = ({ title, number, color }: { title: string, number: number, color: string}) => {
  return (
    <div className=" p-3 bg-gray-200 rounded-lg">
      <p className="text-sm mb-1">{title}</p>
      <div className="flex items-center gap-2">
        <div className={clsx("w-1.5 h-5 border-r-5", `${color}`)}/>
        <span className="h-5 text-2xl font-medium leading-[20px]">{number}</span>
      </div>
    </div>
  )
}