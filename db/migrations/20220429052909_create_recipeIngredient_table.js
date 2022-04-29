/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredient", function (table) {
    table.increments("id").primary();
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipe")
      .onDelete("CASCADE")
      .notNullable();
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredient")
      .onDelete("CASCADE")
      .notNullable();
    table.string("amount", 16);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("ingredient");
};
