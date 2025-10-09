
//  2. Toggle Button
//  Build a button that toggles between "ON" and "OFF" text when clicked.
//  Use useState to track the toggle state.


import React, { useState } from 'react'

const ToggleButton = () => {
    const [value, setValue] = useState(false)
  return (
    <div>
        <button onClick={() => setValue(!value)} type='toggle'>{value? "On": "Off" }</button>
    </div>
  )
}

export default ToggleButton