
import RightCardContent from './RightCardContent';
const RightCard = ({user,key,id}) => {
// console.log({user,key,id});

  return (
    <div className='h-full w-80 rounded-3xl overflow-hidden relative shrink-0'>
      <img 
      className='h-full w-full object-cover'
      src={user.image} alt="" />
        <RightCardContent  id={id}  user={user}/>
    </div>
  )
}

export default RightCard
