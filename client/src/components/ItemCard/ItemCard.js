import "./ItemCard.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
// import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
// import itemIcon from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function ItemCard({ item }) {
  // conditional className based on status
  let statusClass = "item-card__value";
  if (item.status === "In Stock") {
    statusClass = "item-card__value item-card__value--instock";
  } else {
    statusClass = "item-card__value item-card__value--outstock";
  }

  const handleDelete = () => {};

  const handleItemSelect = () => {};

  return (
    <article className="item-card">
      <section className="item-card__left">
        <div className="item-card__section">
          <h6 className="item-card__subhead">INVENTORY ITEM</h6>
          <div className="item-card__subsec">
            <p className="item-card__value--item" onClick={handleItemSelect}>
              {item.itemName}
            </p>
            <img className="item-card__value--icon" src={chevron} alt="" />
          </div>
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
        <Link to={`/inventories/edit/${item.id}`}>
          <div className="item-card__edit"></div>
        </Link>
      </section>
    </article>
  );
}
