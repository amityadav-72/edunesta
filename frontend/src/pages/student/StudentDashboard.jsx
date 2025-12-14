export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          Available Tests
        </div>

        <div className="bg-white p-4 shadow rounded">
          Completed Tests
        </div>

        <div className="bg-white p-4 shadow rounded">
          Latest Score
        </div>

        <div className="bg-white p-4 shadow rounded">
          Study Materials
        </div>
      </div>
    </div>
  );
}
