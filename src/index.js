const db = require("./knex");
const express = require("express");
const cors = require("cors");
const recipeController = require("../controllers/recipeController");
const ingredientController = require("../controllers/ingredientController");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();
    console.log("Seeding data");
    await db.seed.run();
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.use("/api/recipe", recipeController);
app.use("/api/ingredient", ingredientController);
