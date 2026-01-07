

// Why do we need useRef for direct DOM manipulation?
// Short Answer (Interview-ready)

// React controls the DOM using Virtual DOM.
// When we need direct access to a real DOM element (like focus, scroll, measure), we use useRef because React does not allow direct DOM access normally.

// The Real Reason (Important)

// React follows declarative UI:

// You describe what UI should look like

// React decides how to update the DOM

// What useRef Actually Does
// const inputRef = useRef(null);


// inputRef.current → points to actual DOM node

// React knows about this reference

// Safe and controlled access


// When Direct DOM Manipulation Is REQUIRED

// React cannot do these declaratively:

// 1️⃣ Focus input
// inputRef.current.focus();

// 2️⃣ Scroll control
// divRef.current.scrollIntoView();

// 3️⃣ Measure height / width
// const height = divRef.current.offsetHeight;

// 4️⃣ Media control (video/audio)
// videoRef.current.play();

// 5️⃣ Integrate third-party libraries

// Chart.js

// Mapbox

// GSAP animations


// We avoid useRef for UI state management because it bypasses React’s declarative model. It should be used only when direct DOM access or mutable values are required.



// Using useRef like this:

// Bypasses React rendering

// UI state becomes out of sync

// Hard to debug

// Breaks predictable behavior

// Using useRef instead of state

// UI will NOT update
// React doesn’t know change happened

// Harder to test & maintain



// Direct DOM updates are costly

// Virtual DOM batch updates → fewer real DOM operations  then performnce is high but when use ref used vistul actual dom dont know abouthe change
//  React keeps a Virtual DOM (JS object copy of real DOM)

// When state/props change:

// New Virtual DOM is created

// React diffs old vs new Virtual DOM (reconciliation)

// Finds minimum changes

// Updates only changed nodes in real DOM


// 🔹 Example (Very Common)
// function Login() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} />;
// }







// Stop watch explain

// here we use use ref becuase every time when value is chnge new interval is creted to Interval
//  ID must persist between renders
// 2️⃣ Interval ID should not trigger re-render  
// useRef.current stores mutable data
// 4️⃣ React does not reset ref on re-render 
// means tthe smae interval will work and if the stop time then agin new will be set so that resone we use it 







import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // UI state
  const intervalRef = useRef(null);    // mutable value

  const start = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <>
      <h2>Time: {time}s</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Stopwatch;





























///uuuuuuuuuuupppppppppppppppttttttttttttttooooooooooooooo







// import React, { useRef, useState } from 'react'


// const Stopwatch=()=>{

// const [time,setTime]=useState(0);

// let Stopref=useRef(null);

// function startTimer(){
// Stopref.current=setInterval(()=>{
// //     setTime(time - 1); 
// // // ❌ might be wrong if multiple updates happen quickly 
// // 3. Why we use function form?
// // This is called the functional update in React.
// // It is safer when new state depends on previous state.
// // we know that when updates are doen then its go to update and soem time not shwon so use this 

//   setTime(time=>time+1)
//   console.log("Time Changed");

// },1000);



// }

// function stopTimer(){

// clearInterval(Stopref.current);
// Stopref.current=null;

// }

// function resetTimer(){
// stopTimer();
// setTime(0);
// }
//     return (

//         <div>
//             <h1>
//                 StopWatch: {time} Seconds
//             </h1>
//  <button onClick={startTimer}>
//                    Start
//             </button>
//             <br /><br />
//             <button onClick={stopTimer}>
//                    Stop
//             </button>
//            <br /><br />

//            <button onClick={resetTimer}>
//             Reset
//            </button>

//             <br /><br />




//         </div>
//     )
// }


// export default Stopwatch;




// //  Problem with normal variables in React
// // In React functional components:

// // Variables reset on every render

// // let intervalId = null; // normal variable
// // Every time the component re-renders, this variable is recreated.

// // So if you store the ID in it, you lose it after the next render.

// // Example:

// // function Stopwatch() {
// //   let intervalId = null; // normal variable

// //   function startTimer() {
// //     intervalId = setInterval(() => console.log("tick"), 1000);
// //   }

// //   function stopTimer() {
// //     clearInterval(intervalId);
// //   }

// //   return <button onClick={startTimer}>Start</button>;
// // }





// // Problem:

// // Click Start → interval starts.

// // Component re-renders (maybe because state changes).

// // intervalId becomes null again because function runs fresh.

// // Now stopTimer will not have the correct ID → can’t clear the interval.

// // 🔹 Why useRef fixes it
// // const intervalRef = useRef(null);
// // A ref value persists across renders.

// // Does not reset like a normal variable.

// // Perfect for storing interval IDs, DOM nodes, or mutable values.

// // ✅ Key Rule
// // Normal variable → resets on every render ❌

// // useRef → persists across renders ✅

// // 🔹 In short
// // We can’t rely on a normal variable because:

// // Component functions re-run every render.

// // Variables inside them reset.

// // useRef gives us a stable place to store data between renders.





// // 1️⃣ useRef
// // Stores data across renders.

// // Does not trigger re-render when updated.

// // Perfect for interval IDs or mutable values not needed in UI.

// // Example:

// // js
// // Copy
// // Edit
// // const intervalRef = useRef(null);

// // function startTimer() {
// //   intervalRef.current = setInterval(() => console.log("tick"), 1000);
// // }

// // function stopTimer() {
// //   clearInterval(intervalRef.current);
// // }
// // ✅ Efficient

// // ✅ No extra render

// // ✅ Value persists across renders

// // 2️⃣ useState
// // Stores data across renders.

// // Triggers re-render whenever updated.

// // Best for UI data you want to display.


// // const [intervalId, setIntervalId] = useState(null);

// // function startTimer() {
// //   const id = setInterval(() => console.log("tick"), 1000);
// //   setIntervalId(id); // causes a re-render
// // }

// // function stopTimer() {
// //   clearInterval(intervalId);
// // }
// // ✅ Works

// // ❌ Unnecessary re-render (UI not changing for ID)

// // 🔹 Conclusion
// // Both can work.

// // useRef is preferred for interval ID because:

// // No re-render needed

// // Simpler and more efficient

