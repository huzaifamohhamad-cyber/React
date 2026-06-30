import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-25 bg-green-900 flex justify-between gap-8 items-center pl-4'>
        <h1 className='font-bold text-2xl'>HUB.COM</h1>
     <div className='flex justify-between gap-7 px-6 text-lg font-bold'> 
        
    
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  
  )
}

export default Navbar
