SELECT
	COUNT(`s`.`id`) AS 'students_count',
    `u`.`name` AS 'university_name'
FROM `students` AS `s`
	JOIN `students_courses` AS `sc` ON `s`.`id` = `sc`.`student_id`
	JOIN `courses` AS `c` ON `sc`.`course_id` = `c`.`id`
	JOIN `universities` AS `u` ON `c`.`university_id` = `u`.`id`
GROUP BY  `u`.`name`
HAVING `students_count` >= 8
ORDER BY `students_count` DESC, `u`.`name` DESC;
