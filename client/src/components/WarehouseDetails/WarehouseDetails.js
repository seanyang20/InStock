import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import ItemCard from "../ItemCard/ItemCard";

const warehouse_API_URL = "http://localhost:8080";

export default function WarehouseDetails() {
  let location = useLocation();
  let path = location.pathname;

  const [warehouse, setWarehouse] = useState(null);
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    // axios call to get warehouse details of selected warehouse
    axios.get(`${warehouse_API_URL}${path}`).then((res) => {
      setWarehouse(res.data);
    });
    // axios call to get the inventory list of selected warehouse
    axios.get(`${warehouse_API_URL}${path}/inventories`).then((res) => {
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
      <article>
        {inventory.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </article>
    </section>
  );
}
