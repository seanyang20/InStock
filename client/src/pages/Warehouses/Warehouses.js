import { Component } from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

export default class Warehouses extends Component {
  render() {
    return (
      <main>
        {/* <div className="warehouse__heading">
          <figure className="warehouse__backarrow"></figure>
          <div className="warehouse__title"></div>
          <button className="warehouse__edit-button"></button>
        </div> */}
        <WarehouseDetails />
      </main>
    );
  }
}
