//http://localhost:5173/
//2:13:51 lecture
//start-> npm run dev
//stop->ctrl+c
import Card from './components/card.jsx'
import User from './components/user.jsx'

const App=()=>{
  const arr=[{name:"nigga",age:21},{name:"mf",age:24},{name:"gigolo",age:25},{name:"suuu",age:30}]
  return(
    <div className="parent">
      <Card />
      {arr.map(function(elem){
        return <User name={elem}/>
      })}
      
    </div>
    )
}
export default App
