import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import InventoryList from "./components/InventoryList/InventoryList";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditInventory from "./pages/EditInventory/EditInventory";
import AddInventory from "./pages/AddInventory/AddInventory";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/inventories/edit/:id"
            render={(props) => {
              return <EditInventory {...props} />;
            }}
          />
          <Route path="/inventories/add" component={AddInventory} />
          <Route
            path="/warehouses/add"
            render={(props) => {
              return <AddWarehouse {...props} />;
            }}
          />
          <Route
            path="/inventories/:id"
            render={(props) => {
              return <ItemDetails {...props} />;
            }}
          />
          <Route exact path="/warehouses" component={Warehouses} />
          <Redirect
            from="/"
            to="/warehouses"
            exact
            component={Warehouses}
          ></Redirect>
          <Route
            exact
            path="/inventories"
            render={(props) => {
              return <InventoryList {...props} />;
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
              return <WarehouseDetails {...props} />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
