import React from 'react'
import Navbar from './compoments/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <Navbar />
      <div className='flex justify-between gap-7 font-bold text-lg p-7'>
           <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes> 
      </div>
    </div>
  )
}

export default App