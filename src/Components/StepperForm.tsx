import { useState } from "react";
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

const CreateJobSchema = Yup.object().shape({
    jobtitle: Yup.string().required('Required'),
    companyname: Yup.string().required('Required'),
});

const formInitialValues = {jobtitle:'',companyname:''};

const StepperForm = ()=>{
    const [step, setStep] = useState(1);

    const onHandleNext = ()=>{
        setStep(step+1);
    }
    const onHandleBack = ()=>{
        setStep(step-1);
    }
    
    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: CreateJobSchema,
        onSubmit: async (values) => {
            console.log(values);
        }
    });
    console.log(formik.errors, formik.touched);
    const FormStep = (step:any)=>{
        switch(step){
                    case 1: return(
                        <form className='CreateRoleForm' onSubmit={formik.handleSubmit}>
                        <div className="step1">
                            <div className="row flex justify-between">
                                <h1 className="text-2xl">Create a job</h1>
                                <span className="text-base font-medium">Step 1</span>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Job Title <span className="text-red">*</span></label>
                                <input type="text" id="jobtitle" name="jobtitle" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.jobtitle} className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. UX UI Designer"></input>
                                {formik.errors.jobtitle && formik.touched.jobtitle ? ( <div>{formik.errors.jobtitle}</div>) : null}
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Company Name <span className="text-red">*</span></label>
                                <input type="text" id="companyname" name="companyname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.companyname} className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. Google"></input>
                                {formik.errors.companyname && formik.touched.companyname ? ( <div>{formik.errors.companyname}</div>) : null}
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Industry <span className="text-red">*</span></label>
                                <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. Information Technology"></input>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Location</label>
                            </div>
                            <div className="row flex">
                                <div className="grow mr-6">
                                    <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="ex. Chennai"></input>
                                </div>
                                <div className="grow">
                                    <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="ex. In-office"></input>
                                </div>
                            </div>
                        </div>
                        </form>
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
                            <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="Minimum"></input>
                        </div>
                        <div className="grow">
                            <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="Maximum"></input>
                        </div>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Salary</label>
                    </div>
                    <div className="row flex">
                        <div className="grow mr-6">
                            <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="Minimum"></input>
                        </div>
                        <div className="grow">
                            <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder" placeholder="Maximum"></input>
                        </div>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Time</label>
                        <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. Full-Time (9AM to 6PM IST)"></input>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Total employees</label>
                        <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. 100"></input>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Apply type</label>
                        <div className="mt-2">
                            <input type="radio" checked className="mr-1" value={1}/><span className="placeholder mr-4 text-sm">Quick apply</span>
                            <input type="radio" className="mr-1" value={2}/><span className="placeholder text-sm">External apply</span>
                        </div>
                    </div>
                </div>)
                break;
                    }
    }
    
    return(
        <div className="flex justify-center">
            <div className="card m-5 form-size p-8 grid content-between">
                {
                    FormStep(step)
                }
                <div className="block w-full flex justify-end">
                    {step === 1 ? <button className="btn-primary text-md font-medium text-white py-2 px-4 rounded" onClick={onHandleNext}>Next</button>:
                    <div className="block w-full flex justify-between">
                        <button className="btn-secondary text-md font-medium text-blue py-2 px-4 rounded" onClick={onHandleBack}>Back</button>
                        <button className="btn-primary text-md font-medium text-white py-2 px-4 rounded">Save</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default StepperForm;