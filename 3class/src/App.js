import React from 'react'
import { useState } from 'react'
const App = () => {
const [count,setCount]=useState(0);


function decreseHandler(){
  setCount(count-1);
}
function increseHandler(){
  setCount(count+1);
}
function resetHandler(){
  setCount(0);
}
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] text-2xl'>
        INCREMENT & DECREMENT
      </div>
<div className='flex flex-row items-center bg-white w-[300px] h-[60px] justify-between box-border'>
      <button onClick={decreseHandler} className='text-[50px] pr-[30px] pl-[30px]'>
        -
        </button>

        <div  className='text-black-800 border-l-2 border-r-2 border-gray-500 pr-[40px] pl-[40px] h-[45px] flex items-center text-[30px] '>
        {count}

          </div>

          <button onClick={increseHandler} className='text-[50px] pr-[30px] pl-[30px]'>
            +
            </button>
        
        
        </div>

        <button onClick={resetHandler} className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500'>
          Reset
        </button>
    </div>
  )
}

export default App
