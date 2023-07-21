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










-------------------------------------------------------------------------------
 -- SUB QUERY

 SELECT AVG(salary) FROM employee;

 SELECT * FROM employee WHERE salary > (SELECT AVG(salary) FROM employee); -- THE INNER QUERY IS RUN FIRST THEN THE OUTER QUERY EXECUTE 

 -- SCALARY SUBQUERY
 -- IT ALWAYS RETURNS 1 ROW AND 1 COLUMN
 SELECT * FROM employee e
 JOIN (SELECT AVG(salary) sal FROM employee) avg_sal
 ON e.salary > avg_sal;


 -- multiple row sub query

 -- subquery returns multiple column and rows

 -- QUESTION => FIND THE EMPLOYEES WHO EEARNS THE HIGHEEST SALARY IN EACH DEPARTMENT


SELECT dept_name, MAX(salary) FROM employee GROUP BY dept_name;

SELECT * FROM employee  
WHERE (dept_name, salary) 
IN (SELECT dept_name, MAX(salary) 
FROM employee 
GROUP BY dept_name);


-- single column multiple rows subquery

-- QUESTION => FIND DEPARTMENT WHO DO NOT HAVE ANY EMPLOYEES
SELECT DISTINCT dept_name FROM employee;

SELECT * FROM department WHERE NOT IN (SELECT DISTINCT dept_name FROM employee);



-- CORRELATED SUB-QUERY
-- sub query which is related to the outer query

-- QUESTION => FIND THE EMPLOYEES IN EACH DEPARTMENT WHO EARNS MORE THAN THE AVERAGE SALARY IN THAT DEPARTMENT


SELECT AVG(salary) FROM employee WHERE dept_name = 'specific dept';

SELECT * FROM EMPLOYEE e1 
WHERE salary > (SELECT AVG(salary) FROM employee e2 WHERE e2.dept_name = e1.dept_name);


-- QUESTION => FIND THE DEPARTMENT WHO DO NOT HAVE EMPLOYEES

SELECT 1 FROM employee e WHERE e.dept_name = "marketting"

SELECT * FROM department d WHERE NOT EXISTS(SELECT 1 FROM employee e WHERE e.dept_name = d.dept_name);




-- NESTED SUB-QUERY

-- FIND THE STORES WHO'S SALES WERE BETTER THAN THE AVERAGE SALES ACROSS ALL STORES

-- 1) find the total sales for each store
-- 2) find AVG sales for all the stores
-- 3) compare 1 and 2 

-- EXAMPLE WHICH IS NOT THE BEST SUB QUERY
SELECT * FROM(
    SELECT store_name, SUM(price) as total_sales
    FROM sales GROUP BY store_name) sales 
    JOIN (SELECT AVG(total_sales) AS sales 
    FROM (SELECT store_name, SUM(price) as total_sales FROM sales GROUP BY store_name x) 
    avg_sales ON sales.total_sales = avg_sales.sales
    )


-- A BETTER EXAMPLE IS 'WITH' CLAUSE

WITH sales as (SELECT store_name, SUM(price) AS total_sales FROM sales
    GROUP BY store_name
)
SELECT * FROM sales 
JOIN(SELECT AVG(total_sales) AS sales FROM sales x) avg_sales ON 
sales.total_sales > avg_sales.sales;



--USING A SUBQUERY IN THE SELECT CLAUSE SHOULD ALWAYS BE AVOIDED BECAUSE IT HITS THE DATABASE TOO OFTEN

-- QUESTION -> FETCH ALL EMPLOYEE DETAILS AND ADD REMARKS TO THOSE EMPLOYEES WHO EARN MORE THAN THE AVERAGE

SELECT *, (CASE WHEN salary > (SELECT AVG(salary) FROM employee) 
        THEN 'HIGHER THAN AVERAGE SALARY'
        ELSE NULL
    END) AS remarks FROM employee;

-- ANOTHER ALTERNATIVE TO DOING THIS IS THE 'CROSS JOIN' CLAUSE

SELECT *, (CASE WHEN salary > avg_sal.sal
    THEN 'HIGHER THAN AVERAGE SALARY'
    ELSE NULL 
    END) AS remarks FROM employee 
    CROSS JOIN (SELECT AVG(salary) sal FROM employee) avg_sal;



-- HAVING 

-- QUESTION => FIND THE STORES WHICH HAVE SOLD MORE UNITS THAN THE AVERAGE UNIT SOLD BY ALL STORES

SELECT store_name, SUM(quantity) FROM sales GROUP BY store_name
    HAVING SUM(quantity) > (SELECT AVG(quantity) FROM sales);




-- WE CAN ALSO HAVE THE SUB QUERY IN THE 
-- INSERT 
-- UPDATE 
-- DELETE 

-- QUESTION => INSERT DATA TO EMPLOYEE HISTORY TABLE . MAKE SURE NO DUPLICATES

INSERT INTO employee_history 
SELECT e.id, e.name, e.salary FROM employee e
JOIN department d ON d.name = e.name
WHERE NOT EXISTS (SELECT 1 FROM employee_history eh WHERE eh.id = e.id);


-- QUESTION => GIVE 10% INCREMENT TO ALL EMPLOYEES IN BANGALORE LOCATION BASED ON THE MAXIMUM SALARY EARNED BY AN EMPLOYEE IN EACH DEPARTMENT. ONLY IN EMPLOYEE_HISTORY TABLE

UPDATE employee e
SET salary = (
    SELECT FROM MAX(salary) + (MAX(salary) * 0.1) employee_history eh 
    WHERE eh.dept_name = e.dept_name
)
WHERE e.dept_name IN (
    SELECT dept_name FROM department WHERE location = 'Bangalore')
    AND e.emp_id IN(SELECT emp_id FROM employee_history);




-- DELETE STATEMENT 
-- QUESTION => DELETE ALL DEPARTMENT WHO DO NOT HAVE ANY EMPLOYEE 

DELETE FROM department WHERE dept_name IN (SELECT dept_name FROM department d WHERE NOT EXISTS(SELECT 1 FROM employee e WHERE e.dept_name = d.dept_name);
)


-- THEY ARE 3 INSTANCE WHERE WE USE A SUB QUERY


-- 1). THE 'SELECT' STATEMENT
SELECT name, description, (SELECT AVG(effect)FROM herb) FROM herb; -- A SUBQUERY IN A SELECT STATEMENT

-- 2). THE 'FROM' STATEMENT
SELECT * FROM herb;
SELECT name, description FROM (SELECT * FROM herb) herb;

-- 3) THE 'WHERE' CLAUSE
SELECT * FROM herb WHERE name IN (SELECT name FROM herb WHERE name LIKE '%se%');