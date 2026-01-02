import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { useEffect } from 'react';
import './App.css'
import Stopwatch from './Component/Stopwatch';


function App() {
  const [count,setCount]=useState(0);




  // without  using the useref
//   let val=1;
// function handler(){
//   val=val+1;
//   console.log("The value of the val is :-> ",val);
//   setCount(count+1);

// }
function handler3(){

  setCount(count+1);
}

// using the useRef
//   let val=useRef(1);
// function handler(){
//   val.current=val.current+1;
//   console.log("The value of the val is :-> ",val.current);
//   setCount(count+1);

// }



// using the second usecase
 const btnRef = useRef(null);       // to access the DOM element
  const val = useRef(1);   

function handler(){
  val.current=val.current+1;
   btnRef.current.style.color = "green"; 
 btnRef.current.innerHTML = `useRef B : ${val.current}`;  // manually update the UI
//  btnRef.current.innerHTML = val.current
}
function handler2(){
  val.current=val.current-1;
 btnRef.current.innerHTML = `useRef B : ${val.current}`;  // manually update the UI
 btnRef.current.style.color = "red";  // manually update the UI
//  btnRef.current.innerHTML = val.current
}




function handler3(){

  setCount(count+1);
}

  // this will be call wheneverthe compontnt is rerender
  // if the count is chgned then also it will rerenderign so it will be  backend call so data will be come based ont he changes formt he backend api call i want to call
  // it is use fukl in case of the 
  useEffect(()=>{
    console.log("app is rerender ")
  });
  useEffect(()=>{
    console.log("app is rerender ")
  },[]);

  return (
    <>

    {/* to many rerender error This immediately executes setCount(count + 1) during render — instead of waiting for a click. That’s why the count doesn't work properly.*/}
     {/* <div>
      <button onClick={setCount(count+1)}>
        increment
      </button>
     </div>

     <div>
      count:{count}
     </div>

     <div>
      <button onClick={setCount(count-1)}>
        decrement
      </button>
     </div> */}

<div>


   
     <div>
      <button onClick={handler}>
        increment
      </button>
     </div>

     {/* <div>
     UseRef count:{val.current} <br></br>
    UseState  count:{count}
     </div> */}

     <div ref={btnRef}>
        useref B : {val.current}

     </div>


<button onClick={handler3}>
   count state: {count}
</button>
 

     {/* <div>
      <button onClick={()=>setCount(count-1)}>
        decrement
      </button>
     </div> */}
     <div>
      <button onClick={handler2}>
        decrement
      </button>
     </div>
     </div>





<Stopwatch>

</Stopwatch>




    </>
  )
}

export default App
