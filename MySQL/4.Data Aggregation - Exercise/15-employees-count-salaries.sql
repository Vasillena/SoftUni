SELECT
	COUNT(*) AS 'count'
FROM `employees`
WHERE
	`manager_id` IS NULL;
