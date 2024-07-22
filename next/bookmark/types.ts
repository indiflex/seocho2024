import { RowDataPacket } from 'mysql2';

// client
export type User = {
  id: number;
  nickname: string;
  email: string;
  passwd?: string;
};

export const DefaultUser: User = { id: 0, nickname: '', email: '' };

// server
export type UserRowData = User & RowDataPacket;

export type Book = {
  id: number;
  title: string;
  owner: number;
  clickdel: boolean;
};

export type BookRowData = Book & RowDataPacket;

export type Mark = {
  id: number;
  book: number;
  url: string;
  title: string;
  descript?: string;
  image?: string;
  isdel?: boolean;
};

export type MarkRowData = Mark & RowDataPacket;
