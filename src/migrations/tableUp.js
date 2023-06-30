const {
  createTableUser,
  createTableBlog,
  createPassword_reset,
} = require("../database/queries/databaseQueries");

const runTableUp = async (client) => {
  await client.connect();
  try {
    await client.query(createTableUser);
    await client.query(createTableBlog);
    await client.query(createPassword_reset);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  runTableUp,
};
