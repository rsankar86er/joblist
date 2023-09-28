import { createSlice } from '@reduxjs/toolkit';

export const createjob = createSlice({ 
    name: 'createjob', 
    initialState: {
        job: {jobtitle:'',companyname:'', industry:'', location:'', remote:'', minexp:'', maxexp:'', minsalary:'', maxsalary:'', time:'', employees:'', applytype:1},
    },
    reducers: {
        setJob: (state:any, action) => {
            state.job = action.payload;
        },
    }
});

export const { setJob } = createjob.actions;
export default createjob.reducer; 