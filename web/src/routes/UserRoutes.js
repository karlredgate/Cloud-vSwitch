import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Navbar from "../components/Navbar";

function UserRoutes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default UserRoutes;
