import "./InventoryList.scss";
import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
const inventory_API_URL = "http://localhost:8080/inventories";

export default function InventoryList({ inventory }) {
  // inventory modal delete function
  const [show, setShow] = useState(false);
  // const [inventoryItem, setInventoryItem] = useState({});
  const showModal = (id) => {
    const modalInventory = inventory.find((inventoryItem) => {
      return inventory.id === inventoryItem.id;
    });

    // setInventory(modalInventory);
    console.log(modalInventory);
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
        <form className="inventory-list__form">
          <input
            name="search"
            placeholder="Search..."
            className="inventory-list__form--input"
          />
          <button className="inventory-list__form--button">Add New Item</button>
        </form>
      </article>
      <article>
        {inventory.map((item) => (
          <ItemCard key={item.id} item={item} showModal={showModal} />
        ))}
        <Modal
          show={show}
          handleClose={hideModal}
          inventory={inventory}
          handleDelete={handleDelete}
        >
          <p>Modal</p>
        </Modal>
      </article>
    </section>
  );
}
