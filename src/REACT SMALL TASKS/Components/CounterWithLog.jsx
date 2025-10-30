import React, { useEffect, useState } from 'react'

const CounterWithLog = () => {
    const [count, setCount]  = useState(0);
    useEffect(() => {
        console.log(count)
    }, [count])
  return (
    <div>
    <h1>count : {count}</h1>
    <button onClick={() => setCount(count+1)} >Increment</button>
    <button onClick={() => setCount(count-1)} >Decrement</button>
    </div>
  )
}

export default CounterWithLog
