create database if not exists db1;
use db1;
create table student1(id int,name varchar(20),branch varchar(20),gpa int);
insert into  student1 values('561','roshan','cse','10'),('565','anusha','cse','9'),('573','geetha','cse','9');
SELECT MIN(GPA) FROM STUDENT1;
SELECT MAX(GPA) FROM STUDENT1;