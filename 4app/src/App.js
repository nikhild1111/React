import React, { useEffect, useState } from "react";
import Cards from "./componenets/Cards";
import Card from "./componenets/Card";
import Filter from "./componenets/Filter";
import Navbar from "./componenets/Navbar";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./componenets/Spinner";
const App = () => {
// let abj={
//   a:"a"
// }
//using a useEffect we can do the api call we

//either use the [] empty object or the sppner else null array error will come
const[courses,setCourses]=useState(null);
const[loading,setLoading]=useState(true);
const[category,setCategory]=useState(filterData[0].title);

async function fetchData(){
  setLoading(true);
  try{
const res=await fetch(apiUrl);//fetch request we are rendering
const output=await res.json();
// console.log(output);
//save data into a variable

setCourses(output.data);
// console.log(output);
  }
  catch(error){
 toast.error("Something went wrong ");
  }
setLoading(false);
}
  useEffect(()=>{
  fetchData();
},[]);

  return <div className="min-h-screen flex flex-col bg-bgDark2">
<div><Navbar/></div>
    
 <div> <Filter filterData={filterData} category={category} setCategory={setCategory}/></div>  
  <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> {
      loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
    }</div>
   
  </div>
};

export default App;
