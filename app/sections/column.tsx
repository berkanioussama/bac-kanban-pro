'use client'
import { Lesson as LessonType } from "@/app/data/lessons"; 
import DragCard from "./drag-card"; 
import { useDroppable } from "@dnd-kit/core"; 

interface Lesson extends LessonType { 
  tag: string; 
}

const Column = ({ column, lessons }: { column: { id: string; title: string; tag: string; }, lessons: Lesson[] }) => { 
  const { setNodeRef } = useDroppable({ 
    id: column.tag  // Use tag instead of id
  });

  return ( 
    <div ref={setNodeRef} className="flex flex-col gap-6 p-4 border rounded-xl"> 
      <ColumnHeader title={column.title} lessonsNumber={lessons.length} /> 
      <ColumnBody lessons={lessons} /> 
    </div> 
  ); 
} 
  
export default Column; 

export const ColumnHeader = ({ title, lessonsNumber }: { title: string, lessonsNumber: number }) => { 
  return ( 
    <div className="flex items-center justify-between p-4 bg-gray-200 border rounded-lg"> 
      <h3 className="text-lg font-bold">{title}</h3> 
      <span className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-main text-white">
        {lessonsNumber}
      </span> 
    </div> 
  ); 
} 

export const ColumnBody = ({ lessons }: { lessons: Lesson[] }) => { 
  return ( 
    <div className="flex flex-col gap-3"> 
      {lessons.map((lesson) => ( 
        <DragCard key={lesson.id} lesson={lesson} /> 
      ))} 
    </div> 
  ); 
}
