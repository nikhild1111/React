import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-x-2'>
      {/* css loader generator */}
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner
