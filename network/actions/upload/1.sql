/*
* 1: Produce a list of all customer names in which the first letter of the first and 
last names is in uppercase and the rest are in lowercase.
*/
select UPPER(substr(firstname,1,1))||LOWER(substr(firstname,2)) AS FirstNameF,
    UPPER(substr(lastname,1,1))||LOWER(substr(lastname,2)) AS LastNameF
from customers;

/**
2: Create a list of all customer numbers along with text indicating whether the customer
has been referred by another customer. 
	Display the text �NOT REFERRED� if the customer wasn�t referred to JustLee Books
    by another customer or �REFERRED� if the customer was referred
*/

-- update data for test 'wasn�t referred to JustLee Books'
update customers set referred =1014 where customer#=1020;

SELECT c.*,
    referred,  -- if the field appear in case score, then this field must be literally appear after select
    CASE 
     when referred >0 and referred ?=1014 THEN 'REFERRED' 
     ELSE 'NOT REFERRED' END referredSate  -- here giving the column's name;
     FROM customers c; 

/*
*   3: Determine the amount of total profit generated by the book purchased on order 1002.
   Display the book title and profit.
	The profit should be formatted to display a dollar sign and two decimal places. 
	Take into account that the customer might not pay the full retail price, 
    and each item ordered can involve multiple copies.
 
*/
/* the profit:
   step1: for each item Item_Income =  quanity *paideach - quanity* cost
   step2: all items in order 1002 sum(Item_Income) as allItemsIncome
   step3: profiel = allItemsIncome - shipcost;

*/

select * from orders;                         --get shipcost
select * from orderitems where order# =1001;  -- get all items  quanity paideach
select * from books;                          --get cost, retail,discount isbn
select * from customers;

-- step one get all items in order# 1001, which includes quanity paideach and cost 
select * from  (select * from orderitems where order# =1001) items left join books b on items.isbn = b.isbn;

select order#, sum(t.quantity * (paideach-cost)) as allitemsIncome 
    from (select * from  (select * from orderitems where order# =1001) items left join books b on items.isbn = b.isbn)t
    group by t.order#;
    
--step two profiel = allItemsIncome - shipcost;

select t1.order#,(t1.allitemsincome - t2.shipcost) as profit  from 
(
select order#, sum(t.quantity * (paideach-cost)) as allitemsIncome 
    from (select * from  (select * from orderitems where order# =1001) items left join books b on items.isbn = b.isbn)t
    group by t.order#
)t1 left join orders t2 
on t1.order#= t2.order#;

/*
*  Display a list of all book titles and the percentage of markup for each book. 
	The percentage of markup should be displayed as a whole number 
	(that is, multiplied by 100) with no decimal position, followed by a percent sign (for example, .2793 = 28%). 
	(The percentage of markup should reflect the difference between the retail and cost amounts as a percent of the cost.).
 
*/
SELECT * FROM BOOKS;

SELECT 
  b.* ,
  b.discount ,
  CASE
  WHEN b.discount >0 THEN b.discount
  ELSE 0  END  applyDiscount
  FROM books b;
  
select ROUND( 100* ((t.retail*(1-t.applyDiscount /100)-t.cost)/t.cost) ,2) as markup
,ROUND( 100* ((t.retail*(1-t.applyDiscount /100)-t.cost)/t.cost) ,0) as markup_2
from (
SELECT 
  b.* ,
  b.discount ,
  CASE
  WHEN b.discount >0 THEN b.discount
  ELSE 1  END  applyDiscount
  FROM books b
) t ;

/*
Display the current day of the week, hour, minutes, 
and seconds of the current date setting on the computer you�re using.
*/


select  to_char(sysdate, 'dy' )as dayofWeek, to_char(sysdate,'hh24')as hour,
to_char(sysdate,'Mi')as minutes,to_char(sysdate,'ss')as seconds
from dual;

/*
  Create a list of all book titles and costs. 
  Precede each book�s cost with asterisks so that the width of the displayed Cost field is 12.
*/
select cost from books;

select title, '*     '||to_char(cost,'00.00') as newCost from books;

select title,length( '*     '||to_char(cost,'00.00') )as newCost from books;

/*
 7:  Determine the length of data stored in the ISBN field of the BOOKS table. 
 Make sure each different length value is displayed only once (not once for each book).
*/

select distinct( length(isbn)) as differentISBN_Length  from books;

/*
8: Using today�s date, determine the age (in months) of each book that JustLee sells.
	Make sure only whole months are displayed; ignore any portions of months. 
	Display the book title, publication date, current date, and age.

*/

select title,pubdate,to_char(sysdate),
 floor(MONTHS_BETWEEN(SYSDATE,pubdate)) age_months from books;
 
 /*
 9  Determine the calendar date of the next occurrence of Wednesday,
 based on today�s date
 */
 
 select NEXT_DAY(TRUNC(SYSDATE), 'WED')from dual; 
 
 
 /*
 10  Produce a list of each customer number and the third and fourth digits of his or her zip
code. The query should also display the position of the first occurrence of a 3 in the
customer number, if it exists
 */
 
 select zip
 ,substr(to_char(zip),3,1) as thrid_digits,
 substr(to_char(zip),4,1)as fourth_digits,
 INSTR(to_char(zip),'3') as firstThreePosition
 
 from customers;

/*
Computer books, 10%;
Fitness books, 15%; Self-Help books, 25%; all other categories, 3%
*/

select * from books;

select b.*,
     CASE b.category
     WHEN  'COMPUTER' THEN 1.1
     WHEN 'FITNESS' THEN 1.15
     WHEN  'SELF HELP' THEN 1.25
     ELSE 1.03 END raiseRate
from books b;

select t.title,t.category,t.retail,(ROUND( t.retail* t.raiserate,2))as revisedPrice  
from (
select b.*,
     CASE b.category
     WHEN  'COMPUTER' THEN 1.1
     WHEN 'FITNESS' THEN 1.15
     WHEN  'SELF HELP' THEN 1.25
     ELSE 1.03 END raiseRate
from books b
)t;

---------City Jail ---
/*
 List the following information for all crimes that have a period greater than 14 days between
the date charged and the hearing date: crime ID, classification, date charged, hearing date,
and number of days between the date charged and the hearing date.
*/

select c.crime_id,c.classification,c.date_charged,c.hearing_date, trunc(c.hearing_date - c.date_charged) 
as days from crimes c;

/*
Produce a list showing each active police officer and his or her community assignment,
indicated by the second letter of the precinct code. Display the community description listed
in the following chart, based on the second letter of the precinct code
*/

select * from officers;
select * from ;

