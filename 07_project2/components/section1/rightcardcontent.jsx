import {Arrowright} from "./arrow"

const Rightcardcontent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center">{props.id+1}</h2>
        <div>
            <p className="text-lg leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, impedit sunt beatae veniam in neque.</p>
            <div className="flex items-center">
                <button className="bg-blue-700 text-white font-medium px-8 py-3 rounded-full ">{props.tag}</button>
                <button className="bg-blue-700 text-white font-medium px-4 py-3 rounded-full "><Arrowright /></button>
            </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
