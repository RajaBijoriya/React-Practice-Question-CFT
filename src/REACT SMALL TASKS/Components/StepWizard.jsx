
//  10. Step Wizard
//  Create a multi-step form with "Next" and "Previous" buttons to
//  navigate between 3 steps. Display the current step number and
//  content. Use useState to track the current step

import React, { useState } from 'react'

// const step1 = () => {
//     console.log("This step One");
// }

// const step2 = () => {
//     console.log("This step Two");
// } 

// const step3 = () => {
//     console.log("This step Three");
// }

const StepWizard = () => {
    const [page, setPage] = useState(1);
  return (
    <div>
      
      <h1>page: {page}</h1>


      <button style={{display:page>1?"block":"none"}} onClick={() => setPage(
         page>1?page-1:page=1

      )}>Previous</button>
       {" "}

      <button style={{display: page<3?"block":"none"}} onClick={() => setPage(
        page<3?page+1:page=3
      )}>Next</button>
     

    </div>
  )
}

export default StepWizard
