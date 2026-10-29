import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Movie Explorer
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
