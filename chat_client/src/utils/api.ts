import axios, { Axios } from "axios";
import { ACCESS } from "./constants";

export const api: Axios = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use(
    (config) => { 
        const accessToken = localStorage.getItem(ACCESS);

        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (config) => { 
        return config; 
    },
    (error) => {
        return Promise.reject(error);
    } 
);
