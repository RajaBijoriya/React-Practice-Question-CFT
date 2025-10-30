import React, { useState } from 'react'
//  3. Cart with Quantity
//  Extend the shopping cart to track items and their quantities in an array
//  of objects (e.g., [{ id, name, quantity }]). Allow adding, removing, and
//  updating quantities. Use useState for the cart.
const CartWithQuantity = () => {
    const [card, setCard] = useState([{id: 1,name: "car", quantity: 4}]);
    
  return (
    <div>
      <div>
        {card.map((val) => (
          <div key={val.id}>
            <p>{val.id}</p>
            <p>{val.name}</p>

            <div style={{display: 'flex', gap: "20px"}}>
              <button onClick={() => setCard([...val, val.quantity-- ] )}>remove</button>
              <p>{val.quantity}</p>
              <button>add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartWithQuantity
