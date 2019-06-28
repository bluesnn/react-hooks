import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodes] = useState([{text: 'react hooks'}])
  console.log(count,setCount,1,useState())

  return (
    <div className="App">
      <div>{ count }</div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <div>{ todos }</div>
    </div>
  );
}

export default App;
