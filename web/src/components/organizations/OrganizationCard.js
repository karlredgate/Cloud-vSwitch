import "./OrganizationCard.css";
import { Link } from "react-router-dom";

function OrganizationCard({ isNew = false }) {
  if (isNew) {
    return (
      <Link
        className="card organization-card app-card is-new has-background-white-bis is-flex
          is-justify-content-center is-align-items-center has-text-black-bis"
        to="/organizations/new"
      >
        Add
      </Link>
    );
  }
  return (
    <div className="card app-card organization-card">
      <header className="card-header">
        <p className="card-header-title">CS6620</p>
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
          <div className="card-header-icon" role="button">
            <span className="icon">
              <i className="fas fa-user-plus"></i>
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
            <span className="has-text-weight-semibold">Location: </span>
            Boston, MA
          </p>
          <p>
            <span className="has-text-weight-semibold">Email: </span>
            cs6620@vswitch.tech
          </p>
          <p className="has-text-weight-semibold">Description: </p>
          <p>vSwitch server</p>
        </div>
      </div>
    </div>
  );
}

export default OrganizationCard;
