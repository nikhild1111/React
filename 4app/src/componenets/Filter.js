import React from 'react'
import { useEffect, useState } from 'react';

//take filler data as a variable like argument
const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  function filerHandler(title) {
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center '>
      {filterData.map((data) => {
        // return is imporant here 
        return (<button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category===data.title ?"bg-opacity-60 border-white ":"bg-opacity-40 border-transparent"}`} key={data.id}
 onClick={() => filerHandler(data.title)}>
  {data.title}
        </button>)
      })}
    </div>
  )
}

export default Filter
