import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(9)
  const getData = async() => {
    
     const resp= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)
     setUserData(resp.data)
     console.log(resp.data)
     
  }
  useEffect(function(){
    getData()
  },[index])
  let printUserData=<h3 className='top-1/2 left-1/2 text-gray-400 text-xs absolute -translate-x-1/2'>loading...</h3>
  
  if(userData.length>0){
    printUserData=userData.map(function(elem, idx){
      return (
        <div   key={idx}>
        <a href={elem.url} target='_blank'>
       
          <div className='h-40 w-40 object-cover ml-7 bg-white' >
        <img className='h-full w-full  'src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold ml-7 overflow-auto Stext-l'>{elem.author}</h2>
        </a>
        
        </div>

      )
    })
  }  
  return (
    <div className='bg-black h-screen overflow-auto w-full text-white'>
      
      
    <div className='flex flex-wrap gap-4 p-2'>
     {printUserData}
    </div>
    <div className=' flex justify-center gap-5 items-center p-4'>
          <button className='bg-amber-400 cursor-pointer active:scale-95  text-sm text-black rounded-xl px-3 py-2 font-semibold'
           onClick={()=>{ 
              setIndex(index-1)
             if(index>0){
              setUserData([])
              setIndex(1)
            }
            
          }}>
            prev
          </button>
          <button className='bg-amber-400  cursor-pointer active:scale-95 text-sm text-black rounded-xl px-3 py-2 font-semibold'
           onClick={()=>{
             setUserData([])
            setIndex(index+1)
            

           }}>
            next
          </button>
        </div>
    </div>
  )
}

export default App

