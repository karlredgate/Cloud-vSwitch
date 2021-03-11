import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default Routes;
