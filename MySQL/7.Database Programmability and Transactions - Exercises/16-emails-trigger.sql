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

CREATE TABLE `notification_emails`(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `recipient` INT NOT NULL,
    `subject` VARCHAR(100) NOT NULL,
    `body` TEXT NOT NULL
);

CREATE TRIGGER `tr_notification_email_creation`
    AFTER INSERT
    ON `logs`
    FOR EACH ROW
BEGIN
    INSERT INTO `notification_emails`(`recipient`, `subject`, `body`)
        VALUE (`new`.`account_id`,
               CONCAT('Balance change for account: ', `new`.`account_id`),
               CONCAT('On ', NOW(), ' your balance was changed from ', `NEW`.`old_sum`,' to ', `NEW`.`new_sum`, '.'));

END;
