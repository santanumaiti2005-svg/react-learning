import { useState } from "react"


const App = () => {
  const [title,setTitle]=useState("")
  const [details,setDetails]=useState("")
  const [task,setTask]= useState([])
  const deleteNotes=(i)=>{
     
      // const newArray=task.filter((e,idx)=>{
      //   return idx !=i
      // })

      const newArray=[...task]
      newArray.splice(i,1)
      setTask(newArray)
      console.log(i+1 , "no. task is deleted");
      
      
      

      
      
  }
  return (
    <div className='w-full bg-black lg:h-screen h-screen text-white  flex flex-col lg:flex-row'>
      <form 
      onSubmit={(e)=>{
            e.preventDefault()
            console.log("my task");
            const copyTask=[...task]
            copyTask.push({"title":title,"details":details})
            setTask(copyTask)
            console.log(copyTask);
            setTitle("")
            setDetails("")
      }}  
      action="" className='flex flex-col p-10 lg:w-1/2 gap-10 h-120'>
        <h1 className="font-bold text-2xl uppercase">Add your notes</h1>
        <input
        value={title} 
        type="text" placeholder='enter notes heading' className="border-2 p-5 border-white outline-none text-white"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}  
        />
        <textarea 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        name="" id="" placeholder='writing details' className="h-40 border-2 p-3 border-white text-white outline-none"></textarea>
        <button className="border-2 p-5 uppercase font-medium bg-white text-black active:scale-95 hover:text-white hover:bg-black outline-none">add notes</button>

      </form>
          <div className="px-10 py-0 lg:p-10 lg:border-l-4 lg:w-1/2  lg:h-full ">
          <h1 className="font-bold text-2xl uppercase">your notes</h1>
          <div className="flex lg:flex-wrap gap-5 lg:overflow-y-auto  overflow-x-auto w-full lg:max-h-170 lg:py-6 py-2" id="card">
            {
              task.length === 0 ? (
                <h1 className="uppercase mt-5">no task is created yet , create a task first</h1>
              )
              :
              (
              task.map((e,i)=>{
                return  <div  key={i} id="cards" className="bg-white   w-50 h-60  rounded-4xl shrink-0 text-black  p-4   outline-none flex flex-col justify-between items-center">
          <div className="w-full flex flex-col gap-2">
                  <h1 className="border-b-2 w-full text-center pb-2 uppercase font-semibold   break-words  ">{e.title}</h1>
                  <p className="text-gray-500 wrap-break-word  mt-5 leading-tight text-xs font-semibold">{e.details}</p>
          </div>
                  <button 
                  onClick={()=>{
                    deleteNotes(i)
                  }}
                  className="uppercase bg-red-500 text-white py-2 px-5 rounded   text-center  hover:bg-black hover:text-white mt-2">delete</button>
          </div>
              }))
            }
         
 
          
      

          </div>
    </div>
  
    </div>
  )
}

export default App
