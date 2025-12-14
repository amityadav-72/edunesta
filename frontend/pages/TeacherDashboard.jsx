import { Link } from 'react-router-dom'

export default function TeacherDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Teacher Dashboard</h2>
      <Link to="/teacher/create-test" className="block mt-3">Create Test</Link>
      <Link to="/materials" className="block mt-2">Upload Materials</Link>
    </div>
  )
}
