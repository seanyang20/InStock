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
      <section>
        <h2>Item details</h2>
        <label>Item Name</label>
        <input></input>
        <label>Description</label>
        <textarea></textarea>
        <label>Category</label>
        <Select />
      </section>
      <section>
        <h2>Item Availability</h2>
        <h3>Status</h3>
        <input type="radio"></input>
        <label>In stock</label>
        <input type="radio"></input>
        <label>Out of Stock</label>
        <label>Quantity</label>
        <input type="number"></input>
        <label>Warehouse</label>
        <Select />
      </section>
      <section>
        <button>Cancel</button>
        <button>+ Add Item</button>
      </section>
    </article>
  );
}
