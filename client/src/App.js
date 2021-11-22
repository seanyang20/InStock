import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails"
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddInventory from "./pages/AddInventory/AddInventory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/inventories/add" component={AddInventory} />
          <Route
            path="/warehouses/add"
            render={(props) => {
              return <AddWarehouse {...props} />;
            }}
          />
          <Route exact path="/warehouses" component={Warehouses} />
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
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <WarehouseDetails {...props} />
            }}
          />
          <Route path="/inventories" component={Inventory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
