import { createSlice } from '@reduxjs/toolkit';
import { CREATE_JOB } from '../constants/constants';

export const createjob = createSlice({ 
    name: 'createjob', 
    initialState: {
        job: CREATE_JOB,
        alert:false,
        alertmessage:'',
        alerttype:'',
    },
    reducers: {
        setJob: (state:any, action) => {
            state.job = action.payload;
        },
        setAlert: (state:any, action) => {
            state.alert = action.payload;
        },
        setAlertmeesage: (state:any, action) => {
            state.alertmessage = action.payload;
        },
        setAlerttype: (state:any, action) => {
            state.alerttype = action.payload;
        },
    }
});

export const { setJob, setAlert, setAlertmeesage, setAlerttype } = createjob.actions;
export default createjob.reducer; 