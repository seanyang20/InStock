import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Warehouses from "../pages/Warehouses/Warehouses";
import Inventory from "../pages/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/warehouses" component={Warehouses} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <Warehouses {...props} />;
            }}
          />
          <Route path="/inventory" component={Inventory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
