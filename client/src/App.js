import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path="/" component={Warehouses} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <Warehouses {...props} />;
            }}
          />
          <Route path="/inventories" component={Inventory} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
