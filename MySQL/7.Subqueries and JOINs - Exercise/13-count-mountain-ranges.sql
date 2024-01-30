SELECT 
    `c`.`country_code`,
    COUNT(*) AS 'mountain_range'
FROM
    `mountains_countries` AS `c`
WHERE `c`.`country_code` IN ('BG' , 'RU', 'US')
GROUP BY `c`.`country_code`
ORDER BY `mountain_range` DESC;
