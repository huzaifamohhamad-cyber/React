import React from 'react'
import Rightcard from './Rightcard'
import 'remixicon/fonts/remixicon.css'

const Rightcontent = (props) => {
  console.log(props.users.color)
  return (
    // <div id='right' className='h-full  flex rounded-4xl  overflow-hidden flex-nowrap gap-10 p-6 w-3/3'>
    //     {props.users.map(function(elem,idx){

    //       return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
    //     })}
    // </div>
    <div id='right' className='h-full flex rounded-4xl overflow-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.users.map(function(elem,idx){

          return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default Rightcontent
