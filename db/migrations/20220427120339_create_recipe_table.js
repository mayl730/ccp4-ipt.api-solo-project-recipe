/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe", function (table) {
    table.increments("id").primary();
    table.integer("userID");
    table.string("title", 255).notNullable();
    table.string("description").notNullable();
    table.integer("calories");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("recipe");
};
