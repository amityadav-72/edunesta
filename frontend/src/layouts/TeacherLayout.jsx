import { Outlet, Link } from "react-router-dom";

export default function TeacherLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Teacher</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/teacher">Dashboard</Link>
          <Link to="/teacher/tests">My Tests</Link>
          <Link to="/teacher/create-test">Create Test</Link>
          <Link to="/teacher/questions">Questions</Link>
          <Link to="/teacher/submissions">Submissions</Link>
          <Link to="/teacher/materials">Materials</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
