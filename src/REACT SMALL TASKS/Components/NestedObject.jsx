import React, { useState } from "react";

//  1. Nested Object Form
//  Create a form to manage a nested object (e.g., { user: { name: "",
//  address: { street: "", city: "" } } }). Allow updating all fields and display the
//  current object. Use useState with deep updates.


const NestedObject = () => {
  const [data, setData] = useState({
    user: {
      name: "",
      address: {
        street: "",
        city: "",
      },
    },
  });

  // ✅ Function to handle updates
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle updates based on input name
    if (name === "name") {
      setData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          name: value,
        },
      }));
    } else if (name === "street") {
      setData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          address: {
            ...prev.user.address,
            street: value,
          },
        },
      }));
    } else if (name === "city") {
      setData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          address: {
            ...prev.user.address,
            city: value,
          },
        },
      }));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={data.user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Street:{" "}
          <input
            type="text"
            name="street"
            value={data.user.address.street}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          City:{" "}
          <input
            type="text"
            name="city"
            value={data.user.address.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <button type="button" onClick={() => console.log(data)}>
          Send
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Current Object:</h3>
        <p>Name: {data.user.name}</p>
        <p>Street: {data.user.address.street}</p>
        <p>City: {data.user.address.city}</p>
      </div>
    </div>
  );
};

export default NestedObject;
