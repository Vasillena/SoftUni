DELIMITER $
CREATE FUNCTION `ufn_count_employees_by_town`(`town_name` VARCHAR(50))
	RETURNS INT
    DETERMINISTIC
BEGIN
	DECLARE result INT;
  SET @result := (SELECT COUNT(*)
        FROM `employees` AS `e`
        JOIN `addresses` AS `a` ON `e`. `address_id` = `a`. `address_id` 
        JOIN `towns` AS `t` ON `a`. `town_id` = `t`. `town_id`
        WHERE `t`. `name` = `town_name`
        );
  RETURN @result;
END $

DELIMITER ;
;

SELECT `ufn_count_employees_by_town`('Sofia') AS 'count';
