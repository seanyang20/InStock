import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";

const inventory_API_URL = "http://localhost:8080/inventories";

export default function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    axios.get(inventory_API_URL).then((res) => {
      setInventoryList(res.data);
    });
  }, []);

  if (!inventoryList) return null;

  return (
    <>
      <InventoryList inventory={inventoryList} />
    </>
  );
}
