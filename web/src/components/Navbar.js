import "./Navbar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
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

        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>
          <Link className="navbar-item" to="/profile">
            Profile
          </Link>
          <Link className="navbar-item" to="/organizations">
            Organizations
          </Link>
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
