SELECT first_name FROM employees WHERE department_id IN (3, 10)
AND YEAR(hire_date) >= 1995 AND YEAR(hire_date) <= 2005
ORDER BY department_id DESC;
