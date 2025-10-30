import React, { useEffect, useState } from 'react'
//  3. Input Sync with LocalStorage
//  Create an input field where the user types text, displayed below. Use
//  useState for the input value and useEffect to save the input to
//  localStorage whenever it changes
const InputSync = () => {
    const [data, setData] = useState();
    const [value, setValue] = useState([])

    // useEffect(() => {
    //     const saveData = localStorage.getItem("inputText");
    //     if(saveData){
    //         setValue(saveData)
    //     }
    // },[])

    // useEffect(() => {
    //     localStorage.setItem("inputText", value)

    // },[value])

  return (
    <div>
      <input value={data} onChange={(e) => setData(e.target.value)} type="text" />
      <button onClick={() => setValue([...value, data])}>Save</button>
      {
        value.map((val) => (
            <p>{val}</p>
        ))
      }
    </div>
  )
}

export default InputSync
