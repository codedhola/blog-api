// const createDB = "CREATE DATABASE blog_api;";
// const enumState = `CREATE TYPE state AS ENUM('draft', 'published');`;

const createTableUser = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; CREATE TABLE IF NOT EXISTS "users"(
    "user_id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    "email" VARCHAR(100) NOT NULL UNIQUE, 
    "username" VARCHAR(100) NOT NULL UNIQUE,
    "password" VARCHAR(200) NOT NULL, 
    "phone" VARCHAR(20), 
    "address" VARCHAR(100), 
    "roles" VARCHAR(50) CHECK (roles = 'admin' or roles = 'users') DEFAULT 'users', 
    "active" BOOLEAN DEFAULT TRUE);`;

const createTableBlog = `CREATE TABLE IF NOT EXISTS "blog"(
    "blog_id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "title" VARCHAR(75) NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "tags" VARCHAR(100),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "state" VARCHAR(50) DEFAULT 'draft',
    "read_count" INT DEFAULT 1,
    "reading_time" INT, 
    "slug" VARCHAR(100) NOT NULL,
    "author" uuid NOT NULL,
    FOREIGN KEY(author) REFERENCES users(user_id)
);
`;

const createPassword_reset = `CREATE TABLE IF NOT EXISTS "password_resets" (
    "id" SERIAL PRIMARY KEY,
    "user_id" uuid NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);`;

module.exports = {
  //   createDB,
  //   enumState,
  createTableBlog,
  createPassword_reset,
  createTableUser,
};
