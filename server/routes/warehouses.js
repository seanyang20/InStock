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

// Retrive data for all warehouses
router.get("/", (_req, res) => {
  res.json(warehousesData);
});

// Retrive data for one warehouse
router.get("/:id", (req, res) => {
  let warehouse = warehousesData.find((warehouse) => {
    return warehouse.id === req.params.id
  })

  if(warehouse)
    res.json(warehouse);
  else
    res.status(404).send('Warehouse with that ID was not found')
});

// Edit a specific warehouse's details
router.put("/:id", (req, res) => {
  let warehouse = warehousesData.find((warehouse) => {
    return warehouse.id === req.params.id
  })

  if(warehouse) {
    const { name, address, city, country, contact } = req.body
    warehouse.name = name
    warehouse.address = address
    warehouse.city = city
    warehouse.country = country
    warehouse.contact = contact

    fs.writeFile('./data/warehouses.json', JSON.stringify(warehousesData), (err) => {
      if(err)
        res.status(500).send(err)
      
        console.log('Warehouse updated successfully')
        res.status(201).send(warehouse)
    })
  }
  else
    res.status(404).send('Warehouse with that ID was not found')
})

// Router.post
router.post("/", (req, res) => {
  if ((x = x)) {
    res.status(400).send("Input .... ");
  }
});

module.exports = router;
