const db = require("./knex");
const express = require("express");
const recipeController = require("../controllers/recipeController");
const ingredientController = require("../controllers/ingredientController");

const app = express();
const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();
    console.log("Seeding data");
    await db.seed.run();

    const server = new ApolloServer({ typeDefs, resolvers });
    console.log("Starting server");
    await server.start();
    server.applyMiddleware({ app, path: "/" });
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/recipe", recipeController);
app.use("/api/ingredient", ingredientController);
