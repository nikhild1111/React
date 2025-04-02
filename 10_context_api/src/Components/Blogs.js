import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
const Blogs = () => {
//now we wil, consume the data which we return in the contex
const {posts,loading}=useContext(AppContext);
  
return (
    <div className='w-11/12 max-w-[670px] py-7 flex flex-col gap-y-9 mt-10 justify-center mb-[70px] items-center'>
      {
        loading ?(<Spinner></Spinner>):(posts.length===0?(<div><p>NO POST DATA FOUND</p></div>):(posts.map((post)=>(<div key={post.id}>
               <p className='font-bold'>{post.title}</p>
               <p className='text-sm'>
                By <span className='italic'>{post.author}</span>On <span className='underline font-bold'>{post.category}</span>
               </p>
               <p className='text-sm'>Posted on {post.date}</p>
               <p className='pt-4'>{post.content}</p>
                    <div>
                {post.tags.map((tag,index)=>{
                    return <span className='text-sm text-blue-500 underline mx-1 gap-2 font-bold cursor-pointer' key={index}>{`#${tag}`}</span>
                })}
                
                </div>

        </div>))))
      }
    </div>
  )
}

export default Blogs
