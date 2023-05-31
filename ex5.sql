create database if not exists db15;
use db15;
create table sales(produtname varchar(20),amount int);
insert into  sales values('apple',50000),('applemacbook',35000),('mi',500),('redmi',70000),('applelaptop',80000);
select produtname,amount
from sales
where produtname like 'apple%';

