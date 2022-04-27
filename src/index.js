const express = require("express");
const data = require("./data/recipe.json");
const utils = require("./utils/utils");

const app = express();
const PORT = process.env.PORT || 3000;
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
    if (req.query.type) {
      await res.status(200).send(data.recipe.slice(0, req.query.limit));
    }
    await res.status(200).send(data.recipe);
  } catch {
    res.status(500).end();
  }
});

app.get("/api/recipe/:idOrName", async (req, res) => {
  const param = req.params.idOrName;
  const index = utils.processIdOrName(param, data.recipe);
  // const result =
  try {
    await res.status(200).send(data.recipe[index[0]]);
  } catch {
    res.status(500).end();
  }
});
