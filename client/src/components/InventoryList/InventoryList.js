import "./InventoryList.scss";
import ItemCard from "../ItemCard/ItemCard";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
const inventory_API_URL = "http://localhost:8080/inventories";

export default function InventoryList({ inventory }) {
  console.log(inventory);

  // inventory modal delete function
  const [show, setShow] = useState(false);
  // const [inventoryItem, setInventoryItem] = useState({});
  const [item, setItem] = useState({});
  const showModal = (id) => {
    const modalInventory = inventory.find((inventoryItem) => {
      return inventory.id === inventoryItem.id;
    });
    setItem(modalInventory);

    console.log(item);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleDelete = () => {
    console.log(inventory);
    axios
      .delete(`${inventory_API_URL}/:inventoryId`, inventory)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <button className="inventory-list__form--button">
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
        {inventory.length !== 0 ? (
          inventory.map((item) => (
            <ItemCard key={item.id} item={item} showModal={showModal} />
          ))
        ) : (
          <p> Loading </p>
        )}
        <Modal
          show={show}
          handleClose={hideModal}
          item={item}
          handleDelete={handleDelete}
        >
          <p>Modal</p>
        </Modal>
      </article>
    </section>
  );
}
