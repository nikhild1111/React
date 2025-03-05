import React from 'react'
import Card from './Card'
import { useEffect,useState } from 'react';
// dont use the {courcess}
const Cards = (props) => {
    // console.log(cources);
    let courses=props.courses;
    let category=props.category;

    //initial no like is in the onject
const[likedCources,setLikedCourses]=useState([]);


// console.log(courcess);
    const getCourses=()=>{
      if(category==="All"){//if category all then pass the all type of data
        let allCoures=[];
        Object.values(courses).forEach(array=>{
       array.forEach(courseData=>{
        allCoures.push(courseData);
       })
        })
        return allCoures;
      }else{
//main sirf specific categori ka data hi pass karunga

//in the cource array the difrenc=t category wise array is present ot whcih we are filter and add in the allCoures when we want to render all but here we want to render besed on category so we write directly
return courses[category];

      }
  
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
     {
getCourses().map((course)=>{
return <Card key={course.id} course={course} likedCources={likedCources} setLikedCourses={setLikedCourses}/>
})
     } 
    </div>
  )
}

export default Cards
