import { useState } from "react"
const Counter = () => {
    const [num, newnum] = useState(0)

    function inc(){
        let n = num+1
        newnum(n)
    }
    function dec(){
        let n=num-1
        newnum(n)
    }
    
    return (
    <div className="count">
        <h1>{num}</h1>
        <button onClick={inc}>increase</button>
        <button onClick={dec}>decrease</button>
    </div>
    )
}

export default Counter
