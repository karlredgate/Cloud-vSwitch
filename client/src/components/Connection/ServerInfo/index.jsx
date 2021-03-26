import React from 'react';
import ServerCard from './ServerCard';

function ServerInfo() {
  return (
    <div className="py-6 pr-6">
      <div className="title is-5">Available Servers</div>
      <p className="mb-5">
        You can manage your servers on{' '}
        <a href={process.env.WEB_APP_URL} target="_blank" rel="noreferrer">
          Cloud vSwitch
        </a>{' '}
        site.
      </p>
      <div className="columns is-desktop is-multiline">
        <div className="column is-half-desktop is-one-third-fullhd">
          <ServerCard />
        </div>
        <div className="column is-half-desktop is-one-third-fullhd">
          <ServerCard />
        </div>
        <div className="column is-half-desktop is-one-third-fullhd">
          <ServerCard />
        </div>
      </div>
    </div>
  );
}

export default ServerInfo;
