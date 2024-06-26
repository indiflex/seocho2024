import { useContext, createContext, useState } from "react";

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

const SessionProvider = () => {
  const [session, setSession] = useState(SampleSession);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (name) => {
    const id = 1;
    const age = 33;
    const x = {
      ...session,
      loginUser: { ...session.loginUser, id, name, age },
    };
    setSession(x);
  };

  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (addingItem) => {
    const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
    const { name, price } = addingItem;
    const item = { id: id + 1, name, price };
    console.log("🚀  id:", id);
    setSession({ ...session, cart: [...session.cart, item] });
  };

  const saveItem = (editingItem) => {
    const { id, name, price } = editingItem;
    const foundItem = session.cart.find((item) => item.id === id);
    foundItem.name = name;
    foundItem.price = price;
    setSession({ ...session });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, saveItem, addItem }}
    ></SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };
