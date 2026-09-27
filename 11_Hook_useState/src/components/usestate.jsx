import { useState } from 'react'

const Usestate=()=>{
    const [num, newNum] = useState(22)//hook-useState
    const [name, newName] = useState("abhijit")


    //num value hum usestate mai pass kar rahe hai, aur baad me newNum function ko new arguement pass karke num ka value hum website mai change kar rahe hai.
  
    //hum website ka value direct change nahi kar sakte , hume react ko pahale bolna paega change ke liye fir react website ka value jo show kar raha hai wo change karega. 

    //hum nowmal event listner ke through bhi value of num ko change kar sakte hai magar wo bas storage ma hi change hota na ki website mai show hota. is liye hum useState use kar rahe hai.

    // num ka value hum yaha par usestae(value) se assign kar rahe hai jo ki currently website mai show ho raha hai, aur hum btton ke on click par newnum function jo ki usestate snipet  ke andar ha use call kar rahe hai jo ki num ki value change kar raha hai on both storage aur website mai bhi show kar raha hai, par yaha bhi thora exception hai , changed_val.jsx file mai check karein

    //newnum yaha eak function hai jisko hum value pass kar rahe hai , yehi value chaged value hai

    //usestate ka value string bhi ho sakta hai 
  
    function change(){
    newNum(21);
    newName("antara")
    }
    
    return( 
     <div>
      <h1>age of the person is {num}</h1>
      <h1>name of the person is {name}</h1>
      <button onClick={change}>click</button>
     </div>
    )
}
export default Usestate