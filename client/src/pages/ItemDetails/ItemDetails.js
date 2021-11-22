import "./ItemDetails.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:8080";

export default function ItemDetails(props) {
  const [inventoryItem, setInventoryItem] = useState([]);
  const warehouseID = props.match.params.id;

  useEffect(() => {
    axios.get(`${apiUrl}/inventories/${warehouseID}`).then((res) => {
      setInventoryItem(res.data);
    });
  }, []);

  let statusClass = "item-details__value";
  if (inventoryItem.status === "In Stock") {
    statusClass = "item-details__value item-details__value--instock";
  } else {
    statusClass = "item-details__value item-details__value--outstock";
  }

  return (
    <section className="item-details">
      <header className="item-details__header">
        <div className="item-details__title-container">
          <img src={arrow} alt="arrow icon" />
          <h1 className="item-details__title">{inventoryItem.itemName}</h1>
        </div>
        <Link to={`/inventories/edit/${inventoryItem.id}`}>
          <div className="item-details__edit">
            <img
              className="item-details__edit-icon"
              src={edit}
              alt="pencil in a circle"
            />
            <p className="item-details__edit-text">Edit</p>
          </div>
        </Link>
      </header>
      <article className="item-details__info-container">
        <section className="item-details__top-section">
          <div>
            <label className="item-details__label">ITEM DESCRIPTION:</label>
            <p className="item-details__text">{inventoryItem.description}</p>
          </div>
          <div>
            <label className="item-details__label">CATEGORY:</label>
            <p className="item-details__text">Electronics</p>
          </div>
        </section>
        <div className="item-details__flex-right">
          <section className="item-details__middle-section">
            <div className="item-details__status">
              <label className="item-details__label">STATUS:</label>
              <p className={statusClass}>{inventoryItem.status}</p>
            </div>
            <div className="item-details__quantity">
              <label className="item-details__label">QUANTITY:</label>
              <p className="item-details__text">{inventoryItem.quantity}</p>
            </div>
          </section>
          <section className="item-details__bottom-section">
            <div>
              <label className="item-details__label">WAREHOUSE:</label>
              <p className="item-details__text">
                {inventoryItem.warehouseName}
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
