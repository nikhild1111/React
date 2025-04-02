import React from 'react'

const Navber = () => {
  return (
    <nav className='bg-purple-200 flex justify-between items-center px-4 h-14'>
        <div className='logo font-bold'>Passop

        </div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navber
