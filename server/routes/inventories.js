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

router.get("/inventories/:inventoryId", (req, res) => {
  console.log("Inside Router /Get for a single inventory item");

  console.log(req.params.inventoryId);
  const singleInventory = inventoryData.find((inventory) => {
    return inventory.id === req.params.inventoryId;
})
// console.log(singleInventory);
if (singleInventory) {
    res.json(singleInventory);
} else {
    res.status(404).send("We can't find that inventory item.");
}

});

// router.get("/selectedwarehouse", (req, res) => {
//   console.log("Inside Router /Get for all inventory");
//   res.json(inventoryData);
// });

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

  if (warehouseInv) {
    res.json(warehouseInv);
} else {
    res.status(404).send("We can't find that warehouse.");
}
  
});

// module.exports = router;
module.exports = router;
