import logo from "./logo.svg";
import "./App.css";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="is-size-1 has-text-weight-semibold is-family-monospace mt-5 mb-3">
        Cloud vSwitch
      </h1>
      <div className="buttons">
        <button
          className="button is-info mr-3"
          onClick={() => history.push("/sign-in")}
        >
          Sign In
        </button>
        <button className="button is-warning">
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}

export default App;
