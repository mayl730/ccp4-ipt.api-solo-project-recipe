exports.up = function (knex) {
  return knex.schema.table("recipe", function (table) {
    table.string("type", 62);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("recipe", function (table) {
    table.dropColumn("type");
  });
};
