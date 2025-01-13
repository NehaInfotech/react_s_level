import React from 'react'
import { useState } from 'react'
function Demos() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(`cdmi`);
  const handle = (val) => {
    setCount(count + val)
  }
  const hello = () => {
    setAdd("hello")
  }
  return (
    <>
      {count}
      {add}
      <button style={{}} onClick={() => setCount(count + 1)}>+</button> 
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => handle(5)}>+5</button>
      <button onClick={() => setAdd('creative')}>Creative</button>
      <button onClick={hello}>hello</button>
    </>
  )
}

export default Demos