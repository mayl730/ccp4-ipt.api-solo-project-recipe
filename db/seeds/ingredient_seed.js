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
    },
    {
      id: 2,
      name: "Rice",
    },
    {
      id: 3,
      name: "Pineapple",
    },
    {
      id: 4,
      name: "Salmon",
    },
    {
      id: 5,
      name: "Miso",
    },
    {
      id: 6,
      name: "Salt",
    },
    {
      id: 7,
      name: "Thai Herb Mixture",
    },
    {
      id: 8,
      name: "Pasta",
    },
    {
      id: 9,
      name: "Minced Pork",
    },
    {
      id: 10,
      name: "Water",
    },
  ]);
};
