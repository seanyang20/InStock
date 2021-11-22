import "./ItemDetails.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:8080";

export default function ItemDetails(props) {
  const [inventoryItem, setInventoryItem] = useState([]);
  const warehouseID = props.match.params.id;

  useEffect(() => {
    axios.get(`${apiUrl}/inventories/${warehouseID}`).then((res) => {
      setInventoryItem(res.data);
      console.log(inventoryItem);
    });
  }, []);

  // let statusClass = "item-details__value";
  // if (item.status === "In Stock") {
  //   statusClass = "item-details__value item-card__details--instock";
  // } else {
  //   statusClass = "item-details__value item-card__details--outstock";
  // }

  return (
    <section>
      <header>
        <img src={arrow} alt="arrow icon" />
        <h1>{inventoryItem.itemName}</h1>
        {/* info needs to load in from data, doing basic markup */}
        <img src={edit} alt="pencil in a circle" />
      </header>
      <section>
        <label>ITEM DESCRIPTION:</label>
        <p>{inventoryItem.description}</p>
        <label>CATEGORY:</label>
        <p>Electronics</p>
      </section>
      <section>
        <div>
          <label>STATUS:</label>
          <p className="item-details__value">{inventoryItem.status}</p>
        </div>
        <div>
          <label>QUANTITY:</label>
          <p>{inventoryItem.quantity}</p>
        </div>
      </section>
      <section>
        <div>
          <label>WAREHOUSE:</label>
          <p>{inventoryItem.warehouseName}</p>
        </div>
      </section>
    </section>
  );
}
