
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  // console.log(props.users);
  
  return (
    <div className='flex  items-center h-[90vh]  px-18 gap-10 py-10'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
