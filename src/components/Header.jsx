import { NavLink, Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          #VANLIFE
        </Link>
        <div className="link_container">
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
          <BsPersonCircle className="login-icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
