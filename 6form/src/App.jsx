import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { comment } from 'postcss';

function App() {
  const [formData, setData] = useState({firstname:"",lastname:"",email:"",country:"",address:"",city:"",state:"",pincode:"",candidates:true,offers:true,comments:true,push:""});
  function changeHandler(e){
    const{name,value,checked,type}=e.target;
    setData((prv)=>{
return{
  ...prv,[name]:type==="checkbox"?checked:value
}
    });

  }

useEffect(() => {
    // console.log("Updated formData:", formData);
  }, [formData]); // Runs whenever formData changes


async  function submitHandler(e){
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

      const data = await response.json();
      // alert(data.message); // Show success message
      console.log("Server Response:", data);
  } catch (error) {
      console.error("Error submitting form:", error);
  }
    // console.log(formData);
    }
  return (
    <>
      <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler}>
        <div className="firstpart flex flex-col w-[80vw] border-2 border-black box-border m-4 p-4">
          <label htmlFor="firstname" className='text-lg font-bold'>firstname</label>
          <input type="text" name="firstname" id='firstname' placeholder='Nikhil' className='border borded-2 border-black rounded-md p-1' onChange={changeHandler} value={formData.firstname} />
        <br />
          <label htmlFor="lastname" className='text-lg font-bold'>lastname</label>
          <input type="text" name="lastname" id='lastname' className='border borded-2 border-black rounded-md p-1' placeholder='Domade' onChange={changeHandler} value={formData.lastname}/>
         <br />
          <label htmlFor="email" className='text-lg font-bold'>email</label>
          <input type="email" name="email" id='email' className='border borded-2 border-black rounded-md p-1' placeholder='domadenikhil@gamil.com' onChange={changeHandler} value={formData.email}/>
         <br />
          <label htmlFor="country" className='text-lg font-bold'>country</label>
         <select name="country" id="country" className='border borded-2 border-black rounded-md p-1' onChange={changeHandler} value={formData.country} >
          <option value="india" selected>india</option>
          <option value="usa">usa</option>
          <option value="austrelia">austrelia</option>
          <option value="russia">russia</option>
          <option value="chaina">chaina</option>
         </select>
         <br />
         <label htmlFor="address" className='text-lg font-bold'>address</label>
          <input type="text" name="address" id='address' className='border borded-2 border-black rounded-md p-1' placeholder='karhi manmad' onChange={changeHandler} value={formData.address}/>
         
         <br />
          <label htmlFor="city" className='text-lg font-bold'>city</label>
          <input type="text" name="city" id='city' className='border borded-2 border-black rounded-md p-1' placeholder='aasam' onChange={changeHandler} value={formData.city}/>
         
         <br /> <label htmlFor="state" className='text-lg font-bold'>state</label>
          <input type="text" name="state" id='state' className='border borded-2 border-black rounded-md p-1' placeholder='maharashtra' onChange={changeHandler} value={formData.state}/>
         <br />
          <label htmlFor="pincode" className='text-lg font-bold'>pincode</label>
          <input type="text" name="pincode" id='pincode' className='border borded-2 border-black rounded-md p-1' placeholder='423104' onChange={changeHandler} value={formData.pincode}/>
       <div className='font-bold'>By Email</div>
       <br />
    <div className='flex flex-col gap-2'>
       <div>
        <div className='flex items-center gap-3'>
        <input type="checkbox" id='comments' name='comments' checked={formData.comments} onChange={changeHandler}/>
            <label htmlFor="comments" className='font-bold'>Comments</label>
          </div>
          <div  className='ml-6'>get notifierd when someone posts a comment on a posting .</div>
        </div>
        <div className=''>
        <div className='flex items-center gap-3'>
        <input type="checkbox" id='candidates' name='candidates' checked={formData.candidates} onChange={changeHandler} />
            <label htmlFor="candidates" className='font-bold'>Candidates</label>
          </div>
          <div  className='ml-6'>get notifierd when someone posts a comment on a posting .</div>
        </div>
        <div className=''>
        <div className='flex items-center gap-3'>
        <input type="checkbox" id='offers' name='offers' checked={formData.offers}  onChange={changeHandler}/>
            <label htmlFor="offres" className='font-bold'>offres</label>
          </div>
          <div  className='ml-6'>get notifierd when someone posts a comment on a posting .</div>
        </div>
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          <div>Push Notification</div>
          <div>These in formation is send to your email by phone.</div>
          <div>
          <div className='flex gap-3'>
            <input type="radio" id='everything' name='push' value="everything" checked={formData.push==="everything"} onChange={changeHandler} />
            <label htmlFor="everything">Everything</label></div>
            <div className='flex gap-3'>
            <input type="radio" id='same as email' name='push' value="same as email" checked={formData.push==="same as email"} onChange={changeHandler} />
            <label htmlFor="same as email">Same as email</label>
            </div> <div className='flex gap-3'>
            <input type="radio" id='no push information' name='push' value="no push information" checked={formData.push==="no push information"} onChange={changeHandler} />
            <label htmlFor="no push information">No push information</label>
            </div>
          </div>
        </div>

        <button className='font-bold border border-black p-2 w-[100px] mt-3 rounded-md bg-blue-500 text-white'>Submit</button>
       
        </div>
        </form>
      </div>
    </>
  )
}

export default App
