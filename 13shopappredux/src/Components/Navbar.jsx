import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../Pages/Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {

  const{Cart}=useSelector((state)=>state);
  return (
    <div>

{/* Since the public folder is directly served at the root, you don't need to import the file. Instead, use it as a relative URL. */}
{/* Use /logo.png directly in the src attribute of an <img> tag. */}
      
{/* <NavLink>
Works like <Link> but also provides an active class when the link matches the current URL.
Useful for highlighting the active link. */}
        <div className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
        <Link to="/">
        <div className='ml-5'>
        <img src="/logo.png" alt="logo" width={160} height={32} loading='lazy'>
        </img>
        </div></Link>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
               <Link to="/"><div>Home</div></Link> 
               <Link to="/cart"><div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                {
                  Cart.length>0 && 
                  <span
                  className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                  >{Cart.length}</span>
                }
                </div></Link>
               {/* <Link to="/cart"><img src="/apple-touch-icon.png" alt="No cart" /></Link>   */}
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
