import React from 'react'
import  { useState } from 'react'

const UseStateProject = () => {
      const [num,setNum]=useState(0)
      const [val,setVal]=useState(0)
  return (
   <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Increasing</button>
      <button onClick={()=>{
        setNum(num-1)
      }}>Decreasing</button>
      <button onClick={()=>{
        setNum(Number(num+val))
      }}>set by enter amount</button>
      <br />
      <input 
        value={val}      
      onChange={(e)=>{
        setVal(Number(e.target.value))
        console.log(Number(e.target.value));
        
      }}
      type="text" />
    </div>
  )
}

export default UseStateProject
