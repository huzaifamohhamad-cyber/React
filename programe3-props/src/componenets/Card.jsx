import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
     <div className="card">
           <img src="" alt="" />
            <h1>{props.usr} , {props.age}</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aperiam!</p>
           <button>View Profile</button>
          
          </div>
  )
}

export default Card
