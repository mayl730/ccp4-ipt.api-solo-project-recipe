const db = require("./knex");
const express = require("express");
const recipeController = require("../controllers/recipeController");
const ingredientController = require("../controllers/ingredientController");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});

app.use("/api/recipe", recipeController);
app.use("/api/ingredient", ingredientController);
