import { createSlice } from '@reduxjs/toolkit';

export const createjob = createSlice({ 
    name: 'createjob', 
    initialState: {
        job: {jobtitle:'',companyname:'', industry:'', location:'', remote:'', minexp:'', maxexp:'', minsalary:'', maxsalary:'', time:'', employees:'', applytype:'1'},
        alert:false
    },
    reducers: {
        setJob: (state:any, action) => {
            state.job = action.payload;
        },
        setAlert: (state:any, action) => {
            state.alert = action.payload;
        },
    }
});

export const { setJob, setAlert } = createjob.actions;
export default createjob.reducer; 