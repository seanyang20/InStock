import "./InventoryList.scss";
import ItemCard from "../ItemCard/ItemCard";

export default function InventoryList({ inventoryList }) {
  return (
    <section className="inventory-list">
      <article className="inventory-list__head">
        <h1 className="inventory-list__head--title">Inventory</h1>
        <form className="inventory-list__form">
          <input
            name="search"
            placeholder="Search..."
            className="inventory-list__form--input"
          />
          <button className="inventory-list__form--button">Add New Item</button>
        </form>
      </article>
      <article>
        {inventoryList.map((item) => {
          <ItemCard key={item.id} item={item} />;
        })}
      </article>
    </section>
  );
}
