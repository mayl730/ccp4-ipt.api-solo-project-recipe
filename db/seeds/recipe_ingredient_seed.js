/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredient").del();
  await knex("recipe_ingredient").insert([
    { recipe_id: 1, ingredient_id: 1, amount: "2" },
    { recipe_id: 1, ingredient_id: 2, amount: "150g" },
    { recipe_id: 1, ingredient_id: 6, amount: "1 Tea Spoon" },
    { recipe_id: 2, ingredient_id: 1, amount: "2" },
    { recipe_id: 2, ingredient_id: 2, amount: "150g" },
    { recipe_id: 2, ingredient_id: 6, amount: "3g" },
    { recipe_id: 3, ingredient_id: 1, amount: "2" },
    { recipe_id: 3, ingredient_id: 8, amount: "150g" },
    { recipe_id: 3, ingredient_id: 9, amount: "3g" },
    { recipe_id: 4, ingredient_id: 2, amount: "150g" },
    { recipe_id: 4, ingredient_id: 4, amount: "100g" },
    { recipe_id: 4, ingredient_id: 6, amount: "3g" },
    { recipe_id: 5, ingredient_id: 2, amount: "200g" },
    { recipe_id: 5, ingredient_id: 7, amount: "10g" },
    { recipe_id: 6, ingredient_id: 3, amount: "50g" },
    { recipe_id: 6, ingredient_id: 2, amount: "150g" },
    { recipe_id: 6, ingredient_id: 6, amount: "3g" },
    { recipe_id: 7, ingredient_id: 5, amount: "2" },
    { recipe_id: 8, ingredient_id: 6, amount: "2 Table Spoon" },
    { recipe_id: 8, ingredient_id: 10, amount: "500ml" },
  ]);
};
