import React, { useEffect, useState } from 'react'
//  7. Color Changer with Log
//  Create a button that changes a div’s background color to a random
//  color from an array. Use useState for the color and useEffect to log the
//  new color to the console
const ColorChangerWithLog = () => {
    const color = ["red", "blue", "orange", "black", "white", "green", "pink"]
    const [bg, setBg] = useState("");
    const HandleColor = () => {
       let val = Math.floor(Math.random() *  color.length)

       setBg(color[val])
    }
    useEffect(() => {
       console.log(bg)
    }, [bg])
  return (
    <div style={{backgroundColor: bg, width: "1000px", height: "1000px"}}>
        <button onClick={HandleColor}>Change Color</button>
      
    </div>
  )
}

export default ColorChangerWithLog
