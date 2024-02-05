CREATE TABLE `deleted_employees`(
  `employee_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(20),
  `last_name` VARCHAR(20),
  `middle_name` VARCHAR(20),
  `job_title` VARCHAR(50),
  `department_id` INT,
  `salary` DOUBLE
  );

CREATE TRIGGER `delete_employees_trigger`
AFTER DELETE
ON `employees`
FOR EACH ROW
  INSERT INTO `deleted_employees`(`first_name`, `last_name`, `middle_name`, `job_title`, `department_id`,`salary`)
  VALUES (old.`first_name`, old.`last_name`, old.`middle_name`, old.`job_title`, old.`department_id`, old.`salary`);
