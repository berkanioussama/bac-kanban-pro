'use client'
import { useDraggable } from "@dnd-kit/core"; 

interface Lesson { 
  id: string; 
  classId: string; 
  title: string; 
  trimestre: number; 
  tag: string; 
}

const DragCard = ({ lesson }: { lesson: Lesson }) => { 
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ 
    id: lesson.id, 
    data: { lesson }
  });

  const style = transform 
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` } 
    : undefined;
  
  const trimestreLabel = (trimestre: number) => { 
    switch (trimestre) { 
      case 1: return "الفصل الأول"; 
      case 2: return "الفصل الثاني"; 
      case 3: return "الفصل الثالث"; 
      default: return "كل الفصول"; 
    } 
  };

  return ( 
    <div 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes} 
      style={style} 
      className="flex flex-col gap-2 p-3 border rounded-lg"
    > 
      <h4 className="font-bold">{lesson.title}</h4> 
      <span className="flex items-center justify-center w-fit text-xs bg-gray-200 px-2 py-1 rounded-full">
        {trimestreLabel(lesson.trimestre)}
      </span> 
    </div> 
  ); 
} 
  
export default DragCard;
