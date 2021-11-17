import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route
            exact
            path="/warehouses/add"
            render={(props) => {
              return <AddWarehouse {...props} />;
            }}
          />
          <Route path="/warehouses" component={Warehouses} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <Warehouses {...props} />;
            }}
          />
          <Route path="/inventories" component={Inventory} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
