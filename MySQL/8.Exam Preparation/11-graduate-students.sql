DELIMITER $
CREATE PROCEDURE `udp_graduate_all_students_by_year`(`year_started`INT)
BEGIN
	UPDATE `courses` AS `c`
		JOIN `students_courses` AS `sc` ON `c`.`id` = `sc`.`course_id`
        JOIN `students` AS `s` ON `sc`.`student_id` = `s`.`id`
	SET `s`.`is_graduated` = 1
    WHERE YEAR(`c`.`start_date`) = `year_started`;
END $
DELIMITER ;

CALL udp_graduate_all_students_by_year(2017); 
