DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	burger_name "",
	devoured boolean NOT NULL DEFAULT 0,
	/*default value will be automaticly updated to current timestamp*/
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
	dt DATETIME DEFAULT CURRENT_TIMESTAMP
	PRIMARY KEY (id)
);

