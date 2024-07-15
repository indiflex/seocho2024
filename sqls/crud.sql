select * from User;
select nickname, email as 'email address' from User;

select * from User where id > 1 and id < 10;
select * from User where id between 2 and 9;
select * from User where id >= 2 and id <= 9;
select * from User where id in (3, 9);
select * from User where id = 3 or id = 9;
select distinct auth from User;
select * from User order by nickname desc;
select auth, count(*) from User group by auth;
select auth, count(*) from User group by auth having auth > 1;

desc User;

insert into User (nickname, email) values ('kim', 'kim@gmail.com');

insert ignore into User (nickname, email) 
     values ('king', 'kim@gmail.com'), ('park', 'park@gmail.com');
     
insert into User(nickname, email)
     values ('king', 'kim@gmail.com')
  on duplicate key update nickname = 'king';
  

select * from Book;

select * from Book where owner = 1;
desc Book;

insert into Book(title, owner)
    values('Study', 1), ('Bike', 1), ('Enter', 1);
    
insert into Book(title, owner)
 select title, 3 from Book where owner = 1;
 
select * from Book where owner = 3;

select Book.*, User.nickname
  from Book inner join User on Book.owner = User.id;
  
select b.id 'bookID', b.title, u.nickname as 'owner', b.clickdel
  from Book b inner join User u on b.owner = u.id;
  
select u.id as UserID, u.nickname, b.title, b.id as BookID
  from User u left outer join Book b on u.id = b.owner;
  
-- ex) hong의 Study(1)와 king의 Enter(6) 북에 마크를 하나씩 추가해 보세요.
select * from Book;
select * from Mark;
desc Mark;

-- 추가하기(1, 6)
insert into Mark(book, url, title)
 value (1, 'https://naver.com', '네이버'), (6, 'https://daum.net', '다음'),
 (6, 'https://youtube.com', 'Youtube');

-- 읽기(join)
select * from Book b inner join Mark m on b.id = m.book;
  
select b.id bookid, u.nickname 'owner', m.book, m.url, m.title
  from Book b inner join Mark m on b.id = m.book
              inner join User u on b.owner = u.id;
              
select * from Mark;
-- update Mark set title='유튜브' where title='Youtube'; -- BAD
update Mark set title='유튜브' where id = 3; -- GOOD

select b.title, m.title, concat(b.title, '-', m.title)
  from Book b inner join Mark m on b.id = m.book;

-- join & update
update Book b inner join Mark m on b.id = m.book
   set m.title= concat(b.title, '-', m.title)
 where m.id > 0;

select * from Book b inner join Mark m on b.id = m.book;