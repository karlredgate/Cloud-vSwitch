import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="user-auth">
      <h1 className="title">Sign Up</h1>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control has-icons-left">
          <input className="input" type="text" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control has-icons-left">
          <input className="input" type="text" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input className="input" type="email" />
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
          Sign up
        </Link>
        <div className="link">
          <Link to="/sign-in" className="mr-3">
            Sign in
          </Link>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
