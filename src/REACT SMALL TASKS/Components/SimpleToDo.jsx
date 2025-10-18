//  6. Simple To-Do List
//  Build a component with an input field and an "Add" button. When the
//  button is clicked, add the input text to a list displayed below. Use
//  useState for the input and list.

import React, { useState } from 'react'
const SimpleToDo = () => {
   const [value, setValue] = useState('');
   const [input, setInput] = useState([]);
  return (
    <div>

       <h1>Simple To Do List</h1>
       <input type="text" value={value}  onChange={(e) => setValue(e.target.value)} />
       <button onClick={() => setInput([...input, value])}>Add Todo</button>
       <ul>
        {
            input.map((val) => (
                <li>{val}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default SimpleToDo