
import { ArrowRight } from 'lucide-react';

const ArrowButton = (props) => {
  return (
  <div >
<button  className='bg-blue-600 py-2 px-3 text-center rounded-full text-white w-40 flex justify-between hover:bg-blue-800'>{props.tag} <ArrowRight /> </button>
</div>
  )
}

export default ArrowButton
