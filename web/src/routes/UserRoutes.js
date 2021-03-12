import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Navbar from "../components/Navbar";
import Profile from "../components/profile/Profile";

function UserRoutes() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
}

export default UserRoutes;
