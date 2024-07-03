export type User = {
  id: number;
  username: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const URL = 'https://jsonplaceholder.typicode.com';
// const UsersURL = `${URL}/users`;

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${URL}/users`);
  return res.json();
};

export const getTodos = async (userId: number): Promise<Todo[]> => {
  const res = await fetch(`${URL}/users/${userId}/todos`, {
    // cache: 'no-store',
    next: { revalidate: 10 },
  });
  return res.json();
};

// export const getTodo = async (userId: number, todoId: number) => {};

export async function getPhotos(albumId: number): Promise<Photo[]> {
  const res = await fetch(`${URL}/albums/${albumId}/photos`);

  return res.json();
}
