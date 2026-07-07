const App = () => {
  const formHandle=(e)=>{
    e.preventDefault()
    console.log("submitted");
  }
  return (
    <div>
      <form 
      onSubmit={(e)=>{
        formHandle(e)
      }}  
      action="">
        <input type="text" name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
