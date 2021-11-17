import "./ItemCard.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

export default function ItemCard({ item }) {
  console.log(item);
  return (
    <article className="item-card">
      <div className="item-card__title-cont">
        <h6 className="item-card__subhead">INVENTORY ITEM</h6>
        <p className="item-card__value">{item.itemName}</p>
      </div>
      <div className="item-card__cat-cont">
        <h6 className="item-card__subhead">CATEGORY</h6>
        <p className="item-card__value">{item.category}</p>
      </div>
      <div className="item-card__stat-cont">
        <h6 className="item-card__subhead">STATUS</h6>
        <p className="item-card__value">{item.status}</p>
      </div>
      <div className="item-card__qty-cont">
        <h6 className="item-card__subhead">QTY</h6>
        <p className="item-card__value">{item.quantity}</p>
      </div>
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
