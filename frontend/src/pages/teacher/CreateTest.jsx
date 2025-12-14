export default function CreateTest() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Create Test
      </h1>

      <div className="bg-white p-6 rounded shadow w-full max-w-lg">
        <input
          type="text"
          placeholder="Test Title"
          className="w-full border p-2 mb-3"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-3"
        />

        <input
          type="number"
          placeholder="Duration (minutes)"
          className="w-full border p-2 mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Test
        </button>
      </div>
    </div>
  );
}
