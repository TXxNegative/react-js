//http://localhost:5173/
//2:13:51 lecture
//start-> npm run dev
//stop->ctrl+c
import Card from './components/card.jsx'

const App=()=>{
  const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    posted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/d6/11/db/d611dbe2438856ee50d1e6fbb6d83c9a.jpg",
    companyName: "Microsoft",
    posted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/a7/ec/71/a7ec71778b0daef3e7b8a3ef2503f1b8.jpg",
    companyName: "Amazon",
    posted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    posted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    posted: "6 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    posted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    posted: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/df/2d/01/df2d01726d137ee161c12fdc023e48ab.jpg",
    companyName: "Oracle",
    posted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/28/fd/ce/28fdce60d1ebeba84cffdc214f786f42.jpg",
    companyName: "Adobe",
    posted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/c5/93/1e/c5931ea7987117fce107f11e43726029.jpg",
    companyName: "IBM",
    posted: "2 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Bangalore, India"
  }
];
  return(
    <div className="parent">
      {jobOpenings.map((bio,inx)=>{
        return (
        <div key={inx}>
          <Card 
            brandLogo={bio.brandLogo} 
            companyName={bio.companyName}
            posted={bio.posted}
            post={bio.post}
            tag1={bio.tag1}
            tag2={bio.tag2}
            pay={bio.pay}
            location={bio.location} />
        </div>
        )
      })}
    </div>
    )
}
export default App
