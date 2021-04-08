import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../components/Landing";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { ProvideAuth } from "../components/auth/user-auth";
import UserRoutes from "./UserRoutes";

function MainRoutes() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route component={UserRoutes} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default MainRoutes;
