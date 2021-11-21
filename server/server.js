const express = require("express");
const app = express();
const warehousesRoute = require("./routes/warehouses");
const inventoriesRoute = require("./routes/inventories");
const cors = require("cors");
const path = require("path");

require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));
        
app.use("/warehouses", warehousesRoute);
app.use("/inventories", inventoriesRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
