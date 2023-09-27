import netfliximg from "../assets/images/netflix_logo.png";

const JobCard = ({job}:any)=>{
    return(
        <div className="card card-size m-5 px-6 py-4 flex items-start">
            <img alt="netflix logo" src={netfliximg}/>
            <div className="pl-2">
                <h1 className="text-2xl">{job.job_title}</h1>
                <p>{job.company_name} - {job.industry}</p>
                <p className="placeholder">{job.location} ({job.remote_type})</p>
                <p className="pt-6">{job.time}</p> 
                <p className="pt-2">Experience ({job.min_exp} - {job.max_exp} years)</p>
                <p className="pt-2">INR (₹) {job.min_salary} - {job.max_salary} / Month</p>
                <p className="pt-2">{job.total_employee} employees</p>
                <p className="pt-6">
                    {
                    job.apply_type === 1 ? <button className="btn-primary text-md font-normal text-white py-2 px-4 rounded">Apply Now</button>
                    :<button className="btn-secondary text-md font-normal text-blue py-2 px-4 rounded ml-6">External Apply</button>
                    }
                </p>
            </div>
        </div>
    )
} 

export default JobCard;