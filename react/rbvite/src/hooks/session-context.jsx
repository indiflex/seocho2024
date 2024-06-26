import { useContext, createContext, useState, useCallback } from "react";

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

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(SampleSession);

  const logout = useCallback(
    () => setSession({ ...session, loginUser: null }),
    [session],
  );

  const login = useCallback(
    (name) => {
      const id = 1;
      const age = 33;
      const x = {
        ...session,
        loginUser: { ...session.loginUser, id, name, age },
      };
      setSession(x);
    },
    [session],
  );

  const removeItem = useCallback(
    (itemId) => {
      setSession({
        ...session,
        cart: [...session.cart.filter((item) => item.id !== itemId)],
      });
    },
    [session],
  );

  const addItem = useCallback(
    (addingItem) => {
      const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
      const { name, price } = addingItem;
      const item = { id: id + 1, name, price };
      console.log("🚀  id:", id);
      setSession({ ...session, cart: [...session.cart, item] });
    },
    [session],
  );

  const saveItem = useCallback(
    (editingItem) => {
      const { id, name, price } = editingItem;
      const foundItem = session.cart.find((item) => item.id === id);
      foundItem.name = name;
      foundItem.price = price;
      setSession({ ...session });
    },
    [session],
  );

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
