import { configureStore } from '@reduxjs/toolkit'
import createJobReducer from './createJobReducer';
export const store =  configureStore({ 
    reducer: {
        createjob: createJobReducer,
    }
});