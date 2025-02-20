import Image from "next/image";
import Board from "./sections/board";
import StaticsSidebar from "./sections/statics-sidebar";

export default function Home() {
  return (
    <main className="min-h-svh bg-gray-100 p-4 md:p-6">
      <div className="flex gap-4">
        <Board />
        <StaticsSidebar/>
      </div>
    </main>
  );
}
