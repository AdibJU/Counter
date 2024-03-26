import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    <div>
    
      <p>{count}</p>
    </div>
    </div>
  );
}

export default App;
