DROP DATABASE IF EXISTS burgerseq_db;
CREATE DATABASE burgerseq_db;
USE burgerseq_db;


INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Double cheeseburger', false, NOW(), NOW());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Veggie cheeseburger', false, NOW(), NOW());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('BBQ bacon cheeseburger', false, NOW(), NOW());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Turkey cheeseburger', false, NOW(), NOW());