import OrganizationCard from "./OrganizationCard";

function Organizations() {
  return (
    <div className="section">
      <h1 className="title">vSwitch Servers</h1>
      <p>
        Each organization has one vSwitch server which bridges all clients and
        servers into a virtual network.
      </p>
      <div className="columns is-multiline mt-4">
        <div className="column is-4">
          <OrganizationCard />
        </div>
        <div className="column is-4">
          <OrganizationCard isNew={true} />
        </div>
      </div>
    </div>
  );
}

export default Organizations;
