//  7. Like Button
//  Create a button that displays a "Like" count starting at 0. Clicking the
//  button increments the count. Use useState to manage the count.
import React, { useState } from 'react'

const LikeButton = () => {
    const [like, setLike] = useState(0);
  return (
    <div>
        <h1>Like: {like}</h1>
        <button onClick={() => setLike(like+1)}>❤️</button>

    </div>
  )
}

export default LikeButton