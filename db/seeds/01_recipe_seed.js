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
      title: "Egg Fried Rice",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 750,
      type: "Lunch",
      instruction:
        "1. Put egg on rice\n2. Put them in pan fry\n3. Eat Egg Fried Rice",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fegg-fried-rice.jpg?alt=media&token=4cbc34c0-1000-477c-a627-5de4951ad887",
    },
    {
      id: 2,
      userID: 142,
      title: "Omlet",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 300,
      type: "Lunch",
      instruction: "1. Put egg on rice\n2. Put them in pan fry\n3. Eat Omlet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fomlet.jpg?alt=media&token=aeb0c2e2-742d-4ea8-924c-695fa07e2554",
    },
    {
      id: 3,
      userID: 142,
      title: "Meatball Pasta",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 670,
      type: "Dinner",
      instruction:
        "1. Put meat on pasta\n2. Put them in pan fry\n3. Eat Meatball Pasta",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fmeat-ball-pasta.jpg?alt=media&token=eeb88de7-b5fb-4af8-9802-5bbfa0b7ac87",
    },
    {
      id: 4,
      userID: 142,
      title: "Salmon Sushi",
      description: "This is a description with some words. Lorem Ipsum........",
      calories: 450,
      type: "Lunch",
      instruction:
        "1. Put salmon on rice\n2. Put them together\n3. Eat Salmon Sushi",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fsushi.jpg?alt=media&token=18bd6a22-85d6-4ba0-9206-4208845de312",
    },
    {
      id: 5,
      userID: 999,
      title: "Thai Fried Rice",
      description: "Thai Traditional Fried Rice.",
      calories: 1300,
      type: "Lunch",
      instruction:
        "1. Put egg on rice\n2. Put them in pan fry\n3. Eat Thai Fried Rice",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fthai.jpg?alt=media&token=0fe38d7d-18d7-41f9-a7e1-5eba223a2ddb",
    },
    {
      id: 6,
      userID: 999,
      title: "Pineapple Fried rice",
      description: "Hong Kong Traditional Fried Rice!!",
      calories: 999,
      type: "Lunch",
      instruction:
        "1. Put Pineapple on rice\n2. Put them in pan fry\n3. Eat Pineapple Fried rice",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fpine.jpg?alt=media&token=aa0f570f-b913-4419-9aaf-520d3ec4ecb5",
    },
    {
      id: 7,
      userID: 999,
      title: "Sunny Side Up Eggs",
      description: "Everyone favourite Egg.",
      calories: 288,
      type: "Breakfast",
      instruction:
        "1. Put eggs\n2. Put them in pan fry\n3. Eat Sunny Side Up Eggs",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fsunny-egg.jpg?alt=media&token=e99c8067-898a-4dda-ab12-6bd4a2276699",
    },
    {
      id: 8,
      userID: 999,
      title: "Miso Soup",
      description: "One of the most famous soup in Japan.",
      calories: 150,
      type: "Breakfast",
      instruction:
        "1. Put Miso in water\n2. Put them in a bowl\n3. Eat Miso Soup",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fast-recipe-7aa79.appspot.com/o/recipe_image%2Fmiso.jpg?alt=media&token=fd60cf86-4910-4f8f-8a96-3f616b43fba4",
    },
  ]);
};
