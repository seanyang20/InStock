import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route
            exact path="/"
            render={(props) => {
              return <Warehouses {...props} />;
            }}
          />
          <Route
            path="/warehouses/edit/:id"
            render={(props) => {
              return <EditWarehouse {...props} />;
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
