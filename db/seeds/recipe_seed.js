/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      id: 1,
      userID: 140,
      title: "Egg Fried rice",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 750,
    },
    {
      id: 2,
      userID: 142,
      title: "Omlet",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 300,
    },
    {
      id: 3,
      userID: 142,
      title: "Meatball Pasta",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 670,
    },
    {
      id: 4,
      userID: 142,
      title: "Salmon Sushi",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 450,
    },
    {
      id: 5,
      userID: 999,
      title: "Egg Fried rice",
      description: "Thai Egg Fried Rice!!",
      calories: 1300,
    },
  ]);
};
