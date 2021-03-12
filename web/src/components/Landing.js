import logo from "../logo.svg";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="is-size-1 has-text-weight-semibold is-family-monospace mt-5 mb-3">
        Cloud vSwitch
      </h1>
      <div className="buttons">
        <Link className="button is-info mr-3" to="/sign-in">
          Sign In
        </Link>
        <a
          className="button is-warning"
          href="https://github.com/CS6620-S21/Cloud-vSwitch"
          target="_blank"
        >
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Landing;
