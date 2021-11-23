import "./ItemCard.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

export default function ItemCard({ inventory, showModal }) {
  // conditional className based on status
  let statusClass = "item-card__value";
  if (inventory.status === "In Stock") {
    statusClass = "item-card__value item-card__value--instock";
  } else {
    statusClass = "item-card__value item-card__value--outstock";
  }

  const handleDelete = () => {
    showModal(inventory.id);
  };

  return (
    <article className="item-card">
      <section className="item-card__left">
        <div className="item-card__section">
          <h6 className="item-card__subhead">INVENTORY ITEM</h6>
          <div className="item-card__subsec">
            <Link to={`/inventories/${inventory.id}`}>
              <p className="item-card__value--item">{inventory.itemName}</p>
            </Link>
            <img className="item-card__value--icon" src={chevron} alt="" />
          </div>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">CATEGORY</h6>
          <p className="item-card__value">{inventory.category}</p>
        </div>
      </section>
      <section className="item-card__right">
        <div className="item-card__section">
          <h6 className="item-card__subhead">STATUS</h6>
          <p className={statusClass}>{inventory.status}</p>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">QTY</h6>
          <p className="item-card__value">{inventory.quantity}</p>
        </div>
        <div className="item-card__section">
          <h6 className="item-card__subhead">WAREHOUSE</h6>
          <p className="item-card__value">{inventory.warehouseName}</p>
        </div>
      </section>
      <section className="item-card__chg-cont">
        <div className="item-card__delete" onClick={handleDelete}></div>

        <Link
          to={`/inventories/edit/${inventory.id}`}
          className="item-card__edit"
        >
          <div className="item-card__edit"></div>
        </Link>
      </section>
    </article>
  );
}
