create table User (
    id mediumint unsigned not null auto_increment comment '사용자번호',
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '등록일시',
    updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
    nickname varchar(31) not null comment '유저별명',
    email varchar(255) not null comment '이메일주소',
    passwd varchar(512) null comment '암호',
    birthdt varchar(10) null comment '생년월일',
    mobile varchar(15) null comment '전화번호',
    outdt varchar(15) null comment '탈퇴일',
    PRIMARY KEY (id),
    UNIQUE KEY uniq_User_email (email)
);

alter table User add column auth tinyint unsigned
   not null default 9 comment '0:sys, 1:super, …, 9:guest' after mobile;
   
desc User;

create table Book(
  id int not null auto_increment primary key,
  title varchar(16) not null comment '북 이름',
  owner mediumint unsigned not null comment '소유자 User id',
  clickdel boolean not null default 0 comment '클릭 시 삭제 여부',
  foreign key fk_owner_User(owner) references User(id)
    on delete cascade 
);

alter table Book modify column id int unsigned not null auto_increment;

desc Book;

create table Mark (
  id int unsigned not null auto_increment primary key,
  book int unsigned not null comment '내가 담겨있는 북',
  url varchar(512) not null comment 'URL 주소',
  title varchar(512) not null comment '페이지 제목',
  descript varchar(1024) null comment '설명(og:description)',
  image varchar(512) null comment '이미지(og:image)',
  isdel boolean not null default 0 comment '삭제 여부',
  foreign key fk_book(book) references Book(id) on delete cascade
);

desc Mark;

insert into User (nickname, email)
          values ('hong', 'hong@gmail.com');
          
select * from User;

drop table T;

create table UserLike like User;

show tables;
select exp(2, 3);

show processlist;
