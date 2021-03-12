import { Link } from "react-router-dom";

function CreateServer() {
  return (
    <div className="section create-server">
      <h1 className="title">Create Server</h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Type</label>
        <div className="control">
          <div className="select">
            <select>
              <option>m1.small</option>
              <option>m1.medium</option>
              <option>m1.large</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">System</label>
        <div className="control">
          <div className="control">
            <div className="select">
              <select>
                <option>CentOS 7</option>
                <option>Ubuntu-16.04</option>
                <option>RHEL 7.1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="e.g. Samba server"
          />
        </div>
      </div>
      <div className="buttons mt-1">
        <Link className="button is-info" to="/home">
          Create
        </Link>
        <Link className="button is-danger" to="/home">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default CreateServer;
