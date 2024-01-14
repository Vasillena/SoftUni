CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(26) NOT NULL,
    profile_picture BLOB,
    last_login_time TIMESTAMP,
    is_deleted ENUM('true', 'false')
);

INSERT INTO users (username, password) VALUES 
("Test1", "Test11"),
("Test2", "Test22"),
("Test3", "Test33"),
("Test4", "Test44"),
("Test5", "Test55");
