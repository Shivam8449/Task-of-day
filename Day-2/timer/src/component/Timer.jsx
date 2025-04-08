import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second, setSecond] = useState(0)
    
    var timer;
    useEffect(()=>{
        timer = setInterval(()=>{
            setSecond(second+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    })

    const stop = ()=>{
        clearInterval(timer)
    }

    const reset =()=>{
        setSecond(0)
    }

   

  return (
    <div>
        <h1>Seconds: {second}</h1>
        <button onClick={stop}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer