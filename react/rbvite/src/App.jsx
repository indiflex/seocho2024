import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);
  const [didLogin, setDidLogin] = useState(true);
  const plusCount = () => setCount(count + 1);

  const toggleLogin = () => {
    setDidLogin(!didLogin);
  }
  return (
    <>
      <div>
        {didLogin && <Hello name="Jade" age={33} plusCount={plusCount} />}
      </div>
      <button onClick={toggleLogin}>
        Toggle {didLogin ? 'Logined' : 'NotLogined'}
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
