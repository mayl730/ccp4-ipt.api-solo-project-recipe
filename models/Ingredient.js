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
        description: description,
      })
      .returning("id");
    return id;
  }

  async update(id, name, description) {
    try {
      await this.db("ingredient")
        .where("id", "=", id)
        .update({
          name: name,
          description: description,
        })
        .timeout(1500);
      return "Successfully updated an ingredient!";
    } catch (err) {
      return err;
    }
  }
  async delete(id) {
    try {
      await this.db("ingredient").where("id", "=", id).del();
      return "Sucessfully deleted an ingredient!";
    } catch (err) {
      return err;
    }
  }
}

module.exports = new Ingredient();
