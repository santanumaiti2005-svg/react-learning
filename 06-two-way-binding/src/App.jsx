import React, { useState } from 'react'

const App = () => {
  const [val,setVal]=useState("")
  return (
    <div>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        console.log("submitted by ",val);
        
      }}
      action="">
        <input
        value={val}
        onChange={(e)=>{
          setVal(e.target.value)
        }}
        type="text" />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
