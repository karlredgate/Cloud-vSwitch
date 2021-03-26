import React, { useState } from 'react';
import Connect from './Connect';
import ServerInfo from './ServerInfo';

function Connection() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="columns">
      <div className="column">
        <Connect showInfo={showInfo} setShowInfo={setShowInfo} />
      </div>
      {showInfo && (
        <div className="column">
          <ServerInfo />
        </div>
      )}
    </div>
  );
}

export default Connection;
