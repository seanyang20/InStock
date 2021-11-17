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


router.put("/inventories/:inventoryId", (req, res) => {
  console.log("Inside ROUTER PUT to edit an inventory item");
  const inventoryId = req.params.inventoryId
  // console.log(inventoryId);           // requested inventory id
  const selectedInventory = inventoryData.find(
      (inventory) => 
      // console.log(video, "TESTING")
      inventory.id === inventoryId
      )
  // console.log(selectedInventory);      // returned selected inventory

// To test in Postman
// {
//   "itemName": "Television",
//   "warehouseName": "Manhattan",
//   "description": "This 50, 4K LED TV provides a crystal-clear picture and vivid colors.",
//   "category": "Electronics",
//   "status": "In Stock"
// }
            
const { itemName, warehouseName, description, category, status } =
req.body;

// to enable editing of these properties on the front-end
const itemNameIsValid = itemName.length > 0;
const warehouseNameIsValid = warehouseName.length > 0;
const descriptionIsValid = description.length > 0;
const categoryIsValid = category.length > 0;
const statusIsValid = status.length > 0;

// to enable editing of these properties on the front-end
// selectedInventory.itemName = req.body.itemName;
// selectedInventory.warehouseName = req.body.warehouseName;
// selectedInventory.description = req.body.description;
// selectedInventory.category = req.body.category;
// selectedInventory.status = req.body.status;
if (
  !itemNameIsValid ||
  !warehouseNameIsValid ||
  !descriptionIsValid ||
  !categoryIsValid||
  !statusIsValid
) {
  res
    .status(400)
    .send("One or more form input values is missing or invalid.");
}

// to enable editing of these properties on the front-end
selectedInventory.itemName = itemName;
selectedInventory.warehouseName = warehouseName;
selectedInventory.description = description;
selectedInventory.category = category;
selectedInventory.status = status;

// to replace the old inventory item with the edited version in the array
  inventoryData.map((invInArray) => {
      if (invInArray.id === selectedInventory.id){
          return invInArray = selectedInventory
      }
  })
  // console.log(inventoryData);;
  // to send edited data to endpoint
  // res.json(inventoryData);
  // to update the inventories.json file 
  fs.writeFile('./data/inventories.json', 
  JSON.stringify(inventoryData), (err) => {
      if (err) {
          res.status(500).send(err);
      }
      console.log("File written successfully!");
      res.status(201).json(inventoryData);
  })
})

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
