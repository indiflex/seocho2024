import "./App.css";
import My from "./components/My";
import { useCount } from "./hooks/counter-context";
import { SessionProvider } from "./hooks/session-context";

function App() {
  const { count, plusCount } = useCount();

  return (
    <>
      <SessionProvider>
        <My />
      </SessionProvider>
      <div className="card">
        <button onClick={plusCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
