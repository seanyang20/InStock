import "./SelectedWarehouse.scss";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";
import { useEffect, useState } from "react";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import ItemCard from "../../components/ItemCard/ItemCard";
import InventoryList from "../../components/InventoryList/InventoryList";

const apiUrl = "http://localhost:8080";

export default function SelectedWarehouse({inventoryList}) {
//     const [inventoryList, setInventoryList] = useState([]);
    console.log(inventoryList);

    // useEffect(() => {
    //     axios.get(`${apiUrl}/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0`).then((res) => {
    //         console.log(res);
    //         // props.history.push("/warehouses");
    //     });
      
    //   }, []);
        //  axios.get(`${apiUrl}/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0`).then((res) => {
        //         console.log(res.data);
        //         // props.history.push("/warehouses");
             
        //     });


            // axios.get(`${apiUrl}/selectedwarehouse`).then((res) => {
            //     console.log(res.data);
            //     // props.history.push("/warehouses");
             
            // });

            // axios.get(`${apiUrl}/selectedwarehouse/2922c286-16cd-4d43-ab98-c79f698aeab0`).then((res) => {
            //     console.log(res.data);
            //     // props.history.push("/warehouses");
             
            // });
            
         

//   const handleClick = (event) => {
//     event.preventDefault();
//     props.history.push("/warehouses");
//   };

//   if (!inventoryList) return null;

  return (
      <>
    {/* <WarehouseInventoryList /> */}
   
    <InventoryList inventory={inventoryList}/>

    </>
  );
}
