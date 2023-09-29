import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { setJob } from "../redux/createJobReducer";
import { CREATE_JOB } from '../constants/constants';

const Header = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const alert = useSelector((state:any)=>state.createjob.alert);
    const alertmessage = useSelector((state:any)=>state.createjob.alertmessage);
    const alerttype = useSelector((state:any)=>state.createjob.alerttype);

    useEffect(()=>{
        alert && navigate('/');
    },[alert, navigate]);

    const handleClick = async ()=>{
        await dispatch(setJob(CREATE_JOB));
        await navigate('/createjob');
    }

    return (
        <>
        {alert && <Alert alertmessage={alertmessage} alerttype={alerttype}></Alert>}
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="text-xl font-bold">Job List</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="btn-primary text-white text-sm font-medium py-2 px-4 rounded" onClick={handleClick}>Create Job</button>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;
