CREATE TABLE categories (
id INT AUTO_INCREMENT PRIMARY KEY,
category VARCHAR(20) NOT NULL,
daily_rate DOUBLE,
weekly_rate DOUBLE,
monthly_rate DOUBLE,
weekend_rate DOUBLE);

INSERT INTO categories (category)
VALUES
("Test1"),
("Test2"),
("Test3");

CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY,
plate_number VARCHAR(20) NOT NULL,
make VARCHAR(20),
model VARCHAR(20),
car_year INT NOT NULL,
category_id INT,
doors INT,
picture BLOB,
car_condition VARCHAR(30),
available BOOLEAN);

INSERT INTO cars (plate_number, make, model, car_year)
VALUES
("XX1111XX", "Test1", "Test11", "2000"),
("XX2222XX", "Test2", "Test22", "2000"),
("XX3333XX", "Test3", "Test33", "2000");

CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
title VARCHAR(50),
notes TEXT);

INSERT INTO employees (first_name, last_name, title)
VALUES
("Test10", "Test11", "Test12"),
("Test20", "Test21", "Test22"),
("Test30", "Test31", "Test32");

CREATE TABLE customers (
id INT AUTO_INCREMENT PRIMARY KEY,
driver_license_number VARCHAR(20),
full_name VARCHAR(50) NOT NULL,
address VARCHAR(200) NOT NULL,
city VARCHAR(20),
zip_code INT(10),
notes TEXT);

INSERT INTO customers (driver_license_number, full_name, address, city)
VALUES
("1XXXXXXXX", "Test1 Test1", "Test111", "Test1111"),
("2XXXXXXXX", "Test2 Test2", "Test222", "Test2222"),
("3XXXXXXXX", "Test3 Test3", "Test333", "Test3333");

CREATE TABLE rental_orders (
id INT AUTO_INCREMENT PRIMARY KEY,
employee_id INT,
customer_id INT,
car_id INT,
car_condition VARCHAR(50),
tank_level VARCHAR(20),
kilometrage_start LONG,
kilometrage_end LONG,
total_kilometrage LONG,
start_date DATE,
end_date DATE,
total_days LONG,
rate_applied DOUBLE,
tax_rate DOUBLE,
order_status TEXT,
notes TEXT);

INSERT INTO rental_orders
(employee_id, customer_id, kilometrage_start, kilometrage_end)
VALUES
("1", "1", "100000", "400000"),
("2", "2", "200000", "500000"),
("3", "3", "300000", "600000");
