//  5. Color Changer
//  Create a button that changes the background color of a div to a
//  random color from a predefined array when clicked. Use useState to
//  store the current color.

import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("red");
  let arr = [
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "teal",
    "olive",
    "gold",
    "silver",
  ];
  return (
    <div style={{ background: color, width: 1000, height: 1000 }}>
      <div>
        <button onClick={() => {
           let val = Math.floor(Math.random()*10);
            setColor(arr[val])
        }} style={{ width: 10, display: "inline-col", justifyContent: "center", alignItems: 'center' }}>Click To Change Color</button>
      </div>
    </div>
  );
};

export default ColorChanger;
