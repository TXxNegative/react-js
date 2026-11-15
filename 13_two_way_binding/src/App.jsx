//we use two way data binding for insert element in input section . we cant direct insert data into the server so we need to go through react and interact with insert section to insert a data.

//input value -> react[title,settitle] -> input(server) storage
import { useState } from "react"

const App=()=>{
  const [title,settitle] = useState('')

  const submithandler=(e)=>{
    e.preventDefault()
    console.log("form submitted by",title);
    settitle('')// use this to reset the input box to empty string after submit the form.
  }

  return(
    <div>
      <form onSubmit={(e)=>
        {submithandler(e)}}>
        <input type="text" placeholder="enter your name" 
        value={title}
        onChange={(e)=>{settitle(e.target.value);
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
