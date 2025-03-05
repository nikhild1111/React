import { useState } from 'react';
import './ProductForm.css'

function ProductForm(propes){

    // now to handle multiple  paremert directly single handaly
//we can also get the previous state of object using a prevous test argument in the react directly
//****pending

//     //this is to handele each event separetly regrading each parameter 
const [newtitle,setTitle]=useState('');//here we when we value in the setvalue then setvalue change the value of title on ui and give us value in the varible which we give in the [] array for tacking the input return by useState()
const [newdate,setdate]=useState('');

    //whenerv we are giving something in the input and we want that value we use onchane and the value is come in the event
    function titleChangeHandler(event){
        setTitle(event.target.value);//settitle function will be calles so it will set value on title ans reflect on the ui
        // console.log(event.target.value);

    }

    function dateChangeHandler(event){
        setdate(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(e){
        e.preventDefault();//to prevent the form from submit

        const productData={
            title:newtitle,
              date:newdate
        };
        // console.log(productData);
        propes.onsaveproduct(productData);//when we say props.onsaveproduct then it will work like a function hole argument so we will called the hole function and give the argument inside that

        setTitle('');//when we write the value in the input filled we want that after we get the value in  the object we want to empty the input filled but if we just give the calle to the settile it will change the ui may be it will not refect to us on ui but it changes but if we want that it must be shown on the css so what we will do m=we must has to link the js with the css so we write the value={newTile } in the css filled so it will link and the chnge will be shown because newtitle we get here but not change for that write on css in the value form
        setdate('');
    }
    return(<form onSubmit={submitHandler}>
        {/* //after submit form this will be called to submitHandler function */}
        <div className='newtitle'>
            <label>Title</label>
            {/* //Handler is not nesssary we add for understanding perpose */}
            <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='newdate'>
            <label>
                Date
            </label>
            <input type='date' value={newdate} min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler}></input>
        </div>
        <div className='newbtn'>
            <button  type='submit'>Add Product</button>
        </div>
    </form>)
}

export default ProductForm;