import axios from "axios";

const instance = axios.create({
        baseURL: 'http://127.0.0.1:5000/api',
        timeout: 8000,
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            withCredentials: true,
        }
})

export default instance