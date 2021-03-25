import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Connect.css';

function Connect() {
  return (
    <div className="app-container-center">
      <div className="is-flex is-align-items-center mb-4">
        <div className="is-size-5">Test Username</div>
        <Link className={`${styles.signOut} icon ml-2`} title="Sign out" to="/">
          <i className="fas fa-sign-out-alt fa-lg" />
        </Link>
      </div>
      <div className="title is-3">Connect</div>
      <div className="mt-3 mb-5 has-text-grey-light" role="button">
        <i className="fas fa-power-off fa-7x" />
      </div>
      <div className="control has-icons-left">
        <div className="select is-rounded is-info">
          <select>
            <option selected>CS6620</option>
            <option>My Cloud 1</option>
            <option>My Cloud 2</option>
          </select>
        </div>
        <div className="icon is-small is-left has-text-info">
          <i className="fas fa-cloud" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
