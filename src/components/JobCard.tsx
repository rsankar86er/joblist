import { useEffect, useState } from "react";
import netfliximg from "../assets/images/netflix_logo.png";
import { deleteJob } from "../services/deleteJob";
import { getJob } from "../services/getJob";
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}:any)=>{

    const [jobId, setJobId] = useState(0);
    const navigate = useNavigate();

    const handleDelete = ()=>{
        setJobId(job.id);
    }
    const handleEdit = (jobId:any)=>{
        getJob(jobId);
        navigate('/createjob');
    }
    useEffect(()=>{
        jobId > 0 && deleteJob(jobId);
    },[jobId]);

    return(
        <div className="card card-size px-6 py-4 flex items-start">
            <img alt="netflix logo" src={netfliximg}/>
            <div className="pl-2 w-full">
                <div className="flex justify-between w-full">
                    <h1 className="text-2xl">{job.jobtitle}</h1>
                    <div className="flex">
                        <span className="icon mr-2 block" onClick={()=>handleEdit(job.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span>
                        <span className="icon block text-red" onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </span>
                    </div>
                </div>
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
