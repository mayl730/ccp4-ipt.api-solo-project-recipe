require("dotenv").config({
  path: "./.env.local",
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 **/

module.exports = {
  client: "postgresql",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
  ssl: { rejectUnauthorized: false },
  acquireConnectionTimeout: 10000,
  pool: {
    min: 0,
    max: 1,
    acquireTimeoutMillis: 300000,
    createTimeoutMillis: 300000,
    destroyTimeoutMillis: 300000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 2000,
  },
  debug: false,
};

// New Settings
// connection: process.env.DATABASE_URL || {
//   host: process.env.PGHOST || "127.0.0.1",
//   port: process.env.PGPORT || 5432,
//   database: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
// },

//  process.env.DB_URL ||
// module.exports = {
//   client: "pg",
//   debug: true,
//   connection: 9000,
//   migrations: {
//     tableName: "knex_migrations",
//     directory: "./db/migrations",
//   },
//   seeds: {
//     directory: "./db/seeds",
//   },
//   ssl: { rejectUnauthorized: false },
// };

// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

// || {
//   host: process.env.DB_HOST || "127.0.0.1",
//   port: process.env.DB_PORT || 5432,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// },
