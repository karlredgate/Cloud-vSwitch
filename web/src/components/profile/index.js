import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="section">
      <h1 className="title is-4">User Name</h1>
      <p className="mb-3">
        <span className="has-text-weight-semibold">Email: </span>
        user@vswitch.tech
      </p>
      <Link className="button is-info is-small has-text-weight-semibold">
        Edit
      </Link>
    </div>
  );
}

export default Profile;
