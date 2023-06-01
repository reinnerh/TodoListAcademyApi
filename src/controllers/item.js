const { Router } = require("express");
const { ItemsService } = require("../services/items");
const itemsController = Router();

itemsController.get("/", async function (req, res) {
  const items = await ItemsService.findAll();
  res.status(200).json({ data: items });
});

itemsController.get("/:id/", async (req, res) => {
  const { id } = req.params;
  const item = await ItemsService.find(id);
  return res.status(200).json({ data: item });
});

itemsController.post("/", async function (req, res) {
  const { body } = req;
  try {
    const created = await ItemsService.create(body);
    return res.status(201).json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

itemsController.put("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedItem = await ItemsService.update({ id, ...body });
  return res.status(200).json({ result: "success" });
});

itemsController.delete("/:id/", async (req, res) => {
  const { id } = req.params;
  await ItemsService.delete({ id });
  return res.status(201).json({ result: "success" });
});

module.exports = { itemsController };
