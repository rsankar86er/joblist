const StepperForm = ()=>{
    return(
        <div className="container flex justify-center">
            <div className="card m-5 form-size p-8">
                {/* Form Step - 1 */}
                <div className="row flex justify-between">
                    <h1 className="text-2xl">Create a job</h1>
                    <span className="text-base font-medium">Step 1</span>
                </div>
                <div className="row">
                    <label className="block w-full">Job Title</label>
                    <input type="text" className="block w-full rounded-md grey-border p-1 placeholder:placeholder" placeholder=""></input>
                </div>
                <div className="row pt-6 pb-1">
                    <label className="block w-full">Experience</label>
                </div>
                <div className="row flex">
                    <div className="grow">
                        <input type="text" className="block w-full rounded-md grey-border p-1 placeholder:placeholder" placeholder=""></input>
                    </div>
                    <div className="grow">
                        <input type="text" className="block w-full rounded-md grey-border p-1 placeholder:placeholder"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepperForm;