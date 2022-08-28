# Recipe API: Find Recipe with Calories or Ingredients

This was created during my time as a student at Code Chrysalis.

Recipe API is a API backend allowing searching recipe by keywords, ingredients or calories. Create, Read, Update & Delete features are also available for both recipes & ingredients.

This API is built with PostgreSQL, Express.js & Knex.js.

![image](./images/recipe_api_cover.jpg)

You can try the deployed version on:
https://fast-recipe-api-psql.herokuapp.com/

## Features

- CRUD features for handling Recipes & Ingredients in database.
- Filter Recipe with name, recipe id, calories or ingredients.

## Database Structure

Recipe & Ingredients Database, There is also a table to connect 2 tables together.
![image](./images/recipe_db_structure.png)

## How to run the server locally

1. This database & API is made on PostgreSQL. Please install PostgreSQL & create the recipe api database on you local machine.

2. Create your own .env.local with the data below:

```
DB_USER=your database username
DB_PASSWORD=your database password
DB_NAME=your database name
```

3. After the database is created, please try to run your server local by the command below:

```
npm start
```

## API Endpoints

### Recipe

- `GET api/recipe/`
  Get all recipes from the database.

**Response:**

```JSON
{
    "id": 1,
    "title": "Egg Fried Rice",
    "description": "This is a description with some words."
},
{
    "id": 2,
    "title": "Omlet",
    "description": "This is a description with some words."
}...
```

- `GET api/recipe/{id Or name}`
  Get recipe by id or keywords of the name

**Response:**

```JSON
{
    "id": 5,
    "title": "Thai Fried Rice",
    "description": "Thai Traditional Fried Rice.",
    "calories": 1300,
    "type": "Lunch",
    "ingredients": [
        "Rice",
        "Thai Herb Mixture"
    ]
}
```

- `GET api/recipe?limit={number}`
  Get first x recipes with limitations.

**Response:**

```JSON
{
    "id": 1,
    "title": "Egg Fried Rice",
    "description": "This is a description with some words."
},
{
    "id": 2,
    "title": "Omlet",
    "description": "This is a description with some words."
}
```

- `GET api/recipe?calories={"lt": number, "gt": number}`
  Get recipes between calories' range.
  (lt = less than, gt = greater than)

**Response:**

```JSON
[
  "Recipe with calories less than 2000 and greater than 400:",
  [
      {
          "id": 1,
          "userID": 140,
          "title": "Egg Fried rice",
          "description": "This is a description with some words. Lorem Ipsum........",
          "calories": 750,
          "type": "Lunch"
      },
      {
          "id": 3,
          "userID": 142,
          "title": "Meatball Pasta",
          "description": "This is a description with some words. Lorem Ipsum........",
          "calories": 670,
          "type": "Dinner"
      }
  ]
]
```

- `GET api/recipe/ingredient/{ingredient name}`
  Get filtered recipes with ingredient name.

**Response:**

```JSON
[
    [
    {
        "id": 1,
        "title": "Egg Fried Rice",
        "description": "This is a description with some words. Lorem Ipsum........",
        "calories": 750,
        "type": "Lunch",
        "ingredients": [
            "Egg"
        ]
    },
    {
        "id": 2,
        "title": "Omlet",
        "description": "This is a description with some words. Lorem Ipsum........",
        "calories": 300,
        "type": "Lunch",
        "ingredients": [
            "Egg"
        ]
    }
 ]
]
```

- `POST api/recipe/`

  Create a recipe. Please follow the JSON request format below:

**Request Format**

```JSON
{
    "userID": 999,
    "title": "Title String",
    "description": "Description String",
    "calories": 750,
    "type": "Breakfast",
    "instruction": "Steps for cooking a recipe",
    "image": "image url"
}
```

- `POST api/recipe/{recipe id}/ingredient`

  Add an existing ingreident to a recipe.

**Request**

```JSON
 {
    "ingredientID": 1, // This is Egg's ingredient id
    "amount": "100g" // This is a string
}
```

- `PATCH api/recipe/{recipe id}`
  Edit a recipe (You don't have to fill in everything for patching a recipe)

**Request Format:**

```JSON
{
    "userID": 999,
    "title": "Title String",
    "description": "Description String",
    "calories": 750,
    "type": "Breakfast",
    "instruction": "Steps for cooking a recipe",
    "image": "image url"
}
```

- `DELETE api/recipe/{recipe id}`

Delete a recipe.

**Response:**

```JSON
[
    "Recipe is removed! id: 999",
]
```

### Ingredient Endpoints

Ingredient endpoint to return ingredient objects.

- `GET api/ingredient/`

Get all ingredient from the database.

**Response:**

```JSON
[
  {
      "id": 1,
      "name": "Egg"
  },
  {
      "id": 2,
      "name": "Rice"
  },
  {
      "id": 3,
      "name": "Pineapple"
  }...
]
```

- `GET api/ingredient/{Ingredient Name}`

Get ingredient item by name

**Response:**

```JSON
  {
      "id": 1,
      "name": "Egg"
  }
```

- `GET api/recipe/{recipe id}/ingredients/`

Get all ingredients of a recipe by recipe ID.

**Response:**

```JSON
[
    {
        "id": 1,
        "recipe_id": 1,
        "ingredient_id": 1,
        "name": "Egg",
        "amount": "2"
    },
    {
        "id": 2,
        "recipe_id": 1,
        "ingredient_id": 2,
        "name": "Rice",
        "amount": "150g"
    },
]
```

- `POST api/ingredient/`

Create a ingredient.

**Request Format:**

```JSON
{
  "name": "String"
}
```

- `PATCH api/recipe/ingredient/{recipeToIngredientID}`

Edit an ingredient for a recipe.

**Request Format:**

```JSON
{
    "ingredientID": 1, // This is Egg's ingredient id
    "amount": "String"
}
```

- `Delete api/ingredient/{id}`

Delete an ingredient with ingredient id.

- `Delete api/recipe/ingredient/{recipeToIngredientID}`

Delete an ingredient inside a recipe with recipe-to-ingredient ID.
