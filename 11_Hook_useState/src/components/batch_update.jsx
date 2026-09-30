import { useState } from "react"

const Batch_update = () => {
    const [num,setnum] = useState(10)
    
    /*
    const clkbutton=()=>{
        setnum(num+1)
        setnum(num+1)
        setnum(num+1)
    }
    */
    //React does not immediately change the state the moment you call setnum. Instead, it batches state updates inside event handlers to prevent the component from re-rendering multiple times for no reason.
    
    //When clkbutton is triggered, it looks at the current value of num for that specific render. If num is currently 10, the variable num is replaced with 10 inside that function call.

    //React sees three requests to update the state to 11. It processes them together, updates the state to 11, and triggers one single re-render.
    
    //so we use updater function
    const clkbutton = () => {
        setnum(prevNum => prevNum + 1) 
        setnum(prevNum => prevNum + 1) 
        setnum(prevNum => prevNum + 1) 
    }


    return (
    <div>
      <h1>{num}</h1>
      <button onClick={clkbutton}>press</button>
    </div>
  )
}

export default Batch_update
