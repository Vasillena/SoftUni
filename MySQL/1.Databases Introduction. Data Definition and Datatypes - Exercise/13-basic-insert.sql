CREATE TABLE towns (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL);

CREATE TABLE addresses (
id INT AUTO_INCREMENT PRIMARY KEY,
address_text VARCHAR(100) NOT NULL,
town_id INT);

ALTER TABLE addresses
ADD CONSTRAINT town_fk
FOREIGN KEY (town_id)
REFERENCES towns (id);

CREATE TABLE departments (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL);

CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50),
middle_name VARCHAR(50),
last_name VARCHAR(50),
job_title VARCHAR(50),
department_id INT,
hire_date DATE,
salary DOUBLE,
address_id INT);

ALTER TABLE employees
ADD CONSTRAINT department_fk
FOREIGN KEY (department_id)
REFERENCES departments (id);

ALTER TABLE employees
ADD CONSTRAINT address_fk
FOREIGN KEY (address_id)
REFERENCES addresses (id);

INSERT INTO towns (name)
VALUES
("Sofia"),
("Plovdiv"),
("Varna"),
("Burgas");

INSERT INTO departments (name)
VALUES
("Engineering"),
("Sales"),
("Marketing"),
("Software Development"),
("Quality Assurance");

INSERT INTO employees
(first_name, middle_name, last_name, job_title, department_id, hire_date, salary)
VALUES
("Ivan", "Ivanov", "Ivanov", ".NET Developer", 4, '2013-02-01', 3500.00),
("Petar", "Petrov", "Petrov", "Senior Engineer", 1, '2004-03-02', 4000.00),
("Maria", "Petrova", "Ivanova", "Intern", 5, '2016-08-28', 525.25),
("Georgi", "Terziev", "Ivanov", "CEO", 2, '2007-12-09', 3000.00),
("Peter", "Pan", "Pan", "Intern", 3, '2016-08-28', 599.88);
