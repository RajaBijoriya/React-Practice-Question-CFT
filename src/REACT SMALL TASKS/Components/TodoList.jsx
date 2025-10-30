import React, { useEffect, useState } from 'react'
// Medium Level Questions (10 Questions)
//  These questions involve more complex state management, multiple side
//  effects, or conditional logic with useState and useEffect.
//  1. To-Do List with LocalStorage
//  Create a to-do list with an input and "Add" button. Use useState for the
//  input and list, and useEffect to load the list from localStorage on mount
//  and save it on updates
const TodoList = () => {
    const [data, setData] = useState('');
    const [todo, setTodo] = useState([]);

    useEffect(() => {
      const value =   JSON.parse(localStorage.getItem("innerText")) || [];
      setData(value)
    }, [todo]);


    useEffect(() => {
        localStorage.setItem("innerText", JSON.stringify(todo))
    }, [todo])

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)}/>
      <button onClick={() => setTodo([...todo, data])} >Add</button>
      <div>
        {
            todo.map((val) => (
                <h3>{val}</h3>
            ))
        }
      </div>
    </div>
  )
}

export default TodoList
