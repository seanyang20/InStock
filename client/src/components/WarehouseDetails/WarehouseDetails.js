import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const warehouse_API_URL = "http://localhost:8080/warehouses/";

export default function WarehouseDetails() {
  const warehouseID = "2922c286-16cd-4d43-ab98-c79f698aeab0";
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    axios.get(warehouse_API_URL + warehouseID).then((res) => {
      setWarehouse(res.data);
    });
  }, []);

  if (!warehouse) return null;

  console.log(warehouse);

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
    </section>
  );
}
