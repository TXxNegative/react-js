import { Bookmark } from 'lucide-react'
const Card=()=>{
    return(<div className="card">
        <div>
          <div className="top">
            <img src="https://i.pinimg.com/736x/39/62/49/3962495e152637c8f24a51903f48a837.jpg" alt=""></img>
            <button>save <Bookmark size={12}/> </button>
          </div>  
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>junior UI/UX designer</h2>
          <div className='tag'>
            <h4>part Timer</h4>
            <h4>junior level</h4>
          </div>
        </div>
      </div>
        
    <div className="bottom">
          
        <div>
            <h3>50$/hr</h3>
            <p>Mumbai, India</p>
        </div>
        <button>Apply now</button>
          
    </div>
</div>)
}

export default Card