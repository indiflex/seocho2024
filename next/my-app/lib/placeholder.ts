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

const URL = 'https://jsonplaceholder.typicode.com';
// const UsersURL = `${URL}/users`;

export const getUsers = async () => {
  const res = await fetch(`${URL}/users`);
  return res.json();
};

// export const getTodos = async (userId: number) => {
//   fetch(`${URL}/users/${userId}`);
// };

// export const getTodo = async (userId: number, todoId: number) => {};
