import axios from 'axios';

const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

export default apiClient;
