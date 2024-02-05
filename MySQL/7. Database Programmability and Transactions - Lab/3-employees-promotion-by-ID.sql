DELIMITER $
CREATE PROCEDURE `usp_raise_salary_by_id`(`id` INT)
BEGIN 
	DECLARE `employee_id_count` INT;
    SET `employee_id_count` := (
		SELECT COUNT(*)
        FROM `employees`
        WHERE `employee_id` = `id`
    );
    IF(`employee_id_count` = 1)
    THEN
     UPDATE `employees`
        SET `salary` = `salary` * 1.05
        WHERE `employee_id` = `id`;
        END IF;
END $

DELIMITER ;
;
