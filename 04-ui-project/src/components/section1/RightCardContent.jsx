
import ArrowButton from './ArrowButton'

const RightCardContent = (props) => {
console.log(props);

  
  return (
      <div className='absolute top-0 left-0 w-full h-full  flex flex-col justify-between p-5'>
        <h1 className='bg-white text-black rounded-full w-10 h-10 flex justify-center items-center font-medium'>{props.id + 1}</h1>
        <div className='flex flex-col gap-20 text-white'>
<p className='font-medium leading-relaxed text-xl '>{props.user.intro}</p> 
<ArrowButton tag={props.user.tag}/>
        </div>
      </div>
  )
}

export default RightCardContent
