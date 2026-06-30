import React, { useState } from 'react'

const App = () => {
  
  const [Num, setNum] = useState(20)
  function addchange(){
    setNum(Num+1)
  }
  function subchange(){
    setNum(Num-1)
  }
  function by5change(){
    setNum(Num+5)
  }
  return (
    <div className='check'>
      <h1>value of a is {Num}</h1>
      <button onClick={addchange}>increase me!</button>
      <button onClick={subchange}>decrease me!</button>
      <button onClick={by5change}>add 5 on me!</button>
      </div>
  )
}

export default App

