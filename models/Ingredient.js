const { reduceRight } = require("lodash");
const utils = require("../src/utils/utils");

class Ingredient {
  constructor() {
    this.db = require("../src/knex");
  }

  async findManyIngrident() {
    try {
      return await this.db.select("*").from("ingredient").timeout(1500);
    } catch (err) {
      return err;
    }
  }

  async create(name, description) {
    const [id] = await this.db("ingredient")
      .insert({
        name: name,
      })
      .returning("id");
    return id;
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
