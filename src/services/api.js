import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.1.43:3000/"
    // baseURL: "http://192.168.0.6:3000/"
});

export default api;