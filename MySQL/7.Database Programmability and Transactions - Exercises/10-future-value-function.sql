DELIMITER $
CREATE FUNCTION `ufn_calculate_future_value`(
			`sum` DOUBLE(10,4), 
            `yearly_interest_rate` DOUBLE(19,4), 
            `number_of_years` INT)
RETURNS DECIMAL(19,4)
DETERMINISTIC
BEGIN
	 RETURN `sum` * (POW((1 + `yearly_interest_rate`), `number_of_years`));
END $
DELIMITER ;
