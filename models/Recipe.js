const utils = require("../src/utils/utils");

class Recipe {
  constructor() {
    this.db = require("../src/knex");
  }

  async findMany() {
    try {
      return await this.db("recipe")
        .select(["id", "userID", "title", "description", "calories"])
        .timeout(1500);
    } catch (err) {
      return err;
    }
  }
  async findOne(idOrName) {
    try {
      if (utils.processIdOrName(idOrName)) {
        return await this.db("recipe")
          .select(["id", "userID", "title", "description", "calories"])
          .where("id", idOrName)
          .timeout(1500);
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

  async create(id, userID, title, description, calories) {
    if (!id || !title || !description) {
      return "Please enter id, title & description";
    }

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
      return "Fail request";
    }
  }
}

module.exports = new Recipe();
