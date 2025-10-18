// 4. Show/Hide Text
//  Make a button that toggles the visibility of a paragraph of text. Use
//  useState to manage the visibility state.


import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
      <div>
        {
            show? <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus praesentium possimus voluptate nostrum quasi dolores
          commodi, temporibus voluptas consequuntur sapiente ad distinctio
          impedit optio dolor recusandae. Ipsa totam placeat fugiat fuga magni
          esse ducimus sint iure vitae corporis nobis at quisquam, vel magnam
          laudantium reprehenderit tenetur quod possimus veritatis? Sint maxime
          quisquam, ut nostrum tenetur animi nobis porro sapiente, nemo
          molestiae possimus quas numquam quos assumenda pariatur qui ipsam
          cumque ex facilis! Animi doloremque qui consectetur assumenda incidunt
          ullam dolores alias asperiores, ab autem commodi enim minus corporis
          maiores illo. Commodi, dolor. Autem mollitia in natus et id itaque?
        </p> : " "
        }
      </div>
    </div>
  );
};

export default ShowHide;
