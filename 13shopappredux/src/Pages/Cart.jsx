import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../Components/Cartitem';
import { NavLink } from 'react-router-dom';
const Cart = () => {

  // here cart gives us the initial value
  const {Cart}=useSelector((state)=>state);
// we are extractting cart reducer directly so get initial state

const[totalamount,settotalamount]=useState(0);
useEffect(()=>{

  settotalamount(Cart.reduce((acc,curr)=>acc+curr.price,0));
  // we get curent state and we manes it 
},[Cart]);//when changes occured in the Cart then it will be run


  return (
    <div>
     {
      Cart.length>0?(<div>
        
        <div>{
        Cart.map((item,index)=>{
          // if we use{ } bracket then return statement is used if we use  () no need to return
          return <Cartitem key={item.id} item={item} itemindex={index}/>
        })
        }</div>
        <div>

          <div>Your Cart</div>
           <div>Summry</div>
           <p>
            <span>Total Items:{Cart.length}</span>
           </p>
          </div>
          <div><p>
                 Total Amount:${totalamount}
                 </p></div>
        <button>CheckOut NoW</button>
        
        </div>):(<div>

          <h1>Cart Empty</h1>
          <NavLink to="/">
          <button>
            Shop Now
          </button>
          </NavLink>
        </div>)
     }
    </div>
  )
}

export default Cart
