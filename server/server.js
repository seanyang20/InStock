const express = require("express");

const path = require("path");
const warehousesRoute = require("./routes/warehouses");
const inventoriesRoute = require("./routes/inventories");
const cors = require("cors");
const { PORT, BACKEND_URL } = process.env;

// init the express app in order to use express methods
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.use("/warehouses", warehousesRoute);
app.use("/inventories", inventoriesRoute);

app.listen(8080, () => {
  console.log(`Port ${PORT}`);
});
