const Fun2=()=>{
    return(
        <div onMouseMove={(elem)=>{
        console.log(elem.clientX,elem.clientY);
        
      }} className="box"></div>
    )
}
export default Fun2