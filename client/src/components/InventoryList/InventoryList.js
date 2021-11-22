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
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">INVENTORY ITEM</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">CATEGORY</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
        </div>
        <div className="inventory-list__headers--right">
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">STATUS</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">QUANTITY</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">WAREHOUSE</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
        </div>
        <div className="inventory-list__headers--actions">
          <div className="inventory-list__headers--subsec">
            <p className="inventory-list__headers--txt">ACTIONS</p>
            <img
              className="inventory-list__headers--icon"
              src={sortIcon}
              alt=""
            />
          </div>
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
