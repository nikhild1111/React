import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const Testimonial = (props) => {
    let reviews=props.reviews;
    let k=reviews.length;
    // console.log(k);
    const[index,setIndex]=useState(0);
    function surpriceHandler(){
      let randomInt = Math.floor(Math.random() * k);
      setIndex(randomInt);
    }
    function leftHandler(){
         if(index==0){
          setIndex(k-1);
         }else{
          setIndex(index-1);
         }
    }
    function rightHandler(){
      if(index==4){
        setIndex(0);
       }else{
        setIndex(index+1);
       }
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
      <Card  review={reviews[index]}></Card>
      <div className='flex text-3xl gap-3 text-violet-400 font-bold justify-center m-6'>
        <button onClick={leftHandler} className='cursor-pointer  hover:text-violet-500'>
        <FiChevronLeft />
        </button>
        <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500'>
        <FiChevronRight />
        </button>
      </div>

      <div>
        <button onClick={surpriceHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprice me
        </button>
      </div>
    </div>
  )
}

export default Testimonial
