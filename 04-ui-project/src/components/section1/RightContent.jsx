
import RightCard from './RightCard'

const RightContent = ({users}) => {
  console.log(users);
  
  
  return (
    <div className=' w-2/3 h-full p-6  flex gap-5 overflow-x-auto flex-nowrap ' id='right'>
      {
        users.map((e,i)=>{
          return <RightCard key={i} id={i} user={e}/>
        })
      }

    </div>
  )
}

export default RightContent
