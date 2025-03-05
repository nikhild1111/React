import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLogin=props.isLogin;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly  mt-6 font-bold items-center flex-wrap'>
      <Link to="/"><img src={logo} alt="logo" width={160} height={32} loading='lazy'>
      </img></Link>
      <nav>
        <ul className='flex gap-8 text-richblack-100'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

{/* {login - SignUp - Logout -Dashboard } */}


<div className='flex gap-8 text-white' >
    { !isLogin &&
        <Link to="/Login" >
        <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        // onClick={()=>{
        //     setIsLoggedIn(true);
        //     toast.success("Log in");
        // }} 
        >
            Login
        </button>
        </Link>
    }
      {!isLogin &&
        <Link to="/SignUp">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        // onClick={()=>{
        //     setIsLoggedIn(true);
        //     toast.success("Sign up");
        // }}
         >
            SignUp
        </button>
        </Link>
    }
      {isLogin &&
        <Link to="/">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        onClick={()=>{
            setIsLoggedIn(false);
            toast.success("Logged Out");
        }}
        >
           Log Out
        </button>
        </Link>
    }
      { isLogin &&
        <Link to="/Dashboard">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        // onClick={()=>{
        //     setLogin(false);
        //     toast.success("Dashboard");
        // }}
        
        >
            Dashboard
        </button>
        </Link>
    }
</div>


    </div>
  )
}

export default Navbar
