import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Connect.css';

function Connect() {
  const [connectState, setConnectState] = useState('Disconnected');
  const connectStateClass = () => {
    switch (connectState) {
      case 'Disconnected':
        return 'has-text-grey-light';
      case 'Disconnecting':
        return 'has-text-danger';
      case 'Connecting':
        return 'has-text-warning';
      case 'Connected':
        return 'has-text-success';
      default:
        return '';
    }
  };

  // TODO: Implement real connect by calling API
  const mockConnect = () => {
    if (connectState === 'Disconnected') {
      setConnectState('Connecting');
      setTimeout(() => setConnectState('Connected'), 1000);
    } else if (connectState === 'Connected') {
      setConnectState('Disconnecting');
      setTimeout(() => setConnectState('Disconnected'), 1000);
    }
  };

  return (
    <div className="app-container-center">
      <div className="is-flex is-align-items-center mb-4">
        <div className="is-size-5">Test Username</div>
        <Link className={`${styles.signOut} icon ml-2`} title="Sign out" to="/">
          <i className="fas fa-sign-out-alt fa-lg" />
        </Link>
      </div>
      <div className="title is-3">Connect</div>
      <div
        className={`mt-3 mb-5 ${connectStateClass()}`}
        role="button"
        tabIndex={0}
        onClick={mockConnect}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            mockConnect();
          }
        }}
      >
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
      <div className="mt-4 mb-3">
        <span className={`icon ${connectStateClass()}`}>
          <i className="fas fa-circle" />
        </span>
        &nbsp;{connectState}
      </div>
      {connectState === 'Connected' && (
        <div>
          <div className="is-flex">
            <div className="icon">
              <i className="fas fa-location-arrow" />
            </div>
            <span title="Cloud location">&nbsp;Boston, MA</span>
          </div>
          <div className="is-flex">
            <div className="icon">
              <i className="fas fa-map-marker" />
            </div>
            <span title="External IP">&nbsp;35.209.35.11</span>
          </div>
          <div className="is-flex">
            <div className="icon">
              <i className="fas fa-network-wired" />
            </div>
            <span title="Internal IP">&nbsp;192.168.1.128</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Connect;
