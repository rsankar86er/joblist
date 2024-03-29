import { API_URL } from '../constants/constants';
import axios from 'axios';
import { setAlert, setAlertmeesage, setAlerttype } from "../redux/createJobReducer";
import { store } from '../redux/store';

export const createJob = async (formdata:any) => {
    try {
        const response = await axios.post(`${API_URL}joblists`,formdata);
        if(response.statusText === 'Created'){
            store.dispatch(setAlert(true));
            store.dispatch(setAlertmeesage('Job has been successfully created'));
            store.dispatch(setAlerttype('success'));
        }
    } catch(error) {
        console.log(error);
    }
}