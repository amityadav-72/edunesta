import { Link } from 'react-router-dom'

export default function StudentDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Student Dashboard</h2>
      <Link to="/materials" className="block mt-3 text-sky-600">Study Materials</Link>
    </div>
  )
}
