import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default Effect;
