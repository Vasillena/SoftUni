-- DROP DATABASE `universities_db`;

SELECT
	`id`,
  `name`,
  `population`,
  `country_id`
FROM `cities`
ORDER BY `population` DESC;
