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
  
CREATE PROCEDURE `usp_calculate_future_value_for_account` (`id_input` INT, `account_interest_rate` DECIMAL(19,4))
BEGIN
SELECT
		`a`. `id`  AS 'account_id',
		`ah`. `first_name`,
        `ah`. `last_name`,
        `a`. `balance` AS 'current_balance',
        `ufn_calculate_future_value`(`a`. `balance`, `account_interest_rate`, 5) AS 'balance_in_5_years'
	FROM `account_holders` AS `ah`
		JOIN `accounts` AS `a` ON `ah`.`id` = `a`.`account_holder_id`
	WHERE `a`. `id` = `id_input`;
END $
DELIMITER ;
CALL `usp_calculate_future_value_for_account`(1, 0.1);
