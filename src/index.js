/* IMPORTAÇÔES */
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { db } = require("./core/database");

const bodyParser = require("body-parser");
const { userController } = require("./controllers/user");
const { itemsController } = require("./controllers/item");

const port = 3333;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["172.17.1.161", "http://localhost:5173"],
  })
);

/* MODEL - TABELAS  */

app.use("/user", userController);
app.use("/items", itemsController);

app.listen(port, async () => {
  console.log("Server running on port: ", port);
});
