import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
    ? 'https://souschefapp-backend-560b3e209edf.herokuapp.com' 
    : 'http://localhost:3001';

axios.defaults.baseURL = baseURL;