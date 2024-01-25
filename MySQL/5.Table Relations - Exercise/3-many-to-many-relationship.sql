CREATE TABLE `students` (
    `student_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50)
);
INSERT INTO `students` (`name`)
VALUES ('Mila'),
    ('Toni'),
    ('Ron');
CREATE TABLE `exams` (
    `exam_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50)
);
INSERT INTO `exams` (`exam_id`, `name`)
VALUES ('101', 'Spring MVC'),
    ('102', 'Neo4j'),
    ('103', 'Oracle 11g');
CREATE TABLE `students_exams` (
    `student_id` INT,
    `exam_id` INT,
    PRIMARY KEY (`student_id`, `exam_id`),
    FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
    FOREIGN KEY (`exam_id`) REFERENCES `exams` (`exam_id`)
);
INSERT INTO `students_exams`
VALUES ('1', '101'),
    ('1', '102'),
    ('2', '101'),
    ('3', '103'),
    ('2', '102'),
    ('2', '103');
