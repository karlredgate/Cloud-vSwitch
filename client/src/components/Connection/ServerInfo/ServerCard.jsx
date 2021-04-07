import React from 'react';
import styles from './ServerCard.module.css';

function ServerCard({ status = 'Unknown', ip = 'N/A' }) {
  const getStatusIconClass = () => {
    switch (status) {
      case 'Online':
        return 'has-text-success';
      case 'Offline':
        return 'has-text-grey-light';
      default:
        return 'has-text-danger';
    }
  };

  return (
    <div className={`${styles.serverCard} card app-card`}>
      <header className="card-header">
        <div className="card-header-title is-justify-content-space-between">
          <div>Server</div>
          <div className="has-text-weight-normal">
            <span className={`${getStatusIconClass()} icon is-small`}>
              <i className="fas fa-circle fa-xs" />
            </span>{' '}
            {status}
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <p>
            <span className="has-text-weight-semibold">IP: </span>
            {ip}
          </p>
          <p className="has-text-weight-semibold">Description: </p>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
}

export default ServerCard;
