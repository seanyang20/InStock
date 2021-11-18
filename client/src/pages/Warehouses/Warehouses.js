import "./Warehouses.scss";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";
import { useEffect, useState } from "react";
import SelectedWarehouse from "../SelectedWarehouse/SelectedWarehouse";

const apiUrl = "http://localhost:8080";

export default function Warehouse(props) {
    const [selectedWarehouse, setselectedWarehouse] = useState([]);
    

    useEffect(() => {
        // axios.get(`${apiUrl}/warehouses`).then((res) => {
        //     console.log(res.data);
        //     // props.history.push("/warehouses");
        
        // });
      
        // axios.get(`${apiUrl}/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0`).then((res) => {
        //     console.log(res.data);
        //     // props.history.push("/warehouses");
         
        // });

        axios.get(`${apiUrl}/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0/inventories`).then((res) => {
            console.log(res.data);
            // props.history.push("/warehouses");
            setselectedWarehouse(res.data);
        });
      }, []);


  

  const handleClick = (event) => {
    event.preventDefault();
    // props.history.push("/warehouses");
  };

  if (!selectedWarehouse) return null;

  return (
    <>
    <SelectedWarehouse inventoryList={selectedWarehouse}/>
    </>
  );
}
