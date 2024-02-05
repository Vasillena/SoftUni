DELIMITER $
CREATE FUNCTION `udf_average_alumni_grade_by_course_name`(`course_name` VARCHAR(60))
    RETURNS DECIMAL(19, 2)
    DETERMINISTIC
BEGIN
    RETURN (SELECT (AVG(`grade`))
            FROM `courses` AS `c`
                     JOIN `students_courses` AS `sc` ON `c`.`id` = `sc`.`course_id`
                     JOIN `students` AS `s` ON `sc`.`student_id` = `s`.`id`
            WHERE `s`.`is_graduated` = 1
              AND `c`.`name` = `course_name`
            GROUP BY `course_id`);
END $
DELIMITER ;
