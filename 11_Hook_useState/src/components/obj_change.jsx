import { useState } from "react"
const Obj_change = () => {
    const [num,newnum] = useState({user:'abhi',age:22})
    /*const arrfun=()=>{
        const setnum={...num}
        setnum.user="antara"
        setnum.age=21
        newnum(setnum)
    }*/

    const arrfun=()=>{
        newnum(prev=>({...prev,age:50}))
    }

    return (
        <div>
            <h1>{num.user},{num.age}</h1>
            <button onClick={arrfun}>click</button>
        </div>
    )
}

export default Obj_change
