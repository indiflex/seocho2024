import { redirect } from 'next/navigation';

export const TIMES = ['morning', 'afternoon', 'evening'];

export const goUserTodos = async (formData: FormData) => {
  'use server';
  const userId = formData.get('userId');
  redirect(`/ssg/${userId}`);
};
