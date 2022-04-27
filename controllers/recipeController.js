const express = require("express");
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

module.exports = router;
