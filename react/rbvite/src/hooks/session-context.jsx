import { useContext, createContext, useCallback, useReducer } from "react";

const SessionContext = createContext();

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Hong", age: 33 },
  // loginUser: null,
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

// arr.reduce( (acc, a) => acc + a )
// dispatch({type: 'login', payload: {name: 'Hong'}})
const reducer = (session, action) => {
  const {
    type,
    payload: { id, name, price },
  } = action;
  console.log("🚀  payload:", id, name, price);

  switch (type) {
    case "logout":
      return { ...session, loginUser: null };

    case "login":
      return { ...session, loginUser: { id: 1, age: 33, name } };

    case "removeItem":
      return {
        ...session,
        cart: [...session.cart.filter((item) => item.id !== id)],
      };

    case "addItem":
      console.table({ id, name, price });
      // session.cart.push({ id, name, price }); // 2번 push!!
      // return { ...session };

      // 완전히 추가되기 전의 session.cart가 spread되므로 1번만 추가된 것 처럼 보임!
      return { ...session, cart: [...session.cart, { id, name, price }] };

    case "saveItem":
      return {
        ...session,
        cart: session.cart.map((_item) => {
          if (_item.id !== id) return _item;
          return { id, name, price };
        }),
      };

    default:
      return session;
  }
};

const SessionProvider = ({ children }) => {
  const [session, dispatch] = useReducer(reducer, SampleSession);

  const logout = useCallback(
    () => dispatch({ type: "logout", payload: {} }),
    [],
  );

  const login = useCallback((name) => {
    dispatch({ type: "login", payload: { name } });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: "removeItem", payload: { id } });
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
      dispatch({ type: "addItem", payload: { id, name, price } });
    },
    [session],
  );

  const saveItem = useCallback((item) => {
    dispatch({ type: "saveItem", payload: item });
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
