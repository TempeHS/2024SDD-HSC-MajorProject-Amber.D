--CREATE TABLE sddstudent1 (nesaID INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL, age INTEGER NOT NULL);
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (12324,"David Smith","17");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (27324,"Kei Rose","12");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (13732,"Ney Chen","14");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (36234,"Nathan Jone","18");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (63524,"Megan Deng","14");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (72938,"Peter Shawn","8");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (36271,"Calx Nyugen","20");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (46281,"David Jone","29");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (74821,"Peter Smith","2");
--INSERT INTO sddstudent1 (nesaID, name, age) VALUES (26183,"Megan Chen","14");
--SELECT * FROM sddstudent1;

SELECT * FROM sddstudent1 WHERE name LIKE 'David Smith';