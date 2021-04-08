import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./UserRoutes.css";
import Home from "../components/home";
import Navbar from "../components/Navbar";
import Profile from "../components/profile";
import CreateServer from "../components/home/CreateServer";
import Organizations from "../components/organizations";
import CreateOrganization from "../components/organizations/CreateOrganization";
import { useAuth } from "../components/auth/user-auth";

function UserRoutes() {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) {
    return (
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/organizations/new" component={CreateOrganization} />
            <Route path="/organizations" component={Organizations} />
            <Route path="/server/new" component={CreateServer} />
          </Switch>
        </div>
      </>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/sign-in",
          state: { from: location },
        }}
      />
    );
  }
}

export default UserRoutes;
