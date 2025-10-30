import React, { useEffect, useState } from 'react'
//  9. Auto-Reset Counter
//  Create a counter with an increment button. Use useState for the count
//  and useEffect to reset the count to 0 after 5 seconds of inactivity
const AutoResetCounter = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setTimeout(() => {
           setCount(0)
        }, 5000)
    })

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)} >Increment</button>
      
    </div>
  )
}

export default AutoResetCounter
