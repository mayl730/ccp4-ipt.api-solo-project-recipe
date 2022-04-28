const express = require("express");
const { route } = require("express/lib/application");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.use(express.json());
// Get All
router.get("/", async (req, res) => {
  // Get First X Items
  if (req.query.limit) {
    let recipes = await Recipe.findByLimit(req.query.limit);
    return res.send(recipes).status(200);
  }
  // Get By Calories' Range
  if (req.query.calories) {
    console.log(typeof req.query.calories);
    const { lt, gt } = JSON.parse(req.query.calories);
    recipes = await Recipe.findByCalories(lt, gt);
    return res
      .status(200)
      .send([
        `Recipe with calories less than ${lt} and greater than ${gt}:`,
        recipes,
      ])
      .end();
  }

  const recipe = await Recipe.findMany();
  return res.send(recipe).status(200);
});

// Get By ID or Name
router.get("/:idOrName", async (req, res) => {
  const param = req.params.idOrName;
  const recipe = await Recipe.findOne(param);
  res.send(recipe).status(200);
});

// Get By Ingredients

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
