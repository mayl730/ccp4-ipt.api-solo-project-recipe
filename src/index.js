const express = require("express");
const data = require("./data/recipe.json");
const utils = require("./utils/utils");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to May's Recipe API");
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});

app.get("/api/recipe", async (req, res) => {
  try {
    if (req.query.limit) {
      await res.status(200).send(data.recipe.slice(0, req.query.limit));
    }
    if (req.query.calories) {
      // http://localhost:3000/api/recipe?calories={"largerthan":500, "smallerthan:"}
      await res.status(200).send(req.query.calories.lt);
    }
    await res.status(200).send(data.recipe);
  } catch {
    res.status(500).end();
  }
});

app.get("/api/recipe/?calories", async (req, res) => {});

app.get("/api/recipe/:idOrName", async (req, res) => {
  const param = req.params.idOrName;
  const indexArr = utils.processIdOrName(param, data.recipe);
  const result = _.map(indexArr, (index) => data.recipe[index]);
  try {
    await res.status(200).send(result);
  } catch {
    res.status(500).end();
  }
});

// /customers?id={"lt": 100, "gt": 30}&page={"start": 1, "size": 10}
