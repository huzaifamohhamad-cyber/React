import React from 'react'

const App = () => {
   const defSubmit= (e) =>{
   e.preventDefault()
   console.log("form submitted")
   }
  return (
<div>
      <form onSubmit={(e)=>{
        defSubmit(e);
      }}>
        <input type="text" placeholder='Enter your name' id='ipt' />
        <input type="submit" id='btn'/>
      </form>
    </div>
  )
}

export default App
