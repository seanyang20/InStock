const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

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
  });
  // console.log(singleWarehouse);
  if (singleWarehouse) {
    res.json(singleWarehouse);
  } else {
    res.status(404).send("We can't find that warehouse.");
  }
});

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
    id: "placeholder", //uuid
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

// module.exports = router;
module.exports = router;
