import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="mt-4">
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </div>
      </div>
      <div className="is-flex is-flex-direction-column">
        <Link className="button is-info is-pulled-left my-2" to="/connect">
          Sign in
        </Link>
        <a
          className="is-size-6"
          href={`${process.env.WEB_APP_URL}/sign-up`}
          target="_blank"
          rel="noreferrer"
        >
          <div>No account yet? Sign up here.</div>
        </a>
      </div>
    </div>
  );
}

export default SignIn;
