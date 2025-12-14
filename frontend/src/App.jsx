import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./auth/RequireAuth";

/* Public */
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";

/* Layouts */
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";

/* Dashboards */
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <RequireAuth role="admin">
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* Teacher */}
        <Route
          path="/teacher"
          element={
            <RequireAuth role="teacher">
              <TeacherLayout />
            </RequireAuth>
          }
        >
          <Route index element={<TeacherDashboard />} />
        </Route>

        {/* Student */}
        <Route
          path="/student"
          element={
            <RequireAuth role="student">
              <StudentLayout />
            </RequireAuth>
          }
        >
          <Route index element={<StudentDashboard />} />
        </Route>
      </Routes>
    </>
  );
}
