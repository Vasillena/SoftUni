SELECT peaks.peak_name, rivers.river_name, LOWER(CONCAT(peaks.peak_name, SUBSTRING(rivers.river_name, 2))) AS mix
FROM peaks
JOIN rivers ON SUBSTRING(peaks.peak_name, -1) = SUBSTRING(rivers.river_name, 1, 1)
ORDER BY mix;
