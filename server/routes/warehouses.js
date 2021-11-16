const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read Data from JSON
let warehouseData = [];

const getWarehouseData = () => {
  fs.readFile("./data/warehouses.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    warehouseData = JSON.parse(data);
  });
};
// Return data from JSON
getWarehouseData();

// Router.get for all warehouses
router.get("/", (req, res) => {
  console.log("Inside Router Get for all warehouses");

  res.json(warehouseData);
});

// Router.get for getting a single warehouse 
router.get("/:warehouseId", (req, res) => {
  console.log("Inside Router Get for a specific warehouse");

  const singleWarehouse = warehouseData.find((warehouse) => {
    return warehouse.id === req.params.warehouseId;
})
// console.log(singleWarehouse);
if (singleWarehouse) {
    res.json(singleWarehouse);
} else {
    res.status(404).send("We can't find that warehouse.");
}
});


// Router.post
router.post("/", (req, res) => {
  if ((x = x)) {
    res.status(400).send("Input .... ");
  }
});

// module.exports = router;
module.exports = router;
