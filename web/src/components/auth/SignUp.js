import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../services/userService";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signUp = () => {
    createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    }).then((res) => {
      if (res) {
        history.push("/home");
      }
      // TODO: Notify if failed
    });
  };

  return (
    <div className="user-auth">
      <h1 className="title">Sign Up</h1>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <div className="action-row mt-1">
        <button className="button is-info" onClick={signUp}>
          Sign up
        </button>
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
