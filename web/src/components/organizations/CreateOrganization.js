import { Link } from "react-router-dom";

function CreateOrganization() {
  return (
    <div className="section create-organization">
      <h1 className="title">Create Organization</h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" />
        </div>
      </div>
      <div className="field">
        <label className="label">Country</label>
        <div className="control">
          <div className="select">
            <select>
              <option>US</option>
              <option>CA</option>
              <option>JP</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">State/Province</label>
        <div className="control">
          <div className="control">
            <div className="select">
              <select>
                <option>MA</option>
                <option>CA</option>
                <option>NY</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">City</label>
        <div className="control">
          <div className="control">
            <div className="select">
              <select>
                <option>Boston</option>
                <option>Cambridge</option>
                <option>Brookline</option>
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
            placeholder="e.g. For remote work"
          />
        </div>
      </div>
      <div className="buttons mt-1">
        <Link className="button is-info" to="/organizations">
          Create
        </Link>
        <Link className="button is-danger" to="/organizations">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default CreateOrganization;
