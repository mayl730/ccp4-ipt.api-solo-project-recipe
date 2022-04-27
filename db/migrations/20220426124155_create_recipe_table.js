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

    //   table
    //     .string("email", 32)
    //     .unique() // This is a constraint that prevents duplicate emails in the table
    //     .notNullable()
    //     .index(); // Adding an index makes searching by email faster
    //   table.string("first_name", 32);
    //   table.string("last_name", 32).notNullable();
    //   table.string("address", 64);
    //   table.string("region", 32);
    //   table.string("postal_code", 16).notNullable();
    //   table.string("country", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("customer");
};
