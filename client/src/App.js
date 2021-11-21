import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditInventory from "./pages/EditInventory/EditInventory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
          <Route exact path="/inventories" component={Inventory} />
          <Route
            exact
            path="/inventories/edit/:id"
            render={(props) => {
              return <EditInventory {...props} />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
