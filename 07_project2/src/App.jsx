import Section1 from "../components/section1/section1"
import Section2 from "../components/section2/section2"


const App = () => {
  const users=[
  {
    img:"https://i.pinimg.com/1200x/9f/f8/90/9ff890980caf94c6b85a3477dfba67bc.jpg",
    intro:"",
    tag:"satisfied"
  },
  {
    img:"https://i.pinimg.com/736x/a0/b9/34/a0b934ead09793d2f2b5796ed7d7a7a5.jpg",
    intro:"",
    tag:"underserved"
  },
  {
    img:"https://i.pinimg.com/736x/33/f1/20/33f120af4fd0790abc81b28f3f77e52a.jpg",
    intro:"",
    tag:"underbanked"
  },
  {
    img:"https://i.pinimg.com/1200x/63/b8/3f/63b83f233365493ac81dbb817fc5a00b.jpg",
    intro:"",
    tag:"Casual"
  },
  {
    img:"https://i.pinimg.com/1200x/54/42/0c/54420c3de61f12c08e7dcaaae6e8272f.jpg",
    intro:"",
    tag:"Maverick"
  }
]
  return (
    <div >
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
