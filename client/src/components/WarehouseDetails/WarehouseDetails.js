import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import WarehouseItemCard from "../WarehouseItemCard/WarehouseItemCard";
import sortIcon from "../../assets/icons/sort-24px.svg";
const apiUrl = "http://localhost:8080";

export default function WarehouseDetails(props) {
  const [warehouse, setWarehouse] = useState(null);
  const [inventory, setInventory] = useState([]);
  const warehouseID = props.match.params.id;

  useEffect(() => {
    // axios call to get warehouse details of selected warehouse
    axios.get(`${apiUrl}/warehouses/${warehouseID}`).then((res) => {
      setWarehouse(res.data);
    });
    // axios call to get the inventory list of selected warehouse
    axios.get(`${apiUrl}/warehouses/${warehouseID}/inventories`).then((res) => {
      setInventory(res.data);
    });
  }, []);

  if (!warehouse) return null;

  return (
    <section className="warehouse-details">
      <article className="head">
        <div className="head__back">
          <img className="head__back--icon" src={backIcon} alt="back icon" />
        </div>
        <h1 className="head__title">{warehouse.name}</h1>
        <div className="head__edit">
          <img className="head__edit--icon" src={editIcon} alt="edit icon" />
          <p className="head__edit--txt">Edit</p>
        </div>
      </article>
      <article className="details">
        <div className="details__address-cont">
          <h6 className="details__subhead">WAREHOUSE ADDRESS:</h6>
          <p className="details__value">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="details__contact-cont">
          <div className="details__name-cont">
            <h6 className="details__subhead">CONTACT NAME:</h6>
            <p className="details__value">{warehouse.contact.name}</p>
            <p className="details__value">{warehouse.contact.position}</p>
          </div>
          <div className="details__info-cont">
            <h6 className="details__subhead">CONTACT INFORMATION:</h6>
            <p className="details__value">{warehouse.contact.phone}</p>
            <p className="details__value">{warehouse.contact.email}</p>
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
          <WarehouseItemCard key={item.id} item={item} />
        ))}
      </article>
    </section>
  );
}
