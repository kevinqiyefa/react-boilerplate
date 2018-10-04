
DROP DATABASE IF EXISTS  "strings";
CREATE DATABASE "strings";
\c "strings"

CREATE TABLE strings
(
  id SERIAL PRIMARY KEY,
  string TEXT NOT NULL
);



INSERT INTO strings (string) VALUES ('text');
INSERT INTO strings (string) VALUES ('text2');



\q
