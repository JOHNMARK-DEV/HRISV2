import axios from 'axios';
axios.defaults.referrerPolicy = '';

var parentPath = 'http://127.0.0.1:8000/api'
const apiService = axios.create({
    baseURL: parentPath, // Your API base URL
    headers: {  
        'Access-Control-Allow-Origin': 'http://185.199.108.153:443',
        'Content-Type': 'application/json',
        // "Permissions-Policy": "interest-cohort=()"
    },
});


export default apiService;


