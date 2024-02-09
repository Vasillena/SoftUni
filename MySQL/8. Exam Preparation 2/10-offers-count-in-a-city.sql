DELIMITER $
CREATE FUNCTION `udf_offers_from_city_name`(`cityName` VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN(
		SELECT COUNT(*)
        FROM `property_offers` AS `po`
			JOIN `properties` AS `p` ON `po`.`property_id` = `p`.`id`
            JOIN `cities` AS `c` ON `p`.`city_id` = `c`.`id`
		WHERE `c`.`name` = `cityName`
    );
END $
DELIMITER ;
