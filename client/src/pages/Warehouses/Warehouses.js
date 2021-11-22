import "./Warehouses.scss";
<<<<<<< HEAD
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
=======
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/DeleteModal/DeleteModal";
const apiUrl = "http://localhost:8080";

export default function Warehouses(props) {
  const [warehouses, setWarehouses] = useState([]);
  const [show, setShow] = useState(false);
  //   let warehouse = {};
  const [warehouse, setWarehouse] = useState({});
  const showModal = (id) => {
    const modalWarehouse = warehouses.find((warehouse) => {
      return warehouse.id === id;
    });

    // warehouse = modalWarehouse;
    setWarehouse(modalWarehouse);
    console.log(warehouse);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleDelete = () => {
    console.log(warehouse);
    axios
      .delete(`${apiUrl}/warehouses`, warehouse)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/warehouses`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouses__container">
        <div className="warehouses__header">
          <h1 className="warehouses__title">Warehouses</h1>
          <div className="warehouses__header-actions">
            <input className="warehouses__search" placeholder="Search..." />
            <button className="warehouses__button">+ Add New Warehouse</button>
          </div>
        </div>
        {warehouses.map((warehouse, index) => (
          <WarehouseListItem
            key={index}
            warehouse={warehouse}
            showModal={showModal}
          />
        ))}
        <Modal
          show={show}
          handleClose={hideModal}
          warehouse={warehouse}
          handleDelete={handleDelete}
        >
          <p>Modal</p>
        </Modal>
      </div>
    </div>
>>>>>>> develop
  );
}
