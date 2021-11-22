import "./AddInventory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import Select from "react-select";
import error from "../../assets/Icons/error-24px.svg";

const apiUrl = "http://localhost:8080";

export default function AddInventory() {
  const [warehouses, setWarehouses] = useState([]);
  const [allWarehouseData, setAllWarehouseData] = useState([]);
  const [inStock, setInStock] = useState(true);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [validation, setValidation] = useState({
    warehouseID: true,
    warehouseName: true,
    itemName: true,
    description: true,
    category: true,
    status: true,
    quantity: true,
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/warehouses`)
      .then((res) => {
        console.log(res.data);
        setAllWarehouseData(res.data);
        let warehouseArr = res.data.map((warehouse) => {
          const container = {};
          container.value = warehouse.name;
          container.label = warehouse.name;
          return container;
        });
        setWarehouses(warehouseArr);
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

  const handleWarehouseChange = (selectedWarehouse) => {
    setSelectedWarehouse(selectedWarehouse);
    console.log(selectedWarehouse);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { itemName, itemDescription, quantity } = event.target;
    const status = inStock ? "In Stock" : "Out of Stock";
    const updatedQuantity = inStock ? quantity.value : 0;
    console.log(allWarehouseData);

    const itemNameIsValid = itemName.value.length > 0;
    const itemDescriptionIsValid = itemDescription.value.length > 0;
    const quantityIsValid = updatedQuantity.length > 0;
    const warehouseIsValid = !!selectedWarehouse;
    const categoryIsValid = !!selectedCategory;
    const statusIsValid = status.length > 0;

    setValidation({
      warehouseName: warehouseIsValid,
      itemName: itemNameIsValid,
      description: itemDescriptionIsValid,
      category: categoryIsValid,
      status: statusIsValid,
      quantity: quantityIsValid,
    });

    if (
      !warehouseIsValid ||
      !itemNameIsValid ||
      !itemDescriptionIsValid ||
      !categoryIsValid ||
      !statusIsValid ||
      !quantityIsValid
    ) {
      console.log(validation);
      return;
    }

    const findWarehouse = allWarehouseData.find((warehouse) => {
      return warehouse.name === selectedWarehouse.value;
    });
    console.log(findWarehouse);

    const newInventory = {
      warehouseID: findWarehouse.id,
      warehouseName: selectedWarehouse.value,
      itemName: itemName.value,
      description: itemDescription.value,
      category: selectedCategory.value,
      status: status,
      quantity: updatedQuantity,
    };
    console.log(newInventory);
  };

  return (
    <article className="add-inventory">
      <section className="add-inventory__header">
        <img onClick="" src={arrow} alt="arrow" />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </section>
      <form onSubmit={handleSubmit} className="add-inventory__form">
        <section className="add-inventory__form-section">
          <h2 className="add-inventory__subtitle">Item details</h2>
          <label className="add-inventory__label">Item Name</label>
          <input
            type="text"
            className="add-inventory__details-name"
            placeholder="Item Name"
            name="itemName"
          ></input>
          {!validation.itemName && (
            <div className="add-inventory__input-error">
              <img
                src={error}
                alt="error icon"
                className="add-inventory__input-error-icon"
              />
              <span>This field is required</span>
            </div>
          )}
          <label className="add-inventory__label">Description</label>
          <textarea
            type="text"
            className="add-inventory__details-description"
            placeholder="Please enter a brief item description..."
            name="itemDescription"
          ></textarea>
          {!validation.description && (
            <div className="add-inventory__input-error">
              <img
                src={error}
                alt="error icon"
                className="add-inventory__input-error-icon"
              />
              <span>This field is required</span>
            </div>
          )}
          <label className="add-inventory__label">Category</label>
          <Select
            className="add-inventory__select"
            options={categoryOptions}
            placeholder="Please select"
            name="category"
            onChange={handleCategoryChange}
          />
          {!validation.category && (
            <div className="add-inventory__input-error">
              <img
                src={error}
                alt="error icon"
                className="add-inventory__input-error-icon"
              />
              <span>This field is required</span>
            </div>
          )}
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
                defaultChecked="checked"
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
            name="quantity"
          ></input>
          {!validation.quantity && inStock && (
            <div className="add-inventory__input-error">
              <img
                src={error}
                alt="error icon"
                className="add-inventory__input-error-icon"
              />
              <span>This field is required</span>
            </div>
          )}
          <label className="add-inventory__label">Warehouse</label>
          <Select
            className="add-inventory__select"
            options={warehouses}
            placeholder="Please select"
            name="warehouse"
            onChange={handleWarehouseChange}
          />
          {!validation.quantity && (
            <div className="add-inventory__input-error">
              <img
                src={error}
                alt="error icon"
                className="add-inventory__input-error-icon"
              />
              <span>This field is required</span>
            </div>
          )}
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
