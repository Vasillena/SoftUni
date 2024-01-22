SELECT
	`first_name`,
    `last_name`,
    `department_id`
FROM `employees` AS `emp1`
WHERE
	`salary` > (
			SELECT AVG(`salary`)
            FROM `employees` AS `emp2`
            WHERE `emp1`. `department_id` = `emp2`. `department_id`
    )
ORDER BY `department_id`, `employee_id`
LIMIT 10;
