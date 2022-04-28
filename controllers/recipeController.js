const express = require("express");
const { route } = require("express/lib/application");
const { user } = require("pg/lib/defaults");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.get("/", async (req, res) => {
  const recipe = await Recipe.findMany();
  res.send(recipe).status(200);
});

router.get("/:idOrName", async (req, res) => {
  const param = req.params.idOrName;
  const recipe = await Recipe.findOne(param);
  res.send(recipe).status(200);
});

// POST a recipe
router.post("/", async (req, res) => {
  try {
    const { id, userID, title, description, calories } = req.body;
    await Recipe.create(id, userID, title, description, calories);
    return res.status(201).send(["Recipe is created!", req.body]).end();
  } catch (err) {
    return res
      .status(204)
      .send(["Missing necessary information!", req.body])
      .end();
  }
});

// Update a Recipe

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { userID, title, description, calories } = req.body;
  await Recipe.update(id, userID, title, description, calories);
  return res.status(200).send(["Recipe is updated!", id, req.body]).end();
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Recipe.delete(id);
  return res.status(200).send(["Recipe is removed!", id]).end();
});

module.exports = router;
