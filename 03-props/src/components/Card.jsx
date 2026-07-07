import {Bookmark  } from "lucide-react";

const Card = ({data}) => {
  console.log(data);
  
  
  return (
    <>
  
       <div className="card flex  flex-col  w-70 bg-white h-80 p-4 rounded-3xl ">
          <div className="top flex justify-between items-center w-full ">

       <img src={data.companyLogo} className="h-12 w-12 rounded-full border border-gray-400  object-contain p-1" />
          <Bookmark className="w-7 h-10"/>

        </div>
        <div className="center flex flex-col  gap-1   mt-5">
          <div className="flex gap-1 items-baseline-last">
            <h4 className="text-xl font-medium">{data.companyName}</h4>
            <p className="text-xs font-extralight">{data.time}</p>
          </div>
          <div className="text-xl font-bold">
            <h1>{data.post}</h1>
            </div>
          <div className="">
            <div className="flex gap-1 items-center font-semibold">
              <h5 className="border-none bg-gray-300 p-1 rounded-lg w-auto">{data.tag1}</h5>
            <h5 className="border-none bg-gray-300 p-1 rounded-lg w-auto">{data.tag2}</h5>
            </div>
          </div>
        </div>
         <div className=" bottom mt-auto border-t border-gray-300  rounded-b-xl">
    <div className="flex justify-between items-center px-4 py-2">
      <div>
        <h2 className="font-semibold">{data.salary}</h2>
        <p className="font-light">{data.address}</p>
      </div>
      <button className="bg-black text-white font-semibold rounded-lg px-3 py-1">
        Apply now
      </button>
    </div>
  </div>
        </div>
            </>
  )
}

export default Card
