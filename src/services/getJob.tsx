import { API_URL } from '../constants/constants';
import axios from 'axios';
import { setJob } from "../redux/createJobReducer";
import { store } from '../redux/store';

export const getJob = async (id:any) => {
    try {
        const response = await axios.get(`${API_URL}joblists/${id}`);
        if(response){
            store.dispatch(setJob(response.data));
        }
    } catch(error) {
        console.log(error);
    }
}