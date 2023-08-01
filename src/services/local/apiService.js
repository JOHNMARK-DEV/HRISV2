import axios from 'axios';
axios.defaults.referrerPolicy = '';

var parentPath = 'http://127.0.0.1:8000/api'
const apiService = axios.create({
    baseURL: parentPath, // Your API base URL
    headers: {  
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
        'Content-Type': 'application/json'
    },
});


export default apiService;


