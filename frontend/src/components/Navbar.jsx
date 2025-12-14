import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span>EduNesta</span>
      <div>
        <Link to="/login">Login</Link>{" "}
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    background: "#111827",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
};
