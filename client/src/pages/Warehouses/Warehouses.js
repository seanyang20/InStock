import "./Warehouses.scss";
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/DeleteModal/DeleteModal";
import { Link } from "react-router-dom";
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
      .delete(`${apiUrl}/warehouses/delete/${warehouse.id}`)
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
  }, [warehouses]);

  return (
    <div className="warehouses">
      <div className="warehouses__container">
        <div className="warehouses__header">
          <h1 className="warehouses__title">Warehouses</h1>
          <div className="warehouses__header-actions">
            <input className="warehouses__search" placeholder="Search..." />
            <Link to={`/warehouses/add`} className="warehouses__button">
              + Add New Warehouse
            </Link>
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
  );
}
