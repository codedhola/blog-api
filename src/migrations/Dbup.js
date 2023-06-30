const { Client } = require("../config/db");
const { createDB } = require("../database/queries/databaseQueries");

(() => {
  Client.query(createDB);
})();
