import React, { useEffect, useState } from 'react'
// 2. Dynamic API Fetch
//  Build a component with an input for a user ID (1–10). Use useState to
//  store the ID and fetched user data, and useEffect to fetch user details
//  from https://jsonplaceholder.typicode.com/users/{id} when the ID
//  changes.
const DynamicApiFetch = () => {
    const [id, setId] = useState('');
    const [val, setVal] = useState(1)
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${val}`)
        .then((response) => response.json())
        .then((response) => setData(response))
    },[val])



  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={() => setVal(id)} >Search</button>
        <div>
        {
            
                    data ? (
                        <div key={data.id}>
                            
                    <h1>{data.name}</h1>
                    <p>{data.username}</p>
                    <p>{data.email}</p>
                    <p>{data.address.street}</p>
                    <p>{data.address.city}</p>
                    <p>{data.address.zipcode}</p>
                    <p>{data.address.geo.lat}</p>
                    <p>{data.phone}</p>
                    <p>{data.company.name}</p>
                    <p>{data.website}</p>
                        </div>
                    ): (
                        <p>Loading user...</p>
                    )
                   
            
        }    
        </div> 
      
    </div>
  )
}

export default DynamicApiFetch
