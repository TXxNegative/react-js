import Navbar from "./navbar"
import Page1content from "./page1content"

const Section1 = (props) => {
  return (
    <div className="h-screen w-half m-2" >
      <Navbar />
      <Page1content users={props.users} />
    </div>
  )
}

export default Section1
