


import React, { useRef, useState } from 'react'


const Stopwatch=()=>{

const [time,setTime]=useState(0);

let Stopref=useRef(null);

function startTimer(){
Stopref.current=setInterval(()=>{
//     setTime(time - 1); 
// // ❌ might be wrong if multiple updates happen quickly 
// 3. Why we use function form?
// This is called the functional update in React.
// It is safer when new state depends on previous state.
// we know that when updates are doen then its go to update and soem time not shwon so use this 

  setTime(time=>time+1)
  console.log("Time Changed");

},1000);



}

function stopTimer(){

clearInterval(Stopref.current);
Stopref.current=null;

}

function resetTimer(){
stopTimer();
setTime(0);
}
    return (

        <div>
            <h1>
                StopWatch: {time} Seconds
            </h1>
 <button onClick={startTimer}>
                   Start
            </button>
            <br /><br />
            <button onClick={stopTimer}>
                   Stop
            </button>
           <br /><br />

           <button onClick={resetTimer}>
            Reset
           </button>

            <br /><br />




        </div>
    )
}


export default Stopwatch;




//  Problem with normal variables in React
// In React functional components:

// Variables reset on every render

// let intervalId = null; // normal variable
// Every time the component re-renders, this variable is recreated.

// So if you store the ID in it, you lose it after the next render.

// Example:

// function Stopwatch() {
//   let intervalId = null; // normal variable

//   function startTimer() {
//     intervalId = setInterval(() => console.log("tick"), 1000);
//   }

//   function stopTimer() {
//     clearInterval(intervalId);
//   }

//   return <button onClick={startTimer}>Start</button>;
// }





// Problem:

// Click Start → interval starts.

// Component re-renders (maybe because state changes).

// intervalId becomes null again because function runs fresh.

// Now stopTimer will not have the correct ID → can’t clear the interval.

// 🔹 Why useRef fixes it
// const intervalRef = useRef(null);
// A ref value persists across renders.

// Does not reset like a normal variable.

// Perfect for storing interval IDs, DOM nodes, or mutable values.

// ✅ Key Rule
// Normal variable → resets on every render ❌

// useRef → persists across renders ✅

// 🔹 In short
// We can’t rely on a normal variable because:

// Component functions re-run every render.

// Variables inside them reset.

// useRef gives us a stable place to store data between renders.





// 1️⃣ useRef
// Stores data across renders.

// Does not trigger re-render when updated.

// Perfect for interval IDs or mutable values not needed in UI.

// Example:

// js
// Copy
// Edit
// const intervalRef = useRef(null);

// function startTimer() {
//   intervalRef.current = setInterval(() => console.log("tick"), 1000);
// }

// function stopTimer() {
//   clearInterval(intervalRef.current);
// }
// ✅ Efficient

// ✅ No extra render

// ✅ Value persists across renders

// 2️⃣ useState
// Stores data across renders.

// Triggers re-render whenever updated.

// Best for UI data you want to display.


// const [intervalId, setIntervalId] = useState(null);

// function startTimer() {
//   const id = setInterval(() => console.log("tick"), 1000);
//   setIntervalId(id); // causes a re-render
// }

// function stopTimer() {
//   clearInterval(intervalId);
// }
// ✅ Works

// ❌ Unnecessary re-render (UI not changing for ID)

// 🔹 Conclusion
// Both can work.

// useRef is preferred for interval ID because:

// No re-render needed

// Simpler and more efficient

