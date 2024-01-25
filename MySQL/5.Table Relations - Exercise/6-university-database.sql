CREATE TABLE `majors` (
    `major_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50)
);
CREATE TABLE `students` (
    `student_id` INT PRIMARY KEY AUTO_INCREMENT,
    `student_number` VARCHAR(12),
    `student_name` VARCHAR(50),
    `major_id` INT,
    FOREIGN KEY (`major_id`) REFERENCES `majors` (`major_id`)
);
CREATE TABLE `payments` (
    `payment_id` INT PRIMARY KEY AUTO_INCREMENT,
    `payment_date` DATE,
    `payment_amount` DECIMAL(8, 2),
    `student_id` INT,
    FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
);
CREATE TABLE `subjects` (
    `subject_id` INT PRIMARY KEY AUTO_INCREMENT,
    `subject_name` VARCHAR(50)
);
CREATE TABLE `agenda` (
    `student_id` INT,
    `subject_id` INT,
    PRIMARY KEY (`student_id`, `subject_id`),
    FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
    FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`)
);
