import React, { useState } from 'react';
import './App.css';

function Demo() {
  const [count, setCount] = useState(0)
  const [fruit, setFruit]  = useState('banner')
  const [todos] = useState([ 'aa', 'bb', 'cc']);
  const [lists] = useState([{id: 1, title: 'A'},{id: 2, title: 'B'}]);

  return (
    <div className="App">
      <div>{ count }</div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <div>{ fruit }</div>
      <button onClick={() => setFruit(`${fruit}1`)}>545</button>
      <div>
        {
          todos.map((el, index) => {
            return (
              <span key={index}>{ el }</span>
            )
          })
        }
      </div>
      <div>
        {
          lists.map(el => {
            return (
              <span key={el.id}>{el.title}</span>
            )
          })
        }
      </div>
    </div>
  );
}

export default Demo;
