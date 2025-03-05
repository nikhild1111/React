import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Support = () => {
  const navigat=useNavigate();
  function clickHanler(){
    //move to about page
    navigat("/about");
  }
  function backHanler(){
    navigat(-1);
  }
  return (
    <div>
    <div>
           This is a about page
       </div>
       <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={clickHanler}>Move to about</button>
       <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={backHanler}>Go back</button>
       </div>
  )
}

export default Support
