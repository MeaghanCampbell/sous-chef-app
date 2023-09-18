import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
    ? 'https://souschefapp-backend-560b3e209edf.herokuapp.com' 
    : 'http://localhost:3001';


const instance = axios.create({
    baseURL: baseURL
});
    
export default instance;