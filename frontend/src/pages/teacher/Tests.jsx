export default function Tests() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        My Tests
      </h1>

      <div className="bg-white p-4 rounded shadow mb-3">
        <p className="font-semibold">Mid Term Test</p>
        <p className="text-sm text-gray-600">
          Duration: 60 mins
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold">Weekly Quiz</p>
        <p className="text-sm text-gray-600">
          Duration: 20 mins
        </p>
      </div>
    </div>
  );
}
