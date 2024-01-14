CREATE TABLE people (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(200) NOT NULL,
picture LONGBLOB,
height DECIMAL(5,2),
weight DECIMAL(5,2),
gender ENUM('m', 'f') NOT NULL,
birthdate DATE NOT NULL,
biography TEXT
);

INSERT INTO people (name, picture, height, weight, gender, birthdate, biography) VALUES 
("Test1", NULL, NULL, NULL, 'm', "2000-01-10", NULL),
("Test2", NULL, NULL, NULL, 'f', "2000-02-11", NULL),
("Test3", NULL, NULL, NULL, 'm', "2000-03-12", NULL),
("Test4", NULL, NULL, NULL, 'f', "2000-04-13", NULL),
("Test5", NULL, NULL, NULL, 'm', "2000-05-14", NULL);
