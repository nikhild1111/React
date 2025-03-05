import React from 'react';
import { useEffect,useState } from 'react';
import {FcLike} from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
     let course=props.course;
let likedCources=props.likedCources;
let setLikedCourses=props.setLikedCourses;
    function likeHandler(){
           if(likedCources.includes(course.id)){

            // how new array is set even thow we not return it
            // (prev) => prev.filter((cid) => cid !== course.id)
            // This is a single-expression arrow function (no {} braces), so it implicitly returns the result of prev.filter(...).
            // filter() always returns a new array, which React then sets as the new state.
          
        //   it is just like the lamda function so it automaticaly write it internaly
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
        toast.warning("like removerd "); 
        }
        else{
//if the empty then addd the first ccource id
            if(likedCources.length==0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev ,course.id])
            }
            toast.success("Liked successfully ");
        }
    }
   
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}>
            </img>

            <div>
                <button onClick={likeHandler} className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[12px] grid place-items-center'>
                  {
                    // ! oprator is also present
                    likedCources.includes(course.id)? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem" />)
                  }  
                </button>
            </div>
        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='m-2 text-white'>
                {
                    
                    course.description.length>100? (course.description.substr(0,100)+"..."):(course.description)
                }
            </p>
        </div>
      
    </div>
  )
}

export default Card
