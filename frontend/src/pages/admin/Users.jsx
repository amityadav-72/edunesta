export default function Users() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">
        User Management
      </h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2">Amit</td>
            <td className="p-2">amit@mail.com</td>
            <td className="p-2">Student</td>
            <td className="p-2">
              <button className="text-red-600">Deactivate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
