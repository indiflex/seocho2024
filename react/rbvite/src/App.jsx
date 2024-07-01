import { FaMinus, FaPlus } from "react-icons/fa";
import "./App.css";
import My from "./components/My";
import { useCount } from "./hooks/counter-context";
import { SessionProvider } from "./hooks/session-context";
import Button from "./components/atoms/Button";

function App() {
  const { count, plusCount, minusCount } = useCount();

  return (
    <>
      <SessionProvider>
        <My />
      </SessionProvider>
      <div className="border-2 border-red-300 p-3">
        <h1>count is {count}</h1>
        <Button text={<FaPlus />} onClick={() => plusCount()} />
        <Button text={<FaMinus />} onClick={() => minusCount(2)} />
      </div>
    </>
  );
}

export default App;
