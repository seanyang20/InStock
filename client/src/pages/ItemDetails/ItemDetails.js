import "./ItemDetails.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

export default function ItemDetails() {
  // let statusClass = "item-details__value";
  // if (item.status === "In Stock") {
  //   statusClass = "item-details__value item-card__details--instock";
  // } else {
  //   statusClass = "item-details__value item-card__details--outstock";
  // }

  return (
    <section>
      <header>
        <img src={arrow} alt="arrow icon" />
        <h1>Television</h1>
        {/* info needs to load in from data, doing basic markup */}
        <img src={edit} alt="pencil in a circle" />
      </header>
      <section>
        <label>ITEM DESCRIPTION:</label>
        <p>This is the description of this item! it is a product we sell</p>
        <label>CATEGORY:</label>
        <p>Electronics</p>
      </section>
      <section>
        <div>
          <label>STATUS:</label>
          <p className="item-details__value">Electronics</p>
        </div>
        <div>
          <label>QUANTITY:</label>
          <p>700</p>
        </div>
      </section>
      <section>
        <div>
          <label>WAREHOUSE:</label>
          <p>Manhattan</p>
        </div>
      </section>
    </section>
  );
}
