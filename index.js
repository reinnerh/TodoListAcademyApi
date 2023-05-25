/* IMPORTAÇÔES */
const express = require("express");
const cors = require("cors");

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

const app = express();
const port = 3333;

app.listen(port, () => {
  console.log("Server running on port: ", port);
});

/* CORS */
/* const options = {
    origin: "mascara do ip da empresa"
} */

//app.use(cors()); Libera todos os CORS
app.use(cors({
  origin: "172.17.1.161" 
}));


/* MODEL - TABELAS  */

const todoList = [
  {
    id: 1,
    titulo: "",
    descricao: "",
    dataFinal: "",
    dataCriacao: "",
    autor: "",
    status: "",
  },
];
const user = [
  {
    id: "",
    name: "",
    pass: "",
  },
];

/* END POONTS */

app.get("/", function (req, res) {
  let response = "Hello World! :)";
  res.send({ response });
});

app.get("/todoList", function (req, res) {
  res.send({ todoList });
});

app.post("/Add", (req, res) => {
  todoList.push(req)
  res.send(202)
})
