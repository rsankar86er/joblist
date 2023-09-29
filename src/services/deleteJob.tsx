import { API_URL } from '../constants/constants';
import axios from 'axios';
import { setAlert, setAlertmeesage, setAlerttype } from "../redux/createJobReducer";
import { store } from '../redux/store';

export const deleteJob = async (id:any) => {
    try {
        const response = await axios.delete(`${API_URL}joblists/${id}`);
        if(response){
            store.dispatch(setAlert(true));
            store.dispatch(setAlertmeesage('Job has been deleted'));
            store.dispatch(setAlerttype('error'));
        }
    } catch(error) {
        console.log(error);
    }
}