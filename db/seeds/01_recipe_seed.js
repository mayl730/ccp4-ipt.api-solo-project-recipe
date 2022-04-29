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
      type: "Lunch",
    },
    {
      id: 2,
      userID: 142,
      title: "Omlet",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 300,
      type: "Lunch",
    },
    {
      id: 3,
      userID: 142,
      title: "Meatball Pasta",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 670,
      type: "Dinner",
    },
    {
      id: 4,
      userID: 142,
      title: "Salmon Sushi",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 450,
      type: "Lunch",
    },
    {
      id: 5,
      userID: 999,
      title: "Thai Fried rice",
      description: "Thai Traditional Fried Rice.",
      calories: 1300,
      type: "Lunch",
    },
    {
      id: 6,
      userID: 999,
      title: "Pineapple Fried rice",
      description: "Hong Kong Traditional Fried Rice!!",
      calories: 999,
      type: "Lunch",
    },
    {
      id: 7,
      userID: 999,
      title: "Sunny Side Up Eggs",
      description: "Everyone favourite Egg.",
      calories: 288,
      type: "Breakfast",
    },
    {
      id: 8,
      userID: 999,
      title: "Miso Soup",
      description: "One of the most famous soup in Japan.",
      calories: 150,
      type: "Breakfast",
    },
  ]);
};
