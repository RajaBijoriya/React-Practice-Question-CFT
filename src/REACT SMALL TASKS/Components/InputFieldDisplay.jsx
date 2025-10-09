import React, { useState } from 'react'

const InputFieldDisplay = () => {
    const [value, setValue] = useState('');
  return (
    <div>

        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        <h1>{value}</h1>
    </div>
  )
}

export default InputFieldDisplay