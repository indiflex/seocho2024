import { Mark, MarkRowData, UserRowData } from '@/types';
import { execute, query } from './db';

export const createBook = async (
  title: string,
  owner: number,
  clickdel = 0
) => {
  const rsh = await execute(
    'insert into Book(title, owner, clickdel) values(?,?,?)',
    [title, owner, clickdel]
  );

  return rsh.insertId;
};

export const getMarks = async (bookId: number) => {
  const marks = await query<MarkRowData>('select * from Mark where book = ?', [
    bookId,
  ]);

  return marks;
};

export const createMark = async ({
  book,
  url,
  title,
  descript,
  image,
}: Mark) => {
  const rsh = await execute(
    'insert into Mark(book, url, title, descript, image) values(?,?,?,?,?)',
    [book, url, title, descript, image]
  );

  return rsh.insertId;
};

export const getMark = async (markId: number) => {
  const [mark] = await query<MarkRowData>('select * from Mark where id = ?', [
    markId,
  ]);
  return mark;
};

export const getUserByEmail = async (email: string | null) => {
  if (!email) return null;
  const [user] = await query<UserRowData>(
    'select * from User where email = ?',
    [email]
  );

  return user;
};
