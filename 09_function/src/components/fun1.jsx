const Fun1=()=>{
    const pagescroll=(elem)=>{
        console.log(`page scrolling with speed ${elem}`);
        if(elem>0){
            console.log("scrolling down");
        }
        else{
            console.log("scrolling up");
        }
    }
    return(
        <div onWheel={(elem)=>{
            pagescroll(elem.deltaY)//deltaY tells you the vertical scrolling direction and distance of the mouse wheel.
        }
            
        }>
            <div className="page1"></div>
            <div className="page2"></div>
            <div className="page3"></div>
        </div>
    )
}
export default Fun1