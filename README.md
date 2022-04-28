# ccp4-ipt.api-solo-project-recipe

An API solo project for recipe (CCP4)
This was created during my time as a student at Code Chrysalis.

http://localhost:3000/api/recipe
http://localhost:3000/api/recipe?limit=2
http://localhost:3000/api/recipe/:idOrName
http://localhost:3000/api/recipe/Egg%20Fried%20Rice

https://www.npmjs.com/package/express-query-parser

GET /api/v1/magazines.json?year=2011&sort=desc HTTP/1.1

## Objectives

- Create a CRUD API service using Express / GraphQL, Relational database
- Write tests for your API
- Seed your database with interesting data
- Be able to document your API endpoints for other developers to use, aka a beautiful README
- Create a basic/simple frontend

## Summary

- You have until Saturday to create an MVP (minimum viable product)
- You will be doing a quick presentation of your API in Block 5 on Saturday and it must include a demo
- Suggestions for slides:
- API Endpoints
- Additional Technologies Used
- Challenges and Struggles Faced

## Requirements

- An Express server that:
- has a create endpoint for adding to your database (POST)
- has a read endpoint for reading from your database (GET)
- has an update endpoint for editing to your database (PATCH/PUT)
- has a delete endpoint for deleting from your database (DELETE)
- OR a GraphQL Server that:
- serves up a basic HTML file that describes your API service
- Has multiple types to query
- Offers mutations to delete, add, or modify data
- A basic HTML file that gets served up. It should have the name of your API and link to your API's GitHub folder
  Migration files
- API Documentation in the form of a README.md file https://github.com/matiassingers/awesome-readme
- The top of your readme should say “This was created during my time as a student at Code Chrysalis”
- A demo, but make sure to talk about what the API is about and the endpoints. Make sure your setup works!
- Publish your code to Github and make it public :)

## Advanced Requirements

Tests
Deployed on Heroku, Firebase, etc.
Create a basic/simple frontend that utilizes these endpoints.
A script that will set up and seed a database
Useful Tips:

Start a new project from scratch:
Consult and follow along the getting started guides of Express, your ORM library of choice, etc.
You don’t need to separate code into multiple files before your server can be started properly.
Remember, “premature optimization is the root of all evil”, by Donald Knuth.
