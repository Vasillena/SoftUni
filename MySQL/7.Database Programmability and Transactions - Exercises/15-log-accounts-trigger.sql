CREATE TABLE `logs`(
    `log_id`     INT PRIMARY KEY AUTO_INCREMENT,
    `account_id` INT            NOT NULL,
    `old_sum`    DECIMAL(19, 4) NOT NULL,
    `new_sum`    DECIMAL(19, 4) NOT NULL
);


CREATE TRIGGER `trigger_balance_update`
    AFTER UPDATE
    ON `accounts`
    FOR EACH ROW
BEGIN
    IF `OLD`.`balance` != `new`.`balance`
    THEN
        INSERT INTO `logs` (`account_id`, `old_sum`, `new_sum`)
            VALUE (`OLD`.`id`, `OLD`.`balance`, `new`.`balance`);
    END IF;
END;
