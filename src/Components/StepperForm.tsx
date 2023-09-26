import { useState } from "react";

const StepperForm = ()=>{
    const [step, setStep] = useState(1);

    const onHandleNext = ()=>{
        setStep(step+1);
    }
    
    const FormStep = (step:any)=>{
        switch(step){
                    case 1: return(
                        <div className="step1">
                            <div className="row flex justify-between">
                                <h1 className="text-2xl">Create a job</h1>
                                <span className="text-base font-medium">Step 1</span>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Job Title</label>
                                <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. UX UI Designer"></input>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Company Name</label>
                                <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. Google"></input>
                            </div>
                            <div className="row pt-6 pb-1">
                                <label className="block w-full text-sm font-medium">Industry</label>
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
                        <label className="block w-full text-sm font-medium">Total employees</label>
                        <input type="text" className="block w-full text-sm rounded-md grey-border p-1 placeholder:placeholder focus:grey-border" placeholder="ex. 100"></input>
                    </div>
                    <div className="row pt-6 pb-1">
                        <label className="block w-full text-sm font-medium">Apply type</label>
                        <div className="mt-2">
                            <input type="radio" className="mr-1"/><span className="placeholder mr-4 text-sm">Quick apply</span>
                            <input type="radio" className="mr-1"/><span className="placeholder text-sm">External apply</span>
                        </div>
                    </div>
                </div>)
                break;
                    }
    }
    
    return(
        <div className="flex justify-center">
            <div className="card m-5 form-size p-8 grid content-between">
                {/* Form Step - 1 */}
                {
                    FormStep(step)
                }
                <div className="block flex justify-end">
                    {
                    step === 1 ? <button className="btn-primary text-md font-medium text-white py-2 px-4 rounded" onClick={onHandleNext}>Next</button>:
                    <button className="btn-primary text-md font-medium text-white py-2 px-4 rounded">Save</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default StepperForm;