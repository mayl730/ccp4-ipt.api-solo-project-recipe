const { reduceRight } = require("lodash");
const utils = require("../src/utils/utils");

class Recipe {
  constructor() {
    this.db = require("../src/knex");
  }

  async findMany() {
    return await this.db
      .select({
        id: "recipe.id",
        title: "recipe.title",
        description: "recipe.description",
        calories: "recipe.calories",
        type: "recipe.type",
        ingredient: "ingredient.name",
      })
      .from("recipe")
      .orderBy("recipe.id")
      .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
      .join("ingredient", "recipe_ingredient.ingredient_id", " ingredient.id")
      .then((resultBefore) => {
        let resultAfter = [];
        let pushedId = {};
        resultBefore.forEach((data) => {
          if (data.id in pushedId) {
            const index = pushedId[data.id];
            resultAfter[index].ingredients.push(data.ingredient);
          } else {
            const newData = {
              id: data.id,
              title: data.title,
              description: data.description,
              calories: data.calories,
              type: data.type,
              ingredients: [data.ingredient],
            };
            resultAfter.push(newData);
            pushedId[data.id] = resultAfter.length - 1;
          }
        });
        return resultAfter;
      });
  }
  async findOne(idOrName) {
    try {
      if (utils.processIdOrName(idOrName)) {
        return await this.db
          .select({
            id: "recipe.id",
            title: "recipe.title",
            description: "recipe.description",
            calories: "recipe.calories",
            type: "recipe.type",
            ingredient: "ingredient.name",
          })
          .from("recipe")
          .where("recipe.id", idOrName)
          .orderBy("recipe.id")
          .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
          .join(
            "ingredient",
            "recipe_ingredient.ingredient_id",
            " ingredient.id"
          )
          .then((resultBefore) => {
            let resultAfter = [];
            let pushedId = {};
            resultBefore.forEach((data) => {
              if (data.id in pushedId) {
                const index = pushedId[data.id];
                resultAfter[index].ingredients.push(data.ingredient);
              } else {
                const newData = {
                  id: data.id,
                  title: data.title,
                  description: data.description,
                  calories: data.calories,
                  type: data.type,
                  ingredients: [data.ingredient],
                };
                resultAfter.push(newData);
                pushedId[data.id] = resultAfter.length - 1;
              }
            });
            return resultAfter[0];
          });
      }

      if (!utils.processIdOrName(idOrName)) {
        return await this.db("recipe")
          .select(["id", "userID", "title", "description", "calories"])
          .where("title", idOrName)
          .timeout(1500);
      }
    } catch (err) {
      return err;
    }
  }

  async findByLimit(limit) {
    try {
      return await this.db("recipe").select().limit(limit).timeout(1500);
    } catch (err) {
      return err;
    }
  }

  async findByCalories(lt, gt) {
    try {
      return await this.db("recipe")
        .select()
        .whereBetween("calories", [gt, lt])
        .timeout(1500);
    } catch (err) {
      return err;
    }
  }

  async create(id, userID, title, description, calories) {
    try {
      await this.db("recipe")
        .insert({
          id: id,
          userID: userID,
          title: title,
          description: description,
          calories: calories,
        })
        .timeout(1500);
      return "Successfully created!";
    } catch (err) {
      return err;
    }
  }

  async update(id, userID, title, description, calories) {
    try {
      await this.db("recipe")
        .where("id", "=", id)
        .update({
          userID: userID,
          title: title,
          description: description,
          calories: calories,
        })
        .timeout(1500);
      return "Successfully updated!";
    } catch (err) {
      return err;
    }
  }
  async delete(id) {
    try {
      await this.db("recipe").where("id", "=", id).del();
      return "Sucessfully deleted!";
    } catch (err) {
      return err;
    }
  }
}

module.exports = new Recipe();
