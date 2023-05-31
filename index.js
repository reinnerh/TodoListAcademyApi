/* IMPORTAÇÔES */
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const { userController } = require("./src/controllers/user");
const { itemsController } = require("./src/controllers/item");

// configure the app to use bodyParser()

/* SINCRONIZAÇÂO COM BANDCO DE DADOS */

/* (async () => {
  const database = require("./db");
  const Produto = require("./produto");
  
  try {
    const resultado = await database.sync();
    console.log("ok, funcionou");
    console.log(resultado);
  } catch (error) {
    console.log("err" + error);
  }
})(); */

//cria, editar, atualizar e deletar, receber da request e o que fazer

/* Abertura do servidor */

const port = 3333;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server running on port: ", port);
});

app.use(
  cors({
    origin: ["172.17.1.161", "http://localhost:5173"],
  })
);

/* MODEL - TABELAS  */

app.use("/user", userController);
app.use("/items", itemsController);
