import "./ItemCard.scss";

export default function ItemCard() {
  return (
    <article className="item-card">
      <div className="item-card__title-cont">
        <h4 className="item-card__item-title">Inventory Item</h4>
        <p className="item-card__item">Television</p>
      </div>
      <div className="item-card__cat-cont">
        <h4 className="item-card__cat-title">Category</h4>
        <p className="item-card__cat">Electronics</p>
      </div>
      <div className="item-card__stat-cont">
        <h4 className="item-card__stat-title">STATUS</h4>
        <p className="item-card__stat">IN STOCK</p>
      </div>
      <div className="item-card__qty-cont">
        <h4 className="item-card__qty-title">QTY</h4>
        <p className="item-card__qty">500</p>
      </div>
      <section className="item-card__chg-cont">
        <div className="item-card__delete-cont">
          <img className="item-card__delete-cont--icon" alt="delete icon" />
        </div>
        <div className="item-card__edit-cont">
          <img className="item-card__edit-cont--icon" alt="edit icon" />
        </div>
      </section>
    </article>
  );
}
