const express = require("express");
const { route } = require("express/lib/application");
const Ingredient = require("../models/Ingredient");
const router = express.Router();
const utils = require("../src/utils/utils");

router.use(express.json());
// Get All Ingredients
router.get("/", async (req, res) => {
  try {
    const ingredient = await Ingredient.findManyIngredient();
    return res.send(ingredient).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Get By ID or Name
router.get("/:idOrName", async (req, res) => {
  try {
    let param = req.params.idOrName;
    if (!utils.processIdOrName(param)) {
      param = param.toLowerCase();
    }
    const ingredient = await Ingredient.findOneIngredient(param);
    res.send(ingredient).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Post an ingredient
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const id = await Ingredient.create(name, description);
    return res.status(201).json(id).end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Ingredient.delete(id);
    return res
      .status(200)
      .send([`Ingredient is removed! id: ${id}`])
      .end();
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

module.exports = router;
