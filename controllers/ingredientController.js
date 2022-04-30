const express = require("express");
const { route } = require("express/lib/application");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.use(express.json());
// Get All
router.get("/", async (req, res) => {
  try {
    const ingredient = await Recipe.findManyIngrident();
    return res.send(ingredient).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Post an ingredient
router.post("/", async (req, res) => {
  try {
    const { id, name, description } = req.body;
    await Recipe.addIngredient(id, name, description);
    return res
      .status(201)
      .send(["Ingredient is added to the ingredient list!", req.body])
      .end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

// Update an Ingredient
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    await Ingredient.update(name, description);
    return res
      .status(200)
      .send([`Ingredient is updated! id: ${id}`, req.body])
      .end();
  } catch (err) {
    return res.status(404).send(err).end();
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
