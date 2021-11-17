import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/inventories").then((res) => {
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
