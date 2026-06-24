import { useState } from 'react'
import React from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    const copytask=[...task]      
    copytask.push({title,detail})
    setTask(copytask)
    setTitle('')  
    setDetail('')  
    console.log(task)                                           
  }
  const deleteNote=(id)=>{
     const copyTask=[...task]
     copyTask.splice(id,1);
     setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form className='flex items-start flex-wrap p-7 lg:w-1/2 gap-4 flex-col ' onSubmit={(e)=>{
        submitHandler(e)
      }
      } action="">
       
         <h1 className='font-bold text-xl'>Add Notes</h1>
        <input 
        type="text" placeholder='Enter notes heading'
        className='px-4 outline-none w-full py-2 border-2 rounded-xl'
        value={title} 
        onChange={(e) =>{
          setTitle(e.target.value)
        }}
        />
        <textarea 
        placeholder='Write notes here' 
        className='h-30 w-full px-5 py-2  outline-none flex-row border-2 rounded-xl'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}></textarea>
        <button className=' bg-amber-100 cursor-pointer active:scale-95 w-full text-black rounded-xl p-2'>Add notes</button>
    
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-7'>
         <h1 className='font-bold text-xl'>Recent Notes</h1>
         <div className='flex flex-wrap items-start justify-start overflow-auto h-full  gap-4 mt-5'>

         {task.map(function(elem,idx){
          return <div key={idx} className='flex  items-start flex-col gap-2 relative h-50 w-40 rounded-xl text-black  py-7.5 pb-5 px-3 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover' >
            <button onClick={()=>{
              deleteNote(idx);
            }} className='absolute top-6 cursor-pointer active:scale-95 right-3 w-1/5 bg-red-600 text-white rounded-full '>X</button>
            <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
            <p className='leading-tight text-sm overflow-y-auto font-semibold text-gray-600 '>{elem.detail}</p>
          </div>
         })}
        
         </div>
      </div>
      
    </div>
  )
}

export default App
