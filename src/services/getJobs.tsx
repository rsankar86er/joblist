import { API_URL } from '../constants/constants';
import axios from 'axios';

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}joblists`);
        return response;
    } catch(error) {
        console.log(error);
    }
}