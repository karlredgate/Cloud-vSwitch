import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Navbar from "../components/Navbar";
import Profile from "../components/profile";
import CreateServer from "../components/home/CreateServer";

function UserRoutes() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/server/new" component={CreateServer} />
        </Switch>
      </div>
    </>
  );
}

export default UserRoutes;
