import "./user-auth.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="user-auth">
      <h1 className="title">Sign In</h1>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="cloud@example.com"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left">
          <input className="input" type="password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <div className="action-row mt-1">
        <Link className="button is-info" to="/home">
          Sign in
        </Link>
        <div className="link">
          <Link to="/sign-up" className="mr-3">
            Sign up
          </Link>
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
