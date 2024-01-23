CREATE TABLE `mountains` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
);

CREATE TABLE `peaks` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `mountain_id` INT,
    CONSTRAINT `fk_peaks_mountain_id_mountains_id` 
        FOREIGN KEY (`mountain_id`)
        REFERENCES `mountains` (`id`)
);
