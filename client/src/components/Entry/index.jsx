import React from 'react';
import logo from '../../../assets/logo.svg';
import styles from './index.module.css';
import SignIn from './SignIn';

function Entry() {
  return (
    <div className={`${styles.app} app-container-center`}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h1 className="is-size-1 has-text-weight-semibold is-family-monospace mt-5 mb-3">
        Cloud vSwitch
      </h1>
      <SignIn />
    </div>
  );
}

export default Entry;
