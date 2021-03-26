import React, { useState } from 'react';
import Switch from 'react-switch';
import ServerCard from './ServerCard';

// TODO: Replace mack data with real data retrieved from API
const allServers = [
  { id: 0, status: 'Online', ip: '192.168.1.10' },
  { id: 1, status: 'Online', ip: '192.168.1.12' },
  { id: 2, status: 'Online', ip: '192.168.1.18' },
  { id: 3, status: 'Offline' },
  { id: 4, status: 'Offline' },
];

function ServerInfo() {
  const [showOfflineServer, setShowOfflineServer] = useState(false);
  const servers = () =>
    showOfflineServer
      ? allServers
      : allServers.filter((server) => server.status === 'Online');

  return (
    <div className="py-6 pr-6">
      <div className="title is-5">Available Servers</div>
      <div className="is-flex is-justify-content-space-between mb-5">
        <span>
          You can manage your servers on{' '}
          <a href={process.env.WEB_APP_URL} target="_blank" rel="noreferrer">
            Cloud vSwitch
          </a>{' '}
          site.
        </span>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="is-flex">
          <span>Show Offline</span>
          <Switch
            onChange={() => setShowOfflineServer(!showOfflineServer)}
            checked={showOfflineServer}
            className="app-switch"
          />
        </label>
      </div>
      <div className="columns is-desktop is-multiline">
        {servers().map((server) => (
          <div
            className="column is-half-desktop is-one-third-fullhd"
            key={server.id}
          >
            <ServerCard status={server.status} ip={server.ip} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerInfo;
