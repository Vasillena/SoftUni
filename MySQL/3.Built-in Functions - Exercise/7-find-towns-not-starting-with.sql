SELECT town_id, name FROM towns WHERE SUBSTRING(name, 1, 1)
NOT IN ("R", "B", "D") ORDER BY name ASC;
