import React, { useEffect, useState } from 'react'
//  5. Window Width Tracker
//  Create a component that displays the current window width. Use
//  useState to store the width and useEffect to update it on window resize
//  events.
const WidthTracker = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() =>{
        const handleWindow = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleWindow);

        return () =>  window.removeEventListener("resize", handleWindow)
    })
  return (
    <div>
      <h1>{width}</h1>
    </div>
  )
}

export default WidthTracker
