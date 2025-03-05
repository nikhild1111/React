import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const SignupForm = (props) => {
    const navigate=useNavigate("");
    let setIsLoggedIn=props.setIsLoggedIn;
     const[showPassword,setPassword]=useState(false);
     const[showConfirmPassword,setConfirmPassword]=useState(false);
    const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",confirmpassword:""});
    function changeHandler(e){
setFormData((prev)=>({
    ...prev,[e.target.name]:e.target.value
}));
    }  
    const [isHovered, setIsHovered1] = useState(false);
    const [accounttype, setaccounttype] = useState("");
    const [isHovered2, setIsHovered2] = useState(false);
function set2(){
setaccounttype("student");
    setIsHovered2(true);
    setIsHovered1(false);
    }
function set1(){
    setaccounttype("instructor");
    setIsHovered1(true);
    setIsHovered2(false);
    }

    function submitHandler(e){
        e.preventDefault();
       if(formData.password!=formData.confirmpassword){
        toast.error("Password do not match with Comfirm password ");
        return;
       } else{
        toast.success("new user is loged in");
        setIsLoggedIn(true);
        const userData={
            ...formData,
        };

const finalData={
    ...userData,accounttype
}
console.log("Printting the final data\n");
        console.log(finalData);
                navigate("/Dashboard");
       }
    }
  return (
    <div>

{/* ${
        isHovered ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} */}
      {/* {student and instructor} */}
    <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
        <button className={`rounded-full px-3 py-3 text-richblack-5 hover:bg-black ${isHovered2?"bg-black":""} transition-all duration-200`} onClick={set2}>
            Student
        </button>
        <button className={`rounded-full px-3 py-3 text-richblack-5 hover:bg-black ${isHovered?"bg-black":""} transition-all duration-200`} onClick={set1}>
            Instructor
        </button>
    </div>
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4'>
        {/* first name and last name */}
      <div className='flex gap-4 items-center justify-center'>  <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>First Name<sup className='text-pink-200 ml-1'>*</sup></p>
            <input  className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5' type='text' name="firstName" value={formData.firstName} onChange={changeHandler}  placeholder='Enter first name' required ></input>
        </label>
      <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200 ml-1'>*</sup></p>
            <input  className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5' required name="lastName" value={formData.lastName} onChange={changeHandler} type='text' placeholder='Enter last name'></input>
        </label>
        </div>
        {/* email address */}
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>Email Adress<sup className='text-pink-200 ml-1'>*</sup></p>
            <input  className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5' required name="email" value={formData.email} onChange={changeHandler} type='email' placeholder='Enter Email'></input>
        </label>
{/* passwprd */}
<div className='flex gap-4 items-center justify-center'>
 <lable className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200 ml-1'>*</sup>
            </p>
            <input  className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5' type={showPassword?("text"):("password")} name='password' required value={formData.password} onChange={changeHandler} placeholder='Enter Password'></input>
       <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setPassword((prev)=>!prev)}>
       {!showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
       </span> </lable>
       {/* confirm Password */}
 <lable className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 md-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-pink-200 ml-1'>*</sup>
            </p>
            <input className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5' type={showConfirmPassword?("text"):("password")} name='confirmpassword' required value={formData.confirmpassword} onChange={changeHandler} placeholder='Confirm Password'></input>
       <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setConfirmPassword((prev)=>!prev)}>
       {!showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
       </span> 
       
       </lable> 
       </div>

       <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Create acoount
       </button>
    </form>
    
    </div>
  )
}

export default SignupForm
