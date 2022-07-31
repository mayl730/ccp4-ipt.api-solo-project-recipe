const express = require("express");
const { route } = require("express/lib/application");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const router = express.Router();
const utils = require("../src/utils/utils");

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
    let param = req.params.idOrName;
    if (!utils.processIdOrName(param)) {
      param = param.toLowerCase();
    }
    const recipe = await Recipe.findOne(param);
    res.send(recipe).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Get Recipe By Ingredients
router.get("/ingredient/:name", async (req, res) => {
  try {
    const param = req.params.name.toLowerCase();
    const recipe = await Recipe.findByIngredient(param);
    res.send(recipe).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// Get Recipe's Ingredients
router.get("/:id/ingredients/", async (req, res) => {
  try {
    const param = req.params.id;
    const ingredients = await Recipe.findRecipeIngredientsById(param);
    res.send(ingredients).status(200);
  } catch (err) {
    return res.status(404).send(err).end();
  }
});

// POST a recipe
router.post("/", async (req, res) => {
  try {
    const { userID, title, description, calories, type, instruction, image } =
      req.body;
    const id = await Recipe.create(
      userID,
      title,
      description,
      calories,
      type,
      instruction,
      image
    );
    return res.status(201).json(id).end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

// Create ingredient to a Recipe
router.post("/:id/ingredient", async (req, res) => {
  try {
    const recipeID = req.params.id;
    const { ingredientID, amount } = req.body;
    const id = await Recipe.createIngredientToRecipe(
      recipeID,
      ingredientID,
      amount
    );
    return res.status(201).json(id).end();
  } catch (err) {
    return res.status(204).send(err).end();
  }
});

// Remove ingredient in a Recipe
router.delete("/ingredient/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Recipe.deleteIngredientToRecipe(id);
    return res.status(200).json(id).end();
  } catch (err) {
    return res.status(404).send(err).end();
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
