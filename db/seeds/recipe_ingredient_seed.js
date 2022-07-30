/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredient").del();
  await knex("recipe_ingredient").insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, amount: "2" },
    { id: 2, recipe_id: 1, ingredient_id: 2, amount: "150g" },
    { id: 3, recipe_id: 1, ingredient_id: 6, amount: "1 Tea Spoon" },
    { id: 4, recipe_id: 2, ingredient_id: 1, amount: "2" },
    { id: 5, recipe_id: 2, ingredient_id: 2, amount: "150g" },
    { id: 6, recipe_id: 2, ingredient_id: 6, amount: "3g" },
    { id: 7, recipe_id: 3, ingredient_id: 10, amount: "500ml" },
    { id: 8, recipe_id: 3, ingredient_id: 8, amount: "150g" },
    { id: 9, recipe_id: 3, ingredient_id: 9, amount: "3g" },
    { id: 10, recipe_id: 4, ingredient_id: 2, amount: "150g" },
    { id: 11, recipe_id: 4, ingredient_id: 4, amount: "100g" },
    { id: 12, recipe_id: 4, ingredient_id: 6, amount: "3g" },
    { id: 13, recipe_id: 5, ingredient_id: 2, amount: "200g" },
    { id: 14, recipe_id: 5, ingredient_id: 7, amount: "10g" },
    { id: 15, recipe_id: 6, ingredient_id: 3, amount: "50g" },
    { id: 16, recipe_id: 6, ingredient_id: 2, amount: "150g" },
    { id: 17, recipe_id: 6, ingredient_id: 6, amount: "3g" },
    { id: 18, recipe_id: 7, ingredient_id: 1, amount: "1" },
    { id: 19, recipe_id: 8, ingredient_id: 6, amount: "2 Table Spoon" },
    { id: 20, recipe_id: 8, ingredient_id: 10, amount: "500ml" },
  ]);
};
