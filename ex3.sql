create database if not exists db2;
use db2;
create table student2(id int,name varchar(20),branch varchar(20),gpa int);
insert into  student2 values(561,'roshan','cse',10),('565','anusha','ece',9),('573','geetha','eee',9);
DELETE FROM student2 WHERE branch='cse';
truncate table student2;
select *from student2;

create table student3(id int,name varchar(20),branch varchar(20),gpa int);
insert into  student3 values(561,'roshan','cse',10),('565','anusha','ece',9),('573','geetha','eee',9);
alter table student3 drop column gpa;
delete from student3 where id=561;