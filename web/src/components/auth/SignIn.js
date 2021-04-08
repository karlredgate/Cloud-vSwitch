import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./user-auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = useAuth();

  const signIn = () => {
    auth.signIn(email, password).then((res) => {
      if (res) {
        history.push("/home");
      }
    });
  };

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
        <button className="button is-info" onClick={signIn}>
          Sign in
        </button>
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
