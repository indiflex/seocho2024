import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0)
  const plusCount = () => setCount(count + 1);

  return (
    <>
      <div>
        <Hello name="Jade" age={33} plusCount={plusCount} />
      </div>
      <button onClick={plusCount}>plus count</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
