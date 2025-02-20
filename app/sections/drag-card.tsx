interface Lesson {
  id: string;
  classId: string;
  title: string;
  trimestre: number;
  tag: string;
}
const DragCard = ({ lesson }: { lesson: Lesson }) => {
  const trimestreLabel = (trimestre: number) => {
    switch (trimestre) {
      case 1:
        return "الفصل الأول";
      case 2:
        return "الفصل الثاني";
      case 3:
        return "الفصل الثالث";
      default:
        return "كل الفصول";
    }
  };
  return (
    <div className="flex flex-col gap-2 p-3 border rounded-lg">
      <h4 className="font-bold">{lesson.title}</h4>
      <span className="flex items-center justify-center w-fit text-xs bg-gray-200 px-2 py-1 rounded-full">{trimestreLabel(lesson.trimestre)}</span>
    </div>
  );
}
 
export default DragCard;