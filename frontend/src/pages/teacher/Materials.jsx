export default function Materials() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Upload Materials
      </h1>

      <div className="bg-white p-6 rounded shadow w-full max-w-lg">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 mb-3"
        />

        <input
          type="file"
          className="w-full border p-2 mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>
    </div>
  );
}
