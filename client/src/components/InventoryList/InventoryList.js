import "./InventoryList.scss";
import ItemCard from "../ItemCard/ItemCard";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
const apiUrl = "http://localhost:8080";

export default function InventoryList() {
  const [show, setShow] = useState(false);
  const [inventory, setInventory] = useState({});
  const [inventories, setInventories] = useState([]);

  const showModal = (id) => {
    const modalInventory = inventories.find((inventory) => {
      return inventory.id === id;
    });

    setInventory(modalInventory);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${apiUrl}/inventories/delete/${inventory.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/inventories`)
      .then((response) => {
        setInventories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inventories]);

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
            <Link
              to="/inventories/add"
              className="inventory-list__form--button"
            >
              + Add New Item
            </Link>
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
        {inventories.length !== 0 ? (
          inventories.map((inventory) => (
            <ItemCard
              key={inventory.id}
              inventory={inventory}
              showModal={showModal}
            />
          ))
        ) : (
          <p> Loading </p>
        )}
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
