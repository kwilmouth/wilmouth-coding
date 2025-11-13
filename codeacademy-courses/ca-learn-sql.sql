-- -- -- 🔺 manupulation

-- CREATE TABLE - creates a new table.
-- INSERT INTO - adds a new row to a table.
-- SELECT - queries data from a table.
-- ALTER TABLE - changes an existing table.
-- UPDATE - edits a row in a table.
-- DELETE FROM - deletes rows from a table.

-- 🔸 manupulation exercise

CREATE TABLE friends (
   id INTEGER,
   name TEXT,
   birthday DATE
);

INSERT INTO friends (id, name, birthday) 
VALUES (1, "Ororo Munroe", "1940-05-30");

INSERT INTO friends (id, name, birthday) 
VALUES (2, "Chaf Munroe", "1941-05-30");

INSERT INTO friends (id, name, birthday) 
VALUES (3, "Ford Munroe", "1942-05-30");

UPDATE friends
SET name = 'Storm'
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN  email TEXT;

UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

DELETE FROM friends
WHERE id = 1;


SELECT * 
FROM friends;


-- -- -- 🔺 queries

-- SELECT - is the clause we use every time we want to query information from a database.
-- AS - renames a column or table.
-- DISTINCT - return unique values.
-- WHERE - is a popular command that lets you filter the results of the query based on conditions that you specify.
-- LIKE and BETWEEN - are special operators.
-- AND and OR - combines multiple conditions.
-- ORDER BY - sorts the result.
-- LIMIT - specifies the maximum number of rows that the query will return.
-- CASE - creates different outputs.

-- 🔸 queries exercise
SELECT *
FROM nomnom;

SELECT DISTINCT neighborhood
FROM nomnom;

SELECT DISTINCT cuisine
FROM nomnom;

SELECT *
FROM nomnom
WHERE cuisine = 'Chinese';

SELECT *
FROM nomnom
WHERE review >= 4;

SELECT *
FROM nomnom
WHERE cuisine = 'Italian'
   AND price LIKE '%$$$%';

SELECT *
FROM nomnom
WHERE name LIKE '%meatball%';

SELECT *
FROM nomnom
WHERE neighborhood = 'Midtown'
   OR neighborhood = 'Downtown'
   OR neighborhood = 'Chinatown'; 

SELECT *
FROM nomnom
WHERE health IS NULL;

SELECT *
FROM nomnom
ORDER BY review DESC
LIMIT 10;

SELECT name,
 CASE
  WHEN review > 4.5 THEN 'Extraordinary'
  WHEN review > 4 THEN 'Excellent'
  WHEN review > 3 THEN 'Good'
  WHEN review > 2 THEN 'Fair'
  ELSE 'Poor'
 END AS 'Review'
FROM nomnom;


-- -- -- 🔺 Aggregate Functions

-- COUNT() - count the number of rows
-- SUM() - the sum of the values in a column
-- MAX() / MIN() - the largest/smallest value
-- AVG() - the average of the values in a column
-- ROUND() - round the values in the column
-- GROUP BY - is a clause used with aggregate functions to combine data from one or more columns.
-- HAVING - limit the results of a query based on an aggregate property.

-- The WHERE clause filters rows, whereas the HAVING clause filter groups.

-- Count example
SELECT COUNT(*) 
FROM fake_apps
WHERE price = 0;

-- Sum example
SELECT SUM(downloads)
FROM fake_apps;

-- Max / Min example
SELECT MAX(price)
FROM fake_apps;

-- Average example
SELECT AVG(price)
FROM fake_apps;

-- Round example
SELECT ROUND(AVG(price), 2)
FROM fake_apps;

-- Group By I example 1
SELECT price, COUNT(*) 
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;

-- Group By I example 2
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;

-- Group By II example
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;

-- Having example
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(name) > 10;


-- 🔸 Trends in Startups exercise
SELECT *
FROM startups;

SELECT COUNT(*)
FROM startups;

SELECT SUM(valuation)
FROM startups;

SELECT MAX(raised)
FROM startups;

SELECT MAX(raised)
FROM startups
WHERE stage = 'Seed';

SELECT MIN(founded)
FROM startups;

   -- Let's find out the valuations among different sectors:

SELECT AVG(valuation)
FROM startups;

SELECT category, AVG(valuation)
FROM startups
GROUP BY category;

SELECT category, ROUND(AVG(valuation), 2)
FROM startups
GROUP BY category;

SELECT category, ROUND(AVG(valuation), 2)
FROM startups
GROUP BY 1
ORDER BY 2 DESC;

   -- What are the most competitive markets?

SELECT category, COUNT(*)
FROM startups
GROUP BY category;

SELECT category, COUNT(*)
FROM startups
GROUP BY category
HAVING COUNT(*) > 3;

   -- Let's see if there's a difference in startups sizes among different locations:

SELECT location, AVG(employees)
FROM startups
GROUP BY location;

SELECT location, AVG(employees)
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;

-- 🔸 Analyze Hacker News Trends exercise

SELECT title, score
FROM hacker_news
ORDER BY score DESC
LIMIT 5;

SELECT SUM(score)
FROM hacker_news;

SELECT user, SUM(score)
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200
ORDER BY 2 DESC;

SELECT (517 + 309 + 304 + 282) / 6366.0;

SELECT user,
   COUNT(*)
FROM hacker_news
WHERE url LIKE '%watch?v=dQw4w9WgXcQ%'
GROUP BY user
ORDER BY COUNT(*) DESC;

   -- Hacker News Moderating

SELECT user,
   COUNT(*)
FROM hacker_news
WHERE url LIKE '%watch?v=dQw4w9WgXcQ%'
GROUP BY 1
ORDER BY 2 DESC;

   -- Which sites feed Hacker News?

SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source'
FROM hacker_news;

-- OR

SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source',
  COUNT(*)
FROM hacker_news
GROUP BY 1;

   -- What's the best time to post a story?

SELECT timestamp
FROM hacker_news
LIMIT 10;

SELECT timestamp,
   strftime('%H', timestamp)
FROM hacker_news
GROUP BY 1
LIMIT 20;

SELECT strftime('%H', timestamp), 
   AVG(score),
   COUNT(*)
FROM hacker_news
GROUP BY 1
ORDER BY 2 DESC;

-- OR

SELECT strftime('%H', timestamp) AS 'Hour', 
   ROUND(AVG(score), 1) AS 'Average Score', 
   COUNT(*) AS 'Number of Stories'
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC;


-- -- -- 🔺 Multiple Tables

-- Introduction example
SELECT *
FROM orders
LIMIT 5;

SELECT *
FROM subscriptions
LIMIT 5;

SELECT * 
FROM customers
LIMIT 5;

-- Combining Tables with SQL example
SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id;

SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

-- Inner Joins example



-- 🔸 




































-- -- -- 🔺 
-- 🔸 