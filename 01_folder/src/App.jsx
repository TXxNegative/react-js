//this is the place where we design the web page using js+html

//export const fun=function nigga(){return <h1>hello kj</h1>} -> this kind of exporting function are only possible in normal  JS file not in JSX

//react arrow function export component(rafec)

export const Fun = () => { //In React, component names must start with a capital letter.
  return (
    <div>
      <h1>hahahahahaha</h1>
    </div>
  )
}

const Jio=()=>{
  return <div style={{backgroundColor:"green", height:"100px", width:"100px"}}></div> //this is the style for inline css for react
}
export default Jio

//fragments -> it is a wrapper ,insted of creating another div for storing two different div we just use fragment(<>) insted of parent div . it will be not shown in elements like div show
export const P=()=>{
  return (
    <>
      <div id="dad">
        <h1 id="child1">aniket</h1>
        <h1 id="child2">avinabo</h1>
      </div>
      <div id="chacha"></div>
    </>
  )
}

