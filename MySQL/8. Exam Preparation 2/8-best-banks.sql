SELECT
	`bank_name`,
    COUNT(`bank_name`) AS 'count'
FROM `property_transactions`
GROUP BY `bank_name`
HAVING `count` >=9
ORDER BY `count` DESC, `bank_name`;
