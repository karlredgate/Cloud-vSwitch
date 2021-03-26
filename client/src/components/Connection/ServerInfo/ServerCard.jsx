import React from 'react';
import styles from './ServerCard.css';

function ServerCard() {
  return (
    <div className={`${styles.serverCard} card app-card`}>
      <header className="card-header">
        <p className="card-header-title">Server</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>
            <span className="has-text-weight-semibold">Status: </span>
            <span className="icon has-text-success is-small">
              <i className="fas fa-circle fa-xs" />
            </span>{' '}
            Running
          </p>
          <p>
            <span className="has-text-weight-semibold">IP: </span>
            192.168.1.58
          </p>
          <p className="has-text-weight-semibold">Description: </p>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
}

export default ServerCard;
