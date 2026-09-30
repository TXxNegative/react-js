import { useState } from "react"

const Arr_change = () => {
    const [num, setnew] = useState([10,11,12])
    
    const arrc=()=>{
        const newnum=[...num]//...obj will copy the object
        newnum.push(99)
        setnew(newnum)
    }
    
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={arrc}>click</button>
        </div>
    )
}

export default Arr_change
