export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">
        Teacher Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          Tests Created
        </div>

        <div className="bg-white p-4 rounded shadow">
          Active Tests
        </div>

        <div className="bg-white p-4 rounded shadow">
          Students Attempted
        </div>

        <div className="bg-white p-4 rounded shadow">
          Average Score
        </div>
      </div>
    </div>
  );
}
