import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";


const App = () => {
  const[text,setText]=useState('');

//variation 1->every time it will run
// useEffect(()=>{
//   console.log("UT IS RENTERD ");
// });


// //variation 2->only single time it will be run on the first sender
// useEffect(()=>{ 
//   console.log("UT IS RENTERD ");
// },[]);


// it will must run on first render then the value given in the dependensiis list o the basis of that it will run
//variation 3 ->the dependensiis is given the list and whenever it is occured the useEffect will be run
// useEffect(()=>{
//   console.log("change done");//it will be run when the text is changed
// },[text]);//only when the text chnage then it will run totaly depend on the dependency


//variation 4->
//if we add the event listerner on the object then when we perform chnages multiple time then multiple eventlister will be present in that and it not good so we have to clenup them
useEffect(()=>{
  // add Event Listener
  console.log("Lisner added")
  return ()=>{
    console.log("Listner removed "); //here first always the lisner removed first then new will be added
  }
},[text]);
//always the code of the return present in the useEffect will be run first(its use for cleane) then the code outside it 


  function changeHandler(event){
    setText(event.target.value);
    // console.log(text); //dont do this else erorr will come
    console.log(event.target.value); // Log the updated value directly
  }
  return (
    <div className='App'>
      <input type="text" value={text} onChange={changeHandler}></input>
    </div>
  );
}

export default App;
