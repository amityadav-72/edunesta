export default function AttemptTest() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">
        Attempt Test
      </h1>

      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold mb-3">
          Question 1: What is 2 + 2?
        </p>

        <div className="space-y-2">
          <label className="block">
            <input type="radio" name="q1" /> 3
          </label>
          <label className="block">
            <input type="radio" name="q1" /> 4
          </label>
          <label className="block">
            <input type="radio" name="q1" /> 5
          </label>
        </div>

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Submit Test
        </button>
      </div>
    </div>
  );
}
