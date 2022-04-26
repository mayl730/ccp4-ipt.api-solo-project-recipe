const express = require("express");
const recipe = require("./data/recipe.json");

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});

app.get("/api/recipe", async (req, res) => {
  res.send("Hello World!!!!!");
  // try {

  //     if (req.query.limit) {
  //     await res.status(200).send(recipe.slice(0, req.query.limit));
  //     } else
  //     await res.status(200).send('HelloWord');
  //     }
  // } catch (err) {
  //     res.status(500).end();
  // }
});
