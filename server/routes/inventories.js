const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read Data from JSON
let inventoryData = [];

const getInventoryData = () => {
  fs.readFile("./data/inventories.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    inventoryData = JSON.parse(data);
  });
};
// Return data from JSON
getInventoryData();

router.get("/inventories", (req, res) => {
  console.log("Inside Router /Get for all inventory");
  res.json(inventoryData);
});

router.get("/warehouses/:warehouseId/inventories", (req, res) => {
  console.log("Inside Router /GET for getting inventories for given warehouse");

  const warehouseId = req.params.warehouseId;
  console.log(warehouseId);

  const warehouseInv = inventoryData.filter(
    (inventory) =>
      // console.log(inventory, "TESTING")
      inventory.warehouseID === warehouseId
  );
  console.log(warehouseInv);
  // res.json(inventoriesData);
});

// module.exports = router;
module.exports = router;
