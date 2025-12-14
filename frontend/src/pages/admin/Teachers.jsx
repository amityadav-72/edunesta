export default function Teachers() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Teacher Management
      </h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Department</th>
            <th className="p-2 text-left">Tests Created</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2">Rahul</td>
            <td className="p-2">Computer Science</td>
            <td className="p-2">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
