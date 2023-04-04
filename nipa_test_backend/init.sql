-- CREATE TABLE IF NOT EXISTS tickets 
-- (id  SERIAL , title VARCHAR(255) NOT NULL,
-- contact_information VARCHAR(255) NOT NULL,
-- status_id INTEGER NOT NULL,
-- createdAt TIMESTAMP WITH TIME ZONE NOT NULL,
-- updatedAt TIMESTAMP WITH TIME ZONE NOT NULL,
-- PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS statuses
(id  SERIAL , status_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id));

INSERT INTO statuses(id , status_name) values (1, 'pending');
INSERT INTO statuses(id , status_name) values (2, 'accepted');
INSERT INTO statuses(id , status_name) values (3, 'resolved');
INSERT INTO statuses(id , status_name) values (4, 'rejected');
