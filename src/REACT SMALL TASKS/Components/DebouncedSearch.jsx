import React, { useEffect, useState } from "react";
//  3. Debounced Search
//  Create a search input that displays the typed query. Use useState for
//  the query and useEffect with a timer to log the query to the console
//  only after the user stops typing for 1 second
const DebouncedSearch = () => {
    const [value, setValue] = useState('');

    useEffect(() => {

    const timer = setTimeout(() => {
        if(value.trim() !== ""){
            console.log(value)
        }
    },1000)
     

    return () => clearTimeout(timer)
    } ,[value])


  
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

        <p>value is : {value}</p>
    </div>
    
  );
};

export default DebouncedSearch;
