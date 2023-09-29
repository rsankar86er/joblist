import { useEffect, useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/getJobs";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const alert = useSelector((state:any)=>state.createjob.alert);

    useEffect(() => {
        getJobs().then((response)=>{setJobs(response?.data)});
    }, [alert]);
    
    return (
        <>
            <Header></Header>
            <div className="container mx-auto my-5 h-full">
                    {  
                        jobs.length > 0 ? 
                        <div className="grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-4 place-items-center">
                            { jobs.map((job) => { return <JobCard key={job['id']} job={job} /> })}
                        </div> 
                        : <Loader></Loader>
                    }
            </div>
        </>
    )
}
export default JobList;