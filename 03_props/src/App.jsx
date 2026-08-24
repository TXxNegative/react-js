import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
      <Card user="neha" age={28} img="https://plus.unsplash.com/premium_photo-1786942242705-3c12b595bbbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"/>// props drilling - just giving attribute to the function that we are fetching
      <Card user="antara" age={22} img="https://images.unsplash.com/photo-1787057857057-de005ca82478?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
