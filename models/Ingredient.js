const { reduceRight } = require("lodash");
const utils = require("../src/utils/utils");

class Ingredient {
  constructor() {
    this.db = require("../src/knex");
  }

  async findManyIngredient() {
    try {
      return await this.db.select("*").from("ingredient").timeout(1500);
    } catch (err) {
      return err;
    }
  }

  async findOneIngredient(idOrName) {
    try {
      if (utils.processIdOrName(idOrName)) {
        return await this.db
          .select("*")
          .from("ingredient")
          .where("ingredient.id", idOrName)
          .timeout(1500);
      }
      if (!utils.processIdOrName(idOrName)) {
        return await this.db
          .select(["*"])
          .from("ingredient")
          .whereRaw(`LOWER(ingredient.name) LIKE ?`, [`%${idOrName}%`])
          .timeout(1500);
      }
    } catch (err) {
      return err;
    }
  }

  async create(name) {
    try {
      const [id] = await this.db("ingredient")
        .insert({
          name: name,
        })
        .returning("id");
      return id;
    } catch (err) {
      return err;
    }
  }

  async delete(id) {
    try {
      await this.db("ingredient").where("id", "=", id).del();
      return "Sucessfully deleted!";
    } catch (err) {
      return err;
    }
  }
}

module.exports = new Ingredient();
