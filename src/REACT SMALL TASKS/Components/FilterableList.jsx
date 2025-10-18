import React, { useState } from "react";

const FilterableList = () => {
  const [data, setData] = useState("");
  const arr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  // Filter the list based on user input
  const filteredList = arr.filter((item) =>
    item.toLowerCase().includes(data.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Filterable List</h1>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)} // ✅ Added 'e' in onChange
        type="text"
        placeholder="Type to filter..."
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid gray",
          marginBottom: "20px",
        }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredList.length > 0 ? (
          filteredList.map((val, index) => (
            <li key={index} style={{ margin: "8px 0", fontSize: "18px" }}>
              {val}
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default FilterableList;
