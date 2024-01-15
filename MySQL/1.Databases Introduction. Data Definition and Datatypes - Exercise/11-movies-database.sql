CREATE TABLE directors (
id INT AUTO_INCREMENT PRIMARY KEY,
director_name VARCHAR(45) NOT NULL,
notes TEXT);

CREATE TABLE genres (
id INT AUTO_INCREMENT PRIMARY KEY,
genre_name VARCHAR(45) NOT NULL,
notes TEXT);

CREATE TABLE categories (
id INT AUTO_INCREMENT PRIMARY KEY,
category_name VARCHAR(45) NOT NULL,
notes TEXT);

CREATE TABLE movies (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(45) NOT NULL,
director_id INT,
copyright_year DATE,
length INT(4),
genre_id INT,
category_id INT,
rating INT,
notes TEXT);

INSERT INTO directors (director_name, notes) VALUES
('Test1', NULL),
('Test2', NULL),
('Test3', NULL),
('Test4', NULL),
('Test5', NULL);

INSERT INTO genres (genre_name, notes) VALUES
('Test11', NULL),
('Test22', NULL),
('Test33', NULL),
('Test44', NULL),
('Test55', NULL);

INSERT INTO categories (category_name, notes) VALUES
('Test111', NULL),
('Test222', NULL),
('Test333', NULL),
('Test444', NULL),
('Test555', NULL);

INSERT INTO movies (title, copyright_year, rating, notes) VALUES
('Test1111', '2000-01-10', '5', NULL),
('Test2222', '2000-02-11', '5', NULL),
('Test3333', '2000-03-12', '5', NULL),
('Test4444', '2000-04-13', '5', NULL),
('Test5555', '2000-05-14', '5', NULL);
