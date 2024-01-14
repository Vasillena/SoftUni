CREATE TABLE directors (
id INT AUTO_INCREMENT NOT NULL,
director_name VARCHAR(45) NOT NULL,
notes TEXT,
PRIMARY KEY (id));

CREATE TABLE genres (
id INT AUTO_INCREMENT NOT NULL,
genre_name VARCHAR(45) NOT NULL,
notes TEXT,
PRIMARY KEY (id));

CREATE TABLE categories (
id INT AUTO_INCREMENT NOT NULL,
category_name VARCHAR(45) NOT NULL,
notes TEXT,
PRIMARY KEY (id));

CREATE TABLE movies (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(45) NOT NULL,
director_id INT NOT NULL,
copyright_year YEAR,
length INT,
genre_id INT NOT NULL,
category_id INT NOT NULL,
rating INT,
notes TEXT,
PRIMARY KEY (id),
FOREIGN KEY (director_id) REFERENCES directors(id),
FOREIGN KEY (genre_id) REFERENCES genres(id),
FOREIGN KEY (category_id) REFERENCES categories(id));

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

INSERT INTO movies (title, director_id, copyright_year, length, genre_id, category_id, rating, notes) VALUES
('Test1111', 1, 2000, 120, 1, 1, 5, NULL),
('Test2222', 2, 2000, 120, 2, 2, 5, NULL),
('Test3333', 3, 2000, 120, 3, 3, 5, NULL),
('Test4444', 4, 2000, 120, 4, 4, 5, NULL),
('Test5555', 5, 2000, 120, 5, 5, 5, NULL);
