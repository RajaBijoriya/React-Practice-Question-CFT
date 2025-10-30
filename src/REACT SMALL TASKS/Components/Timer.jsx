import React, { useEffect, useState } from 'react'
//  4. Timer Component
//  Build a component that displays a seconds counter, incrementing every
//  second. Use useState for the count and useEffect to set up an interval
//  timer.
const Timer = () => {
    const [sec, setSec] = useState(0);
    useEffect(() => {
     const interval =  setInterval(() => {
         setSec((prev) => prev+1)
      },1000)
      return () => clearInterval(interval)
     
    }, [])
    
  return (
    <div>
      <h1>{sec}</h1>
    </div>
  )
}

export default Timer
