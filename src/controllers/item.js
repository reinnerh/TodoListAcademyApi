const { Router } = require("express");
const { ItemsService } = require("../services/items");
const itemsController = Router();
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

itemsController.get("/", function (req, res) {
  const items = ItemsService.findAll();
  res.status(200).json({ data: items });
});
itemsController.post("/", function (req, res) {
  const { body } = req;
  todoList.push(body);
  res.status(201).json({ result: "success" });
});

itemsController.get("/:id/", (req, res) => {
  const { id } = req.params;
  res.status(201).json(todoList[id]);
});

itemsController.put("/:id/edit", (req, res) => {
  const { id } = req.params;
  res.status(200).json(todoList[id]);
});

itemsController.delete("/:id/", (req, res) => {
  const { id } = req.params;
  todoList.splice(id, 1);
  res.status(201).json({ result: "success" });
});

module.exports = { itemsController };
