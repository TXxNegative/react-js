import Leftcontent from "./leftcontent"
import Rightcontent from "./rightcontent"

const Page1content = (props) => {
  return (
    <div className="flex items-center gap-5 h-[90vh] pb-16 pt-6 px-18">
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
