create database if not exists db4;
use db4;
create table student4(id int,name varchar(20),branch varchar(20),age int);
insert into  student4 values('561','roshan','cse',22),('565','anusha','cse',23),('573','geetha','cse',26);
select name,age from student4 where age>25 ;
select * from student4