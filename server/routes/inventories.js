const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid");

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

router.get("/inventories", (_req, res) => {
  res.json(inventoryData);
});

router.get("/inventories/:inventoryId", (req, res) => {
  console.log(req.params.inventoryId);
  const singleInventory = inventoryData.find((inventory) => {
    return inventory.id === req.params.inventoryId;
  });

  if (singleInventory) {
    res.json(singleInventory);
  } else {
    res.status(404).send("We can't find that inventory item.");
  }
});

router.put("/inventories/edit/:inventoryId", (req, res) => {
  const inventoryId = req.params.inventoryId;

  const selectedInventory = inventoryData.find(
    (inventory) => inventory.id === inventoryId
  );

  const { itemName, warehouseName, description, category, status, quantity } =
    req.body;

  // to enable editing of these properties on the front-end
  const itemNameIsValid = itemName.length > 0;
  const warehouseNameIsValid = warehouseName.length > 0;
  const descriptionIsValid = description.length > 0;
  const categoryIsValid = category.length > 0;
  const statusIsValid = status.length > 0;

  if (
    !itemNameIsValid ||
    !warehouseNameIsValid ||
    !descriptionIsValid ||
    !categoryIsValid ||
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
  selectedInventory.quantity = quantity;

  // to replace the old inventory item with the edited version in the array
  inventoryData.map((invInArray) => {
    if (invInArray.id === selectedInventory.id) {
      return (invInArray = selectedInventory);
    }
  });

  fs.writeFile(
    "./data/inventories.json",
    JSON.stringify(inventoryData),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log("File written successfully!");
      res.status(201).json(inventoryData);
    }
  );
});

router.get("/warehouses/:warehouseId/inventories", (req, res) => {
  console.log("Inside Router /GET for getting inventories for given warehouse");

  const warehouseId = req.params.warehouseId;
  console.log(warehouseId);

  const warehouseInv = inventoryData.filter(
    (inventory) => inventory.warehouseID === warehouseId
  );

  res.json(warehouseInv);
});

// post request for adding new inventory item
router.post("/warehouses/:warehouseId/inventories", (req, res) => {
  const { itemName, warehouseName, description, category, status, quantity } =
    req.body;

  const warehouseID = req.params.warehouseId;

  //check if warehouse Id matches the selected warehouse
  const findWarehouse = inventoryData.find(
    (inventory) => inventory.warehouseID === warehouseID
  );

  if (findWarehouse.warehouseName !== warehouseName) {
    res.status(400).send("Warehouse ID does not match selected warehouse.");
  }

  if (
    !itemName ||
    !warehouseName ||
    !description ||
    !category ||
    !status ||
    !quantity
  ) {
    res.status(400).send("One or more form values is missing or invalid.");
  }

  const newInventory = {
    id: uuid.v4(),
    warehouseID: warehouseID,
    warehouseName: warehouseName,
    itemName: itemName,
    description: description,
    category: category,
    status: status,
    quantity: quantity,
  };

  inventoryData.push(newInventory);
  fs.writeFile(
    "./data/inventories.json",
    JSON.stringify(inventoryData),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log("File written successfully!");
      res.status(201).json(inventoryData);
    }
  );

  res.json(newInventory);
});

// Delete specific inventory item
router.delete("/inventories/delete/:id", (req, res) => {
  const inventoryItem = inventoryData.find((item) => {
    return item.id === req.params.id;
  });

  console.log(inventoryItem);

  if (inventoryItem) {
    inventoryData.splice(inventoryData.indexOf(inventoryItem), 1);

    fs.writeFile(
      "./data/inventories.json",
      JSON.stringify(inventoryData),
      (err) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(inventoryData);
      }
    );
  } else {
    res.status(404).send("Item not found.");
  }
});

module.exports = router;
