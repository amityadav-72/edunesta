export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded shadow">Total Users</div>
        <div className="bg-white p-4 rounded shadow">Teachers</div>
        <div className="bg-white p-4 rounded shadow">Students</div>
        <div className="bg-white p-4 rounded shadow">Tests</div>
        <div className="bg-white p-4 rounded shadow">System Health</div>
      </div>
    </div>
  );
}
