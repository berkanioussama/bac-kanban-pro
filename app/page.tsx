import Board from "./sections/board";
import StaticsSidebar from "./sections/statics-sidebar";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <main className="min-h-svh bg-gray-200">
      <Navbar />
      <div className="flex gap-4 px-6">
        <Board />
        <StaticsSidebar/>
      </div>
    </main>
  );
}
