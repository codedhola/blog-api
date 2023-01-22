CREATE DATABASE blog_api;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
    user_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    gender VARCHAR(10) CHECK(gender IN('male', 'female'))
);

CREATE TABLE blog(
    blog_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
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
    FOREIGN KEY(author_id) REFERENCES users(user_id)
);
