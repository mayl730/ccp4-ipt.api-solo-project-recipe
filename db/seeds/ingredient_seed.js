/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredient").del();
  await knex("ingredient").insert([
    {
      id: 1,
      name: "Egg",
      description: "Egg from local farm",
    },
    {
      id: 2,
      name: "Rice",
      description: "Basic Rice",
    },
    {
      id: 3,
      name: "Pineapple",
      description: "Fruits from can",
    },
    {
      id: 4,
      name: "Salmon",
      description: "Raw Salmon from norway",
    },
    {
      id: 5,
      name: "Miso",
      description: "Japanese traditional ingredient",
    },
    {
      id: 6,
      name: "Salt",
      description: "Table Salt",
    },
    {
      id: 7,
      name: "Thai Herb Mixture",
      description: "Mixture of different Thai herbs",
    },
    {
      id: 8,
      name: "Pasta",
      description: "Traditional Italian noodles",
    },
    {
      id: 9,
      name: "Minced Pork",
      description: "Pork for making meatballs",
    },
    {
      id: 10,
      name: "Water",
      description: "Get it from your tap",
    },
  ]);
};
