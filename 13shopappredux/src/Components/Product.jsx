import React from 'react'
import toast from 'react-hot-toast';
import {add,remove} from '../redux/Slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { CartSlice } from '../redux/Slices/CartSlice';

const Product = ({post}) => {
  const {Cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to Cart ");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item remove from Cart ");
  }
  return (
    // box shadow for the shadow 
    <div className='flex flex-col item-center justify-between md:hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline h-[376px]'>
      <div><p className='text-gray-700 font-bold text-lg truncate w-40 mt-1 mx-auto'>{post.title}</p></div>
      <div>
        <p className='w-40 text-gray-500 font-normal text-[10px] mx-auto'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full'></img>     </div>
<div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
            <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        {
          Cart.some((p)=>p.id==post.id)?(<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in' onClick={removeFromCart}>Remove Item</button>):(<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in' onClick={addToCart}>Add Item</button>)
        }

</div>
    </div>
  )
}

export default Product
