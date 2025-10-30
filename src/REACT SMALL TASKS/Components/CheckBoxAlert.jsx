import React, { useEffect, useState } from 'react'
//  8. Checkbox with Alert
//  Build a checkbox that shows its checked/unchecked state. Use useState
//  for the checkbox state and useEffect to show an alert when the state
//  changes
const CheckBoxAlert = () => {
    const [check, setCheck] = useState(false);
    useEffect(() => {
        if(check){
            alert("checkbox is checked")
        }
        else{
            alert("checkbox in unchecked")
        }
    })

  return (
    <div>
      <div style={{width: "100px"}}>
        <input type="checkbox" onClick={() => setCheck(!check)} />
      </div>
    </div>
  );
}

export default CheckBoxAlert
