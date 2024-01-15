SELECT name,
  CASE
    WHEN HOUR(g.start) BETWEEN 0 AND 11 THEN "Morning"
    WHEN HOUR(g.start) BETWEEN 12 AND 17 THEN "Afternoon"
    WHEN HOUR(g.start) BETWEEN 18 AND 23 THEN "Evening"
  END AS "Part of the Day",
  
  CASE
    WHEN g.duration <= 3 THEN "Extra Short"
    WHEN g.duration >= 3 AND g.duration <= 6 THEN "Short"
    WHEN g.duration >=6 AND g.duration <= 10 THEN "Long"
    ELSE "Extra Long"
  END AS "Duration"
FROM games AS g;
