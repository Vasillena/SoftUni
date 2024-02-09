SELECT
	LEFT(`p`.`address`,6) AS 'agent_name',
    CHAR_LENGTH(`p`.`address`) * 5430 AS 'price'
FROM `properties` AS `p`
	LEFT JOIN `property_offers` AS `po` ON `p`.`id` = `po`.`property_id`
WHERE `po`.`property_id` IS NULL
ORDER BY `agent_name` DESC, `price` DESC;
