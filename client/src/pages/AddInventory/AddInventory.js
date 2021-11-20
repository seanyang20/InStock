import "./AddInventory.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import Select from "react-select";

export default function AddInventory() {
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
          <input className="add-inventory__details-name"></input>
          <label className="add-inventory__label">Description</label>
          <textarea className="add-inventory__details-description"></textarea>
          <label className="add-inventory__label">Category</label>
          <Select className="add-inventory__select" />
        </section>
        <section className="add-inventory__form-section">
          <h2 className="add-inventory__subtitle">Item Availability</h2>
          <h3 className="add-inventory__label">Status</h3>
          <input type="radio" className="add-inventory__radio"></input>
          <label className="add-inventory__radio-label">In stock</label>
          <input type="radio" className="add-inventory__radio"></input>
          <label className="add-inventory__radio-label">Out of Stock</label>
          <label className="add-inventory__label">Quantity</label>
          <input type="number" className="add-inventory__quantity"></input>
          <label className="add-inventory__label">Warehouse</label>
          <Select className="add-inventory__select" />
        </section>
        <section className="add-inventory__buttons">
          <button className="add-inventory__cancel">Cancel</button>
          <button className="add-inventory__add-button">+ Add Item</button>
        </section>
      </form>
    </article>
  );
}
