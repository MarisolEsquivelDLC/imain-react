import React from 'react'

function ShowHide() {
const [show,setShow]= useState(true);

  return (<div>
   {show? <h2> HIDE ME</h2> : ""} 
    </div>);
}

export default ShowHide;
