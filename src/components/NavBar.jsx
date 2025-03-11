import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Home
      </NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Directors
      </NavLink>
      <NavLink to="/actors" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Actors
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Movies
      </NavLink>
    </nav>
  );
}

export default NavBar;
