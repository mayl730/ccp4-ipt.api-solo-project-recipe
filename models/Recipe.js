const { reduceRight } = require("lodash");
const utils = require("../src/utils/utils");

class Recipe {
  constructor() {
    this.db = require("../src/knex");
    this.recipeObj = {
      id: "recipe.id",
      title: "recipe.title",
      description: "recipe.description",
      calories: "recipe.calories",
      type: "recipe.type",
      ingredient: "ingredient.name",
      instruction: "recipe.instruction",
      image: "recipe.image",
    };
  }

  async findMany() {
    try {
      return await this.db
        .select(this.recipeObj)
        .from("recipe")
        .orderBy("recipe.id")
        .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
        .join("ingredient", "recipe_ingredient.ingredient_id", " ingredient.id")
        .then((resultBefore) => {
          return utils.recipeObject(resultBefore);
        });
    } catch (err) {
      return err;
    }
  }
  async findOne(idOrName) {
    try {
      if (utils.processIdOrName(idOrName)) {
        return await this.db
          .select(this.recipeObj)
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
            return utils.recipeObject(resultBefore)[0];
          });
      }

      if (!utils.processIdOrName(idOrName)) {
        return await this.db
          .select(this.recipeObj)
          .from("recipe")
          .whereRaw(`LOWER(recipe.title) LIKE ?`, [`%${idOrName}%`])
          .orderBy("recipe.id")
          .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
          .join(
            "ingredient",
            "recipe_ingredient.ingredient_id",
            " ingredient.id"
          )
          .then((resultBefore) => {
            return utils.recipeObject(resultBefore);
          });
      }
    } catch (err) {
      return err;
    }
  }

  async findByLimit(limit) {
    try {
      return await this.db
        .select(this.recipeObj)
        .from("recipe")
        .where("recipe.id", "<=", limit)
        .orderBy("recipe.id")
        .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
        .join("ingredient", "recipe_ingredient.ingredient_id", "ingredient.id")
        .then((resultBefore) => {
          return utils.recipeObject(resultBefore);
        });
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

  async findByIngredient(param) {
    try {
      return await this.db
        .select(this.recipeObj)
        .from("recipe")
        .whereRaw(`LOWER(ingredient.name) LIKE ?`, [`%${param}%`])
        .orderBy("recipe.id")
        .join("recipe_ingredient", "recipe_ingredient.recipe_id", "recipe.id")
        .join("ingredient", "recipe_ingredient.ingredient_id", "ingredient.id")
        .then((resultBefore) => {
          return utils.recipeObject(resultBefore);
        });
    } catch (err) {
      return err;
    }
  }

  async findRecipeIngredientsById(param) {
    try {
      return await this.db
        .select({
          id: "recipe_ingredient.id",
          recipe_id: "recipe_ingredient.recipe_id",
          ingredient_id: "recipe_ingredient.ingredient_id",
          name: "name",
          amount: "amount",
        })
        .from("recipe_ingredient")
        .where("recipe_ingredient.recipe_id", "=", param)
        .join("ingredient", "recipe_ingredient.ingredient_id", "ingredient.id")
        .timeout(1500);
    } catch (err) {
      return err;
    }
  }

  async create(userID, title, description, calories, type, instruction, image) {
    try {
      const [id] = await this.db("recipe")
        .insert({
          userID: userID,
          title: title,
          description: description,
          calories: calories,
          type: type,
          instruction: instruction,
          image: image,
        })
        .returning("id");
      return id;
    } catch (err) {
      return err;
    }
  }

  // Create ingredient to a Recipe
  async createIngredientToRecipe(recipeID, ingredientID, amount) {
    try {
      const [id] = await this.db("recipe_ingredient")
        .insert({
          recipe_id: recipeID,
          ingredient_id: ingredientID,
          amount: amount,
        })
        .returning("id");
      return id;
    } catch (err) {
      return err;
    }
  }

  // Remove ingredient in a Recipe
  async deleteIngredientToRecipe(id) {
    try {
      await this.db("recipe_ingredient").where("id", "=", id).del();
      return "Sucessfully deleted!";
    } catch (err) {
      return err;
    }
  }

  async update(id, userID, title, description, calories, instruction, type) {
    try {
      await this.db("recipe")
        .where("id", "=", id)
        .update({
          userID: userID,
          title: title,
          description: description,
          calories: calories,
          instruction: instruction,
          type: type,
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
