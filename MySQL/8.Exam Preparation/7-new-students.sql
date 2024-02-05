SELECT
	CONCAT_WS(' ', `s`.`first_name`, `s`.`last_name`) AS 'full_name',
    SUBSTRING(`s`.`email`, 2,10) AS 'username',
    REVERSE(`s`.`phone`) AS 'password'
FROM `students` AS `s`
LEFT JOIN `students_courses` AS `sc` ON `s`.`id` = `sc`.`student_id`
WHERE `sc`.`course_id` IS NULL
ORDER BY `password` DESC;
