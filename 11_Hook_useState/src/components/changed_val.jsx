import { useState } from "react"
const Changed_val = () => {
    const [num, setnum] = useState(10)
    let change=()=>{
        setnum(90)
        console.log(num);//first this will will give 10 still after changing the value and showing the changed value in website because setnum in useState hook is a "asynchronous" function.

        //console.log turant fat se chal jata hai to wo pahale purana value show karta hai magar UI thora late mai respond karta hai wrt console.lo to wo new value hi dikhata hai.
        
        //continue from 5:40:00 in lecture 
    }
    return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default Changed_val
