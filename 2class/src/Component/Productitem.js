import React,{useState} from 'react';

import Productdate from './Productdate';
import Card from './Card';
import './Productitem.css';

const Productitem = (props) =>{

//we can write any function name setTitle is just for understand
   //useState function return a value and the function whcih change value MEANS we get new vlue(first its previus but after call the set function it changes) in the varible and it will be also change on ui but when we want to connect wth html write valuw={newvalue} in the html
   const [title, setTitle]= useState(props.title);
  function clickHandler(){
   setTitle("Popcorn");//this wll be the call back function type it will change the value of title and render on the ui
   console.log("button clicked");
  }
    return (
         <Card className='product_item'>
            <Productdate date={props.date} />
                 <div className='product_item_desc'>
                    <h2>{title}</h2>
                 </div>
                 <button onClick={clickHandler} className='but'>Add to cart</button>
         </Card> 
    );
}
export default Productitem;