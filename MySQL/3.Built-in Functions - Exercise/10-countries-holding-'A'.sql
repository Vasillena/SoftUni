SELECT country_name, iso_code FROM countries
WHERE LENGTH(country_name) - LENGTH(REPLACE(UPPER(country_name), 'A', '')) >= 3
ORDER BY iso_code ASC;
