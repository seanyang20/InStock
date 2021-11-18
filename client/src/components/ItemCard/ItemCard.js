import "./ItemCard.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
// import itemIcon from "../../assets/Icons/chevron_right-24px.svg";

export default function ItemCard({ item }) {
  // conditional className based on status
  let statusClass = "item-card__value";
  if (item.status === "In Stock") {
    statusClass = "item-card__value item-card__value--instock";
  } else {
    statusClass = "item-card__value item-card__value--outstock";
  }

  return (
    <article className="item-card">
      <section className="item-card__info-section">
        <div className="item-card__info-section--left">
          <div className="item-card__title-cont">
            <h6 className="item-card__subhead">INVENTORY ITEM</h6>
            <p className="item-card__value--item">
              {item.itemName}
              {/* <img src={itemIcon} className="item-card__value--icon" alt="" /> */}
            </p>
          </div>
          <div className="item-card__cat-cont">
            <h6 className="item-card__subhead">CATEGORY</h6>
            <p className="item-card__value">{item.category}</p>
          </div>
        </div>
        <div className="item-card__info-section--right">
          <div className="item-card__stat-cont">
            <h6 className="item-card__subhead">STATUS</h6>
            <p className={statusClass}>{item.status}</p>
          </div>
          <div className="item-card__qty-cont">
            <h6 className="item-card__subhead">QTY</h6>
            <p className="item-card__value">{item.quantity}</p>
          </div>
          <div className="item-card__loc-cont">
            <h6 className="item-card__subhead">WAREHOUSE</h6>
            <p className="item-card__value">{item.warehouseName}</p>
          </div>
        </div>
      </section>
      <section className="item-card__chg-cont">
        <div className="item-card__delete-cont">
          <img
            className="item-card__delete-cont--icon"
            src={deleteIcon}
            alt="delete icon"
          />
        </div>
        <div className="item-card__edit-cont">
          <img
            className="item-card__edit-cont--icon"
            src={editIcon}
            alt="edit icon"
          />
        </div>
      </section>
    </article>
  );
}
