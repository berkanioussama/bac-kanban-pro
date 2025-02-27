'use client'
import { Lesson as LessonType } from "@/app/data/lessons"; 
import DragCard from "./drag-card"; 
import { useDroppable } from "@dnd-kit/core"; 

interface Lesson extends LessonType { 
  tag: string; 
}

const Column = ({ column, lessons }: { column: { id: string; title: string; tag: string; color: string }, lessons: Lesson[] }) => { 
  const { setNodeRef } = useDroppable({ 
    id: column.tag  // Use tag instead of id
  });

  return ( 
    <div ref={setNodeRef} className="flex flex-col gap-6 p-4 border rounded-xl"> 
      <ColumnHeader title={column.title} lessonsNumber={lessons.length} color={column.color} /> 
      <ColumnBody lessons={lessons} /> 
    </div> 
  ); 
} 
  
export default Column; 

export const ColumnHeader = ({ title, lessonsNumber, color }: { title: string, lessonsNumber: number, color: string }) => { 
  return ( 
    <div className="flex items-center justify-between p-2 border border-r-4 rounded-lg" style={{ borderColor: color }}> 
      <h3 className="text-lg font-bold">{title}</h3> 
      <span className="text-sm w-6 h-6 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: color }}>
        {lessonsNumber}
      </span> 
    </div> 
  ); 
} 

export const ColumnBody = ({ lessons }: { lessons: Lesson[] }) => { 
  return ( 
    <div className="flex flex-col gap-3 "> 
      {lessons.map((lesson) => ( 
        <DragCard key={lesson.id} lesson={lesson}  /> 
      ))} 
    </div> 
  ); 
}
