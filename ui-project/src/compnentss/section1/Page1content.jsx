import React from 'react'
import Leftcontenet from './Leftcontenet'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
     <Leftcontenet />
     <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content
