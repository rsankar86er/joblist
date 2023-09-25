import { API_URL } from '../constants/constants';

export const getJobs = async () => {
    const response = await fetch(`${API_URL}/joblists`);
    const jobs = await response.json();
    
    return jobs;
}