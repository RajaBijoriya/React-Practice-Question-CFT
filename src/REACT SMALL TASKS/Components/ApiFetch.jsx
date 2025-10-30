import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((response) => {
            setData(response)
            setLoading(false);
        })
    },[data])

    if(loading) return <p>Data is Loading</p>
  return (
    <div>
      {
        data.map((val) => (
            <div key={val.id}>
                
            <h1>{val.title}</h1>
            <p>{val.body}</p>    
            </div>
        ))
      }
    </div>
  )
}

export default ApiFetch
