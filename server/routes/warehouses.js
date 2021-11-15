const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read Data from JSON
let warehouseData = [];

const getWarehouseData = () => {
  fs.readFile("insert file path", (err, data) => {
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
router.get("/", (req, res) => {
  res.json(inventoriesData);
});

// Router.post
router.post("/", (req, res) => {
  if ((x = x)) {
    res.status(400).send("Input .... ");
  }
});

// module.exports = router;
module.exports = router;
