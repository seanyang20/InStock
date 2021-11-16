import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import InventoryList from "./components/InventoryList/InventoryList";

function App() {
  return (
    <div className="App">
      <InventoryList />
      <Router>
        {/* <Header/> */}
        <Switch>
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
