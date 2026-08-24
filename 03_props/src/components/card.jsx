
const Card = (props) => {
    return (
      <div className="card">
        <img src={props.img} alt=""></img>
      <h1>{props.user},{props.age}</h1> getting a arguement from file app.jsx while calling the function card in app.jsx 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
      </div>
  )
}

export default Card
