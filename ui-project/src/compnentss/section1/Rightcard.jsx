
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80  rounded-4xl'>
        <img className='h-full w-98 object-cover' src={props.img} alt="" />
        <Rightcardcontent color={props.color} id={props.id} tag={props.tag} />
      
    </div>)
  // )<div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
  //           <img className='h-full w-full object-cover' src={props.img} alt="" />
  //           <Rightcardcontent color={props.color} id={props.id} tag={props.tag} />
  //       </div>
        
}

export default Rightcard
