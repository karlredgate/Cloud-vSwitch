import React, { useState } from 'react';
import Connect from './Connect';
import ServerInfo from './ServerInfo';
import styles from './index.css';

function Connection() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <div className={showInfo ? styles.left : ''}>
        <Connect showInfo={showInfo} setShowInfo={setShowInfo} />
      </div>
      {showInfo && (
        <div className={styles.right}>
          <ServerInfo />
        </div>
      )}
    </div>
  );
}

export default Connection;
