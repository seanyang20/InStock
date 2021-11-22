import "./InventoryList.scss";
import ItemCard from "../ItemCard/ItemCard";
import sortIcon from "../../assets/icons/sort-24px.svg";

export default function InventoryList({ inventory, browseProps }) {
  const handleAdd = (event) => {
    event.preventDefault();
    // browseProps.history.push("/inventories/add");
  };

  return (
    <section className="inventory-list">
      <article className="inventory-list__head">
        <h1 className="inventory-list__head--title">Inventory</h1>
        <div className="inventory-list__form-cont">
          <div className="inventory-list__form">
            <input
              placeholder="Search..."
              className="inventory-list__form--input"
            />
            <button
              className="inventory-list__form--button"
              onClick={handleAdd}
            >
              Add New Item
            </button>
          </div>
        </div>
      </article>
      <article className="inventory-list__headers">
        <div className="inventory-list__headers--left">
          <p className="inventory-list__headers--txt">
            INVENTORY ITEM{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
          <p className="inventory-list__headers--txt">
            CATEGORY{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
        </div>
        <div className="inventory-list__headers--right">
          <p className="inventory-list__headers--txt">
            STATUS{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
          <p className="inventory-list__headers--txt">
            QUANTITY{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
          <p className="inventory-list__headers--txt">
            WAREHOUSE{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
        </div>
        <div className="inventory-list__headers--actions">
          <p className="inventory-list__headers--txt">
            ACTIONS{" "}
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </p>
        </div>
      </article>
      <article>
        {inventory.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </article>
    </section>
  );
}
