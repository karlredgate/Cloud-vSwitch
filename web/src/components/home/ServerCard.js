import "./ServerCard.css";

function ServerCard({ isNew = false }) {
  if (isNew) {
    return (
      <div
        className="card server-card is-new has-background-white-bis is-flex
          is-justify-content-center is-align-items-center has-text-black-bis"
      >
        Add
      </div>
    );
  }
  return (
    <div className="card server-card">
      <header className="card-header">
        <p className="card-header-title">Server</p>
        <div className="is-flex px-2">
          <div className="card-header-icon" role="button">
            <span className="icon">
              <i className="fas fa-play"></i>
            </span>
          </div>
          <div className="card-header-icon" role="button">
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <p>
            <span className="has-text-weight-semibold">Status: </span>
            <span className="icon has-text-success is-small">
              <i className="fas fa-circle fa-xs"></i>
            </span>{" "}
            Running
          </p>
          <p>
            <span className="has-text-weight-semibold">Organization: </span>
            CS6620
          </p>
          <p className="has-text-weight-semibold">Description: </p>
          <p>Test server</p>
        </div>
      </div>
    </div>
  );
}

export default ServerCard;
