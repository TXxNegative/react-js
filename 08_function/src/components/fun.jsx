const Fun = ()=>{
    function btnclick(){
        console.log("clicked on this button")
    }
    function doubleclick(){
        console.log("double clicked on this button")
    }
    function mouseenter(){
        console.log("mouse enter")
    }
    function inputchange(e){
        console.log("user is typing")
        console.log("e will give event that occures detail:");
        console.log(e);
        //console.log("e.target will return the html tag on that which we use the event handler:");
        //console.log(e.target);
        console.log(e.target.value);
    }
  
    return (
        <div>
        <h3>hello, guys</h3>
        <button onMouseEnter={mouseenter} onClick={btnclick}>click here</button>
        <button onDoubleClick={doubleclick}>double click here</button>
        <button onClick={()=>{
            console.log("function inside button tag");
        }}>function</button>

        <input onChange={inputchange} type="text" placeholder="enter name"></input>
        </div>
    )
}
export default Fun;