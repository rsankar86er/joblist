import { API_URL } from '../constants/constants';
import axios from 'axios';
import { setAlert } from "../redux/createJobReducer";
import { store } from '../redux/store';

export const createJob = async (formdata:any) => {
    try {
        const response = await axios.post(`${API_URL}joblists`,formdata);
        if(response.statusText === 'Created'){
            store.dispatch(setAlert(true));
        }
    } catch(error) {
        console.log(error);
    }
}