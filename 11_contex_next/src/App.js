import React, { useContext, useEffect } from 'react'
import Header from './Components/Header';
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'; 
import { AppContext } from './Context/AppContext';

export const App = () => {
  // contex means sanpshort of data bessicaly when we want to use the data fron one card to other we has to send it from the diffrent card using the props even thow some props are dont want that data we has to send it beauxce thay hac=va some relation with it and by only that card we can send the data and so its not good in understabding and using perpose so we make a contex of data whterver thwe required in the diffrent section of code we placed it insidethe contec=xt and whenever we want that we use that contex and take it 
  const {fetchBlogPosts}=useContext(AppContext);
 useEffect(()=>{
  fetchBlogPosts();
 },[])
      
 
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
       <Header/>
       <Blogs/>
       <Pagination/>
    </div>
  )
}

export default App