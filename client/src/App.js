import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/warehouses" component={null} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return null;
              // pass in browser-router-props into warehouse component
            }}
          />
          <Route path="/inventory" component={null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
