import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
const LoginForm = (props) => {
    let setIsLoggedIn=props.setIsLoggedIn;
    let isLogin=props.setIsLoggedIn;
    const navigate=useNavigate("");
    
    const[formData,setFormData]=useState({
        email:"",password:""
    })

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,[event.target.name]:event.target.value
        }))
    }

    const[showPassword,setPassword]=useState(false);
  function  submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    console.log();
    toast.success("Logged in");
    navigate("/Dashboard");
  }
 
    return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4'>
        <lable className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>
                Email Adress<sup className='text-pink-200 ml-1'>*</sup>
            </p>
            <input type='email' name="email" required value={formData.email} onChange={changeHandler} placeholder='Enter Email'
           className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5'
            ></input>
        </lable>
        <lable  className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200 ml-1'>*</sup>
            </p>
            <input type={showPassword?("text"):("password")} name='password' required value={formData.password} onChange={changeHandler} placeholder='Enter Password' className="bg-richblack-800 !important rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            ></input>
       <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setPassword((prev)=>!prev)}>
       {!showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'
     />):(<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)}
       </span>
<Link to="#">
<p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
    Forgot password</p></Link>
            </lable>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign in
            </button>
      </form>
    </div>
  )
}

export default LoginForm
