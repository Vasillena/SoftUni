DELIMITER $ 
  CREATE PROCEDURE `usp_get_towns_starting_with` (IN `start_string` VARCHAR(50)) 
  BEGIN
SELECT `name` AS 'town_name'
FROM `towns`
WHERE `name` LIKE CONCAT(`start_string`, '%')
ORDER BY `name` ASC;
END $ 
  DELIMITER;
