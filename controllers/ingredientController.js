const express = require("express");
const { route } = require("express/lib/application");
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

module.exports = router;
