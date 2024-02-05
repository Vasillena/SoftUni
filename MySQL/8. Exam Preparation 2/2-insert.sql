INSERT INTO `property_transactions`(`property_id`, `buyer_id`, `transaction_date`, `bank_name`, `iban`, `is_successful`)
SELECT
	`po`.`agent_id` + DAY(`po`. `offer_datetime`),
    `po`.`agent_id` + MONTH(`po`. `offer_datetime`),
	DATE(`po`.`offer_datetime`),
   CONCAT('Bank ', `po`.`agent_id`),
   CONCAT('BG', `po`. `price`, `po`.`agent_id`),
   true
FROM `property_offers` AS  `po`
WHERE `po`.`agent_id` <= 2;
