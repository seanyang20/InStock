import "./WarehouseInventoryList.scss";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";
import { useEffect, useState } from "react";
import InventoryList from "../InventoryList/InventoryList";
const apiUrl = "http://localhost:8080";

export default function WarehouseInventoryList(props) {
    // const [inventoryList, setInventoryList] = useState([]);
    

    // useEffect(() => {
        // axios.get(`${apiUrl}/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0/inventories`).then((res) => {
        //     console.log(res);
        //     // setInventoryList(res.data);
        //     // props.history.push("/warehouses");
        // });
      
      // }, []);
      axios.get(`${apiUrl}/selectedwarehouse/2922c286-16cd-4d43-ab98-c79f698aeab0`).then((res) => {
        console.log(res.data);
        // props.history.push("/warehouses");
     
    });


  const handleClick = (event) => {
    event.preventDefault();
    props.history.push("/warehouses");
  };

  // if (!inventoryList) return null;

  return (
    <article>
      {/* <section className="warehouse-details">
        <div className="warehouse-details__header">
          <img onClick={handleClick} src={arrow} alt="arrow" />
          <h1 className="warehouse-details__title">Warehouse Name Here</h1>
        </div>
      </section> */}
      {/* <InventoryList inventory={inventoryList}/> */}
    </article>
  );
}
