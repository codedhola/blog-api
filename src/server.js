require("dotenv").config();
const { Client } = require("./config/db");
const app = require("./app");
const { runTableUp } = require("./migrations/tableUp");
const seed_blog = require("./seed/seedBlog");
const seed_user = require("./seed/seedUser");

Client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
    return;
  }

  runTableUp(Client)
    .then(() => console.table("table created!"))
    .catch((error) => console.error(error.stack));

  seed_blog(Client)
    .then(() => console.table("blog database populated with data!"))
    .catch((error) => console.error(error.stack));

  seed_user(Client)
    .then(() => console.table("user database populated with data!"))
    .catch((error) => console.error(error.stack));

  app.listen(process.env.PORT, () => {
    console.log(
      `App connected to database running on port ${process.env.PORT}`
    );
  });
});
