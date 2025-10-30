import React, { useState } from "react";
// 2. Toggle Visibility with Title Update
//  Build a button that toggles a paragraph’s visibility. Use useState for the
//  visibility state and useEffect to update the document title to "Visible" or
//  "Hidden" based on the state
const ToggleVisiblity = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Show Para" : "Hide Para"}
      </button>
      {
        visible?<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
        quas, ipsum iste ea iusto eum incidunt rem quaerat debitis, magnam
        nesciunt, tenetur quasi quo dicta. Ad, itaque quisquam. Laborum incidunt
        qui perferendis quibusdam dolorum aliquid praesentium necessitatibus
        debitis, nihil enim, vel quam inventore ratione dignissimos natus
        quaerat? Earum recusandae debitis dolor, et, sit dignissimos reiciendis
        eligendi adipisci praesentium dicta dolorem quidem ut iusto, alias sunt
        necessitatibus. Ducimus eaque animi nemo reprehenderit hic commodi qui
        deleniti quidem iure magnam corrupti natus facere, itaque culpa dicta et
        accusantium. Nihil atque, labore praesentium debitis iusto voluptatem,
        facere, deleniti quaerat incidunt ea repellendus.
      </p>:""
      }
    </div>
  );
};

export default ToggleVisiblity;
