import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0)

    const Increment = ()=>{
      setCount(count+1)
    }

    const Decrement = ()=>{
      if(count>0){
        setCount(count-1)
      }
    }

    const reset = ()=>{
      setCount(0)
    }


  return (
    <>
    <h1>Counter App</h1>
    <h1>Count: {count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default counter