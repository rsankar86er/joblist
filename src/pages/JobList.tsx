import { useEffect, useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/getJobs";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs().then((res)=>{setJobs(res)});
    }, []);
    
    return (
        <div>
            <Header></Header>
            {jobs.length > 0 ? jobs.map((job) => {
                return <JobCard key={job['id']} job={job} />
            }) : <div>loading...</div>}
        </div>
    )
}
export default JobList;