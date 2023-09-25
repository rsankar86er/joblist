import netfliximg from "../assets/images/netflix_logo.png";

const JobCard = ()=>{
    return(
        <div className="card m-5 px-6 py-4 flex items-start">
            <img src={netfliximg}/>
            <div>
                <h1>UX UI Designer</h1>
                <p>Great Vibes - Information Technology</p>
                <p>Chennai, Tamilnadu, India (In-office)</p>
                <p>Part-Time (9.00 am - 5.00 pm IST)</p>
                <p>Experience (1 - 2 years)</p>
                <p>INR (₹) 30,000 - 60,000 / Month</p>
                <p>51-200 employees</p>
            </div>
        </div>
    )
} 

export default JobCard;