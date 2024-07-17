'use client';

import { Book, User } from '@/types';
import {
  useContext,
  createContext,
  useCallback,
  useReducer,
  ReactNode,
} from 'react';

type Session = {
  loginUser: User;
  books: Book[];
};

type Action = {
  type: 'login' | 'logout' | 'addBook' | 'saveBook' | 'removeBook';
  payload: Book & User;
};

type Dispatcher = {};

const SessionContext = createContext({});

const reducer = (session: Session, action: Action) => {
  const {
    type,
    payload: { id, title, clickdel, nickname, email },
  } = action;

  switch (type) {
    case 'logout':
      return { ...session, loginUser: null };

    case 'login':
      return { ...session, loginUser: { id: 1, nickname, email } };

    case 'removeBook':
      return {
        ...session,
        cart: [...session.books.filter((book) => book.id !== id)],
      };

    case 'addBook':
      console.table({ id, title, clickdel });
      // 완전히 추가되기 전의 session.cart가 spread되므로 1번만 추가된 것 처럼 보임!
      return { ...session, books: [...session.books, { id, title, clickdel }] };

    case 'saveBook':
      return {
        ...session,
        books: session.books.map((book) => {
          if (book.id !== id) return book;
          return { id, title, clickdel };
        }),
      };

    default:
      return session;
  }
};

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, dispatch] = useReducer<Session>(reducer, {
    loginUser: null,
    bookds: [],
  });

  const logout = useCallback(
    () => dispatch({ type: 'logout', payload: { ...session } }),
    []
  );

  const login = useCallback((name) => {
    dispatch({ type: 'login', payload: { name } });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'removeItem', payload: { id } });
  }, []);

  const addItem = useCallback(
    ({ name, price }) => {
      const maxId = Math.max(...session.cart.map((_item) => _item.id)) ?? 0;
      const id = maxId + 1;
      // session.cart.push({
      //   id: maxId + 1,
      //   name,
      //   price,
      // });
      dispatch({ type: 'addItem', payload: { id, name, price } });
    },
    [session]
  );

  const saveItem = useCallback((item) => {
    dispatch({ type: 'saveItem', payload: item });
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, saveItem, addItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };
