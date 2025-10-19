import React, { useState } from 'react'

//  2. Editable To-Do List
//  Build a to-do list where each item can be edited in place by clicking an
//  "Edit" button, then saved or canceled. Use useState for the list and
//  editing state.
const EditableToDoList = () => {

    const [data, setData] = useState('');
    const [value, setValue] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const AddTodo = () => {
      if(data.trim() === "") return;
      setValue([...value, data]);
      setData("");
    }

    // start editing
    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(value[index])     
    }

    // save edited 

    const handleSave = (index) => {
      const updatedValue = [...value];
      updatedValue[index] = editText;
      setValue(updatedValue);
      setEditIndex(null);
      setEditText("");
    }



    // cancel editing 
    const handleCancel = () => {
      setEditIndex(null);
      setEditText("");
    }



  return (
    <div>
        <h1>To Do list</h1>
       <input value={data} onChange={(e) => setData(e.target.value)} type="text" />

       <button onClick={AddTodo}>add</button>
       <div>
        {
            value.map((val, index) => (
                <p key={index}>{editIndex === index? (
                  <>
                  <input value={editText} onChange={(e) => setEditText(e.target.value)}  type="text" />
                  
                  <button onClick={() => handleSave(index)}>Save</button>
                  <button onClick={handleCancel}>cancel</button>
                  
                  </>
                ):

                (

                  <>
                   <span>{val}</span>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </>
                )
                }  </p>
            ))
        }
       </div>
    </div>
  )
}

export default EditableToDoList
