-- -- -- 🔺 manupulation

-- CREATE TABLE - creates a new table.
-- INSERT INTO - adds a new row to a table.
-- SELECT - queries data from a table.
-- ALTER TABLE - changes an existing table.
-- UPDATE - edits a row in a table.
-- DELETE FROM - deletes rows from a table.


-- manupulation exercise

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

-- queries exercise
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







-- -- -- 🔺 
-- -- 🔸