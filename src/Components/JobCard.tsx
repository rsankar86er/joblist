import netfliximg from "../assets/images/netflix_logo.png";

const JobCard = ({job}:any)=>{
    return(
        <div className="card card-size px-6 py-4 flex items-start">
            <img alt="netflix logo" src={netfliximg}/>
            <div className="pl-2">
                <h1 className="text-2xl">{job.jobtitle}</h1>
                <p>{job.companyname} - {job.industry}</p>
                <p className="placeholder">{job.location} ({job.remote})</p>
                <p className="pt-6">{job.time}</p> 
                <p className="pt-2">Experience ({job.minexp} - {job.maxexp} years)</p>
                <p className="pt-2">INR (₹) {job.minsalary} - {job.maxsalary} / Month</p>
                <p className="pt-2">{job.employees} employees</p>
                <p className="pt-6">
                    {
                    job.applytype === '1' ? <button className="btn-primary text-md font-normal text-white py-2 px-4 rounded mr-6">Apply Now</button>
                    :<button className="btn-secondary text-md font-normal text-blue py-2 px-4 rounded">External Apply</button>
                    }
                </p>
            </div>
        </div>
    )
} 

export default JobCard;