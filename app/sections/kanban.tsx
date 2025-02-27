"use client";

import Column from "./column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useSnapshot } from "valtio";
import classState from "@/lib/state";
import { useEffect } from "react";

const Columns = [
  { id: "c1", title: "للقيام به", tag: "todo", color: "#000018" },
  { id: "c2", title: "في التقدم", tag: "progress", color: "#EE9B18" },
  { id: "c3", title: "تم", tag: "done", color: "#009B18" },
];

const LOCAL_STORAGE_KEY = "kanban_lessons";

const Kanban = () => {
  const snap = useSnapshot(classState);

  // Load lessons from localStorage on mount
  useEffect(() => {
    const storedLessons = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedLessons) {
      classState.lessons = JSON.parse(storedLessons);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snap.lessons));
    }
  }, []);

  // Update localStorage when lessons change
  useEffect(() => {
    if (snap.lessons.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snap.lessons));
    }
  }, [snap.lessons]);

  // Filter lessons based on selected class and trimestre
  const filteredLessons = snap.lessons.filter(
    (lesson) =>
      (snap.classId === "0" || lesson.classId === snap.classId) &&
      (snap.trimestre === "0" || lesson.trimestre === Number(snap.trimestre))
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const lessonId = active.id as string;
    const newTag = over.id as string;

    classState.lessons = snap.lessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, tag: newTag } : lesson
    );
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-4">
        {Columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            lessons={filteredLessons.filter((lesson) => lesson.tag === column.tag)}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default Kanban;
