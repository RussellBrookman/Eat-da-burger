DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	burger_name varchar(25),
	price INTEGER(3) ,
	quantity INTEGER(3) ,
	/*default value will be automaticly updated to current timestamp*/
	ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	PRIMARY KEY (id)
);


