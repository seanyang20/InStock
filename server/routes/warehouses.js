const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read Data from JSON
let warehouseData = [];

const getWarehouseData = () => {
  fs.readFile("./data/inventories.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    warehouseData = JSON.parse(data);
  });
};
// Return data from JSON
getWarehouseData();

// Router.get
router.get("/:warehouseId/inventories", (req, res) => {
  console.log("Inside Router /GET for getting inventories for given warehouse");

  // res.json(inventoriesData);
});

// Router.post
router.post("/", (req, res) => {
  if ((x = x)) {
    res.status(400).send("Input .... ");
  }
});

// module.exports = router;
module.exports = router;
