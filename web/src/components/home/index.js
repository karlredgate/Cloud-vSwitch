import ServerCard from "./ServerCard";

function Home() {
  return (
    <div className="container">
      <div className="section">
        <h1 className="title">Hello, User</h1>
        <p>You have the following servers:</p>
        <div className="columns is-multiline mt-4">
          <div className="column is-4">
            <ServerCard />
          </div>
          <div className="column is-4">
            <ServerCard />
          </div>
          <div className="column is-4">
            <ServerCard />
          </div>
          <div className="column is-4">
            <ServerCard />
          </div>
          <div className="column is-4">
            <ServerCard />
          </div>
          <div className="column is-4">
            <ServerCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
