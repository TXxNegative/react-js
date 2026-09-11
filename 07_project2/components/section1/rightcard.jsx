import Rightcardcontent from "./rightcardcontent"

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 bg-amber-600 rounded-4xl overflow-hidden relative">
      <img src={props.img} className="h-full w-full object-cover"></img>
      <Rightcardcontent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard
