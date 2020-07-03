import axios from 'axios';
import { getToken } from './auth';

const server = axios.create({
    baseURL: 'http://localhost:3333'
});

server.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default server;