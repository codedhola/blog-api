const users = [
  {
    id: "c6691aee-a657-41f1-9122-c0dca9ef3152",
    username: "coded hola",
    email: "codedhola2000@gmail.com",
    password: "$2b$10$uvAKux2qKbIlto5vq1727uPkls3wLWQATRaS2rVYiVBVPz8.Ri4O2",
  },

  {
    id: "ef8eb644-c392-4bc7-bcc9-8eb6f3dee8db",
    username: "ola samuel",
    email: "olakintan2015@gmail.com",
    password: "$2b$10$34KMa4o1gfWzHvsTfvBrXOV2ezn72ZyowLz0zA8a.QJyWPLxK8zvq",
  },
];

const userQueries = require("./../database/queries/userQueries");

async function seed_user(client) {
  try {
    await client.connect();

    const user = await client.query(userQueries.getAllUser);

    if (!user.rows.length) {
      for (let i = 0; i < users.length; i++) {
        const { username, email, password } = users[i];
        await client.query(userQueries.populateUser, [
          id,
          username,
          email,
          password,
        ]);
      }
    } else {
      console.log("Data already exist in database...");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seed_user;
