import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { comma } from 'postcss/lib/list';
import { comment } from 'postcss';
import './index.css'
function App() {

  // this if for the handling the each input feild sepratly

  // if we change any thing in first and last anme this will reflect here also
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");


// function changefirstnameHnadler(e){
//   console.log("printing the first name ");
// // console.log(e.target);//this print the elemnt on which we aply the event
// // console.log(e.target.value);//this print the value at elemnt on which we aply the event
// setFirstname(e.target.value);
// }
// function changelastnameHnadler(e){
//   console.log("printing the first name ");
// // console.log(e.target);//this print the elemnt on which we aply the event
// // console.log(e.target.value);//this print the value at elemnt on which we aply the event
// setLastname(e.target.value);
// }

//we use const in the useState to inshure that it will notreasing only the callback function can changed it

//now learn how to handle multiple state simulteneously

// /*********imp imp make shure name in the object and in puttag is same
const [formData ,setFormData]=useState({firstName:"",lastName:"",email:"",comment:"",isvisible:true,mode:"",favCar:""});
// If you use let, you might mistakenly reassign formData directly, which won't trigger a re-render in React.
// With const, you ensure that formData can only be updated using setFormData, which follows React's state management rules.
 

// /*******imp imp make shure name in the object and in puttag is same


// function changeHnadler(event){
  // console.log(`printing the ${event.target.name} :${event.target.value}`);
//   console.log(formData);


//   setFormData(prev=>{
//     return {
//       // this will hept the previlue state data as it is and change the data regarding the filed based on the input whichw e give
//       ...prev,[event.target.name]:event.target.value
//     }
//   });
// }

function changeHnadler(event){
  const{name,value,checked,type}=event.target;
  // console.log(formData);//if we print here then it will show use the state before we perform chechegd
  setFormData(prev=>{
      return {
        // this will hept the previlue state data as it is and change the data regarding the filed based on the input whichw e give
        ...prev,[name]:type === "checkbox" ? checked : value
        
      }
      
    });
  
  }


  // why answer is not geting orect in the formdata
//   The issue is that you're logging console.log(formData); immediately after calling setFormData(), which will not reflect the updated state immediately.

// Why is this happening?
// React state updates are asynchronous.
// When you call setFormData(), React schedules a state update.
// However, console.log(formData); runs before the state actually updates.
// This means you see the previous state in the console instead of the updated one.


// useEffect(() => {
  //   console.log("Updated formData:", formData);
  // }, [formData]); // Runs whenever formData changes
  
function submitHandler(e){
e.preventDefault();
console.log("Submitted Data is :");
console.log(formData);
}


return (
      <div className='App'>
           <form onSubmit={submitHandler} className='flex items-center justify-center flex-col border-black'>
            {/* here we are using the diffrent handler for each state but now we will learn about the multiple statehandle so werite single handler */}
              {/* <input type="text" placeholder='First name' value={firstname}  onChange={changefirstnameHnadler}/>
      <br /> <br /><br />
              <input type="text" placeholder='Last name' value={lastname} onChange={changelastnameHnadler}/> */}



              {/* //handling multiple event simultaneously */}
              <br /> <br />

              <input className="border border-black rounded-md p-2" type="text" placeholder='First name' value={formData.firstName} name='firstName' onChange={changeHnadler}/>
      <br /> <br />
              <input className="border border-black rounded-md p-2" type="text" placeholder='Last name' value={formData.lastName} name='lastName' onChange={changeHnadler}/>
<br /> <br />
<input className="border border-black rounded-md p-2" type="email" placeholder='Enter Email ' value={formData.email} name='email' onChange={changeHnadler}/>
<br /> <br />
        
        <textarea className="border border-black rounded-md p-2" name='comment' placeholder='Enter the information ' value={formData.comment} onChange={changeHnadler}></textarea>
          
          <br />
          <br />
        <div>  <input className="border border-black rounded-md p-2 m-3" type="checkbox" name="isvisible" checked={formData.isvisible} onChange={changeHnadler} id='isvisible' />
        <label className="border border-black rounded-md p-2" htmlFor="isvisible">Am I Visible ?</label></div>
        

        <br />
        <br />

{/* fo th group we uae this tag */}
<fieldset  className='flex gap-4' >
  <legend >MODE: </legend>
{/* //if we clecked on offile mode then offline mode is go in the mode of formdata and if in the form tdata offile mode is present make checkd as true for thsi radio else mode is true for anther one if same name is there here we do check and unched based on the string becuse hare which value we send we want io find  */}
    <input type="radio" onChange={changeHnadler} name='mode' value="Oniline-mode" id="Oniline-mode" checked={formData.mode==="Oniline-mode"} />
        <label htmlFor="Oniline-mode">Oniline-Mode</label>
        <input type="radio" onChange={changeHnadler} name='mode' value="Offiline-mode" id="Offiline-mode" checked={formData.mode==="Offiline-mode"} />
        <label htmlFor="Offiline-mode">Offiline-Mode</label>
       
        </fieldset>  
        <div>
        <label htmlFor="favCar"> Select car which you want</label>
        <select className="border border-black rounded-md p-2 m-3"
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHnadler}
        >
<option value="scarpio">scarpio</option>
<option value="fartuner">fartuner</option>
<option value="Tharr">Tharr</option>
<option value="Legender">Legender</option>
<option value="Defender">Defender</option>
        </select>
        </div>
        
{/* by this we can create submit button and do the submit */}
        {/* <input type="submit" value="submit" /> */}
        
        {/* //here no nedd of type=submit in case if form */}
        <button>Submit</button>
         </form>
       </div>
  )
}

export default App
