import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path="/warehouses" component={Warehouses} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <Warehouses {...props} />;
            }}
          />
          <Route path="/inventories" component={Inventory} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
