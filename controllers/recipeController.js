const express = require("express");
const { route } = require("express/lib/application");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.use(express.json());
// Get All Recipes
router.get("/", async (req, res) => {
  try {
    // Get First X Items
    if (req.query.limit) {
      let recipes = await Recipe.findByLimit(req.query.limit);
      return res.send(recipes).status(200);
    }
    // Get By Calories' Range
    if (req.query.calories) {
      const { lt, gt } = JSON.parse(req.query.calories);
      recipes = await Recipe.findByCalories(lt, gt);
      return res.status(200).send(recipes).end();
    }

    const recipe = await Recipe.findMany();
    return res.send(recipe).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Get By ID or Name
router.get("/:idOrName", async (req, res) => {
  try {
    const param = req.params.idOrName;
    const recipe = await Recipe.findOne(param);
    res.send(recipe).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Get Recipe By Ingredients
router.get("/ingredient/:name", async (req, res) => {
  try {
    const param = req.params.name;
    const recipe = await Recipe.findByIngredient(param);
    res.send(recipe).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// POST a recipe
router.post("/", async (req, res) => {
  try {
    const { id, userID, title, description, calories, type, image } = req.body;
    await Recipe.create(id, userID, title, description, calories, type, image);
    return res.status(201).send(["Recipe is created!", req.body]).end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

// POST ingredient to a Recipe
router.post("/:id/ingredient", async (req, res) => {
  try {
    const id = req.params.id;
    const { ingredientID, amount } = req.body;
    await Recipe.addIngredientToRecipe(id, ingredientID, amount);
    return res
      .status(201)
      .send(["Ingredient is added to a recipe!", req.body])
      .end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

// Update a Recipe
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { userID, title, description, calories, type } = req.body;
    await Recipe.update(id, userID, title, description, calories, type);
    return res
      .status(200)
      .send(["Recipe is updated! id: ", id, req.body])
      .end();
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Recipe.delete(id);
    return res.status(200).send(["Recipe is removed! id: ", id]).end();
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

module.exports = router;
