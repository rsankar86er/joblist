import { API_URL } from '../constants/constants';
import axios from 'axios';
import { setAlert, setAlertmeesage, setAlerttype } from "../redux/createJobReducer";
import { store } from '../redux/store';

export const editJob = async (id:any,formdata:any) => {
    try {
        const response = await axios.put(`${API_URL}joblists/${id}`,formdata);
        if(response){
            store.dispatch(setAlert(true));
            store.dispatch(setAlertmeesage('Job has been successfully edited'));
            store.dispatch(setAlerttype('success'));
        }
    } catch(error) {
        console.log(error);
    }
}