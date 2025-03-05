import React, { useState } from 'react'

function Card({id,image,info,price,name,removeTour}){
//here on the basis of read more wwe are placed a full text
const [readmore,setReadmore]=useState(false);

// give the usestate useing () perenthiss else error will be come

// ternary oprator
const description=readmore? info :`${info.substring(0,200)}....`;

//if the read more is true then false if false then true
function readmoreHandler(){
    setReadmore(!readmore);
}
return(
<div className='card'>

    <img src={image} className='image'>
    </img>

    <div className='tour-info'>
         <div className='tour-details'>
         <h4 className='tour-price'>${price}</h4>
         <h4 className='tour-name'>{name}</h4>
         </div>
<div className='description'>
    {description}
    <span className='read-more' onClick={readmoreHandler}>
        {readmore?'Show Less':'Read More'}
    </span>
</div>
    </div>
{/* //when we click on the button then we give call to the read more */}
    <button  className='btn-red' onClick={()=>removeTour(id)}>

        NOT INTERSTED
    </button>
</div>
);

}

export default Card;