import "./Navbar.css";
import logo from "../logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item logo-link has-text-weight-semibold is-family-monospace is-size-5"
          to="/home"
        >
          <img src={logo} width="70" alt="logo" />
          <span>Cloud vSwitch</span>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>
          <Link className="navbar-item" to="/profile">
            Profile
          </Link>
          <a className="navbar-item">Servers</a>
          <a className="navbar-item">Organizations</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="button is-light" to="/">
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
