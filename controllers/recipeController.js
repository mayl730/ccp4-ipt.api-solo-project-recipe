const express = require("express");
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
  const { id, userID, title, description, calories } = req.body;
  await Recipe.create(id, userID, title, description, calories);
  res.status(201).send(["Recipe is created!", req.body]).end();
});

module.exports = router;
