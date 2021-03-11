import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import SignIn from "./components/user-auth/SignIn";
import SignUp from "./components/user-auth/SignUp";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default Routes;
