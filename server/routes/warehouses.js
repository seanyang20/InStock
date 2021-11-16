const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read Data from JSON
let warehousesData = [];

const getWarehouseData = () => {
  fs.readFile('./data/warehouses.json', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    warehousesData = JSON.parse(data);
  });
};

// Read data from JSON
getWarehouseData();

// Router.get
router.get("/", (_req, res) => {
  res.json(warehousesData);
});

// Router.post
router.post("/", (req, res) => {
  if ((x = x)) {
    res.status(400).send("Input .... ");
  }
});

module.exports = router;
