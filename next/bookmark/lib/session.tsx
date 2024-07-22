'use client';

import { Book, DefaultUser, User } from '@/types';
import {
  useContext,
  createContext,
  useCallback,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';
import { auth } from './auth';

type Session = {
  loginUser: User | null;
  books: Book[];
};

const DefaultSession: Session = {
  loginUser: DefaultUser,
  books: [],
};

type Action =
  | { type: 'login'; payload: User }
  | { type: 'logout'; payload: {} }
  | { type: 'addBook'; payload: Book }
  | { type: 'saveBook'; payload: Book }
  | { type: 'removeBook'; payload: { id: number } };

// for provider's value
interface ContextProps {
  session: Session;
  login: (user: User) => void;
  logout: () => void;
  addBook: (book: Book) => number;
  saveBook: (book: Book) => void;
  removeBook: (id: number) => void;
}

const SessionContext = createContext<ContextProps>({
  session: { loginUser: DefaultUser, books: [] },
  login: (user: User) => {},
  logout: () => {},
  addBook: (book: Book) => 0,
  saveBook: (book: Book) => {},
  removeBook: (id: number) => {},
});

const reducer = (session: Session, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'logout':
      return { ...session, loginUser: null };

    case 'login':
      return { ...session, loginUser: { ...payload } };

    case 'removeBook':
      return {
        ...session,
        cart: [...session.books.filter((book) => book.id !== payload?.id)],
      };

    case 'addBook':
      console.table(payload);
      // 완전히 추가되기 전의 session.cart가 spread되므로 1번만 추가된 것 처럼 보임!
      return { ...session, books: [...session.books, { ...payload }] };

    case 'saveBook':
      console.table(payload);
      return {
        ...session,
        books: session.books.map((book) => {
          if (book.id !== payload.id) return book;
          return { ...payload };
        }),
      };

    default:
      return session;
  }
};

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const logout = useCallback(
    () => dispatch({ type: 'logout', payload: {} }),
    []
  );

  const login = useCallback((user: User) => {
    dispatch({ type: 'login', payload: user });
  }, []);

  const removeBook = useCallback((id: number) => {
    dispatch({ type: 'removeBook', payload: { id } });
  }, []);

  const addBook = useCallback((book: Book) => {
    dispatch({ type: 'addBook', payload: book });
    return 0;
  }, []);

  const saveBook = useCallback((book: Book) => {
    dispatch({ type: 'saveBook', payload: book });
  }, []);

  useEffect(() => {
    // (async function () {
    //   const authSession = await auth();
    //   console.log('🚀 SessionContext - authSession:', authSession, new Date());
    // })();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        removeBook,
        saveBook,
        addBook,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
