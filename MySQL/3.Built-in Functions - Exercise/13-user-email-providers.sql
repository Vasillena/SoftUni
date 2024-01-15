SELECT user_name, SUBSTRING_INDEX(email, '@', -1) AS "email provider" FROM users
ORDER BY SUBSTRING_INDEX(email, '@', -1), user_name;
