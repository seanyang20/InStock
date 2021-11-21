const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

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

//write data to json
const writeWareHouseData = (data) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/warehouses.json"),
    JSON.stringify(data)
  );
};

// Router.post
router.post("/add", (req, res) => {
  const { name, address, city, country, contactName, position, phone, email } =
    req.body;

  const nameIsValid = name.length > 0;
  const addressIsValid = address.length > 0;
  const cityIsValid = city.length > 0;
  const countryIsValid = country.length > 0;
  const contactNameIsValid = contactName.length > 0;
  const positionIsValid = position.length > 0;
  const phoneIsValid = !!phone.match(
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
  );
  const emailIsValid = !!email.match(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  );

  if (
    !nameIsValid ||
    !addressIsValid ||
    !cityIsValid ||
    !countryIsValid ||
    !contactNameIsValid ||
    !positionIsValid ||
    !phoneIsValid ||
    !emailIsValid
  ) {
    res
      .status(400)
      .send("One or more form input values is missing or invalid.");
  }
  const newWarehouse = {
    id: uuid.v4(),
    name: name,
    address: address,
    city: city,
    country: country,
    contact: {
      name: contactName,
      position: position,
      phone: phone,
      email: email,
    },
  };
  warehouseData.push(newWarehouse);
  writeWareHouseData(warehouseData);

  res.json(newWarehouse);
});

module.exports = router;
