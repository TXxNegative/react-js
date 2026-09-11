import Rightcard from "./rightcard"


const Rightcontent = (props) => {
  return (
    <div id="scrollbar" className="h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-5 rounded-4xl">
      {props.users.map(function(elem,idx){
        return <Rightcard id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
