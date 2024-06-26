import { useContext, useReducer } from "react";
import { createContext } from "react";

const CountContext = createContext();

const reducer = (count, action) => {
  const { type, step } = action;
  console.log("🚀  type:", type, step);
  switch (type) {
    case "plus":
      return count + step;
    case "minus":
      return count - step;
    default:
      return count;
  }
};

const CountProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  // dispatch({type: 'plus', step: 2})
  const [count, dispatch] = useReducer(reducer, 0);

  // const plusCount = () => setCount((count) => count + 1);
  // const minusCount = () => setCount((count) => count - 1);
  const plusCount = (step = 1) => dispatch({ type: "plus", step });
  const minusCount = (step = 1) => dispatch({ type: "minus", step });

  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};

// CountContext (for count) Custom Hook
const useCount = () => useContext(CountContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CountProvider, useCount };
