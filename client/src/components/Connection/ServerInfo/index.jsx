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
const onlineUsers = [
  {
    name: 'User1',
    ip: '192.168.1.110',
  },
  {
    name: 'User2',
    ip: '192.168.1.112',
  },
  {
    name: 'User3',
    ip: '192.168.1.125',
  },
  {
    name: 'User4',
    ip: '192.168.1.178',
  },
  {
    name: 'User5',
    ip: '192.168.1.180',
  },
  {
    name: 'Test User 6',
    ip: '192.168.1.200',
  },
];

function ServerInfo() {
  const [showOfflineServer, setShowOfflineServer] = useState(false);
  const servers = () =>
    showOfflineServer
      ? allServers
      : allServers.filter((server) => server.status === 'Online');

  return (
    <div className="py-6 pr-6">
      <div className="title is-5">Online Users</div>
      <div className="mb-5">
        Other users connected to this vSwitch Server currently.
      </div>
      <div className="box">
        <div className="columns is-multiline">
          {onlineUsers.map((user) => (
            <div
              className="column is-half-tablet is-one-third-widescreen"
              key={user.name}
            >
              <span className="icon">
                <i className="fas fa-user fa-sm" />
              </span>{' '}
              {user.name}: {user.ip}
            </div>
          ))}
        </div>
      </div>
      <hr />
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
