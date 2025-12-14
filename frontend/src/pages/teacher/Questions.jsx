export default function Questions() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Manage Questions
      </h1>

      <div className="bg-white p-6 rounded shadow w-full max-w-lg">
        <textarea
          placeholder="Question text"
          className="w-full border p-2 mb-3"
        />

        <input
          type="text"
          placeholder="Option A"
          className="w-full border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Option B"
          className="w-full border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Option C"
          className="w-full border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Option D"
          className="w-full border p-2 mb-3"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save Question
        </button>
      </div>
    </div>
  );
}
