import "./ItemCard.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function ItemCard({ item }) {
  // conditional className based on status
  let statusClass = "item-card__value";
  if (item.status === "In Stock") {
    statusClass = "item-card__value item-card__value--instock";
  } else {
    statusClass = "item-card__value item-card__value--outstock";
  }

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleItemSelect = () => {};

  return (
    <article className="item-card">
      <section className="item-card__left">
        <div className="item-card__section">
          <h6 className="item-card__subhead">INVENTORY ITEM</h6>
          <p className="item-card__value--item" onClick={handleItemSelect}>
            {item.itemName}
            <img className="item-card__value--icon" src={chevron} />
          </p>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">CATEGORY</h6>
          <p className="item-card__value">{item.category}</p>
        </div>
      </section>
      <section className="item-card__right">
        <div className="item-card__section">
          <h6 className="item-card__subhead">STATUS</h6>
          <p className={statusClass}>{item.status}</p>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">QTY</h6>
          <p className="item-card__value">{item.quantity}</p>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">WAREHOUSE</h6>
          <p className="item-card__value">{item.warehouseName}</p>
        </div>
      </section>
      <section className="item-card__chg-cont">
        <div className="item-card__delete" onClick={handleDelete}></div>
        <div className="item-card__edit" onClick={handleEdit}></div>
      </section>
    </article>
  );
}
