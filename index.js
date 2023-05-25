/* IMPORTAÇÔES */
const express = require("express");
const cors = require("cors");

const bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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
  let response = "Hello World! :) Leozinho";
  res.send({ response });
});

/* READ ENDPOINT */

app.get("/todoList", function (req, res) {
  res.send({ todoList });
});


/* POST ENDPOINT */
app.post("/add", (req, res) => {
  const { body } = req
  todoList.push(body)

  res.status(201).json({result:"success"})
})


/* UPDATE ENDPOINT */
app.put("/edit/:id", (req, res) => {
  const { id } = req.params
  const { body } = req

  todoList[id] = body

  res.status(201).json({result:"success"})
})


/* DELETE ENDPOINT */
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params

  todoList.splice(id, 1)
  console.log("id deletado: ",id)

  res.status(201).json({result:"success"})
})


