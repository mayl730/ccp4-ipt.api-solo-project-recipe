const config = require("../knexfile");
require("dotenv").config();
const knex = require("knex")(config);

module.exports = knex;
