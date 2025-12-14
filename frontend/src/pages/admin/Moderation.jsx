export default function Moderation() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Content Moderation
      </h1>

      <div className="bg-white p-4 rounded shadow">
        <p>📄 Algebra Notes (Uploaded by Teacher)</p>
        <button className="mt-2 text-red-600">
          Remove Content
        </button>
      </div>
    </div>
  );
}
