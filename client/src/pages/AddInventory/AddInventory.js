import "./AddInventory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import Select from "react-select";

const apiUrl = "http://localhost:8080";

export default function AddInventory() {
  const [warehouses, setWarehouses] = useState([]);
  const [inStock, setInStock] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}/warehouses`)
      .then((res) => {
        console.log("got warehouses");
        console.log(res.data);
        let warehouseArr = res.data.map((warehouse) => {
          const container = {};
          container.value = warehouse.name.toLowerCase();
          container.label = warehouse.name;
          return container;
        });
        console.log(warehouseArr);
        setWarehouses(warehouseArr);
        console.log(warehouses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRadioTrue = () => {
    setInStock(true);
    console.log(inStock);
  };

  const handleRadioFalse = () => {
    setInStock(false);
    console.log(inStock);
  };

  const categoryOptions = [
    { value: "accessories", label: "Accessories" },
    { value: "apparel", label: "Apparel" },
    { value: "electronics", label: "Electronics" },
    { value: "gear", label: "Gear" },
    { value: "health", label: "Health" },
  ];

  return (
    <article className="add-inventory">
      <section className="add-inventory__header">
        <img onClick="" src={arrow} alt="arrow" />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </section>
      <form className="add-inventory__form">
        <section className="add-inventory__form-section">
          <h2 className="add-inventory__subtitle">Item details</h2>
          <label className="add-inventory__label">Item Name</label>
          <input
            type="text"
            className="add-inventory__details-name"
            placeholder="Item Name"
          ></input>
          <label className="add-inventory__label">Description</label>
          <textarea
            type="text"
            className="add-inventory__details-description"
            placeholder="Please enter a brief item description..."
          ></textarea>
          <label className="add-inventory__label">Category</label>
          <Select
            className="add-inventory__select"
            options={categoryOptions}
            placeholder="Please select"
          />
        </section>
        <section className="add-inventory__form-section">
          <h2 className="add-inventory__subtitle">Item Availability</h2>
          <h4 className="add-inventory__label">Status</h4>
          <div className="add-inventory__radio-buttons">
            <div className="add-inventory__radio-button-container">
              <input
                name="status"
                type="radio"
                className="add-inventory__radio"
                onClick={handleRadioTrue}
              ></input>
              <label className="add-inventory__radio-label">In stock</label>
            </div>
            <div className="add-inventory__radio-button-container">
              <input
                name="status"
                type="radio"
                className="add-inventory__radio"
                onClick={handleRadioFalse}
              ></input>
              <label className="add-inventory__radio-label">Out of stock</label>
            </div>
          </div>
          <label
            className={`add-inventory__label ${
              !inStock && "add-inventory__label--hidden"
            }`}
          >
            Quantity
          </label>

          <input
            type="number"
            className={`add-inventory__quantity ${
              !inStock && "add-inventory__quantity--hidden"
            }`}
            placeholder="0"
          ></input>
          <label className="add-inventory__label">Warehouse</label>
          <Select
            className="add-inventory__select"
            options={warehouses}
            placeholder="Please select"
          />
        </section>
        <section className="add-inventory__buttons">
          <button className="add-inventory__cancel">Cancel</button>
          <button type="submit" className="add-inventory__add-button">
            + Add Item
          </button>
        </section>
      </form>
    </article>
  );
}
