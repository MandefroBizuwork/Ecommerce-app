import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("Abebe")


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>


      <h2>Name:{name}</h2>
      <button onClick={() => setName("almaz")}>Update name</button>
    </div>
  );
}
export default Counter;
