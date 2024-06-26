import { useContext, useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((count) => count + 1);

  return (
    <CountContext.Provider value={{ count, plusCount }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => useContext(CountContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CountProvider, useCount };
