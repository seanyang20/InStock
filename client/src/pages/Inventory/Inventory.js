import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import Modal from "../../components/DeleteModal/DeleteModal";

const inventory_API_URL = "http://localhost:8080/inventories";

export default function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);
  // inventory modal delete function
  const [show, setShow] = useState(false);

  const [inventory, setInventory] = useState({});
  const showModal = (id) => {
    const modalInventory = inventoryList.find((inventory) => {
      return inventory.id === id;
    });

    setInventory(modalInventory);
    console.log(inventory);
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

  useEffect(() => {
    axios.get(inventory_API_URL).then((res) => {
      setInventoryList(res.data);
    });
  }, []);

  if (!inventoryList) return null;

  return (
    <>
      <InventoryList inventory={inventoryList} showModal={showModal} />
      <Modal
        show={show}
        handleClose={hideModal}
        inventory={inventory}
        handleDelete={handleDelete}
      >
        <p>Modal</p>
      </Modal>
    </>
  );
}
