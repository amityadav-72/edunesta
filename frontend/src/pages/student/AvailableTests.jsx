export default function AvailableTests() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Available Tests</h1>

      <div className="bg-white p-4 rounded shadow mb-3">
        <p className="font-semibold">Math Test</p>
        <p className="text-sm text-gray-600">Duration: 30 mins</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
          Start Test
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold">Science Test</p>
        <p className="text-sm text-gray-600">Duration: 45 mins</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
          Start Test
        </button>
      </div>
    </div>
  );
}
