import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { setJob } from "../redux/createJobReducer";
import { createJob } from "../services/createJob";

const CreateJobSchema = Yup.object().shape({
    jobtitle: Yup.string().required('Job Title is required'),
    companyname: Yup.string().required('Company Name is required'),
    industry: Yup.string().required('Industry is required'),
});

const formInitialValues = {jobtitle:'',companyname:'', industry:'', location:'', remote:'', minexp:'', maxexp:'', minsalary:'', maxsalary:'', time:'', employees:'', applytype:'1'};

const StepperForm = ()=>{
    const [step, setStep] = useState(1);

    const dispatch = useDispatch();

    const onHandleBack = ()=>{
        setStep(step-1);
    }
    
    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: CreateJobSchema, 
        onSubmit: async (values) => {
            dispatch(setJob(values));
            step === 1 && setStep(step+1);
            step === 2 && await createJob(values);
        }
    });

    const jobfield = useSelector((state:any)=>state.createjob.job);

    useEffect(()=>{
        Object.entries(jobfield).forEach(([key, value]) => {
            formik.setFieldValue(key, value);
        })
    },[step]);

    const FormStep = (step:any)=>{
        switch(step){
                    case 1: return(
                        <div className="step1">
                            <div className="row flex justify-between">
                                <h1 className="text-2xl">Create a job</h1>
                                <span className="text-base font-medium">Step 1</span>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Job Title <span className="text-red">*</span></label>
                                <input type="text" id="jobtitle" name="jobtitle" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.jobtitle} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder focus:grey-border" placeholder="ex. UX UI Designer"></input>
                                {formik.errors.jobtitle && formik.touched.jobtitle ? ( <div className="text-sm font-normal text-red ml-1 mt-1">{formik.errors.jobtitle}</div>) : null}
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Company Name <span className="text-red">*</span></label>
                                <input type="text" id="companyname" name="companyname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.companyname} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder focus:grey-border" placeholder="ex. Google"></input>
                                {formik.errors.companyname && formik.touched.companyname ? ( <div className="text-sm font-normal text-red ml-1 mt-1">{formik.errors.companyname}</div>) : null}
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Industry <span className="text-red">*</span></label>
                                <input type="text" id="industry" name="industry" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.industry} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder focus:grey-border" placeholder="ex. Information Technology"></input>
                                {formik.errors.industry && formik.touched.industry ? ( <div className="text-sm font-normal text-red ml-1 mt-1">{formik.errors.industry}</div>) : null}
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Location</label>
                            </div>
                            <div className="row flex">
                                <div className="grow mr-6">
                                    <input type="text" id="location" name="location" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.location} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="ex. Chennai"></input>
                                </div>
                                <div className="grow">
                                    <input type="text" id="remote" name="remote" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.remote} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="ex. In-office"></input>
                                </div>
                            </div>
                        </div>
                    )
                    break;
                    case 2: return(
                <div className="step2">
                    <div className="row flex justify-between">
                        <h1 className="text-2xl">Create a job</h1>
                        <span className="text-base font-medium">Step 2</span>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Experience</label>
                    </div>
                    <div className="row flex">
                        <div className="grow mr-6">
                            <input type="text" id="minexp" name="minexp" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.minexp} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="Minimum"></input>
                        </div>
                        <div className="grow">
                            <input type="text" id="maxexp" name="maxexp" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.maxexp} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="Maximum"></input>
                        </div>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Salary</label>
                    </div>
                    <div className="row flex">
                        <div className="grow mr-6">
                            <input type="text" id="minsalary" name="minsalary" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.minsalary} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="Minimum"></input>
                        </div>
                        <div className="grow">
                            <input type="text" id="maxsalary" name="maxsalary" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.maxsalary} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder" placeholder="Maximum"></input>
                        </div>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Time</label>
                        <input type="text" id="time" name="time" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.time} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder focus:grey-border" placeholder="ex. Full-Time (9AM to 6PM IST)"></input>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Total employees</label>
                        <input type="text" id="employees" name="employees" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.employees} className="block w-full text-sm rounded-md grey-border px-1 py-2 placeholder:placeholder focus:grey-border" placeholder="ex. 100"></input>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Apply type</label>
                        <div className="mt-2">
                            <input type="radio" name="applytype" checked={formik.values.applytype === '1'} onChange={formik.handleChange} className="mr-1" value={'1'}/><span className="placeholder mr-4 text-sm">Quick apply</span>
                            <input type="radio" name="applytype" checked={formik.values.applytype === '2'} onChange={formik.handleChange} className="mr-1" value={'2'}/><span className="placeholder text-sm">External apply</span>
                        </div>
                    </div>
                </div>)
                break;
                    }
    }
    
    return(
    <>
        <div className="flex justify-center">
            <div className="card m-5 form-size p-8 grid content-between">
            <form className='CreateRoleForm' onSubmit={formik.handleSubmit}>
                {
                    FormStep(step)
                }
                <div className="w-full flex justify-end pt-6">
                    {step === 1 ? <button type="submit" className="btn-primary text-md font-medium text-white py-2 px-4 rounded">Next</button>:
                    <div className="w-full flex justify-between">
                        <button type="button" className="btn-secondary text-md font-medium text-blue py-2 px-4 rounded" onClick={onHandleBack}>Back</button>
                        <button type="submit" className="btn-primary text-md font-medium text-white py-2 px-4 rounded">Save</button>
                    </div>
                    }
                </div>
            </form>
            </div>
        </div>
    </>
    )
}
export default StepperForm;
