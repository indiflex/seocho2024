import { RowDataPacket } from 'mysql2';

export type User = {
  id: number;
  nickname: string;
  email: string;
  passwd: string;
};

export type UserRowData = User & RowDataPacket;

export type Book = {
  id: number;
  title: string;
  owner: number;
  clickdel: boolean;
};

export type Mark = {
  id: number;
  book: number;
  url: string;
  title: string;
  descript: string;
  image: string;
  isdel: boolean;
};
