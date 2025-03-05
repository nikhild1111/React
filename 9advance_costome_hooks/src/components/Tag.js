import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Spinner from './Spinner';

//taking the accss of the api key here 
//dont write api key in the quatos
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
    const[tag,setTag]=useState('car');
  const[gif,setgif]=useState('');
  const [loading,setloading]=useState(false);

async function fetchdata() {
  setloading(true);//api fetch may take a time so we call sppiner
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
 //the data whcih we fetch have multiple value we want only data from that we will take 2nd data then 
  const {data}=await axios.get(url);
  const imageSource=data.data.images.downsized_large.url;
  setgif(imageSource);
  setloading(false);//after  fetch load is false
}
useEffect(() => {
    // const timer = setTimeout(() => {
      fetchdata();
    // }, 500); // Wait 500ms before fetching
    
    // return () => clearTimeout(timer); // Cleanup previous timer
  }, []);
  
  function clickHandler(){
    fetchdata();
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
     <h1 className='text-xl underline uppercase font-bold mt-[25px]'>Random {tag} Gif</h1>
     {
      loading?(<Spinner></Spinner>):(<img src={gif} width="450px"></img>)
     }
      <input value={tag} onChange={(e)=>setTag(e.target.value)} className='w-9/12 bg-yellow-400 py-2 text-lg rounded-lg mb-[5px] text-center'  type='text'></input>
      <button onClick={clickHandler} className='w-9/12 bg-yellow-400 py-2 text-lg rounded-lg mb-[25px]'>Generate</button>
    </div>
  )
}

export default Tag
