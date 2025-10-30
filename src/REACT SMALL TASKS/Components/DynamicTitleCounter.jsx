import React, {  useEffect, useState } from 'react'
// 10. Dynamic Title Counter
//  Build a component with a number input. Use useState to store the
//  input value and useEffect to update the document title with the input
//  value in real-time.


const DynamicTitleCounter = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

  return (
    <div>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <div>{count}</div>
    </div>
  )
}

export default DynamicTitleCounter
