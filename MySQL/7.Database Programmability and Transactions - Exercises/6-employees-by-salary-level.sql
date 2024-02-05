DELIMITER $
CREATE PROCEDURE `usp_get_employees_by_salary_level`(`salary_level` VARCHAR(7))
BEGIN
    SELECT `first_name`, `last_name`
    FROM `employees`
    WHERE (`salary` < 30000 AND `salary_level` = 'Low')
       OR (`salary` >= 30000 AND `salary` <= 50000 AND `salary_level` = 'Average')
       OR (`salary` > 50000 AND `salary_level` = 'High')
    ORDER BY `first_name` DESC, `last_name` DESC;
END $
DELIMITER ;
