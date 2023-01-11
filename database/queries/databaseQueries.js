const createDB = "CREATE DATABASE [IF NOT EXIST] blog_api;";

const createTableUser = `CREATE TABLE IF NOT EXISTS users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    email VARCHAR(100) NOT NULL UNIQUE, 
    first_name VARCHAR(75) NOT NULL, 
    last_name VARCHAR(75) NOT NULL, 
    password VARCHAR(200) NOT NULL, 
    phone VARCHAR(20) NOT NULL, 
    address VARCHAR(100), 
    is_admin BOOLEAN DEFAULT FALSE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`

const enumState= `CREATE TYPE state AS ENUM('draft', 'published');`

const createTableBlog = `CREATE TABLE blog(
    blog_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(75) NOT NULL,
    description VARCHAR(75) NOT NULL,
    body VARCHAR(255) NOT NULL,
    tags VARCHAR(100),
    authour VARCHAR(75) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state STATE DEFAULT 'draft',
    read_count INT DEFAULT 1,
    reading_time INT, 
    slug VARCHAR(100) NOT NULL
);
`

const password_reset = `CREATE TABLE IF NOT EXISTS password_resets (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP 
);`