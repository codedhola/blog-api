CREATE DATABASE blog_api;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
    id UUID DEFAULT UUID_GENERATE_V4(),
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    gender VARCHAR(10) CHECK(gender IN('male', 'female')),
    PRIMARY KEY(id)
);

CREATE TABLE blog(
    id UUID DEFAULT UUID_GENERATE_V4(),
    title VARCHAR(75) NOT NULL,
    description VARCHAR(100),
    body VARCHAR(250) NOT NULL,
    state VARCHAR(25) DEFAULT 'draft' CHECK(state in('draft', 'published')),
    tag VARCHAR(25)[],
    read_count INT DEFAULT 0,
    read_time INT,
    created_at TIMESTAMP DEFAULT now(),
    slug VARCHAR(100) NOT NULL,
    author_id UUID NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(author_id) REFERENCES users(id)
);



ALTER TABLE users ADD COLUMN roles VARCHAR(10) CHECK(roles IN('admin', 'users')) DEFAULT 'users';



-- ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL;

-- SELECT 'CREATE DATABASE practise' WHERE NOT EXISTS (SELECT datname FROM pg_database WHERE datname = 'practise')\gexec

-- CREATE DATABASE IF NOT EXISTS 'practise';

-- CREATE TABLE IF NOT EXISTS"devs" (
-- 	"id" SERIAL,
-- 	"name" VARCHAR(100) NOT NULL,
-- 	"role" VARCHAR(15) NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "users"(
--     "user_id" VARCHAR(300) PRIMARY KEY, 
--     "email" VARCHAR(100) NOT NULL UNIQUE, 
--     "username" VARCHAR(100) NOT NULL UNIQUE,
--     "password" VARCHAR(200) NOT NULL, 
--     "phone" VARCHAR(20) NOT NULL,
--     "address" VARCHAR(100), 
--     "roles" VARCHAR(50) CHECK (roles = 'admin' or roles = 'users'), 
--     "active" BOOLEAN DEFAULT true);

-- CREATE TABLE IF NOT EXISTS "testing"(
-- 	"name" VARCHAR(50),
-- 	"state" VARCHAR(50)
-- );

-- ALTER TABLE "testing" ADD CHECK(state = 'draft' or state = 'publish'); 

-- CREATE TABLE IF NOT EXISTS "blog"(
--     "blog_id" VARCHAR(250) PRIMARY KEY,
--     "title" VARCHAR(75) NOT NULL,
--     "body" VARCHAR(255) NOT NULL,
--     "tags" VARCHAR(100),
--     "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     "state" VARCHAR(50) CHECK(state = 'draft' or state = 'publish') DEFAULT 'draft',
--     "read_count" INT DEFAULT 1,
--     "reading_time" INT, 
--     "slug" VARCHAR(100) NOT NULL,
--     "author" VARCHAR(250 ) NOT NULL,
--     FOREIGN KEY(author) REFERENCES users(user_id)
-- );
