import { proxy } from "valtio";
import { Lesson as LessonType, lessons as lessonsArray } from "@/app/data/lessons";

interface Lesson extends LessonType {
  tag: string;
}

const classState = proxy({
  classId: "0",
  trimestre: "0",
  lessons: lessonsArray.map((lesson) => ({
    ...lesson,
    tag: "todo",
  })) as Lesson[],
});

export default classState;
